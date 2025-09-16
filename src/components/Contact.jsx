// contact.jsx
import React, { useState } from "react";
import Headline from "../shared/Headline";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaEnvelope, FaPhone, FaCheck, FaCopy } from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('adegboyetommy@gmail.com');
      setCopied(true);
      // Reset the copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  return (
    <div className="relative py-20 px-7 bg-charcoal text-white" id="contact">
      {/* Terminal prompt for section */}
      <div className="font-mono text-green mb-8 text-center">
        $ echo contact.me
      </div>
      
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <Headline
          title={"$ echo contact.me"}
          subtitle={
            "Terminal output with email and phone. No forms, just direct lines."
          }
        />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-16 bg-terminal-black/50 border border-cyan/20 rounded-lg p-6 font-mono">
          {/* Contact info as terminal outputs */}
          <motion.div 
            className="lg:w-full space-y-4"
          >
            <div className="flex items-center gap-2 text-cyan">
              <FaEnvelope className="text-sm" />
              <span className="text-sm">adegboyetommy@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-cyan">
              <FaPhone className="text-sm" />
              <span className="text-sm">+234 913 129 8538</span>
            </div>
            <motion.button
              onClick={copyToClipboard}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-4 py-2 bg-cyan text-black rounded-lg font-bold hover:bg-green transition-all flex items-center gap-2"
              aria-label="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <FaCheck className="text-green-700" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <FaCopy />
                  <span>Copy Email</span>
                </>
              )}
            </motion.button>
          </motion.div>
          
          {/* GitHub issue-style card for quick note */}
          <motion.div 
            variants={fadeIn("left", 0.5)}
            className="lg:w-1/2 p-4 border border-gray-600 rounded-lg bg-terminal-black/30"
          >
            <h3 className="text-cyan text-sm font-bold mb-2"># Open Issue: Let's Collab</h3>
            <p className="text-xs text-gray-300">Drop a line if you have a project in mind.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;