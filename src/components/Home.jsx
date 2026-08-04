// home.jsx — cinematic WebGL hero, electric amber redesign
/* eslint-disable react/no-unescaped-entities */
import LinkedIn from "../assets/socials/linkedin.svg";
import Twitter from "../assets/socials/twitter.svg";
import Instagram from '../assets/socials/ig.svg';
import GitHub from "../assets/socials/github.svg";
import ResumePDF from "../assets/cv_resume.pdf";
import profileImg from '../assets/me.png';
import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import { lazy, Suspense, useRef, useCallback } from 'react';

// Lazy load WebGL canvas to keep initial bundle small
const WebGLHero = lazy(() => import('./WebGLHero'));

const StatCard = ({ value, label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="glass-card text-center px-5 py-3.5 flex flex-col gap-0.5"
    style={{ minWidth: '96px' }}
    whileHover={{ scale: 1.04 }}
  >
    <div
      className="font-bold text-xl text-amber-gradient"
      style={{ fontFamily: "'Syne', sans-serif", letterSpacing: '-0.02em' }}
    >
      {value}
    </div>
    <div className="text-xs" style={{ color: 'rgba(242,242,242,0.45)', fontFamily: "'Inter', sans-serif" }}>
      {label}
    </div>
  </motion.div>
);

const SocialLink = ({ href, icon, label }) => (
  <a href={href} target="_blank" rel="noreferrer" className="social-icon" aria-label={label}>
    <img src={icon} alt={label} style={{ width: '15px', height: '15px', filter: 'brightness(0.9)' }} />
  </a>
);

const Home = () => {
  // Plain object for mouse position — passed to WebGL shader
  const mouseRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current.x = (e.clientX - rect.left) / rect.width * 2 - 1;
    mouseRef.current.y = -((e.clientY - rect.top) / rect.height * 2 - 1);
  }, []);

  const handleResumeClick = () => window.open(ResumePDF, '_blank');

  const socials = [
    { href: "https://www.linkedin.com/in/adegboye-tommy-125098254", icon: LinkedIn, label: "LinkedIn" },
    { href: "https://x.com/999tommy__", icon: Twitter, label: "Twitter" },
    { href: "https://www.instagram.com/syntaxdev__", icon: Instagram, label: "Instagram" },
    { href: "https://github.com/999tommy", icon: GitHub, label: "GitHub" },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24"
      id="home"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* WebGL shader background */}
      <Suspense
        fallback={
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 60% 30%, rgba(232,130,10,0.12) 0%, var(--obsidian) 65%)' }}
          />
        }
      >
        <WebGLHero mouseRef={mouseRef} />
      </Suspense>

      {/* Dot grid overlay */}
      <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" style={{ zIndex: 1 }} />

      {/* Content */}
      <div className="section-container flex flex-col md:flex-row items-center gap-12 md:gap-8 z-10">
        {/* ── LEFT: main content ──────────────────────────── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:w-[56%] flex flex-col items-start"
        >
          {/* Availability badge */}
          <motion.div variants={item} className="flex items-center gap-2 mb-6">
            <span
              className="w-2 h-2 rounded-full animate-pulse-amber"
              style={{ background: 'var(--amber)', boxShadow: '0 0 8px rgba(232,130,10,0.9)' }}
            />
            <span
              className="section-eyebrow text-xs px-3 py-1 rounded-full"
              style={{ border: '1px solid rgba(232,130,10,0.25)', background: 'rgba(232,130,10,0.06)' }}
            >
              Open to select opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-bold tracking-tight mb-2"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(3rem, 7vw, 5.2rem)',
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
            }}
          >
            Tommy<br />
            <span className="text-amber-shimmer">Adegboye</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={item}
            className="text-lg font-medium mb-6"
            style={{ color: 'rgba(242,242,242,0.5)', fontFamily: "'Inter', sans-serif", letterSpacing: '0.01em' }}
          >
            Fullstack Engineer · AI Builder · Founder, Axist Technologies
          </motion.p>

          {/* Typewriter */}
          <motion.div variants={item} className="mb-7 h-8 flex items-center">
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.92rem', color: 'var(--amber)' }}>
              <span style={{ color: 'rgba(232,130,10,0.45)' }}>// </span>
              <TypeAnimation
                sequence={[
                  'Building scalable fullstack applications.', 2200,
                  'React · Next.js · Node.js · TypeScript.', 2000,
                  'AI automation systems at production scale.', 2000,
                  'Grew Axist Technologies to 5K+ users — solo.', 2400,
                  'Turning complex problems into clean code.', 2200,
                ]}
                speed={58}
                repeat={Infinity}
              />
              <span className="animate-blink" style={{ color: 'var(--amber)' }}>|</span>
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={item}
            className="mb-8 leading-relaxed max-w-lg"
            style={{ color: 'rgba(242,242,242,0.58)', fontSize: '0.95rem', fontFamily: "'Inter', sans-serif" }}
          >
            I'm a <strong style={{ color: 'var(--text-primary)' }}>Fullstack Software Engineer</strong> who builds
            fast, scalable web and mobile applications — from frontend interfaces to backend APIs and cloud infrastructure.
            I also founded{' '}
            <a
              href="https://axist.app"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--amber)', textDecoration: 'none', fontWeight: 600 }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
            >
              Axist Technologies
            </a>{' '}
            — a SaaS platform I built and scaled to <strong style={{ color: 'var(--text-primary)' }}>5,000+ combined users</strong> as a solo founder.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-9">
            <Link to="projects" smooth={true} duration={800}>
              <motion.button className="btn-amber" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                View My Work
              </motion.button>
            </Link>
            <Link to="contact" smooth={true} duration={800}>
              <motion.button className="btn-ghost" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                Let's Build Together
              </motion.button>
            </Link>
            <motion.button
              onClick={handleResumeClick}
              className="btn-ghost btn-pill"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{ fontSize: '0.82rem', padding: '0.55rem 1.2rem' }}
            >
              Resume ↗
            </motion.button>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="flex gap-2">
            {socials.map(s => <SocialLink key={s.label} {...s} />)}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: profile + stat cards + terminal ───── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:w-[44%] flex flex-col items-center md:items-end gap-5"
        >
          {/* Profile image */}
          <motion.div
            className="relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, var(--amber-dim), var(--amber-bright), var(--amber-light), var(--amber), var(--amber-dim))',
                padding: '3px',
                boxShadow: '0 0 48px rgba(232,130,10,0.38), 0 0 100px rgba(232,130,10,0.13)',
              }}
            >
              <div className="rounded-full" style={{ background: 'var(--obsidian)', padding: '3px' }}>
                <img
                  src={profileImg}
                  alt="Tommy Adegboye — CEO & Fullstack Engineer"
                  className="rounded-full object-cover"
                  style={{ width: '175px', height: '175px', display: 'block' }}
                />
              </div>
            </div>
            {/* CEO badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
              className="absolute -bottom-2 -right-2 glass-card px-3 py-1.5 flex items-center gap-1.5"
              style={{ borderRadius: '100px', fontSize: '0.7rem', fontFamily: "'Inter', sans-serif" }}
            >
              <span style={{ color: 'var(--amber)' }}>👑</span>
              <span style={{ color: 'var(--amber)', fontWeight: 700 }}>CEO & Founder</span>
            </motion.div>
          </motion.div>

          {/* Stat cards */}
          <div className="flex gap-3 flex-wrap justify-center md:justify-end">
            <StatCard value="5K+"  label="Combined Users" delay={0.6} />
            <StatCard value="15+"  label="Projects Built" delay={0.7} />
            <StatCard value="5+"   label="Years Building" delay={0.8} />
          </div>

          {/* Terminal neofetch card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="terminal-card w-full max-w-[285px] font-mono text-left"
          >
            <div className="terminal-header flex items-center justify-between">
              <div className="terminal-dots">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
              </div>
              <span style={{ color: 'var(--amber-dim)', fontSize: '0.68rem' }}>~/tommy $ neofetch</span>
            </div>
            <div className="p-3.5 text-[11px] leading-relaxed text-gray-300 space-y-0.5">
              <div style={{ color: 'var(--amber)' }}>
                <span className="text-white font-bold">tommy</span>@<span style={{ color: 'var(--amber)' }}>axist.app</span>
              </div>
              <div style={{ color: 'rgba(242,242,242,0.25)' }}>─────────────────</div>
              <div><span style={{ color: 'var(--amber-dim)' }}>Role:</span> Fullstack Software Engineer</div>
              <div><span style={{ color: 'var(--amber-dim)' }}>Stack:</span> Next.js · Node.js · AWS · TypeScript</div>
              <div><span style={{ color: 'var(--amber-dim)' }}>Uptime:</span> 5+ years building in production</div>
              <div><span style={{ color: 'var(--amber-dim)' }}>Degree:</span> BSc Biochemistry</div>
              <div><span style={{ color: 'var(--amber-dim)' }}>Founded:</span> Axist Technologies (axist.app)</div>
              <div>
                <span style={{ color: 'var(--amber-dim)' }}>Status:</span>{' '}
                <span
                  className="px-1.5 py-0.5 rounded font-bold"
                  style={{ background: 'rgba(232,130,10,0.12)', color: 'var(--amber)', border: '1px solid rgba(232,130,10,0.3)', fontSize: '9px' }}
                >
                  OPEN TO WORK
                </span>
              </div>
              <div><span style={{ color: 'var(--amber-dim)' }}>Reach:</span> adegboyetommy@gmail.com</div>
            </div>
          </motion.div>

          {/* Axist card */}
          <motion.a
            href="https://axist.app"
            target="_blank"
            rel="noreferrer"
            className="glass-card glass-card--amber px-4 py-3 flex items-center gap-3 no-underline w-full"
            style={{ maxWidth: '285px', textDecoration: 'none' }}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, var(--amber-dim), var(--amber))' }}
            >
              <span style={{ fontSize: '1rem' }}>⚡</span>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Syne', sans-serif" }}>
                Axist Technologies
              </div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(232,130,10,0.7)', fontFamily: "'Inter', sans-serif" }}>
                axist.app · Founder & CEO
              </div>
            </div>
            <span style={{ marginLeft: 'auto', color: 'var(--amber)', fontSize: '0.8rem', opacity: 0.6 }}>↗</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span style={{ fontSize: '0.6rem', color: 'rgba(232,130,10,0.45)', letterSpacing: '0.15em', fontFamily: "'JetBrains Mono', monospace" }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{ width: '1px', height: '30px', background: 'linear-gradient(180deg, var(--amber), transparent)' }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Home;