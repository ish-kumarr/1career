'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, Star, Users, Rocket } from 'lucide-react'
import Button from './Button'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-amber-400 mr-2" />
              <span className="text-sm font-medium text-white">Shaping Future Leaders</span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Discover Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Dream Career Path
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Join thousands of students who've found their perfect career path through our personalized guidance, expert mentorship, and hands-on experience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Career Paths</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">2k+</div>
                <div className="text-sm text-gray-400">Success Stories</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                href="/career-assessment" 
                variant="primary"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Journey
                  <Rocket className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Button>
              
              <Button 
                href="/explore-careers" 
                variant="white"
                className="group"
              >
                <span className="flex items-center">
                  Explore Careers
                  <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-6">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="ml-2 text-gray-300">4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="ml-2 text-gray-300">2000+ Students</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                alt="Students collaborating"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-violet-500 p-4 rounded-lg text-white shadow-xl"
            >
              <div className="text-sm font-semibold">Research</div>
              <div className="text-xs opacity-80">with Top Universities</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-br from-amber-500 to-red-500 p-4 rounded-lg text-white shadow-xl"
            >
              <div className="text-sm font-semibold">Internships</div>
              <div className="text-xs opacity-80">at Leading Companies</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero