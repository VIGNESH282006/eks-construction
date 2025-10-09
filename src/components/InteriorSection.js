// src/components/InteriorSection.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/InteriorSection.css';

import genie1 from '../assets/images/target-icon.png';
import genie2 from '../assets/images/target-icon2.png';
import trophy1 from '../assets/images/trophy-icon.png';
import trophy2 from '../assets/images/trophy-icon2.png';
import lightning1 from '../assets/images/lightning-icon.png';
import lightning2 from '../assets/images/lightning-icon2.png';
import handshake1 from '../assets/images/handshake-icon.png';
import handshake2 from '../assets/images/handshake-icon2.png';
import designVisual from '../assets/images/Philosophy.png';

const whyChooseUs = [
  {
    iconStatic: genie1,
    iconHover: genie2,
    title: 'Personalized Approach',
    description:
      'Every design is tailored to your unique style, needs, and lifestyle. No cookie-cutter solutions here.',
    color: 'blue',
    alt: 'Genie icon'
  },
  {
    iconStatic: trophy1,
    iconHover: trophy2,
    title: 'Premium Quality',
    description:
      'We use only the finest materials and work with skilled craftsmen to ensure exceptional results.',
    color: 'red',
    alt: 'Trophy icon'
  },
  {
    iconStatic: lightning1,
    iconHover: lightning2,
    title: 'Smart Solutions',
    description:
      'Innovative design solutions that maximize space utility while maintaining aesthetic appeal.',
    color: 'blue',
    alt: 'Lightning icon'
  },
  {
    iconStatic: handshake1,
    iconHover: handshake2,
    title: 'End-to-End Service',
    description:
      'From concept design to final installation, we handle everything so you can relax and enjoy the process.',
    color: 'red',
    alt: 'Handshake icon'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const InteriorSection = () => {
  const statRefs = useRef([]);

  useEffect(() => {
    const counters = statRefs.current;
    const speed = 80; // smaller = faster

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            let count = 0;

            const updateCount = () => {
              const increment = target / speed;
              if (count < target) {
                count += increment;
                counter.textContent = Math.ceil(count);
                requestAnimationFrame(updateCount);
              } else {
                counter.textContent = target + (counter.dataset.suffix || '');
              }
            };

            updateCount();
            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }, []);

  return (
    <section className="interior-about-section">
      <div className="interior-container">
        <motion.div
          className="interior-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Why Choose{' '}
            <span style={{ color: 'blue' }}>e</span>
            <span style={{ color: 'red' }}>k</span>
            <span style={{ color: 'blue' }}>s</span>{' '}
            <span style={{ color: 'blue' }}>construction</span> for Interior
            Design?
          </h2>
          <p className="intro-text">
            Your home is more than just a space—it's a reflection of who you
            are. At eks Construction, we understand that great interior design
            goes beyond beautiful aesthetics. It's about creating spaces that
            enhance your daily life, boost your mood, and tell your unique
            story.
          </p>

          {/* ✅ Animated Stats Section */}
          <div className="interior-stats">
            <div className="stat-item">
              <span
                className="stat-number"
                data-target="200"
                data-suffix="+"
                ref={(el) => (statRefs.current[0] = el)}
              >
                0
              </span>
              <span className="stat-label">Interior Projects</span>
            </div>
            <div className="stat-item">
              <span
                className="stat-number"
                data-target="15"
                data-suffix="+"
                ref={(el) => (statRefs.current[1] = el)}
              >
                0
              </span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span
                className="stat-number"
                data-target="100"
                data-suffix="%"
                ref={(el) => (statRefs.current[2] = el)}
              >
                0
              </span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span
                className="stat-number"
                data-target="50"
                data-suffix="+"
                ref={(el) => (statRefs.current[3] = el)}
              >
                0
              </span>
              <span className="stat-label">Design Awards</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="why-choose-interior"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3>What Sets Us Apart</h3>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                className={`why-choose-card ${item.color}`}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="icon-wrapper">
                  <img
                    src={item.iconStatic}
                    alt={item.alt}
                    className="icon-static"
                  />
                  <img
                    src={item.iconHover}
                    alt={item.alt}
                    className="icon-hover"
                  />
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
                At eks Construction, we believe that exceptional interior design
                is born from the perfect balance of beauty and functionality. We
                don't just follow trends—we create timeless spaces that evolve
                with you and your lifestyle.
              </p>
              <ul className="philosophy-points">
                <li>
                  <strong>→</strong>{' '}
                  <strong>Form Follows Function:</strong> Beautiful designs for
                  your daily life
                </li>
                <li>
                  <strong>→</strong>{' '}
                  <strong>Sustainable Choices:</strong> Eco-friendly
                  energy-efficient solutions
                </li>
                <li>
                  <strong>→</strong>{' '}
                  <strong>Personal Expression:</strong> Your personality
                  reflected in every design
                </li>
                <li>
                  <strong>→</strong>{' '}
                  <strong>Timeless Appeal:</strong> Designs that remain beautiful
                  for years to come
                </li>
              </ul>
            </div>
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
