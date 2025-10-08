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
import footerImage from "../assets/images/logo.png";

const socialLinks = [
  { icon: FaFacebookF, url: "https://www.facebook.com/eksconstruction.in/", color: "#1877F2" },
  { icon: FaInstagram, url: "https://www.instagram.com/eks_construction/?hl=en", color: "#E4405F" },
  { icon: FaYoutube, url: "https://www.youtube.com/@eksconstructions", color: "#FF0000" },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {/* Address Section */}
      <div className="footer-col left">
        <h4 className="footer-title">Find Us</h4>
        <div className="footer-label">Office Address :</div>
        <div className="footer-address-link">
          No.4, 1st Floor, N.M.Road, Avadi, Chennai - 54
        </div>
        <div className="footer-label">Working Hours :</div>
        <div className="footer-address-link">
          Mon-Sat: 10AM-6PM <br></br>
          Sun: 11AM-6PM
        </div>
      </div>

      {/* Quick Links */}
      <div className="footer-col center">
        <h4 className="footer-title-QuickLinks">Quick Links</h4>
        <ul className="footer-quick-links-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/interior">Interior</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="footer-middle-logo">
          <img src={footerImage} alt="logo" className="footer-logo-img" />
        </div>
      </div>

      {/* Email & Call Section */}
      <div className="footer-col right">
        <h4 className="footer-title-Email">Email Us</h4>
        <div className="footer-contact"><FaEnvelope /> eksconstruction30@gmail.com</div>
        <h4 className="footer-title">Call Us</h4>
        <div className="footer-contact"><FaPhoneAlt /> +91 8148353564</div>
      </div>
    </div>
    <div className="footer-social-row">
      <div className="social-icons">
        {socialLinks.map(({ icon: Icon, url, color }, idx) => (
          <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color }}>
            <Icon style={{ fontSize: "2.2rem" }} />
          </a>
        ))}
      </div>
    </div>
    <hr className="footer-divider" />
    <div className="footer-middle-desc" style={{ textAlign: "center", width: "100%", margin: "0 auto 1em auto" }}>
      Home Construction Experts | Best Building Contractors
    </div>
    <div className="footer-bottom" style={{ textAlign: "center" }}>
      © 2025 EKS Construction | Designed by Caarapace.Inc
    </div>

  </footer>
);

export default Footer;