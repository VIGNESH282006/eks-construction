import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';
import '../styles/ServicesPage.css';

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Hero */}
      <motion.section 
        className="services-hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="services-hero-container">
          <h1>Our Construction Services</h1>
          <p>Comprehensive construction solutions to make your dreams reality</p>
        </div>
      </motion.section>

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Form */}
    </motion.div>
  );
};

export default ServicesPage;
