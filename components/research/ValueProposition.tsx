'use client'

import { motion } from 'framer-motion'
import { Users, GraduationCap, BookOpen, Briefcase, Award, ArrowRight, Sparkles } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useState, useEffect } from 'react'

const features = [
  {
    icon: Users,
    title: "Exclusive 1:1 Mentorship",
    description: "Get personalized attention and structured guidance throughout your research journey.",
    image: "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    size: "large",
    color: "from-blue-500/10 to-violet-500/10"
  },
  {
    icon: GraduationCap,
    title: "World-Class Mentors",
    description: "Learn from experts at IIMs, Columbia, Harvard, and Stanford.",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    size: "small",
    color: "from-emerald-500/10 to-teal-500/10"
  },
  {
    icon: BookOpen,
    title: "Top-Tier Publications",
    description: "Get published in renowned international journals.",
    image: "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    size: "small",
    color: "from-orange-500/10 to-amber-500/10"
  },
  {
    icon: Briefcase,
    title: "End-to-End Support",
    description: "Comprehensive guidance from topic selection to publication.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    size: "small",
    color: "from-pink-500/10 to-rose-500/10"
  },
  {
    icon: Award,
    title: "Stand Out",
    description: "Build a distinguished academic and professional profile.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size: "small",
    color: "from-purple-500/10 to-indigo-500/10"
  },
  {
    icon: Sparkles,
    title: "Join 2000+ Successful Researchers",
    description: "who have made their mark in academia",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    size: "small",
    color: "from-[#478af6] to-blue-600",
    cta: true
  }
]

const BentoCard = ({ feature, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-3xl ${feature.cta ? 'bg-gradient-to-br from-[#478af6] to-blue-600' : 'bg-white'} border border-white/10 backdrop-blur-sm ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Background Image with Gradient */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
        {feature.cta ? (
          <>
            {/* Animated aura background for CTA */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.15),transparent_45%)] animate-pulse [animation-delay:0.3s]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_40%)] animate-pulse [animation-delay:0.6s]" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
            </div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 z-10" />
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
            />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full p-6 md:p-8 flex flex-col">
        {!feature.cta && (
          <div className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm mb-4 bg-white/10">
            <feature.icon className="w-6 h-6 text-white" />
          </div>
        )}

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className={`${feature.cta ? 'my-auto text-center' : 'mt-auto'}`}
        >
          {feature.cta ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <h3 className="text-3xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-lg mb-8">{feature.description}</p>
                <a 
                  href="/#contact"
                  className="inline-block text-white text-lg font-medium hover:text-white/90 transition-colors duration-300 group"
                >
                  Start Your Journey
                  <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-semibold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                {feature.title}
              </h3>
              <motion.p 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="text-white/90 text-lg leading-relaxed overflow-hidden"
              >
                {feature.description}
              </motion.p>
            </>
          )}
        </motion.div>
      </div>

      {/* Animated gradient border - only for CTA */}
      {feature.cta && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      )}
    </motion.div>
  )
}

const MobileCarousel = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <div className="md:hidden">
      <Carousel
        opts={{ loop: true }}
        setApi={setApi}
      >
        <CarouselContent>
          {features.map((feature, index) => (
            <CarouselItem key={index}>
              <div className="h-[400px]">
                <BentoCard feature={feature} className="h-full" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="flex justify-center gap-2 mt-6">
        {features.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current ? 'w-8 bg-[#478af6]' : 'w-4 bg-gray-200'
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default function ValueProposition() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-blue-50/30 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient circles */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-100/40 to-violet-200/40 blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-100/40 to-purple-200/40 blur-3xl opacity-60 translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-violet-100/40 to-blue-200/40 blur-3xl opacity-60 -translate-y-1/2 animate-blob animation-delay-4000"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/80"></div>
      </div>

      <div className="container relative mx-auto px-4 py-24">
        <SectionHeading
          badge="Why Choose Us?"
          title="Our Unique Value"
          highlightedWord="Proposition"
          subtitle="At Career Discovery, we provide an unparalleled research experience tailored to help students excel in their academic and career pursuits."
        />

        {/* Desktop Bento Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          {/* Featured Card */}
          <div className="col-span-2 row-span-2 h-[600px]">
            <BentoCard feature={features[0]} className="h-full" />
          </div>

          {/* Smaller Cards */}
          {features.slice(1).map((feature, index) => (
            <div key={index} className="h-[292px]">
              <BentoCard feature={feature} className="h-full" />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <MobileCarousel />
      </div>
    </section>
  )
}