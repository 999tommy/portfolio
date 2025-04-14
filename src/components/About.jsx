/* eslint-disable react/no-unescaped-entities */

import Headline from '../shared/Headline';
import skills from "../skills"
import { useInView } from 'react-intersection-observer';

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: false
    });

    const skillVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const skillItemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 50
            }
        }
    };

    return (
        <div className='max-w-7xl mx-auto py-20 px-7 relative' id='about' ref={ref}>
            {/* Gradient background effects */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-highlight-purple/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-highlight-blue/10 rounded-full blur-3xl -z-10"></div>
            
            <div>
                <Headline 
                    title={"ABOUT ME"} 
                    className="text-white"
                    subtitle={"Here you will find more information about me, what I do, and my current skills in programming and technology"}
                />
            </div>

            {/* About content */}
            <div className='flex flex-col md:flex-row items-start justify-between gap-10'>
                {/* left side */}
                <motion.div 
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className='md:w-1/2 my-8'
                >
                    <h4 className='text-2xl font-bold mb-8 text-text-DEFAULT text-white relative inline-block'>
                        Get to know me!
                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
                    </h4>
                    <div className='text-lg text-text-secondary space-y-6'>
                        <p className='leading-relaxed text-white'>
                            I'm a <span className="text-accent font-semibold">Fullstack Web Developer</span> building standard interactive Web Applications with Professional User-Interface Customization and Proper Backend handling. Check out some of my work in the <span className="text-accent font-semibold">Projects</span> section.
                        </p>

                        <p className='leading-relaxed'>
                            I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic and engaging interfaces. Feel free to Connect or Follow me on my <a href="https://www.linkedin.com/in/adegboye-tommy-125098254" className='text-accent font-bold hover:underline transition-all'>Linkedin</a> and expect the best possible outcome on projects you task me with.
                        </p>

                        <p className='leading-relaxed'>
                            I'm also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications. I'm open to <span className="text-accent font-semibold">Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, don't hesitate to <span className="text-accent font-semibold">contact</span> me.
                        </p>
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='mt-8 py-3 px-8 bg-gradient-to-r from-accent-dark to-accent text-white rounded-lg font-bold shadow-lg hover:shadow-accent/20 transition-all'
                    >
                        Contact Me
                    </motion.button>
                </motion.div>

                {/* right side */}
                <motion.div 
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className='md:w-1/2 my-8'
                >
                    <h4 className='text-2xl text-white font-bold mb-8 text-text-DEFAULT relative inline-block'>
                        My Skills
                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
                    </h4>
                    
                    <motion.div 
                        className='flex flex-wrap gap-3'
                        variants={skillVariants}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                    >
                        {skills.map(skill => (
                            <motion.div 
                                key={skill.id} 
                                variants={skillItemVariants}
                                className='bg-primary-light backdrop-blur-sm border border-accent/20 text-text-DEFAULT text-white py-3 px-5 rounded-lg shadow-lg hover:shadow-accent/20 hover:-translate-y-1 transition-all'
                            >
                                {skill.title}
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    <div className="mt-12 p-6 bg-primary-light/50 backdrop-blur-md rounded-xl border border-accent/10 shadow-xl">
                        <h5 className="text-xl font-bold mb-4 text-accent">Learning Journey</h5>
                        <p className="text-text-secondary">
                            I'm constantly expanding my skillset and staying updated with the latest technologies. Currently exploring advanced 3D web development and AR/VR applications.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;