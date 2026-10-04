import React, { useState, useEffect } from 'react';
import './index.css';

export default function Hero({ onNavigate, isEvaOpen, setIsEvaOpen }) {
  const inquiryMessages = [
    "Admissions are now live for the academic session 2026-27!",
    "Looking for Fee Details? Click the Admission menu above.",
    "Want to check on sports facilities? Click Sports Infrastructure.",
    "Need urgent help? Reach our direct hotline at +91-9837983791."
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % inquiryMessages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [inquiryMessages.length]);

  return (
    <div className="official-tulas-hero">

      <div className="hero-left-content">
        <span className="welcome-tagline-text">Welcome to Tula's Legacy</span>
        <h1 className="main-headline-brand">LET'S DO IT <br /><span className="sub-headline-brand">With Tula's</span></h1>
        <p className="editorial-desc-text">
          We feel supported in what we do and nudged further to do more. At Tula's, we believe in bringing out the best in every student—whether it's academics, music, art, or drama.
        </p>
        <div className="actions-button-row">
          <button onClick={() => onNavigate('REGISTRATION GUIDE')} className="official-white-cta-btn">
            Admission Registration Guide
          </button>
        </div>
      </div>

      <div className="hero-right-graphics">
        <div className="graphic-circle-capsule top-circle-position">
          <div className="circle-content-overlay-layer sport-accent-gradient">
            <span className="circle-inner-pic">
            </span>
            <h4>Academic Hub &</h4>
            <h3>Sports Arenas</h3>
          </div>
        </div>


        <div className="graphic-circle-capsule bottom-circle-position">
          <div className="circle-content-overlay-layer dance-accent-gradient">
            <span className="circle-inner-pic">
            </span>
            <h4>Performing Arts &</h4>
            <h3>Cultural Life</h3>
          </div>
        </div>
      </div>

      <div className="vertical-left-eva-dock-frame">
        <button className="eva-vertical-pill-trigger-btn" onClick={() => setIsEvaOpen(!isEvaOpen)}>
          <span className="eva-avatar-dot-indicator">👩‍💼</span>
          <div className="eva-trigger-text-pane">
            <h6>Hey! I am Eva,</h6>
            <p>your virtual assistant. <span>Chat</span></p>
          </div>
        </button>

        {isEvaOpen && (
          <div className="eva-chat-window-flyout-left">
            <div className="chat-window-header-teal">
              <div className="chat-header-profile">
                <span className="chat-avatar-dot">👩‍💼</span>
                <div>
                  <h5>Eva Assistant</h5>
                  <p>Online & Ready</p>
                </div>
              </div>
              <button className="chat-close-x-btn" onClick={() => setIsEvaOpen(false)}>✕</button>
            </div>
            <div className="chat-window-body">
              <div className="school-branding-badge">
                <strong>🏫 Tula's International School</strong>
                <p>Welcome to India's Premium Boarding School.</p>
              </div>
              <p className="chat-welcome-text">
                Live inquiry updates:
              </p>
              <p className="live-message-transition" key={messageIndex}>
                🔔 {inquiryMessages[messageIndex]}
              </p>
            </div>
          </div>
        )}
      </div>

    </div >
  );
}