import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/CareersSection.css';
import ValueItem from '../components/ValueItem';
import FileUpload from '../components/FileUpload';

import img1 from '../assets/images/why1.jpg';
import img2 from '../assets/images/why1-alt.jpg';
import img3 from '../assets/images/why2.jpg';
import img4 from '../assets/images/why2-alt.jpg';
import img5 from '../assets/images/why3.jpg';
import img6 from '../assets/images/why3-alt.jpg';

const CLOUDINARY_CLOUD_NAME = 'dtl0gebhh';
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/raw/upload`;
const CLOUDINARY_UPLOAD_PRESET = 'thaminsudeen';
const CLOUDINARY_FOLDER = 'resumes';

const CareersSection = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    desiredPosition: '',
    message: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const jobCategories = [
    {
      category: 'Architecture & Design',
      positions: [
        { title: 'Architects', locations: ['Chennai', 'Bangalore', 'Hyderabad'], description: 'Creative and experienced architects to join our teams.' },
        { title: '3D Visualizer', locations: ['Chennai'], description: 'Specialize in 3D architectural visualization.' }
      ],
      color: 'blue'
    },
    {
      category: 'Engineering',
      positions: [
        { title: 'Civil Engineer', locations: ['Chennai'], description: 'Excellent opportunities for civil engineers.' },
        { title: 'SITE ENGINEER', locations: ['Chennai'], description: 'Manage construction, ensure safety, and coordinate for project success.' },
        { title: 'PROJECT MANAGER', locations: ['Chennai'], description: 'Lead construction projects and manage teams.' }
      ],
      color: 'red'
    },
    {
      category: 'Sales & Marketing',
      positions: [
        { title: 'CRM Executive', locations: ['Chennai'], description: 'Maintain strong relationships with our clients.' },
        { title: 'Digital Marketing', locations: ['Chennai'], description: 'Skilled digital marketers for SEO and SEM.' },
        { title: 'Marketing Professional', locations: ['Chennai'], description: 'Promote our services and reach new clients.' }
      ],
      color: 'blue'
    },
    {
      category: 'Administration',
      positions: [
        { title: 'Front Office', locations: ['Chennai'], description: 'Be the face of eks Construction.' },
        { title: 'Accountant', locations: ['Chennai'], description: 'Manage financial records and support business growth.' }
      ],
      color: 'red'
    }
  ];

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const cardVariants = { hidden: { opacity: 0, y: 50, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } } };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileSelect = (file) => {
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const validateForm = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'experience', 'desiredPosition', 'message'];
    return requiredFields.every(field => formData[field].trim() !== '') && formData.resume !== null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setSubmitStatus('⚠ Please fill in all required fields and upload your resume.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('Uploading resume...');

    try {
      const uploadData = new FormData();
      uploadData.append('file', formData.resume);
      uploadData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
      uploadData.append('folder', CLOUDINARY_FOLDER);
      uploadData.append('resource_type', 'raw');

      console.log('Uploading to Cloudinary...');
      const cloudinaryResponse = await fetch(CLOUDINARY_UPLOAD_URL, {
        method: 'POST',
        body: uploadData
      });

      if (!cloudinaryResponse.ok) {
        const errorData = await cloudinaryResponse.json();
        console.error('Cloudinary error:', errorData);
        throw new Error(`Cloudinary upload failed: ${errorData.error?.message || 'Unknown error'}`);
      }

      const cloudinaryResult = await cloudinaryResponse.json();
      console.log('Cloudinary result:', cloudinaryResult);

      if (!cloudinaryResult.secure_url) {
        throw new Error('No secure URL returned from Cloudinary');
      }

      const resumeUrl = cloudinaryResult.secure_url;
      console.log('Resume uploaded successfully:', resumeUrl);

      setSubmitStatus('Sending email...');

      const emailParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        desiredPosition: formData.desiredPosition,
        message: formData.message,
        resumeUrl: resumeUrl
      };

      console.log('Sending email with params:', emailParams);
      
      await emailjs.send(
        'service_4coysl5', 
        'template_3d2c6og', 
        emailParams, 
        '44BIq6t6iWepbdl3_'
      );

      console.log('Email sent successfully!');
      setSubmitStatus('✅ Application submitted successfully!');
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        experience: '',
        desiredPosition: '',
        message: '',
        resume: null
      });
      
      if (form.current) {
        form.current.reset();
      }

    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus(`❌ Error: ${error.message}. Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="company-values">
        <div className="careers-container">
          <motion.div className="values-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2>Why Choose <span style={{ color: 'blue' }}>e</span><span style={{ color: 'red' }}>k</span><span style={{ color: 'blue' }}>s</span> <span style={{ color: 'blue' }}>construction?</span></h2>
            <p>Are you passionate about architecture and construction? eks Construction, a leading Turnkey Home construction service provider, is expanding its team...</p>
            <div className="values-grid">
              <ValueItem img1={img1} img2={img2} title="Innovation" description="We offer a range of exciting opportunities for professionals at all stages of their careers." />
              <ValueItem img1={img3} img2={img4} title="Support" description="We pride ourselves on creating an innovative and supportive work environment." />
              <ValueItem img1={img5} img2={img6} title="Excellence" description="Our commitment to excellence drives us to seek dedicated and skilled individuals." />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="job-categories">
        <div className="careers-container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2>Job Categories</h2>
            <p>Explore opportunities across various departments</p>
          </motion.div>

          <motion.div className="categories-grid" variants={containerVariants} initial="hidden" animate="visible">
            {jobCategories.map((category, index) => (
              <motion.div key={index} className={`category-card ${category.color}} variants={cardVariants} whileHover={{ y: -5, transition: { duration: 0.3 } }`}>
                <h3>{category.category}</h3>
                <div className="positions-list">
                  {category.positions.map((position, idx) => (
                    <div key={idx} className="position-item">
                      <h4>{position.title}</h4>
                      <div className="locations">{position.locations.map((loc, locIdx) => (<span key={locIdx} className="location-tag">{loc}</span>))}</div>
                      <p>{position.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="application-form-section">
        <div className="careers-container">
          <motion.div className="form-header" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2>Apply Now</h2>
            <p>Ready to join our team? Fill out the application form below and we'll get back to you soon.</p>
          </motion.div>

          <motion.form ref={form} className="application-form" onSubmit={handleSubmit} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            
            <div className="form-row">
              <label htmlFor="firstName">First Name *</label>
              <input type="text" className='input-box' id="firstName" name="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={handleInputChange} required />
            </div>

            <div className="form-row">
              <label htmlFor="lastName">Last Name *</label>
              <input type="text" className='input-box' id="lastName" name="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleInputChange} required />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email Address *</label>
              <input type="email" className='input-box' id="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleInputChange} required />
            </div>

            <div className="form-row">
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" className='input-box' id="phone" name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleInputChange} required />
            </div>

            <div className="form-row">
              <label htmlFor="experience">Experience *</label>
              <input type="text" className='input-box' id="experience" name="experience" placeholder="e.g., +5 years experience in Civil" value={formData.experience} onChange={handleInputChange} required />
            </div>

            <div className="form-row">
              <label htmlFor="desiredPosition">Desired Position *</label>
              <input type="text" className='input-box' id="desiredPosition" name="desiredPosition" placeholder="e.g., Civil Engineer, Project Manager" value={formData.desiredPosition} onChange={handleInputChange} required />
            </div>

            <div className="form-group full-width">
              <label htmlFor="resume">Your Resume *</label>
              <FileUpload onFileSelect={handleFileSelect} />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message to Hiring Team *</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell us why you'd like to work with eks Construction..." value={formData.message} onChange={handleInputChange} required></textarea>
            </div>

            {submitStatus && (
              <div className={`form-status ${submitStatus.includes('Error') || submitStatus.includes('⚠') ? 'error' : 'success'}`}>
                {submitStatus}
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </motion.form>
        </div>
      </section>

      <section className="careers-cta">
        <div className="careers-container">
          <motion.div className="cta-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2>Ready to Start Your Career with Us?</h2>
            <p>At eks Construction, we believe in nurturing talent and providing a platform for growth and success.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CareersSection;