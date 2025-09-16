// projectcard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div 
      className="bg-terminal-black border border-cyan/20 rounded-lg p-4 font-mono hover:border-cyan transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      {/* Repo header like GitHub */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-cyan text-sm font-bold truncate">{project.name}</h3>
        <div className="flex space-x-2 text-xs text-gray-400">
          <div className="flex items-center gap-1"><FaStar className="text-yellow text-xs" /> 42</div>
          <div className="flex items-center gap-1"><FaCodeBranch className="text-cyan text-xs" /> 12</div>
        </div>
      </div>
      
      <p className="text-gray-300 text-xs mb-3 leading-relaxed">{project.description}</p>
      
      {/* Tech badges */}
      <div className="flex flex-wrap gap-1 mb-4">
        {project.technologies ? project.technologies.map((tech, index) => (
          <span 
            key={index} 
            className="text-xs bg-cyan/10 text-cyan px-2 py-1 rounded-lg border border-cyan/30"
          >
            {tech}
          </span>
        )) : null}
      </div>
      
      {/* Action links as commands */}
      <div className="flex justify-between items-center pt-2 border-t border-cyan/10">
        <motion.a 
          href={project.linkTo}
          target="_blank" 
          rel="noreferrer" 
          className="text-xs text-cyan hover:text-green transition-colors flex items-center gap-1"
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.97 }}
        >
          $ open {project.linkTo.split('/').pop()} <FaExternalLinkAlt className="text-xs" />
        </motion.a>
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noreferrer" 
            className="text-xs text-cyan hover:text-green transition-colors flex items-center gap-1"
          >
            <FaGithub className="text-xs" /> $ git clone
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;