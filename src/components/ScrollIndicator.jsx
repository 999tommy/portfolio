// scroll-indicator.jsx — gold themed, used in hero if needed
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-scroll';

const ScrollIndicator = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, 12, 0],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }
    });
  }, [controls]);

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span style={{ fontSize: '0.62rem', color: 'rgba(212,168,67,0.5)', letterSpacing: '0.12em', fontFamily: "'JetBrains Mono', monospace" }}>
        SCROLL
      </span>
      <Link to="about" smooth={true} duration={800}>
        <motion.div
          animate={controls}
          className="cursor-pointer"
          whileHover={{ scale: 1.15 }}
        >
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="18" height="26" rx="9" stroke="#D4A843" strokeOpacity="0.35" strokeWidth="1.5"/>
            <motion.circle cx="10" cy="8" r="3" fill="#D4A843"
              animate={{ cy: [8, 18, 8] }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </Link>
    </div>
  );
};

export default ScrollIndicator;