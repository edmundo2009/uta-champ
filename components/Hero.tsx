'use client'

// Importing necessary hooks and components
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from "next/image";
import FeaturesImage from "@/public/utaChamp.png";
import useMousePosition from '@/app/useMousePosition';


export default function HeroComponent() {
  const { getTransform, mousePosition, containerRef } = useMousePosition();

  return (
    <div ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden  
      bg-gradient-to-b
      from-gray-950
      via-indigo-900 
      to-blue-100 
      ">

      {/* Animated particles:unique floating animation, created using TailwindCSS utilClasses CSS keyframes */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Spotlight effect using TailwindCSS utilClasses*/}
      <div className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-4 py-12 md:py-0">
        {/* for logo and text */}
        {/* consisten gap all row and column */}
        {/* two-column grid 300px: for 1st column 1fr: 2nd column takes up the remaining space */}
        <div className="grid max-w-7xl md:gap-2 md:grid-cols-[300px_1fr]">
          
          {/* Logo */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-64 w-64 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 p-1">
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 blur-xl" />
              <div className="relative flex h-full w-full items-center justify-center rounded-full bg-black/100">
                <Image
                  className="h-50 w-50 rounded-full"
                  // className="h-64 w-64 rounded-full"
                  alt="uta Champ Logo"
                  src={FeaturesImage}
                  />
              </div>
            </div>
          </div>

          {/* Text Content */}
          {/* items-start: horizontally (left-aligned) */}
          <div className="flex flex-col md:items-start justify-center md:space-y-6 ">

            {/* block by default, stacks vertically */}
            <motion.h1
              className="tracking-tighter block md:inline-block"
              style={{
                // transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`,
                transform: getTransform(0.02),
              }}
            >
              <svg width="100%" height="100%" className="overflow-visible">
                <defs>
                  <linearGradient id="textGradient" x1="0" y1="0" x2="100%" y2="0">
                    <stop offset="0%" stopColor="#FFF000" /> {/* #FCD34D */}
                    <stop offset="100%" stopColor="#F59E0B" /> {/* F59E0B */}
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  filter="url(#glow)"
                  fill="url(#textGradient)"
                  className="font-cinzel text-6xl md:text-8xl md:px-0"
                  style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}
                  >
                  UTA CHAMP
                </text>
              </svg>

            </motion.h1>
            <motion.h2
              className="font-zen-antique text-4xl md:text-6xl text-white"
              // className={`font-zen-antique text-4xl md:text-6xl text-white `}
              style={{
                // transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`,
                transform: getTransform(0.01),
              }}
            >
              第３回<br />全国歌のチャンピオン選手権大会
              {/* 第３回<br />全国歌の<br className=" md:hidden" />チャンピオン選手権大会 */}
            </motion.h2>
          </div>

        </div>
      </div>

      {/* Add to global CSS???:defines the `float` animation used by the particles.*/}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          50% {
            transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  )
}