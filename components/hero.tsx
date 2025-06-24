"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ArrowRight, Bot, Users, Zap } from "lucide-react"

export function Hero() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send to your backend
      console.log("Email submitted:", email)
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Reimagine Developer Relations with{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Autonomous Multi-Agent AI
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Scale your developer advocacy effortlessly and authentically. Transform overwhelm into impact with AI
                agents that work as a team.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-cyan-400" />
                <span>Content Generation</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-400" />
                <span>Community Engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span>Strategic Research</span>
              </div>
            </div>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Join Our Exclusive Early-Access Pilot</h3>
                  <p className="text-blue-100 text-sm">
                    First 100 members get personalized onboarding and direct influence on product direction.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-blue-200"
                      required
                    />
                    <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                      Join Waitlist
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <div className="text-green-400 font-semibold">✓ You're on the list!</div>
                    <p className="text-sm text-blue-200 mt-1">We'll be in touch soon with early access details.</p>
                  </div>
                )}
              </div>
            </Card>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 animate-pulse">
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-medium">GitHub Changelog to Content Agent</span>
                  </div>
                  <p className="text-xs text-blue-200">Generating technical blog post...</p>
                </Card>
                <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 animate-pulse delay-150">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span className="text-sm font-medium">Community Sentiment Agent</span>
                  </div>
                  <p className="text-xs text-blue-200">Engaging with developers...</p>
                </Card>
                <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 animate-pulse delay-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium">Research Agent</span>
                  </div>
                  <p className="text-xs text-blue-200">Analyzing trends...</p>
                </Card>
                <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 animate-pulse delay-500">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowRight className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-medium">Orchestrator</span>
                  </div>
                  <p className="text-xs text-blue-200">Recommending actions...</p>
                </Card>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
