import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useMotionValue } from 'framer-motion';
import '../styles/InteriorProcess.css';

const PathFollower = ({ d, progress, gradientId, ballSize = 20 }) => {
  const pathRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [pathLength, setPathLength] = useState(1);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    const unsub = progress.on('change', (t) => {
      if (!pathRef.current) return;
      const L = Math.max(0, Math.min(1, t)) * pathLength;
      const pt = pathRef.current.getPointAtLength(L);
      x.set(pt.x - ballSize / 2);
      y.set(pt.y - ballSize / 2);
    });
    if (pathRef.current) {
      const L0 = Math.max(0, Math.min(1, progress.get?.() ?? 0)) * pathLength;
      const pt0 = pathRef.current.getPointAtLength(L0);
      x.set(pt0.x - ballSize / 2);
      y.set(pt0.y - ballSize / 2);
    }
    return () => unsub && unsub();
  }, [pathLength, progress, x, y, ballSize]);

  return (
    <div className="timeline-path-container">
      <svg width="100" height="100%" viewBox="0 0 100 1200" className="timeline-svg">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4169E1" />
            <stop offset="50%" stopColor="#FF4444" />
            <stop offset="100%" stopColor="#4169E1" />
          </linearGradient>
        </defs>
        <path 
          ref={pathRef} 
          d={d} 
          stroke={`url(#${gradientId})`} 
          strokeWidth="4" 
          fill="none" 
          strokeDasharray="10,5"
        />
      </svg>

      <motion.div
        className="timeline-ball"
        style={{ width: ballSize, height: ballSize, x, y }}
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            '0 0 10px rgba(65,105,225,0.5)',
            '0 0 20px rgba(255,68,68,0.6)',
            '0 0 10px rgba(65,105,225,0.5)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="timeline-ball-inner" />
      </motion.div>
    </div>
  );
};

const InteriorProcess = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We start with a detailed discussion about your vision, requirements, budget, and timeline to understand your unique needs.',
      icon: '💬',
      color: 'blue'
    },
    {
      step: '02',
      title: 'Site Visit & Measurement',
      description: 'Our team visits your space to take precise measurements, assess the structure, and capture photos for accurate planning.',
      icon: '📐',
      color: 'red'
    },
    {
      step: '03',
      title: 'Design Development',
      description: 'We create detailed 3D designs, mood boards, and material selections that bring your vision to life.',
      icon: '🎨',
      color: 'blue'
    },
    {
      step: '04',
      title: 'Proposal & Agreement',
      description: 'We present a comprehensive proposal with detailed quotations, timelines, and terms for your approval.',
      icon: '📋',
      color: 'red'
    },
    {
      step: '05',
      title: 'Project Execution',
      description: 'Our skilled craftsmen begin the transformation process with regular quality checks and progress updates.',
      icon: '🔨',
      color: 'blue'
    },
    {
      step: '06',
      title: 'Final Handover',
      description: 'After thorough quality inspection, we hand over your beautifully transformed space ready to enjoy.',
      icon: '🏠',
      color: 'red'
    }
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setVisibleItems((prev) => {
          if (prev < processSteps.length) return prev + 1;
          clearInterval(timer);
          return prev;
        });
      }, 400);
      return () => clearInterval(timer);
    }
  }, [isInView, processSteps.length]);

  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ['start center', 'end center'] 
  });

  const timelinePath = 'M 50 0 Q 30 200 50 400 Q 70 600 50 800 Q 30 1000 50 1200';

  return (
    <section className="interior-process-section">
      <div className="interior-container">
        <motion.div 
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            animate={isInView ? { scale: [0.9, 1.05, 1] } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            Our Design Process
          </motion.h2>
          <motion.div
            className="header-underline"
            initial={{ width: 0 }}
            animate={isInView ? { width: '150px' } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <p>From concept to completion, we follow a structured approach to deliver exceptional results</p>
        </motion.div>

        <div ref={containerRef} className="process-timeline-wrapper">
          <PathFollower 
            d={timelinePath} 
            progress={scrollYProgress} 
            gradientId="processGradient" 
          />

          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`process-step ${step.color}`}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={visibleItems > index ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2, 
                  type: 'spring', 
                  stiffness: 100 
                }}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="step-number"

                >
                  {step.step}
                </motion.div>

                <motion.div 
                  className="step-icon"


                >
                  {step.icon}
                </motion.div>

                <div className="step-content">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={visibleItems > index ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={visibleItems > index ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    {step.description}
                  </motion.p>
                </div>

                {index < processSteps.length - 1 && (
                  <motion.div 
                    className="step-connector"
                    initial={{ scale: 0 }}
                    animate={visibleItems > index ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    whileHover={{ scale: 1.5 }}
                  />
                )}

                <motion.div 
                  className="step-glow"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorProcess;