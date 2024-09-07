import React from 'react'
import Headline from '../shared/Headline';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Experience = () => {
  return (
    <div className='max-w-7xl mx-auto my-14 md:py-8 px-7' id='experience'>
      <div>
        <Headline title={"MY EXPERIENCES"} subtitle={"Some of the establishment i have worked for"}/>
      </div>
      <motion.div 
       variants={fadeIn("right", 0.3)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.3 }}>
         Experience
       </motion.div>
     
    </div>
  )
}

export default Experience