'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '../Button'
import Image from 'next/image'

export default function InternshipHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0f172a] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCBNIC0xNSA3NSBMIDc1IC0xNSBNIC0zMCA5MCBMIDkwIC0zMCIgc3Ryb2tlPSIjMjAyODNhIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        {/* Gradient blobs */}
        <div className="absolute top-0 -left-48 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-48 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-48 left-48 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-32">
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
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-3 py-1 space-x-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">Premium Internship Program For Only High Schoolers</span>
                </motion.div>

                {/* Heading */}
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                    Unlock Opportunities,
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                      Gain Experience,
                    </span>
                    <br />
                    Build Your Future! 🚀
                  </h1>
                  <p className="text-xl text-gray-400 max-w-xl">
                    Get industry exposure with exclusive Career Discovery internship opportunities.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-400">Placement Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">500+</div>
                    <div className="text-sm text-gray-400">Partner Companies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">50k+</div>
                    <div className="text-sm text-gray-400">Success Stories</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    href="/#contact" 
                    variant="primary"
                    className="group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Join Now
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                  
                  <Button 
                    href="#top-fields" 
                    variant="white"
                    className="group"
                  >
                    Explore Opportunities
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <div className="relative hidden lg:block h-[600px]">
              {/* Background Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute inset-0 rounded-2xl overflow-hidden"
              >
                <Image
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Internship"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent" />
              </motion.div>

              {/* Floating Cards */}
              <div className="relative h-full">
                {/* Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-12 -right-12 bg-white rounded-xl shadow-lg p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">100%</div>
                      <div className="text-sm text-gray-600">Guaranteed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                  </div>
                </motion.div>

                {/* Features Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-1/2 -left-12 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-white">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <Sparkles className="w-5 h-5 text-blue-400" />
                      </div>
                      <span>Real Industry Experience</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <div className="p-2 rounded-lg bg-purple-500/20">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                      </div>
                      <span>Top Companies</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <div className="p-2 rounded-lg bg-pink-500/20">
                        <Sparkles className="w-5 h-5 text-pink-400" />
                      </div>
                      <span>Certification</span>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}