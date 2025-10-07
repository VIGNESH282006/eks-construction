import React from 'react';
import { motion } from 'framer-motion';
import '../styles/InteriorServices.css';

import kitchenHeader from '../assets/images/kitchen-icon.jpg';
import wardrobeHeader from '../assets/images/wardrobe-icon.jpg';
import bedroomHeader from '../assets/images/bedroom-icon.jpg';
import livingHeader from '../assets/images/livingroom-icon.jpg';
import ceilingHeader from '../assets/images/ceiling-icon.jpg';
import tvHeader from '../assets/images/tv-icon.jpg';
import officeHeader from '../assets/images/office-icon.jpg';
import automationHeader from '../assets/images/automation-icon.jpg';

const InteriorServices = () => {
  const services = [
    {
      headerImage: kitchenHeader,
      title: 'Modular Kitchens',
      description:
        'Custom-designed kitchens that combine style with functionality. Smart storage solutions and premium finishes.',
      features: ['Custom Cabinets', 'Smart Storage', 'Premium Appliances', 'Island Designs'],
      color: 'blue'
    },
    {
      headerImage: wardrobeHeader,
      title: 'Walk-in Wardrobes',
      description:
        'Luxurious wardrobe solutions with organized storage systems and elegant designs.',
      features: ['Custom Layouts', 'LED Lighting', 'Mirror Systems', 'Accessory Organizers'],
      color: 'red'
    },
    {
      headerImage: bedroomHeader,
      title: 'Bedroom Interiors',
      description:
        'Create your perfect sanctuary with personalized bedroom designs for ultimate comfort and style.',
      features: ['Custom Furniture', 'Ambient Lighting', 'Space Optimization', 'Comfort Solutions'],
      color: 'blue'
    },
    {
      headerImage: livingHeader,
      title: 'Living Room Design',
      description:
        'Transform your living space into an elegant area for relaxation and entertainment.',
      features: ['Furniture Selection', 'Entertainment Units', 'Lighting Design', 'Space Planning'],
      color: 'red'
    },
    {
      headerImage: ceilingHeader,
      title: 'False Ceiling & Lighting',
      description:
        'Innovative ceiling designs with integrated lighting solutions to enhance your space.',
      features: ['LED Integration', 'Mood Lighting', 'Acoustic Solutions', 'Energy Efficient'],
      color: 'blue'
    },
    {
      headerImage: tvHeader,
      title: 'Entertainment Units',
      description:
        'Custom TV units and entertainment centers designed for your media needs and aesthetic preferences.',
      features: ['Cable Management', 'Storage Solutions', 'Modern Designs', 'Size Customization'],
      color: 'red'
    },
    {
      headerImage: officeHeader,
      title: 'Office Interiors',
      description:
        'Productive workspace designs that inspire creativity and enhance work efficiency.',
      features: ['Ergonomic Design', 'Storage Solutions', 'Meeting Rooms', 'Reception Areas'],
      color: 'blue'
    },
    {
      headerImage: automationHeader,
      title: 'Home Automation',
      description:
        'Smart home solutions that integrate technology seamlessly with your interior design.',
      features: ['Smart Lighting', 'Climate Control', 'Security Systems', 'Voice Controls'],
      color: 'red'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className="interior-services-section">
      <div className="interior-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Interior Design Services</h2>
          <p>From concept to completion, we offer comprehensive interior design solutions.</p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              className={`service-card ${svc.color}`}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="service-header">
                <img src={svc.headerImage} alt={svc.title} />
                <div className="header-overlay" />
                <h3>{svc.title}</h3>
              </div>

              <div className="service-body">
                <p className="service-description">{svc.description}</p>
                <div className="service-features">
                  {svc.features.map((feat, i) => (
                    <span key={i} className={`feature-badge ${svc.color}`}>
                      {feat}
                    </span>
                  ))}
                </div>
                <motion.button
                  className={`service-btn ${svc.color}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InteriorServices;
