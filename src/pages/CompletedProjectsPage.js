// src/pages/CompletedProjectsPage.jsx (Updated - Add multiple images)
import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSection from '../components/ProjectsSection';
import '../styles/ProjectsPage.css';

import c1 from '../assets/images/completed/1.jpg';
import c1_2 from '../assets/images/completed/1/2-1.png';
import c1_3 from '../assets/images/completed/1/3-1.png';
import c1_4 from '../assets/images/completed/1/4-1.png';
//2 project
import c2_1 from '../assets/images/completed/2/1-1.png';
import c2 from '../assets/images/completed/2.png';
import c2_2 from '../assets/images/completed/2/2-2.png';
import c2_3 from '../assets/images/completed/2/3-2.png';
//3 project
import c3 from '../assets/images/completed/3.png';
import c3_1 from '../assets/images/completed/3/1-2.png';
import c3_2 from '../assets/images/completed/3/2-3.png';
import c3_3 from '../assets/images/completed/3/3-3.png';
import c3_4 from '../assets/images/completed/3/4-2.png';
import c3_5 from '../assets/images/completed/3/5.png';
import c3_6 from '../assets/images/completed/3/6.png';
//4 project
import c4 from '../assets/images/completed/4.png';
import c4_1 from '../assets/images/completed/4/1-3.png';
import c4_2 from '../assets/images/completed/4/2-4.png';
//5 project
import c5 from '../assets/images/completed/5.png';
import c5_1 from '../assets/images/completed/5/1.png';
import c5_2 from '../assets/images/completed/5/2.png';
import c5_3 from '../assets/images/completed/5/3.png';
import c5_4 from '../assets/images/completed/5/4.png';
//6 project
import c6 from '../assets/images/completed/6.png';
import c6_1 from '../assets/images/completed/6/1-4.png';
import c6_2 from '../assets/images/completed/6/2-5.png';
//7 project
import c7 from '../assets/images/completed/7.png';
import c7_1 from '../assets/images/completed/7/1-5.png';
import c7_2 from '../assets/images/completed/7/2-6.png';
//8 project
import c8 from '../assets/images/completed/8.png';
import c8_1 from '../assets/images/completed/8/1-6.png';
import c8_2 from '../assets/images/completed/8/2-7.png';
import c8_3 from '../assets/images/completed/8/3-4.png';
import c8_4 from '../assets/images/completed/8/4-3.png';
import c8_5 from '../assets/images/completed/8/5-1.png';
//9 project
import c9 from '../assets/images/completed/9.jpg';
import c9_1 from '../assets/images/completed/9/1-1.jpg';
import c9_2 from '../assets/images/completed/9/1-2.jpg'; 
import c9_3 from '../assets/images/completed/9/1-3.jpg';
// ... other imports

