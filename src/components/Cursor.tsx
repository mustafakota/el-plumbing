import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  // Smooth springs for cursor movement
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const mouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Look for the closest element with a data-cursor attribute
      const cursorTarget = target.closest('[data-cursor]');
      
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor') || "hover";
        const text = cursorTarget.getAttribute('data-cursor-text') || "";
        setCursorVariant(type);
        setCursorText(text);
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", mouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", mouseOver);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      x: "-50%",
      y: "-50%",
      width: 12,
      height: 12,
      backgroundColor: "var(--accent)",
      border: "0px solid var(--accent)",
      opacity: 1
    },
    hover: {
      x: "-50%",
      y: "-50%",
      width: 48,
      height: 48,
      backgroundColor: "rgba(217, 54, 37, 0.1)", // Light red
      border: "1px solid var(--accent)",
      opacity: 1
    },
    explore: {
      x: "-50%",
      y: "-50%",
      width: 80,
      height: 80,
      backgroundColor: "var(--accent)",
      border: "0px solid var(--accent)",
      opacity: 1
    },
    hide: {
      opacity: 0,
      width: 0,
      height: 0
    }
  };

  return (
    <motion.div
      className="custom-cursor"
      style={{
        left: cursorX,
        top: cursorY,
      }}
      variants={variants}
      animate={cursorVariant}
      initial="default"
    >
      {cursorText && (
        <motion.span 
          className="cursor-text"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
};

export default Cursor;
