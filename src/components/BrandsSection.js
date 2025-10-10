import React, { useState, useEffect, useRef } from 'react';
import '../styles/BrandsSection.css';

// Import brand images - you'll need to replace these with your actual brand images
import brand1 from '../assets/images/Brands/ARS.jpg';
import brand2 from '../assets/images/Brands/ashirvad-pipes.jpg';  
import brand3 from '../assets/images/Brands/asian-paints.jpg';
import brand4 from '../assets/images/Brands/coromandel.jpg';
import brand5 from '../assets/images/Brands/finolex-pipes.jpg';
import brand6 from '../assets/images/Brands/gbr-tmt.jpg';
import brand7 from '../assets/images/Brands/jaquar.jpg';
import brand8 from '../assets/images/Brands/johnson-tiles.jpg';
import brand9 from '../assets/images/Brands/jsw-steel.jpg';
import brand10 from '../assets/images/Brands/kag-tiles.jpg';
import brand11 from '../assets/images/Brands/kajaria-tiles.jpg';
import brand12 from '../assets/images/Brands/kamachi-tmt-bars.jpg';
import brand13 from '../assets/images/Brands/orbit-cables.jpg';
import brand14 from '../assets/images/Brands/orientbell-tiles.jpg';
import brand15 from '../assets/images/Brands/ramco-cement.jpg';
import brand16 from '../assets/images/Brands/tirumala-steel.jpg';
import brand17 from '../assets/images/Brands/ultratech.jpg';
import brand18 from '../assets/images/Brands/zuari-cement-logo.jpg';

// Map filename keys to imported brand images
const brandsMap = {
  'ARS.jpg': brand1,
  'ashirvad-pipes.jpg': brand2,
  'asian-paints.jpg': brand3,
  'coromandel.jpg': brand4,
  'finolex-pipes.jpg': brand5,
  'gbr-tmt.jpg': brand6,
  'jaquar.jpg': brand7,
  'johnson-tiles.jpg': brand8,
  'jsw-steel.jpg': brand9,
  'kag-tiles.jpg': brand10,
  'kajaria-tiles.jpg': brand11,
  'kamachi-tmt-bars.jpg': brand12,
  'orbit-cables.jpg': brand13,
  'orientbell-tiles.jpg': brand14,
  'ramco-cement.jpg': brand15,
  'tirumala-steel.jpg': brand16,
  'ultratech.jpg': brand17,
  'zuari-cement-logo.jpg': brand18,
};

const brands = [
  { name: 'ARS', logo: 'ARS.jpg' },
  { name: 'Ashirvad Pipes', logo: 'ashirvad-pipes.jpg' },
  { name: 'Asian Paints', logo: 'asian-paints.jpg' },
  { name: 'Coromandel King', logo: 'coromandel.jpg' },
  { name: 'Finolex Pipes', logo: 'finolex-pipes.jpg' },
  { name: 'GBR TMT', logo: 'gbr-tmt.jpg' },
  { name: 'Jaquar', logo: 'jaquar.jpg' },
  { name: 'Johnson Tiles', logo: 'johnson-tiles.jpg' },
  { name: 'JSW Steel', logo: 'jsw-steel.jpg' },
  { name: 'KAG Tiles', logo: 'kag-tiles.jpg' },
  { name: 'Kajaria Tiles', logo: 'kajaria-tiles.jpg' },
  { name: 'Kamachi TMT Bars', logo: 'kamachi-tmt-bars.jpg' },
  { name: 'Orbit Cables', logo: 'orbit-cables.jpg' },
  { name: 'Orientbell Tiles', logo: 'orientbell-tiles.jpg' },
  { name: 'Ramco Cement', logo: 'ramco-cement.jpg' },
  { name: 'Tirumala Steel', logo: 'tirumala-steel.jpg' },
  { name: 'UltraTech Cement', logo: 'ultratech.jpg' },
  { name: 'Zuari Cement', logo: 'zuari-cement-logo.jpg' },
];

const BrandsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  
  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll functionality for desktop
  useEffect(() => {
    if (!isMobile && !isPaused && !isAnimating) {
      const autoScrollTimer = setInterval(() => {
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 4) % (brands.length - 4);
          return nextIndex;
        });
        
        setTimeout(() => {
          setIsAnimating(false);
        }, 800);
      }, 3000);

      return () => clearInterval(autoScrollTimer);
    }
  }, [isPaused, isAnimating, isMobile]);

  // Auto-scroll for mobile (horizontal scroll)
  useEffect(() => {
    if (isMobile && sliderRef.current && !isPaused) {
      const scrollWidth = sliderRef.current.scrollWidth;
      const clientWidth = sliderRef.current.clientWidth;
      let scrollPosition = 0;
      
      const autoScroll = setInterval(() => {
        scrollPosition += 1;
        
        if (scrollPosition >= scrollWidth - clientWidth) {
          scrollPosition = 0;
        }
        
        sliderRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }, 30);

      return () => clearInterval(autoScroll);
    }
  }, [isMobile, isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 2000);
  };

  // Get current 5 brands to display (desktop)
  const getCurrentBrands = () => {
    if (isMobile) return brands;
    
    const visibleBrands = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % brands.length;
      visibleBrands.push(brands[index]);
    }
    return visibleBrands;
  };

  return (
    <section className="brands-section">
      <div className="brands-container">
        <div className="brands-header">
          <h2>OUR RETAIL PARTNERS</h2>
          <p>We build your dream with our Reputable Partners</p>
        </div>
        
        <div 
          className="brands-carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            ref={sliderRef}
            className={`brands-slider ${isAnimating ? 'sliding' : ''} ${isMobile ? 'mobile-scroll' : ''}`}
          >
            {getCurrentBrands().map((brand, index) => (
              <div key={`${brand.name}-${currentIndex}-${index}`} className="brand-item">
                <div className="brand-logo-container">
                  <img 
                    src={brandsMap[brand.logo]} 
                    alt={brand.name}
                    className="brand-logo"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Blue wave decoration */}
          <div className="wave-decoration"></div>
        
          
          {/* Auto-scroll progress bar - only show on desktop */}
          {!isMobile && !isPaused && !isAnimating && (
            <div className="auto-scroll-progress">
              <div className="progress-bar"></div>
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
};

export default BrandsSection;