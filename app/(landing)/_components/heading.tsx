"use client"

import Link from "next/link"
import { useConvexAuth } from "convex/react"
import { SignUpButton } from "@clerk/clerk-react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Spinner from "@/components/spinner"

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()

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
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {!isAuthenticated && !isLoading && (
        <SignUpButton mode="modal">
          <Button>
            Get started
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignUpButton>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Hotion
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
    </div>
  )
}

export default Heading
