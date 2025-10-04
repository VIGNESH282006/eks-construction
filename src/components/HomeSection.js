import React, { useState } from 'react';
import '../styles/HomePage.css';
import eksGroupImage from '../assets/images/eks-group.jpg';
import civil from '../assets/images/civil.png';
import electrical from '../assets/images/electrical.png';
import mech from '../assets/images/mech.png';

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
      title: 'Mechanical Works',
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
              <h2>About Us</h2>
              <p>
                <span className="highlight">Where We Build Your Vision</span>
              </p>
              <p>
                eks construction is one of the best Building Contractor in Chennai. We have a rich experience in executing civil, electrical, mechanical, and waterworks for multiple industries like steel, power, metals, etc. We have wealthy involvement in executing respectful, electrical, mechanical, and waterworks for different businesses like steel, control, metals, etc.
              </p>
              <p>
                We have an in-house plans and building teams that utilize advanced construction techniques to execute complex ventures in diverse areas. Our highly efficient approach to projects, combined with our commitment to quality and timely completion, has made us the best construction company and electrical construction company in Chennai.
              </p>
              <a href="#services" className="learn-more-btn">Learn More</a>
            </div>
            <div className="about-visual">
              <img
                src={eksGroupImage}
                alt="EKS Construction Group"
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
      <section className="stats-section">
        <h1 className='stats-heading'>Our Expertise</h1>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">18+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">200+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">350+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">15+</span>
            <span className="stat-label">Awards & Recognition</span>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h3>Our Core Values</h3>
        <div className="values-grid">
          <div className="value-card">
            <span className="value-icon">🛠️</span>
            <h4>Expertise</h4>
            <p>
              Our experienced team applies industry-leading knowledge and skills to deliver top-quality results.
            </p>
          </div>
          <div className="value-card">
            <span className="value-icon">🤝</span>
            <h4>Integrity</h4>
            <p>
              Honesty and transparency in every project, building trust and long-term relationships with clients.
            </p>
          </div>
          <div className="value-card">
            <span className="value-icon">⏱️</span>
            <h4>Timely Delivery</h4>
            <p>
              Reliable timelines and commitment—your project is always on schedule without compromising quality.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Hero Section */}
      <section className="what-we-offer-hero" id="services">
        <div className="hero-background">
          <div 
            className="background-image" 
            style={{
              backgroundImage: `url(${services[activeService].backgroundImage})`
            }}
          >
            <div className="background-overlay"></div>
          </div>
        </div>

        <div className="hero-content">
          {/* Navigation Tabs */}
          <nav className="services-nav">
            {services.map((service, index) => (
              <button
                key={service.id}
                className={`nav-tab ${index === activeService ? 'active' : ''}`}
                onClick={() => handleServiceChange(index)}
              >
                <div className="tab-icon">
                  {index === 0 && '🏗️'}
                  {index === 1 && '⚡'}
                  {index === 2 && '🔧'}
                </div>
                <span className="tab-text">{service.title}</span>
              </button>
            ))}
          </nav>

          {/* Content Area */}
          <div className="content-area">
            <div className="content-wrapper">
              <div className="content-text">
                <h1 className="main-title">
                  {services[activeService].title}
                </h1>
                <div className="subtitle">
                  {services[activeService].subtitle}
                </div>
                <p className="description">
                  {services[activeService].description}
                </p>
                <button className="explore-btn">
                  {services[activeService].buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
