import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSection from '../components/ProjectsSection';
import '../styles/ProjectsPage.css';
//1,7,8,3
import on1 from '../assets/images/projects/on1.jpg';
import on1_2 from '../assets/images/ongoing/1/2-8.png';
import on1_3 from '../assets/images/ongoing/1/3-5.png';
import on1_4 from '../assets/images/ongoing/1/4-4.png';
import on1_5 from '../assets/images/ongoing/1/5-2.png';
import on1_6 from '../assets/images/ongoing/1/6-1.png';
import on1_7 from '../assets/images/ongoing/1/7.png';
import on1_8 from '../assets/images/ongoing/1/9-scaled.jpg';
import on1_9 from '../assets/images/ongoing/1/10.jpg';
import on1_10 from '../assets/images/ongoing/1/11.jpg';
//project 2
import on2 from '../assets/images/projects/on2.jpg';
import on7_1 from '../assets/images/ongoing/7/1-8.jpg';
import on7_2 from '../assets/images/ongoing/7/2-5.jpg';
import on7_3 from '../assets/images/ongoing/7/3-6.jpg';  
import on7_4 from '../assets/images/ongoing/7/4-4.jpg';
import on7_5 from '../assets/images/ongoing/7/5-3.jpg';
import on7_6 from '../assets/images/ongoing/7/6-5.jpg';
import on7_7 from '../assets/images/ongoing/7/7-3.jpg';
import on7_8 from '../assets/images/ongoing/7/8-1.jpg';
//project 3
import on3 from '../assets/images/projects/on3.jpg';
import on3_1 from '../assets/images/ongoing/8/1-9.jpg';
import on3_2 from '../assets/images/ongoing/8/2-11.png';
import on3_3 from '../assets/images/ongoing/8/3-7.jpg';
import on3_4 from '../assets/images/ongoing/8/4-5.jpg';
import on3_5 from '../assets/images/ongoing/8/5-4.jpg';
import on3_6 from '../assets/images/ongoing/8/6-6.jpg';
import on3_7 from '../assets/images/ongoing/8/7-4.jpg';
//project 4
import on4 from '../assets/images/projects/on4.jpg';
import on4_1 from '../assets/images/ongoing/3/1-4.jpg';
import on4_2 from '../assets/images/ongoing/3/2-2.jpg';
import on4_3 from '../assets/images/ongoing/3/3-2.jpg';
import on4_4 from '../assets/images/ongoing/3/4.jpg';
import on4_5 from '../assets/images/ongoing/3/5.jpg';
import on4_6 from '../assets/images/ongoing/3/6-1.jpg'; 
import on4_7 from '../assets/images/ongoing/3/7.jpg';

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
      images: [on1, on1_2, on1_3, on1_4, on1_5, on1_6, on1_7, on1_8, on1_9, on1_10],
      features: ['High-rise Tower', 'Premium Amenities', 'Concierge Service', 'Rooftop Garden'],
      description: 'A luxurious residential tower with premium amenities and modern architecture.',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Modern Residential Villa',
      location: 'Ambattur ,Chennai',
      type: 'Residential',
      area: '2100 sqft',
      floors: '2 Floors',
      startDate: 'August 2024',
      expectedCompletion: 'March 2026',
      progress: 25,
      image: on2,
      images: [on2, on7_1, on7_2, on7_3, on7_4, on7_5, on7_6, on7_7, on7_8],
      features: ['IT Infrastructure', 'Conference Rooms', 'Cafeteria', 'Recreation Area'],
      description: 'A modern tech park designed for IT companies with world-class infrastructure.',
      color: 'red'
    },
    {
      id: 3,
      title: 'Blissful Living Villa',
      location: 'VGN Crofton',
      type: 'Residential',
      area: '1200 sqft',
      floors: '2',
      startDate: 'September 2024',
      expectedCompletion: 'June 2026',
      progress: 15,
      image: on3,
      images: [on3, on3_1, on3_2, on3_3, on3_4, on3_5, on3_6, on3_7],
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
      images: [on4, on4_1, on4_2, on4_3, on4_4, on4_5, on4_6, on4_7],
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
