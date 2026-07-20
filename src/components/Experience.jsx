// experience.jsx — magnetic timeline cards, improved professional copy
import { motion } from 'framer-motion';

const experiences = [
  {
    period: '2025 — Present',
    role: 'CEO & Founder',
    company: 'Axist Technologies',
    url: 'https://axist.app',
    type: 'Startup · Full-time',
    current: true,
    description: [
      'Founded and scaled Axist Technologies from concept to a platform serving 10,000+ combined users — entirely as a solo founder, with zero external funding.',
      'Architected and shipped AI-powered SaaS automation tools for creators, brands, and businesses — including intelligent content pipelines, multi-platform scheduling, ad performance monitoring, and predictive analytics systems.',
      'Designed and built a robust multi-tenant backend with LLM integrations (OpenAI, LangChain), real-time data pipelines, and RESTful APIs handling thousands of concurrent users.',
      'Owned every function of the business: product roadmap, engineering, growth strategy, customer success, and fundraising — demonstrating the full breadth of a technical co-founder.',
    ],
    tags: ['AI Automation', 'Next.js', 'Node.js', 'LangChain', 'OpenAI', 'PostgreSQL', 'SaaS', 'Solo Founder'],
  },
  {
    period: 'Feb 2025 — Jul 2025',
    role: 'Senior Lead Developer',
    company: 'DropInnovation',
    type: 'Full-time',
    current: false,
    description: [
      'Led development of a large-scale internal admin panel with granular role-based access control, real-time dashboards, and comprehensive audit logging — serving thousands of end users.',
      'Collaborated closely with cross-functional design and product teams to ship complex, user-facing features on aggressive sprint cycles, consistently delivering ahead of schedule.',
      'Introduced performance optimisation practices that reduced core API response times by 40%, improving the user experience across the platform.',
    ],
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'REST APIs', 'RBAC'],
  },
  {
    period: '2023 — 2024',
    role: 'Freelance Software Engineer',
    company: 'Independent Contracts',
    type: 'Freelance · Contract',
    current: false,
    description: [
      'Delivered 10+ high-complexity engineering projects for clients across Africa, Europe, and North America — spanning fintech, e-commerce, and digital media verticals.',
      'Built custom AI automation pipelines, multi-step backend integrations, and third-party API orchestrations that measurably reduced client operational costs and manual workload.',
      'Developed complex mobile applications using React Native, including real-time notification systems and payment gateway integrations.',
      'Consistently recognised by clients for exceeding scope, on-time delivery, and producing clean, maintainable, well-documented codebases.',
    ],
    tags: ['React', 'Next.js', 'React Native', 'Node.js', 'AI Automation', 'REST APIs', 'Web3'],
  },
  {
    period: '2023',
    role: 'Junior Software Developer',
    company: 'Resavation',
    type: 'Full-time',
    current: false,
    description: [
      'Developed core product features for a scalable roommate matching and property management platform handling hundreds of active listings.',
      'Implemented real-time notification systems, advanced search and filter interfaces, and end-to-end booking workflows — from UI design to production deployment.',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
  },
  {
    period: '2022 — 2023',
    role: 'Laboratory Research Intern',
    company: 'Vitabiotics Nigeria Ltd.',
    type: 'Internship · Pharmaceutical',
    current: false,
    description: [
      'Conducted hands-on biochemical research and quality assurance lab analysis at one of Nigeria\'s leading pharmaceutical manufacturers.',
      'Applied rigorous scientific methodology — an experience that directly informs my approach to software quality, systematic debugging, and evidence-based decision making.',
    ],
    tags: ['Biochemistry', 'Lab Research', 'Analytical Methods', 'Pharmaceutical QA'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const TimelineCard = ({ exp, index }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.15 }}
    className="flex gap-5"
  >
    {/* Timeline line & dot */}
    <div className="flex flex-col items-center" style={{ minWidth: '16px' }}>
      <div className={exp.current ? 'timeline-dot-active' : 'timeline-dot'} />
      {index < experiences.length - 1 && (
        <div className="timeline-line flex-1 mt-2" />
      )}
    </div>

    {/* Card */}
    <motion.div
      className="glass-card p-6 mb-8 flex-1"
      style={{ borderLeft: exp.current ? '2px solid rgba(232,130,10,0.5)' : undefined }}
      whileHover={{ y: -4 }}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-bold text-base" style={{ color: 'var(--text-primary)', fontFamily: "'Syne', sans-serif" }}>
              {exp.role}
            </h3>
            {exp.current && (
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{
                  background: 'rgba(232,130,10,0.14)',
                  color: 'var(--amber)',
                  border: '1px solid rgba(232,130,10,0.3)',
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: '0.05em',
                }}
              >
                ● NOW
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            {exp.url ? (
              <a
                href={exp.url}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--amber)', fontSize: '0.87rem', fontWeight: 600, fontFamily: "'Inter', sans-serif", textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >
                {exp.company} ↗
              </a>
            ) : (
              <span style={{ color: 'var(--amber)', fontSize: '0.87rem', fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
                {exp.company}
              </span>
            )}
            <span style={{ color: 'rgba(242,242,242,0.25)', fontSize: '0.8rem' }}>·</span>
            <span style={{ color: 'rgba(242,242,242,0.38)', fontSize: '0.77rem', fontFamily: "'Inter', sans-serif" }}>
              {exp.type}
            </span>
          </div>
        </div>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            color: 'rgba(232,130,10,0.55)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {exp.period}
        </span>
      </div>

      {/* Description */}
      <ul className="mb-4 space-y-2">
        {exp.description.map((d, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5"
            style={{ fontSize: '0.85rem', color: 'rgba(242,242,242,0.62)', fontFamily: "'Inter', sans-serif", lineHeight: '1.7' }}
          >
            <span
              style={{ color: 'var(--amber)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', marginTop: '3px', flexShrink: 0, fontWeight: 'bold' }}
            >
              ▸
            </span>
            {d}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {exp.tags.map(tag => (
          <span key={tag} className="skill-chip" style={{ fontSize: '0.68rem', padding: '0.22rem 0.65rem' }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

const Experience = () => (
  <section className="relative" id="experience">
    <div className="section-container">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16"
      >
        <span className="section-eyebrow">02 — Experience</span>
        <h2 className="section-title mt-2">Career Timeline</h2>
        <div className="section-divider" />
        <p
          className="mt-4 max-w-xl glass px-6 py-2.5 rounded-xl inline-block"
          style={{ color: 'rgba(242,242,242,0.6)', fontSize: '0.88rem', fontFamily: "'Inter', sans-serif" }}
        >
          From pharmaceutical research labs to founding a technology venture — a career defined by precision,
          ambition, and consistently delivering beyond expectations.
        </p>
      </motion.div>

      <div>
        {experiences.map((exp, index) => (
          <TimelineCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;