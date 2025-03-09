'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { LinkedinIcon, ExternalLink, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useState, useEffect } from 'react'

const mentors = [
  {
    "name": "Shreyansh Jain",
    "title": "Master's Student in Economics",
    "institution": "Delhi School of Economics",
    "institutionLogo": "https://i.imgur.com/P4NsqIH.png",
    "image": "https://i.imgur.com/0Ag8RQt.jpeg",
    "linkedin": "https://www.linkedin.com/in/jainshreyansh108/",
    "expertise": ["Economics", "Data Analysis", "Statistical Modeling", "Research"],
    "quote": "Blending academic expertise with real-world data insights for impactful research and consultancy."
  },
  {
    "name": "Dr. Gopi",
    "title": "Professor",
    "institution": "IIM Bangalore",
    "institutionLogo": "/unilogo/IIM_Bangalore_Logo.png",
    "image": "https://i.imgur.com/GS2cAiI.jpeg",
    "linkedin": "https://www.linkedin.com/in/connect-gopinath",
    "expertise": ["Management", "Strategy", "Organizational Behavior"],
    "quote": "Bridging the gap between academic theory and real-world applications through innovative research."
  },
  {
    "name": "Dr. Richa Khanna",
    "title": "PhD in Psychology",
    "institution": "University of Wisconsin-Madison",
    "institutionLogo": "https://i.imgur.com/bJJbzbc.png",
    "image": "https://media.licdn.com/dms/image/v2/C4D03AQFjfk1Dh00jew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1656395679390?e=1746057600&v=beta&t=sWiDCKjlclpIYXEvVLS1AIVo9cYxFkxvf0e-i99j8mU",
    "linkedin": "https://www.linkedin.com/in/jainshreyansh108/",
    "expertise": ["Clinical Psychology", "Cognitive Neuroscience", "Behavioral Research"],
    "quote": "Inspiring students to explore the depths of human behavior and cognition through research."
  },
  {
    "name": "Dr. Mukherji",
    "title": "Professor",
    "institution": "IIM Bangalore",
    "institutionLogo": "/unilogo/IIM_Bangalore_Logo.png",
    "image": "https://i.imgur.com/77BFLow.jpeg",
    "linkedin": "https://www.linkedin.com/in/sourav-mukherji-023462",
    "expertise": ["Finance", "Economics", "Financial Modeling"],
    "quote": "Guiding the next generation of researchers to push boundaries and create impactful knowledge."
  },
  {
    "name": "Dr. Rajiv Sethi",
    "title": "Professor of Economics",
    "institution": "Columbia University",
    "institutionLogo": "/unilogo/columbia university.png",
    "image": "https://i.imgur.com/VddqrGS.jpeg",
    "linkedin": "https://www.linkedin.com/in/rajiv-sethi-0475a3a/",
    "expertise": ["Game Theory", "Economic Theory", "Microeconomics"],
    "quote": "Fostering critical thinking and analytical skills through collaborative research projects."
  },
  {
    "name": "Dr. Waheeda Khan",
    "title": "Professor, Faculty of Behavioural Sciences & Advisor",
    "institution": "SGT University",
    "institutionLogo": "https://i.imgur.com/bYhX79Y.png",
    "image": "https://media.licdn.com/dms/image/v2/D4D03AQGtWJ-Uo62K7w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1679756084466?e=1746057600&v=beta&t=b-whg8y_jJJAj6fW9f-DvtctpWm4cWSJSLjUWHN3Tr0",
    "linkedin": "https://www.linkedin.com/in/dr-waheeda-khan-301b5810/",
    "expertise": ["Psychology", "Mental Health", "Counseling", "Behavioral Research"],
    "quote": "Empowering research and education in psychology, mental health, and well-being through global collaborations."
  },
  {
    "name": "Dr. Piyusha Majumdar",
    "title": "Associate Professor & Implementation Science Researcher",
    "institution": "IIHMR University",
    "institutionLogo": "https://i.imgur.com/TmaV6Bb.png",
    "image": "https://media.licdn.com/dms/image/v2/D4D03AQHLSF76-OJtRg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1686293058158?e=1746057600&v=beta&t=yob06-lmp5kRYIk5lce7PCgH9JHrOek_kCksiEmtlK8",
    "linkedin": "https://www.linkedin.com/in/piyushamajumdar/",
    "expertise": ["Public Health", "Implementation Science", "Global Health Research"],
    "quote": "Advancing public health through implementation research and cross-disciplinary collaborations."
  }
];

