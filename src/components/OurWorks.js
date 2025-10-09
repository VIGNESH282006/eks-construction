import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/OurWorks.css';

// Import your project components
import CompletedProjectsPage from '../pages/CompletedProjectsPage';
import OngoingProjectsPage from '../pages/OngoingProjectsPage'; 
import UpcomingProjectsPage from '../pages/UpcomingProjectsPage';

const projectTabs = [
  {
    key: 'completed',
    tabLabel: 'Completed Projects',
    bgImage: require('../assets/images/completed-header.png'),
    title: 'Completed Projects',
    subtitle: 'Finished & Delivered',
    description: 'View our successfully completed construction projects that showcase our expertise and commitment to quality craftsmanship.',
    component: CompletedProjectsPage
  },
  {
    key: 'ongoing',
    tabLabel: 'Ongoing Projects',
    bgImage: require('../assets/images/ongoing-header.png'),
    title: 'Ongoing Projects',
    subtitle: 'Currently in Progress',
    description: 'Take a look at our current active projects and witness the progress of our construction endeavors in real-time.',
    component: OngoingProjectsPage
  },
  {
    key: 'upcoming',
    tabLabel: 'Upcoming Projects',
    bgImage: require('../assets/images/upcoming-header.png'),
    title: 'Upcoming Projects',
    subtitle: 'Planned & Scheduled',
    description: "Discover our upcoming construction projects and get a preview of what's next in our pipeline of excellence.",
    component: UpcomingProjectsPage
  },
];

export default function OurWorks() {
  // Start with completed projects as default
  const [activeKey, setActiveKey] = useState('completed');
  const active = projectTabs.find((t) => t.key === activeKey);
  const ActiveComponent = active.component;

  return (
    <div className="our-works-page">
      {/* Tabs */}
      <div className="service-tabs">
        {projectTabs.map((tab) => (
          <button
            key={tab.key}
            className={`tab${tab.key === activeKey ? ' active' : ''}`}
            onClick={() => setActiveKey(tab.key)}
          >
            <span className="tab-icon">{tab.icon}</span>
            {tab.tabLabel}
          </button>
        ))}
      </div>

      {/* Hero Section - NO BUTTON */}
      <div className="works-hero" style={{ backgroundImage: `url(${active.bgImage})` }}>
        <div className="works-overlay" />
        <div className="works-text">
          <motion.h1 
            className="works-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {active.title}
          </motion.h1>
          <motion.h2 
            className="works-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {active.subtitle}
          </motion.h2>
          <motion.p 
            className="works-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {active.description}
          </motion.p>
          {/* REMOVED THE BUTTON */}
        </div>
      </div>

      {/* Render the active component's content */}
      <motion.div
        key={activeKey}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <ActiveComponent />
      </motion.div>

      {/* REMOVED THE ENTIRE TIMELINE SECTION */}
    </div>
  );
}
