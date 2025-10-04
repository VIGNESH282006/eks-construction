import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileWorksDropdown, setShowMobileWorksDropdown] = useState(false);
  const [showDesktopWorksDropdown, setShowDesktopWorksDropdown] = useState(false);
  const desktopDropdownRef = useRef(null);

  const currentPath = location.pathname;

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'INTERIOR', path: '/interior' },
    { name: 'PACKAGES', path: '/packages' },
    { name: 'OUR WORKS', dropdown: true },
    { name: 'OUR TEAM', path: '/our-team' },
    { name: 'WHY CHOOSE US', path: '/why-choose-us' },
    { name: 'CAREERS', path: '/careers' },
    { name: 'CONTACT', path: '/contact' }
  ];

  const worksDropdownItems = [
    { name: 'Completed Projects', path: '/completed-projects'},
    { name: 'Ongoing Projects', path: '/ongoing-projects' },
    { name: 'Upcoming Projects', path: '/upcoming-projects' }
  ];

  // Helper function to determine if nav item should be active
  const isActive = (item) => {
    if (item.dropdown) {
      // Check if current path matches any dropdown item
      return worksDropdownItems.some(dropItem => dropItem.path === currentPath);
    }
    return item.path === currentPath;
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    setShowMobileWorksDropdown(false);
    setShowDesktopWorksDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
        setShowDesktopWorksDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="EKS Construction" />
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
          <ul className="mobile-nav-list">
            {navItems.map(item => (
              <li key={item.name} className="mobile-nav-item">
                {item.dropdown ? (
                  <div className="mobile-dropdown">
                    <span
                      className={`mobile-nav-link dropdown-toggle ${isActive(item) ? 'active' : ''}`}
                      onClick={() => setShowMobileWorksDropdown(!showMobileWorksDropdown)}
                    >
                      {item.name} ▼
                    </span>
                    {showMobileWorksDropdown && (
                      <ul className="mobile-dropdown-menu">
                        {worksDropdownItems.map(dropItem => (
                          <li key={dropItem.path}>
                            <Link
                              to={dropItem.path}
                              className={`mobile-dropdown-link ${currentPath === dropItem.path ? 'active' : ''}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span className="dropdown-icon">{dropItem.icon}</span>
                              {dropItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`mobile-nav-link ${isActive(item) ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop navigation */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            {navItems.map(item => (
              <li className="nav-item" key={item.name} ref={item.dropdown ? desktopDropdownRef : null}>
                {item.dropdown ? (
                  <div className="dropdown">
                    <span
                      className={`nav-link dropdown-toggle ${isActive(item) ? 'active' : ''}`}
                      onClick={() => setShowDesktopWorksDropdown(!showDesktopWorksDropdown)}
                      style={{ cursor: 'pointer' }}
                    >
                      {item.name} ▼
                    </span>
                    {showDesktopWorksDropdown && (
                      <ul className="dropdown-menu">
                        {worksDropdownItems.map(dropItem => (
                          <li key={dropItem.path}>
                            <Link
                              to={dropItem.path}
                              className={`dropdown-link ${currentPath === dropItem.path ? 'active' : ''}`}
                              onClick={() => setShowDesktopWorksDropdown(false)}
                            >
                              <span className="dropdown-icon">{dropItem.icon}</span>
                              {dropItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`nav-link ${isActive(item) ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
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
