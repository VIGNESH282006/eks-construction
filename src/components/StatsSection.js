import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../styles/StatsSection.css';

const stats = [
  { end: 18, suffix: '+', label: 'Years Experience' },
  { end: 200, suffix: '+', label: 'Happy Clients' },
  { end: 350, suffix: '+', label: 'Projects Completed' },
  { end: 15, suffix: '+', label: 'Awards & Recognition' }
];

export default function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="stats-section" ref={ref}>
      <h1 className="stats-heading">Our Expertise</h1>
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div className="stat-card" key={i}>
            <span className="stat-number">
              {inView ? (
                <CountUp end={stat.end} suffix={stat.suffix} duration={2} />
              ) : (
                `${stat.end}${stat.suffix}`
              )}
            </span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
