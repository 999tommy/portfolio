/* eslint-disable react/no-unescaped-entities */
import LinkedIn from "../assets/socials/linkedin.svg";
import Twitter from "../assets/socials/twitter.svg";
import Instagram from '../assets/socials/ig.svg'
import GitHub from "../assets/socials/github.svg";
import Tommy from "../assets/Tommy Resume.pdf"
import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-scroll';

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Home = () => {


  const pdfUrl = '../assets/Tommy Resume.pdf';

  const openPDF = (pdfUrl) =>  {
    const pdfWindow = window.open(pdfUrl, '_blank');
    pdfWindow.focus();
  }

  const handleClick = () => {
    openPDF(pdfUrl);
  };

  return (
    <div className="hero my-8 md:py-8 px-7 relative" id="home">
      {/* hero info */}
      <div className="h-screen flex items-center justify-center">
        <motion.div 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center md:w-1/2">
          <h1 className="text-[#66fcf1] text-5xl font-mono font-bold tracking-wider mb-8">
            HEY, I'M TOMMY
          </h1>
          <TypeAnimation
            className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            sequence={[
              // Same substring at the start will only be typed once, initially
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
          {/* hero info */}
          <p className="text-[#c5c6c7] text-xl my-8 font-semibold">
            A MERN Fullstack-Stack Software Engineer with 4+ years of experience that builds creative and innovative Websites
            and Web Applications that leads to the success of the overall
            product.
          </p>
         
         <div>
         <Link to="projects" smooth={true} className="btn py-4 px-16 cursor-pointer rounded-lg m-4">PROJECTS</Link>
        <Link to="" smooth={true} onclick={handleClick} className="btn py-4 px-16 cursor-pointer rounded-lg ">View CV</Link>
         
         </div>


        </motion.div>
      </div>
      {/* hero socials */}
      <div className="bg-[#45a29e] w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block">
        <div className="my-1">
          <a
            href="https://www.linkedin.com/in/adegboye-tommy-125098254"
            className="p-3 hover:bg-[#66fcf1] block rounded transition-all duration-500"
          >
            <img src={LinkedIn} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="#"
            className="p-3 hover:bg-[#66fcf1] block rounded transition-all duration-500"
          >
            <img src={Twitter} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="#"
            className="p-3 hover:bg-[#66fcf1] block rounded transition-all duration-500"
          >
            <img src={Instagram} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="https://github.com/999tommy"
            className="p-3 hover:bg-[#66fcf1] block rounded transition-all duration-500"
          >
            <img src={GitHub} alt="" className="w-10 h-10" />
          </a>
        </div>
      </div>

 
    </div>
  );
};

export default Home;
