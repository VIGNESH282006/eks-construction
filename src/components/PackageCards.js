import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/PackageCards.css';

const PackageCards = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const packages = [
    {
      id: 'basic',
      title: 'BASIC PACKAGE',
      price: '2099',
      color: 'blue',
      popular: false
    },
    {
      id: 'standard',
      title: 'STANDARD PACKAGE',
      price: '2399',
      color: 'red',
      popular: true
    },
    {
      id: 'premium',
      title: 'PREMIUM PACKAGE',
      price: '2599',
      color: 'blue',
      popular: false
    }
  ];

  const packageSections = [
    'Design',
    'Project Management', 
    'Structure',
    'Bathroom & Plumbing',
    'Flooring',
    'Kitchen & Dining',
    'Door, Windows and Railing',
    'Painting',
    'Electrical',
    'What\'s Not Included'
  ];

  // Updated content data with corrected specifications
  const packageContent = {
    standard: {
      'Design': {
        items: [
          '2D Floor Plan',
          '3D Elevation Design',
          'Structural Designing'
        ]
      },
      'Structure': {
        items: [
          'Basement Height: Upto 3 feet',
          'Steel: GBR, ARS',
          'Aggregate: 20mm & 40mm',
          'Bricks: Red Bricks (senggal)',
          'Cement: COREMENTAL, ULTRATECH',
          'Tiles: KAJARIA, SOMANY, KAG',
          'Toilet Fittings: Parryware',
          'M Sand: Brick work',
          'P Sand: Plastering',
          'RCC Design Mix: M20',
          'Ceiling Height: 10 Feet'
        ]
      },
      'Kitchen & Dining': {
        items: [
          'Ceramic Wall Tile: 2 Feet Above Kitchen Slab',
          'Main Sink Faucet: Upto Rs.3000 & ISI Marked',
          'Kitchen Sink: Stainless Steel Upto Rs 3000',
          'Kitchen Granite Slab: 20mm Thick Upto Rs.150 Per Sq.ft'
        ]
      },
      'Project Management': {
        items: [
          'Dedicated Project Manager',
          'Regular Progress Updates',
          'Quality Monitoring',
          'Timeline Management'
        ]
      },
      'Bathroom & Plumbing': {
        items: [
          'Parryware Toilet Fittings',
          'ISI Marked Plumbing Materials',
          'KAJARIA, SOMANY, KAG Bathroom Tiles',
          'Professional Plumbing Installation'
        ]
      },
      'Flooring': {
        items: [
          'KAJARIA, SOMANY, KAG Tiles',
          'Standard Tile Installation',
          'Quality Flooring Finish',
          'Grouting & Cleaning'
        ]
      },
      'Door, Windows and Railing': {
        items: [
          'Standard Wooden Doors',
          'UPVC/Aluminum Windows',
          'Basic Safety Railings',
          'Standard Hardware Fittings'
        ]
      },
      'Painting': {
        items: [
          'Interior Wall Painting - 2 Coats',
          'Exterior Wall Painting - 2 Coats',
          'Primer & Putty Application',
          'Standard Color Scheme'
        ]
      },
      'Electrical': {
        items: [
          'ISI Marked Electrical Materials',
          'Standard Wiring Installation',
          'Basic Light & Fan Points',
          'MCB & Distribution Board'
        ]
      },
      'What\'s Not Included': {
        items: [
          'Interior Design & Furnishing',
          'Landscaping & Garden Work',
          'Premium Fixtures & Fittings',
          'Additional Customizations'
        ]
      }
    },
    premium: {
      'Design': {
        items: [
          '2D Floor Plan',
          '3D Elevation Design',
          'Structural Designing'
        ]
      },
      'Structure': {
        items: [
          'Basement Height: Upto 3 feet',
          'Steel: TATA, JSW, I-STEEL',
          'Aggregate: 20mm & 40mm',
          'Bricks: Red Bricks (senggal)',
          'Cement: COREMENTAL, ULTRATECH',
          'Tiles: KAJARIA, SOMANY, KAG, ORIENBELL',
          'Toilet Fittings: Parryware',
          'M Sand: Brick work',
          'P Sand: Plastering',
          'RCC Design Mix: M20',
          'Ceiling Height: 10 Feet'
        ]
      },
      'Kitchen & Dining': {
        items: [
          'Ceramic Wall Tile: 2 Feet Above Kitchen Slab',
          'Main Sink Faucet: Upto Rs. 3500 & ISI Marked',
          'Kitchen Sink: Stainless Steel Upto Rs 4000',
          'Kitchen Granite Slab: 20mm Thick Upto Rs.180 Per Sq.ft'
        ]
      },
      'Project Management': {
        items: [
          'Dedicated Senior Project Manager',
          'Daily Progress Updates',
          'Premium Quality Monitoring',
          'Advanced Timeline Management',
          'Site Supervision'
        ]
      },
      'Bathroom & Plumbing': {
        items: [
          'Parryware Premium Toilet Fittings',
          'ISI Marked Premium Plumbing Materials',
          'KAJARIA, SOMANY, KAG, ORIENBELL Premium Tiles',
          'Advanced Plumbing Installation'
        ]
      },
      'Flooring': {
        items: [
          'KAJARIA, SOMANY, KAG, ORIENBELL Premium Tiles',
          'Premium Tile Installation',
          'Superior Flooring Finish',
          'Professional Grouting & Cleaning'
        ]
      },
      'Door, Windows and Railing': {
        items: [
          'Premium Wooden Doors',
          'High-Quality UPVC/Aluminum Windows',
          'Premium Safety Railings',
          'Superior Hardware Fittings'
        ]
      },
      'Painting': {
        items: [
          'Premium Interior Wall Painting - 3 Coats',
          'Premium Exterior Wall Painting - 3 Coats',
          'Premium Primer & Putty Application',
          'Custom Color Consultation'
        ]
      },
      'Electrical': {
        items: [
          'Premium ISI Marked Electrical Materials',
          'Advanced Wiring Installation',
          'Premium Light & Fan Points',
          'Advanced MCB & Distribution Board'
        ]
      },
      'What\'s Not Included': {
        items: [
          'Complete Interior Design & Furnishing',
          'Full Landscaping & Garden Work',
          'Ultra-Premium Fixtures & Fittings',
          'Extensive Additional Customizations'
        ]
      }
    },
    basic: {
      'Design': {
        items: [
          '2D Floor Plan',
          'Basic Elevation Design',
          'Standard Structural Planning'
        ]
      },
      'Structure': {
        items: [
          'Basement Height: Upto 2.5 feet',
          'Steel: Standard Quality',
          'Aggregate: 20mm',
          'Bricks: Standard Red Bricks',
          'Cement: Standard Brand',
          'Tiles: Basic Quality',
          'Toilet Fittings: Standard',
          'M Sand: Brick work',
          'P Sand: Plastering',
          'RCC Design Mix: M15',
          'Ceiling Height: 9.5 Feet'
        ]
      },
      'Kitchen & Dining': {
        items: [
          'Basic Wall Tiles Above Kitchen Slab',
          'Standard Sink Faucet: Upto Rs.2000',
          'Basic Stainless Steel Sink: Upto Rs 2000',
          'Standard Kitchen Granite: Basic Quality Upto Rs.120 Per Sq.ft'
        ]
      },
      'Project Management': {
        items: [
          'Basic Project Supervision',
          'Weekly Progress Updates',
          'Standard Quality Monitoring',
          'Basic Timeline Management'
        ]
      },
      'Bathroom & Plumbing': {
        items: [
          'Standard Toilet Fittings',
          'Basic Plumbing Materials',
          'Standard Bathroom Tiles',
          'Basic Plumbing Installation'
        ]
      },
      'Flooring': {
        items: [
          'Standard Quality Tiles',
          'Basic Tile Installation',
          'Standard Flooring Finish',
          'Basic Grouting & Cleaning'
        ]
      },
      'Door, Windows and Railing': {
        items: [
          'Basic Wooden Doors',
          'Standard Windows',
          'Basic Railings',
          'Standard Hardware'
        ]
      },
      'Painting': {
        items: [
          'Basic Interior Wall Painting - 2 Coats',
          'Basic Exterior Wall Painting - 2 Coats',
          'Standard Primer & Putty',
          'Limited Color Options'
        ]
      },
      'Electrical': {
        items: [
          'Standard Electrical Materials',
          'Basic Wiring Installation',
          'Standard Light & Fan Points',
          'Basic MCB & Distribution Board'
        ]
      },
      'What\'s Not Included': {
        items: [
          'Interior Design & Furnishing',
          'Landscaping Work',
          'Premium Fixtures',
          'Additional Customizations'
        ]
      }
    }
  };

  const toggleSection = (packageId, section) => {
    const key = `${packageId}-${section}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getSectionContent = (packageId, section) => {
    const content = packageContent[packageId]?.[section];
    if (content) {
      return (
        <ul className="feature-list">
          {content.items.map((item, index) => (
            <li key={index} className="feature-list-item">
              <span className="feature-check">✓</span>
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return <p className="feature-placeholder">Detailed specifications for {section.toLowerCase()} will be provided upon request.</p>;
  };

  return (
    <section className="packages-section">
      <div className="packages-container">
        <motion.div 
          className="packages-grid"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className={`package-card ${pkg.color} ${pkg.popular ? 'popular' : ''}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {pkg.popular && <div className="popular-badge">MOST POPULAR</div>}
              
              <div className="package-header">
                <h3>{pkg.title}</h3>
                <div className="package-price">
                  <span className="currency">₹</span>
                  <span className="amount">{pkg.price}</span>
                  <span className="unit">per sqft</span>
                </div>
              </div>

              <div className="package-features">
                {packageSections.map((section) => (
                  <div key={section} className="feature-item">
                    <button
                      className="feature-header"
                      onClick={() => toggleSection(pkg.id, section)}
                    >
                      <span>{section}</span>
                      <span className="toggle-icon">
                        {expandedSections[`${pkg.id}-${section}`] ? '−' : '+'}
                      </span>
                    </button>
                    {expandedSections[`${pkg.id}-${section}`] && (
                      <motion.div
                        className="feature-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {getSectionContent(pkg.id, section)}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PackageCards;
