import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // The loading phase lasts 2 seconds before unmounting
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const slideEase = [0.76, 0, 0.24, 1] as [number, number, number, number]; // Premium cinematic easing

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          className="preloader"
          style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none' }}
        >
          {/* Top Half Panel */}
          <motion.div 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '50vh', backgroundColor: 'var(--base)', originY: 1 }}
            initial={{ y: 0 }}
            exit={{ y: "-100vh", transition: { duration: 1, delay: 0.8, ease: slideEase } }}
            transition={{ duration: 1, delay: 0.8, ease: slideEase }}
          />
          
          {/* Bottom Half Panel */}
          <motion.div 
            style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50vh', backgroundColor: 'var(--base)', originY: 0 }}
            initial={{ y: 0 }}
            exit={{ y: "100vh", transition: { duration: 1, delay: 0.8, ease: slideEase } }}
            transition={{ duration: 1, delay: 0.8, ease: slideEase }}
          />

          {/* Central Red Line Reveal */}
          <motion.div
            style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '2px', backgroundColor: 'var(--accent)', y: '-50%' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.7, duration: 0.2 } }}
            transition={{ duration: 0.8, ease: slideEase }}
          />

          {/* Brand Mark */}
          <motion.div 
            className="preloader-content"
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4, ease: "easeOut" } }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.1em', color: 'var(--primary-text)', textTransform: 'uppercase', margin: 0, paddingBottom: '2rem' }}>
              EL PLUMBING<span className="logo-dot" style={{ color: 'var(--accent)' }}>.</span>
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
