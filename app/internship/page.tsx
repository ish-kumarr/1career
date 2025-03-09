import { Metadata } from 'next'
import Footer from '@/components/Footer'
import InternshipHero from '@/components/internship/InternshipHero'
import TopFields from '@/components/internship/TopFields'
import TopRecruiters from '@/components/internship/TopRecruiters'
import GuaranteeSection from '@/components/internship/GuaranteeSection'

export const metadata: Metadata = {
  title: 'Internship | Career Discovery',
  description: 'Find your dream internship with Career Discovery. 100% internship guarantee with top companies across various industries.',
}

export default function Internship() {
  return (
    <main className="scroll-smooth">
      <InternshipHero />
      <section id="top-fields">
      <TopFields />
      </section>
      <TopRecruiters />
      <GuaranteeSection />
      <Footer />
    </main>
  )
}