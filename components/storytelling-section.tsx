import { Card, CardContent } from "@/components/ui/card"
import { Clock, Target, Users, Zap } from "lucide-react"

export function StorytellingSection() {
  const painPoints = [
    {
      icon: Clock,
      title: "Time Overwhelm",
      description: "Spending 80% of time on repetitive tasks instead of strategic relationship building",
    },
    {
      icon: Users,
      title: "Scale Limitations",
      description: "Unable to engage meaningfully with growing developer communities",
    },
    {
      icon: Target,
      title: "Inconsistent Messaging",
      description: "Struggling to maintain consistent voice across multiple channels and platforms",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Every DevRel Advocate Dreams of Having More Time
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  You became a Developer Relations advocate because you love connecting with developers, building
                  communities, and helping people solve real problems with technology.
                </p>
                <p>
                  But instead, you find yourself drowning in content creation, forum monitoring, and repetitive support
                  tasks. The strategic work that drives real impact? It gets pushed to tomorrow, again and again.
                </p>
                <p className="font-semibold text-gray-900">
                  What if you could focus on relationships, strategy, and creativity while an autonomous AI team handles
                  the rest?
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <div className="flex items-start">
                <Zap className="h-6 w-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Transform Overwhelm into Impact</h3>
                  <p className="text-gray-700">
                    With HeyDev Advocate's autonomous agents, you reclaim your time for what matters most: building
                    meaningful relationships, crafting strategic initiatives, and driving innovation in your developer
                    community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Pain Points */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Common DevRel Challenges</h3>
            {painPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <Card key={index} className="border-l-4 border-l-red-400 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="rounded-lg bg-red-50 p-2 mr-4">
                        <Icon className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{point.title}</h4>
                        <p className="text-gray-600">{point.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-start">
                <div className="rounded-lg bg-green-100 p-2 mr-4">
                  <Target className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">The HeyDev Advocate Solution</h4>
                  <p className="text-green-800">
                    Our multi-agent AI system handles these challenges automatically, freeing you to focus on
                    high-impact strategic work and authentic relationship building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
