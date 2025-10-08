import React, { useState, useEffect } from 'react';
import '../styles/WhyChooseUs.css';
import BrandsSection from './BrandsSection'; // Import the new Brands component

// Import all images
import experienced from '../assets/images/experienced-team.jpg';
import quality from '../assets/images/quality-construction.png';
import custom from '../assets/images/custom-designs.png';
import process from '../assets/images/transparent-process.png';
import timely from '../assets/images/timely-completion.png';
import expert from '../assets/images/expert-team.png';

// Map filename keys to imported image modules
const imagesMap = {
  'experienced-team.jpg': experienced,
  'quality-construction.png': quality,
  'custom-designs.png': custom,
  'transparent-process.png': process,
  'timely-completion.png': timely,
  'expert-team.png': expert,
};

const features = [
  { 
    title: 'experienced Team', 
    description: 'More than 15 years of experience in the construction industry. Our team consists of skilled architects, engineers, and construction specialists who have worked with thousands of clients and hundreds of projects.',
    category: 'Expertise',
    imagePlaceholder: 'experienced-team.jpg'
  },
  { 
    title: 'Quality Construction', 
    description: 'We use only the best construction materials and equipment to guarantee lasting quality.',
    category: 'Quality Assurance',
    imagePlaceholder: 'quality-construction.png'
  },
  { 
    title: 'Customizable Designs', 
    description: 'We tailor each project to the client needs, ensuring design matches personal style and requirements.',
    category: 'Design Services',
    imagePlaceholder: 'custom-designs.png'
  },
  { 
    title: 'Transparent Process', 
    description: 'A transparent, client-friendly workflow with frequent project updates and clear communication.',
    category: 'Process Management',
    imagePlaceholder: 'transparent-process.png'
  },
  { 
    title: 'Timely Completion', 
    description: 'Efficient project management and timelines to meet all deadlines.',
    category: 'Project Management',
    imagePlaceholder: 'timely-completion.png'
  },
  { 
    title: 'In-house Team of Experts', 
    description: 'A complete in-house team: architects, engineers, designers, managers.',
    category: 'Team Excellence',
    imagePlaceholder: 'expert-team.png'
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
      }, 10000);

      return () => clearInterval(autoSlideTimer);
    }
  }, [currentSlide, isPaused, isAnimating]);

  const changeSlide = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(newIndex);
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % features.length;
    setIsPaused(true);
    changeSlide(newIndex);
    setTimeout(() => { setIsPaused(false); }, 15000);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + features.length) % features.length;
    setIsPaused(true);
    changeSlide(newIndex);
    setTimeout(() => { setIsPaused(false); }, 15000);
  };

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      setIsPaused(true);
      changeSlide(index);
      setTimeout(() => { setIsPaused(false); }, 15000);
    }
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <>
      {/* Original Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <div className="section-header">
            <h2>Why Choose <span style={{ color: 'blue' }}>e</span><span style={{ color: 'red' }}>k</span><span style={{ color: 'blue' }}>s</span> <span style={{ color: 'blue' }}>construction?</span></h2>
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
              </div>

              {/* Right Image Box */}
              <div className={`carousel-image-container ${isAnimating ? 'cascade-animating' : 'cascade-visible'}`}>
                <div className="carousel-image cascade-item" style={{'--delay': '2'}}>
                  <img 
                    src={imagesMap[features[currentSlide].imagePlaceholder]} 
                    alt={features[currentSlide].title} 
                    className="carousel-image-real"
                    style={{'--delay': '5'}}
                  />
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

            {/* Auto-slide progress indicator */}
            {!isPaused && !isAnimating && (
              <div className="auto-slide-progress">
                <div className="progress-bar"></div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* New Brands Section */}
      <BrandsSection />
    </>
  );
};

export default WhyChooseUs;