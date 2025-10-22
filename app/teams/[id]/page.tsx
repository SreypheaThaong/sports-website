import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Trophy, TrendingUp, Calendar } from "lucide-react"
import Link from "next/link"

// Mock data - in a real app this would come from a database
const teamData = {
  id: 1,
  name: "Thunder",
  logo: "/thunder-lightning-bolt-logo.jpg",
  wins: 12,
  losses: 3,
  division: "North",
  color: "from-yellow-500 to-orange-600",
  founded: "2018",
  coach: "Sarah Martinez",
  homeVenue: "Thunder Arena",
  roster: [
    {
      id: 1,
      name: "Marcus Johnson",
      number: 23,
      position: "Forward",
      avatar: "/athlete-portrait.png",
    },
    {
      id: 2,
      name: "Alex Chen",
      number: 10,
      position: "Guard",
      avatar: "/athlete-portrait.png",
    },
    {
      id: 3,
      name: "Jordan Williams",
      number: 7,
      position: "Center",
      avatar: "/athlete-portrait.png",
    },
    {
      id: 4,
      name: "Taylor Brown",
      number: 15,
      position: "Guard",
      avatar: "/athlete-portrait.png",
    },
    {
      id: 5,
      name: "Jamie Davis",
      number: 32,
      position: "Forward",
      avatar: "/athlete-portrait.png",
    },
  ],
  recentMatches: [
    { opponent: "Lightning", result: "W", score: "98-92", date: "Oct 15" },
    { opponent: "Phoenix", result: "W", score: "105-101", date: "Oct 12" },
    { opponent: "Wolves", result: "L", score: "88-95", date: "Oct 8" },
    { opponent: "Dragons", result: "W", score: "112-108", date: "Oct 5" },
  ],
}

export default function TeamDetailPage() {
  const winPercentage = ((teamData.wins / (teamData.wins + teamData.losses)) * 100).toFixed(0)

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/teams">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Teams
          </Link>
        </Button>

        {/* Team Header */}
        <div className="mb-12">
          <div className={`h-48 bg-gradient-to-br ${teamData.color} rounded-lg relative overflow-hidden mb-8`}>
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={teamData.logo || "/placeholder.svg"}
                alt={`${teamData.name} logo`}
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>

          <div className="flex items-start justify-between flex-wrap gap-6">
            <div>
              <h1 className="text-6xl font-bold mb-2" style={{ fontFamily: "var(--font-bebas)" }}>
                {teamData.name}
              </h1>
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="secondary" className="text-sm">
                  {teamData.division} Division
                </Badge>
                <span className="text-muted-foreground">Founded {teamData.founded}</span>
              </div>
            </div>

            <Card className="bg-card/50 border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{teamData.wins}</div>
                    <div className="text-sm text-muted-foreground">Wins</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-3xl font-bold">{teamData.losses}</div>
                    <div className="text-sm text-muted-foreground">Losses</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">{winPercentage}%</div>
                    <div className="text-sm text-muted-foreground">Win Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Team Info */}
          <Card className="lg:col-span-1 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Team Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Head Coach</div>
                <div className="font-medium">{teamData.coach}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Home Venue</div>
                <div className="font-medium">{teamData.homeVenue}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Division Rank</div>
                <div className="font-medium flex items-center gap-2">
                  #1
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Matches */}
          <Card className="lg:col-span-2 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Recent Matches
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {teamData.recentMatches.map((match, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <Badge variant={match.result === "W" ? "default" : "destructive"} className="w-8 justify-center">
                        {match.result}
                      </Badge>
                      <div>
                        <div className="font-medium">vs {match.opponent}</div>
                        <div className="text-sm text-muted-foreground">{match.date}</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold">{match.score}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Roster */}
        <Card className="mt-6 border-border">
          <CardHeader>
            <CardTitle>Team Roster</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {teamData.roster.map((player) => (
                <Link
                  key={player.id}
                  href={`/players/${player.id}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted hover:border-primary border border-transparent transition-all"
                >
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
                    <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium">{player.name}</div>
                    <div className="text-sm text-muted-foreground">{player.position}</div>
                  </div>
                  <div className="text-2xl font-bold text-primary">#{player.number}</div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
