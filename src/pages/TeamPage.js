import React from 'react';
import { motion } from 'framer-motion';
import TeamSection from '../components/TeamSection';
import '../styles/TeamPage.css';

const TeamPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="team-page"
    >
      {/* Page Hero */}
      <motion.section 
        className="team-hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="team-hero-container">
          <h1>Meet Our Expert Team</h1>
          <p>The talented professionals who make your construction dreams come true</p>
        </div>
      </motion.section>

      {/* Team Section */}
      <TeamSection />

    </motion.div>
  );
};

export default TeamPage;
