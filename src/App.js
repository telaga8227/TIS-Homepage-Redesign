import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/index.js';
import Content from './components/Content/index.js';
import SportsGrid from './components/SportsGrid/index.js';
import InfoCarousel from './components/InfoCarousel/index.js';
import AdmissionsPortal from './components/AdmissionsPortal/index.js';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState('HOME');
  const [isEvaOpen, setIsEvaOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const calcScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height > 0) setScrollProgress((window.scrollY / height) * 100);
    };
    window.addEventListener('scroll', calcScroll);
    return () => window.removeEventListener('scroll', calcScroll);
  }, []);

  const handleRouteNavigation = (targetPageName) => {
    setCurrentPage(targetPageName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="global-root-viewport-container">
      <div className="top-indicator-bar" style={{ width: `${scrollProgress}%` }} />

      <a
        href="https://www.whatsapp.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="global-lower-left-vertical-whatsapp-badge"
        aria-label="Chat via WhatsApp"
      >
        <img
          src="https://img.magnific.com/premium-vector/vector-whatsapp-social-media-logo_1093524-447.jpg?semt=ais_hybrid&w=740&q=80"
          alt="WhatsApp Link"
          className="whatsapp-image-asset-vertical"
        />
      </a>

      <Navbar
        onNavigate={handleRouteNavigation}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        {currentPage === 'HOME' ? (
          <>
            <Content onNavigate={handleRouteNavigation} isEvaOpen={isEvaOpen} setIsEvaOpen={setIsEvaOpen} />
            <SportsGrid />
            <InfoCarousel />
          </>
        ) : (
          <div className="separate-page-layout fade-view">
            <div className="subpage-hero-banner">
              <h2>{currentPage} Dashboard</h2>
              <p>Direct isolated data dashboard view tracker for Tula's programs.</p>
            </div>
            <div className="subpage-body-container">
              <button className="subpage-return-btn" onClick={() => handleRouteNavigation('HOME')}>
                ← Return to Home Dashboard
              </button>
            </div>
          </div>
        )}
        <AdmissionsPortal />
      </main>

      {isMenuOpen && (
        <div className="responsive-full-navigation-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="navigation-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header-row">
              <h4>Explore Pathways Matrix</h4>
              <button className="close-drawer-x-btn" onClick={() => setIsMenuOpen(false)}>✕</button>
            </div>
            <ul className="drawer-nav-links-list">
              <li><button onClick={() => handleRouteNavigation('HOME')}> Home Dashboard</button></li>
              <li><button onClick={() => handleRouteNavigation('VISION & MISSION')}> Vision & Mission</button></li>
              <li><button onClick={() => handleRouteNavigation('CURRICULUM')}> Academic Curriculum</button></li>
              <li><button onClick={() => handleRouteNavigation('SPORTS INFRASTRUCTURE')}> Sports Arenas</button></li>
              <li><button onClick={() => handleRouteNavigation('FEE ARCHITECTURE')}> Fee Structure Matrix</button></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

