import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton';
import SplitText from './SplitText';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <section className="hero-section" ref={ref}>
      <div className="container hero-grid">
        
        <motion.div className="hero-content" style={{ y: textY, opacity }}>
          <motion.div 
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <span className="section-number">01</span>
            <span>PLUMBING • SANITARY • BUILDING MATERIALS</span>
          </motion.div>
          
          <motion.div variants={container} initial="hidden" animate="show">
            <h1 className="text-editorial-xl">
              <SplitText text="EVERYTHING" delay={0.2} />
              <SplitText text="FOR YOUR" delay={0.4} />
              <SplitText text="NEXT PROJECT." delay={0.6} />
            </h1>
            
            <motion.p variants={item} style={{ fontSize: '1.25rem', color: 'var(--secondary-text)', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '480px' }}>
              Plumbing supplies, sanitary ware, bathroom products, pumps and building materials for customers, contractors and businesses.
            </motion.p>
            
            <motion.div variants={item} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <MagneticButton variant="accent">Explore Products</MagneticButton>
              <MagneticButton variant="secondary">Request a Quote</MagneticButton>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
          animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          data-cursor="explore"
          data-cursor-text="DRAG"
        >
          <motion.div className="image-wrapper" style={{ height: '100%', y: imageY }}>
            <img src="/assets/client/hero.jpg" alt="EL Plumbing Showroom" />
          </motion.div>
          <div className="hero-caption">EL PLUMBING / SHOWROOM</div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
