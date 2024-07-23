import React, { useEffect } from 'react';
import '../styles.css'; // Import your styles here

const Header = () => {
  useEffect(() => {
    const animateText = () => {
      const cyber = document.querySelector('.cyber');
      const range = document.querySelector('.range');
      const development = document.querySelector('.development');

      if (cyber && range && development) {
        requestAnimationFrame(() => {
          cyber.style.animation = '';
          range.style.animation = '';
          development.style.animation = '';
        });
      }
    };

    const reloadContent = () => {
      const container = document.querySelector('.container');
      if (container) {
        const originalContent = container.innerHTML;
        container.innerHTML = '';
        requestAnimationFrame(() => {
          container.innerHTML = originalContent;
          animateText();
        });
      }
    };

    // Initial animation
    animateText();

    // Reload content every 6 seconds
    const interval = setInterval(reloadContent, 6000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className="glitch">
        <span className="cyber">Cyber</span>
        <span className="range">Range</span>
        <span className="development">Development</span>
      </h1>
    </div>
  );
};

export default Header;
