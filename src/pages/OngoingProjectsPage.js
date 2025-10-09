import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSection from '../components/ProjectsSection';
import '../styles/ProjectsPage.css';

import on1 from '../assets/images/projects/on1.jpg';
import on2 from '../assets/images/projects/on2.jpg';
import on3 from '../assets/images/projects/on3.jpg';
import on4 from '../assets/images/projects/on4.jpg';

const OngoingProjectsPage = () => {
  const ongoingProjects = [
    {
      id: 1,
      title: 'Premium Residential House',
      location: 'Crowncity Phase-1',
      type: 'Residential',
      area: '1500 sqft',
      floors: '2 Floors',
      startDate: 'June 2024',
      expectedCompletion: 'December 2025',
      progress: 35,
      image: on1,
      features: ['High-rise Tower', 'Premium Amenities', 'Concierge Service', 'Rooftop Garden'],
      description: 'A luxurious residential tower with premium amenities and modern architecture.',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Modern Residential Villa',
      location: 'Ambattur ,Chennai',
      type: 'Residentiall',
      area: '2100 sqft',
      floors: '2 Floors',
      startDate: 'August 2024',
      expectedCompletion: 'March 2026',
      progress: 25,
      image: on2,
      features: ['IT Infrastructure', 'Conference Rooms', 'Cafeteria', 'Recreation Area'],
      description: 'A modern tech park designed for IT companies with world-class infrastructure.',
      color: 'red'
    },
    {
      id: 3,
      title: 'Blissful Living Villa',
      location: 'VGN Crofton',
      type: 'Residential',
      area: '1810 sqft',
      floors: '2',
      startDate: 'September 2024',
      expectedCompletion: 'June 2026',
      progress: 15,
      image: on3,
      features: ['Solar Energy', 'Rainwater Harvesting', 'Green Building', 'Community Garden'],
      description: 'An eco-friendly housing project focused on sustainable living and green technology.',
      color: 'blue'
    },
    {
      id: 4,
      title: 'Dreamline Villa',
      location: 'Govarthanagiri, Tamil Nadu',
      type: 'Residential',
      area: '1100 sqft',
      floors: '2 Floors',
      startDate: 'July 2024',
      expectedCompletion: 'April 2026',
      progress: 40,
      image: on4,
      features: ['Spa & Wellness', 'Multi-cuisine Restaurant', 'Conference Hall', 'Adventure Sports'],
      description: 'A premium resort with luxury accommodations and world-class hospitality facilities.',
      color: 'red'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="projects-page"
    >

      {/* Projects Section */}
      <ProjectsSection projects={ongoingProjects} type="ongoing" />

      {/* Contact Form */}
    </motion.div>
  );
};

export default OngoingProjectsPage;
