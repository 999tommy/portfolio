// about.jsx — editorial layout, improved professional copy, animated counters
/* eslint-disable react/no-unescaped-entities */
import skills from "../skills";
import { useInView } from 'react-intersection-observer';
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import { useEffect, useRef } from 'react';

const Counter = ({ to, suffix = '' }) => {
  const nodeRef = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView || !nodeRef.current) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        if (nodeRef.current) nodeRef.current.textContent = Math.round(value) + suffix;
      },
    });
    return controls.stop;
  }, [inView, to, suffix]);

  return <span ref={(el) => { nodeRef.current = el; ref(el); }}>0{suffix}</span>;
};

const SkillChip = ({ skill, index }) => (
  <motion.div
    key={skill.id}
    initial={{ opacity: 0, scale: 0.88 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.03, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    className="skill-chip"
    whileHover={{ scale: 1.06 }}
  >
    {skill.title}
  </motion.div>
);

const highlights = [
  { icon: "🎓", title: "BSc Biochemistry",       sub: "Analytical precision applied to software engineering" },
  { icon: "🏗️", title: "5+ Years Engineering",   sub: "Building production software since 2019"              },
  { icon: "🚀", title: "Founder, Axist",          sub: "Scaled to 5K+ users as a solo founder"                },
  { icon: "☁️", title: "AWS Certified",           sub: "AWS Solutions Architect certification"                },
];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className='relative' id='about' ref={ref}>
      <div className="section-container">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <span className="section-eyebrow">01 — About</span>
          <h2 className="section-title mt-2">The Engineer Behind the Work</h2>
          <div className="section-divider" />
          <p
            className="mt-4 max-w-xl glass px-6 py-2.5 rounded-xl inline-block"
            style={{ color: 'rgba(242,242,242,0.6)', fontSize: '0.88rem', fontFamily: "'Inter', sans-serif" }}
          >
            Software engineer first. Building clean, scalable applications — and the occasional startup on the side.
          </p>
        </motion.div>

        {/* Animated stat row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { value: 5000, suffix: '+', label: 'Combined Users'  },
            { value: 15,   suffix: '+', label: 'Projects Shipped' },
            { value: 5,    suffix: '+', label: 'Years in Tech'   },
            { value: 3,    suffix: '',  label: 'Live Products'   },
          ].map(({ value, suffix, label }) => (
            <motion.div
              key={label}
              className="glass-card p-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div
                className="font-bold text-2xl text-amber-gradient mb-0.5"
                style={{ fontFamily: "'Syne', sans-serif", letterSpacing: '-0.03em' }}
              >
                <Counter to={value >= 5000 ? 5 : value} suffix={value >= 5000 ? 'K+' : suffix} />
              </div>
              <div className="text-xs" style={{ color: 'rgba(242,242,242,0.45)', fontFamily: "'Inter', sans-serif" }}>
                {label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* ── LEFT: Bio ───────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:w-1/2 flex flex-col gap-5"
          >
            {/* Bio card */}
            <div className="glass-card p-7">
              <h3
                className="font-bold text-base mb-4"
                style={{ color: 'var(--amber)', fontFamily: "'Syne', sans-serif", letterSpacing: '-0.01em' }}
              >
                My Story
              </h3>
              <div
                className="space-y-4"
                style={{ fontSize: '0.9rem', color: 'rgba(242,242,242,0.68)', lineHeight: '1.85', fontFamily: "'Inter', sans-serif" }}
              >
                <p>
                  I'm <strong style={{ color: 'var(--text-primary)' }}>Tommy Adegboye</strong> — a fullstack software engineer
                  with 5+ years building production applications across web and mobile. My core focus is crafting
                  robust, scalable systems: clean APIs, fast frontends, and infrastructure that holds up under real traffic.
                </p>
                <p>
                  My background is unconventional by design. I hold a{' '}
                  <strong style={{ color: 'var(--text-primary)' }}>BSc in Biochemistry</strong> alongside software engineering
                  certifications from NRRT, AWS, and AltSchool Africa — a combination that gives me a rare precision in
                  debugging complex systems, structuring data pipelines, and making evidence-based architectural decisions.
                </p>
                <p>
                  I've shipped production software for clients across Africa, Europe, and North America —
                  including enterprise admin systems at{' '}
                  <strong style={{ color: 'var(--text-primary)' }}>DropInnovation</strong> and freelance contracts
                  spanning fintech, e-commerce, and media. I also founded{' '}
                  <a href="https://axist.app" target="_blank" rel="noreferrer" style={{ color: 'var(--amber)' }}>Axist Technologies</a>
                  {' '}— an AI SaaS platform I built and grew to{' '}
                  <strong style={{ color: 'var(--text-primary)' }}>5,000+ combined users</strong> as a solo founder.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <a href="https://axist.app" target="_blank" rel="noreferrer">
                  <motion.button
                    className="btn-amber"
                    style={{ padding: '0.5rem 1.2rem', fontSize: '0.83rem' }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Visit Axist ↗
                  </motion.button>
                </a>
                <a href="https://naijabiz.org" target="_blank" rel="noreferrer">
                  <motion.button
                    className="btn-ghost"
                    style={{ padding: '0.5rem 1.2rem', fontSize: '0.83rem' }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    NaijaBiz ↗
                  </motion.button>
                </a>
              </div>
            </div>

            {/* Highlight tiles */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon, title, sub }) => (
                <motion.div
                  key={title}
                  className="glass-card p-4 flex flex-col gap-1.5"
                  whileHover={{ scale: 1.03 }}
                >
                  <span style={{ fontSize: '1.3rem' }}>{icon}</span>
                  <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Syne', sans-serif" }}>
                    {title}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'rgba(232,130,10,0.65)', fontFamily: "'Inter', sans-serif" }}>
                    {sub}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Skills + Focus ──────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:w-1/2 flex flex-col gap-5"
          >
            {/* Tech stack */}
            <div className="glass-card p-7">
              <h3
                className="font-bold text-base mb-5"
                style={{ color: 'var(--amber)', fontFamily: "'Syne', sans-serif", letterSpacing: '-0.01em' }}
              >
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => <SkillChip key={skill.id} skill={skill} index={i} />)}
              </div>
            </div>

            {/* Current focus */}
            <div className="glass-card p-6" style={{ border: '1px solid rgba(232,130,10,0.24)' }}>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-2 h-2 rounded-full animate-pulse-amber"
                  style={{ background: 'var(--amber)', boxShadow: '0 0 8px rgba(232,130,10,0.8)', flexShrink: 0 }}
                />
                <span style={{ color: 'var(--amber)', fontSize: '0.68rem', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.15em' }}>
                  CURRENT FOCUS
                </span>
              </div>
              <h4
                className="font-bold mb-3"
                style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontFamily: "'Syne', sans-serif" }}
              >
                Scaling Axist & AI Infrastructure
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'rgba(242,242,242,0.58)', lineHeight: '1.75', fontFamily: "'Inter', sans-serif" }}>
                Currently expanding Axist Technologies' platform — developing multi-tenant AI automation infrastructure,
                LLM-integrated content pipelines, and advanced analytics systems. I'm also consulting on{' '}
                <strong style={{ color: 'var(--text-primary)' }}>AI strategy and integration</strong> for select clients
                looking to automate complex business workflows.
              </p>
              <div className="hr-amber mt-4 mb-3" />
              <div className="flex flex-wrap gap-2">
                {['AI Engineering', 'LangChain', 'Next.js 15', 'OpenAI API', 'n8n', 'Supabase'].map(t => (
                  <span key={t} className="skill-chip" style={{ fontSize: '0.68rem' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* What I bring */}
            <div className="glass-card p-5 flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(232,130,10,0.1)', border: '1px solid rgba(232,130,10,0.22)', fontSize: '1.1rem' }}
              >
                🏗️
              </div>
              <div>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Syne', sans-serif", marginBottom: '4px' }}>
                  What Sets Me Apart
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(242,242,242,0.52)', fontFamily: "'Inter', sans-serif", lineHeight: '1.7' }}>
                  I bridge the gap between engineering and entrepreneurship. I've lived on both sides —
                  as a builder shipping features and as a founder making product, revenue, and hiring decisions.
                  That dual perspective means I build software with business impact in mind, not just technical elegance.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;