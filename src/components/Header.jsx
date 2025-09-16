// header.jsx (updated to include Experience in nav)
import {
  Bars2Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import profileImg from '../assets/man.png';
import { motion, AnimatePresence } from "framer-motion";
import ResumePDF from "../assets/Adegboye_Ayotomide_Resume.pdf";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Experience", link: "experience" },
    { name: "Contact", link: "contact" },
  ];

  // Handle scroll event to change header styling
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleResumeClick = () => {
    window.open(ResumePDF, '_blank');
  };

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
        className={`flex items-center justify-between py-4 px-7 md:px-14 transition-all duration-500 font-mono ${
          scrolled 
            ? 'bg-terminal-black/90 backdrop-blur-md shadow-lg border-b border-cyan/20' 
            : 'bg-transparent'
        }`}
      >
        {/* Logo section */}
        <Link to="home" smooth={true} duration={800} className="cursor-pointer">
          <motion.div 
            className="font-bold text-xl tracking-wide flex items-center gap-1 text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative">
              <img 
                src={profileImg} 
                alt="Tommy" 
                className="md:w-8 md:h-8 w-6 h-6 rounded-full object-cover border-2 border-cyan relative z-10" 
              />
            </div>
            <span className="hover:text-cyan md:ml-2 ml-1 transition-colors">
              tommy<span className="text-cyan">_codes</span>
            </span>
          </motion.div>
        </Link>
        
        {/* Mobile menu button */}
        <motion.div
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer w-8 h-8 flex items-center justify-center rounded-lg text-cyan hover:bg-cyan/10 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {open ? <XMarkIcon className="w-5 h-5" /> : <Bars2Icon className="w-5 h-5" />}
        </motion.div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                to={link.link}
                activeClass="text-cyan"
                smooth={true}
                spy={true}
                offset={-100}
                duration={800}
                className="relative px-3 py-2 mx-1 text-white hover:text-cyan text-sm font-medium transition-colors"
              >
                {link.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
          <motion.button
            onClick={handleResumeClick}
            className="ml-4 px-4 py-2 bg-cyan text-black rounded-lg font-semibold hover:bg-green transition-colors text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.1 + 0.3 }}
          >
            $ cat resume
          </motion.button>
        </nav>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-terminal-black/95 backdrop-blur-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <Link
                    to={link.link}
                    activeClass="text-cyan"
                    smooth={true}
                    spy={true}
                    offset={-100}
                    duration={800}
                    className="text-xl font-bold text-white hover:text-cyan transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                onClick={handleResumeClick}
                className="px-8 py-3 bg-cyan text-black rounded-lg font-semibold hover:bg-green transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                $ cat resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;