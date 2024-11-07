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
        }}>
      </div>

      {/*//TODO Main Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-4 pt-12 md:pt-0">

        <div className="grid max-w-12xl md:grid-cols-[300px_1fr]">
        {/* // 2 columns, 2 rows on medium screens */}
        {/* <div className="grid max-w-12xl md:gap-2 md:grid-cols-2 md:grid-rows-[auto_auto]"> */}

          {/* Logo */}
          <div className="relative flex items-center justify-center ">
            <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-72 md:w-72 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 p-1">
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 blur-xl" />
              <div className="relative flex h-full w-full items-center justify-center rounded-full bg-black/100">
                <Image
                  className="h-50 w-50 sm:h-58 sm:w-58  rounded-full"
                  alt="uta Champ Logo"
                  src={FeaturesImage}
                  />
              </div>
            </div>
          </div>

          {/* Text Content //tsc 2ndITEM 1st Row, 2nd Column */}
          {/* items-start: horizontally (left-aligned) */}
          <div className="flex flex-col md:items-start justify-center 
            -mt-5 md:mt-0 
            -space-y-10 sm:space-y-0 md:space-y-10 lg:space-y-10 
            ">

            {/* block by default, stacks vertically */}
            <motion.h1
              style={{ transform: getTransform(0.02), }}
              className="tracking-tighter block md:inline-block
              lg:ml-20
              "
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
                  className="font-cinzel md:px-0
                  text-5xl sm:text-7xl md:text-9xl lg:text-12xl
                  "
                  style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}
                  >
                  UTA CHAMP
                </text>
              </svg>
            </motion.h1>

            {/* 2nd Row, spanning both columns */}
            {/* </div>
            //tsc 3rdITEM
            <div className="col-span-2">  */}

            <motion.h2 className="font-zen-antique text-white"
              style={{ transform: getTransform(0.01) }}
            >
              <div className="text-center text-3xl sm:text-4xl md:text-4xl lg:text-6xl">
                {/* 1st Line */}
                <div>第３回</div>

                {/* 2nd Line with Controlled Breakpoints */}
                <div className="flex flex-wrap justify-center">
                  <span className="block sm:inline md:inline lg:inline">全国歌の</span>
                  <span className="block sm:inline md:inline lg:inline">チャンピオン</span>
                  <span className="block sm:inline md:inline lg:inline">選手権大会</span>
                </div>
              </div>
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