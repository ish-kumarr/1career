'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Brain, LineChart, Newspaper, Lightbulb, DollarSign, Heart, ChevronRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from 'react'

const pathways = [
  {
    name: "MARKETING",
    icon: TrendingUp,
    description: "Digital strategies, brand management, and market analysis",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    name: "STEM",
    icon: Brain,
    description: "Science, Technology, Engineering, and Mathematics",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "FINANCE",
    icon: LineChart,
    description: "Investment banking, financial analysis, and wealth management",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    name: "JOURNALISM",
    icon: Newspaper,
    description: "Digital media, investigative reporting, and content creation",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    name: "ENTREPRENEURSHIP",
    icon: Lightbulb,
    description: "Business development, innovation, and startup leadership",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    name: "ECONOMICS",
    icon: DollarSign,
    description: "Economic analysis, policy research, and market trends",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    name: "PSYCHOLOGY",
    icon: Heart,
    description: "Mental health, behavioral science, and counseling",
    gradient: "from-red-500 to-pink-500"
  }
]

interface CareerPathwaysModalProps {
  children: React.ReactNode;
}

export default function CareerPathwaysModal({ children }: CareerPathwaysModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleExploreClick = () => {
    setIsOpen(false)
    
    // Wait for modal close animation to complete
    setTimeout(() => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-white p-0 gap-0 rounded-[32px] border-none">
        {/* Header Section */}
        <div className="relative overflow-hidden rounded-t-[32px] bg-transparent p-8 text-gray-900">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 animate-fastest-aura"
              style={{
                background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.7) 0%, rgba(59, 130, 246, 1) 30%, rgba(37, 99, 235, 1) 70%, rgba(147, 197, 253, 1) 100%)',
                opacity: 0.1,
              }}
            />
            <div className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,1) 80%)',
              }}
            />
          </div>
          
          <div className="relative">
            <DialogHeader>
              <DialogTitle className="text-2xl md:text-3xl font-bold text-center mb-3">
                Discover Your Perfect Career Path
              </DialogTitle>
              <p className="text-gray-600 text-center text-sm md:text-base">
                Explore these major fields across our 50+ career pathways
              </p>
            </DialogHeader>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="grid gap-4">
            {pathways.map((pathway, index) => (
              <motion.div
                key={pathway.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-gray-200 p-4 transition-all duration-300 hover:shadow-lg"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${pathway.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pathway.gradient} p-2.5 transform group-hover:scale-110 transition-transform duration-300`}>
                    <pathway.icon className="w-full h-full text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#356bff] transition-colors duration-300">
                      {pathway.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {pathway.description}
                    </p>
                  </div>

                  <ChevronRight className="w-5 h-5 text-gray-400 transform transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t p-6 bg-gray-50/50 rounded-b-[32px]">
          <button
            onClick={handleExploreClick}
            className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#356bff] text-white rounded-2xl font-semibold hover:bg-[#2e5ee6] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center">
              Explore All 50+ Pathways
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}