import { Hero } from "@/components/hero"
import { MultiAgentExplanation } from "@/components/multi-agent-explanation"
import { Features } from "@/components/features"
import { Team } from "@/components/team"
import { Content } from "@/components/content"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <MultiAgentExplanation />
      <Features />
      <Team />
      <Content />
      <Footer />
    </main>
  )
}
