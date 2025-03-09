import { Metadata } from 'next'
import Footer from '@/components/Footer'
import ResearchHero from '@/components/research/ResearchHero'
import WhyResearch from '@/components/research/WhyResearch'
import ValueProposition from '@/components/research/ValueProposition'
import Mentors from '@/components/research/Mentors'

export const metadata: Metadata = {
  title: 'Research | Career Discovery',
  description: 'Explore research opportunities and mentorship programs at Career Discovery. Work with expert mentors on groundbreaking research projects.',
}

export default function Research() {
  return (
    <main className="scroll-smooth">
      <ResearchHero />
      <section id="why-research"> 
      <WhyResearch />
      </section>
      <ValueProposition />
      <Mentors />
      <Footer />
    </main>
  )
}