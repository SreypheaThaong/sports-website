"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const root = document.documentElement
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null

    if (savedTheme) {
      setTheme(savedTheme)
      if (savedTheme === "light") {
        root.classList.remove("dark")
      } else {
        root.classList.add("dark")
      }
    }
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const newTheme = theme === "dark" ? "light" : "dark"

    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)

    if (newTheme === "light") {
      root.classList.remove("dark")
    } else {
      root.classList.add("dark")
    }
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
