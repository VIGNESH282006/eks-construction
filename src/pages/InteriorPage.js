import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';   // Import useNavigate
import InteriorSection from '../components/InteriorSection';
import InteriorServices from '../components/InteriorServices';
import InteriorProcess from '../components/InteriorProcess';
import '../styles/InteriorPage.css';

const InteriorPage = () => {
  const navigate = useNavigate();  // Hook to navigate programmatically

  const handleStartDesign = () => {
    navigate('/contact');  // Redirect to ContactPage route
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="interior-page"
    >
      {/* Page Hero */}
      <motion.section 
        className="interior-hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="interior-hero-container">
          <h1>Interior Design Excellence</h1>
          <p>Transform your space into a masterpiece with eks Construction</p>
          <motion.button 
            className="hero-cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartDesign}   /* Added onClick handler */
          >
            Start Your Design Journey
          </motion.button>
        </div>
      </motion.section>

      {/* Interior Section */}
      <InteriorSection />

      {/* Interior Services */}
      <InteriorServices />

      {/* Interior Process */}
      <InteriorProcess />


    </motion.div>
  );
};

export default InteriorPage;
