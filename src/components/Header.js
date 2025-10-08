import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = location.pathname;

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PACKAGES', path: '/packages' },
    { name: 'INTERIOR', path: '/interior' },
    { name: 'OUR WORKS', path: '/our-works' }, // Changed from dropdown to direct navigation
    { name: 'OUR TEAM', path: '/our-team' },
    { name: 'CAREERS', path: '/careers' },
    { name: 'CONTACT', path: '/contact' }
  ];

  // Helper function to determine if nav item should be active
  const isActive = (item) => {
    // Check if current path matches the item path or is a sub-route of projects
    if (item.path === '/our-works') {
      return currentPath === '/our-works' ||
        currentPath === '/completed-projects' ||
        currentPath === '/ongoing-projects' ||
        currentPath === '/upcoming-projects';
    }
    return item.path === currentPath;
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="eks Construction" />
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile navigation */}
        <nav className={`nav-mobile ${mobileMenuOpen ? 'open' : ''}`}>
          {/* Close button */}
          <button
            className="close-mobile-menu"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            &times;
          </button>
          <ul className="mobile-nav-list">
            {navItems.map(item => (
              <li key={item.name} className="mobile-nav-item">
                <Link
                  to={item.path}
                  className={`mobile-nav-link ${isActive(item) ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>


        {/* Desktop navigation */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            {navItems.map(item => (
              <li className="nav-item" key={item.name}>
                <Link
                  to={item.path}
                  className={`nav-link ${isActive(item) ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay behind mobile nav */}
      {mobileMenuOpen && <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}></div>}
    </header>
  );
};

export default Header;
