import React, { useRef, useState } from "react";
import Headline from "../shared/Headline";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { fadeIn } from "../variants";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const ContactSphere = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Sphere args={[1, 100, 200]} scale={2.2}>
        <MeshDistortMaterial 
          color="#0284c7"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Canvas>
  );
};

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // For 3D tilt effect on the form
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 200;
    const yPct = (mouseY / height - 0.5) * 200;
    x.set(xPct);
    y.set(yPct);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate email sending with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      e.target.reset();
      
      // Reset submission state after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  return (
    <div className="relative py-20 px-7" id="contact">
      {/* Gradient background effects */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-highlight-purple/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-highlight-pink/10 rounded-full blur-3xl -z-10"></div>
      
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <Headline
          title={"CONTACT ME"}
          subtitle={
            "Let's work together! Fill out the form below with your project details, and I'll get back to you soon."
          }
        />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-16">
          {/* Contact form column */}
          <motion.div 
            className="lg:w-3/5 w-full"
            style={{ perspective: 2000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              x.set(0);
              y.set(0);
            }}
          >
            <motion.div
              style={{ 
                rotateX, 
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="bg-primary-light/90 backdrop-blur-md border border-accent/20 rounded-xl p-8 shadow-xl hover:shadow-accent/30 transition-all duration-300"
            >
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center"
                >
                  <div className="w-20 h-20 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-accent mb-3">Message Sent!</h3>
                  <p className="text-text-DEFAULT">Thank you for reaching out. I'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-accent font-medium block">Name</label>
                    <input
                      type="text"
                      name="fullname"
                      id="name"
                      required
                      placeholder="Your name"
                      className="w-full p-4 bg-primary border border-accent/30 rounded-lg text-text-DEFAULT focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-accent font-medium block">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full p-4 bg-primary border border-accent/30 rounded-lg text-text-DEFAULT focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-accent font-medium block">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows="6"
                      placeholder="Tell me about your project..."
                      className="w-full p-4 bg-primary border border-accent/30 rounded-lg text-text-DEFAULT focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg text-white font-bold transition-all flex items-center justify-center ${isSubmitting ? 'bg-accent/70' : 'bg-accent hover:bg-accent-light'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : "Send Message"}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
          
          {/* Right column - 3D element */}
          <motion.div 
            variants={fadeIn("left", 0.5)}
            className="lg:w-2/5 h-80 relative hidden lg:block"
          >
            <div className="absolute inset-0 z-10">
              <ContactSphere />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-6 bg-primary-light/30 backdrop-blur-sm rounded-xl">
              <h3 className="text-2xl font-bold text-accent mb-3">Let's Connect</h3>
              <p className="text-text-DEFAULT mb-6 text-white">Ready to transform your ideas into reality?</p>
              <div className="space-y-3">
                <p className="flex items-center justify-center gap-2 text-white text-text-DEFAULT">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  tommy@example.com
                </p>
                <p className="flex items-center justify-center gap-2 text-white text-text-DEFAULT">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (234) 567-8901
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
