import React, { useState } from 'react';
import './index.css';

export default function Navbar({ onNavigate, isMenuOpen, setIsMenuOpen }) {
    const [activeMenu, setActiveMenu] = useState(null);

    const menuTree = {
        'ABOUT TIS': ['Vision & Mission', 'Legacy', 'Headmaster Message'],
        'ACADEMICS': ['Curriculum', 'Faculty Matrix', 'Global Links'],
        'BOARDING LIFE': ['Pastoral Care', 'Food & Nutrition', 'Infirmary'],
        'BEYOND ACADEMICS': ['Sports Infrastructure', 'Clubs & Societies', 'Celebrations'],
        'ADMISSION': ['Fee Architecture', 'Registration Guide', 'Scholarship Matrix']
    };

    return (
        <div className="navigation-group">
            <div className="helpline-bar">
                <span className="phone-tag">
                    📞 ADMISSIONS HELPLINE NO: <strong>+91-9837983791</strong>
                </span>
                <button
                    onClick={() => onNavigate('REGISTRATION GUIDE')}
                    className="enquire-now-badge-btn"
                >
                    Enquire Now
                </button>
            </div>

            <nav className="navbar-core">
                <div className="nav-container">
                    <div className="brand-lockup" onClick={() => onNavigate('HOME')} style={{ cursor: 'pointer' }}>
                        <div className="brand-crest">🏫</div>
                        <div className="brand-text">
                            <span className="brand-title">TULA'S</span>
                            <span className="brand-subtitle">INTERNATIONAL SCHOOL</span>
                        </div>
                    </div>

                    <ul className="nav-links">
                        {Object.keys(menuTree).map((menu) => (
                            <li
                                key={menu}
                                onMouseEnter={() => setActiveMenu(menu)}
                                onMouseLeave={() => setActiveMenu(null)}
                                className="dropdown-trigger"
                            >
                                <button className="menu-btn">{menu} ▾</button>
                                {activeMenu === menu && (
                                    <ul className="dropdown-flyout">
                                        {menuTree[menu].map((item) => (
                                            <li key={item}>
                                                <button
                                                    className="dropdown-item-btn"
                                                    onClick={() => { onNavigate(item.toUpperCase()); setActiveMenu(null); }}
                                                >
                                                    {item}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}

                        <li className="inline-navbar-hamburger-item">
                            <button
                                className="inline-nav-menu-toggle-btn"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle Navigation Panel"
                            >
                                <span className="hamburger-icon-lines">☰</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}