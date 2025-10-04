import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/OurWorks.css';

const projectTabs = [
  {
    key: 'completed',
    tabLabel: 'Completed Projects',
    icon: '🏗️',
    bgImage: require('../assets/images/completed-header.png'),
    title: 'Completed Projects',
    subtitle: 'Finished & Delivered',
    description:
      'View our successfully completed construction projects that showcase our expertise and commitment to quality craftsmanship.',
    exploreLink: '/completed-projects',
    exploreClass: 'explore-btn-completed',
  },
  {
    key: 'ongoing',
    tabLabel: 'Ongoing Projects',
    icon: '⚡',
    bgImage: require('../assets/images/ongoing-header.png'),
    title: 'Ongoing Projects',
    subtitle: 'Currently in Progress',
    description:
      'Take a look at our current active projects and witness the progress of our construction endeavors in real-time.',
    exploreLink: '/ongoing-projects',
    exploreClass: 'explore-btn-ongoing',
  },
  {
    key: 'upcoming',
    tabLabel: 'Upcoming Projects',
    icon: '🔧',
    bgImage: require('../assets/images/upcoming-header.png'),
    title: 'Upcoming Projects',
    subtitle: 'Planned & Scheduled',
    description:
      "Discover our upcoming construction projects and get a preview of what's next in our pipeline of excellence.",
    exploreLink: '/upcoming-projects',
    exploreClass: 'explore-btn-upcoming',
  },
];

const designSteps = [
  { id: 1, title: 'Initial Consultation', desc: 'Discussion about vision, requirements, budget, and timeline.', icon: '💬' },
  { id: 2, title: 'Site Visit & Measurement', desc: 'Precise measurements, structural assessment, and photos.', icon: '📐' },
  { id: 3, title: 'Design Development', desc: '3D designs, mood boards, and material selections.', icon: '🎨' },
  { id: 4, title: 'Proposal & Agreement', desc: 'Proposal with quotations, timelines, and terms.', icon: '📄' },
  { id: 5, title: 'Project Execution', desc: 'Craftsmen begin work with quality checks and updates.', icon: '🔨' },
  { id: 6, title: 'Final Handover', desc: 'Quality inspection and handover of the transformed space.', icon: '🏠' },
];

export default function OurWorks() {
  const [activeKey, setActiveKey] = useState('completed');
  const active = projectTabs.find((t) => t.key === activeKey);

  const markerRef = useRef(null);

  // Scroll-linked marker & reveal
  useEffect(() => {
    const markerEl = markerRef.current;
    const steps = designSteps.length;
    const section = document.querySelector('.design-process-curve');
    const sectionRect = section.getBoundingClientRect();
    const sectionTop = sectionRect.top + window.scrollY;

    const stepGap = 180;
    const totalHeight = (steps - 1) * stepGap;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((scrollY + windowHeight/2 - sectionTop) / totalHeight, 0), 1);

      // Position marker
      if (markerEl) {
        markerEl.style.top = `${150 + progress * ((steps - 1) * stepGap)}px`;
      }

      // Reveal cards
      designSteps.forEach((_, i) => {
        const cardEl = document.querySelector(`.step-card[data-step="${i + 1}"]`);
        if (cardEl && progress >= i / (steps - 1) - 0.15) {
          cardEl.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.setTimeout(onScroll, 150); // Trigger on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

      {/* Hero */}
      <div className="works-hero" style={{ backgroundImage: `url(${active.bgImage})` }}>
        <div className="works-overlay" />
        <div className="works-text">
          <h1 className="works-title">{active.title}</h1>
          <h2 className="works-subtitle">{active.subtitle}</h2>
          <p className="works-description">{active.description}</p>
          <Link to={active.exploreLink} className={`cta-button ${active.exploreClass}`}>
            {active.tabLabel}
          </Link>
        </div>
      </div>

      {/* Vertical Timeline */}
      <section className="design-process-curve">
        <svg viewBox="0 0 100 1200" className="curve-svg">
          {/* Vertical line at center */}
          <line
            x1="50"
            y1="120"
            x2="50"
            y2="1150"
            stroke="#e0e0e0"
            strokeWidth="4"
          />
        </svg>
        {/* Marker */}
        <div ref={markerRef} className="marker" style={{
          left: 'calc(50% - 12px)',
          top: 150,
        }} />
        {/* Step Cards */}
        {designSteps.map((step, i) => {
          const side = i % 2 === 0 ? 'left' : 'right';
          const verticalPosition = 150 + i * 180; // vertical spacing

          return (
            <div
              key={step.id}
              data-step={step.id}
              className={`step-card ${side}`}
              style={{
                top: verticalPosition,
                left: side === 'left' ? 'calc(50% - 430px)' : 'calc(50% + 50px)',
              }}
            >
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
