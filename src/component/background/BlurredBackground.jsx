// src/components/BlurredBackground.jsx
import React from 'react';

// No import needed for the image

const BlurredBackground = ({ children }) => {
  return (
    <div
      className="relative h-screen w-screen"
      style={{
        // Paste the URL directly here
        backgroundImage: 'url("https://i.pinimg.com/736x/4e/cc/cd/4ecccd985e7d747005fa67622afb082c.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Blur and overlay div */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/30"></div>
      
      {/* Content div */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BlurredBackground;