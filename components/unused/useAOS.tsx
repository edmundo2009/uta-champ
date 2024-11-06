"use client";//useEffect hook is a client-side hook, and it can only be used in client components
// useAOS.tsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: 'ease-out-sine',
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return null;
};

export default useAOS;