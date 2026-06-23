// certificates.jsx — credentials & certifications section
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const certificates = [
  {
    title: 'NRRT Certificate in Software Engineering',
    issuer: 'NRRT Institute',
    year: '2023',
    icon: '🎓',
    description: 'Formal software engineering certification covering fullstack development, system design, algorithms, and professional engineering practices.',
    color: '#D4A843',
  },
  {
    title: 'Meta Front-End Developer Certificate',
    issuer: 'Meta · Coursera',
    year: '2023',
    icon: '🔵',
    description: 'Professional-grade front-end development curriculum by Meta engineers — covering React, advanced CSS, UX design, and accessibility.',
    color: '#1877F2',
  },
  {
    title: 'IBM Full Stack Software Developer',
    issuer: 'IBM · Coursera',
    year: '2023',
    icon: '🏢',
    description: 'Comprehensive fullstack developer professional certificate from IBM — covering cloud-native development, microservices, containers, and DevOps.',
    color: '#006699',
  },
  {
    title: 'Responsive Web Design Certification',
    issuer: 'freeCodeCamp',
    year: '2022',
    icon: '🔥',
    description: 'Verified web design certification including HTML5, CSS3, Flexbox, Grid, and accessible design patterns.',
    color: '#006400',
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    year: '2022',
    icon: '⚡',
    description: 'In-depth JavaScript certification covering ES6+, functional programming, OOP, algorithms, and data structures.',
    color: '#F7DF1E',
  },
  {
    title: 'AI Automation Specialist',
    issuer: 'AI Automation Institute',
    year: '2024',
    icon: '🤖',
    description: 'Advanced certification in AI-driven workflow automation, LLM integration, prompt engineering, and building production AI pipelines with real-world applications.',
    color: '#8B5CF6',
  },
];

const CertCard = ({ cert, index }) => (
  <motion.div
    variants={fadeIn("up", 0.1 + index * 0.07)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.15 }}
    className="cert-badge"
    style={{ cursor: 'default' }}
  >
    {/* Icon badge */}
    <div
      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl"
      style={{
        background: `${cert.color}14`,
        border: `1px solid ${cert.color}33`,
      }}
    >
      {cert.icon}
    </div>

    {/* Content */}
    <div className="flex-1 min-w-0">
      <div className="flex flex-wrap items-start justify-between gap-1 mb-1">
        <h4
          className="font-semibold text-sm leading-snug"
          style={{ color: '#f0f0f0', fontFamily: "'Inter', sans-serif" }}
        >
          {cert.title}
        </h4>
        <span
          className="text-xs flex-shrink-0"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: 'rgba(212,168,67,0.55)',
          }}
        >
          {cert.year}
        </span>
      </div>
      <div
        className="text-xs font-medium mb-2"
        style={{ color: cert.color, opacity: 0.85, fontFamily: "'Inter', sans-serif" }}
      >
        {cert.issuer}
      </div>
      <p
        className="text-xs leading-relaxed"
        style={{ color: 'rgba(232,232,232,0.5)', fontFamily: "'Inter', sans-serif" }}
      >
        {cert.description}
      </p>
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <section className="relative" id="certificates">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14"
        >
          <span className="section-label">04 — Credentials</span>
          <h2 className="section-title mt-2">Certificates & Qualifications</h2>
          <div className="section-divider" />
          <p className="mt-4 max-w-xl" style={{ color: 'rgba(232,232,232,0.5)', fontSize: '0.95rem', fontFamily: "'Inter', sans-serif" }}>
            Backed by formal education, industry-recognized certifications, and continuous self-driven learning across engineering, AI, and product development.
          </p>
        </motion.div>

        {/* Education highlight */}
        <motion.div
          variants={fadeIn("up", 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glass-card p-6 mb-8 flex flex-col sm:flex-row items-start gap-5"
          style={{ border: '1px solid rgba(212,168,67,0.3)', background: 'linear-gradient(135deg, rgba(212,168,67,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: 'rgba(212,168,67,0.12)', border: '1px solid rgba(212,168,67,0.3)' }}
          >
            🎓
          </div>
          <div>
            <div className="section-label mb-1">Academic Background</div>
            <h3 className="font-bold text-base mb-1" style={{ color: '#f0f0f0', fontFamily: "'Inter', sans-serif" }}>
              Bachelor of Science — Biochemistry
            </h3>
            <p className="text-sm" style={{ color: 'rgba(212,168,67,0.75)', fontFamily: "'Inter', sans-serif", marginBottom: '6px' }}>
              University degree · Sciences
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,232,232,0.55)', fontFamily: "'Inter', sans-serif" }}>
              A BSc in Biochemistry gives me a rare scientific precision in software engineering — 
              systematic debugging, evidence-based decision making, and a deep appreciation for data, 
              measurement, and building things that reliably work.
            </p>
          </div>
        </motion.div>

        {/* Certificates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificates.map((cert, index) => (
            <CertCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-xs" style={{ color: 'rgba(232,232,232,0.3)', fontFamily: "'JetBrains Mono', monospace" }}>
            // Always learning · Always shipping
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
