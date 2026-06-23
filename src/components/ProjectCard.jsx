// projectcard.jsx — premium dark-gold glass card redesign
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="glass-card flex flex-col h-full overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.15 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ position: 'relative' }}
    >
      {/* Terminal Header */}
      <div className="terminal-header flex items-center justify-between px-3.5 py-2">
        <div className="terminal-dots">
          <span className="terminal-dot red" />
          <span className="terminal-dot yellow" />
          <span className="terminal-dot green" />
        </div>
        <span className="text-[10px] font-mono text-gold-dim">project_0{project.id}.bin</span>
      </div>

      {/* Featured badge */}
      {project.featured && (
        <div
          className="absolute top-3 right-3 z-10 text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: 'rgba(212,168,67,0.18)',
            border: '1px solid rgba(212,168,67,0.4)',
            color: '#D4A843',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          ★ Featured
        </div>
      )}

      <div className="overflow-hidden" style={{ height: '160px', borderRadius: '0', position: 'relative' }}>
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.4 }}
        />
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(8,8,8,0) 30%, rgba(8,8,8,0.75) 100%)',
          }}
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Name */}
        <h3 className="font-bold text-base mb-2" style={{ color: '#f0f0f0', fontFamily: "'Inter', sans-serif" }}>
          {project.name}
        </h3>

        {/* Description */}
        <p className="flex-1 mb-4 leading-relaxed" style={{ fontSize: '0.82rem', color: 'rgba(232,232,232,0.6)', fontFamily: "'Inter', sans-serif" }}>
          {project.description}
        </p>

        {/* Tech tags */}
        {project.technologies && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech, i) => (
              <span key={i} className="skill-chip" style={{ fontSize: '0.68rem', padding: '0.2rem 0.6rem' }}>
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(212,168,67,0.12)' }}>
          <motion.a
            href={project.linkTo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-medium text-sm transition-all"
            style={{ color: '#D4A843', textDecoration: 'none', fontFamily: "'Inter', sans-serif" }}
            whileHover={{ x: 3 }}
            onMouseEnter={e => e.currentTarget.style.color = '#F0C040'}
            onMouseLeave={e => e.currentTarget.style.color = '#D4A843'}
          >
            View Live <FaExternalLinkAlt style={{ fontSize: '0.65rem' }} />
          </motion.a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm transition-all"
              style={{ color: 'rgba(232,232,232,0.4)', textDecoration: 'none', fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={e => e.currentTarget.style.color = '#D4A843'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,232,232,0.4)'}
            >
              <FaGithub style={{ fontSize: '0.9rem' }} /> Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;