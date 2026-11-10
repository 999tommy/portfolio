import { useState } from 'react'

const projects = [
  {
    number: '01', name: 'RideMyWork', category: 'Mobility / Co-founder & CTO',
    summary: 'A Lagos ride-sharing product built around trips people are already making. I co-founded it and lead the technical work.',
    image: '/projects/ride.webp', alt: 'RideMyWork trip screen showing a journey from Lekki to Victoria Island',
    href: 'https://ridemywork.vercel.app/about', tone: 'blue',
  },
  {
    number: '02', name: 'Qriblo', category: 'AI product / Built solo',
    summary: 'A website and business-specific assistant that helps customers get answers, place orders and make bookings.',
    image: '/projects/qriblo.webp', alt: 'Qriblo website introducing its assistant for business brands',
    href: 'https://qriblo.com', tone: 'lime',
  },
]

const moreWork = [
  { name: 'Axist', description: 'Real-time messaging and subscription workflows.', stack: 'Next.js · Supabase · PostgreSQL', href: 'https://axist.app' },
  { name: 'NaijaBiz', description: 'Business listings and merchant storefronts with multi-tenant routing.', stack: 'Next.js · Supabase · PostgreSQL', note: 'Archived' },
]

const experience = [
  { period: 'Oct 2026 — Now', role: 'IT Engineer Intern', company: 'Bank of Industry · Lagos', points: ['Helping staff with hardware, software, accounts and connectivity.', 'Setting up workstations and applications; recording and escalating support requests.'] },
  { period: 'Jan — Mar 2026', role: 'Backend Engineer', company: 'Handyman', points: ['Designed relational database schemas and improved SQL queries for core endpoints.', 'Built REST APIs with input validation and consistent contracts.'] },
  { period: '2025', role: 'Full-Stack Developer', company: 'Drop Innovation Ltd', points: ['Improved internal tools and engineering workflows.', 'Contributed to product releases and backend transaction handling.'] },
  { period: 'Sep 2023 — Jan 2024', role: 'Junior Developer', company: 'Resavation', points: ['Improved property search and built responsive interface components.'] },
]

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['Work', '#work'], ['What I do', '#practice'], ['Robotics', '#robotics'], ['About', '#about']]
  return <header className="site-header wrap">
    <a className="brand" href="#home" aria-label="Tommy Adegboye home"><span className="brand-mark">TA</span><span>Tommy Adegboye</span></a>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}><i /><i /></button>
    <nav className={open ? 'main-nav main-nav--open' : 'main-nav'} aria-label="Main navigation">
      {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let’s talk <span>↗</span></a>
    </nav>
  </header>
}

function RobotGraphic() {
  return <div className="hero-art" aria-label="Illustration of a small robot arm on a workbench">
    <div className="art-topline"><span>THE WORKSHOP</span><span>01 / 03</span></div>
    <svg className="arm-drawing" viewBox="0 0 500 410" role="img" aria-labelledby="arm-title">
      <title id="arm-title">A hand-drawn robotic arm with a little spark at its gripper</title>
      <path className="arm-shadow" d="M109 330h279" />
      <path className="arm-base" d="M169 316l26-38h110l27 38v17H169z" />
      <path className="arm-detail" d="M186 314h121m-94-28 10 26m66-26-9 26" />
      <path className="arm-lower" d="M239 285l-56-94 30-22 72 86z" />
      <circle className="arm-joint" cx="198" cy="183" r="26" />
      <circle className="arm-pin" cx="198" cy="183" r="7" />
      <path className="arm-upper" d="M214 164l86-72 24 27-88 82z" />
      <circle className="arm-joint arm-joint--small" cx="311" cy="104" r="20" />
      <circle className="arm-pin" cx="311" cy="104" r="6" />
      <path className="arm-wrist" d="M325 91l53-13 10 25-54 15z" />
      <path className="arm-grip" d="M382 81l25-19m-18 44 29 6" />
      <path className="arm-spark" d="M414 48v-13m14 27 11-9m-48 4-10-10" />
      <path className="arm-guide" d="M93 95h63m-31-31v63M374 275h58m-29-29v58" />
      <circle className="arm-guide-dot" cx="427" cy="275" r="4" />
      <text className="arm-text" x="73" y="149">MAKE</text><text className="arm-text" x="355" y="321">TEST</text>
    </svg>
    <div className="art-caption"><span>Curiosity, with moving parts.</span><span>TA / LAGOS</span></div>
    <span className="art-sticker">STILL<br />LEARNING<br /><b>✳</b></span>
  </div>
}

