// header.jsx — floating island nav, electric amber redesign
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import profileImg from '../assets/me.png';
import { motion, AnimatePresence } from "framer-motion";
import ResumePDF from "../assets/Adegboye_Ayotomide_Resume.pdf";

const navLinks = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Experience", link: "experience" },
  { name: "Projects", link: "projects" },
  { name: "Credentials", link: "certificates" },
  { name: "Contact", link: "contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeClick = () => window.open(ResumePDF, '_blank');

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-center pt-4 px-4">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 90, damping: 20 }}
          className={`flex items-center justify-between gap-4 px-4 py-2.5 rounded-2xl transition-all duration-500 ${scrolled
              ? 'glass-nav'
              : 'bg-transparent'
            }`}
          style={{
            maxWidth: '900px',
            width: '100%',
            border: scrolled ? undefined : '1px solid transparent',
          }}
        >
          {/* Logo */}
          <Link to="home" smooth={true} duration={800} className="cursor-pointer flex-shrink-0">
            <motion.div
              className="flex items-center gap-2.5"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={profileImg}
                  alt="Tommy Adegboye"
                  className="w-8 h-8 rounded-full object-cover"
                  style={{ border: '2px solid var(--amber)', boxShadow: '0 0 14px rgba(232,130,10,0.45)' }}
                />
                <span
                  className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2"
                  style={{ borderColor: 'var(--obsidian)' }}
                />
              </div>
              <div className="leading-none hidden sm:block">
                <span className="font-bold text-sm text-white tracking-wide" style={{ fontFamily: "'Syne', sans-serif" }}>Tommy</span>
                <span className="text-amber-gradient font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}> Adegboye</span>
              </div>
            </motion.div>
          </Link>

          {/* Mobile toggle */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl transition-colors flex-shrink-0"
            style={{ border: '1px solid rgba(232,130,10,0.28)', background: 'rgba(232,130,10,0.07)', color: 'var(--amber)' }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation menu"
          >
            {open ? <XMarkIcon className="w-5 h-5" /> : <Bars2Icon className="w-5 h-5" />}
          </motion.button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 + 0.2 }}
              >
                <Link
                  to={link.link}
                  activeClass="text-amber-active"
                  smooth={true}
                  spy={true}
                  offset={-90}
                  duration={800}
                  className="nav-link px-3 py-1.5 rounded-lg"
                  style={{ display: 'inline-block' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--amber)';
                    e.currentTarget.style.background = 'rgba(232,130,10,0.07)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              onClick={handleResumeClick}
              className="btn-amber btn-pill ml-3 text-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06 + 0.28 }}
            >
              Resume ↗
            </motion.button>
          </nav>
        </motion.nav>
      </div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 flex flex-col"
            style={{ background: 'rgba(7, 8, 15, 0.97)', backdropFilter: 'blur(36px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-2.5">
                <img
                  src={profileImg}
                  alt="Tommy"
                  className="w-8 h-8 rounded-full object-cover"
                  style={{ border: '2px solid var(--amber)' }}
                />
                <span className="font-bold text-sm text-white" style={{ fontFamily: "'Syne', sans-serif" }}>Tommy Adegboye</span>
              </div>
              <motion.button
                onClick={() => setOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl"
                style={{ border: '1px solid rgba(232,130,10,0.3)', color: 'var(--amber)' }}
                whileTap={{ scale: 0.95 }}
              >
                <XMarkIcon className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-7 -mt-16">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  exit={{ opacity: 0, x: -24 }}
                >
                  <Link
                    to={link.link}
                    smooth={true}
                    spy={true}
                    offset={-90}
                    duration={800}
                    className="text-2xl font-bold cursor-pointer transition-colors"
                    style={{ color: 'rgba(242,242,242,0.85)', fontFamily: "'Syne', sans-serif", display: 'block' }}
                    onClick={() => setOpen(false)}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(242,242,242,0.85)'}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                onClick={() => { handleResumeClick(); setOpen(false); }}
                className="btn-amber mt-4"
                style={{ padding: '0.75rem 2.2rem', fontSize: '0.95rem' }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
              >
                Download Resume ↗
              </motion.button>
            </div>

            {/* Ambient glow */}
            <div
              style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                bottom: '5%',
                right: '-10%',
                background: 'radial-gradient(ellipse, rgba(232,130,10,0.08) 0%, transparent 70%)',
                filter: 'blur(60px)',
                pointerEvents: 'none',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;