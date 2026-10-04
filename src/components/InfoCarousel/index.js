import React, { useState, useEffect } from 'react';
import './index.css';

export default function InfoCarousel() {
    const slides = [
        {
            title: "Modern Gurukul Campus",
            text: "Sprawling campus nestled in nature, providing balanced focus maps.",
            image: "https://t3.ftcdn.net/jpg/02/84/36/48/360_F_284364895_3uU4w7qfgaBtBD0ugtA1SVgXHQJ5kL8d.jpg"
        },
        {
            title: "Advanced Computing Lab",
            text: "Equipped with workstations supporting advanced research.",
            image: "https://dixitcollegeoflaw.in/image/facilities/computer-lab.jpg"
        },
        {
            title: "Smart-Class Systems",
            text: "Integrated multimedia lecture halls configured for hybrid learning.",
            image: "https://t4.ftcdn.net/jpg/21/91/87/57/360_F_2191875707_pfzonbATqHvkZLK3m1Iek7WVzmw2M6Ln.jpg"
        }
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const autoScrollTimer = setInterval(() => {
            setIndex((prevIndex) => {
                return prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
            });
        }, 2000);

        return () => clearInterval(autoScrollTimer);
    }, [slides.length]);
    return (
        <div>
            <div className="section-header">
                <h1 className="section-title "> At Tulas, we always ask, “What’s the secret to making school awesome?”</h1>
                <p className="section-subtitle"> The secret to making one's school experience truly unforgettable? It’s all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover. When students are inspired, they don’t just learn—they grow, explore, and shape their own futures.
                    There, we cracked it!</p>
            </div>
            <div className="showcase-strip">

                <div className="carousel-shell">

                    <button
                        className="nav-arrow left-arrow"
                        onClick={() => setIndex(index === 0 ? slides.length - 1 : index - 1)}
                    > ‹
                    </button>

                    <div className="carousel-slide-view">
                        <div className="slide-graphic-placeholder">
                            <img
                                src={slides[index].image}
                                alt="campus-img"
                                className="campus-img-element"
                            />
                        </div>

                        <div className="slide-content-placeholder">
                            <h3>{slides[index].title}</h3>
                            <p>{slides[index].text}</p>
                        </div>
                    </div>

                    <button
                        className="nav-arrow right-arrow"
                        onClick={() => setIndex(index === slides.length - 1 ? 0 : index + 1)}
                    > ›
                    </button>

                </div>
            </div>
        </div>
    );
}