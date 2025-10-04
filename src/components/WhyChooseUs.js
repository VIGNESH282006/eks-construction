import React, { useState, useEffect } from 'react';
import '../styles/WhyChooseUs.css';

const features = [
  { 
    icon: '👥', 
    title: 'Experienced Team', 
    description: 'More than 15 years of experience in the construction industry. Our team consists of skilled architects, engineers, and construction specialists who have worked with thousands of clients and hundreds of projects.',
    category: 'Expertise',
    imagePlaceholder: 'experienced-team.jpg'
  },
  { 
    icon: '🏗️', 
    title: 'Quality Construction', 
    description: 'We use only the best construction materials and equipment to guarantee lasting quality.',
    category: 'Quality Assurance',
    imagePlaceholder: 'quality-construction.jpg'
  },
  { 
    icon: '🎨', 
    title: 'Customizable Designs', 
    description: 'We tailor each project to the client needs, ensuring design matches personal style and requirements.',
    category: 'Design Services',
    imagePlaceholder: 'custom-designs.jpg'
  },
  { 
    icon: '📋', 
    title: 'Transparent Process', 
    description: 'A transparent, client-friendly workflow with frequent project updates and clear communication.',
    category: 'Process Management',
    imagePlaceholder: 'transparent-process.jpg'
  },
  { 
    icon: '⏰', 
    title: 'Timely Completion', 
    description: 'Efficient project management and timelines to meet all deadlines.',
    category: 'Project Management',
    imagePlaceholder: 'timely-completion.jpg'
  },
  { 
    icon: '🏠', 
    title: 'In-house Team of Experts', 
    description: 'A complete in-house team: architects, engineers, designers, managers.',
    category: 'Team Excellence',
    imagePlaceholder: 'expert-team.jpg'
  },
];

const WhyChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused && !isAnimating) {
      const autoSlideTimer = setInterval(() => {
        changeSlide((currentSlide + 1) % features.length);
      }, 10000); // 10 seconds

      return () => clearInterval(autoSlideTimer);
    }
  }, [currentSlide, isPaused, isAnimating]);

  const changeSlide = (newIndex) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(newIndex);
    
    // Reset animation state after cascade completes - increased duration
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000); // Increased from 1200ms to 2000ms for longer visibility
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % features.length;
    setIsPaused(true); // Pause auto-slide when user interacts
    changeSlide(newIndex);
    
    // Resume auto-slide after 15 seconds of user interaction
    setTimeout(() => {
      setIsPaused(false);
    }, 15000);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + features.length) % features.length;
    setIsPaused(true); // Pause auto-slide when user interacts
    changeSlide(newIndex);
    
    // Resume auto-slide after 15 seconds of user interaction
    setTimeout(() => {
      setIsPaused(false);
    }, 15000);
  };

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      setIsPaused(true); // Pause auto-slide when user interacts
      changeSlide(index);
      
      // Resume auto-slide after 15 seconds of user interaction
      setTimeout(() => {
        setIsPaused(false);
      }, 15000);
    }
  };

  // Pause auto-slide on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <div className="section-header">
          <h2>Why Choose eks Construction?</h2>
          <p>Feel the happiness in your Home with our expert services</p>
        </div>
        
        <div 
          className="featured-work-carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="carousel-container">
            {/* Left Content Box */}
            <div className={`carousel-content ${isAnimating ? 'cascade-animating' : 'cascade-visible'}`}>
              <div className="featured-label cascade-item" style={{'--delay': '0'}}>
                FEATURED WORK
              </div>
              <h3 className="carousel-title cascade-item" style={{'--delay': '1'}}>
                {features[currentSlide].title}
              </h3>
              <div className="carousel-category cascade-item" style={{'--delay': '2'}}>
                {features[currentSlide].category}
              </div>
              <p className="carousel-description cascade-item" style={{'--delay': '3'}}>
                {features[currentSlide].description}
              </p>
              <button className="learn-more-btn cascade-item" style={{'--delay': '4'}}>
                Learn more
              </button>
            </div>

            {/* Right Image Box */}
            <div className={`carousel-image-container ${isAnimating ? 'cascade-animating' : 'cascade-visible'}`}>
              <div className="carousel-image cascade-item" style={{'--delay': '2'}}>
                <div className="image-placeholder">
                  <div className="placeholder-icon cascade-item" style={{'--delay': '5'}}>
                    {features[currentSlide].icon}
                  </div>
                  <div className="placeholder-text cascade-item" style={{'--delay': '6'}}>
                    {features[currentSlide].imagePlaceholder}
                  </div>
                </div>
                <div className="image-overlay cascade-item" style={{'--delay': '3'}}></div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                className="carousel-arrow carousel-arrow-left"
                onClick={prevSlide}
                disabled={isAnimating}
              >
                &#8249;
              </button>
              <button 
                className="carousel-arrow carousel-arrow-right"
                onClick={nextSlide}
                disabled={isAnimating}
              >
                &#8250;
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="carousel-indicators">
            {features.map((_, index) => (
              <button
                key={index}
                className={`indicator cascade-item ${index === currentSlide ? 'active' : ''}`}
                style={{'--delay': `${7 + index * 0.5}`}}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
              ></button>
            ))}
          </div>

          {/* Auto-slide progress indicator */}
          {!isPaused && !isAnimating && (
            <div className="auto-slide-progress">
              <div className="progress-bar"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
