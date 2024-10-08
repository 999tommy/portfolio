import React, { useRef } from "react";
import Headline from "../shared/Headline";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k8r16q8","template_ig2kbef", form.current, {
        publicKey: 'FAHNG1VGe5hs8ilJf',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="mx-auto mt-8 px-7 contact"
      id="contact"
    >
      <Headline
        title={"CONTACT"}
        subtitle={
          "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
        }
      />

      <div className="md:w-2/3 mx-auto bg-[#45a29e] md:px-16 px-8 py-8 rounded-lg mb-32">
        <form ref={form} onSubmit={sendEmail}  action="">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="fullname"
            id="name"
            placeholder="Enter Your Name"
            className="p-5"
          />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            className="p-5"
          />
          <label htmlFor="message">Message: </label>
          <textarea
            name="message"
            id="message"
            cols="80"
            rows="10"
            placeholder="Enter Your Message"
            className="p-5 mb-8"
          ></textarea>
          <button className="btn px-14 py-4 shadow-sm">Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
