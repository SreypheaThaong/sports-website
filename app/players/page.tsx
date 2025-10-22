import { Navigation } from "@/components/navigation"
import { PlayerCard } from "@/components/player-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

const players = [
  {
    id: 1,
    name: "Marcus Johnson",
    number: 23,
    position: "Forward",
    team: "Thunder",
    avatar: "/player-action-1.jpg",
    stats: { points: 24.5, rebounds: 8.2, assists: 4.1 },
  },
  {
    id: 2,
    name: "Alex Chen",
    number: 10,
    position: "Guard",
    team: "Thunder",
    avatar: "/player-action-2.jpg",
    stats: { points: 18.3, rebounds: 3.5, assists: 7.8 },
  },
  {
    id: 3,
    name: "Jordan Williams",
    number: 7,
    position: "Center",
    team: "Lightning",
    avatar: "/player-action-3.jpg",
    stats: { points: 21.7, rebounds: 11.4, assists: 2.3 },
  },
  {
    id: 4,
    name: "Taylor Brown",
    number: 15,
    position: "Guard",
    team: "Phoenix",
    avatar: "/player-action-4.jpg",
    stats: { points: 19.8, rebounds: 4.1, assists: 6.5 },
  },
  {
    id: 5,
    name: "Jamie Davis",
    number: 32,
    position: "Forward",
    team: "Wolves",
    avatar: "/player-action-5.jpg",
    stats: { points: 22.1, rebounds: 7.9, assists: 3.7 },
  },
  {
    id: 6,
    name: "Casey Martinez",
    number: 11,
    position: "Guard",
    team: "Dragons",
    avatar: "/player-action-6.jpg",
    stats: { points: 17.5, rebounds: 3.2, assists: 8.9 },
  },
  {
    id: 7,
    name: "Morgan Lee",
    number: 21,
    position: "Forward",
    team: "Eagles",
    avatar: "/player-action-7.jpg",
    stats: { points: 20.3, rebounds: 6.8, assists: 4.9 },
  },
  {
    id: 8,
    name: "Riley Thompson",
    number: 5,
    position: "Center",
    team: "Titans",
    avatar: "/player-action-8.jpg",
    stats: { points: 16.9, rebounds: 10.2, assists: 1.8 },
  },
]

export default function PlayersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-6xl font-bold mb-4 text-balance" style={{ fontFamily: "var(--font-bebas)" }}>
            PLAYERS
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover athlete profiles, stats, and career highlights
          </p>
        </div>

        <div className="flex items-center gap-4 mb-8 flex-wrap">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search players..." className="pl-10 h-12 bg-card border-border" />
          </div>

          <Select defaultValue="all-positions">
            <SelectTrigger className="w-[180px] h-12 bg-card border-border">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-positions">All Positions</SelectItem>
              <SelectItem value="guard">Guard</SelectItem>
              <SelectItem value="forward">Forward</SelectItem>
              <SelectItem value="center">Center</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all-teams">
            <SelectTrigger className="w-[180px] h-12 bg-card border-border">
              <SelectValue placeholder="Team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-teams">All Teams</SelectItem>
              <SelectItem value="thunder">Thunder</SelectItem>
              <SelectItem value="lightning">Lightning</SelectItem>
              <SelectItem value="phoenix">Phoenix</SelectItem>
              <SelectItem value="wolves">Wolves</SelectItem>
              <SelectItem value="dragons">Dragons</SelectItem>
              <SelectItem value="eagles">Eagles</SelectItem>
              <SelectItem value="titans">Titans</SelectItem>
              <SelectItem value="warriors">Warriors</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </div>
  )
}
