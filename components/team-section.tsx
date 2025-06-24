import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former Head of DevRel at Stripe. 8+ years building developer communities at scale.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-OpenAI Research Engineer. PhD in AI/ML from Stanford. Expert in multi-agent systems.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of AI Research",
      bio: "Former Principal Scientist at Google DeepMind. 10+ years in conversational AI and NLP.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
  ]

  const advisors = [
    {
      name: "Alex Thompson",
      role: "Advisor",
      company: "Former VP DevRel, GitHub",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Lisa Wang",
      role: "AI Advisor",
      company: "AI2 Research Director",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet the Team Behind HeyDev Advocate
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A proven team of DevRel veterans and AI researchers, backed by industry leaders who understand the
            challenges of scaling developer relations.
          </p>
        </div>

        {/* Core Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Founding Team</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="mx-auto h-32 w-32 rounded-full object-cover mb-6"
                  />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-purple-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="sm" className="bg-white text-gray-600 hover:bg-gray-50">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="bg-white text-gray-600 hover:bg-gray-50">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Strategic Advisors</h3>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card key={index} className="text-center shadow-md">
                <CardContent className="p-6">
                  <img
                    src={advisor.image || "/placeholder.svg"}
                    alt={advisor.name}
                    className="mx-auto h-20 w-20 rounded-full object-cover mb-4"
                  />
                  <h4 className="text-lg font-semibold text-gray-900">{advisor.name}</h4>
                  <p className="text-purple-600 font-medium">{advisor.role}</p>
                  <p className="text-gray-600 text-sm">{advisor.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Credibility Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Backed by Industry Leaders</h3>
            <p className="text-gray-600 mb-6">
              Our team combines deep expertise in developer relations with cutting-edge AI research. We've built and
              scaled developer communities at companies like Stripe, GitHub, and Google, and now we're applying that
              knowledge to create the future of autonomous DevRel.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <span>🏆 Former Stripe DevRel Leadership</span>
              <span>🧠 Ex-OpenAI Research Team</span>
              <span>🎓 Stanford AI/ML PhD</span>
              <span>🤖 Google DeepMind Alumni</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
