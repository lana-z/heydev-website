import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, ExternalLink } from "lucide-react"

export function Team() {
  const teamMembers = [
    {
      name: "Lana Zumbrunn",
      role: "Founder",
      bio: "8+ years building developer communities, AI solutions and developer tools.",
      image: "/placeholder.svg?height=200&width=200",
      linkedin: "#",
    },
    {
      name: "...",
      role: "Co-founder",
      bio: "AI/ML expert with PhD. Previously led initiatives at ...",
      image: "/placeholder.svg?height=200&width=200",
      linkedin: "#",
    },
    {
      name: "...",
      role: "Head of Product",
      bio: "Former DevRel at ...",
      image: "/placeholder.svg?height=200&width=200",
      linkedin: "#",
    },
  ]

  const advisors = [
    "Former VP of Developer Relations at ...",
    "AI Research Director at ...",
    "Founder of ...   ",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experienced professionals with deep expertise in Developer Relations, AI, and building developer-focused
            products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <Button variant="outline" size="sm" className="gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gray-50 border-0">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Backed by Industry Leaders</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {advisors.map((advisor, index) => (
                <div key={index} className="flex items-center gap-3">
                  <ExternalLink className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{advisor}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
