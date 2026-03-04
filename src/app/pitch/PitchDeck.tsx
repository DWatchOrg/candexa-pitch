'use client'

import React, { useState, useEffect, useCallback } from 'react';
import './PitchDeck.css';

// Import all slides
import CoverSlide from './slides/CoverSlide';
import BrokenSlide from './slides/BrokenSlide';
import InsightSlide from './slides/InsightSlide';
import ShiftSlide from './slides/ShiftSlide';
import ProductSlide from './slides/ProductSlide';
import ProofSlide from './slides/ProofSlide';
import MarketSlide from './slides/MarketSlide';
import WhySlide from './slides/WhySlide';
import BusinessModelSlide from './slides/BusinessModelSlide';
import CloseSlide from './slides/CloseSlide';
import Future from './slides/Future';

export default function PitchDeck() {
  const [current, setCurrent] = useState(0);
  
  // Easily rearrange slides here
  const slides: React.FC<{isActive?: boolean}>[] = [
    CoverSlide,
    BrokenSlide,
    InsightSlide,
    ShiftSlide,
    ProductSlide,
    ProofSlide,
    MarketSlide,
    WhySlide,
    Future,
    BusinessModelSlide,
    CloseSlide
  ];

  const total = slides.length;

  const goTo = useCallback((index: number) => {
    setCurrent(Math.max(0, Math.min(total - 1, index)));
  }, [total]);

  const changeSlide = useCallback((dir: number) => {
    goTo(current + dir);
  }, [current, goTo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if(e.key === 'ArrowRight' || e.key === 'ArrowDown') changeSlide(1);
      if(e.key === 'ArrowLeft' || e.key === 'ArrowUp') changeSlide(-1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [changeSlide]);

  return (
    <div className="deck-wrapper">
      <div className="deck-viewport" id="deck">
        {/* Render the slides directly with isActive prop so they can control their own visibility based on CSS */}
        {slides.map((SlideComponent, index) => (
          <SlideComponent 
            key={index}
            isActive={index === current}
          />
        ))}
      </div>

      <div className="nav-bar">
        <button 
          className="nav-btn" 
          onClick={() => changeSlide(-1)} 
          disabled={current === 0}
        >
          ← Prev
        </button>
        
        <div className="nav-dots">
          {slides.map((_, i) => (
            <div 
              key={`dot-${i}`}
              className={`nav-dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        
        <span className="slide-counter">
          {current + 1} / {total}
        </span>
        
        <button 
          className="nav-btn" 
          onClick={() => changeSlide(1)}
          disabled={current === total - 1}
        >
          Next →
        </button>

        <button 
          className="nav-btn" 
          onClick={() => window.print()}
          style={{ background: '#555', marginLeft: '12px' }}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}
