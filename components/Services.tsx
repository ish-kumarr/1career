'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Book, Bot, Users, Notebook as Robot, Mic, Megaphone, ShoppingBag, Globe, Heart, ArrowRight, ChevronLeft, ChevronRight, BookOpen, Cpu, UserPlus, Wrench, Headphones, Share2, Store, Globe2, HeartHandshake } from 'lucide-react'
import SectionHeading from './SectionHeading'
import CareerPathwaysModal from './CareerPathwaysModal'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const careerPathways = [
  {
    title: "PUBLISH A BOOK",
    icon: Book,
    details: [
      "1-on-1 Mentorship with Experienced Author",
      "Structured Writing Process",
      "Publishing Support & Guidance",
      "Professional Editing & Proofreading"
    ],
    outcomes: [
      { text: "A fully written & formatted book", icon: BookOpen },
      { text: "A launch plan & publishing roadmap", icon: Share2 },
      { text: "A writing portfolio & author brand", icon: UserPlus }
    ],
    gradient: "from-amber-400 to-orange-500"
  },
  {
    title: "BUILD AN AI CHATBOT",
    icon: Bot,
    details: [
      "AI Development Fundamentals",
      "NLP & Machine Learning Training",
      "Chatbot Architecture Design",
      "Integration & Deployment Support"
    ],
    outcomes: [
      { text: "Fully functional AI chatbot", icon: Cpu },
      { text: "Technical documentation", icon: BookOpen },
      { text: "Deployment portfolio", icon: Share2 }
    ],
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    title: "BECOME AN INFLUENCER",
    icon: Users,
    details: [
      "Content Strategy Development",
      "Personal Brand Building",
      "Audience Engagement Techniques",
      "Monetization Strategies"
    ],
    outcomes: [
      { text: "Strong social media presence", icon: UserPlus },
      { text: "Engaged follower community", icon: Users },
      { text: "Brand collaboration portfolio", icon: Share2 }
    ],
    gradient: "from-pink-400 to-purple-500"
  },
  {
    title: "BUILD A ROBOT",
    icon: Robot,
    details: [
      "Robotics Engineering Basics",
      "Hardware & Software Integration",
      "Sensor Programming",
      "Testing & Optimization"
    ],
    outcomes: [
      { text: "Working robot prototype", icon: Wrench },
      { text: "Technical documentation", icon: BookOpen },
      { text: "Engineering portfolio", icon: Share2 }
    ],
    gradient: "from-green-400 to-teal-500"
  },
  {
    title: "START A PODCAST",
    icon: Mic,
    details: [
      "Audio Production Training",
      "Content Planning & Scripting",
      "Interview Techniques",
      "Distribution Strategy"
    ],
    outcomes: [
      { text: "Live podcast show", icon: Headphones },
      { text: "Production portfolio", icon: Share2 },
      { text: "Audience growth strategy", icon: UserPlus }
    ],
    gradient: "from-red-400 to-pink-500"
  },
  {
    title: "MARKETING AGENCY",
    icon: Megaphone,
    details: [
      "Agency Business Model",
      "Client Acquisition Strategy",
      "Service Portfolio Development",
      "Team Management"
    ],
    outcomes: [
      { text: "Operational agency", icon: Wrench },
      { text: "Client portfolio", icon: Users },
      { text: "Growth roadmap", icon: Share2 }
    ],
    gradient: "from-violet-400 to-purple-500"
  },
  {
    title: "ONLINE BUSINESS",
    icon: ShoppingBag,
    details: [
      "Business Model Development",
      "E-commerce Platform Setup",
      "Supply Chain Management",
      "Digital Marketing Strategy"
    ],
    outcomes: [
      { text: "Active online store", icon: Store },
      { text: "Sales framework", icon: Share2 },
      { text: "Business portfolio", icon: BookOpen }
    ],
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    title: "DIGITAL WEBSITE",
    icon: Globe,
    details: [
      "Web Development Training",
      "UI/UX Design Principles",
      "Content Management",
      "SEO Optimization"
    ],
    outcomes: [
      { text: "Live website", icon: Globe2 },
      { text: "Design portfolio", icon: Share2 },
      { text: "Technical documentation", icon: BookOpen }
    ],
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    title: "LAUNCH NPO",
    icon: Heart,
    details: [
      "Non-Profit Registration",
      "Mission & Vision Planning",
      "Fundraising Strategy",
      "Community Engagement"
    ],
    outcomes: [
      { text: "Registered NPO", icon: HeartHandshake },
      { text: "Impact portfolio", icon: Share2 },
      { text: "Sustainability plan", icon: BookOpen }
    ],
    gradient: "from-emerald-400 to-green-500"
  }
]