const CarouselProgress = ({ current, total }) => (
  <div className="flex items-center gap-4 w-[200px]">
    <div className="text-sm font-medium text-gray-500">
      {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </div>
    <div className="flex-1 h-[2px] bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-[#478af6] transition-all duration-300"
        style={{ width: `${((current + 1) / total) * 100}%` }}
      />
    </div>
  </div>
)

const MentorCard = ({ mentor }) => (
  <div className="group relative bg-gradient-to-br from-[#478af6]/5 to-white rounded-2xl p-6 md:p-8 h-[400px] md:h-[420px] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(71,138,246,0.15)] border border-[#478af6]/10">
    {/* Animated Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#478af6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(71,138,246,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Profile Section */}
    <div className="relative flex items-start gap-4 md:gap-6 mb-6 md:mb-8">
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105">
        <Image
          src={mentor.image}
          alt={mentor.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 group-hover:text-[#478af6] transition-colors duration-300">{mentor.name}</h3>
        <p className="text-sm text-[#478af6] mb-1 font-medium">{mentor.title}</p>
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6">
            <Image
              src={mentor.institutionLogo}
              alt={mentor.institution}
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-500">{mentor.institution}</p>
        </div>
      </div>
    </div>

    {/* Quote */}
    <p className="text-gray-600 italic mb-6 line-clamp-3 text-sm md:text-base group-hover:line-clamp-none transition-all duration-300">{mentor.quote}</p>

    {/* Expertise Tags */}
    <div className="flex flex-wrap gap-2 mb-8">
      {mentor.expertise.map((skill, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-[#478af6]/10 text-[#478af6] text-sm rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-md"
        >
          {skill}
        </span>
      ))}
    </div>

    {/* LinkedIn Button */}
    <a
      href={mentor.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 flex items-center justify-center gap-2 py-3 px-6 bg-[#478af6] text-white rounded-xl hover:bg-[#3870d8] transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg"
    >
      <LinkedinIcon className="w-4 h-4" />
      <span className="text-sm font-medium">Connect on LinkedIn</span>
    </a>

    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#478af6]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl" />
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#478af6]/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl" />
  </div>
)

export default function Mentors() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  useEffect(() => {
    if (!api) return
    const autoPlay = () => api.scrollNext()
    const intervalId = setInterval(autoPlay, 5000)
    return () => clearInterval(intervalId)
  }, [api])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Expert Mentors"
          title="Learn from the"
          highlightedWord="Best"
          subtitle="Work with accomplished researchers and industry experts who will guide you through your research journey"
        />

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-[#478af6]/5 rounded-2xl p-6 text-center">
              <GraduationCap className="w-8 h-8 text-[#478af6] mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900 mb-1">200+</p>
              <p className="text-sm text-gray-600">Research Papers</p>
            </div>
            <div className="bg-[#478af6]/5 rounded-2xl p-6 text-center">
              <GraduationCap className="w-8 h-8 text-[#478af6] mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900 mb-1">50+</p>
              <p className="text-sm text-gray-600">Global Mentors</p>
            </div>
            <div className="bg-[#478af6]/5 rounded-2xl p-6 text-center">
              <GraduationCap className="w-8 h-8 text-[#478af6] mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900 mb-1">1000+</p>
              <p className="text-sm text-gray-600">Network Connections</p>
            </div>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-4">
              {mentors.map((mentor, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <MentorCard mentor={mentor} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-8 mt-8 md:mt-12">
              <button
                onClick={() => api?.scrollPrev()}
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:border-[#478af6]/20 hover:bg-[#478af6]/5 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-[#478af6] transition-transform group-hover:-translate-x-1" />
              </button>
              
              <CarouselProgress 
                current={current} 
                total={mentors.length} 
              />
              
              <button
                onClick={() => api?.scrollNext()}
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:border-[#478af6]/20 hover:bg-[#478af6]/5 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-[#478af6] transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <a 
            href="/#contact"
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-[#478af6] text-white rounded-full font-medium hover:bg-[#3870d8] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Start Your Research Journey
            <ExternalLink className="ml-2 w-4 h-4 md:w-5 md:h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