function Hero() {
  return <section className="hero wrap" id="home">
    <div className="hero-copy">
      <p className="eyebrow"><span className="live-dot" /> SOFTWARE ENGINEER <b>·</b> LAGOS, NIGERIA</p>
      <h1>I build useful<br />software. I also<br /><span>teach machines<br />new tricks.</span></h1>
      <p className="hero-summary">I’m Tommy — a full-stack developer drawn to practical AI, workflow automation and the challenge of making software move in the physical world.</p>
      <div className="hero-actions"><a className="button button-primary" href="#work">See what I’ve built <span>↘</span></a><a className="text-action" href="#about">More about me <span>↓</span></a></div>
    </div>
    <RobotGraphic />
    <div className="hero-ribbon"><span>FULL-STACK PRODUCTS</span><b>✳</b><span>AI & AUTOMATION</span><b>✳</b><span>ROBOTICS IN PROGRESS</span><b>✳</b><span>LAGOS, NG</span></div>
  </section>
}

function SectionHeading({ number, eyebrow, title, accent, copy }) {
  return <div className="section-head"><div><p className="eyebrow"><span className="section-number">{number}</span> {eyebrow}</p><h2>{title}<br /><span>{accent}</span></h2></div>{copy && <p className="section-copy">{copy}</p>}</div>
}

function Work() {
  return <section className="work wrap section" id="work">
    <SectionHeading number="01" eyebrow="Selected work" title="Built for" accent="real people." copy="A couple of products that have made it out of my notes and into the world." />
    <div className="project-grid">{projects.map((project) => <article className={`project project--${project.tone}`} key={project.name}>
      <a className="project-screen" href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}><img src={project.image} alt={project.alt} loading="lazy" /><span className="screen-arrow">↗</span><span className="screen-number">PROJECT {project.number}</span></a>
      <div className="project-info"><div className="project-title"><div><span className="project-category">{project.category}</span><h3>{project.name}</h3></div><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>↗</a></div><p>{project.summary}</p></div>
    </article>)}</div>
    <div className="more-work"><div className="more-work-label"><span>ALSO BUILT</span><span>A few more things from the bench</span></div>{moreWork.map((item, i) => <article className="more-row" key={item.name}><span className="more-index">0{i + 3}</span><h3>{item.name}</h3><p>{item.description}</p><span className="more-stack">{item.stack}</span>{item.href ? <a href={item.href} target="_blank" rel="noreferrer" aria-label={`Visit ${item.name}`}>↗</a> : <span className="archived">{item.note}</span>}</article>)}<a className="github-link" href="https://github.com/999tommy" target="_blank" rel="noreferrer">There’s more on GitHub <span>↗</span></a></div>
  </section>
}

function Practice() {
  return <section className="practice section" id="practice"><div className="wrap">
    <SectionHeading number="02" eyebrow="What I like working on" title="Software with" accent="a job to do." copy="I’m interested in the parts of tech that solve an actual problem — and in making them work well together." />
    <div className="practice-list">
      <article className="practice-item"><span className="practice-no">A</span><div><h3>Product engineering</h3><p>Interfaces, APIs, databases and the details between them. I work across the stack to turn an idea into something people can use.</p></div><span className="practice-tools">React · Next.js · Node · PostgreSQL</span><span className="practice-symbol">↗</span></article>
      <article className="practice-item practice-item--ai"><span className="practice-no">B</span><div><h3>AI & automation</h3><p>I build with OpenAI and LangChain, and use n8n and API integrations to connect tools and cut repetitive hand-offs. Qriblo’s customer assistant puts that work into a real product.</p></div><span className="practice-tools">OpenAI · LangChain · n8n · APIs</span><span className="practice-symbol">↗</span></article>
      <article className="practice-item"><span className="practice-no">C</span><div><h3>Robotics</h3><p>I’m building my robotics foundation through simulation and online robot programming, bringing software into contact with sensors, movement and the physical world.</p></div><span className="practice-tools">Python · C++ · ROS · OpenCV · MoveIt</span><span className="practice-symbol">↗</span></article>
    </div>
    <div className="flow-strip"><span className="flow-label">THE GOOD KIND OF SHORTCUT</span><span className="flow-step">A task repeats</span><b>→</b><span className="flow-step flow-step--accent">Connect the tools</span><b>→</b><span className="flow-step">Get time back</span><span className="flow-spark">✳</span></div>
  </div></section>
}

