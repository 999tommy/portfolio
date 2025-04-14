import Headline from "../shared/Headline";
import projects from "../projects";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className='max-w-7xl mx-auto py-20 px-7 relative' id="projects">
            {/* Gradient background effects */}
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-highlight-pink/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/4 right-10 w-72 h-72 bg-highlight-blue/10 rounded-full blur-3xl -z-10"></div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <Headline 
                    title={"FEATURED PROJECTS"} 
                    subtitle={"Explore some of my recent work showcasing creativity, technical skills, and problem-solving abilities"}
                />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            
            <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <p className="text-text-secondary mb-6">
                    Want to see more of my work? Check out my GitHub repositories for additional projects.
                </p>
                <a 
                    href="https://github.com/999tommy"
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-block py-3 px-8 bg-primary-light border border-accent/20 rounded-lg text-accent hover:bg-accent/10 transition-all"
                >
                    View All Projects
                </a>
            </motion.div>
        </div>
    );
};

export default Projects;