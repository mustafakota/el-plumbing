import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="cta-section section-padding" id="quote">
      <div className="container">
        <div className="cta-content">
          <motion.div 
            className="section-label"
            style={{ justifyContent: 'center', color: 'rgba(255,255,255,0.7)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-number" style={{ color: 'var(--secondary)' }}>06</span>
            <span>ENQUIRE</span>
          </motion.div>

          <motion.h2 
            className="text-editorial-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            TELL US<br/>WHAT YOU'RE<br/>BUILDING.
          </motion.h2>

          <motion.a 
            href="#contact"
            className="cta-button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            REQUEST A QUOTE
            <ArrowRight size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
