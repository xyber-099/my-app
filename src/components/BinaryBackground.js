import React, { useEffect } from 'react';
import '../styles.css'; // Import your styles here

const BinaryBackground = () => {
  useEffect(() => {
    const binaryContainer = document.querySelector('.binary-container');
    const numBinaryItems = 5000; // Adjust the number of binary items as needed

    for (let i = 0; i < numBinaryItems; i++) {
      const binary = document.createElement('div');
      binary.classList.add('binary');
      binary.textContent = Math.random() < 0.5 ? '0' : '1';
      binary.classList.add(i % 2 === 0 ? 'clockwise' : 'anticlockwise');
      binaryContainer.appendChild(binary);
    }
  }, []);

  return <div className="binary-container"></div>;
};

export default BinaryBackground;
