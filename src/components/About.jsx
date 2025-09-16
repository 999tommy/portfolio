// about.jsx
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
        <div className='max-w-7xl mx-auto py-20 px-7 relative bg-charcoal text-white' id='about' ref={ref}>
            {/* Terminal prompt for section */}
            <div className="font-mono text-green mb-8 text-center">
              $ cat about.txt
            </div>
            
            <div>
                <Headline 
                    title={"$ cat about.txt"} 
                    className="text-white"
                    subtitle={"Short bio, skills, and my developer story"}
                />
            </div>

            {/* About content as terminal output */}
            <div className='flex flex-col md:flex-row items-start justify-between gap-10 bg-terminal-black/50 border border-cyan/20 rounded-lg p-6 font-mono'>
                {/* left side - Bio */}
                <motion.div 
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className='md:w-1/2 my-8'
                >
                    <h4 className='text-xl font-bold mb-4 text-cyan relative inline-block'>
                        Developer Story
                    </h4>
                    <div className='text-sm text-gray-200 space-y-4 leading-relaxed'>
                        <p>
                            <span className="text-green">user@machine:</span> I'm a Fullstack Developer with 3+ years hacking away at interactive web apps. From pixel-perfect UIs to robust backends, I build stuff that scales and delights.
                        </p>

                        <p>
                            <span className="text-green">git commit -m "Passionate about open source":</span> Check my repos for the latest. Always shipping, always learning. Connect on LinkedIn for collabs.
                        </p>

                        <p>
                            <span className="text-green">echo "Open to opportunities":</span> If you've got a project that needs code magic, hit me up. Let's build something epic.
                        </p>
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='mt-6 px-4 py-2 bg-cyan text-black rounded-lg font-bold hover:bg-green transition-all'
                    >
                      $ echo "contact me"
                    </motion.button>
                </motion.div>

                {/* right side - Skills as badges */}
                <motion.div 
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className='md:w-1/2 my-8'
                >
                    <h4 className='text-xl text-cyan font-bold mb-4 relative inline-block'>
                        Tech Stack
                    </h4>
                    
                    <motion.div 
                        className='flex flex-wrap gap-2'
                        variants={skillVariants}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                    >
                        {skills.map(skill => (
                            <motion.div 
                                key={skill.id} 
                                variants={skillItemVariants}
                                className='bg-terminal-black px-3 py-1 rounded-lg border border-cyan/30 text-cyan text-xs hover:bg-cyan hover:text-black transition-all font-mono'
                            >
                                {skill.title}
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    <div className="mt-6 p-4 bg-terminal-black/50 border border-cyan/20 rounded-lg">
                        <h5 className="text-sm font-bold mb-2 text-green">Current Focus</h5>
                        <p className="text-xs text-gray-300">
                          Building the next big thing with React, Next.js, Node.js, and exploring AI integration. Always learning new tools and frameworks to stay ahead in the fast-evolving dev world.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;