import { Card, CardContent } from "@/components/ui/card"
import { Bot, Users, TrendingUp, Workflow } from "lucide-react"

export function MultiAgentExplanation() {
  const agents = [
    {
      icon: Bot,
      name: "Content Agent",
      description: "Instantly generates accurate and compelling technical content.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      name: "Community Agent",
      description: "Actively engages developers, answering queries and moderating forums.",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: TrendingUp,
      name: "Research Agent",
      description: "Synthesizes trends and community feedback to drive DevRel strategy.",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Workflow,
      name: "Orchestrator Agent",
      description: "Coordinates all agents to ensure seamless collaboration and optimal outcomes.",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why a Multi-Agent AI is Revolutionary</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlike single bots, HeyDev deploys specialized AI agents working as a team. Together, they amplify your
            DevRel impact far beyond what piecemeal AI or single-agent solutions can achieve.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {agents.map((agent, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg ${agent.bgColor} flex items-center justify-center mb-4`}>
                  <agent.icon className={`w-6 h-6 ${agent.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{agent.name}</h3>
                <p className="text-gray-600 text-sm">{agent.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
