// contact.jsx — editorial "LET'S BUILD" section, electric amber redesign
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaCheck, FaCopy, FaInstagram } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('adegboyetommy@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback
    }
  };

  const contactItems = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'adegboyetommy@gmail.com',
      action: copyEmail,
      actionLabel: copied ? 'Copied!' : 'Copy',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+234 913 129 8538',
      href: 'tel:+2349131298538',
    },
  ];

  const socials = [
    { icon: <FaLinkedin />,  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/adegboye-tommy-125098254', color: '#0A66C2' },
    { icon: <FaGithub />,    label: 'GitHub',    href: 'https://github.com/999tommy',                          color: '#f0f0f0' },
    { icon: <FaTwitter />,   label: 'Twitter',   href: 'https://x.com/999tommy__',                             color: '#1DA1F2' },
    { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/syntaxdev__',                color: '#E1306C' },
  ];

  const services = [
    { title: 'Fullstack Web & Mobile Engineering',     desc: 'Next.js, React Native, Node.js, TypeScript'        },
    { title: 'AI Automation & LLM Integration',        desc: 'LangChain, OpenAI API, n8n, custom pipelines'      },
    { title: 'SaaS Architecture & Technical Strategy', desc: 'Multi-tenant systems, API design, scalable backends' },
    { title: 'Complex Workflow Engineering',           desc: 'Data pipelines, integrations, process automation'   },
    { title: 'Technical Co-Founder Consulting',        desc: 'For early-stage startups who need a builder'        },
  ];

  return (
    <section className="relative" id="contact">
      <div className="section-container">
        {/* Editorial giant heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <span className="section-eyebrow">05 — Contact</span>
          <div className="mt-4 overflow-hidden">
            <motion.h2
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-0.05em',
                color: 'var(--text-primary)',
              }}
            >
              Let's Build
              <br />
              <span className="text-amber-shimmer">Something.</span>
            </motion.h2>
          </div>
          <div className="section-divider mt-6" />
          <p
            className="mt-4 max-w-xl"
            style={{ color: 'rgba(242,242,242,0.55)', fontSize: '0.95rem', fontFamily: "'Inter', sans-serif", lineHeight: '1.75' }}
          >
            I take on a small number of high-impact contracts at any given time. If you're building something
            ambitious and need a senior engineer who can think like a founder — I'm listening.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ── LEFT: Contact details + socials ─────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:w-1/2 flex flex-col gap-4"
          >
            {/* Contact info cards */}
            {contactItems.map(({ icon, label, value, href, action, actionLabel }) => (
              <div key={label} className="glass-card p-5 flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-sm"
                  style={{ background: 'rgba(232,130,10,0.1)', border: '1px solid rgba(232,130,10,0.24)', color: 'var(--amber)' }}
                >
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[10px] mb-0.5 uppercase tracking-widest"
                    style={{ color: 'rgba(232,130,10,0.55)', fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium"
                      style={{ color: 'var(--text-primary)', textDecoration: 'none', fontFamily: "'Inter', sans-serif" }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium" style={{ color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                      {value}
                    </span>
                  )}
                </div>
                {action && (
                  <motion.button
                    onClick={action}
                    className="flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg"
                    style={{
                      background: copied ? 'rgba(34,197,94,0.12)' : 'rgba(232,130,10,0.1)',
                      border:     copied ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(232,130,10,0.25)',
                      color:      copied ? '#22c55e' : 'var(--amber)',
                      fontFamily: "'Inter', sans-serif",
                      transition: 'all 0.2s',
                    }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {copied ? <FaCheck size={10} /> : <FaCopy size={10} />}
                    {actionLabel}
                  </motion.button>
                )}
              </div>
            ))}

            {/* Social links */}
            <div className="glass-card p-5">
              <div
                className="text-[10px] uppercase tracking-widest mb-4"
                style={{ color: 'rgba(232,130,10,0.55)', fontFamily: "'JetBrains Mono', monospace" }}
              >
                Socials
              </div>
              <div className="flex gap-2.5 flex-wrap">
                {socials.map(({ icon, label, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(242,242,242,0.6)',
                      textDecoration: 'none',
                      fontFamily: "'Inter', sans-serif",
                    }}
                    whileHover={{ scale: 1.04, borderColor: color, color }}
                    whileTap={{ scale: 0.97 }}
                    aria-label={label}
                  >
                    <span style={{ fontSize: '0.88rem' }}>{icon}</span>
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div
              className="glass-card p-4 flex items-center gap-3"
              style={{ border: '1px solid rgba(34,197,94,0.2)', background: 'rgba(34,197,94,0.04)' }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,0.8)', animation: 'glowPulse 2s ease-in-out infinite' }}
              />
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#22c55e', fontFamily: "'Syne', sans-serif" }}>
                  Available for New Projects
                </div>
                <div style={{ fontSize: '0.73rem', color: 'rgba(242,242,242,0.45)', fontFamily: "'Inter', sans-serif" }}>
                  Taking on select contracts for Q3–Q4 2026 — reach out early.
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Services & CTA ────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="terminal-card h-full flex flex-col">
              <div className="terminal-header flex items-center justify-between">
                <div className="terminal-dots">
                  <span className="terminal-dot red" />
                  <span className="terminal-dot yellow" />
                  <span className="terminal-dot green" />
                </div>
                <span style={{ color: 'var(--amber-dim)', fontSize: '0.68rem' }}>~/tommy $ cat services.md</span>
              </div>

              <div className="p-7 flex flex-col justify-between flex-1 gap-6">
                <div>
                  <h3
                    className="font-bold text-xl mb-2"
                    style={{ color: 'var(--text-primary)', fontFamily: "'Syne', sans-serif", letterSpacing: '-0.02em' }}
                  >
                    What I Can Do For You
                  </h3>
                  <p
                    className="text-sm mb-7 leading-relaxed"
                    style={{ color: 'rgba(242,242,242,0.52)', fontFamily: "'Inter', sans-serif" }}
                  >
                    Whether you need a senior engineer to execute, an architect to review your system,
                    or a technical founder-type to help you go from zero to launched — I've done it all.
                  </p>

                  <div className="space-y-3">
                    {services.map(({ title, desc }) => (
                      <div key={title} className="flex items-start gap-3">
                        <span
                          style={{
                            color: 'var(--amber)',
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.78rem',
                            marginTop: '3px',
                            flexShrink: 0,
                          }}
                        >
                          ▸
                        </span>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                            {title}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'rgba(242,242,242,0.4)', fontFamily: "'JetBrains Mono', monospace" }}>
                            {desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="hr-amber mb-5" />
                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      href="mailto:adegboyetommy@gmail.com"
                      className="btn-amber text-sm"
                      style={{ padding: '0.65rem 1.4rem', textDecoration: 'none' }}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Send an Email ↗
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/adegboye-tommy-125098254"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost text-sm"
                      style={{ padding: '0.65rem 1.4rem', textDecoration: 'none' }}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      LinkedIn ↗
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;