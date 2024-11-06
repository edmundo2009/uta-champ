'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Music2, Music } from 'lucide-react'

// Note: Add these fonts to your layout.tsx or import them in your CSS
// import { Dela_Gothic_One, Zen_Antique } from 'next/font/google'

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const notesAnimation = useAnimation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const animateNotes = async () => {
      while (true) {
        await notesAnimation.start({
          y: [null, -200],
          opacity: [0, 1, 0],
          transition: { duration: 4, ease: 'easeOut' },
        })
        await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 1000))
      }
    }
    animateNotes()
  }, [notesAnimation])

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 5 + 3}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-4">
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
              <svg width="100%" height="100%" className="overflow-visible">
                <motion.text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-current"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                >
                  UTA CHAMP
                </motion.text>
                <motion.path
                  d="M0,25 Q50,0 100,25"
                  fill="none"
                  stroke="url(#textGradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <defs>
                  <linearGradient id="textGradient" x1="0" y1="0" x2="100%" y2="0">
                    <stop offset="0%" stopColor="#FCD34D" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </svg>
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

      {/* Floating music notes */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-30 flex justify-around"
        animate={notesAnimation}
      >
        {[...Array(5)].map((_, i) => (
          <Music
            key={i}
            className="text-white/50"
            size={24 + Math.random() * 24}
            style={{ transform: `rotate(${Math.random() * 360}deg)` }}
          />
        ))}
      </motion.div>

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