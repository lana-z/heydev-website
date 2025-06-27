"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
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
    "Personalized onboarding",
    "Direct influence on product roadmap and features",
    "Exclusive access to beta features",
    "Priority support",
    // "Special pricing for early adopters",
  ]

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-medium text-yellow-200 ring-1 ring-yellow-500/30 mb-6">
            <Star className="mr-2 h-4 w-4" />
            Exclusive Early Access Program
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Join the Future of Developer Relations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be among the first 50 DevRel professionals to experience autonomous multi-agent AI tooling designed just for you. Shape the product, get
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

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Limited Spots Available</h3>
                  <p className="text-sm text-blue-200">
                    We're accepting only 50 early access members to ensure personalized attention and meaningful product feedback.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span className="text-blue-100">Join now to secure your spot</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Signup Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:border-cyan-400"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:border-cyan-400"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-2">
                    Company *
                  </label>
                  <Input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:border-cyan-400"
                    placeholder="Your company name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-200 mb-2">
                    Role in DevRel *
                  </label>
                  <select
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full h-10 rounded-md bg-white/20 border border-white/30 px-3 py-2 text-white placeholder:text-blue-200 focus:border-cyan-400 focus:outline-none"
                    required
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
                    <option value="founder" className="text-gray-900">
                      Founder
                    </option>
                    <option value="Developer" className="text-gray-900">
                      Developer
                    </option>
                    <option value="Product" className="text-gray-900">
                      Product role
                    </option>
                    <option value="other" className="text-gray-900">
                      Other
                    </option>
                  </select>
                </div>

                <Button type="submit" size="lg" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold">
                  Join the Pilot Waitlist
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
