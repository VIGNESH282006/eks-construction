import React from 'react';
import { motion } from 'framer-motion';
import CareersSection from '../components/CareersSection';
import '../styles/CareersPage.css';

const CareersPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="careers-page"
    >
      {/* Page Hero */}
      <motion.section 
        className="careers-hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="careers-hero-container">
          <h1>Join Our Team</h1>
          <p>We call ourselves "Dreamers and Doers" for a reason</p>
        </div>
      </motion.section>

      {/* Careers Section */}
      <CareersSection />

    </motion.div>
  );
};

export default CareersPage;
