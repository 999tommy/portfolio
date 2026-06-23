// contact.jsx — premium dark-gold contact section
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaCheck, FaCopy, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('adegboyetommy@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy');
    }
  };

  const contactItems = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'adegboyetommy@gmail.com',
      action: copyToClipboard,
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
    { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/adegboye-tommy-125098254', color: '#0A66C2' },
    { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/999tommy', color: '#f0f0f0' },
    { icon: <FaTwitter />, label: 'Twitter', href: 'https://x.com/999tommy__', color: '#1DA1F2' },
    { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/syntaxdev__', color: '#E1306C' },
  ];

  return (
    <section className="relative" id="contact">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14"
        >
          <span className="section-label">05 — Contact</span>
          <h2 className="section-title mt-2">Let's Work Together</h2>
          <div className="section-divider" />
          <p className="mt-4 max-w-xl" style={{ color: 'rgba(232,232,232,0.5)', fontSize: '0.95rem', fontFamily: "'Inter', sans-serif" }}>
            Have a project in mind, or just want to chat? I'm always open to interesting conversations and collaboration.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Contact details */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:w-1/2 flex flex-col gap-5"
          >
            {/* Contact cards */}
            {contactItems.map(({ icon, label, value, href, action, actionLabel }) => (
              <div
                key={label}
                className="glass-card p-5 flex items-center gap-4"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-sm"
                  style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.25)', color: '#D4A843' }}
                >
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs mb-0.5" style={{ color: 'rgba(212,168,67,0.6)', fontFamily: "'JetBrains Mono', monospace" }}>
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium"
                      style={{ color: '#f0f0f0', textDecoration: 'none', fontFamily: "'Inter', sans-serif" }}
                      onMouseEnter={e => e.currentTarget.style.color = '#D4A843'}
                      onMouseLeave={e => e.currentTarget.style.color = '#f0f0f0'}
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium" style={{ color: '#f0f0f0', fontFamily: "'Inter', sans-serif" }}>
                      {value}
                    </span>
                  )}
                </div>
                {action && (
                  <motion.button
                    onClick={action}
                    className="flex-shrink-0 flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all"
                    style={{
                      background: copied ? 'rgba(34,197,94,0.12)' : 'rgba(212,168,67,0.1)',
                      border: copied ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(212,168,67,0.25)',
                      color: copied ? '#22c55e' : '#D4A843',
                      fontFamily: "'Inter', sans-serif",
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
              <div className="text-xs mb-4" style={{ color: 'rgba(212,168,67,0.6)', fontFamily: "'JetBrains Mono', monospace" }}>
                Socials
              </div>
              <div className="flex gap-3 flex-wrap">
                {socials.map(({ icon, label, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(232,232,232,0.65)',
                      textDecoration: 'none',
                      fontFamily: "'Inter', sans-serif",
                    }}
                    whileHover={{
                      scale: 1.04,
                      borderColor: color,
                      color: color,
                    }}
                    whileTap={{ scale: 0.97 }}
                    aria-label={label}
                  >
                    <span style={{ fontSize: '0.9rem' }}>{icon}</span>
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: CTA / pitch card */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:w-1/2"
          >
            <div className="terminal-card h-full flex flex-col justify-between">
              <div className="terminal-header flex items-center justify-between px-4 py-2.5">
                <div className="terminal-dots">
                  <span className="terminal-dot red" />
                  <span className="terminal-dot yellow" />
                  <span className="terminal-dot green" />
                </div>
                <span className="text-[10px] text-gold-dim">collaboration.sh</span>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between bg-transparent">
                <div>
                  <div
                    className="text-4xl mb-5"
                    style={{ lineHeight: 1 }}
                  >
                    👋
                  </div>
                  <h3 className="font-bold text-xl mb-3" style={{ color: '#f0f0f0', fontFamily: "'Inter', sans-serif" }}>
                    Open to Collabs & Contracts
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(232,232,232,0.55)', fontFamily: "'Inter', sans-serif" }}>
                    Whether you need a <strong style={{ color: '#D4A843' }}>fullstack engineer</strong>, want to build a 
                    <strong style={{ color: '#D4A843' }}> complex AI automation workflow</strong>, need a 
                    <strong style={{ color: '#D4A843' }}> technical co-founder</strong>, or just want to talk shop — 
                    I'm listening. I take on select contracts where I can genuinely add value and push the needle.
                  </p>

                  <div className="space-y-2.5 mb-7">
                    {[
                      'Fullstack Web & Mobile Development',
                      'AI Automation & LLM Integration',
                      'Complex Workflow Engineering',
                      'SaaS Architecture & Consulting',
                      'Social Media & Growth Strategy',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <span style={{ color: '#D4A843', fontFamily: "'JetBrains Mono', monospace", fontWeight: 'bold', fontSize: '0.85rem' }}>$</span>
                        <span style={{ fontSize: '0.85rem', color: 'rgba(232,232,232,0.65)', fontFamily: "'Inter', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="mailto:adegboyetommy@gmail.com"
                    className="btn-gold text-sm"
                    style={{ padding: '0.6rem 1.3rem', textDecoration: 'none', display: 'inline-block' }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Send an Email
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/adegboye-tommy-125098254"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost text-sm"
                    style={{ padding: '0.6rem 1.3rem', textDecoration: 'none', display: 'inline-block' }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    LinkedIn ↗
                  </motion.a>
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