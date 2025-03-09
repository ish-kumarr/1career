'use client'

import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  href: string
  variant: 'primary' | 'secondary' | 'white'
  children: React.ReactNode
  className?: string
}

const Button: React.FC<ButtonProps> = ({ href, variant, children, className = '' }) => {
  const baseStyles = "relative inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium transition-all duration-300"
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5",
    secondary: "bg-transparent text-[#356bff] border-2 border-[#356bff] hover:bg-[#356bff]/5",
    white: "bg-white text-gray-900 hover:shadow-lg hover:shadow-white/25 hover:-translate-y-0.5"
  }

  return (
    <Link 
      href={href} 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}

export default Button