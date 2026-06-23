// headline.jsx — updated for new design system (kept as fallback, sections use inline headers now)
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Headline = ({ title, subtitle }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="mb-10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <h2
        className="font-bold tracking-tight mb-3"
        style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
          color: '#f0f0f0',
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          width: '40px',
          height: '3px',
          background: 'linear-gradient(90deg, #D4A843, transparent)',
          borderRadius: '2px',
          marginBottom: '12px',
        }}
      />
      {subtitle && (
        <p style={{ color: 'rgba(232,232,232,0.5)', fontSize: '0.9rem', maxWidth: '480px', lineHeight: '1.65' }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default Headline;