import Headline from "../shared/Headline";
import projects from "../projects";


// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <div className='max-w-7xl mx-auto md:py-8 px-7' id="projects">
            <Headline title={'PERSONAL PROJECTS'} subtitle={'Here you will find some of the personal and clients projects that I created with each project containing its own case study'}/>

            <div>
                {projects.map((project) => <div key={project.id}>
                    <motion.div 
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.2 }}
                    className="projects items-center gap-5 my-20">
                        <div className="rounded-3xl">
                        <img src={project.image} alt="" className="" />
                        </div>
                        <div className="md:w-10/12 text-center md:text-left px-2">
                        <h4 className="text-2xl font-bold mb-6">{project.name}</h4>
                        <p className="text-lg text-[#fff] leading-6 mb-6">{project.description}</p>
                        <Link to={project.linkTo}><button className="btn py-3 px-7">View Project</button></Link>
                        </div>
                    </motion.div>
                </div>)}
            </div>
        </div>
    );
};

export default Projects;