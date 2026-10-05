import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  speed?: number;
}

const Marquee = ({ text, speed = 20 }: MarqueeProps) => {
  return (
    <div className="marquee-container">
      <motion.div 
        className="marquee-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed
        }}
      >
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
