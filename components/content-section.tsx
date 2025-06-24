import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, FileText, Video } from "lucide-react"

export function ContentSection() {
  const contentPieces = [
    {
      type: "Whitepaper",
      icon: FileText,
      title: "Why Multi-Agent AI is the Future of Developer Relations",
      description:
        "A comprehensive analysis of how collaborative AI agents will transform DevRel, backed by research and real-world case studies.",
      readTime: "12 min read",
      featured: true,
    },
    {
      type: "Blog Post",
      icon: BookOpen,
      title: "Three Biggest Challenges in DevRel and How Multi-Agent AI Solves Them",
      description:
        "Explore the most common pain points in developer relations and discover how autonomous AI agents address each challenge.",
      readTime: "8 min read",
      featured: false,
    },
    {
      type: "Video",
      icon: Video,
      title: "Demo: HeyDev Advocate Agents in Action",
      description:
        "Watch our multi-agent system collaborate in real-time to handle content creation, community engagement, and strategic research.",
      readTime: "5 min watch",
      featured: false,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Thought Leadership & Insights</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Deep insights into the future of developer relations, multi-agent AI systems, and practical strategies for
            scaling your DevRel impact.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {contentPieces.map((content, index) => {
            const Icon = content.icon
            return (
              <Card
                key={index}
                className={`shadow-lg hover:shadow-xl transition-all duration-300 ${
                  content.featured ? "lg:col-span-2 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200" : ""
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`rounded-lg p-3 mr-4 ${content.featured ? "bg-purple-100" : "bg-gray-100"}`}>
                      <Icon className={`h-6 w-6 ${content.featured ? "text-purple-600" : "text-gray-600"}`} />
                    </div>
                    <div>
                      <span className={`text-sm font-medium ${content.featured ? "text-purple-600" : "text-gray-500"}`}>
                        {content.type}
                      </span>
                      {content.featured && (
                        <span className="ml-2 inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className={`font-bold mb-4 ${content.featured ? "text-2xl" : "text-xl"} text-gray-900`}>
                    {content.title}
                  </h3>

                  <p className="text-gray-600 mb-6">{content.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{content.readTime}</span>
                    <Button
                      variant={content.featured ? "default" : "outline"}
                      className={
                        content.featured
                          ? "bg-purple-600 hover:bg-purple-700 text-white"
                          : "bg-white text-gray-600 hover:bg-gray-50"
                      }
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-gray-900 to-purple-900 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Ahead of the DevRel Revolution</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get exclusive insights, case studies, and early access to new research on multi-agent AI for developer
                relations. Join 500+ DevRel professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
                />
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
