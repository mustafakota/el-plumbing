import { useEffect } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import ProductDiscovery from './components/ProductDiscovery';
import Materials from './components/Materials';
import ContractorSection from './components/ContractorSection';
import Showroom from './components/Showroom';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

import './pages/HomePage.css';

function App() {
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Invert theme perfectly when passing the middle of the page
    if (latest > 0.5) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  });

  useEffect(() => {
    // Initialize snappy smooth scrolling (no sluggish delay)
    const lenis = new Lenis({
      lerp: 0.4, // Instant tracking with minimal smoothing
      wheelMultiplier: 1,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Global SVG Liquid Glass Filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <filter id="liquid-warp">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <Cursor />
      <Preloader />
      <Navigation />
      <main>
        <Hero />
        <ProductDiscovery />
        <Materials />
        <Marquee text="PLUMBING • SANITARY • HARDWARE • PIPING • ARCHITECTURAL FITTINGS • " speed={40} />
        <ContractorSection />
        <Showroom />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
