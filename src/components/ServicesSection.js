import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/ServicesSection.css';

import residentialBG from '../assets/images/residential-bg.png';
import commercialBG from '../assets/images/commercial-bg.png';
import interiorBG from '../assets/images/interior-bg.png';
import architecturalBG from '../assets/images/Architectural-bg.png';
import projectBG from '../assets/images/project-bg.png';
import renovationBG from '../assets/images/renovation-bg.png';

import civil from '../assets/images/civil.png';
import electrical from '../assets/images/electrical.png';
import mech from '../assets/images/mech.png';

const services = [
  {
    image: residentialBG,
    title: 'Residential Construction',
    description: 'Custom home construction with modern designs and quality materials that bring happiness to your family.',
    features: ['Custom Home Design','Quality Materials','Modern Architecture','Timely Delivery'],
    startingPrice: '₹25 Lakh',
    color: 'blue'
  },
  {
    image: commercialBG,
    title: 'Commercial Buildings',
    description: 'Professional commercial construction for offices and retail spaces with cutting-edge functionality.',
    features: ['Office Buildings','Retail Spaces','Industrial Projects','Modern Facilities'],
    startingPrice: '₹50 Lakh',
    color: 'red'
  },
  {
    image: interiorBG,
    title: 'Interior Design',
    description: 'Complete interior design solutions that reflect your style and personality perfectly.',
    features: ['Space Planning','Color Coordination','Furniture Selection','Lighting Design'],
    startingPrice: '₹2 Lakh',
    color: 'blue'
  },
  {
    image: architecturalBG,
    title: 'Architectural Planning',
    description: 'Comprehensive architectural planning and design services for all building types.',
    features: ['3D Modeling','Structural Design','Planning Permission','Technical Drawings'],
    startingPrice: '₹1 Lakh',
    color: 'red'
  },
  {
    image: projectBG,
    title: 'Project Management',
    description: 'End-to-end project management ensuring timely completion and quality assurance.',
    features: ['Timeline Management','Budget Control','Quality Assurance','Progress Monitoring'],
    pricing: 'Customized Packages',
    color: 'blue'
  },
  {
    image: renovationBG,
    title: 'Renovation & Remodeling',
    description: 'Transform existing spaces into modern, functional areas that enhance your lifestyle.',
    features: ['Kitchen Remodeling','Bathroom Renovation','Home Extensions','Space Optimization'],
    startingPrice: '₹5 Lakh',
    color: 'red'
  }
];

const heroServices = [
  {
    id: 'civil-construction',
    title: 'Civil Construction',
    subtitle: 'Foundation & Structure',
    description:
      'Delivering integrated, technology-driven construction services to meet evolving project requirements. We specialize in foundation engineering, structural development, and comprehensive building solutions.',
    buttonText: 'Explore Civil Construction',
    backgroundImage: civil,
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
    description:
      'Comprehensive electrical solutions with modern technology and safety standards for all building types. From basic wiring to complex power distribution systems.',
    buttonText: 'Explore Electrical Services',
    backgroundImage: electrical,
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
    description:
      'Advanced mechanical systems installation and maintenance for optimal building performance. Complete HVAC solutions and mechanical infrastructure.',
    buttonText: 'Explore Mechanical Works',
    backgroundImage: mech,
    features: [
      'HVAC Systems',
      'Plumbing Works',
      'Ventilation',
      'Equipment Installation'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

const ServicesPage = () => {
  const [activeHeroTab, setActiveHeroTab] = useState(0);

  return (
    <main>
      {/* Main Services Grid */}
      <section className="services-content-section1">
        <div className="services-content-container1">
          <motion.div
            className="services-intro1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>What We Offer</h2>
            <p>Professional construction services tailored to your needs</p>
          </motion.div>
          <motion.div
            className="services-grid1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className={`service-card1 ${service.color}`}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card-image1"
                />
                <div className="service-header1">
                  <h3>{service.title}</h3>
                </div>
                <div className="service-content1">
                  <p className="service-description1">{service.description}</p>
                  <ul className="service-features1">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.4 }}
                      >
                        <span className="feature-check1">✓</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="service-pricing1">
                    <span className="pricing-label1">
                      {service.startingPrice
                        ? `Starting from ${service.startingPrice}`
                        : service.pricing}
                    </span>
                  </div>
                  <motion.button
                    className={`get-quote-btn1 ${service.color}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GET QUOTE
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Offer Hero Section (migrated from HomePage) */}
      <section className="what-we-offer-hero" id="hero-services-bottom">
        <div className="hero-background">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${heroServices[activeHeroTab].backgroundImage})`
            }}
          >
            <div className="background-overlay"></div>
          </div>
        </div>
        <div className="hero-content">
          <h1 className="what-header">What We Offer</h1>
          {/* Navigation Tabs */}
          <nav className="services-nav">
            {heroServices.map((service, index) => (
              <button
                key={service.id}
                className={`nav-tab ${index === activeHeroTab ? 'active' : ''}`}
                onClick={() => setActiveHeroTab(index)}
              >
                <span className="tab-text">{service.title}</span>
              </button>
            ))}
          </nav>
          {/* Content Area */}
          <div className="content-area">
            <div className="content-wrapper">
              <div className="content-text">
                <h1 className="main-title">
                  {heroServices[activeHeroTab].title}
                </h1>
                <div className="subtitle">
                  {heroServices[activeHeroTab].subtitle}
                </div>
                <p className="description">
                  {heroServices[activeHeroTab].description}
                </p>
                <button className="explore-btn">
                  {heroServices[activeHeroTab].buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
