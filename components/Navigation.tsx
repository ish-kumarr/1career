'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import Button from './Button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = isScrolled ? "text-gray-900 hover:text-gray-600" : "text-white hover:text-gray-200"

  const navItems = [
    { href: '/', label: 'Career Lab' },
    { href: '/research', label: 'Research' },
    { href: '/internship', label: 'Internship' },
  ]

  const handleContactClick = () => {
    setIsMobileMenuOpen(false) // Close the sheet
    // Add a small delay to ensure the sheet closes before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : ''}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="https://i.imgur.com/YrXWWrk.png" 
              alt="Career Discovery Logo" 
              width={32} 
              height={32} 
              className="mr-3"
            />
            <span className={`text-2xl font-bold ${linkClass}`}>
              Career Discovery
            </span>
          </Link>

          {/* Desktop Navigation - Now centered with negative margin */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8 -ml-[111px]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Us Button (Desktop) */}
          <div className="hidden md:block">
            <Button href="#contact" variant={isScrolled ? "primary" : "white"}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className={`md:hidden ml-auto ${linkClass}`}>
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-screen pt-16">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold mb-6">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className="text-xl text-gray-800 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button 
                  onClick={handleContactClick}
                  className="mt-4 inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-[#356bff] text-white hover:bg-[#2e5ee6]"
                >
                  Contact Us
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
