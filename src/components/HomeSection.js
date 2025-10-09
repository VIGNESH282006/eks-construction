import React, { useState } from 'react';
import '../styles/HomePage.css';
import eksGroupImage from '../assets/images/eks-group.jpg';
import civil from '../assets/images/civil.png';
import electrical from '../assets/images/electrical.png';
import mech from '../assets/images/mech.png';
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import expertiseIcon from '../assets/images/expertise-icon.png';
import expertiseAnim from '../assets/images/expertise-anim.jpg';
import integrityIcon from '../assets/images/integrity-icon.png';
import integrityAnim from '../assets/images/integrity-anim.jpg';
import deliveryIcon from '../assets/images/delivery-icon.png';
import deliveryAnim from '../assets/images/delivery-anim.jpg';

import StatsSection from '../components/StatsSection';

function ValueCard({ staticSrc, animatedSrc, title, children, borderColor }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="value-card"
      style={{ borderTop: `4px solid ${borderColor}` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
    >
      <img
        src={hovered ? animatedSrc : staticSrc}
        alt={title}
        className="value-icon-img"
      />
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
}

const HomePage = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'civil-construction',
      title: 'Civil Construction',
      subtitle: 'Foundation & Structure',
      description: 'Delivering integrated, technology-driven construction services to meet evolving project requirements. We specialize in foundation engineering, structural development, and comprehensive building solutions.',
      buttonText: 'Explore civil construction',
      backgroundImage: civil, // Using your existing image
      features: [
        'Foundation Engineering',
        'Structural Development',
        'Site Preparation',
        'Quality Assurance'
      ]
    },
    {
      id: 'electrical-installation',
      title: 'Electrical Installation',
      subtitle: 'Power & Systems',
      description: 'Comprehensive electrical solutions with modern technology and safety standards for all building types. From basic wiring to complex power distribution systems.',
      buttonText: 'Explore electrical services',
      backgroundImage: electrical, // Using your existing image
      features: [
        'Wiring & Circuits',
        'Power Distribution',
        'Safety Systems',
        'Smart Controls'
      ]
    },
    {
      id: 'mechanical-works',
      title: 'Interior',
      subtitle: 'HVAC & Infrastructure',
      description: 'Advanced mechanical systems installation and maintenance for optimal building performance. Complete HVAC solutions and mechanical infrastructure.',
      buttonText: 'Explore mechanical works',
      backgroundImage: mech, // Using your existing image
      features: [
        'HVAC Systems',
        'Plumbing Works',
        'Ventilation',
        'Equipment Installation'
      ]
    }
  ];

  const handleServiceChange = (index) => {
    setActiveService(index);
  };

  return (
    <main>
      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h2 className='who-header'>Who We Are</h2>
              <p>
                <span style={{ color: 'blue' }}>e</span><span style={{ color: 'red' }}>k</span><span style={{ color: 'blue' }}>s</span> <span style={{ color: 'blue' }}>construction</span>  is one of the best Building Contractor in Chennai. We have a rich experience in executing civil, electrical, mechanical, and waterworks for multiple industries like steel, power, metals, etc. We have wealthy involvement in executing respectful, electrical, mechanical, and waterworks for different businesses like steel, control, metals, etc.
              </p>
              <p>
                We have an in-house plans and building teams that utilize advanced construction techniques to execute complex ventures in diverse areas. Our highly efficient approach to projects, combined with our commitment to quality and timely completion, has made us the best construction company and electrical construction company in Chennai.
              </p>
            </div>
            <div className="about-visual">
              <img
                src={eksGroupImage}
                alt="eks Construction Group"
                className="about-image"
                onError={(e) => {
                  console.log('Image failed to load:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}

      <StatsSection />
      <div className="section-divider"></div>
      {/* Values Section */}
      

      
      <section className="values-section">
        <h3>Our Core Values</h3>
        <div className="values-grid">
          <ValueCard
            staticSrc={expertiseIcon}
            animatedSrc={expertiseAnim}
            title="Expertise"
            borderColor="#4169E1"
          >
            Our experienced team applies industry-leading knowledge and skills to deliver top-quality results.
          </ValueCard>

          <ValueCard
            staticSrc={integrityIcon}
            animatedSrc={integrityAnim}
            title="Integrity"
            borderColor="#FF4444"
          >
            Honesty and transparency in every project, building trust and long-term client relationships.
          </ValueCard>

          <ValueCard
            staticSrc={deliveryIcon}
            animatedSrc={deliveryAnim}
            title="Timely Delivery"
            borderColor="#4169E1"
          >
            Reliable timelines and commitment—your project is always on schedule without compromising quality.
          </ValueCard>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>

        <AboutSection />
      </motion.div>
      <WhyChooseUs />
    </main>
  );
};

export default HomePage;
