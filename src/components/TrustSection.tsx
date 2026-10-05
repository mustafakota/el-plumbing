import { motion } from 'framer-motion';

const TrustSection = () => {
  const trustItems = [
    { num: '01', title: 'WIDE RANGE', desc: 'A comprehensive selection of plumbing, sanitary and building-related products.' },
    { num: '02', title: 'PROJECT READY', desc: 'Materials suited to different requirements, budgets and project scales.' },
    { num: '03', title: 'FOR PROFESSIONALS', desc: 'Serving contractors, businesses and individual customers reliably.' },
    { num: '04', title: 'DIRECT ENQUIRIES', desc: 'A direct way to ask about products, availability and requirements.' }
  ];

  return (
    <section className="section-padding" id="about">
      <div className="container">
        
        <motion.div 
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-number">04</span>
          <span>WHY EL PLUMBING</span>
        </motion.div>

        <motion.h2 
          className="text-editorial-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          A PLACE TO FIND<br/>WHAT YOU NEED.
        </motion.h2>

        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <motion.div 
              key={item.num}
              className="trust-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <div className="trust-num">{item.num}</div>
              <h3 className="trust-title">{item.title}</h3>
              <p className="trust-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
