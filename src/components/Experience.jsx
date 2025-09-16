// experience.jsx
import React from 'react'
import Headline from '../shared/Headline';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Experience = () => {
  // Sample commit-like data; replace with actual experiences
  const commits = [
    {
      date: '2023-09-01',
      message: 'Junior Dev @ Resavation - Built scalable Roomate and Property management platform',
      hash: 'a1b2c3d4'
    },
    {
      date: '01-23 to 09-24',
      message: 'Freelance Developer - Delivered 5+ web apps with React & Node',
      hash: 'e5f6g7h8'
    },
    {
      date: '02-25 to 07-25',
      message: 'Senior Dev @ DropInnovation - Contributed to internal tools and APIs, developed a large scale Admin panel',
      hash: 'i9j0k1l2'
    },
    {
      date: 'currently',
      message: 'Senior Lead Dev @ Axist Agency - Building AI-powered SaaS products for creators, brand and businesses',
      hash: 'i9j0k1l2'
    }
  ];

  return (
    <div className='max-w-7xl mx-auto py-20 px-7 bg-charcoal text-white' id='experience'>
      {/* Terminal prompt for section */}
      <div className="font-mono text-green mb-8 text-center">
        $ git log --oneline
      </div>
      
      <Headline title={"$ git log"} subtitle={"Timeline as commit history"}/>
      
      <motion.div 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-terminal-black/50 border border-cyan/20 rounded-lg p-6 font-mono"
      >
        <div className="space-y-4">
          {commits.map((commit, index) => (
            <div key={index} className="flex items-start gap-4 border-l border-cyan/30 pl-4">
              <div className="text-xs text-gray-400 min-w-[120px]">{commit.date}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-cyan text-sm font-bold">{commit.hash.slice(0,7)}</span>
                  <span className="text-green">{commit.message}</span>
                </div>
                <div className="text-xs text-gray-500">+42/-0 files changed</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Experience