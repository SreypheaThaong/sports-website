import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

interface TeamCardProps {
  team: {
    id: number
    name: string
    logo: string
    wins: number
    losses: number
    division: string
    color: string
  }
}

export function TeamCard({ team }: TeamCardProps) {
  const winPercentage = ((team.wins / (team.wins + team.losses)) * 100).toFixed(0)

  return (
    <Link href={`/teams/${team.id}`}>
      <Card className="group overflow-hidden border-border hover:border-primary transition-all duration-300 h-full">
        <div className={`h-32 bg-gradient-to-br ${team.color} relative`}>
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <CardContent className="pt-0 -mt-12 relative">
          <div className="bg-card border-2 border-border rounded-lg w-24 h-24 mx-auto mb-4 flex items-center justify-center group-hover:border-primary transition-colors">
            <img src={team.logo || "/placeholder.svg"} alt={`${team.name} logo`} className="w-16 h-16 object-contain" />
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{team.name}</h3>

            <Badge variant="secondary" className="mb-4">
              {team.division} Division
            </Badge>

            <div className="flex items-center justify-center gap-4 text-sm mb-4">
              <div>
                <div className="text-2xl font-bold text-primary">{team.wins}</div>
                <div className="text-muted-foreground">Wins</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold">{team.losses}</div>
                <div className="text-muted-foreground">Losses</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold text-accent">{winPercentage}%</div>
                <div className="text-muted-foreground">Win Rate</div>
              </div>
            </div>

            <div className="flex items-center justify-center text-sm text-muted-foreground group-hover:text-primary transition-colors">
              View Details
              <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
