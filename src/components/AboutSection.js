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
            <h2><span className="highlight">Our Story</span></h2>
            <p>
              <span style={{ color: 'blue' }}>e</span><span style={{ color: 'red' }}>k</span><span style={{ color: 'blue' }}>s</span> <span style={{ color: 'blue' }}>construction</span> was founded to help people build spaces to live, work and make memories in. eks Construction offers services tailored to every minute aspect of a construction project. If flexible and innovative designs paired with premium quality and durability happen to be your perquisites, then you need not look beyond eks Construction.
            </p>
            <p>
              With a team of highly skilled architects, engineers, project managers and construction workers, we ensure that every project is executed with precision and care. From the initial design phase to the final touches, we work closely with our clients to bring their vision to life.
            </p>


          </div>

          <div className="about-visual">
            <img
              src={about}
              alt="About eks Construction"
              className="about-image"
            />
          </div>
        </motion.div>

        {/* Vision and Mission boxes remain at the bottom */}
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
        {/* Our Success Section - Now positioned under Our Story */}
        <h2><span className="highlight1">Our Success</span></h2>
        <div className="our-success-grid">
          <div className="success-box blue-top">
            <h4>120+ Standard Quality Checks</h4>
            <p>Every project is meticulously crafted and passes through rigorous multi-stage inspections,ensuring exceptional structural integrity and a flawless finish.</p>
          </div>
          <div className="success-box red-top">
            <h4>Construction on Your Budget</h4>
            <p>We design customized solutions perfectly aligned with your financial goals,ensuring complete transparency, honest pricing, and absolutely no hidden costs.</p>
          </div>
          <div className="success-box blue-top">
            <h4>No Hidden Charges</h4>
            <p>We offer detailed cost breakdowns and transparent policies,ensuring you have a clear understanding of every expense and decision throughout the process.</p>
          </div>
          <div className="success-box red-top">
            <h4>Stress Free Construction</h4>
            <p>Flawless execution, committed support, and timely proactive updates,guarantee a smooth, stress-free experience for your project from start to finish.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
