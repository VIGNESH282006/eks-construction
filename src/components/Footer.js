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
  { icon: FaFacebookF, url: "https://www.facebook.com/eksconstruction.in/", cls: "facebook", color: "#1877F2" },
  { icon: FaInstagram, url: "https://www.instagram.com/eks_construction/?hl=en", cls: "instagram", color: "#E4405F" },
  { icon: FaYoutube, url: "https://www.youtube.com/@eksconstructions", cls: "youtube", color: "#FF0000" },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">

      {/* Left: Address */}
      <div className="footer-col left">
        <h4 className="footer-title">Find Us</h4>

        <div className="footer-row single-line">
          <FaMapMarkerAlt className="row-icon" />
          <span className="row-text">No.2, 1st Floor, N.M.Road, Avadi, Chennai - 54</span>
        </div>

        <div className="footer-row single-line">
          <strong className="row-label">Hours:</strong>
          <span className="row-text">Mon–Sat: 10AM–6PM &nbsp;|&nbsp; Sun: 11AM–6PM</span>
        </div>
        {/* Social icons (compact row) */}
        <h4 className="footer-title">Social Links</h4>

        <div className="footer-social-row">
          <div className="social-icons">
            {socialLinks.map(({ icon: Icon, url, cls }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-icon ${cls}`}
                aria-label={cls}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>


      {/* Center: Links + Logo */}
      <div className="footer-col center">


        <div className="footer-logo-wrap">
          <img src={footerImage} alt="logo" className="footer-logo-img" />
        </div>
      </div>

      {/* Right: Contact */}
      <div className="footer-col right">

        <h4 className="footer-title">Quick Links</h4>

        <ul className="footer-quick-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <h4 className="footer-title">Contact</h4>

        <div className="footer-row single-line">
          <FaEnvelope className="row-icon" />
          <span className="row-text">eksconstruction30@gmail.com</span>
        </div>

        <div className="footer-row single-line">
          <FaPhoneAlt className="row-icon" />
          <span className="row-text">+91 8148353564</span>
        </div>

      </div>

    </div>



    <hr className="footer-divider" />

    <div className="footer-bottom">
      <div className="footer-middle-desc">Home Construction Experts | Best Building Contractors</div>
      <div className="footer-copy">© 2025 EKS Construction | Designed by Caarapace.Inc</div>
    </div>
  </footer>
);

export default Footer;
