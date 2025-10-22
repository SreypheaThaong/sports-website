import { Navigation } from "@/components/navigation"
import { TeamCard } from "@/components/team-card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const teams = [
  {
    id: 1,
    name: "Thunder",
    logo: "/thunder-lightning-bolt-logo.jpg",
    wins: 12,
    losses: 3,
    division: "North",
    color: "from-yellow-500 to-orange-600",
  },
  {
    id: 2,
    name: "Lightning",
    logo: "/lightning-bolt-electric-logo.jpg",
    wins: 11,
    losses: 4,
    division: "North",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 3,
    name: "Phoenix",
    logo: "/phoenix-bird-fire-logo.jpg",
    wins: 10,
    losses: 5,
    division: "South",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 4,
    name: "Wolves",
    logo: "/wolf-howling-logo.jpg",
    wins: 9,
    losses: 6,
    division: "South",
    color: "from-gray-600 to-gray-800",
  },
  {
    id: 5,
    name: "Dragons",
    logo: "/dragon-fierce-logo.jpg",
    wins: 9,
    losses: 6,
    division: "East",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 6,
    name: "Eagles",
    logo: "/eagle-soaring-logo.jpg",
    wins: 8,
    losses: 7,
    division: "East",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: 7,
    name: "Titans",
    logo: "/titan-strong-logo.jpg",
    wins: 7,
    losses: 8,
    division: "West",
    color: "from-purple-600 to-pink-600",
  },
  {
    id: 8,
    name: "Warriors",
    logo: "/warrior-shield-logo.jpg",
    wins: 6,
    losses: 9,
    division: "West",
    color: "from-red-600 to-rose-700",
  },
]

export default function TeamsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-6xl font-bold mb-4 text-balance" style={{ fontFamily: "var(--font-bebas)" }}>
            ALL TEAMS
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore team rosters, stats, and upcoming matches
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search teams..." className="pl-10 h-12 bg-card border-border" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </div>
  )
}
