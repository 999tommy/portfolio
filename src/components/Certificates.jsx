// certificates.jsx — overhauled credentials section, electric amber redesign
import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'NRRT Certificate in Software Engineering',
    issuer: 'NRRT Institute',
    year: '2023',
    icon: '🏛️',
    description: 'Comprehensive software engineering certification covering fullstack development, system design, algorithms, data structures, and professional engineering standards.',
    color: '#E8820A',
  },
  {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta · Coursera',
    year: '2023',
    icon: '🔵',
    description: 'Industry-recognised front-end curriculum designed by Meta engineers — covering React, advanced CSS, accessibility, and UX fundamentals.',
    color: '#1877F2',
  },
  {
    title: 'IBM Full Stack Software Developer',
    issuer: 'IBM · Coursera',
    year: '2023',
    icon: '🏢',
    description: 'Enterprise-grade fullstack developer certificate by IBM — encompassing cloud-native architecture, microservices, containerisation (Docker/Kubernetes), and DevOps practices.',
    color: '#006699',
  },
  {
    title: 'Responsive Web Design Certification',
    issuer: 'freeCodeCamp',
    year: '2022',
    icon: '🎨',
    description: 'Verified certification in HTML5, CSS3, Flexbox, CSS Grid, and accessible, responsive design patterns — the foundation of every UI I build.',
    color: '#00A300',
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    year: '2022',
    icon: '⚡',
    description: 'Rigorous JavaScript certification covering ES6+, functional programming, object-oriented design, algorithmic problem-solving, and core data structures.',
    color: '#F7DF1E',
  },
  {
    title: 'AI Automation Specialist',
    issuer: 'AI Automation Institute',
    year: '2024',
    icon: '🤖',
    description: 'Advanced certification in AI-driven workflow automation, large language model integration, prompt engineering, and building production-grade AI pipelines for real-world business applications.',
    color: '#8B5CF6',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const CertCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="cert-badge"
    whileHover={{ scale: 1.02 }}
    style={{ cursor: 'default' }}
  >
    {/* Icon badge */}
    <div
      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl"
      style={{
        background: `${cert.color}18`,
        border: `1px solid ${cert.color}35`,
        boxShadow: `0 0 16px ${cert.color}18`,
      }}
    >
      {cert.icon}
    </div>

    {/* Content */}
    <div className="flex-1 min-w-0">
      <div className="flex flex-wrap items-start justify-between gap-1 mb-1">
        <h4
          className="font-semibold text-sm leading-snug"
          style={{ color: 'var(--text-primary)', fontFamily: "'Syne', sans-serif" }}
        >
          {cert.title}
        </h4>
        <span
          className="text-[10px] flex-shrink-0"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: 'rgba(232,130,10,0.5)' }}
        >
          {cert.year}
        </span>
      </div>
      <div
        className="text-xs font-semibold mb-2"
        style={{ color: cert.color, opacity: 0.88, fontFamily: "'Inter', sans-serif" }}
      >
        {cert.issuer}
      </div>
      <p
        className="text-xs leading-relaxed"
        style={{ color: 'rgba(242,242,242,0.48)', fontFamily: "'Inter', sans-serif" }}
      >
        {cert.description}
      </p>
    </div>
  </motion.div>
);

const Certificates = () => (
  <section className="relative" id="certificates">
    <div className="section-container">
      {/* Section header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16"
      >
        <span className="section-eyebrow">04 — Credentials</span>
        <h2 className="section-title mt-2">Education & Certifications</h2>
        <div className="section-divider" />
        <p
          className="mt-4 max-w-xl glass px-6 py-2.5 rounded-xl inline-block"
          style={{ color: 'rgba(242,242,242,0.6)', fontSize: '0.88rem', fontFamily: "'Inter', sans-serif" }}
        >
          Grounded in formal academia, validated by industry certifications, and sharpened through years of
          shipping real products at scale.
        </p>
      </motion.div>

      {/* Academic highlight — featured card */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="glass-card glass-card--amber p-6 mb-10 flex flex-col sm:flex-row items-start gap-5"
        whileHover={{ scale: 1.01 }}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: 'rgba(232,130,10,0.12)', border: '1px solid rgba(232,130,10,0.3)', boxShadow: '0 0 24px rgba(232,130,10,0.15)' }}
        >
          🎓
        </div>
        <div>
          <div className="section-eyebrow mb-2">Academic Background</div>
          <h3
            className="font-bold text-base mb-1"
            style={{ color: 'var(--text-primary)', fontFamily: "'Syne', sans-serif" }}
          >
            Bachelor of Science — Biochemistry
          </h3>
          <p className="text-sm mb-2" style={{ color: 'rgba(232,130,10,0.75)', fontFamily: "'Inter', sans-serif" }}>
            University Degree · Natural Sciences
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(242,242,242,0.52)', fontFamily: "'Inter', sans-serif" }}>
            An unconventional background that is, in practice, a genuine advantage. A BSc in Biochemistry
            cultivates{' '}
            <strong style={{ color: 'var(--text-primary)' }}>rigorous analytical thinking, hypothesis-driven debugging</strong>, and an obsession
            with measurement that translates directly into engineering precision. I approach software the same way
            I approached lab science: systematically, with evidence, and with a high bar for reproducibility.
          </p>
        </div>
      </motion.div>

      {/* Certificates grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {certificates.map((cert, index) => (
          <CertCard key={cert.title} cert={cert} index={index} />
        ))}
      </div>

      {/* Continuous learning note */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="glass-card p-5 flex items-start gap-4"
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
          style={{ background: 'rgba(232,130,10,0.1)', border: '1px solid rgba(232,130,10,0.22)' }}
        >
          📚
        </div>
        <div>
          <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Syne', sans-serif", marginBottom: '4px' }}>
            Continuous Learning
          </div>
          <div style={{ fontSize: '0.78rem', color: 'rgba(242,242,242,0.5)', fontFamily: "'Inter', sans-serif", lineHeight: '1.7' }}>
            The technology landscape moves fast. Beyond formal certifications, I dedicate time each week to
            studying emerging AI research, contributing to open-source, and experimenting with new tools —
            whether that's a new LLM integration pattern, a WebGPU technique, or a better way to structure
            a multi-tenant SaaS backend. Learning is a professional habit, not a one-off event.
          </div>
        </div>
      </motion.div>

      {/* Footer note */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-8 text-center"
      >
        <p
          className="text-xs"
          style={{ color: 'rgba(242,242,242,0.25)', fontFamily: "'JetBrains Mono', monospace" }}
        >
          // Always learning · Always shipping · Never settling
        </p>
      </motion.div>
    </div>
  </section>
);

export default Certificates;
