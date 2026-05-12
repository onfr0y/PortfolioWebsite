// src/components/BlurredBackground.jsx
import React from 'react';

const BlurredBackground = ({ children }) => {
  return (
    <div className="relative" style={{ backgroundColor: 'var(--theme-bg)' }}>
      {children}
    </div>
  );
};

export default BlurredBackground;