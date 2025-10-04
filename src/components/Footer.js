import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../styles/Footer.css";
import footerImage from "../assets/images/footer.png";

const socialLinks = [
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/eksconstruction.in/",
    color: "#1877F2",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/eks_construction/?hl=en",
    color: "#C13584",
  },
  {
    icon: FaYoutube,
    url: "https://www.youtube.com/@eksconstructions",
    color: "#FF0000",
  },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {/* Quick Links */}
      <div className="footer-section quick-links">
        <h4 className="footer-header">QUICK LINKS</h4>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/interior">Interior</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Company Branding Center */}
      <div className="footer-section company-branding">
        <div className="company-logo-container">
          <div className="company-logo">
            <img
              src={footerImage}
              alt="EKS Construction"
              className="footer-image"
            />
          </div>
          <div className="company-details">
            <h2 className="company-name"><span style={{ color: 'blue' }}>e</span><span style={{ color: 'red' }}></span><span style={{ color: 'blue' }}>s</span> <span style={{ color: 'blue' }}>construction</span></h2>
            <p className="company-tagline">Feel The Happiness In Your Home</p>
          </div>
          <div className="social-icons">
            {socialLinks.map(({ icon: Icon, url, color }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ color }}
                aria-label={`social-link-${idx}`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="footer-section contact-info">
        <h4 className="footer-header">CONTACT INFO</h4>
        <div className="contact-detail">
          <FaMapMarkerAlt className="contact-icon" />
          <div className="contact-text">
            <a
              href="https://maps.app.goo.gl/gcrojqt8vTHFFFJU6"
              target="_blank"
              rel="noopener noreferrer"
            >
              No.2, 1st Floor, N.M.Road,
              <br />
              Avadi, Chennai - 54
            </a>
          </div>
        </div>
        <div className="contact-detail">
          <FaPhoneAlt className="contact-icon" />
          <div className="contact-text">
            <a href="tel:+918148353564">+91 814 835 3564</a>
          </div>
        </div>
        <div className="contact-detail">
          <FaEnvelope className="contact-icon" />
          <div className="contact-text">
            <a href="mailto:eksconstruction30@gmail.com" rel="noopener noreferrer">
              eksconstruction30@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="footer-divider" />
    <div className="footer-bottom">
      Copyright © {new Date().getFullYear()} EKS Construction. All rights reserved.
      <br />
      Made by Caarapace.Inc
    </div>
  </footer>
);

export default Footer;
