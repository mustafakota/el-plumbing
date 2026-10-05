import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: '01', name: 'PLUMBING & FITTINGS', image: '/assets/image1.jpg' },
  { id: '02', name: 'PUMPS & WATER SYSTEMS', image: '/assets/image2.jpg' },
  { id: '03', name: 'SANITARY WARE', image: '/assets/image3.jpg' },
  { id: '04', name: 'BATHROOM FURNITURE', image: '/assets/image4.jpg' },
  { id: '05', name: 'ACCESSORIES', image: '/assets/image5.jpg' },
  { id: '06', name: 'TOOLS & HARDWARE', image: '/assets/image6.jpg' },
  { id: '07', name: 'BUILDING MATERIALS', image: '/assets/image7.jpg' }
];

const ProductDiscovery = () => {
  const [activeId, setActiveId] = useState(categories[0].id);
  const activeCategory = categories.find(c => c.id === activeId);

  return (
    <section className="discovery-section section-padding" id="products">
      <motion.div 
        className="accent-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'absolute', top: 0 }}
      />
      
      <div className="container">
        <motion.div 
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-number">02</span>
          <span>DISCOVER</span>
        </motion.div>

        <div className="discovery-grid">
          <div className="category-list">
            {categories.map((category, i) => (
              <motion.div 
                key={category.id} 
                className={`category-item ${activeId === category.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveId(category.id)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <div className="category-indicator"></div>
                <span className="category-num">{category.id}</span>
                <span className="category-name">{category.name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="discovery-image-container"
            initial={{ opacity: 0, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
            whileInView={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeCategory?.id}
                src={activeCategory?.image}
                alt={activeCategory?.name}
                className="discovery-image"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDiscovery;
