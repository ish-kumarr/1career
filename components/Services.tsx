'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Book, Bot, Users, Notebook as Robot, Mic, Megaphone, ShoppingBag, Globe, Heart, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
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
      "📖 A fully written & formatted book",
      "📖 A launch plan & publishing roadmap",
      "📖 A writing portfolio & author brand"
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
      "🤖 Fully functional AI chatbot",
      "🤖 Technical documentation",
      "🤖 Deployment portfolio"
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
      "🌟 Strong social media presence",
      "🌟 Engaged follower community",
      "🌟 Brand collaboration portfolio"
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
      "🤖 Working robot prototype",
      "🤖 Technical documentation",
      "🤖 Engineering portfolio"
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
      "🎙️ Live podcast show",
      "🎙️ Production portfolio",
      "🎙️ Audience growth strategy"
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
      "🚀 Operational agency",
      "🚀 Client portfolio",
      "🚀 Growth roadmap"
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
      "💼 Active online store",
      "💼 Sales framework",
      "💼 Business portfolio"
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
      "🌐 Live website",
      "🌐 Design portfolio",
      "🌐 Technical documentation"
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
      "💝 Registered NPO",
      "💝 Impact portfolio",
      "💝 Sustainability plan"
    ],
    gradient: "from-emerald-400 to-green-500"
  }
]

const CareerCard = ({ career, isMobile }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = (e) => {
    e.stopPropagation()
    setIsFlipped(!isFlipped)
  }

  return (
    <div 
      className={`relative w-full ${isMobile ? 'h-[400px]' : 'h-[320px]'} cursor-pointer perspective`}
      onMouseEnter={() => !isMobile && setIsFlipped(true)}
      onMouseLeave={() => !isMobile && setIsFlipped(false)}
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
          {isMobile && (
            <button 
              className="mt-4 text-white text-sm underline opacity-70"
              onClick={handleFlip}
            >
              View outcomes
            </button>
          )}
        </div>

        {/* Back of card */}
        <div 
          className={`absolute w-full h-full rounded-xl shadow-lg p-6 flex flex-col justify-between backface-hidden bg-gradient-to-br ${career.gradient}`} 
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">What You'll Achieve</h3>
            <ul className="text-lg mb-4 text-white space-y-4">
              {career.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          {isMobile && (
            <button 
              className="mt-4 text-white text-sm underline opacity-70"
              onClick={handleFlip}
            >
              View details
            </button>
          )}
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

const MobileCarousel = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <div className="md:hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {careerPathways.map((career, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="px-2">
                <CareerCard career={career} isMobile={true} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => api?.scrollPrev()}
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex gap-1">
            {careerPathways.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current 
                    ? 'w-6 bg-primary' 
                    : 'w-1.5 bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => api?.scrollNext()}
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-100"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </Carousel>
    </div>
  )
}

const Services = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  const handlePrevClick = () => {
    if (!api) return
    api.scrollPrev()
  }

  const handleNextClick = () => {
    if (!api) return
    api.scrollNext()
  }

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
        
        {/* Desktop Carousel */}
        <div className="relative max-w-7xl mx-auto mt-16 hidden md:block">
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
                  <CareerCard career={career} isMobile={false} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-center gap-8 mt-8 md:mt-12">
              <button
                onClick={handlePrevClick}
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:border-[#356bff]/20 hover:bg-[#356bff]/5 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-[#356bff] transition-transform group-hover:-translate-x-1" />
              </button>
              
              <CarouselProgress 
                current={current} 
                total={careerPathways.length} 
              />
              
              <button
                onClick={handleNextClick}
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:border-[#356bff]/20 hover:bg-[#356bff]/5 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-[#356bff] transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Carousel>
        </div>

        {/* Mobile Carousel */}
        <div className="mt-16">
          <MobileCarousel />
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
