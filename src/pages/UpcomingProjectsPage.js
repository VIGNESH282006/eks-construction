import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSection from '../components/ProjectsSection';
import '../styles/ProjectsPage.css';

import project1 from '../assets/images/projects/ramesh.jpg';
import project2 from '../assets/images/projects/badusha.jpg';

const UpcomingProjectsPage = () => {
  const upcomingProjects = [
    {
      id: 1,
      title: 'Smart City Residential Complex',
      location: 'HITEC City, Hyderabad',
      type: 'Residential',
      area: '85,000 sqft',
      units: '80 Apartments',
      launchDate: 'January 2025',
      expectedStart: 'March 2025',
      estimatedBudget: '₹30 Crores',
      image: project1,
      features: ['Smart Home Automation', 'AI Security System', 'EV Charging Stations', 'Co-working Spaces'],
      description: 'A futuristic residential complex with cutting-edge smart home technology and amenities.',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Green Office Campus',
      location: 'Sarjapur Road, Bangalore',
      type: 'Commercial',
      area: '120,000 sqft',
      floors: '12 Floors',
      launchDate: 'February 2025',
      expectedStart: 'May 2025',
      estimatedBudget: '₹45 Crores',
      image: project2,
      features: ['LEED Certified', 'Vertical Gardens', 'Natural Lighting', 'Waste Management'],
      description: 'An eco-friendly office campus designed to achieve LEED Gold certification.',
      color: 'red'
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
      <ProjectsSection projects={upcomingProjects} type="upcoming" />

    </motion.div>
  );
};

export default UpcomingProjectsPage;