const CareerCard = ({ career, isMobile }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isMobile) {
      setIsFlipped(isHovered);
    }
  }, [isHovered, isMobile]);

  const handleFlip = (e) => {
    e.stopPropagation()
    setIsFlipped(!isFlipped)
  }

  return (
    <div 
      className={`relative w-full ${isMobile ? 'h-[400px]' : 'h-[320px]'} cursor-pointer perspective`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => isMobile && setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div className={`absolute w-full h-full rounded-xl shadow-lg p-6 flex flex-col justify-between backface-hidden bg-gradient-to-br ${career.gradient}`}>
          <div>
            <career.icon className="w-12 h-12 text-white mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-white">{career.title}</h3>
            <ul className="text-sm text-white">
              {career.details.map((detail, index) => (
                <li key={index} className="mb-2 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            {isMobile && (
              <button 
                className="text-white text-sm font-medium underline opacity-80 hover:opacity-100 transition-opacity"
                onClick={handleFlip}
              >
                View More
              </button>
            )}
            {!isMobile && (
              <div className="text-white text-sm font-medium opacity-80">
                Hover to see more
              </div>
            )}
          </div>
        </div>

        {/* Back of card */}
        <div 
          className={`absolute w-full h-full rounded-xl shadow-lg p-6 flex flex-col justify-between backface-hidden bg-gradient-to-br ${career.gradient}`} 
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">What You'll Achieve</h3>
            <ul className="mb-4 text-white space-y-4">
              {career.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3 shadow-lg">
                    <outcome.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">{outcome.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            {isMobile && (
              <button 
                className="text-white text-sm font-medium underline opacity-80 hover:opacity-100 transition-opacity"
                onClick={handleFlip}
              >
                Flip Back
              </button>
            )}
            {!isMobile && (
              <div className="text-white text-sm font-medium opacity-80">
                Move mouse away to flip back
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const CarouselProgress = ({ current, total }) => (
  <div className="flex items-center gap-4 w-[200px]">
    <div className="text-sm font-medium text-gray-500">
      {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </div>
    <div className="flex-1 h-[2px] bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-primary transition-all duration-300"
        style={{ width: `${((current + 1) / total) * 100}%` }}
      />
    </div>
  </div>
)

const Services = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute left-0 bottom-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <SectionHeading 
          badge="Career Pathways"
          title="Explore Your Future"
          highlightedWord="Outcomes"
          subtitle="Discover diverse opportunities and their potential outcomes tailored to your interests and abilities"
        />
        
        <div className="relative max-w-7xl mx-auto mt-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-4">
              {careerPathways.map((career, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CareerCard career={career} isMobile={false} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-center gap-8 mt-8 md:mt-12">
              <button
                onClick={() => api?.scrollPrev()}
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:border-[#356bff]/20 hover:bg-[#356bff]/5 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-[#356bff] transition-transform group-hover:-translate-x-1" />
              </button>
              
              <CarouselProgress 
                current={current} 
                total={careerPathways.length} 
              />
              
              <button
                onClick={() => api?.scrollNext()}
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:border-[#356bff]/20 hover:bg-[#356bff]/5 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-[#356bff] transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Carousel>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <CareerPathwaysModal>
            <button className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 group shadow-lg hover:shadow-xl">
              Explore All Pathways
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </CareerPathwaysModal>
        </motion.div>
      </div>
    </section>
  )
}

export default Services