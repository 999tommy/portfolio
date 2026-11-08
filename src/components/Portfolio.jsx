import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowDown, FaArrowRight, FaArrowUpRightFromSquare, FaGithub, FaLinkedinIn, FaPhone } from 'react-icons/fa6'

const projects = [
  { number: '01', name: 'RideMyWork', kind: 'Shared-journey platform', summary: 'A Lagos carpooling platform that helps people join trips already happening, share journey costs and make informed choices through clear trip and profile details.', stack: ['Mobility', 'Route matching', 'Trust & safety', 'Recurring commutes'], href: 'https://ridemywork.vercel.app', visual: 'project-visual--ride' },
  { number: '02', name: 'Qriblo', kind: 'AI business assistant', summary: 'A professional brand page paired with a virtual assistant that answers customer questions and captures order or booking requests across the web and WhatsApp.', stack: ['AI assistant', 'Brand websites', 'WhatsApp', 'Orders & bookings'], href: 'https://qriblo.com', visual: 'project-visual--qriblo' },
  { number: '03', name: 'Axist', kind: 'Web application', summary: 'A full-stack product with real-time messaging, subscription workflows and practical automation features.', stack: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS'], href: 'https://axist.app', visual: 'project-visual--axist' },
  { number: '04', name: 'NaijaBiz', kind: 'Business directory', summary: 'A directory that helps Nigerian businesses establish an online presence through searchable listings and storefront pages.', stack: ['Next.js', 'Supabase', 'PostgreSQL', 'Multi-tenancy'], href: 'https://naijabiz.org', visual: 'project-visual--naijabiz' },
  { number: '05', name: 'Robotics simulation', kind: 'Independent study', summary: 'A self-directed robotics project exploring robot simulation and programming through online environments.', stack: ['C++', 'Python', 'ROS', 'OpenCV', 'MoveIt'], visual: 'project-visual--robotics' },
]

const experience = [
  { period: 'Oct 2026 — Present', role: 'IT Engineer Intern', company: 'Bank of Industry', location: 'Lagos, Nigeria', bullets: ['Support staff with day-to-day hardware, software, account access and connectivity issues.', 'Help install and configure workstations and applications, document support requests, and escalate issues when needed.'] },
  { period: 'Jan 2026 — Mar 2026', role: 'Backend Engineer', company: 'Handyman (Startup)', bullets: ['Designed relational database schemas and improved SQL queries for core application endpoints.', 'Built REST APIs with input validation and consistent contracts for client applications.'] },
  { period: '2025', role: 'Full-Stack Developer', company: 'Drop Innovation Ltd', bullets: ['Reworked internal tools and engineering workflows to improve the development process.', 'Contributed to feature releases and backend transaction handling for enterprise customers.'] },
  { period: 'Sep 2023 — Jan 2024', role: 'Junior Developer', company: 'Resavation', bullets: ['Improved search and lookup features for a property marketplace.', 'Built responsive interface components for consistent use across devices.'] },
]

const skills = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL'] },
  { title: 'Web engineering', items: ['React', 'Next.js', 'Node.js', 'Express', 'REST APIs', 'WebSockets'] },
  { title: 'AI and automation', items: ['LLM integrations', 'AI workflows', 'n8n', 'API integrations'] },
  { title: 'Data and delivery', items: ['PostgreSQL', 'Supabase', 'MongoDB', 'Docker', 'Git', 'CI/CD'] },
  { title: 'Robotics focus', items: ['C++', 'Python', 'ROS', 'OpenCV', 'MoveIt', 'Robot simulation'] },
]

const certifications = ['MIT xPRO · Robotics Essentials', 'AWS · Solutions Architect', 'AltSchool Africa · Frontend Engineering', 'NRRT · Fullstack Engineering']
const navItems = [['Work', '#work'], ['About', '#about'], ['Robotics', '#robotics'], ['Experience', '#experience']]

