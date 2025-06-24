"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Star, Users } from "lucide-react"
import { useState } from "react"

export function WaitlistSection() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
    role: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Waitlist signup:", formData)
    alert("Thank you for joining our exclusive early access program!")
    setFormData({ email: "", name: "", company: "", role: "" })
  }

  const benefits = [
    "Personalized onboarding with our founding team",
    "Direct influence on product roadmap and features",
    "Exclusive access to beta features and updates",
    "Priority support and dedicated success manager",
    "Special pricing for early adopters",
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-medium text-yellow-200 ring-1 ring-yellow-500/30 mb-6">
            <Star className="mr-2 h-4 w-4" />
            Exclusive Early Access Program
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Join the Future of Developer Relations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be among the first 100 DevRel professionals to experience autonomous multi-agent AI. Shape the product, get
            exclusive benefits, and transform your developer advocacy.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Left Column - Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Early Access Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-purple-400 mr-3" />
                <h4 className="text-lg font-semibold">Limited Spots Available</h4>
              </div>
              <p className="text-gray-300">
                We're accepting only 100 early access members to ensure personalized attention and meaningful product
                feedback. Join now to secure your spot.
              </p>
            </div>
          </div>

          {/* Right Column - Signup Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-200 mb-2">
                    Role in DevRel
                  </label>
                  <select
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white backdrop-blur-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
                  >
                    <option value="" className="text-gray-900">
                      Select your role
                    </option>
                    <option value="devrel-manager" className="text-gray-900">
                      DevRel Manager
                    </option>
                    <option value="developer-advocate" className="text-gray-900">
                      Developer Advocate
                    </option>
                    <option value="community-manager" className="text-gray-900">
                      Community Manager
                    </option>
                    <option value="technical-writer" className="text-gray-900">
                      Technical Writer
                    </option>
                    <option value="other" className="text-gray-900">
                      Other
                    </option>
                  </select>
                </div>

                <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Join Exclusive Early Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  By joining, you agree to receive updates about HeyDev Advocate. We respect your privacy and won't spam
                  you.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
