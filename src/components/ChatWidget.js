import React, { useState, useEffect, useRef } from 'react';
import '../styles/ChatWidget.css';
import chatIcon from '../assets/images/chat-icon.jpg';

const ChatWidget = ({ whatsappNumber, emailAddress, phoneNumber }) => {
  const [visible, setVisible] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let timer;
    if (visible) {
      timer = setTimeout(() => setPopupOpen(true), 1200);
    }
    return () => clearTimeout(timer);
  }, [visible]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setPopupOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {visible && (
        <div className="chat-widget" ref={widgetRef}>
          {/* Popup placed above the button */}
          <div className={`chat-popup${popupOpen ? ' show' : ''}`}>
            <div className="chat-popup-header">
              Hi!! How can I help you?
            </div>
            <ul className="chat-options">
              <li>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </li>
              <li>
                <a href={`mailto:${emailAddress}`}>Email</a>
              </li>
              <li>
                <a href={`tel:${phoneNumber}`}>Phone</a>
              </li>
            </ul>
          </div>
          {/* Button with icon */}
          <button
            className={`chat-button${popupOpen ? ' active' : ''}`}
            onClick={() => setPopupOpen(prev => !prev)}
            aria-label="Toggle chat options"
          >
            <img src={chatIcon} alt="Chat Bot" className="chat-icon" />
          </button>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
