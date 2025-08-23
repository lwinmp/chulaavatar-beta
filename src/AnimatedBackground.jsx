import React from 'react';
import './Background.css';

function AnimatedBackground() {
  return (
    <div className="animated-background">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="floating-shape"
          style={{
            width: `${20 + Math.random() * 60}px`,
            height: `${20 + Math.random() * 60}px`,
            backgroundColor: `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})`,
            borderRadius: Math.random() > 0.5 ? '50%' : '10px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      <div className="gradient-overlay" />
    </div>
  );
}

export default AnimatedBackground;
