import { useEffect } from 'react';

// whenever an element with `.opacity-0.translate-y-10` enters the viewport, it will gain the `animate-scrollFadeIn` class and play the animation as defined in `tailwind.config.js`.This approach keeps styling in the Tailwind setup and leaves `useScrollAnimation` solely responsible for toggling the animation class

// The hook only needs to toggle the `animate-scrollFadeIn` class:
function useScrollAnimation() {
  useEffect(() => {
    // Select all elements with the target classes
    const elements = document.querySelectorAll('.opacity-0.translate-y-10');

    // Set up the IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {//IntersectionObserverEntry object, a single intersection change for an observed element
          if (entry.isIntersecting) {// whether the target element is currently intersecting with the root.
            // Add and remove classes for animation
            // entry.target.classList.remove('opacity-0', 'translate-y-10');// The DOM element being observed
            // entry.target.classList.add('opacity-100', 'translate-y-0');

            entry.target.classList.add('animate-scrollFadeIn');
          }
        });
      },
      { threshold: 0.1 }// triggered when 10% of the target element is visible in the viewport
    );

    // Observe each element
    elements.forEach((el) => observer.observe(el));

    // Clean up the observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array so it runs once
}

export default useScrollAnimation;
