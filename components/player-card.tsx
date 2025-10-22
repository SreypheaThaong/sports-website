import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PlayerCardProps {
  player: {
    id: number
    name: string
    number: number
    position: string
    team: string
    avatar: string
    stats: {
      points: number
      rebounds: number
      assists: number
    }
  }
}

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <Link href={`/players/${player.id}`}>
      <Card className="group overflow-hidden border-border hover:border-primary transition-all duration-300 h-full">
        <div className="aspect-square bg-muted relative overflow-hidden">
          <img
            src={player.avatar || "/placeholder.svg"}
            alt={player.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute top-4 right-4">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
              {player.number}
            </div>
          </div>
        </div>

        <CardContent className="pt-4">
          <div className="mb-3">
            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{player.name}</h3>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary">{player.position}</Badge>
              <span className="text-sm text-muted-foreground">{player.team}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border">
            <div className="text-center">
              <div className="text-lg font-bold text-primary">{player.stats.points}</div>
              <div className="text-xs text-muted-foreground">PPG</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">{player.stats.rebounds}</div>
              <div className="text-xs text-muted-foreground">RPG</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-accent">{player.stats.assists}</div>
              <div className="text-xs text-muted-foreground">APG</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
