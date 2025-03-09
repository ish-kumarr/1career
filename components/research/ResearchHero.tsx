'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '../Button'
import Image from 'next/image'

const universities = [
  { name: "Harvard University", logo: "https://i.imgur.com/FdZN6PL.png" },
  { name: "Columbia University", logo: "https://i.imgur.com/4Y84nmv.png" },
  { name: "Stanford University", logo: "https://i.imgur.com/gFgSuiZ.png" },
  { name: "IIM Bangalore", logo: "https://i.imgur.com/nxOvzp1.png" },
  { name: "Oxford University", logo: "https://i.imgur.com/lnwtjkh.png" },
  { name: "Cambridge University", logo: "https://i.imgur.com/OYEnU8V.png" },
  { name: "MIT", logo: "https://i.imgur.com/i9aAzh8.png" },
  { name: "Yale University", logo: "https://i.imgur.com/lXj6Rsf.png" }
]

export default function ResearchHero() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section className="relative min-h-screen flex items-center bg-transparent overflow-hidden">
      {/* Background gradient like landing page */}
      <div
        className="absolute top-0 left-0 right-0 h-[500px] -z-10 overflow-hidden"
      >
        <div
          className="absolute inset-0 animate-fastest-aura"
          style={{
            background:
              'linear-gradient(135deg, rgba(250, 204, 21, 0.7) 0%, rgba(59, 130, 246, 1) 30%, rgba(37, 99, 235, 1) 70%, rgba(147, 197, 253, 1) 100%)',
            opacity: 0.9,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,1) 80%)',
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Badge - Hidden on Mobile */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="hidden md:inline-flex items-center px-3 py-1 space-x-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">Research Excellence Program</span>
                </motion.div>

                {/* Heading */}
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Empower Your Future with Research
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 mt-2">
                    Explore, Innovate, Excel!
                    </span>
                  </h1>
                  <p className="text-base md:text-xl text-gray-600 max-w-xl">
                  Shaping the Future, One Researcher at a Time!
                  </p>
                </div>

                {/* Mobile Image - Shown only on mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="lg:hidden relative w-full h-48 rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                    alt="Research Excellence"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <Button
                    href="/#contact"
                    variant="primary"
                    className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center">
                      Start Your Research Journey
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                  <Button
                    href="#why-research"
                    variant="primary-outline"
                    className="group border border-gray-400 text-gray-700 hover:border-blue-600 hover:text-blue-900 transition-all duration-300"
                  >
                    Explore More
                  </Button>
                </motion.div>

                {/* Stats Card - Mobile Only */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="lg:hidden bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-around gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">100+</div>
                      <div className="text-sm text-gray-600">Research Papers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">50+</div>
                      <div className="text-sm text-gray-600">Global Mentors</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                    alt="Research Excellence"
                    width={800}
                    height={600}
                    className="object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">100+</div>
                      <div className="text-sm text-gray-600">Research Papers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">50+</div>
                      <div className="text-sm text-gray-600">Global Mentors</div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full opacity-20 blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* University Logos Marquee */}
        <div className="mt-32 relative">
          {/* Fade gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Desktop Marquee */}
          <div className="hidden md:block overflow-hidden">
            <motion.div
              className="flex gap-8 py-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }
              }}
            >
              {[...Array(2)].flatMap(() => universities).map((uni, index) => (
                <div key={`desktop-${index}`} className="flex items-center space-x-2 flex-shrink-0">
                  <Image
                    src={uni.logo}
                    alt={uni.name}
                    width={32}
                    height={32}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <span className="text-gray-600 text-sm whitespace-nowrap">{uni.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Marquee (Faster) */}
          <div className="md:hidden overflow-hidden">
            <motion.div
              className="flex gap-8 py-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 15, // Even faster speed for mobile
                  repeat: Infinity,
                  ease: "linear",
                }
              }}
            >
              {[...Array(2)].flatMap(() => universities).map((uni, index) => (
                <div key={`mobile-${index}`} className="flex items-center space-x-2 flex-shrink-0">
                  <Image
                    src={uni.logo}
                    alt={uni.name}
                    width={24} // Slightly smaller for mobile
                    height={24}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <span className="text-gray-600 text-xs whitespace-nowrap">{uni.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}