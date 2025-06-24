import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Video, BookOpen, ArrowRight } from "lucide-react"

export function Content() {
  const contentPieces = [
    {
      icon: FileText,
      type: "Whitepaper",
      title: "Why Multi-Agent AI is the Future of Developer Relations",
      description:
        "A comprehensive analysis of how collaborative AI agents are transforming DevRel strategies and outcomes.",
      readTime: "12 min read",
      featured: true,
    },
    {
      icon: BookOpen,
      type: "Blog Post",
      title: "Three Biggest Challenges in DevRel and How Multi-Agent AI Can Solve Them",
      description: "Explore the most common pain points in developer advocacy and discover AI-powered solutions.",
      readTime: "8 min read",
      featured: false,
    },
    {
      icon: Video,
      type: "Demo Video",
      title: "See HeyDev Advocate AI Agents in Action",
      description: "Watch our multi-agent system collaborate in real-time to solve complex DevRel challenges.",
      readTime: "5 min watch",
      featured: false,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Thought Leadership & Insights</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Deep insights into the future of Developer Relations and how AI is reshaping the industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {contentPieces.map((content, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-shadow ${
                content.featured ? "lg:col-span-2 bg-gradient-to-br from-blue-50 to-purple-50" : "bg-white"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      content.featured ? "bg-blue-100" : "bg-gray-100"
                    }`}
                  >
                    <content.icon className={`w-6 h-6 ${content.featured ? "text-blue-600" : "text-gray-600"}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          content.featured ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {content.type}
                      </span>
                      <span className="text-xs text-gray-500">{content.readTime}</span>
                    </div>
                    <h3
                      className={`font-semibold mb-2 ${
                        content.featured ? "text-xl text-gray-900" : "text-lg text-gray-900"
                      }`}
                    >
                      {content.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{content.description}</p>
                    <Button variant={content.featured ? "default" : "outline"} size="sm" className="gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            View All Resources
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
