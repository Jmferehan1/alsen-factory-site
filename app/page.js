// app/page.js
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import IntroSequence from '@/components/IntroSequence';
import HeroSplit from '@/components/HeroSplit';
import { biscuitProducts } from '@/data/products';

const flourPackagings = [
  { 
    size: "5kg", 
    title: "Household Premium", 
    desc: "Perfectly portioned for family kitchens, home bakers, and daily domestic culinary creations. Comes in high-tensile, easy-pour retail bags.",
    target: "Retail Grocery & Supermarkets" 
  },
  { 
    size: "10kg", 
    title: "Artisan & Pastry", 
    desc: "Designed for boutique pastry shops, local cafes, and specialty bakeries that require pristine flour in highly manageable quantities.",
    target: "Local Bakeries & Cafes" 
  },
  { 
    size: "25kg", 
    title: "Commercial Standard", 
    desc: "The professional benchmark. Optimized for medium-scale bakeries, high-volume restaurant kitchens, and wholesale culinary institutions.",
    target: "Food Service & Hospitality" 
  },
  { 
    size: "50kg", 
    title: "Industrial Enterprise", 
    desc: "Our high-capacity powerhouse format. Engineered for automated large-scale bread factories, food manufacturing, and bulk global export operations.",
    target: "Industrial Bakeries & Wholesale" 
  }
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedFlour, setSelectedFlour] = useState(flourPackagings[3]);
  const [biscuitFilter, setBiscuitFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', subject: 'retail', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Prevent background scroll when modal or mobile menu is open
  useEffect(() => {
    if (selectedProduct || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProduct, isMobileMenuOpen]);

  const filteredBiscuits = biscuitFilter === 'all' 
    ? biscuitProducts 
    : biscuitProducts.filter(p => p.category === biscuitFilter);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormState({ name: '', email: '', subject: 'retail', message: '' });
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <main className="relative min-h-screen bg-stone-950 text-[#F5F5DC] scroll-smooth">
      {showIntro && (
        <IntroSequence onComplete={() => setShowIntro(false)} />
      )}

      <motion.div
        className="min-h-screen relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 1.0 }}
      >
        {/* Responsive Fixed Navigation Header */}
        <header className="fixed top-0 left-0 w-full z-40 p-6 flex items-center justify-between h-24 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Image 
              src="/assets/alsen_3d_logo.png" 
              alt="Alsen Logo" 
              width={56} 
              height={56} 
              priority
            />
            <div>
              <span className="text-sm font-semibold tracking-widest text-[#F5F5DC] uppercase block">
                Alsen
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[#FFBF00] uppercase block">
                Food Complex
              </span>
            </div>
          </div>
          
          {/* Desktop Only Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#flour-details" className="text-[#F5F5DC]/80 uppercase tracking-widest text-xs font-semibold hover:text-[#FFBF00] transition duration-300">
              Milling
            </a>
            <a href="#biscuit-details" className="text-[#F5F5DC]/80 uppercase tracking-widest text-xs font-semibold hover:text-[#FFBF00] transition duration-300">
              NAIF Sweets
            </a>
            <a href="#capabilities" className="text-[#F5F5DC]/80 uppercase tracking-widest text-xs font-semibold hover:text-[#FFBF00] transition duration-300">
              B2B Scale
            </a>
            <a href="#contact" className="text-[#FFBF00] uppercase tracking-widest text-xs font-semibold hover:opacity-85 transition duration-300 border border-[#FFBF00]/30 rounded-full px-4 py-1.5 bg-[#FFBF00]/5 hover:bg-[#FFBF00]/10">
              Get in Touch
            </a>
          </nav>

          {/* Hamburger Menu Button (Mobile & Tablet) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#F5F5DC] hover:text-[#FFBF00] focus:outline-none z-50 transition duration-300"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-[2px] bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
              <span className={`w-full h-[2px] bg-current transition duration-200 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-[2px] bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>
        </header>

        {/* Interactive Mobile Menu Drawer overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-24 bg-[#120b06]/98 backdrop-blur-xl z-30 md:hidden flex flex-col justify-between p-8 border-t border-[#FFBF00]/10"
            >
              <nav className="flex flex-col gap-6 pt-6">
                <span className="text-[10px] tracking-[0.4em] text-[#FFBF00] uppercase font-bold border-b border-[#FFBF00]/10 pb-2">
                  Explore Alsen
                </span>
                
                <a 
                  href="#flour-details" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-light tracking-wide hover:text-[#FFBF00] transition"
                >
                  🌾 Wheat Milling Division
                </a>
                
                <a 
                  href="#biscuit-details" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-light tracking-wide hover:text-[#FFBF00] transition"
                >
                  🍪 NAIF Sweet Showroom
                </a>
                
                <a 
                  href="#capabilities" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-light tracking-wide hover:text-[#FFBF00] transition"
                >
                  🏗️ B2B Scale & Standards
                </a>
                
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-light tracking-wide hover:text-[#FFBF00] transition"
                >
                  📬 Partner & Order Samples
                </a>
              </nav>

              {/* Mobile Quick Contact Footer */}
              <div className="space-y-4 border-t border-[#FFBF00]/10 pt-6">
                <span className="text-[10px] tracking-[0.2em] text-[#F5F5DC]/40 uppercase block">
                  Direct Line
                </span>
                <div className="space-y-1">
                  <a href="tel:+251221112345" className="text-sm font-semibold text-[#FFBF00] block hover:underline">
                    +251 911 252887 / +251 911 491935
                  </a>
                  <a href="mailto:partner@alsenfoodcomplex.com" className="text-xs text-[#F5F5DC]/70 block hover:underline">
                    alsenfoods@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <HeroSplit />

        {/* FLOUR SECTION */}
        <section id="flour-details" className="relative min-h-screen w-full flex items-center py-24 bg-[#4B3621] px-6 md:px-12 border-b border-[#3a2919]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-xs tracking-[0.4em] uppercase text-[#FFBF00] font-bold block">
                  Industrial Flour Milling
                </span>
                <h3 className="text-4xl md:text-5xl font-light uppercase tracking-wide leading-tight text-[#F5F5DC]">
                  Fortified Wheat Flour
                </h3>
                <p className="text-[#F5F5DC]/70 text-sm md:text-base font-light max-w-lg leading-relaxed">
                  Milled directly inside our advanced facility using meticulously selected wheat, fortified with key vitamins and minerals to deliver top-tier elasticity and baking performance.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-[#FFBF00]/80 font-semibold">
                  Select Packaging Unit:
                </h4>
                <div className="grid grid-cols-4 gap-3">
                  {flourPackagings.map((pkg) => (
                    <button
                      key={pkg.size}
                      onClick={() => setSelectedFlour(pkg)}
                      className={`py-3 rounded-lg border text-sm font-semibold tracking-wider transition-all duration-300 flex flex-col items-center justify-center ${
                        selectedFlour.size === pkg.size
                          ? "bg-[#FFBF00] text-black border-[#FFBF00] shadow-[0_0_15px_rgba(255,191,0,0.3)] scale-105"
                          : "bg-[#3a2919]/50 text-[#F5F5DC] border-[#FFBF00]/30 hover:border-[#FFBF00]/70"
                      }`}
                    >
                      <span className="text-lg font-bold">{pkg.size}</span>
                      <span className="text-[9px] opacity-75 uppercase tracking-tighter">Pack</span>
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFlour.size}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#3a2919] border border-[#FFBF00]/20 rounded-xl p-6 space-y-4 shadow-xl"
                >
                  <div className="flex justify-between items-center border-b border-[#FFBF00]/10 pb-3">
                    <span className="text-lg font-light tracking-wide text-[#FFBF00] uppercase">
                      {selectedFlour.title} Spec
                    </span>
                    <span className="text-xs px-2.5 py-1 bg-[#4B3621] rounded-full text-white tracking-wider">
                      {selectedFlour.size} Sack
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-[#F5F5DC]/80 font-light leading-relaxed">
                    {selectedFlour.desc}
                  </p>
                  <div className="pt-2">
                    <span className="text-[10px] tracking-widest text-[#FFBF00] uppercase block">Primary Market Focus:</span>
                    <span className="text-sm font-medium text-[#F5F5DC] block mt-1">{selectedFlour.target}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="relative flex justify-center items-center">
              <div className="relative w-80 h-[480px] bg-[#3a2919] rounded-2xl border-2 border-[#FFBF00]/30 shadow-2xl p-8 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[8px] bg-gradient-to-r from-yellow-600 via-amber-400 to-yellow-600" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFBF00]/5 to-transparent pointer-events-none" />
                
                <div className="text-center space-y-1 mt-4">
                  <span className="text-[10px] tracking-[0.4em] text-[#FFBF00] uppercase block font-bold">ALsen milling</span>
                  <span className="text-2xl font-light tracking-widest uppercase block text-[#F5F5DC]">Premium Flour</span>
                </div>

                <div className="w-36 h-36 relative mx-auto my-6 flex items-center justify-center">
                  <Image 
                    src="/assets/alsen_3d_logo.png" 
                    alt="Wheat Seal" 
                    width={144} 
                    height={144} 
                    className="object-contain drop-shadow-[0_10px_20px_rgba(255,191,0,0.2)]" 
                  />
                </div>

                <div className="text-center space-y-3 border-t border-[#FFBF00]/20 pt-6">
                  <div className="bg-[#4B3621] py-2 rounded-lg border border-[#FFBF00]/10 inline-block px-8">
                    <span className="text-3xl font-black text-[#FFBF00] tracking-wider block">{selectedFlour.size}</span>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#F5F5DC]/80 block">Net weight</span>
                  </div>
                  <span className="text-[10px] tracking-[0.15em] text-[#F5F5DC]/50 block uppercase">Product of Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* BISCUIT SHOWROOM - FULL DATA & FLAT LAYOUT */}
<section id="biscuit-details" className="relative min-h-screen w-full py-24 bg-[#1e140d] px-6 md:px-12 border-b border-[#2d1f14] overflow-hidden">
  <div className="max-w-6xl mx-auto space-y-12">
    
    {/* Header & Filter Tabs */}
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#FFBF00]/10 pb-8">
      <div className="space-y-3">
        <span className="text-xs tracking-[0.4em] uppercase text-[#FFBF00] font-bold block">Confectionery Division</span>
        <h3 className="text-4xl md:text-5xl font-light uppercase tracking-wide text-[#F5F5DC]">NAIF Sweet Collection</h3>
        <p className="text-sm font-light text-[#F5F5DC]/60 max-w-xl">
          Discover the exquisite world of NAIF. Every cookie and biscuit is crafted using our own high-protein local flour to deliver an unbeatable golden crunch.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {['all', 'cookies', 'biscuits', 'sandwich'].map((tab) => (
          <button
            key={tab}
            onClick={() => setBiscuitFilter(tab)}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
              biscuitFilter === tab
                ? "bg-[#FFBF00] text-black font-bold shadow-[0_0_12px_rgba(255,191,0,0.25)]"
                : "bg-[#3a2919] text-[#F5F5DC]/70 border border-[#FFBF00]/10 hover:text-[#F5F5DC] hover:bg-[#4B3621]"
            }`}
          >
            {tab === 'all' ? 'Show All' : tab}
          </button>
        ))}
      </div>
    </div>

    {/* The Interactive Grid */}
    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <AnimatePresence mode="popLayout">
        {filteredBiscuits.map((prod) => (
          <motion.div
            key={prod.name}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setSelectedProduct(prod)}
            className="group bg-[#3a2919]/60 border border-[#FFBF00]/15 hover:border-[#FFBF00]/40 rounded-xl p-6 flex flex-col justify-between h-80 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${prod.color} opacity-10 group-hover:opacity-20 blur-xl transition-all rounded-full`} />
            <div className="z-10 text-[9px] font-bold text-[#FFBF00] uppercase tracking-widest">{prod.category}</div>
            <div className="my-auto space-y-2 z-10">
              <h4 className="text-lg font-semibold text-white group-hover:text-[#FFBF00]">{prod.tag}</h4>
              <p className="text-[10px] text-[#F5F5DC]/60 uppercase tracking-widest">{prod.amharic}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  </div>
</section>

{/* 🌟 LOCKED-TO-SCREEN DETAILS MODAL 🌟 */}
<AnimatePresence>
  {selectedProduct && (
    <div className="fixed inset-0 z-[100] h-screen overflow-y-auto bg-black/95 backdrop-blur-lg flex items-center justify-center p-4">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-4xl max-h-[90vh] bg-[#3a2919] border border-[#FFBF00]/20 rounded-2xl overflow-y-auto shadow-2xl relative p-6 md:p-12"
      >
        <button
          onClick={() => setSelectedProduct(null)}
          className="sticky top-0 left-[95%] z-[110] p-3 rounded-full bg-[#FFBF00] text-[#1e140d] shadow-lg hover:bg-[#FFBF00]/80 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Detailed Image & Highlights */}
          <div className="space-y-6">
            <div className="aspect-square bg-gradient-to-br from-[#4B3621] to-[#1e140d] rounded-2xl flex items-center justify-center border border-[#FFBF00]/10">
              <h4 className="text-4xl font-black text-white">{selectedProduct.tag}</h4>
            </div>
            <div className="bg-[#1e140d]/40 rounded-xl p-4 border border-[#FFBF00]/5 flex justify-between">
              <div><span className="text-[10px] text-[#F5F5DC]/40 uppercase block">Weight</span><span className="text-xs text-[#F5F5DC]">75g Individual Wrap</span></div>
              <div className="text-right"><span className="text-[10px] text-[#F5F5DC]/40 uppercase block">Ingredients</span><span className="text-xs text-[#FFBF00]">100% Local Flour</span></div>
            </div>
          </div>

          {/* Full Narrative */}
          <div className="space-y-6">
            <h3 className="text-3xl text-white font-light">{selectedProduct.tag}</h3>
            <p className="text-lg text-[#FFBF00] font-medium">{selectedProduct.amharic}</p>
            <p className="text-sm text-[#F5F5DC]/80 leading-relaxed">
              Every single bite of our custom biscuits is baked using high-protein, locally milled flour from the Alsen mills. Crafted to hold its golden crunch, NAIF sweets pair beautifully with hot tea, traditional coffee, or make for the perfect standalone treat.
            </p>
            
          </div>
        </div>
      </motion.div>
    </div>
  )}
</AnimatePresence>
        {/* INDUSTRIAL B2B CAPABILITIES */}
        <section id="capabilities" className="relative py-24 bg-[#140d08] px-6 md:px-12 border-b border-[#24170f]">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="text-xs tracking-[0.4em] uppercase text-[#FFBF00] font-bold block">
                Industrial Scale & Infrastructure
              </span>
              <h2 className="text-4xl font-light uppercase tracking-wide text-white">
                B2B Distribution & Capacity
              </h2>
              <div className="w-16 h-[1px] bg-[#FFBF00] mx-auto" />
              <p className="text-sm font-light text-[#F5F5DC]/70">
                Alsen Food Complex houses ultra-modern European milling and baking technologies. We are fully optimized to supply supermarkets, wholesalers, and food-service partners across East Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#1e140d] border border-[#FFBF00]/10 p-8 rounded-2xl space-y-4 text-center hover:border-[#FFBF00]/30 transition duration-300">
                <div className="w-12 h-12 bg-[#FFBF00]/10 border border-[#FFBF00]/25 rounded-full flex items-center justify-center mx-auto text-[#FFBF00]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold tracking-wider text-white uppercase">Massive Capacity</h3>
                <p className="text-xs font-light text-[#F5F5DC]/60 leading-relaxed">
                  Our fully automated processing floor operates 24/7 to produce hundreds of metric tons of fortified flour and packed cookies daily, preventing stockouts.
                </p>
              </div>

              <div className="bg-[#1e140d] border border-[#FFBF00]/10 p-8 rounded-2xl space-y-4 text-center hover:border-[#FFBF00]/30 transition duration-300">
                <div className="w-12 h-12 bg-[#FFBF00]/10 border border-[#FFBF00]/25 rounded-full flex items-center justify-center mx-auto text-[#FFBF00]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold tracking-wider text-white uppercase">Certified Safety</h3>
                <p className="text-xs font-light text-[#F5F5DC]/60 leading-relaxed">
                  Adhering strictly to international food standards. Our processing includes automated optical sorting, deep laboratory analysis, and metal detection lines.
                </p>
              </div>

              <div className="bg-[#1e140d] border border-[#FFBF00]/10 p-8 rounded-2xl space-y-4 text-center hover:border-[#FFBF00]/30 transition duration-300">
                <div className="w-12 h-12 bg-[#FFBF00]/10 border border-[#FFBF00]/25 rounded-full flex items-center justify-center mx-auto text-[#FFBF00]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25M15 18.75h-6M13.5 5.25h11.25V9h-11.25z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold tracking-wider text-white uppercase">Seamless Logistics</h3>
                <p className="text-xs font-light text-[#F5F5DC]/60 leading-relaxed">
                  With optimized packaging lines, multi-size SKU palettes, and our dedicated distribution fleet, we guarantee damage-free transport and scheduled routing.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* THE ALSEN STORY & INDUSTRIAL SCALE */}
        <section id="about" className="relative py-24 bg-[#120b06] px-6 md:px-12 border-b border-[#1f130a] overflow-hidden">
          
          {/* Subtle Golden Ambient Light Orbs */}
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#FFBF00]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FFBF00]/3 rounded-full blur-[150px] pointer-events-none" />

          <div className="max-w-6xl mx-auto space-y-20">
            
            {/* Header: Mission & Origin */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs tracking-[0.4em] uppercase text-[#FFBF00] font-bold block">
                  The Alsen Legacy
                </span>
                <h2 className="text-4xl font-light uppercase tracking-wide text-white leading-tight">
                  Rooted in Adama, <br/>Built for East Africa
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-sm font-light text-[#F5F5DC]/70 leading-relaxed max-w-2xl">
                  Strategically established in Adama, Oromia the agricultural heartbeat of Ethiopia Alsen Foods bridges the gap between fertile regional wheat fields and premium table ready food products. Our facility combines state-of-the-art European milling tech with master bakers to supply pure wholesale flour and refined biscuits across the region.
                </p>
              </div>
            </div>

            {/* Industrial Statistics Grid (Builds Immediate Trust) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-[#FFBF00]/10">
              
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-light text-[#FFBF00] tracking-tight">150+ Tons</p>
                <p className="text-[10px] uppercase tracking-widest text-[#F5F5DC]/40 font-bold">Daily Milling Capacity</p>
                <p className="text-xs text-[#F5F5DC]/60 font-light">Consistent high-volume supply chains.</p>
              </div>

              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-light text-[#FFBF00] tracking-tight">100% Local</p>
                <p className="text-[10px] uppercase tracking-widest text-[#F5F5DC]/40 font-bold">Oromia Wheat Sourcing</p>
                <p className="text-xs text-[#F5F5DC]/60 font-light">Supporting regional wheat farmers directly.</p>
              </div>

              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-light text-[#FFBF00] tracking-tight">0% Compromise</p>
                <p className="text-[10px] uppercase tracking-widest text-[#F5F5DC]/40 font-bold">Food-Safe Certification</p>
                <p className="text-xs text-[#F5F5DC]/60 font-light">Rigorous, multi-phase laboratory testing.</p>
              </div>

              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-light text-[#FFBF00] tracking-tight">24/7 Logistics</p>
                <p className="text-[10px] uppercase tracking-widest text-[#F5F5DC]/40 font-bold">Dedicated Fleet Dispatch</p>
                <p className="text-xs text-[#F5F5DC]/60 font-light">On-time regional wholesale distribution.</p>
              </div>

            </div>

            {/* Dual Division Story Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Card A: The Pure Flour Division */}
              <div className="group bg-[#1c120a] border border-[#FFBF00]/10 p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:border-[#FFBF00]/30">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FFBF00]/50 group-hover:bg-[#FFBF00] transition-colors" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#FFBF00] font-bold">
                  Division One
                </span>
                <h3 className="text-xl font-light text-white uppercase tracking-wider mt-2 mb-4">
                  Advanced Milling Infrastructure
                </h3>
                <p className="text-xs text-[#F5F5DC]/70 leading-relaxed font-light">
                  Our industrial milling division features automated grain cleansing, moisture conditioning, and multi-stage reduction rollers. We produce high-performance, consistent-yield bakers' flour customized for commercial bread factories and regional food manufacturers.
                </p>
              </div>

              {/* Card B: The Biscuit Division */}
              <div className="group bg-[#1c120a] border border-[#FFBF00]/10 p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:border-[#FFBF00]/30">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FFBF00]/50 group-hover:bg-[#FFBF00] transition-colors" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#FFBF00] font-bold">
                  Division Two
                </span>
                <h3 className="text-xl font-light text-white uppercase tracking-wider mt-2 mb-4">
                  Confectionery & Biscuit Craft
                </h3>
                <p className="text-xs text-[#F5F5DC]/70 leading-relaxed font-light">
                  Turning our own fine wheat flours directly into consumer delicacies. Our automated biscuit lines process, bake, and pack our signature brand lines like **NAIF Sweet** under sterile, climate-controlled environments for flawless shelf-life and taste consistency.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* LOGISTICS, PACKAGING & QUALITY SPECIFICATIONS */}
        <section id="specs" className="relative py-24 bg-[#0d0804] px-6 md:px-12 border-b border-[#1f130a]">
          
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="space-y-3 mb-16 text-center md:text-left">
              <span className="text-xs tracking-[0.4em] uppercase text-[#FFBF00] font-bold block">
                B2B & Distribution
              </span>
              <h2 className="text-3xl md:text-4xl font-light uppercase tracking-wide text-white">
                Specifications & Logistics
              </h2>
              <p className="text-xs text-[#F5F5DC]/60 max-w-xl font-light leading-relaxed">
                Review our standard wholesale packaging units, distribution networks, and quality control baselines built for seamless industrial supply chains.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Side: Interactive Specs Tables (8 cols on large screens) */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Flour Specifications */}
                <div className="bg-[#120b06] border border-[#FFBF00]/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-lg">🌾</span>
                    <h3 className="text-sm uppercase tracking-wider text-white font-medium">
                      Industrial Wheat Flour Specs
                    </h3>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-light text-[#F5F5DC]/80">
                      <thead>
                        <tr className="border-b border-[#FFBF00]/15 text-[#FFBF00] uppercase tracking-wider font-semibold">
                          <th className="pb-3 w-1/3">Parameter</th>
                          <th className="pb-3 w-2/3">Standard Value / Packaging</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#FFBF00]/5">
                        <tr>
                          <td className="py-3 font-medium text-white">Bulk Packaging</td>
                          <td className="py-3">50 kg & 25 kg woven polypropylene (PP) sacks</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium text-white">Moisture Content</td>
                          <td className="py-3">Less than 14.0% (optimal shelf stability)</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium text-white">Gluten Level</td>
                          <td className="py-3">Wet gluten content minimum 27-28% (perfect elasticity)</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium text-white">Applications</td>
                          <td className="py-3">Commercial bread, pasta factories, pastry shops, retail repackaging</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Biscuit Specifications */}
                <div className="bg-[#120b06] border border-[#FFBF00]/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-lg">🍪</span>
                    <h3 className="text-sm uppercase tracking-wider text-white font-medium">
                      Biscuit Packaging & Shelf-life
                    </h3>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-light text-[#F5F5DC]/80">
                      <thead>
                        <tr className="border-b border-[#FFBF00]/15 text-[#FFBF00] uppercase tracking-wider font-semibold">
                          <th className="pb-3 w-1/3">Parameter</th>
                          <th className="pb-3 w-2/3">Standard Value / Packaging</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#FFBF00]/5">
                        <tr>
                          <td className="py-3 font-medium text-white">NAIF Sweet Packaging</td>
                          <td className="py-3">Standard packs (wrapped), Family Multipacks, Wholesale Master Cartons</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium text-white">Carton Configuration</td>
                          <td className="py-3">Highly secured, moisture-resistant master cartons optimized for stacking</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium text-white">Minimum Shelf-Life</td>
                          <td className="py-3">12 months from manufacture date (stored in cool, dry conditions)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

              {/* Right Side: Quality Assurance & Logistics Info (5 cols on large screens) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Logistics Highlight Card */}
                <div className="p-6 bg-[#1c120a] border border-[#FFBF00]/10 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFBF00]/5 rounded-full blur-xl" />
                  <span className="text-[9px] font-bold text-[#FFBF00] tracking-widest uppercase">
                    Fleet & Dispatch
                  </span>
                  <h4 className="text-md uppercase tracking-wider text-white mt-1 mb-2 font-light">
                    Direct Shipping from Adama
                  </h4>
                  <p className="text-xs text-[#F5F5DC]/70 font-light leading-relaxed">
                    Operating directly from Adama's logistics hub, we coordinate prompt truck dispatches to key economic centers including Addis Ababa, Mojo, Bishoftu, Hawassa, and beyond. We handle both contracted bulk hauling and single-distributor cargo.
                  </p>
                </div>

                {/* Quality & Safety Highlight Card */}
                <div className="p-6 bg-[#1c120a] border border-[#FFBF00]/10 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFBF00]/5 rounded-full blur-xl" />
                  <span className="text-[9px] font-bold text-[#FFBF00] tracking-widest uppercase">
                    Strict Compliance
                  </span>
                  <h4 className="text-md uppercase tracking-wider text-white mt-1 mb-2 font-light">
                    Lab-Tested Batches
                  </h4>
                  <p className="text-xs text-[#F5F5DC]/70 font-light leading-relaxed">
                    Every processing cycle undergoes rigorous laboratory checks to measure moisture levels, ash content, and gluten performance. Our facilities conform strictly to Ethiopian Standard Agency (ESA) parameters and international food hygiene guidelines.
                  </p>
                </div>

                {/* Quick Call to Action */}
                <div className="p-6 border border-dashed border-[#FFBF00]/20 rounded-2xl text-center space-y-3">
                  <h5 className="text-xs uppercase text-white font-medium tracking-wider">
                    Need Custom Specifications?
                  </h5>
                  <p className="text-[11px] text-[#F5F5DC]/50 leading-relaxed font-light">
                    If your food factory or private brand requires precise moisture profiles, tailored extraction rates, or custom-branded retail packaging, our production desk can formulate it.
                  </p>
                  <a 
                    href="#contact" 
                    className="inline-block text-[11px] font-bold text-[#FFBF00] uppercase tracking-wider border-b border-[#FFBF00] pb-0.5 hover:text-white hover:border-white transition-colors"
                  >
                    
                  </a>
                </div>

              </div>

            </div>

          </div>
        </section>

       {/* DIRECT CONNECT PANEL (REPLACED THE FORM) */}
            <div className="lg:col-span-7 bg-[#1c120a] border border-[#FFBF00]/15 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              {/* Premium Top Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#FFBF00]" />
              
              <div className="space-y-2 mb-8">
                <h3 className="text-2xl font-light text-white uppercase tracking-wider">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-[#F5F5DC]/60 leading-relaxed">
                  Skip the manual forms. Tap any pathway below to launch your default application and connect with our business desk instantly.
                </p>
              </div>

              {/* Main Quick-Action Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                
                {/* 1. Native Email App Trigger */}
                <a 
                  href="mailto:alsenfoods@gmail.com?subject=Alsen%20Foods%20-%20Business%20Inquiry"
                  className="group p-6 bg-[#120b06] border border-[#FFBF00]/10 hover:border-[#FFBF00]/40 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="text-[#FFBF00] p-2 bg-[#FFBF00]/5 rounded-lg border border-[#FFBF00]/10 w-fit mb-4 group-hover:bg-[#FFBF00]/10 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <h4 className="text-sm uppercase tracking-wider text-white font-medium">Launch Email App</h4>
                    <p className="text-[11px] text-[#F5F5DC]/50 mt-1 leading-relaxed">
                      Opens your native client (Gmail, Outlook, or Mail app) fully pre-addressed.
                    </p>
                  </div>
                  <span className="text-xs text-[#FFBF00] font-semibold mt-6 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    alsenfoods@gmail.com →
                  </span>
                </a>

                {/* 2. Direct WhatsApp Link */}
                <a 
                  href="https://wa.me/251911252887?text=Hello%20Alsen%20Foods,%20I'm%20interested%20in%20partnering%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-[#120b06] border border-[#FFBF00]/10 hover:border-[#FFBF00]/40 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="text-[#075e54] p-2 bg-[#075e54]/5 rounded-lg border border-[#075e54]/20 w-fit mb-4 group-hover:bg-[#075e54]/10 transition-colors">
                      {/* Custom Chat SVG Icon */}
                      <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h4 className="text-sm uppercase tracking-wider text-white font-medium">WhatsApp Business</h4>
                    <p className="text-[11px] text-[#F5F5DC]/50 mt-1 leading-relaxed">
                      Message our administrative desk for instant wholesale or logistical feedback.
                    </p>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold mt-6 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Chat Instantly →
                  </span>
                </a>

              </div>

              {/* Direct Phone Connections (Touch-to-Call) */}
              <div className="space-y-3">
                <span className="text-[10px] tracking-widest text-[#FFBF00]/70 uppercase font-bold block mb-1">
                  Direct Phone Connections (Touch to Call)
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Phone Option 1 */}
                  <a 
                    href="tel:+251911252887"
                    className="group flex items-center justify-between p-4 bg-[#120b06] border border-[#FFBF00]/10 hover:border-[#FFBF00]/30 rounded-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs p-2.5 bg-[#FFBF00]/5 rounded-lg text-[#FFBF00] border border-[#FFBF00]/10">
                        📞
                      </span>
                      <div>
                        <p className="text-[9px] uppercase text-[#F5F5DC]/45 tracking-widest font-semibold">Primary Desk</p>
                        <p className="text-sm text-white font-light mt-0.5">+251 911 25 2887</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-[#FFBF00] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      Call →
                    </span>
                  </a>

                  {/* Phone Option 2 */}
                  <a 
                    href="tel:+251911491935"
                    className="group flex items-center justify-between p-4 bg-[#120b06] border border-[#FFBF00]/10 hover:border-[#FFBF00]/30 rounded-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs p-2.5 bg-[#FFBF00]/5 rounded-lg text-[#FFBF00] border border-[#FFBF00]/10">
                        📞
                      </span>
                      <div>
                        <p className="text-[9px] uppercase text-[#F5F5DC]/45 tracking-widest font-semibold">Alternative Desk</p>
                        <p className="text-sm text-white font-light mt-0.5">+251 911 49 1935</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-[#FFBF00] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      Call →
                    </span>
                  </a>

                </div>
              </div>

            </div>

        {/* PREMIUM CORPORATE FOOTER */}
        <footer className="bg-black py-16 px-6 md:px-12 border-t border-[#FFBF00]/10 text-[#F5F5DC]/40 text-xs">

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/assets/alsen_3d_logo.png" alt="Alsen Logo" width={42} height={42} />
                <div>
                  <span className="text-[#F5F5DC] uppercase tracking-wider font-bold block">SERVICES</span>
                  <span className="text-[8px] uppercase tracking-widest text-[#FFBF00] block">FOOD COMPLEX</span>
                </div>
              </div>
              <p className="font-light leading-relaxed text-[#F5F5DC]/55 max-w-xs">
                Ethiopia's rising name in advanced grain milling and premium biscuit manufacturing. Proudly nourishing families with fortified quality daily.
              </p>
            </div>

            <div>
              <h4 className="text-xs tracking-widest text-[#FFBF00] uppercase font-semibold mb-4">Our Divisions</h4>
              <ul className="space-y-2 font-light">
                <li><a href="#flour-details" className="hover:text-white transition">Industrial Flour Milling</a></li>
                <li><a href="#biscuit-details" className="hover:text-white transition">NAIF Biscuit Baking</a></li>
                <li><a href="#biscuit-details" className="hover:text-white transition">NAIF Sweet Cookies</a></li>
                <li><a href="#biscuit-details" className="hover:text-white transition">Sandwich Cream Biscuits</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-widest text-[#FFBF00] uppercase font-semibold mb-4">Quick Navigation</h4>
              <ul className="space-y-2 font-light">
                <li><a href="#flour-details" className="hover:text-white transition">Product Showroom</a></li>
                <li><a href="#capabilities" className="hover:text-white transition">Milling Capabilities</a></li>
                <li><a href="#contact" className="hover:text-white transition">Partnerships</a></li>
                <li><a href="#contact" className="hover:text-white transition">Sample Request</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-widest text-[#FFBF00] uppercase font-semibold mb-4">Regulatory Certifications</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-stone-900 border border-stone-800 rounded font-mono text-[9px] uppercase tracking-wider text-[#F5F5DC]/60">ISO 22000 Cert</span>
                <span className="px-2 py-1 bg-stone-900 border border-stone-800 rounded font-mono text-[9px] uppercase tracking-wider text-[#F5F5DC]/60">ECA Fortified</span>
                <span className="px-2 py-1 bg-stone-900 border border-stone-800 rounded font-mono text-[9px] uppercase tracking-wider text-[#F5F5DC]/60">HACCP Compliant</span>
              </div>
            </div>

          </div>

          <div className="max-w-6xl mx-auto pt-8 border-t border-[#FFBF00]/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
            <span>&copy; {new Date().getFullYear()} Alsen Food Complex PLC. All Rights Reserved. Product of Ethiopia.</span>
            <div className="flex gap-6 font-light">
              <a href="#" className="hover:text-[#FFBF00] transition">Terms of Service</a>
              <a href="#" className="hover:text-[#FFBF00] transition">Privacy Policy</a>
            </div>
          </div>
        </footer>

        {/* OVERLAY MODAL FOR PRODUCT DETAILS */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto"
            >
              <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedProduct(null)} />

              <motion.div 
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                className="relative bg-stone-950 border border-[#FFBF00]/25 w-full max-w-5xl rounded-3xl p-6 md:p-12 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 p-2 rounded-full border border-[#FFBF00]/20 text-[#FFBF00] hover:bg-[#FFBF00] hover:text-black transition duration-300 z-50"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Left Visual Wrapper Card */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[320px] h-[400px] md:h-[450px] rounded-2xl p-6 flex flex-col justify-between overflow-hidden border border-[#FFBF00]/10 bg-[#23150d]/80">
                    <div className={`absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br ${selectedProduct.color} opacity-20 blur-3xl rounded-full`} />
                    
                    <div className="flex justify-between items-start z-10">
                      <span className="text-[9px] tracking-widest text-[#FFBF00] uppercase font-bold">Premium Quality</span>
                      <span className="text-[9px] tracking-wider text-[#F5F5DC]/40 uppercase">{selectedProduct.amharic}</span>
                    </div>

                    <div className="my-auto text-center space-y-3 z-10">
                      <div className="inline-block px-2.5 py-0.5 bg-[#FFBF00] text-black text-[9px] font-black tracking-widest uppercase rounded">
                        NAIF
                      </div>
                      <h2 className="text-2xl md:text-3xl font-extralight tracking-wide text-white leading-tight uppercase">
                        {selectedProduct.tag}
                      </h2>
                      <div className="w-16 h-[1px] bg-[#FFBF00]/40 mx-auto" />
                      <p className="text-[9px] tracking-[0.3em] text-[#FFBF00] uppercase block">Taste in every bite</p>
                    </div>

                    <div className="border-t border-[#FFBF00]/10 pt-4 text-center space-y-1.5 z-10">
                      <span className="text-[10px] text-[#F5F5DC]/50 font-light block">Crispy Confectionery Line</span>
                      <span className="text-[10px] tracking-wider text-[#FFBF00] uppercase font-semibold block">{selectedProduct.packaging}</span>
                    </div>
                  </div>
                </div>

                {/* Right Specs Column */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-2">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-[#FFBF00] font-bold block">
                      Flavor Profile & Spec
                    </span>
                    <h1 className="text-3xl md:text-4xl font-light uppercase tracking-wide text-white leading-tight">
                      {selectedProduct.name}
                    </h1>
                    <p className="text-lg font-light text-[#FFBF00] tracking-widest">
                      {selectedProduct.amharic}
                    </p>
                  </div>

                  <div className="border-l-2 border-[#FFBF00] pl-4">
                    <p className="text-xs md:text-sm text-[#F5F5DC]/80 font-light leading-relaxed">
                      {selectedProduct.flavorStory}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-3">
                      <h3 className="text-[10px] uppercase tracking-widest text-[#FFBF00]/80 font-bold">
                        Quality Ingredients
                      </h3>
                      <ul className="space-y-1.5">
                        {selectedProduct.ingredients.map((ing, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-xs text-[#F5F5DC]/70 font-light">
                            <span className="w-1 h-1 bg-[#FFBF00] rounded-full" />
                            {ing}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-[10px] uppercase tracking-widest text-[#FFBF00]/80 font-bold">
                        Nutritional Parameters (Per 100g)
                      </h3>
                      <div className="bg-[#1e140d]/60 rounded-xl border border-[#FFBF00]/10 p-3 space-y-2">
                        {Object.entries(selectedProduct.nutrition).map(([key, val]) => (
                          <div key={key} className="flex justify-between text-xs border-b border-[#FFBF00]/5 pb-1.5 last:border-0 last:pb-0">
                            <span className="capitalize text-[#F5F5DC]/50 uppercase tracking-widest text-[9px]">{key}</span>
                            <span className="font-semibold text-[#F5F5DC]">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#FFBF00]/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button className="w-full sm:w-auto px-6 py-3 bg-[#FFBF00] text-black font-bold text-xs tracking-widest uppercase rounded-lg hover:shadow-[0_0_15px_rgba(255,191,0,0.3)] hover:scale-[1.01] transition-all duration-300">
                      Request Retail Samples
                    </button>
                    <span className="text-[9px] tracking-wider text-[#F5F5DC]/50 max-w-xs leading-normal">
                      Direct shipping available to local retail chains, supermarkets, and international distributors.
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}