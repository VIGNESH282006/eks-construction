import React from 'react';
import '../styles/HomePage.css';
import eksGroupImage from '../assets/images/eks-group.jpg';
import civil from '../assets/images/civil.png';
import electrical from '../assets/images/electrical.png';
import mech from '../assets/images/mech.png'

const HomePage = () => {
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

      {/* What We Offer Section */}
      <section className="what-we-offer-container" id="services">
        <div className="offer-header-section">
          <h2>What We Offer</h2>
          <p className="offer-intro-text">
            <span className="highlight">eks construction</span> provides comprehensive services tailored to your requirements, using the latest technology and skilled professionals to build your dream projects.
          </p>
        </div>
        <div className="offer-grid">
          <div className="offer-item">
            <div className="offer-img-wrapper">
              <img src={civil} alt="Civil Construction" className="offer-img" />
            </div>
            <div className="offer-item-title">Civil Construction</div>
          </div>
          <div className="offer-item">
            <div className="offer-img-wrapper">
              <img src={electrical} alt="Electrical Installation" className="offer-img" />
            </div>
            <div className="offer-item-title">Electrical Installation</div>
          </div>
          <div className="offer-item">
            <div className="offer-img-wrapper">
              <img src={mech} alt="Mechanical Works" className="offer-img" />
            </div>
            <div className="offer-item-title">Mechanical Works</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
