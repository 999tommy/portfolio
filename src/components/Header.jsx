import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import profileImg from '../assets/man.png';
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
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

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
        className={`flex items-center justify-between py-4 px-7 md:px-14 transition-all duration-500 ${
          scrolled 
            ? 'bg-primary-dark/90 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        {/* Logo section */}
        <Link to="home" smooth={true} duration={800} className="cursor-pointer">
          <motion.div 
            className="font-bold text-2xl tracking-wide flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-full blur-sm opacity-50"></div>
              <img 
                src={profileImg} 
                alt="Tommy" 
                className="md:w-12 md:h-12 w-10 h-10 rounded-full object-cover border-2 border-accent relative z-10" 
              />
            </div>
            <span className="text-text-DEFAULT text-white hover:text-accent md:ml-3 ml-2 transition-colors">
              Tommy<span className="text-accent font-bold">_codes</span>
            </span>
          </motion.div>
        </Link>
        
        {/* Mobile menu button */}
        <motion.div
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-primary-light/80 backdrop-blur-sm text-accent hover:bg-primary-light transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </motion.div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                to={link.link}
                activeClass="text-accent"
                smooth={true}
                spy={true}
                offset={-100}
                duration={800}
                className="relative px-4 py-2 mx-1 text-white text-text-DEFAULT hover:text-accent font-medium rounded-md transition-colors"
              >
                {link.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-accent origin-left rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
          <motion.a
            href="https://github.com/999tommy"
            target="_blank"
            rel="noreferrer"
            className="ml-4 px-5 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent-light transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.1 + 0.3 }}
          >
            Résumé
          </motion.a>
        </nav>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-primary-dark/95 backdrop-blur-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full">
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
                    activeClass="text-accent"
                    smooth={true}
                    spy={true}
                    offset={-100}
                    duration={800}
                    className="text-3xl font-bold text-white my-4 text-text-DEFAULT hover:text-accent transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="https://github.com/999tommy"
                target="_blank"
                rel="noreferrer"
                className="mt-8 px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-light transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                Résumé
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
