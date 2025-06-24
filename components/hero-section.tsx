"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Users, Zap } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [email, setEmail] = useState('')

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle waitlist signup
    console.log('Waitlist signup:', email)
    setEmail('')
    alert('Thank you for joining our waitlist! We\'ll be in touch soon.')
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E<g fill="none" fillRule="evenodd"><g fill="#9C92AC" fillOpacity="0.1"><circle cx="30" cy="30" r="2"/></g></g></svg>')] opacity-20"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-purple-500/20 px-4 py-2 text-sm font-medium text-purple-200 ring-1 ring-purple-500/30">
                <Zap className="mr-2 h-4 w-4" />
                Reimagining Developer Relations
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block">Autonomous</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Multi-Agent AI
                </span>
                <span className="block">for DevRel</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl">
                Scale your developer advocacy effortlessly and authentically. 
                Deploy specialized AI agents that work as a collaborative team to amplify your DevRel impact.
              </p>
            </div>

            {/* Quick Waitlist Signup */}
            <form onSubmit={handleWaitlistSignup} className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
                required
              />
              <Button type="submit" size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            
            <p className="text-sm text-gray-400">
              🚀 First 100 members get exclusive early access + personalized onboarding
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              {/* Central Hub */}
              <div className="relative z-10 mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
                <Bot className="h-16 w-16 text-white" />
              </div>
              
              {/* Orbiting Agents */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                {/* Content Agent */}
                <div className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                  <span className="text-xs font-bold text-white">Content</span>
                </div>
                
                {/* Community Agent */}
                <div className="absolute top-1/2 -right-8 h-16 w-16 -translate-y-1/2 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                
                {/* Research Agent */}
                <div className="absolute -bottom-8 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                  <span className="text-xs font-bold text-white">Research</span>
                </div>
              </div>
              
              {/* Connection Lines */}
              <div className="absolute inset-0 opacity-30">
                <svg className="h-full w-full" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" className="text-purple-400" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
