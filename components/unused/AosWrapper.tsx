// AosWrapper.tsx
"use client";

import React from 'react';
import useAOS from './useAOS';
import HeroComponent from '@/components/Hero copy 2';

// wrapping the content that needs the useAOS hook ->only called on the client-side
const AosWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useAOS();

  return (// Disable AOS for the Hero component
    <>
      {React.Children.map(children, (child) => {
        if (child.type !== HeroComponent) {
          return child;
        }
        return child;
      })}
    </>
  );
};

export default AosWrapper;