function ArrowLink({ href, children, className = '' }) {
  return <a className={`arrow-link ${className}`} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{children}<FaArrowUpRightFromSquare aria-hidden="true" /></a>
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="site-header">
    <a className="brand" href="#home" aria-label="Tommy Adegboye, home"><span className="brand-mark">TA</span><span>Tommy Adegboye</span></a>
    <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
    <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Main navigation">
      {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a><a className="nav-resume" href="/cv.pdf" target="_blank" rel="noreferrer">Resume <FaArrowUpRightFromSquare aria-hidden="true" /></a>
    </nav>
  </header>
}

function Hero() {
  return <section className="hero section-wrap" id="home">
    <div className="hero-copy">
      <motion.p className="eyebrow" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Software engineer · Robotics</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.05 }}>I build web products<br />and intelligent <em>systems.</em></motion.h1>
      <motion.p className="hero-intro" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>I’m Tommy, a software engineer in Lagos. I build full-stack applications, backend services, AI-powered tools and workflow automations, working across JavaScript, TypeScript, Python and C++. I’m also developing my robotics practice through simulation and independent study.</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.23 }}><a className="button button--solid" href="#work">Explore my work <FaArrowRight aria-hidden="true" /></a><a className="button button--text" href="#contact">Get in touch</a></motion.div>
      <motion.div className="availability" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}><span className="availability-dot" /> Open to work and engineering opportunities</motion.div>
    </div>
    <motion.aside className="hero-panel" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} aria-label="Engineering areas">
      <div className="hero-panel-top"><span>ENGINEERING SCOPE</span><i /></div>
      <div className="hero-panel-title">From first sketch<br />to <em>working system.</em></div>
      <div className="hero-capabilities">
        <div><span>01</span><strong>Web applications</strong><small>Interfaces · APIs · databases</small></div>
        <div><span>02</span><strong>AI & automation</strong><small>Useful systems · connected workflows</small></div>
        <div><span>03</span><strong>Robotics</strong><small>Simulation · continuous learning</small></div>
      </div>
      <div className="hero-panel-bottom"><span>JS · TS · PY · C++</span><span>LAGOS, NG</span></div>
    </motion.aside>
    <a className="scroll-cue" href="#work"><span>Scroll to explore</span><FaArrowDown aria-hidden="true" /></a>
  </section>
}

function Projects() {
  return <section className="section-wrap section-block" id="work">
    <div className="section-heading"><p className="eyebrow">Selected work <span>01 — 05</span></p><div className="heading-row"><h2>Built to be useful.</h2><p>Products and engineering work across mobility, business tools, web applications, automation and robotics.</p></div></div>
    <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}>
      <div className={`project-visual ${project.visual}`} aria-hidden="true"><span className="project-number">{project.number}</span>
        {project.number === '01' && <div className="visual-route"><div className="route-label">LEKKI <span>→</span> VICTORIA ISLAND</div><div className="route-line"><i /><b /><i /></div><div className="route-meta"><span>Existing journey</span><span>Shared by choice</span></div></div>}
        {project.number === '02' && <div className="visual-chat"><div className="chat-heading"><span className="chat-mark">Q</span><span>Brand assistant <i>ONLINE</i></span></div><div className="chat-bubble">Can I place an order?</div><div className="chat-reply">Yes. What would you like?</div><div className="chat-input">Ask about products or services <b>↗</b></div></div>}
        {project.number === '03' && <div className="visual-window"><div className="visual-window-bar"><i /><i /><i /></div><div className="visual-lines"><b /><b /><b /></div><div className="visual-blocks"><i /><i /><i /></div></div>}
        {project.number === '04' && <div className="visual-map"><span>NG</span><i /><i /><i /><i /></div>}
        {project.number === '05' && <div className="visual-robot"><div className="robot-head" /><div className="robot-body" /><div className="robot-arm robot-arm--left" /><div className="robot-arm robot-arm--right" /><div className="robot-base" /></div>}
        <span className="visual-label">{project.kind}</span>
      </div>
      <div className="project-content"><div className="project-title-row"><div><p className="project-kind">{project.kind}</p><h3>{project.name}</h3></div>{project.href && <ArrowLink href={project.href} className="project-arrow">Visit</ArrowLink>}</div><p className="project-summary">{project.summary}</p><ul className="tag-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></div>
    </article>)}</div>
    <p className="section-footnote">More code and experiments on <ArrowLink href="https://github.com/999tommy">GitHub</ArrowLink></p>
  </section>
}

