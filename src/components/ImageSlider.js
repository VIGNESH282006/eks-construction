// src/components/ImageSlider.jsx
import React, { useState, useEffect } from 'react';
import '../styles/ImageSlider.css';

const ImageSlider = ({ images, alt = "Project Image" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="image-slider">
      <img 
        src={images[currentIndex]} 
        alt={alt}
        className="slider-image"
      />
      
      {images.length > 1 && (
        <>
          <button 
            className="slider-arrow slider-arrow-left"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            &#8249;
          </button>
          <button 
            className="slider-arrow slider-arrow-right"
            onClick={goToNext}
            aria-label="Next image"
          >
            &#8250;
          </button>
          
          <div className="slider-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
