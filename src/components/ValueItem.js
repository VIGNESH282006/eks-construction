// src/components/ValueItem.jsx
import React, { useState } from 'react';
import '../styles/ValueItem.css';

export default function ValueItem({ img1, img2, title, description }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="value-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(!hovered)}
      style={{ cursor: 'pointer' }}
    >
      <img
        src={hovered ? img2 : img1}
        alt={title}
        className="why-choose-img"
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
