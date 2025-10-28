# ================================
# Stage 1: Build stage
# ================================
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
COPY yarn.lock* ./
COPY pnpm-lock.yaml* ./

RUN corepack enable && \
    if [ -f yarn.lock ]; then yarn install; \
    elif [ -f pnpm-lock.yaml ]; then pnpm install; \
    else npm install; fi

COPY . .

RUN echo "Building project..." && \
    if [ -f yarn.lock ]; then yarn build; \
    elif [ -f pnpm-lock.yaml ]; then pnpm run build; \
    else npm run build; fi


# ================================
# Stage 2: Production stage
# ================================
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
EXPOSE 3000

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/yarn.lock* ./
COPY --from=builder /app/pnpm-lock.yaml* ./

# Copy and detect framework build outputs safely
COPY --from=builder /app /tmp/app

RUN mkdir -p /app && \
    if [ -d "/tmp/app/.next" ]; then cp -r /tmp/app/.next . && cp -r /tmp/app/public ./; fi && \
    if [ -d "/tmp/app/dist" ]; then cp -r /tmp/app/dist ./; fi && \
    if [ -d "/tmp/app/build" ]; then cp -r /tmp/app/build ./; fi && \
    if [ -f "/tmp/app/next.config.mjs" ]; then cp /tmp/app/next.config.mjs ./; fi

RUN corepack enable && \
    if [ -f yarn.lock ]; then yarn install --production --frozen-lockfile; \
    elif [ -f pnpm-lock.yaml ]; then pnpm install --prod --frozen-lockfile; \
    else npm install --omit=dev --legacy-peer-deps; fi

CMD if [ -d ".next" ]; then \
        echo "Starting Next.js..."; npm run start; \
    elif [ -d "dist" ]; then \
        echo "Serving Vite app..."; npx serve -s dist -l 3000; \
    elif [ -d "build" ]; then \
        echo "Serving React app..."; npx serve -s build -l 3000; \
    else \
        echo "No build output found. Exiting."; exit 1; \
    fi
