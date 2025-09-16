// headline.jsx
/* eslint-disable react/prop-types */

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Headline = ({ title, subtitle }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="text-center mx-auto md:w-2/3 my-8 font-mono"
    >
      <h2 className="text-3xl text-white font-bold tracking-wide mb-4">{title}</h2>
      <div className="w-20 h-0.5 bg-cyan mx-auto rounded-full mb-4"></div>
      <p className="text-gray-300 text-sm leading-6 md:w-3/4 text-center mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default Headline;