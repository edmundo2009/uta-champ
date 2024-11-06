'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Music2 } from 'lucide-react'

// Note: Add these fonts to your layout.tsx or import them in your CSS
// import { Dela_Gothic_One, Zen_Antique } from 'next/font/google'

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* Animated particles */}
      <div className="absolute inset-0 z-[-1]">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-purple-300/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 5 + 3}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative flex min-h-screen items-center justify-center px-4">
        <div className="grid max-w-7xl gap-8 md:grid-cols-[300px_1fr]">
          {/* Logo */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-64 w-64 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 p-1">
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 blur-xl" />
              <div className="relative flex h-full w-full items-center justify-center rounded-full bg-black/90">
                <Music2 className="h-32 w-32 text-white" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start justify-center space-y-6">
            <motion.h1
              className="text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 md:text-8xl"
              style={{
                fontFamily: 'Dela Gothic One, sans-serif',
                transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02
                  }px)`,
              }}
            >
              UTA CHAMP
            </motion.h1>
            <motion.h2
              className="text-2xl font-medium text-white md:text-4xl"
              style={{
                fontFamily: 'Zen Antique, serif',
                transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01
                  }px)`,
              }}
            >
              第３回全国歌のチャンピオン選手権大会情報
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Add this to your global CSS */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}