import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import HomeSection from '../components/HomeSection';
import ContactSection from '../components/ContactSection';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

      <HeroSection />
      <HomeSection />
      <ContactSection />
      <ContactForm />
    </motion.div>
  );
};

export default HomePage;
