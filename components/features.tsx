import { Card, CardContent } from "@/components/ui/card"
import { Clock, Target, Lightbulb, BarChart3, MessageSquare, FileText } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Clock,
      title: "10x Time Savings",
      description: "Automate repetitive tasks and focus on high-impact strategic work",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI-driven insights help you reach the right developers at the right time",
    },
    {
      icon: Lightbulb,
      title: "Creative Amplification",
      description: "Generate fresh content ideas and perspectives you might never have considered",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Strategy",
      description: "Make informed decisions with comprehensive analytics and trend analysis",
    },
    {
      icon: MessageSquare,
      title: "24/7 Community Support",
      description: "Never miss a developer question or community interaction again",
    },
    {
      icon: FileText,
      title: "Consistent Content",
      description: "Maintain your brand voice across all technical documentation and content",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Transform Your Developer Relations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of DevRel with AI agents that understand your goals and work tirelessly to achieve
            them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
