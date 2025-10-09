import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/CareersSection.css';
import ValueItem from '../components/ValueItem';

import img1 from '../assets/images/why1.jpg';
import img2 from '../assets/images/why1-alt.jpg';
import img3 from '../assets/images/why2.jpg';
import img4 from '../assets/images/why2-alt.jpg';
import img5 from '../assets/images/why3.jpg';
import img6 from '../assets/images/why3-alt.jpg';

const CareersSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    qualification: '',
    institution: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const jobCategories = [
    {
      category: 'Architecture & Design',
      positions: [
        { title: 'Architects', locations: ['Chennai', 'Bangalore', 'Hyderabad'], description: 'Creative and experienced architects to join our teams. If you have a keen eye for design and a passion for creating beautiful and functional spaces, we want to hear from you.' },
        { title: '3D Visualizer', locations: ['Chennai'], description: 'Specialize in 3D architectural visualization. Help us bring our architectural designs to life with your visualization skills.' }
      ],
      color: 'blue'
    },
    {
      category: 'Engineering',
      positions: [
        { title: 'Civil Engineer', locations: ['Chennai'], description: 'Excellent opportunities for civil engineers. Whether you are a seasoned professional or a fresher looking to start your career in civil engineering.' },
        { title: 'SITE ENGINEER', locations: ['Chennai'], description: 'Hiring a Site Engineer in Chennai to manage construction, ensure safety, and coordinate for project success.' },
        { title: ' PROJECT MANAGER', locations: ['Chennai'], description: 'Hiring an experienced Project Manager in Chennai to lead construction projects, manage teams, and ensure timely, high-quality delivery.' }
      ],
      color: 'red'
    },
    {
      category: 'Sales & Marketing',
      positions: [
        { title: 'CRM Executive', locations: ['Chennai'], description: 'Maintain strong relationships with our clients. If you have experience in CRM, this is a great opportunity to advance your career.' },
        { title: 'Digital Marketing', locations: ['Chennai'], description: 'We need skilled digital marketers. If you have experience in SEO, SEM, and social media marketing, we want to hear from you.' },
        { title: 'Marketing Professional', locations: ['Chennai'], description: 'Marketing professionals who can help us promote our services and reach new clients.' }
      ],
      color: 'blue'
    },
    {
      category: 'Administration',
      positions: [
        { title: 'Front Office', locations: ['Chennai'], description: 'Our front office team is the face of eks Construction. If you are organized, friendly, and efficient, consider applying for our front office positions.' },
        { title: 'Accountant', locations: ['Chennai'], description: 'Hiring an Accountant in Chennai to manage financial records, ensure compliance, and support business growth.' }
      ],
      color: 'red'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'qualification', 'institution', 'message'];
    return requiredFields.every(field => formData[field].trim() !== '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const emailBody = `
        New Job Application Received:
        
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Educational Qualification: ${formData.qualification}
        Educational Institution: ${formData.institution}
        
        Message to Hiring Team:
        ${formData.message}
      `;

      const mailtoLink = `mailto:vickyvicky2k6@gmail.com?subject=New Job Application - ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      setSubmitStatus('Application submitted successfully! Your email client should open shortly.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        qualification: '',
        institution: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      <section className="company-values">
        <div className="careers-container">
          <motion.div
            className="values-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose <span style={{ color: 'blue' }}>e</span><span style={{ color: 'red' }}>k</span><span style={{ color: 'blue' }}>s</span> <span style={{ color: 'blue' }}>construction?</span></h2>
            <p>
              Are you passionate about architecture and construction? eks Construction, a leading Turnkey Home construction service provider, is expanding its team...
            </p>
            <div className="values-grid">
              <ValueItem
                img1={img1}
                img2={img2}
                title="Innovation"
                description="We offer a range of exciting opportunities for professionals at all stages of their careers."
              />
              <ValueItem
                img1={img3}
                img2={img4}
                title="Support"
                description="We pride ourselves on creating an innovative and supportive work environment."
              />
              <ValueItem
                img1={img5}
                img2={img6}
                title="Excellence"
                description="Our commitment to excellence drives us to seek dedicated and skilled individuals."
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* Job Categories */}
      <section className="job-categories">
        <div className="careers-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Job Categories</h2>
            <p>Explore opportunities across various departments</p>
          </motion.div>

          <motion.div
            className="categories-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {jobCategories.map((category, index) => (
              <motion.div
                key={index}
                className={`category-card ${category.color}`}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <h3>{category.category}</h3>
                <div className="positions-list">
                  {category.positions.map((position, idx) => (
                    <div key={idx} className="position-item">
                      <h4>{position.title}</h4>
                      <div className="locations">
                        {position.locations.map((location, locIdx) => (
                          <span key={locIdx} className="location-tag">{location}</span>
                        ))}
                      </div>
                      <p>{position.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="application-form-section">
        <div className="careers-container">
          <motion.div
            className="form-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Apply Now</h2>
            <p>Ready to join our team? Fill out the application form below and we'll get back to you soon.</p>
          </motion.div>

          <motion.form
            className="application-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="qualification">Educational Qualification *</label>
                <input
                  type="text"
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  placeholder="e.g., Bachelor's in Civil Engineering"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="institution">Educational Institution *</label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  placeholder="e.g., Anna University"
                  required
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message to Hiring Team *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                placeholder="Tell us why you'd like to work with eks Construction and what position interests you..."
                required
              ></textarea>
            </div>

            {submitStatus && (
              <div className={`form-status ${submitStatus.includes('Error') ? 'error' : 'success'}`}>
                {submitStatus}
              </div>
            )}

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </motion.form>
        </div>
      </section>

      {/* Call to Action */}
      <section className="careers-cta">
        <div className="careers-container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Start Your Career with Us?</h2>
            <p>At eks Construction, we believe in nurturing talent and providing a platform for growth and success. If you are looking for a rewarding career in architecture and construction, join us and be part of a team that shapes the future of home construction.</p>
          </motion.div>
        </div>
      </section>
    </>
  );

};

export default CareersSection;
