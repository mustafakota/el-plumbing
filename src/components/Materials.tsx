import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Materials = () => {
  return (
    <section className="section-padding">
      <div className="container">
        
        <motion.div 
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-number">03</span>
          <span>MATERIALS & HARDWARE</span>
        </motion.div>

        <div className="materials-grid">
          <motion.div 
            className="mat-item mat-main image-hover"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="image-wrapper" style={{ height: '100%' }}>
              <img 
                src="/assets/image11.jpg" 
                alt="Fittings" 
              />
            </div>
            <div className="mat-caption">
              STRUCTURAL FITTINGS
              <ArrowUpRight size={16} className="mat-arrow" />
            </div>
          </motion.div>

          <motion.div 
            className="mat-item mat-sub1 image-hover"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="image-wrapper" style={{ height: '100%' }}>
              <img 
                src="/assets/image12.jpg" 
                alt="Tools" 
              />
            </div>
            <div className="mat-caption">
              TOOLS
              <ArrowUpRight size={16} className="mat-arrow" />
            </div>
          </motion.div>

          <motion.div 
            className="mat-item mat-sub2 image-hover"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="image-wrapper" style={{ height: '100%' }}>
              <img 
                src="/assets/image13.jpg" 
                alt="Hardware" 
              />
            </div>
            <div className="mat-caption">
              HARDWARE
              <ArrowUpRight size={16} className="mat-arrow" />
            </div>
          </motion.div>

          <motion.div 
            className="mat-item mat-sub3 image-hover"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="image-wrapper" style={{ height: '100%' }}>
              <img 
                src="/assets/image14.jpg" 
                alt="Accessories" 
              />
            </div>
            <div className="mat-caption">
              COMPONENTS
              <ArrowUpRight size={16} className="mat-arrow" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Materials;
