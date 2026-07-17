// components/IntroSequence.jsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function IntroSequence({ onComplete }) {
  const [phase, setPhase] = useState('initial');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size to keep coordinates perfectly responsive
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Timeline Sequence:
    // 1. Instantly move to fade-in stage
    setPhase('fadeIn');

    // 2. After 2.5 seconds, smoothly glide the entire container to the top-left
    const slideTimer = setTimeout(() => {
      setPhase('reposition');
    }, 2500);

    // 3. Complete the intro sequence after 4.2 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(slideTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // The Master Container handles the scaling and movement
  const containerVariants = {
    initial: {
      x: 0,
      y: 0,
      scale: 0.9,
      opacity: 0,
    },
    fadeIn: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    },
    reposition: {
      // Dynamic calculations keep the logo in the header bounds on all screens
      scale: isMobile ? 0.22 : 0.28,
      x: isMobile ? "-32vw" : "-38vw", 
      y: isMobile ? "-42vh" : "-41vh",
      transition: { 
        duration: 1.6, 
        ease: [0.25, 1, 0.5, 1] // Custom cubic-bezier for a premium, heavy drag feel
      }
    }
  };

  // Subtle delayed fade for the brand text to build anticipation
  const textVariants = {
    initial: { opacity: 0, y: 15 },
    fadeIn: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.8, duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4B3621] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate={phase}
        className="flex flex-col items-center justify-center gap-6" // This keeps logo & text perfectly separated!
      >
        {/* The 3D Logo */}
        <div className="relative">
          <Image
            src="/assets/alsen_3d_logo.png"
            alt="Alsen Logo"
            width={200}
            height={200}
            priority
            className="drop-shadow-[0_12px_24px_rgba(255,191,0,0.15)]"
          />
        </div>

        {/* The Spaced Company Text */}
        <motion.div 
          variants={textVariants}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-light tracking-[0.25em] uppercase text-[#F5F5DC]">
            Alsen Food Complex
          </h1>
          <div className="h-[2px] w-24 bg-[#FFBF00] mx-auto mt-4 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}