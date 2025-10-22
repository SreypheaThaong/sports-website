import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Trophy, TrendingUp, Award, Target } from "lucide-react"
import Link from "next/link"

// Mock data
const playerData = {
  id: 1,
  name: "Marcus Johnson",
  number: 23,
  position: "Forward",
  team: "Thunder",
  teamLogo: "/thunder-lightning-bolt-logo.jpg",
  avatar: "/player-action-1.jpg",
  height: "6'7\"",
  weight: "220 lbs",
  age: 26,
  hometown: "Los Angeles, CA",
  stats: {
    points: 24.5,
    rebounds: 8.2,
    assists: 4.1,
    steals: 1.8,
    blocks: 0.9,
    fieldGoalPct: 48.5,
    threePointPct: 37.2,
    freeThrowPct: 82.1,
  },
  achievements: [
    "2024 All-Star Selection",
    "2023 Division MVP",
    "League Leading Scorer (2023)",
    "Rookie of the Year (2020)",
  ],
  recentGames: [
    { opponent: "Lightning", points: 28, rebounds: 9, assists: 5, result: "W" },
    { opponent: "Phoenix", points: 32, rebounds: 7, assists: 3, result: "W" },
    { opponent: "Wolves", points: 18, rebounds: 10, assists: 6, result: "L" },
    { opponent: "Dragons", points: 26, rebounds: 8, assists: 4, result: "W" },
  ],
}

export default function PlayerDetailPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/players">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Players
          </Link>
        </Button>

        {/* Player Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Card className="overflow-hidden border-border">
              <div className="aspect-square bg-muted relative">
                <img
                  src={playerData.avatar || "/placeholder.svg"}
                  alt={playerData.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold">
                    {playerData.number}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-3" style={{ fontFamily: "var(--font-bebas)" }}>
                {playerData.name}
              </h1>
              <div className="flex items-center gap-3 flex-wrap mb-4">
                <Badge className="text-base px-3 py-1">{playerData.position}</Badge>
                <Link
                  href={`/teams/${playerData.team.toLowerCase()}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={playerData.teamLogo || "/placeholder.svg"} alt={playerData.team} />
                    <AvatarFallback>{playerData.team.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{playerData.team}</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Card className="bg-card/50 border-border">
                <CardContent className="pt-4 text-center">
                  <div className="text-sm text-muted-foreground mb-1">Height</div>
                  <div className="text-xl font-bold">{playerData.height}</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border">
                <CardContent className="pt-4 text-center">
                  <div className="text-sm text-muted-foreground mb-1">Weight</div>
                  <div className="text-xl font-bold">{playerData.weight}</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border">
                <CardContent className="pt-4 text-center">
                  <div className="text-sm text-muted-foreground mb-1">Age</div>
                  <div className="text-xl font-bold">{playerData.age}</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border">
                <CardContent className="pt-4 text-center">
                  <div className="text-sm text-muted-foreground mb-1">Hometown</div>
                  <div className="text-sm font-bold">{playerData.hometown}</div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Season Averages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-1">{playerData.stats.points}</div>
                    <div className="text-sm text-muted-foreground">Points</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-1">{playerData.stats.rebounds}</div>
                    <div className="text-sm text-muted-foreground">Rebounds</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-1">{playerData.stats.assists}</div>
                    <div className="text-sm text-muted-foreground">Assists</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Detailed Stats */}
          <Card className="lg:col-span-2 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Detailed Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Field Goal %</span>
                  <span className="text-sm font-bold">{playerData.stats.fieldGoalPct}%</span>
                </div>
                <Progress value={playerData.stats.fieldGoalPct} className="h-2" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">3-Point %</span>
                  <span className="text-sm font-bold">{playerData.stats.threePointPct}%</span>
                </div>
                <Progress value={playerData.stats.threePointPct} className="h-2" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Free Throw %</span>
                  <span className="text-sm font-bold">{playerData.stats.freeThrowPct}%</span>
                </div>
                <Progress value={playerData.stats.freeThrowPct} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-primary">{playerData.stats.steals}</div>
                  <div className="text-sm text-muted-foreground">Steals per game</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">{playerData.stats.blocks}</div>
                  <div className="text-sm text-muted-foreground">Blocks per game</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {playerData.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Trophy className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Recent Games */}
        <Card className="mt-6 border-border">
          <CardHeader>
            <CardTitle>Recent Games</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {playerData.recentGames.map((game, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Badge variant={game.result === "W" ? "default" : "destructive"} className="w-8 justify-center">
                      {game.result}
                    </Badge>
                    <div className="font-medium">vs {game.opponent}</div>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">PTS:</span>{" "}
                      <span className="font-bold text-primary">{game.points}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">REB:</span>{" "}
                      <span className="font-bold">{game.rebounds}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">AST:</span>{" "}
                      <span className="font-bold text-accent">{game.assists}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
