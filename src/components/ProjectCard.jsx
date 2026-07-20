// projectcard.jsx — editorial minimal card with hover reveal
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

// Abstract gradient per project (no images needed)
const gradients = [
  'linear-gradient(135deg, rgba(232,130,10,0.25) 0%, rgba(180,60,10,0.15) 50%, rgba(7,8,15,0.9) 100%)',
  'linear-gradient(135deg, rgba(130,60,232,0.2) 0%, rgba(232,130,10,0.15) 60%, rgba(7,8,15,0.9) 100%)',
  'linear-gradient(135deg, rgba(10,180,232,0.18) 0%, rgba(10,80,180,0.12) 55%, rgba(7,8,15,0.9) 100%)',
  'linear-gradient(135deg, rgba(34,197,94,0.18) 0%, rgba(10,130,60,0.12) 55%, rgba(7,8,15,0.9) 100%)',
  'linear-gradient(135deg, rgba(232,60,120,0.18) 0%, rgba(180,10,80,0.12) 55%, rgba(7,8,15,0.9) 100%)',
  'linear-gradient(135deg, rgba(232,200,10,0.2) 0%, rgba(150,100,10,0.12) 55%, rgba(7,8,15,0.9) 100%)',
];

const ProjectCard = ({ project, index = 0 }) => {
  const [hovered, setHovered] = useState(false);
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      className="glass-card flex flex-col h-full overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      viewport={{ once: true, amount: 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ position: 'relative', cursor: 'default' }}
    >
      {/* Abstract gradient header */}
      <div
        className="relative overflow-hidden"
        style={{ height: '140px', borderRadius: '18px 18px 0 0', background: gradient }}
      >
        {/* Project number */}
        <div
          className="absolute top-4 left-4"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem',
            color: 'rgba(232,130,10,0.55)',
            letterSpacing: '0.1em',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-4 right-4 text-[10px] font-semibold px-2 py-0.5 rounded-full"
            style={{
              background: 'rgba(232,130,10,0.18)',
              border: '1px solid rgba(232,130,10,0.4)',
              color: 'var(--amber)',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            ★ Featured
          </div>
        )}

        {/* Animated grid overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(232,130,10,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(232,130,10,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
          animate={{ opacity: hovered ? 0.8 : 0.3 }}
          transition={{ duration: 0.3 }}
        />

        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 40%, rgba(7,8,15,0.7) 100%)',
          }}
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="font-bold text-base mb-2"
          style={{ color: 'var(--text-primary)', fontFamily: "'Syne', sans-serif", letterSpacing: '-0.01em' }}
        >
          {project.name}
        </h3>

        <p
          className="flex-1 mb-4 leading-relaxed"
          style={{ fontSize: '0.82rem', color: 'rgba(242,242,242,0.58)', fontFamily: "'Inter', sans-serif" }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        {project.technologies && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech, i) => (
              <span key={i} className="skill-chip" style={{ fontSize: '0.66rem', padding: '0.2rem 0.58rem' }}>
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: '1px solid rgba(232,130,10,0.1)' }}
        >
          <motion.a
            href={project.linkTo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-semibold text-sm transition-all"
            style={{ color: 'var(--amber)', textDecoration: 'none', fontFamily: "'Inter', sans-serif" }}
            whileHover={{ x: 3, color: 'var(--amber-light)' }}
          >
            View Live <FaExternalLinkAlt style={{ fontSize: '0.62rem' }} />
          </motion.a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm transition-all"
              style={{ color: 'rgba(242,242,242,0.38)', textDecoration: 'none', fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(242,242,242,0.38)'}
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