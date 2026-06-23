// home.jsx — premium dark-gold hero section
/* eslint-disable react/no-unescaped-entities */
import LinkedIn from "../assets/socials/linkedin.svg";
import Twitter from "../assets/socials/twitter.svg";
import Instagram from '../assets/socials/ig.svg';
import GitHub from "../assets/socials/github.svg";
import ResumePDF from "../assets/Adegboye_Ayotomide_Resume.pdf";
import profileImg from '../assets/man.png';
import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const StatCard = ({ value, label }) => (
  <div className="glass-card text-center px-5 py-3" style={{ minWidth: '100px' }}>
    <div className="font-bold text-xl text-gold-gradient" style={{ fontFamily: "'Inter', sans-serif" }}>
      {value}
    </div>
    <div className="text-xs mt-0.5" style={{ color: 'rgba(232,232,232,0.5)', fontFamily: "'Inter', sans-serif" }}>
      {label}
    </div>
  </div>
);

const Home = () => {
  const handleResumeClick = () => window.open(ResumePDF, '_blank');

  return (
    <motion.section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      {/* Ambient glow blobs */}
      <div
        className="hero-ambient"
        style={{
          width: '600px',
          height: '400px',
          top: '-10%',
          left: '30%',
          background: 'radial-gradient(ellipse, rgba(212,168,67,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="hero-ambient"
        style={{
          width: '400px',
          height: '300px',
          bottom: '10%',
          right: '-5%',
          background: 'radial-gradient(ellipse, rgba(212,168,67,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Subtle dot grid overlay */}
      <div className="dot-grid absolute inset-0 opacity-40 pointer-events-none" />

      <div className="section-container flex flex-col md:flex-row items-center gap-12 md:gap-0 z-10">
        {/* Left: main content */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          className="md:w-[58%] flex flex-col items-start p-6 md:p-8 rounded-2xl"
          style={{
            background: 'rgba(12, 13, 20, 0.72)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(212, 168, 67, 0.22)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 mb-5"
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse-gold"
              style={{ background: '#D4A843', boxShadow: '0 0 8px rgba(212,168,67,0.8)' }}
            />
            <span className="section-label">Available for select opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-bold tracking-tight mb-1"
            style={{
              fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#f5f5f5',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Tommy<br />
            <span className="text-gold-shimmer">Adegboye</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg font-medium mb-6"
            style={{ color: 'rgba(232,232,232,0.55)', fontFamily: "'Inter', sans-serif" }}
          >
            Tech Entrepreneur & Software Engineer
          </motion.p>

          {/* Typewriter taglines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8 h-8 flex items-center"
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.95rem',
                color: '#D4A843',
              }}
            >
              <span style={{ color: 'rgba(212,168,67,0.5)' }}>// </span>
              <TypeAnimation
                sequence={[
                  '10K+ users. Built solo.',
                  2200,
                  'Founder of Axist Technologies.',
                  2200,
                  'Engineering meets entrepreneurship.',
                  2200,
                  'Turning ideas into products.',
                  2200,
                  'AI automation at scale.',
                  2000,
                  'Full-stack. Full-send.',
                  2200,
                ]}
                speed={55}
                repeat={Infinity}
              />
              <span className="animate-blink" style={{ color: '#D4A843' }}>|</span>
            </span>
          </motion.div>

          {/* Bio snippet */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8 leading-relaxed max-w-lg"
            style={{
              color: 'rgba(232,232,232,0.6)',
              fontSize: '0.95rem',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            CEO of <a href="https://axist.app" target="_blank" rel="noreferrer"
              style={{ color: '#D4A843', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
            >Axist Technologies</a>. BSc Biochemistry + NRRT-certified Software Engineer.
            I build complex, scalable products and AI automation workflows — growing my startup to 10K+ combined users, solo.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <Link to="projects" smooth={true} duration={800}>
              <motion.button
                className="btn-gold"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.button>
            </Link>
            <Link to="contact" smooth={true} duration={800}>
              <motion.button
                className="btn-ghost"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's Talk
              </motion.button>
            </Link>
            <motion.button
              onClick={handleResumeClick}
              className="btn-ghost"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{ fontSize: '0.85rem' }}
            >
              Resume ↗
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="flex gap-2"
          >
            {[
              { href: "https://www.linkedin.com/in/adegboye-tommy-125098254", icon: LinkedIn, label: "LinkedIn" },
              { href: "https://x.com/999tommy__", icon: Twitter, label: "Twitter" },
              { href: "https://www.instagram.com/syntaxdev__", icon: Instagram, label: "Instagram" },
              { href: "https://github.com/999tommy", icon: GitHub, label: "GitHub" },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="social-icon" aria-label={label}>
                <img src={icon} alt={label} style={{ width: '16px', height: '16px', filter: 'brightness(0.85)' }} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: profile card */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          className="md:w-2/5 flex flex-col items-center md:items-end gap-6"
        >
          {/* Profile image with gold ring */}
          <motion.div
            className="relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="rounded-full p-1"
              style={{
                background: 'linear-gradient(135deg, #D4A843, #F0C040, #A07828, #D4A843)',
                padding: '3px',
                boxShadow: '0 0 40px rgba(212,168,67,0.35), 0 0 80px rgba(212,168,67,0.12)',
              }}
            >
              <img
                src={profileImg}
                alt="Tommy Adegboye"
                className="rounded-full object-cover"
                style={{ width: '180px', height: '180px', display: 'block', background: '#0c0d14' }}
              />
            </div>
            {/* CEO badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-2 -right-2 glass-card px-2.5 py-1 flex items-center gap-1.5"
              style={{ borderRadius: '100px', fontSize: '0.72rem', fontFamily: "'Inter', sans-serif" }}
            >
              <span style={{ color: '#D4A843' }}>👑</span>
              <span style={{ color: '#D4A843', fontWeight: 600 }}>CEO & Founder</span>
            </motion.div>
          </motion.div>

          {/* Stat cards */}
          <div className="flex gap-3 flex-wrap justify-center md:justify-end">
            <StatCard value="10K+" label="Combined Users" />
            <StatCard value="15+" label="Products Built" />
            <StatCard value="5+" label="Years Building" />
          </div>

          {/* Neofetch terminal mockup */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="terminal-card w-full max-w-[280px] font-mono mt-1 text-left"
          >
            <div className="terminal-header flex items-center justify-between px-3 py-1.5">
              <div className="terminal-dots">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
              </div>
              <span className="text-[10px] text-gold-dim">neofetch</span>
            </div>
            <div className="p-3 text-[11px] leading-relaxed text-gray-300">
              <div className="text-gold"><span className="text-white font-bold">tommy</span>@<span className="text-gold">axist.app</span></div>
              <div className="text-gray-500">------------------</div>
              <div><span className="text-gold-dim">OS:</span> NRRT Software Engine v2.0</div>
              <div><span className="text-gold-dim">Kernel:</span> BSc Biochemistry</div>
              <div><span className="text-gold-dim">Uptime:</span> 3+ Years Building</div>
              <div><span className="text-gold-dim">Shell:</span> bash (Next.js/Node/AI)</div>
              <div><span className="text-gold-dim">Status:</span> <span className="px-1 py-0.5 rounded bg-gold/10 text-gold border border-gold/30 font-bold text-[9px]">OVERQUALIFIED</span></div>
              <div><span className="text-gold-dim">Host:</span> Axist Technologies (CEO)</div>
              <div><span className="text-gold-dim">Project:</span> naijabiz.org</div>
            </div>
          </motion.div>

          {/* Axist card */}
          <motion.a
            href="https://axist.app"
            target="_blank"
            rel="noreferrer"
            className="glass-card px-4 py-3 flex items-center gap-3 no-underline"
            style={{ width: '100%', maxWidth: '280px', textDecoration: 'none' }}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #D4A843, #A07828)' }}
            >
              <span style={{ fontSize: '0.85rem' }}>⚡</span>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f0f0f0', fontFamily: "'Inter', sans-serif" }}>Axist Technologies</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(212,168,67,0.7)', fontFamily: "'Inter', sans-serif" }}>axist.app · My Startup</div>
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span style={{ fontSize: '0.65rem', color: 'rgba(212,168,67,0.5)', letterSpacing: '0.1em', fontFamily: "'JetBrains Mono', monospace" }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{ width: '1px', height: '28px', background: 'linear-gradient(180deg, #D4A843, transparent)' }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Home;