function Robotics() {
  return <section className="robotics" id="robotics"><div className="wrap robotics-inner">
    <div className="robotics-copy"><p className="eyebrow"><span className="section-number">03</span> OUTSIDE THE BROWSER</p><h2>I want to know<br />how software<br /><span>moves things.</span></h2><p>Robotics is the curiosity that keeps pulling me toward the physical world. I’ve built a robot simulation, programmed robots in online environments and completed MIT xPRO’s Robotics Essentials certificate. I’m still learning, and I like being able to show the experiments along the way.</p><div className="robotics-tags"><span>SIMULATION</span><span>ROS</span><span>COMPUTER VISION</span><span>✳</span></div></div>
    <div className="robotics-board" aria-hidden="true"><div className="board-grid" /><svg viewBox="0 0 440 390"><path className="board-path" d="M72 304h282M131 302l42-91 88 5 42-93m0 0 54 22"/><path className="board-arm" d="M155 303l30-108 80 14 39-91 60 18"/><circle className="board-node" cx="185" cy="195" r="18"/><circle className="board-node" cx="304" cy="118" r="16"/><circle className="board-node" cx="364" cy="136" r="11"/><path className="board-jaw" d="M366 127l23-18m-19 28 28 13"/><path className="board-base" d="M119 306l20-30h42l17 30z"/><circle className="board-target" cx="367" cy="62" r="28"/><path className="board-cross" d="M367 26v72m-36-36h72"/><text x="30" y="54">SIM / 001</text><text x="319" y="359">LEARN BY MAKING</text></svg><span className="board-label board-label--one">01 — SENSE</span><span className="board-label board-label--two">02 — MOVE</span><span className="board-index">✳</span></div>
  </div></section>
}

function About() {
  return <section className="about section wrap" id="about">
    <SectionHeading number="04" eyebrow="A little about me" title="A different route" accent="to software." />
    <div className="about-layout"><div className="about-callout"><span className="callout-mark">TA<span>.</span></span><p>Biochemistry first.<br />Then code, products,<br />and a few robots.</p></div><div className="about-copy"><p>I studied Biochemistry at Federal University Oye-Ekiti before moving into software. That background still shapes how I think: get curious, understand the parts, then work out how they fit together.</p><p>These days I build full-stack products, make practical AI features and automate workflows. Robotics is where I’m stretching that same curiosity into a new discipline.</p><div className="stack-list"><p><b>BUILD</b><span>JavaScript · TypeScript · React · Next.js · Node.js · SQL</span></p><p><b>AI & AUTOMATE</b><span>OpenAI · LangChain · n8n · API integrations</span></p><p><b>EXPLORE</b><span>Python · C++ · ROS · OpenCV · MoveIt</span></p><p><b>SHIP</b><span>PostgreSQL · Supabase · MongoDB · Docker · AWS</span></p></div></div></div>
  </section>
}

function Experience() {
  return <section className="experience section"><div className="wrap">
    <SectionHeading number="05" eyebrow="The path so far" title="Learning by" accent="showing up." copy="Places I’ve learned by doing — and the small responsibilities that make the work count." />
    <div className="experience-layout"><div className="experience-list">{experience.map((job, index) => <article className="job" key={`${job.company}-${job.period}`}><span className="job-index">0{index + 1}</span><div className="job-main"><div className="job-heading"><div><h3>{job.role}</h3><span>{job.company}</span></div><time>{job.period}</time></div><ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
      <aside className="education"><span className="education-icon">✳</span><span className="eyebrow">LEARNING & CERTIFICATES</span><h3>Good foundations.<br />Room to keep going.</h3><p><b>BSc Biochemistry</b><br />Federal University Oye-Ekiti · 2025</p><p><b>Diploma in Software Development</b><br />JIF Technology · 2021</p><ul><li>MIT xPRO · Robotics Essentials</li><li>AWS Certified Solutions Architect · Professional</li><li>AltSchool Africa · Frontend Engineering</li><li>NRRRT · Fullstack Engineering</li></ul></aside></div>
  </div></section>
}

function Contact() {
  return <section className="contact" id="contact"><div className="wrap contact-inner"><div><p className="eyebrow"><span className="section-number">06</span> YOUR TURN</p><h2>Have a good<br />problem? <span>Let’s talk.</span></h2><p>I’m open to software, IT and robotics engineering opportunities. Based in Lagos, Nigeria — happy to hear about what you’re building.</p><a className="contact-email" href="mailto:adegboyetommy@gmail.com">adegboyetommy@gmail.com <span>↗</span></a></div><div className="contact-links"><span className="contact-note">OPEN TO<br />GOOD PROBLEMS <b>✳</b></span><a href="tel:+2349131298538">+234 913 129 8538 ↗</a><a href="https://github.com/999tommy" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/adegboye-tommy-125098254" target="_blank" rel="noreferrer">LinkedIn ↗</a><span>Lagos, Nigeria · GMT+1</span></div></div></section>
}

export default function Portfolio() {
  return <><Header /><main><Hero /><Work /><Practice /><Robotics /><About /><Experience /><Contact /></main><footer className="site-footer wrap"><a className="brand" href="#home"><span className="brand-mark">TA</span><span>Tommy Adegboye</span></a><span>Built from curiosity, in Lagos.</span><span>© {new Date().getFullYear()} Tommy Adegboye</span><a href="#home">Back up ↑</a></footer></>
}
