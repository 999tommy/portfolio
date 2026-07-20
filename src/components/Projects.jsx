// projects.jsx — improved grid layout, editorial section design
import projects from "../projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const Projects = () => {
  const featured = projects.filter(p => p.featured);
  const rest      = projects.filter(p => !p.featured);

  return (
    <section className="relative" id="projects">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <span className="section-eyebrow">03 — Projects</span>
          <h2 className="section-title mt-2">What I've Built</h2>
          <div className="section-divider" />
          <p
            className="mt-4 max-w-xl glass px-6 py-2.5 rounded-xl inline-block"
            style={{ color: 'rgba(242,242,242,0.6)', fontSize: '0.88rem', fontFamily: "'Inter', sans-serif" }}
          >
            A curated selection of products, platforms, and engineering projects — spanning AI automation,
            blockchain, and SaaS applications. Each built with care, shipped to production.
          </p>
        </motion.div>

        {/* Featured projects — larger 2-column */}
        {featured.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="section-eyebrow" style={{ opacity: 0.55 }}>Featured</span>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(232,130,10,0.25), transparent)' }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {featured.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Other projects — 3-column grid */}
        {rest.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="section-eyebrow" style={{ opacity: 0.55 }}>Other Work</span>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(232,130,10,0.25), transparent)' }} />
            </div>
            <div className="projects-grid">
              {rest.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={featured.length + index} />
              ))}
            </div>
          </div>
        )}

        {/* GitHub CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-5 text-sm" style={{ color: 'rgba(242,242,242,0.35)', fontFamily: "'JetBrains Mono', monospace" }}>
            // More experiments, open-source contributions, and weekend projects
          </p>
          <a href="https://github.com/999tommy" target="_blank" rel="noreferrer">
            <motion.button
              className="btn-ghost"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              View GitHub Profile ↗
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;