import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSection from '../components/ProjectsSection';
import '../styles/ProjectsPage.css';

const CompletedProjectsPage = () => {
  const completedProjects = [
    {
      id: 1,
      title: 'Luxury Villa - Whitefield',
      location: 'Bangalore, Karnataka',
      type: 'Residential',
      area: '3,500 sqft',
      bedrooms: '4 BHK',
      completedDate: 'March 2024',
      budget: '₹85 Lakhs',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
      features: ['Modern Architecture', 'Smart Home Features', 'Landscaped Garden', 'Swimming Pool'],
      description: 'A stunning modern villa with contemporary design elements and luxury amenities.',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Corporate Office Complex',
      location: 'Chennai, Tamil Nadu',
      type: 'Commercial',
      area: '12,000 sqft',
      floors: '4 Floors',
      completedDate: 'January 2024',
      budget: '₹2.5 Crores',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      features: ['Glass Facade', 'Central AC', 'Elevator', 'Parking Space'],
      description: 'A state-of-the-art office complex with modern facilities and eco-friendly features.',
      color: 'red'
    },
    {
      id: 3,
      title: 'Traditional Heritage Home',
      location: 'Mysore, Karnataka',
      type: 'Residential',
      area: '2,800 sqft',
      bedrooms: '3 BHK',
      completedDate: 'November 2023',
      budget: '₹65 Lakhs',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
      features: ['Traditional Design', 'Courtyard', 'Wooden Interiors', 'Tile Roofing'],
      description: 'A beautiful heritage-style home blending traditional architecture with modern comfort.',
      color: 'blue'
    },
    {
      id: 4,
      title: 'Eco-Friendly Farmhouse',
      location: 'Coimbatore, Tamil Nadu',
      type: 'Residential',
      area: '4,200 sqft',
      bedrooms: '5 BHK',
      completedDate: 'September 2023',
      budget: '₹95 Lakhs',
      image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&h=400&fit=crop',
      features: ['Solar Panels', 'Rainwater Harvesting', 'Organic Garden', 'Natural Ventilation'],
      description: 'An eco-friendly farmhouse designed for sustainable living with renewable energy.',
      color: 'red'
    },
    {
      id: 5,
      title: 'Modern Apartment Complex',
      location: 'Hyderabad, Telangana',
      type: 'Residential',
      area: '25,000 sqft',
      units: '20 Units',
      completedDate: 'August 2023',
      budget: '₹8 Crores',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop',
      features: ['Clubhouse', 'Gym', 'Children\'s Play Area', 'Security'],
      description: 'A premium apartment complex with world-class amenities and modern design.',
      color: 'blue'
    },
    {
      id: 6,
      title: 'Shopping Mall Renovation',
      location: 'Kochi, Kerala',
      type: 'Commercial',
      area: '18,000 sqft',
      floors: '3 Floors',
      completedDate: 'July 2023',
      budget: '₹3.2 Crores',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      features: ['Food Court', 'Retail Spaces', 'Entertainment Zone', 'Parking'],
      description: 'Complete renovation of a shopping mall with modern retail spaces and facilities.',
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
      <ProjectsSection projects={completedProjects} type="completed" />

    </motion.div>
  );
};

export default CompletedProjectsPage;
