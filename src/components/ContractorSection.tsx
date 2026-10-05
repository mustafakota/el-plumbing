import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import SplitText from './SplitText';
import AnimatedBlueprint from './AnimatedBlueprint';

const ContractorSection = () => {
  return (
    <section className="contractor-section section-padding" id="solutions">
      <div className="container contractor-grid">
        
        <div className="contractor-content">
          <motion.div 
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-number">04</span>
            <span>FOR PROFESSIONALS</span>
          </motion.div>

          <h2 className="text-editorial-lg">
            <SplitText text="BUILT FOR" delay={0.1} />
            <SplitText text="PROJECTS." delay={0.3} />
          </h2>

          <motion.p 
            style={{ fontSize: '1.25rem', color: 'var(--secondary-text)', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '500px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Whether you're sourcing materials for a home, commercial property or ongoing construction work, EL Plumbing helps you find the products you need at the right scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <MagneticButton variant="primary">Discuss Your Requirements</MagneticButton>
          </motion.div>

          <div className="contractor-list">
            {[
              { num: '01', title: 'MATERIAL SOURCING' },
              { num: '02', title: 'PRODUCT RANGE' },
              { num: '03', title: 'PROJECT REQUIREMENTS' },
              { num: '04', title: 'DIRECT ENQUIRIES' }
            ].map((item, i) => (
              <motion.div 
                key={item.num}
                className="contractor-list-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
              >
                <span className="contractor-num">{item.num}</span>
                <span className="contractor-title">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="contractor-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative' }}
          data-cursor="explore"
          data-cursor-text="INSPECT"
        >
          <div className="image-wrapper" style={{ height: '80vh', minHeight: '600px' }}>
            <img src="/assets/client/business.jpg" alt="Contractor and Business Environment" />
            <AnimatedBlueprint />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContractorSection;
