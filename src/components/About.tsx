import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span className="section-number">06</span>
            <span>ABOUT EL PLUMBING</span>
          </div>

          <h2 className="text-editorial-xl" style={{ marginBottom: '3rem' }}>
            MORE THAN MATERIALS.
          </h2>

          <p style={{ fontSize: '1.25rem', color: 'var(--secondary-text)', lineHeight: 1.8 }}>
            EL Plumbing supplies plumbing, sanitary and building-related materials for customers, contractors and businesses. We provide a range of products for everyday requirements as well as construction and renovation projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
