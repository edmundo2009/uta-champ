// 'use client'

// import React, { useState, useEffect, useRef, createContext, useContext } from 'react'

// // Custom hook for intersection observer
// function useInView(threshold = 0.3) {
//   const [isInView, setIsInView] = useState(false)
//   const ref = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsInView(entry.isIntersecting)
//       },
//       { threshold }
//     )

//     if (ref.current) {
//       observer.observe(ref.current)
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current)
//       }
//     }
//   }, [threshold])

//   return [ref, isInView] as const
// }

// // Context to share the visibility state
// const VisibilityContext = createContext(false)

// // Custom hook to manage global visibility state
// export function useGlobalVisibility() {
//   const [isVisible, setIsVisible] = useState(false)
//   return { isVisible, setIsVisible }
// }

// // Global context for visibility
// export const GlobalVisibilityContext = createContext<ReturnType<typeof useGlobalVisibility> | null>(null)

// // Pulsating effect component
// export function PulsatingEffect({ children, isVisible }: { children: React.ReactNode; isVisible: boolean }) {
//   return (
//     <div
//       className={`
//         transition-all duration-300 ease-in-out
//         ${isVisible ? 'animate-pulse shadow-lg shadow-primary/50' : ''}
//       `}
//     >
//       {children}
//     </div>
//   )
// }

// // Section component that triggers the effect
// export function TriggerSection({ children, title }: { children: React.ReactNode; title: string }) {
//   const [ref, isInView] = useInView(0.3)
//   const globalVisibility = useContext(GlobalVisibilityContext)

//   useEffect(() => {
//     if (isInView && globalVisibility) {
//       globalVisibility.setIsVisible(true)
//     }
//   }, [isInView, globalVisibility])

//   return (
//     <VisibilityContext.Provider value={isInView}>
//       <section ref={ref} className="py-20">
//         <PulsatingEffect isVisible={isInView}>
//           <h2 className="text-3xl font-bold mb-4 inline-block">{title}</h2>
//         </PulsatingEffect>
//         {children}
//       </section>
//     </VisibilityContext.Provider>
//   )
// }

// // Example usage
// export default function LandingPage() {
//   const globalVisibility = useGlobalVisibility()

//   return (
//     <GlobalVisibilityContext.Provider value={globalVisibility}>
//       <div className="min-h-screen">
//         <div className="pt-20"> {/* Add padding to account for fixed navbar */}
//           <TriggerSection title="Welcome to Our Amazing Product">
//             <p className="mb-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
//               Vivamus hendrerit arcu sed erat molestie vehicula.
//             </p>
//           </TriggerSection>

//           <TriggerSection title="Discover Our Features">
//             <p className="mb-4">
//               Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
//               Phasellus molestie magna non est bibendum non venenatis nisl tempor.
//             </p>
//           </TriggerSection>

//           <TriggerSection title="Join Us Today">
//             <p className="mb-4">
//               Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
//               Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.
//             </p>
//           </TriggerSection>
//         </div>
//       </div>
//     </GlobalVisibilityContext.Provider>
//   )
// }


'use client'

import React, { useState, useEffect, useRef } from 'react'

// Custom hook for intersection observer
function useInView(threshold = 0.3) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return [ref, isInView] as const
}

// Context to share the visibility state
const VisibilityContext = React.createContext(false)

// Pulsating effect component
function PulsatingEffect({ children, isVisible }: { children: React.ReactNode; isVisible: boolean }) {
  return (
    <div
      className={`
        transition-all duration-900 ease-in-out
        ${isVisible ? 'animate-pulse shadow-lg shadow-primary/50' : ''}
      `}
    >
      {children}
    </div>
  )
}

// Section component that triggers the effect
export function TriggerSection({ children, title }: { children: React.ReactNode; title: string }) {
  const [ref, isInView] = useInView(0.3)

  return (
    <VisibilityContext.Provider value={isInView}>
      <section ref={ref} className="py-20">
        <PulsatingEffect isVisible={isInView}>
          <h2 className="text-3xl font-bold mb-4 inline-block">{title}</h2>
        </PulsatingEffect>
        {children}
      </section>
    </VisibilityContext.Provider>
  )
}

// Navbar button component that receives the pulsating effect
export function NavbarButton({ children }: { children: React.ReactNode }) {
  const isVisible = React.useContext(VisibilityContext)

  return (
    <PulsatingEffect isVisible={isVisible}>
      <button
        className="bg-primary text-white px-4 py-2 rounded"
      >
        {children}
      </button>
    </PulsatingEffect>
  )
}

// Example usage
export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Logo</h1>
          <NavbarButton>Call to Action</NavbarButton>
        </div>
      </nav>

      <div className="pt-20"> {/* Add padding to account for fixed navbar */}
        <TriggerSection title="Welcome to Our Amazing Product">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
            Vivamus hendrerit arcu sed erat molestie vehicula.
          </p>
        </TriggerSection>

      </div>
    </div>
  )
}