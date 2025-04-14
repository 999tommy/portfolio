/* eslint-disable react/no-unescaped-entities */
import LinkedIn from "../assets/socials/linkedin.svg";
import Twitter from "../assets/socials/twitter.svg";
import Instagram from '../assets/socials/ig.svg'
import GitHub from "../assets/socials/github.svg";
import Tommy from "../assets/Tomide Resume.pdf"
import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-scroll';
import Model3D from './3DModel';
import ScrollIndicator from './ScrollIndicator';

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Home = () => {


  const pdfUrl = '../assets/Tomide Resume.pdf';

  const openPDF = (pdfUrl) =>  {
    const pdfWindow = window.open(pdfUrl, '_blank');
    pdfWindow.focus();
  }

  const handleClick = () => {
    openPDF(pdfUrl);
  };

  return (
    <motion.div 
      className="hero px-7 relative min-h-screen flex items-center justify-center" 
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left column - Text content */}
        <motion.div 
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2 text-center md:text-left z-10 mb-10 md:mb-0"
        >
          <h1 className="text-accent text-5xl font-mono font-bold tracking-wider mb-6">
            HEY, I'M TOMMY
          </h1>
          <TypeAnimation
            className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-highlight-purple to-highlight-pink"
            sequence={[
              "Designing the future already",
              1000,
              "Designing for the Online Presence.",
              1000,
              "We bring ideas to life.",
              1000,
              "We Create, You Conquer.",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          <p className="text-text-secondary text-xl my-8 font-semibold leading-relaxed">
            A MERN Fullstack-Stack Software Engineer with 4+ years of experience that builds creative and innovative Websites
            and Web Applications that leads to the success of the overall product.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link 
              to="projects" 
              smooth={true} 
              duration={800}
              className="btn py-4 px-12 cursor-pointer rounded-lg bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-white font-bold shadow-lg transform hover:scale-105 transition-all"
            >
              PROJECTS
            </Link>
            <motion.button 
              onClick={handleClick}
              className="py-4 px-12 cursor-pointer rounded-lg border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              RESUME
            </motion.button>
          </div>
        </motion.div>

        {/* Right column - 3D Model */}
        <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2 flex justify-center items-center z-10"
        >
          <div className="w-full max-w-[500px] h-[400px] animate-float">
            <Model3D />
          </div>
        </motion.div>
      </div>

      {/* Socials sidebar */}
      <motion.div 
        className="bg-[#38bdf8] backdrop-blur-md rounded-r-3xl py-3 px-2 fixed left-0 top-1/3 hidden md:block z-20"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
      >
        <div className="my-2">
          <a
            href="https://www.linkedin.com/in/adegboye-tommy-125098254"
            className="p-3 text-white hover:bg-accent/20 block rounded transition-all duration-500"
            target="_blank" 
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>
        <div className="my-2">
          <a
            href="#"
            className="p-3 text-white hover:bg-accent/20 block rounded transition-all duration-500"
          >
            <img src={Twitter} alt="Twitter" className="w-8 h-8" />
          </a>
        </div>
        <div className="my-2">
          <a
            href="#"
            className="p-3 text-white hover:bg-accent/20 block rounded transition-all duration-500"
          >
            <img src={Instagram} alt="Instagram" className="w-8 h-8" />
          </a>
        </div>
        <div className="my-2">
          <a
            href="https://github.com/999tommy"
            className="p-3 text-white hover:bg-accent/20 block rounded transition-all duration-500"
            target="_blank" 
            rel="noreferrer"
          >
            <img src={GitHub} alt="GitHub" className="w-8 h-8" />
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </motion.div>
  );
};

export default Home;
