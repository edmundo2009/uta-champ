'use client'

import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Youtube } from 'lucide-react'
import { SiLine } from '@icons-pack/react-simple-icons'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  // const globalVisibility = useContext(GlobalVisibilityContext)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/80 backdrop-blur-md' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">UTA CHAMP</span>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            {/* Sign In Button */}
            {/* <PulsatingEffect isVisible={globalVisibility?.isVisible || false}> */}
            <Button asChild variant="outline" className="text-black border-white hover:bg-gray-100 hover:text-gray-900">
              <a href="#inquiry">お問い合わせ</a>
              </Button>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2">
              <Link href="#" className="text-white hover:text-green-400 transition-colors">
                <SiLine className="w-5 h-5" />
                <span className="sr-only">Line</span>
              </Link>
              <Link href="https://x.com/uta_champ/" className="text-white hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://x.com/uta_champ/" className="text-white hover:text-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-red-500 transition-colors">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

