import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSection from '../components/ProjectsSection';
import '../styles/ProjectsPage.css';

import c1 from '../assets/images/completed/1.jpg';
import c2 from '../assets/images/completed/2.png';
import c3 from '../assets/images/completed/3.png';
import c4 from '../assets/images/completed/4.png';
import c5 from '../assets/images/completed/5.png';
import c6 from '../assets/images/completed/6.png';
import c7 from '../assets/images/completed/7.png';
import c8 from '../assets/images/completed/8.png';
import c9 from '../assets/images/completed/9.jpg';

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
      image: c1,
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


      {/* Projects Section */}
      <ProjectsSection projects={completedProjects} type="completed" />

    </motion.div>
  );
};

export default CompletedProjectsPage;
