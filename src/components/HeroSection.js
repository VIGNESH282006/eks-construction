import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/videos/Construction.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="hero-content">
       <h1 className="hero-title">e<span style={{ color: 'red' }}>k</span>s Construction</h1>
        <p className="hero-subtitle">Feel the happiness in your Home</p>
        <p className="hero-description">
          We are expert home construction contractors dedicated to building your dream home with
          quality, precision, and care. Your happiness is our success.
        </p>

        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => navigate("/services")}
          >
            OUR SERVICES
          </button>
          <button className="btn-secondary" onClick={() => navigate('/contact')}>
            GET QUOTE
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
