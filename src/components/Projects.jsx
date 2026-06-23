// projects.jsx — premium dark-gold projects section
import projects from "../projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Projects = () => {
  return (
    <section className="relative" id="projects">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14"
        >
          <span className="section-label">03 — Projects</span>
          <h2 className="section-title mt-2">What I've Built</h2>
          <div className="section-divider" />
          <p className="mt-4 max-w-xl" style={{ color: 'rgba(232,232,232,0.5)', fontSize: '0.95rem', fontFamily: "'Inter', sans-serif" }}>
            A selection of products, platforms, and experiments — from AI-powered SaaS to blockchain apps, each built with intention.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-5 text-sm" style={{ color: 'rgba(232,232,232,0.4)', fontFamily: "'Inter', sans-serif" }}>
            More projects and open-source contributions on GitHub
          </p>
          <a
            href="https://github.com/999tommy"
            target="_blank"
            rel="noreferrer"
          >
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