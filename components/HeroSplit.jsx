// components/HeroSplit.jsx
'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroSplit() {
  const [hovered, setHovered] = useState(null); // 'flour' | 'biscuits' | null
  const [isMobile, setIsMobile] = useState(false);

  // Detect viewport size to toggle mobile behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper function to handle smooth scrolling down the homepage
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Safe interaction toggle for mobile touch screens
  const handlePanelClick = (panel) => {
    if (isMobile) {
      setHovered(prev => prev === panel ? null : panel);
    }
  };

  // Dynamic width calculations for mobile vs desktop
  const getWidth = (panel) => {
    if (isMobile) {
      return hovered === panel ? '85%' : hovered === null ? '50%' : '15%';
    }
    return hovered === panel ? '70%' : hovered === null ? '50%' : '30%';
  };

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex flex-row bg-[#1c120c] p-0 m-0">
      
      {/* 1. LEFT PANEL: FLOUR (B2B) */}
      <motion.div
        onMouseEnter={() => !isMobile && setHovered('flour')}
        onMouseLeave={() => !isMobile && setHovered(null)}
        onClick={() => handlePanelClick('flour')}
        animate={{ width: getWidth('flour') }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="relative h-full flex items-center justify-center overflow-hidden cursor-pointer group border-r border-[#4B3621]/30 select-none"
      >
        {/* Dynamic Dark Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent md:from-black/80 md:via-black/40" />
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out scale-100 md:group-hover:scale-105 opacity-50 brightness-75 mix-blend-luminosity md:group-hover:mix-blend-normal"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=1200')` 
          }}
        />

        {/* Collapsed Vertical Label (Visible on Mobile only when the OTHER panel is active) */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered === 'biscuits' ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
          >
            <span className="transform -rotate-90 text-[10px] tracking-[0.4em] uppercase font-bold text-[#FFBF00] whitespace-nowrap">
              Pure Flour
            </span>
          </motion.div>
        )}

        {/* Content Container */}
        <motion.div 
          className="relative z-20 text-center px-2 md:px-6 max-w-lg flex flex-col items-center"
          animate={{ 
            opacity: hovered === 'biscuits' ? 0 : 1,
            scale: hovered === 'biscuits' ? 0.8 : 1 
          }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[8px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold text-[#FFBF00] md:text-[#F5F5DC] md:group-hover:text-[#FFBF00] transition-colors duration-300">
            B2B Enterprise
          </span>
          
          <h2 className="text-lg sm:text-2xl md:text-5xl font-light tracking-wide uppercase mt-1 md:mt-4 text-[#F5F5DC] whitespace-nowrap">
            Pure Flour
          </h2>
          
          {/* Dynamic Expandable Sub-Content */}
          <motion.div
            initial={false}
            animate={{
              height: isMobile ? (hovered === 'flour' ? 'auto' : 0) : 'auto',
              opacity: isMobile ? (hovered === 'flour' ? 1 : 0) : 1
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`flex flex-col items-center ${!isMobile ? 'md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-32 transition-all duration-700 ease-in-out' : 'overflow-hidden'}`}
          >
            <p className="text-[11px] md:text-sm font-light text-[#F5F5DC]/70 mt-2 md:mt-4 leading-relaxed max-w-xs md:max-w-md">
              High-capacity fortified flour custom-engineered for commercial bakeries, food distributors, and wholesale markets.
            </p>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                scrollToSection('flour-details');
              }}
              className="mt-4 md:mt-6 px-4 md:px-6 py-2 border border-[#FFBF00] text-[#FFBF00] text-[10px] tracking-widest uppercase font-semibold hover:bg-[#FFBF00] hover:text-black transition duration-300 whitespace-nowrap"
            >
              Inquire Bulk Order
            </button>
          </motion.div>
        </motion.div>

        {/* Cinematic Golden Highlight border (Desktop Only) */}
        <div className="hidden md:block absolute right-0 top-0 h-full w-[2px] bg-[#FFBF00] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_#FFBF00]" />
      </motion.div>


      {/* 2. RIGHT PANEL: BISCUITS (B2C) */}
      <motion.div
        onMouseEnter={() => !isMobile && setHovered('biscuits')}
        onMouseLeave={() => !isMobile && setHovered(null)}
        onClick={() => handlePanelClick('biscuits')}
        animate={{ width: getWidth('biscuits') }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="relative h-full flex items-center justify-center overflow-hidden cursor-pointer group select-none"
      >
        {/* Dynamic Dark Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent md:from-black/80 md:via-black/40" />

        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out scale-100 md:group-hover:scale-105 opacity-50 brightness-75 mix-blend-luminosity md:group-hover:mix-blend-normal"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1558961309-db0364436f65?auto=format&fit=crop&q=80&w=1200')` 
          }}
        />

        {/* Collapsed Vertical Label (Visible on Mobile only when the OTHER panel is active) */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered === 'flour' ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
          >
            <span className="transform rotate-90 text-[10px] tracking-[0.4em] uppercase font-bold text-[#FFBF00] whitespace-nowrap">
              Crafted Biscuits
            </span>
          </motion.div>
        )}

        {/* Content Container */}
        <motion.div 
          className="relative z-20 text-center px-2 md:px-6 max-w-lg flex flex-col items-center"
          animate={{ 
            opacity: hovered === 'flour' ? 0 : 1,
            scale: hovered === 'flour' ? 0.8 : 1 
          }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[8px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold text-[#FFBF00] md:text-[#F5F5DC] md:group-hover:text-[#FFBF00] transition-colors duration-300">
            Premium Craft
          </span>
          
          <h2 className="text-lg sm:text-2xl md:text-5xl font-light tracking-wide uppercase mt-1 md:mt-4 text-[#F5F5DC] whitespace-nowrap">
            Crafted Biscuits
          </h2>
          
          {/* Dynamic Expandable Sub-Content */}
          <motion.div
            initial={false}
            animate={{
              height: isMobile ? (hovered === 'biscuits' ? 'auto' : 0) : 'auto',
              opacity: isMobile ? (hovered === 'biscuits' ? 1 : 0) : 1
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`flex flex-col items-center ${!isMobile ? 'md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-32 transition-all duration-700 ease-in-out' : 'overflow-hidden'}`}
          >
            <p className="text-[11px] md:text-sm font-light text-[#F5F5DC]/70 mt-2 md:mt-4 leading-relaxed max-w-xs md:max-w-md">
              Sustainably baked culinary delights, crafted with pristine local wheat and custom flavor profiles for retail shelves.
            </p>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                scrollToSection('biscuit-details');
              }}
              className="mt-4 md:mt-6 px-4 md:px-6 py-2 border border-[#FFBF00] text-[#FFBF00] text-[10px] tracking-widest uppercase font-semibold hover:bg-[#FFBF00] hover:text-black transition duration-300 whitespace-nowrap"
            >
              Explore Flavor Lineup
            </button>
          </motion.div>
        </motion.div>

        {/* Cinematic Golden Highlight border (Desktop Only) */}
        <div className="hidden md:block absolute left-0 top-0 h-full w-[2px] bg-[#FFBF00] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_#FFBF00]" />
      </motion.div>

      {/* 3. LUXURY SCROLL INDICATOR (Bouncing Arrow at center bottom) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 opacity-80 pointer-events-none">
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#F5F5DC]/60 font-light hidden md:inline">
          Scroll to Explore
        </span>
        <svg 
          className="w-4 h-4 text-[#FFBF00] animate-bounce mt-1" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

    </section>
  );
}