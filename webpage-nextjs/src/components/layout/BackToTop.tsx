'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed text-sm rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-primary/20 text-primary flex justify-center items-center hover:bg-primary hover:text-white transition-all duration-300"
      aria-label="Back to Top"
    >
      <i className="fa-solid fa-arrow-up text-base"></i>
    </button>
  );
}
