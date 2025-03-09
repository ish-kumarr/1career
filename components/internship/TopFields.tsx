'use client'

import { motion } from 'framer-motion'
import { TrendingUp, LineChart, Search, Users, Cog, Brain } from 'lucide-react'
import SectionHeading from '../SectionHeading'

const fields = [
  {
    title: "Marketing",
    icon: TrendingUp,
    description: "Drive brand growth and digital strategies",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Finance",
    icon: LineChart,
    description: "Analyze markets and financial planning",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Research",
    icon: Search,
    description: "Conduct studies and analyze data",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    title: "Business Development",
    icon: Brain,
    description: "Grow business opportunities and partnerships",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    title: "Operations Management",
    icon: Cog,
    description: "Optimize processes and workflows",
    gradient: "from-emerald-500 to-green-500"
  },
  {
    title: "Human Resources",
    icon: Users,
    description: "Manage talent and organizational development",
    gradient: "from-indigo-500 to-blue-500"
  }
]

const FieldCard = ({ field, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-500"
  >
    {/* Background gradient */}
    <div className={`absolute inset-0 bg-gradient-to-br ${field.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
    
    {/* Content */}
    <div className="relative z-10">
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${field.gradient} p-2.5 mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
        <field.icon className="w-full h-full text-white" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
        {field.title}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
        {field.description}
      </p>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-full -translate-y-16 translate-x-16 transform opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl" />
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-100 to-transparent rounded-full translate-y-12 -translate-x-8 transform opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl" />
  </motion.div>
)

export default function TopFields() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute left-0 bottom-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <SectionHeading
          badge="Top Fields"
          title="Explore Popular"
          highlightedWord="Industries"
          subtitle="Discover internship opportunities across diverse sectors and kickstart your career journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {fields.map((field, index) => (
            <FieldCard key={index} field={field} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}