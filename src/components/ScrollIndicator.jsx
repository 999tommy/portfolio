import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-scroll';

const ScrollIndicator = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateScroll = async () => {
      while (true) {
        await controls.start({
          y: [0, 15, 0],
          opacity: [0.8, 1, 0.8],
          transition: { 
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity
          }
        });
      }
    };

    animateScroll();
  }, [controls]);

  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <p className="text-accent text-sm mb-2 font-semibold tracking-wider">SCROLL DOWN</p>
      <Link to="about" smooth={true} duration={800}>
        <motion.div
          animate={controls}
          className="cursor-pointer bg-accent/10 p-2 rounded-full backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
        >
          <svg 
            width="30" 
            height="30" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 4V20M12 20L6 14M12 20L18 14" 
              stroke="#38bdf8" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </Link>
    </div>
  );
};

export default ScrollIndicator; 