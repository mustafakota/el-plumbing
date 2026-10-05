import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProductShowcase = () => {
  return (
    <section className="section-padding">
      <div className="container">
        
        <div className="showcase-grid">
          <motion.div 
            className="showcase-item showcase-main image-hover"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-wrapper" style={{ height: '100%' }}>
              <img 
                src="https://images.unsplash.com/photo-1552322689-104ec960c3f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Sanitary Ware" 
              />
            </div>
            <div className="showcase-caption">
              SANITARY WARE
              <ArrowUpRight size={16} className="showcase-arrow" />
            </div>
          </motion.div>

          <motion.div 
            className="showcase-item showcase-sub1 image-hover"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-wrapper" style={{ height: '100%' }}>
              <img 
                src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Bathroom Vanities" 
              />
            </div>
            <div className="showcase-caption">
              BATHROOM VANITIES
              <ArrowUpRight size={16} className="showcase-arrow" />
            </div>
          </motion.div>

          <motion.div 
            className="showcase-item showcase-sub2 image-hover"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-wrapper" style={{ height: '100%' }}>
              <img 
                src="https://images.unsplash.com/photo-1621614068361-97b5e40e69db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Plumbing Fittings" 
              />
            </div>
            <div className="showcase-caption">
              PLUMBING FITTINGS
              <ArrowUpRight size={16} className="showcase-arrow" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;
