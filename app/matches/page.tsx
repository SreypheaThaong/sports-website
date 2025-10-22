"use client"

import { Navigation } from "@/components/navigation"
import { MatchCard } from "@/components/match-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Filter } from "lucide-react"
import { useState } from "react"

const matches = [
  {
    id: 1,
    homeTeam: "Thunder",
    awayTeam: "Lightning",
    homeScore: 98,
    awayScore: 92,
    status: "completed",
    date: "Oct 15, 2024",
    time: "7:00 PM",
    venue: "Thunder Arena",
    homeLogo: "/thunder-lightning-bolt-logo.jpg",
    awayLogo: "/lightning-bolt-electric-logo.jpg",
  },
  {
    id: 2,
    homeTeam: "Phoenix",
    awayTeam: "Wolves",
    homeScore: 85,
    awayScore: 88,
    status: "live",
    date: "Oct 22, 2024",
    time: "8:30 PM",
    venue: "Phoenix Stadium",
    homeLogo: "/phoenix-bird-fire-logo.jpg",
    awayLogo: "/wolf-howling-logo.jpg",
  },
  {
    id: 3,
    homeTeam: "Dragons",
    awayTeam: "Eagles",
    homeScore: null,
    awayScore: null,
    status: "upcoming",
    date: "Oct 25, 2024",
    time: "6:00 PM",
    venue: "Dragons Den",
    homeLogo: "/dragon-fierce-logo.jpg",
    awayLogo: "/eagle-soaring-logo.jpg",
  },
  {
    id: 4,
    homeTeam: "Titans",
    awayTeam: "Warriors",
    homeScore: null,
    awayScore: null,
    status: "upcoming",
    date: "Oct 26, 2024",
    time: "7:30 PM",
    venue: "Titan Coliseum",
    homeLogo: "/titan-strong-logo.jpg",
    awayLogo: "/warrior-shield-logo.jpg",
  },
  {
    id: 5,
    homeTeam: "Lightning",
    awayTeam: "Dragons",
    homeScore: 102,
    awayScore: 99,
    status: "completed",
    date: "Oct 12, 2024",
    time: "8:00 PM",
    venue: "Lightning Field",
    homeLogo: "/lightning-bolt-electric-logo.jpg",
    awayLogo: "/dragon-fierce-logo.jpg",
  },
  {
    id: 6,
    homeTeam: "Eagles",
    awayTeam: "Thunder",
    homeScore: null,
    awayScore: null,
    status: "upcoming",
    date: "Oct 28, 2024",
    time: "5:30 PM",
    venue: "Eagles Nest",
    homeLogo: "/eagle-soaring-logo.jpg",
    awayLogo: "/thunder-lightning-bolt-logo.jpg",
  },
]

export default function MatchesPage() {
  const [selectedDivision, setSelectedDivision] = useState("all")

  const liveMatches = matches.filter((m) => m.status === "live")
  const upcomingMatches = matches.filter((m) => m.status === "upcoming")
  const completedMatches = matches.filter((m) => m.status === "completed")

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-6xl font-bold mb-4 text-balance" style={{ fontFamily: "var(--font-bebas)" }}>
            MATCHES
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Follow live games, check schedules, and review past results
          </p>
        </div>

        <div className="flex items-center gap-4 mb-8 flex-wrap">
          <Select value={selectedDivision} onValueChange={setSelectedDivision}>
            <SelectTrigger className="w-[200px] h-12 bg-card border-border">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by division" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Divisions</SelectItem>
              <SelectItem value="north">North</SelectItem>
              <SelectItem value="south">South</SelectItem>
              <SelectItem value="east">East</SelectItem>
              <SelectItem value="west">West</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="h-12 bg-transparent">
            <Calendar className="h-4 w-4 mr-2" />
            Select Date
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="live">
              Live
              {liveMatches.length > 0 && (
                <span className="ml-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {liveMatches.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {liveMatches.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Live Now
                </h2>
                <div className="space-y-4">
                  {liveMatches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Upcoming Matches</h2>
              <div className="space-y-4">
                {upcomingMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Recent Results</h2>
              <div className="space-y-4">
                {completedMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="live" className="space-y-4">
            {liveMatches.length > 0 ? (
              liveMatches.map((match) => <MatchCard key={match.id} match={match} />)
            ) : (
              <div className="text-center py-12 text-muted-foreground">No live matches at the moment</div>
            )}
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
