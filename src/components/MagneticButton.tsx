import { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  fullWidth?: boolean;
}

const MagneticButton = ({ children, className = '', onClick, variant = 'primary', fullWidth = false }: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // Move the button slightly towards the cursor (magnet effect)
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      className={`btn btn-${variant} ${fullWidth ? 'w-full' : ''} ${className}`}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
      data-cursor="hide" // Hide default custom cursor when over a button, let the magnetic effect take over
    >
      <motion.div
        animate={{ x: position.x * 0.2, y: position.y * 0.2 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', pointerEvents: 'none' }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
};

export default MagneticButton;
