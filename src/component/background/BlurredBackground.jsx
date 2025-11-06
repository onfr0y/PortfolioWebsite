// src/components/BlurredBackground.jsx
import React from 'react';

const BlurredBackground = ({ children }) => {
  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden bg-white"
    >
      {/* Content div - allow scrolling */}
      <div className="relative z-10 h-full overflow-y-auto bg-white">
        {children}
      </div>
    </div>
  );
};

export default BlurredBackground;