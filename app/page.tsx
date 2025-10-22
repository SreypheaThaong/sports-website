import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Calendar, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"
          style={{
            backgroundImage: `url(https://i.pinimg.com/736x/6e/09/1f/6e091fd1dbd666fde564f2dcbebad729.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1
            className="text-7xl md:text-8xl font-bold tracking-tighter mb-6"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            GAME ON
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Follow your favorite teams, track live matches, and celebrate the athletes making it happen
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg h-12 px-8" asChild>
              <Link href="/matches">View Matches</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-12 px-8 bg-transparent" asChild>
              <Link href="/teams">Browse Teams</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-border">
              <CardContent className="pt-6 text-center">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">12</div>
                <div className="text-muted-foreground">Active Teams</div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardContent className="pt-6 text-center">
                <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">48</div>
                <div className="text-muted-foreground">Matches This Season</div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardContent className="pt-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">156</div>
                <div className="text-muted-foreground">Registered Players</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center" style={{ fontFamily: "var(--font-bebas)" }}>
            THIS WEEK'S HIGHLIGHTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="group overflow-hidden border-border hover:border-primary transition-colors">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/basketball-game-action.png"
                  alt="Featured match"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs text-primary font-bold mb-2">LIVE NOW</div>
                  <h3 className="text-2xl font-bold">Thunder vs Lightning</h3>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden border-border hover:border-accent transition-colors">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/soccer-player-celebration.jpg"
                  alt="Player spotlight"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs text-accent font-bold mb-2">PLAYER SPOTLIGHT</div>
                  <h3 className="text-2xl font-bold">Meet the MVP</h3>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
