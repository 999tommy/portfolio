// certificates.jsx — credentials section with clickable PDF certificates
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// PDFs are in /public — accessible via root path at runtime
const certificates = [
  {
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2024',
    icon: '☁️',
    description: 'Industry-recognised cloud architecture certification covering AWS services, scalable infrastructure design, high availability systems, and cloud security best practices.',
    color: '#FF9900',
    pdfUrl: '/AWS_Solutions_Architect_Professional_Certificate.pdf',
  },
  {
    title: 'Fullstack Engineering',
    issuer: 'AltSchool Africa',
    year: '2023',
    icon: '🎓',
    description: 'Comprehensive fullstack engineering programme covering modern JavaScript frameworks, backend architecture, databases, deployment, and professional software development practices.',
    color: '#E8820A',
    pdfUrl: '/AltSchool_Frontend_Engineering_Certificate.pdf',
  },
  {
    title: 'NRRT Certificate in Software Engineering',
    issuer: 'NRRT Institute',
    year: '2023',
    icon: '📜',
    description: 'Professional software engineering certification covering fullstack development, system design, algorithms, data structures, and engineering standards.',
    color: '#4A90D9',
    pdfUrl: '/NRRRT_Fullstack_Engineering_Certificate.pdf',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2022',
    icon: '🎨',
    description: 'Verified certification in HTML5, CSS3, Flexbox, CSS Grid, and accessible, responsive design patterns.',
    color: '#00A300',
    pdfUrl: null,
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    year: '2022',
    icon: '⚡',
    description: 'Rigorous JavaScript certification covering ES6+, functional programming, object-oriented design, and core data structures.',
    color: '#F7DF1E',
    pdfUrl: null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const CertCard = ({ cert, index }) => {
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="cert-badge"
      whileHover={{ scale: 1.02 }}
      style={{ cursor: cert.pdfUrl ? 'pointer' : 'default' }}
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
          <div className="flex items-center gap-2">
            {cert.pdfUrl && (
              <span
                className="text-[9px] px-1.5 py-0.5 rounded"
                style={{ background: 'rgba(232,130,10,0.1)', color: 'var(--amber)', border: '1px solid rgba(232,130,10,0.25)', fontFamily: "'JetBrains Mono', monospace" }}
              >
                VIEW PDF ↗
              </span>
            )}
            <span
              className="text-[10px] flex-shrink-0"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: 'rgba(232,130,10,0.5)' }}
            >
              {cert.year}
            </span>
          </div>
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

  if (cert.pdfUrl) {
    return (
      <a href={cert.pdfUrl} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
        {cardContent}
      </a>
    );
  }
  return cardContent;
};

const Certificates = ({ standalone = false }) => (
  <section className="relative" id="certificates">
    <div className="section-container">
      {/* Section header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-14"
      >
        <span className="section-eyebrow">04 — Credentials</span>
        <h2 className="section-title mt-2">Education & Certifications</h2>
        <div className="section-divider" />
        <p
          className="mt-4 max-w-xl glass px-6 py-2.5 rounded-xl inline-block"
          style={{ color: 'rgba(242,242,242,0.6)', fontSize: '0.88rem', fontFamily: "'Inter', sans-serif" }}
        >
          Grounded in formal education, validated by industry certifications, and sharpened through years of shipping real software.
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
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(242,242,242,0.52)', fontFamily: "'Inter', sans-serif" }}>
            A BSc in Biochemistry cultivates{' '}
            <strong style={{ color: 'var(--text-primary)' }}>rigorous analytical thinking, hypothesis-driven debugging</strong>, and an obsession
            with measurement that translates directly into engineering precision.
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
            Beyond formal certifications, I dedicate time each week to studying new tools, contributing to open-source,
            and experimenting with emerging patterns in AI, cloud infrastructure, and web performance.
          </div>
        </div>
      </motion.div>

      {standalone && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link to="/">
            <motion.button
              className="btn-ghost"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              ← Back to Home
            </motion.button>
          </Link>
        </motion.div>
      )}
    </div>
  </section>
);

export default Certificates;
