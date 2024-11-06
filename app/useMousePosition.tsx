// useMousePosition.tsx
"use client";
// Importing necessary hooks and components
import { useState, useEffect, useRef } from 'react';

const useMousePosition = () => {
  // State to track mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  // Ref for the container div
  const containerRef = useRef<HTMLDivElement>(null)

  // Effect to handle mouse movement
  useEffect(() => {//useEffect hook is used to add and remove a mousemove event listener
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove)
    // Cleanup function to remove event listener
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return { mousePosition, containerRef };
};

export default useMousePosition;