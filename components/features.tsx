import { Card, CardContent } from "@/components/ui/card"
import {
  Clock,
  Target,
  Lightbulb,
  BarChart3,
  MessageSquare,
  FileText,
} from "lucide-react"

export function Features() {

  const features = [
    {
      icon: Clock,
      title: "10x Time Savings",
      description: "Automate repetitive tasks and focus on high-impact strategic work.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI-driven insights help you reach the right developers at the right time.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Lightbulb,
      title: "Creative Amplification",
      description: "Generate fresh content ideas and perspectives you might never have considered.",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Strategy",
      description: "Make informed decisions with comprehensive analytics and trend analysis.",
      color: "text-orange-500",
      bgColor: "bg-orange-100",
    },
    {
      icon: MessageSquare,
      title: "24/7 Community Support",
      description: "Never miss a developer question or community interaction again.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
    },
    {
      icon: FileText,
      title: "Consistent Content",
      description: "Maintain your brand voice across all technical documentation and content.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Transform your Developer Relations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            HeyDev Advocate gives you the power to scale your DevRel efforts without sacrificing quality or authenticity.
            Experience the benefits that are transforming how companies connect with developers.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
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
