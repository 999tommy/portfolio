import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div 
      className="bg-primary-light/80 backdrop-blur-md border border-accent/20 rounded-xl overflow-hidden shadow-xl hover:shadow-accent/30 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden group">
        <motion.div
          className="h-64 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
            <div className="p-6 text-text-DEFAULT">
              <h3 className="text-xl font-bold text-accent">{project.name}</h3>
              <p className="text-text-DEFAULT text-white mt-2 line-clamp-2">{project.description}</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute top-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
          animate={hovered ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
        >
          <a 
            href={project.linkTo} 
            target="_blank" 
            rel="noreferrer" 
            className="bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent-light transition-colors"
          >
            <FaExternalLinkAlt />
          </a>
          
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent-light transition-colors"
            >
              <FaGithub />
            </a>
          )}
        </motion.div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-accent mb-2">{project.name}</h3>
        <p className="text-text-DEFAULT text-white mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies ? project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-primary-dark px-3 py-1 rounded-full text-accent"
            >
              {tech}
            </span>
          )) : (
            <>
              <span className="text-xs bg-primary-dark px-3 py-1 rounded-full text-accent">React</span>
              <span className="text-xs bg-primary-dark px-3 py-1 rounded-full text-accent">Tailwind</span>
            </>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <motion.a 
            href={project.linkTo}
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-light transition-colors"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.97 }}
          >
            View Project <FaExternalLinkAlt className="text-sm" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 