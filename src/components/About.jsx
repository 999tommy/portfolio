// about.jsx — premium dark-gold glassmorphism redesign
/* eslint-disable react/no-unescaped-entities */
import skills from "../skills";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: false });

  const skillVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } }
  };
  const skillItemVariants = {
    hidden: { y: 14, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } }
  };

  const highlights = [
    { icon: "🎓", title: "BSc Biochemistry", sub: "University-level sciences foundation" },
    { icon: "📜", title: "NRRT Certified", sub: "Software Engineering Certification" },
    { icon: "👑", title: "CEO & Founder", sub: "Axist Technologies · axist.app" },
    { icon: "🚀", title: "10K+ Users", sub: "2 products built solo" },
  ];

  return (
    <section className='relative' id='about' ref={ref}>
      <div className="section-container">
        {/* Section header */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14"
        >
          <span className="section-label">01 — About</span>
          <h2 className="section-title mt-2">Who I Am</h2>
          <div className="section-divider" />
          <p className="mt-4 max-w-xl" style={{ color: 'rgba(232,232,232,0.5)', fontSize: '0.95rem', fontFamily: "'Inter', sans-serif" }}>
            Builder. Entrepreneur. Engineer. I've turned complex ideas into real products people love.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Bio */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:w-1/2 flex flex-col gap-6"
          >
            {/* Bio card */}
            <div className="glass-card p-7">
              <h3 className="font-bold text-lg mb-4" style={{ color: '#D4A843', fontFamily: "'Inter', sans-serif" }}>
                My Story
              </h3>
              <div className="space-y-4" style={{ fontSize: '0.9rem', color: 'rgba(232,232,232,0.72)', lineHeight: '1.8', fontFamily: "'Inter', sans-serif" }}>
                <p>
                  I'm <strong style={{ color: '#f0f0f0' }}>Tommy Adegboye</strong>, CEO & Founder of{' '}
                  <a href="https://axist.app" target="_blank" rel="noreferrer" style={{ color: '#D4A843' }}>Axist Technologies</a> — a software startup 
                  I built from the ground up into a platform serving <strong style={{ color: '#f0f0f0' }}>10,000+ combined users</strong>, entirely solo. 
                  I specialize in fullstack engineering, AI automation, and building products at scale.
                </p>
                <p>
                  Academically, I hold a <strong style={{ color: '#f0f0f0' }}>BSc in Biochemistry</strong> and an{' '}
                  <strong style={{ color: '#f0f0f0' }}>NRRT Certificate in Software Engineering</strong> — a unique scientific 
                  background that gives me a distinct edge in precision thinking, problem decomposition, and data-driven engineering.
                </p>
                <p>
                  I've interned at <strong style={{ color: '#f0f0f0' }}>Vitabiotics Nigeria Ltd.</strong>, a top pharmaceutical company, 
                  delivering research-grade quality standards in everything I produce. Beyond Axist, I run{' '}
                  <a href="https://naijabiz.org" target="_blank" rel="noreferrer" style={{ color: '#D4A843' }}>NaijaBiz.org</a> — 
                  a business directory for the Nigerian market — and have delivered multiple high-complexity contracts for clients worldwide.
                </p>
                <p>
                  I build with <strong style={{ color: '#f0f0f0' }}>Next.js, Node.js, TypeScript, React Native</strong>, and deeply integrated 
                  <strong style={{ color: '#f0f0f0' }}> AI/LLM pipelines</strong> using LangChain and OpenAI. If there's a system to optimize 
                  or a workflow to automate, I'm the person for it.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <a href="https://axist.app" target="_blank" rel="noreferrer">
                  <motion.button className="btn-gold text-sm" style={{ padding: '0.5rem 1.1rem' }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    Visit Axist ↗
                  </motion.button>
                </a>
                <a href="https://naijabiz.org" target="_blank" rel="noreferrer">
                  <motion.button className="btn-ghost text-sm" style={{ padding: '0.5rem 1.1rem' }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
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
                  className="glass-card p-4 flex flex-col gap-1"
                  whileHover={{ scale: 1.02 }}
                >
                  <span style={{ fontSize: '1.3rem' }}>{icon}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f0f0f0', fontFamily: "'Inter', sans-serif" }}>{title}</span>
                  <span style={{ fontSize: '0.72rem', color: 'rgba(212,168,67,0.7)', fontFamily: "'Inter', sans-serif" }}>{sub}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:w-1/2 flex flex-col gap-6"
          >
            <div className="glass-card p-7">
              <h3 className="font-bold text-lg mb-5" style={{ color: '#D4A843', fontFamily: "'Inter', sans-serif" }}>
                Tech Stack
              </h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={skillVariants}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                {skills.map((skill, i) => (
                  <motion.div
                    key={`${skill.id}-${i}`}
                    variants={skillItemVariants}
                    className="skill-chip"
                  >
                    {skill.title}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Current focus card */}
            <div className="glass-card p-6" style={{ border: '1px solid rgba(212,168,67,0.25)' }}>
              <div className="flex items-center gap-2 mb-3">
                <span style={{ color: '#D4A843', fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace" }}>
                  ⚡ CURRENT FOCUS
                </span>
              </div>
              <h4 className="font-bold mb-3" style={{ color: '#f0f0f0', fontSize: '0.95rem', fontFamily: "'Inter', sans-serif" }}>
                AI Automation & Product Growth
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'rgba(232,232,232,0.6)', lineHeight: '1.7', fontFamily: "'Inter', sans-serif" }}>
                Currently scaling Axist — building AI-powered automation systems, LLM-integrated product pipelines, 
                and complex backend workflows for creator brands and enterprise clients. 
                Obsessed with shipping things that actually move the needle.
              </p>
              <div className="hr-gold mt-4" />
              <div className="flex flex-wrap gap-2 mt-3">
                {['AI Engineering', 'LangChain', 'Next.js', 'OpenAI API', 'n8n'].map(t => (
                  <span key={t} className="skill-chip" style={{ fontSize: '0.7rem' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Social marketing note */}
            <div className="glass-card p-4 flex items-start gap-3">
              <span style={{ fontSize: '1.1rem', marginTop: '2px' }}>📣</span>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#f0f0f0', fontFamily: "'Inter', sans-serif" }}>Social Media Marketing</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(232,232,232,0.55)', marginTop: '2px', fontFamily: "'Inter', sans-serif" }}>
                  Hands-on growth experience — managed brand strategy, content, and audience building for Axist's digital presence.
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