const CompletedProjectsPage = () => {
  const completedProjects = [
    {
      id: 1,
      title: 'Comfortable Family Home',
      location: 'Newry Site',
      type: 'Residential',
      area: '1,900 sqft',
      floors: '2 Floors',
      completedDate: 'March 2024',
      image: c1, // Keep for backward compatibility
      images: [c1, c1_2, c1_3, c1_4], // Multiple images for slider
      features: ['Modern Architecture', 'Smart Home Features', 'Landscaped Garden', 'Swimming Pool'],
      description: 'A stunning modern villa with contemporary design elements and luxury amenities.',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Serene Residential Retreat',
      location: 'Paruthipattu',
      type: 'Residential',
      area: '1,500 sqft',
      floors: '2 Floors',
      completedDate: 'January 2024',
      image: c2,
      images: [c2, c2_1, c2_2, c2_3], // Add more images as available
      features: ['Glass Facade', 'Central AC', 'Elevator', 'Parking Space'],
      description: 'A state-of-the-art office complex with modern facilities and eco-friendly features.',
      color: 'red'
    },
    {
      id: 3,
      title: 'Tranquil Family Residence',
      location: 'Paruthipattu',
      type: 'Residential',
      area: '1,200 sqft',
      floors: '2 Floors',
      completedDate: 'November 2023',
      image: c3,
      images: [c3, c3_1, c3_2, c3_3, c3_4, c3_5, c3_6], // Add more images as available
      features: ['Traditional Design', 'Courtyard', 'Wooden Interiors', 'Tile Roofing'],
      description: 'A beautiful heritage-style home blending traditional architecture with modern comfort.',
      color: 'blue'
    },
    {
      id: 4,
      title: 'Elegant Living Villa',
      location: 'Paruthipattu',
      type: 'Residential',
      area: '1,500 sqft',
      floors: '2 Floors',
      completedDate: 'September 2023',
      image: c4,
      images: [c4, c4_1, c4_2], // Single image, no slider needed
      features: ['Solar Panels', 'Rainwater Harvesting', 'Organic Garden', 'Natural Ventilation'],
      description: 'An eco-friendly farmhouse designed for sustainable living with renewable energy.',
      color: 'red'
    },
    {
      id: 5,
      title: 'Harmony Residence',
      location: 'Paruthipattu',
      type: 'Residential',
      area: '1,100 sqft',
      floors: '2 Floors',
      completedDate: 'August 2023',
      image: c5,
      images: [c5, c5_1, c5_2, c5_3, c5_4], // Add more images as available
      features: ['Clubhouse', 'Gym', 'Children\'s Play Area', 'Security'],
      description: 'A premium apartment complex with world-class amenities and modern design.',
      color: 'blue'
    },
    {
      id: 6,
      title: 'Premium Lifestyle Villa',
      location: 'Paruthipattu',
      type: 'Residential',
      area: '860 sqft',
      floors: '2 Floors',
      completedDate: 'July 2023',
      image: c6,
      images: [c6, c6_1, c6_2], // Add more images as available
      features: ['Food Court', 'Retail Spaces', 'Entertainment Zone', 'Parking'],
      description: 'Complete renovation of a shopping mall with modern retail spaces and facilities.',
      color: 'red'
    },
    {
      id: 7,
      title: 'Lavish Family Retreat',
      location: 'VGN Crofton',
      type: 'Residential',
      area: '1750 sqft',
      floors: '2 Floors',
      completedDate: 'July 2023',
      image: c7,
      images: [c7, c7_1, c7_2], // Add more images as available
      features: ['Food Court', 'Retail Spaces', 'Entertainment Zone', 'Parking'],
      description: 'Complete renovation of a shopping mall with modern retail spaces and facilities.',
      color: 'blue'
    },
    {
      id: 8,
      title: 'Residential Haven',
      location: 'Paruthipattu',
      type: 'Residential',
      area: '1586 sqft',
      floors: '2 Floors',
      completedDate: 'July 2023',
      image: c8,
      images: [c8, c8_1, c8_2, c8_3, c8_4, c8_5], // Add more images as available
      features: ['Food Court', 'Retail Spaces', 'Entertainment Zone', 'Parking'],
      description: 'Complete renovation of a shopping mall with modern retail spaces and facilities.',
      color: 'red'
    },
    {
      id: 9,
      title: 'Boutique Family Home',
      location: 'Urbantree site',
      type: 'Residential',
      area: '1500 sq.ft',
      floors: '2 Floors',
      completedDate: 'July 2023',
      image: c9,
      images: [c9, c9_1, c9_2, c9_3], // Add more images as available
      features: ['Food Court', 'Retail Spaces', 'Entertainment Zone', 'Parking'],
      description: 'Complete renovation of a shopping mall with modern retail spaces and facilities.',
      color: 'blue'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="projects-page"
    >
      <ProjectsSection projects={completedProjects} type="completed" />
    </motion.div>
  );
};

export default CompletedProjectsPage;
