// src/components/ChatWidget.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../styles/ChatWidget.css';

// Initial icon (closed state)
import chatIconClosed from '../assets/images/chat-icon.jpg';
// Second icon (open/active state) — place your file in ../assets/images
import chatIconOpen from '../assets/images/chat-icon-open.jpg';

const ChatWidget = ({ whatsappNumber, emailAddress, phoneNumber }) => {
  const [visible, setVisible] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const widgetRef = useRef(null);

  // Reveal widget after some scrolling
  useEffect(() => {
    const handleScroll = () => setVisible(window.pageYOffset > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-open popup after visible for a moment
  useEffect(() => {
    let timer;
    if (visible) timer = setTimeout(() => setPopupOpen(true), 1200);
    return () => clearTimeout(timer);
  }, [visible]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setPopupOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const togglePopup = () => setPopupOpen((prev) => !prev);

  return (
    <>
      {visible && (
        <div className="chat-widget" ref={widgetRef}>
          {popupOpen && (
            <div className="chat-popup show">
              <div className="chat-popup-header">
                <span>Hi!! How can I help you?</span>
                <button
                  className="close-popup-btn"
                  onClick={() => setPopupOpen(false)}
                  aria-label="Close chat popup"
                >
                  ×
                </button>
              </div>
              <ul className="chat-options">
                <li>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`tel:${phoneNumber}`}>Phone</a>
                </li>
              </ul>
            </div>
          )}

          {/* Button with crossfade image */}
          <button
            className={`chat-button${popupOpen ? ' active' : ''}`}
            onClick={togglePopup}
            aria-label="Toggle chat options"
            // Optional hover crossfade for desktop
            onMouseEnter={() => !popupOpen && document.body.clientWidth > 1024 && (widgetRef.current?.classList.add('hovering'))}
            onMouseLeave={() => widgetRef.current?.classList.remove('hovering')}
          >
            <span className="chat-icon-stack" aria-hidden="true">
              <img src={chatIconClosed} alt="" className="chat-icon chat-icon--closed" />
              <img src={chatIconOpen} alt="" className="chat-icon chat-icon--open" />
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