function About() {
  return <section className="section-wrap section-block about-section" id="about">
    <div className="section-heading"><p className="eyebrow">A little about me <span>02</span></p><div className="heading-row"><h2>Curious by nature.<br /><em>Engineer by practice.</em></h2><div className="about-copy"><p>I’m a software engineer who enjoys taking products from an idea to a working, maintainable application. My work spans frontend interfaces, backend services, APIs and databases.</p><p>My academic background is in biochemistry, and I hold a BSc from Federal University Oye-Ekiti. I bring that same interest in careful observation and problem-solving to engineering.</p></div></div></div>
    <div className="skills-layout"><div className="skills-intro"><span className="skills-symbol">{ }</span><h3>Tools I work with</h3><p>A practical toolkit for building, connecting and shipping software.</p></div><div className="skills-groups">{skills.map((group) => <div className="skill-group" key={group.title}><h4>{group.title}</h4><ul className="tag-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div></div>
  </section>
}

function Robotics() {
  return <section className="robotics-band" id="robotics"><div className="section-wrap robotics-inner">
    <div className="robotics-copy"><p className="eyebrow eyebrow--light">Growing area of focus <span>03</span></p><h2>Software meets<br /><em>the physical world.</em></h2><p>I’m building toward robotics engineering through self-directed study, robot simulation and online robot programming. I completed MIT xPRO’s Robotics Essentials certificate and continue to deepen my practical foundation.</p><a className="button button--light" href="#experience">See my background <FaArrowRight aria-hidden="true" /></a></div>
    <div className="robotics-detail"><div className="robotics-orbit" aria-hidden="true"><div className="orbit-ring orbit-ring--one" /><div className="orbit-ring orbit-ring--two" /><div className="orbit-core"><span>ROS</span></div><i className="orbit-point orbit-point--one" /><i className="orbit-point orbit-point--two" /><i className="orbit-point orbit-point--three" /></div><p className="detail-label">Learning and building with</p><div className="robotics-tags"><span>C++</span><span>Python</span><span>ROS</span><span>OpenCV</span><span>MoveIt</span><span>Simulation</span></div></div>
  </div></section>
}

function Experience() {
  return <section className="section-wrap section-block" id="experience">
    <div className="section-heading"><p className="eyebrow">Experience <span>04</span></p><div className="heading-row"><h2>What I’ve been<br /><em>working on.</em></h2><p>Professional experience across IT support, backend development and full-stack product work.</p></div></div>
    <div className="experience-list">{experience.map((item, index) => <article className="experience-item" key={item.company}><div className="experience-index">0{index + 1}</div><div className="experience-main"><div className="experience-top"><div><h3>{item.role}</h3><p>{item.company}{item.location ? ` · ${item.location}` : ''}</p></div><time>{item.period}</time></div><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div>
    <div className="education-row"><div><p className="eyebrow">Education</p><h3>BSc, Biochemistry</h3><p>Federal University Oye-Ekiti · 2025</p></div><div><h3>Diploma, Software Development</h3><p>JIF Technology · 2021</p></div></div>
    <div className="cert-row"><p className="eyebrow">Certificates</p><ul>{certifications.map((cert) => <li key={cert}>{cert}</li>)}</ul></div>
  </section>
}

function Contact() {
  return <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div><p className="eyebrow eyebrow--light">Contact <span>05</span></p><h2>Let’s build<br /><em>something useful.</em></h2><p className="contact-copy">I’m open to software engineering, IT and robotics opportunities. If you’re working on an interesting problem, I’d be glad to hear from you.</p><a className="contact-email" href="mailto:adegboyetommy@gmail.com">adegboyetommy@gmail.com <FaArrowUpRightFromSquare aria-hidden="true" /></a></div><div className="contact-links"><ArrowLink href="https://www.linkedin.com/in/adegboye-tommy-125098254"><FaLinkedinIn aria-hidden="true" /> LinkedIn</ArrowLink><ArrowLink href="https://github.com/999tommy"><FaGithub aria-hidden="true" /> GitHub</ArrowLink><a href="tel:+2349131298538"><FaPhone aria-hidden="true" /> +234 913 129 8538</a></div></div></section>
}

export default function Portfolio() {
  return <><Header /><main><Hero /><Projects /><About /><Robotics /><Experience /><Contact /></main><footer className="site-footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">TA</span><span>Tommy Adegboye</span></a><a href="/cv.docx" download>Download editable CV</a><span>© {new Date().getFullYear()} Tommy Adegboye</span><a href="#home">Back to top ↑</a></footer></>
}
