import { motion } from 'framer-motion';

const AnimatedBlueprint = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.5 + i * 0.2;
      return {
        pathLength: 1,
        opacity: 0.8,
        transition: {
          pathLength: { delay, type: "spring" as const, duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.1 }
        }
      };
    }
  };

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10 }}>
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
        style={{ opacity: 0.4 }}
      >
        {/* Outer Frame */}
        <motion.rect
          width="760"
          height="560"
          x="20"
          y="20"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeDasharray="4 4"
          variants={draw}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        
        {/* Alignment Lines */}
        <motion.line x1="20" y1="300" x2="780" y2="300" stroke="#fff" strokeWidth="0.5" variants={draw} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <motion.line x1="400" y1="20" x2="400" y2="580" stroke="#fff" strokeWidth="0.5" variants={draw} custom={1.5} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        
        {/* Technical Circles */}
        <motion.circle cx="400" cy="300" r="100" fill="none" stroke="var(--accent)" strokeWidth="1" variants={draw} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <motion.circle cx="400" cy="300" r="150" fill="none" stroke="#fff" strokeWidth="0.5" strokeDasharray="2 6" variants={draw} custom={2.5} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        
        {/* Dimensions */}
        <motion.path
          d="M 50 50 L 150 50 L 150 150 L 50 150 Z"
          fill="none"
          stroke="#fff"
          strokeWidth="1"
          variants={draw}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        
        <text x="60" y="40" fill="#fff" fontSize="10" fontFamily="monospace" opacity="0.5">DETAIL A-1</text>
        <text x="410" y="315" fill="var(--accent)" fontSize="10" fontFamily="monospace">CENTER POINT</text>
      </motion.svg>
    </div>
  );
};

export default AnimatedBlueprint;
