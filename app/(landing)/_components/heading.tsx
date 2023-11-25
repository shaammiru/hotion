"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Welcome to <span className="underline">Hotion</span>.<br />A simple
        note-taking app.
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Simple and easy to use. No ads, no tracking, no nonsense. Just you and
        your notes.
      </h3>
      <Button>
        Join Hotion
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  )
}

export default Heading
