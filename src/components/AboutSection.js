import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AboutSection.css';
import about from '../assets/images/eks-about.png';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-text">
            <h2>📖 <span className="highlight">Our Story</span></h2>

            <p>
              <strong>eks Construction</strong> was founded to help people build spaces to live, work and make memories in. eks Construction offers services tailored to every minute aspect of a construction project. If flexible and innovative designs paired with premium quality and durability happen to be your perquisites, then you need not look beyond eks Construction.
            </p>

            <h2> <span className="highlight">Our Success 🏆</span></h2>
            <div className='success-container'>
              <div className='column'>
                <p>✅ 120+ Standard Quality Checks</p>
                <p>🎨 Creative Design</p>
                <p>💰 Construction on your budget</p>
                <p>⏱️ On time Delivery</p>
                <p>🗓️ Daily Progress Update</p>
              </div>
              <div className='column'>
                <p>🙅 No Hidden Charges</p>
                <p>👍 Stress free Construction</p>
                <p>🔄 End to End Construction</p>
                <p>🚫 No Subcontracts</p>
              </div>
            </div>

            {/* Our Vision and Mission Boxes side by side */}
            
          </div>

          <div className="about-visual">
            <img
              src={about}
              alt="About eks Construction"
              className="about-image"
            />
          </div>
        </motion.div>

<div className="vm-flex-container">
              <div className="Our-Vision vm-box-1">
                <h2>Our Vision</h2>
                <p>
                   eks Construction have designed a holistic system that addresses each of these issues and transform the overall customer experience. We aim to promote a culture of building right and living smart.
                </p>
              </div>
              <div className="Our-Mission vm-box-2">
                <h2>Our Mission</h2>
                <p>
                  eks Construction recognizes that the construction industry is ridden with numerous gaps owing to lack of fair pricing, smart technology, inadequate labour management system.
                </p>
              </div>
            </div>
      </div>
    </section>
  );
};

export default AboutSection; 
