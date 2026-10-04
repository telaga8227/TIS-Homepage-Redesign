import React from 'react';
import './index.css';

export default function SportsGrid() {
    const activities = [
        { name: 'ARCHERY', label: 'Precision Training Tracks', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxw8tByxJd8Njus9QR0ygee5xYeeHUmDmecsDneYxvhQM3IXcy_Jl5Ez0&s=10" },
        { name: 'CYCLING', label: 'Cross-Country Dirt Trails', image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:452,cw:1796,ch:1796,q:80,w:1796/WXZQnTcQHyt2igzrwhNUyW.jpg" },
        { name: 'HOCKEY', label: 'National Standard Turf Layout', image: "https://t3.ftcdn.net/jpg/08/15/66/90/360_F_815669037_Mvme8X08L72375TGe8m6uMiaib2bR1X4.jpg" },
        { name: 'SWIMMING', label: 'Olympic Dimension Pools', image: "https://t3.ftcdn.net/jpg/01/01/35/48/360_F_101354877_HTDiO6GwD9xi62BOGKOGwZnEQBibbMlj.jpg" }
    ];

    return (
        <section className="sports-section">
            <div className="section-header">
                <h2 className="section-title">Sports</h2>
                <p className="section-subtitle">It’s not just a facility. At Tulas it’s the foundation!
                    16+ sports curated to bring joy and discipline to your life..</p>
            </div>
            <div className="sports-grid-layout">
                {activities.map((act) => (
                    <div key={act.name} className="sport-card-frame">
                        <div className="sport-visual-stub">
                            <img src={act.image} alt={act.name} className="image" />
                        </div>
                        <div className="sport-meta-layer">
                            <h3>{act.name}</h3>
                            <p>{act.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
