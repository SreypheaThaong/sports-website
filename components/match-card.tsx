import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface MatchCardProps {
  match: {
    id: number
    homeTeam: string
    awayTeam: string
    homeScore: number | null
    awayScore: number | null
    status: "live" | "upcoming" | "completed"
    date: string
    time: string
    venue: string
    homeLogo: string
    awayLogo: string
  }
}

export function MatchCard({ match }: MatchCardProps) {
  const isLive = match.status === "live"
  const isUpcoming = match.status === "upcoming"

  return (
    <Card
      className={cn(
        "border-border hover:border-primary/50 transition-all",
        isLive && "border-primary/50 shadow-lg shadow-primary/10",
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          {/* Teams */}
          <div className="flex-1 min-w-[300px]">
            <div className="flex items-center justify-between mb-4">
              {/* Home Team */}
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                  <img
                    src={match.homeLogo || "/placeholder.svg"}
                    alt={match.homeTeam}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg">{match.homeTeam}</div>
                  {!isUpcoming && <div className="text-sm text-muted-foreground">Home</div>}
                </div>
              </div>

              {/* Score or VS */}
              <div className="px-6">
                {isUpcoming ? (
                  <div className="text-2xl font-bold text-muted-foreground">VS</div>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-bold">{match.homeScore}</div>
                    <div className="text-2xl text-muted-foreground">-</div>
                    <div className="text-3xl font-bold">{match.awayScore}</div>
                  </div>
                )}
              </div>

              {/* Away Team */}
              <div className="flex items-center gap-4 flex-1 flex-row-reverse">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                  <img
                    src={match.awayLogo || "/placeholder.svg"}
                    alt={match.awayTeam}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">{match.awayTeam}</div>
                  {!isUpcoming && <div className="text-sm text-muted-foreground">Away</div>}
                </div>
              </div>
            </div>
          </div>

          {/* Match Info */}
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Clock className="h-4 w-4" />
                {match.date} • {match.time}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {match.venue}
              </div>
            </div>

            <div>
              {isLive && (
                <Badge className="bg-primary text-primary-foreground">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-2" />
                  LIVE
                </Badge>
              )}
              {isUpcoming && <Badge variant="secondary">Upcoming</Badge>}
              {match.status === "completed" && <Badge variant="outline">Final</Badge>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
