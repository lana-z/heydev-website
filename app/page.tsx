import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { MultiAgentExplanation } from "@/components/multi-agent-explanation"
import { Team } from "@/components/team"
import { Footer } from "@/components/footer"
import { WaitlistSection } from "@/components/waitlist-section"
import { StorytellingSection } from "@/components/storytelling-section"
import { Content } from "@/components/content-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <MultiAgentExplanation />
      <Features />
      {/* <Team /> */}
      <Content />
      <StorytellingSection />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
