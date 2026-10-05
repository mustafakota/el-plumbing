import { motion } from 'framer-motion';

const Showroom = () => {
  return (
    <section className="showroom-section section-padding" id="gallery">
      <div className="container">
        
        <motion.div 
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-number">05</span>
          <span>SHOWROOM</span>
        </motion.div>

        <motion.h2 
          className="text-editorial-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          INSIDE<br/>EL PLUMBING.
        </motion.h2>

        <div className="showroom-grid">
          <motion.div 
            className="show-img-1 image-wrapper image-hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-cursor="explore"
            data-cursor-text="DISCOVER"
          >
            <img src="/assets/client/showroom.jpg" alt="EL Plumbing Main Showroom" />
            <div className="showroom-caption">EL PLUMBING FLAGSHIP</div>
          </motion.div>

          <motion.div 
            className="show-img-2 image-wrapper image-hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            data-cursor="explore"
            data-cursor-text="VIEW"
          >
            <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sanitary Details" />
          </motion.div>

          <motion.div 
            className="show-img-3 image-wrapper image-hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hardware Details" />
          </motion.div>

          <motion.div 
            className="show-img-4 image-wrapper image-hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Architecture" />
          </motion.div>

          <motion.div 
            className="show-img-5 image-wrapper image-hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src="/assets/image9.jpg" alt="Showroom Materials" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Showroom;
