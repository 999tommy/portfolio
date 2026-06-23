// experience.jsx — premium dark-gold timeline redesign
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const experiences = [
  {
    period: '2025 — Present',
    role: 'CEO & Founder',
    company: 'Axist Technologies',
    url: 'https://axist.app',
    type: 'Startup · Full-time',
    current: true,
    description: [
      'Founded Axist Technologies from zero — grew it to 10,000+ combined users across products, entirely as a solo founder.',
      'Architected and shipped AI-powered SaaS automation tools for creators, brands, and businesses — including intelligent content pipelines, ad monitoring, predictive analytics, and multi-platform automation workflows.',
      'Designed and implemented complex backend systems, multi-tenant APIs, and real-time data pipelines integrating LLM models (OpenAI, LangChain) into production-grade products.',
      'Led all technical, product, business, and marketing decisions — from zero to thousands of paying users.',
    ],
    tags: ['AI Automation', 'Next.js', 'Node.js', 'LangChain', 'SaaS', 'Solo Founder'],
  },
  {
    period: 'Feb 2025 — Jul 2025',
    role: 'Senior Lead Developer',
    company: 'DropInnovation',
    type: 'Full-time',
    current: false,
    description: [
      'Contributed to internal tools and production APIs used by thousands of end users.',
      'Engineered a large-scale, feature-rich Admin panel with complex role-based access control, real-time dashboards, and audit logging.',
      'Collaborated closely with design and product teams to ship robust features on aggressive timelines.',
    ],
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'REST APIs'],
  },
  {
    period: '2023 — 2024',
    role: 'Freelance Developer',
    company: 'Independent Contracts',
    type: 'Freelance',
    current: false,
    description: [
      'Delivered 10+ high-complexity web and mobile application contracts for clients across Africa, Europe, and the US.',
      'Built complex automation workflows, multi-step backend integrations, and third-party API orchestrations for businesses in fintech, e-commerce, and media.',
      'Programmed custom AI automation pipelines, data processing workflows, and content generation systems — significantly cutting client operational costs.',
      'Recognized consistently for exceeding scope, on-time delivery, and clean, maintainable code.',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'AI Automation', 'REST APIs', 'Web3'],
  },
  {
    period: '2023',
    role: 'Junior Developer',
    company: 'Resavation',
    type: 'Full-time',
    current: false,
    description: [
      'Built core features for a scalable roommate and property management platform handling hundreds of active listings.',
      'Implemented real-time notifications, search/filter systems, and booking workflows from design to deployment.',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    period: '2022 — 2023',
    role: 'Laboratory Research Intern',
    company: 'Vitabiotics Nigeria Ltd.',
    type: 'Internship · Pharmaceutical',
    current: false,
    description: [
      'Conducted hands-on biochemical research and lab analysis at one of Nigeria\'s leading pharmaceutical companies.',
      'Applied precision-driven scientific methodology — quality standards that carry directly into my engineering approach today.',
      'Gained deep appreciation for process integrity, documentation, and systematic problem solving.',
    ],
    tags: ['Biochemistry', 'Lab Research', 'Analytical Methods', 'Pharmaceutical QA'],
  },
];

const TimelineCard = ({ exp, index }) => (
  <motion.div
    variants={fadeIn("up", 0.1 + index * 0.08)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="flex gap-5"
  >
    {/* Timeline line & dot */}
    <div className="flex flex-col items-center" style={{ minWidth: '18px' }}>
      <div className={exp.current ? 'timeline-dot-active' : 'timeline-dot'} />
      {index < experiences.length - 1 && (
        <div className="timeline-line flex-1 mt-2" />
      )}
    </div>

    {/* Card */}
    <div className="glass-card p-6 mb-8 flex-1" style={{ borderLeft: exp.current ? '2px solid rgba(212,168,67,0.5)' : undefined }}>
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-base" style={{ color: '#f0f0f0', fontFamily: "'Inter', sans-serif" }}>
              {exp.role}
            </h3>
            {exp.current && (
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{
                  background: 'rgba(212,168,67,0.15)',
                  color: '#D4A843',
                  border: '1px solid rgba(212,168,67,0.3)',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Current
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            {exp.url ? (
              <a
                href={exp.url}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#D4A843', fontSize: '0.88rem', fontWeight: 600, fontFamily: "'Inter', sans-serif", textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >
                {exp.company} ↗
              </a>
            ) : (
              <span style={{ color: '#D4A843', fontSize: '0.88rem', fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
                {exp.company}
              </span>
            )}
            <span style={{ color: 'rgba(232,232,232,0.3)', fontSize: '0.8rem' }}>·</span>
            <span style={{ color: 'rgba(232,232,232,0.4)', fontSize: '0.78rem', fontFamily: "'Inter', sans-serif" }}>
              {exp.type}
            </span>
          </div>
        </div>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.72rem',
            color: 'rgba(212,168,67,0.6)',
            whiteSpace: 'nowrap',
          }}
        >
          {exp.period}
        </span>
      </div>

      {/* Description bullets */}
      <ul className="mb-4 space-y-2">
        {exp.description.map((d, i) => (
          <li key={i} className="flex items-start gap-2" style={{ fontSize: '0.85rem', color: 'rgba(232,232,232,0.65)', fontFamily: "'Inter', sans-serif", lineHeight: '1.6' }}>
            <span style={{ color: '#D4A843', fontFamily: "'JetBrains Mono', monospace", fontWeight: 'bold', fontSize: '0.9rem', marginTop: '1px', flexShrink: 0 }}>$</span>
            {d}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {exp.tags.map(tag => (
          <span key={tag} className="skill-chip" style={{ fontSize: '0.7rem', padding: '0.25rem 0.65rem' }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section className="relative" id="experience">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14"
        >
          <span className="section-label">02 — Experience</span>
          <h2 className="section-title mt-2">Career Timeline</h2>
          <div className="section-divider" />
          <p className="mt-4 max-w-xl" style={{ color: 'rgba(232,232,232,0.5)', fontSize: '0.95rem', fontFamily: "'Inter', sans-serif" }}>
            From pharma labs to founding a tech startup — a track record of delivering beyond expectations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div>
          {experiences.map((exp, index) => (
            <TimelineCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;