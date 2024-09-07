/* eslint-disable react/no-unescaped-entities */

import Headline from '../shared/Headline';
import skills from "../skills"

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
    return (
        <div className='max-w-7xl mx-auto my-14 md:py-8 px-7' id='about'>
            <div>
            <Headline title={"ABOUT ME"} subtitle={"Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"}/>
            </div>

            {/* About content */}
            <div className='flex flex-col md:flex-row items-start justify-start'>
                {/* left side */}
                <motion.div 
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className='md:w-1/2 my-8'>
                    <h4 className='text-2xl font-bold mb-8'>Get to know me!</h4>
                    <div className='md:w-10/12 text-lg text-[#fff] mb-8'>
                    <p className='mb-5'>I'm a <strong>Fullstack Web Developer</strong> building standard interactive Web Applications with Professional User-Interface Customization and Proper Backend handling. Check out some of my work in the <strong>Projects</strong> section.</p>

                    <p className='mb-5'>I excel in designing and maintaining responsive websites that offer a smooth user experience, My expertise lies in crafting dynamic. Feel free to Connect or Follow me on my <a href="https://www.linkedin.com/in/adegboye-tommy-125098254" className='text-secondary font-bold underline'>Linkedin</a> and expect the best possible outcome on project you task me on </p>

                    <p className='mb-5'>I'm also a team player who thrives in collaborating with cross-functional teams to produce outstanding web application. I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.</p>
                    </div>

                    {/* <button className='btn py-4 px-14'>Contact</button> */}
                </motion.div>

                {/* right side */}
                <motion.div 
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}

                className='md:w-1/2 my-8'>
                    <h4 className='text-2xl font-bold mb-8'>My Skills</h4>
                    <div className='flex flex-wrap gap-3 md:w-10/12'>
                        {skills.map( skill => <p key={skill.id} className='bg-[#45a29e] text-white py-2 px-4 rounded'>{skill.title}</p>)}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;