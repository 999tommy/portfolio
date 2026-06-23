// header.jsx — liquid glass nav with dark-gold design
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
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
    { name: "Experience", link: "experience" },
    { name: "Projects", link: "projects" },
    { name: "Credentials", link: "certificates" },
    { name: "Contact", link: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeClick = () => window.open(ResumePDF, '_blank');

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 22 }}
        className={`flex items-center justify-between py-3 px-6 md:px-12 transition-all duration-500 ${
          scrolled ? 'glass-nav' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link to="home" smooth={true} duration={800} className="cursor-pointer">
          <motion.div
            className="flex items-center gap-2.5"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative">
              <img
                src={profileImg}
                alt="Tommy"
                className="w-8 h-8 rounded-full object-cover"
                style={{ border: '2px solid #D4A843', boxShadow: '0 0 12px rgba(212,168,67,0.4)' }}
              />
              <span
                className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2"
                style={{ borderColor: '#0c0d14' }}
              />
            </div>
            <div className="leading-none">
              <span className="font-bold text-sm text-white tracking-wide">Tommy</span>
              <span className="text-gold-gradient font-bold text-sm ml-0.5"> Adegboye</span>
            </div>
          </motion.div>
        </Link>

        {/* Mobile menu button */}
        <motion.button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors"
          style={{ border: '1px solid rgba(212,168,67,0.25)', background: 'rgba(212,168,67,0.06)', color: '#D4A843' }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle navigation menu"
        >
          {open ? <XMarkIcon className="w-5 h-5" /> : <Bars2Icon className="w-5 h-5" />}
        </motion.button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 + 0.2 }}
            >
              <Link
                to={link.link}
                activeClass="text-gold-active"
                smooth={true}
                spy={true}
                offset={-90}
                duration={800}
                className="relative px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-lg cursor-pointer"
                style={{ color: 'rgba(232,232,232,0.8)', fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#D4A843';
                  e.currentTarget.style.background = 'rgba(212,168,67,0.07)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(232,232,232,0.8)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.button
            onClick={handleResumeClick}
            className="btn-gold ml-3 text-sm"
            style={{ padding: '0.5rem 1.1rem', fontFamily: "'Inter', sans-serif" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.07 + 0.25 }}
          >
            Resume ↗
          </motion.button>
        </nav>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 flex flex-col"
            style={{ background: 'rgba(8,8,8,0.97)', backdropFilter: 'blur(30px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Close button */}
            <div className="flex justify-end p-5">
              <motion.button
                onClick={() => setOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-lg"
                style={{ border: '1px solid rgba(212,168,67,0.3)', color: '#D4A843' }}
                whileTap={{ scale: 0.95 }}
              >
                <XMarkIcon className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-6 -mt-16">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Link
                    to={link.link}
                    smooth={true}
                    spy={true}
                    offset={-90}
                    duration={800}
                    className="text-2xl font-semibold transition-colors cursor-pointer"
                    style={{ color: 'rgba(232,232,232,0.85)', fontFamily: "'Inter', sans-serif" }}
                    onClick={() => setOpen(false)}
                    onMouseEnter={e => e.currentTarget.style.color = '#D4A843'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,232,232,0.85)'}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                onClick={() => { handleResumeClick(); setOpen(false); }}
                className="btn-gold mt-4"
                style={{ padding: '0.7rem 2rem', fontSize: '1rem' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                Download Resume ↗
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;