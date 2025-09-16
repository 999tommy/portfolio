// project.tsx
import Headline from "../shared/Headline";
import projects from "../projects";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className='max-w-7xl mx-auto py-20 px-7 relative bg-charcoal text-white' id="projects">
            {/* Terminal prompt for section */}
            <div className="font-mono text-green mb-8 text-center">
              $ ls projects/
            </div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <Headline 
                    title={"$ ls projects/"} 
                    subtitle={"Grid of repos with tech badges, stars, and forks"}
                />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 bg-terminal-black/50 border border-cyan/20 rounded-lg p-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            
            <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <p className="text-gray-300 mb-4 font-mono text-sm">
                    More repos on GitHub.
                </p>
                <a 
                    href="https://github.com/999tommy"
                    target="_blank" 
                    rel="noreferrer" 
                    className="prompt-btn text-cyan hover:text-green border border-cyan px-4 py-2 rounded-lg font-mono transition-colors"
                >
                  $ git clone https://github.com/999tommy
                </a>
            </motion.div>
        </div>
    );
};

export default Projects;