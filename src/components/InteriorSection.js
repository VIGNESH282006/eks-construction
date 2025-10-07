import React from 'react';
import { motion } from 'framer-motion';
import '../styles/InteriorSection.css';

// Import your images from assets
import targetIcon from '../assets/images/target-icon.png'; // for Personalized Approach
import trophyIcon from '../assets/images/trophy-icon.png'; // for Premium Quality
import lightningIcon from '../assets/images/lightning-icon.png'; // for Smart Solutions
import handshakeIcon from '../assets/images/handshake-icon.png'; // for End-to-End Service
import designVisual from '../assets/images/Philosophy.png';


const InteriorSection = () => {
  const whyChooseUs = [
    {
      icon: targetIcon,
      title: 'Personalized Approach',
      description: 'Every design is tailored to your unique style, needs, and lifestyle. No cookie-cutter solutions here.',
      color: 'blue',
      alt: 'Target icon representing personalized approach'
    },
    {
      icon: trophyIcon,
      title: 'Premium Quality',
      description: 'We use only the finest materials and work with skilled craftsmen to ensure exceptional results.',
      color: 'red',
      alt: 'Trophy icon representing premium quality'
    },
    {
      icon: lightningIcon,
      title: 'Smart Solutions',
      description: 'Innovative design solutions that maximize space utility while maintaining aesthetic appeal.',
      color: 'blue',
      alt: 'Lightning icon representing smart solutions'
    },
    {
      icon: handshakeIcon,
      title: 'End-to-End Service',
      description: 'From concept design to final installation, we handle everything so you can relax and enjoy the process.',
      color: 'red',
      alt: 'Handshake icon representing end-to-end service'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="interior-about-section">
      <div className="interior-container">
        {/* About Interior Design */}
        <motion.div
          className="interior-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose eks Construction for Interior Design?</h2>
          <p className="intro-text">
            Your home is more than just a space—it's a reflection of who you are. At eks Construction,
            we understand that great interior design goes beyond beautiful aesthetics. It's about creating
            spaces that enhance your daily life, boost your mood, and tell your unique story.
          </p>
          <div className="interior-stats">
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">Interior Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Design Awards</span>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="why-choose-interior"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3>What Sets Us Apart</h3>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className={`why-choose-card ${item.color}`}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="why-choose-icon-img"
                />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Philosophy */}
        <motion.div
          className="design-philosophy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h3>Our Design Philosophy</h3>
              <p>
                At eks Construction, we believe that exceptional interior design is born from the perfect
                balance of beauty and functionality. We don't just follow trends—we create timeless spaces
                that evolve with you and your lifestyle.
              </p>
              <ul className="philosophy-points">
                <li><strong>→  </strong><strong>Form Follows Function:</strong> Beautiful designs for your daily life</li>
                <li><strong>→  </strong><strong>Sustainable Choices:</strong> Eco-friendly energy-efficient solutions</li>
                <li><strong>→  </strong><strong>Personal Expression:</strong> Your personality reflected in every design </li>
                <li><strong>→  </strong><strong>Timeless Appeal:</strong> Designs that remain beautiful for years to come</li>
              </ul>
            </div>

            {/* Replace the circle with your full image */}
            <div className="philosophy-visual">
              <img
                src={designVisual}
                alt="Design Philosophy Visual"
                className="philosophy-image"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteriorSection;
