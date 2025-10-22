"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Trophy } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/teams", label: "Teams" },
  { href: "/matches", label: "Matches" },
  { href: "/players", label: "Players" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight">LOCAL LEAGUE</span>
          </Link>

          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
