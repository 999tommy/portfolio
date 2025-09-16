// home.jsx
/* eslint-disable react/no-unescaped-entities */
import LinkedIn from "../assets/socials/linkedin.svg";
import Twitter from "../assets/socials/twitter.svg";
import Instagram from '../assets/socials/ig.svg'
import GitHub from "../assets/socials/github.svg";
import ResumePDF from "../assets/Adegboye_Ayotomide_Resume.pdf";
import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-scroll';
import ScrollIndicator from './ScrollIndicator';

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Home = () => {
  const handleResumeClick = () => {
    window.open(ResumePDF, '_blank');
  };

  return (
    <motion.div 
      className="terminal-window bg-charcoal text-white min-h-screen flex flex-col px-4 py-8 relative" 
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Terminal title bar */}
      <div className="flex items-center justify-between bg-terminal-black/80 border-b border-cyan/30 px-4 py-2 rounded-lg-t-lg mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-xs font-mono text-cyan">~ user@portfolio:~$</span>
        <div className="w-20"></div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row items-start justify-between">
        {/* Main terminal content */}
        <motion.div 
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2 text-left z-10"
        >
          <div className="font-mono text-cyan mb-4">
            <span className="text-green">$ whoami</span>
            <span className="animate-pulse ml-1">|</span>
          </div>
          <h1 className="text-4xl font-bold tracking-wider mb-4 text-white">
            Tommy Adegboye
          </h1>
          <p className="text-cyan text-lg mb-4">Fullstack Developer</p>
          <TypeAnimation
            className="text-lg leading-relaxed mb-8"
            sequence={[
              "git clone https://github.com/999tommy/portfolio.git",
              1000,
              "cd portfolio && npm install",
              1000,
              "npm run dev",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
          <p className="text-gray-300 text-sm my-4 font-mono leading-relaxed">
            Building scalable web apps with Nextjs, Node.js, and a dash of creativity. 3+ years crafting code that makes a difference with pefromance and user experience in mind.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <Link 
              to="projects" 
              smooth={true} 
              duration={800}
              className="prompt-btn text-cyan hover:text-green border border-cyan px-4 py-2 rounded-lg font-mono transition-colors"
            >
              $ ls projects/
            </Link>
            <motion.button 
              onClick={handleResumeClick}
              className="prompt-btn text-cyan hover:text-green border border-cyan px-4 py-2 rounded-lg font-mono transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              $ cat resume.pdf
            </motion.button>
          </div>
        </motion.div>

        {/* Sidebar status - GitHub-like */}
        <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2 flex justify-end items-start z-10 mt-8 md:mt-0"
        >
          <div className="w-full max-w-md bg-terminal-black/50 border border-cyan/20 rounded-lg p-4 font-mono">
            <div className="text-xs text-gray-400 mb-2">Status</div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Branch:</span>
                <span className="text-green">main</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Commits:</span>
                <span className="text-cyan">42</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Stars:</span>
                <span className="text-yellow">★ 127</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Socials as terminal commands */}
      <div className="mt-8 pt-4 border-t border-cyan/20">
        <div className="font-mono text-green">$ social links</div>
        <div className="flex space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/adegboye-tommy-125098254" className="text-cyan hover:text-green transition-colors"><img src={LinkedIn} alt="LinkedIn" className="w-5 h-5" /></a>
          <a href="https://x.com/999tommy__?t=KEYyQorY2ueKnzR0CBrRg&s=09" className="text-cyan hover:text-green transition-colors"><img src={Twitter} alt="Twitter" className="w-5 h-5" /></a>
          <a href="https://www.instagram.com/syntaxdev__" className="text-cyan hover:text-green transition-colors"><img src={Instagram} alt="Instagram" className="w-5 h-5" /></a>
          <a href="https://github.com/999tommy" className="text-cyan hover:text-green transition-colors"><img src={GitHub} alt="GitHub" className="w-5 h-5" /></a>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </motion.div>
  );
};

export default Home;