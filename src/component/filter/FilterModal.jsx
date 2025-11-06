import React, { useState } from 'react';

/**
 * This component injects the CSS for the crumpled paper effect
 * directly into the document head using a <style> tag.
 */
const CrumpledStyles = () => (
  <style>
    {`
      .crumpled-paper {
        position: relative;
        filter: drop-shadow(0 15px 10px rgba(0, 0, 0, 0.3));
        overflow: hidden;
      }

      .crumpled-paper::before {
        content: '';
        position: absolute;
        top: -5%;
        left: -5%;
        width: 110%;
        height: 110%;
        background: radial-gradient(
          circle at 10% 10%,
          rgba(255, 255, 255, 0.05) 0%,
          transparent 20%
        );
        pointer-events: none;
        mix-blend-mode: overlay;
        z-index: 10;
      }

      .crumpled-paper::after {
        content: '';
        position: absolute;
        bottom: -5%;
        right: -5%;
        width: 110%;
        height: 110%;
        background: radial-gradient(
          circle at 90% 90%,
          rgba(0, 0, 0, 0.05) 0%,
          transparent 20%
        );
        pointer-events: none;
        mix-blend-mode: multiply;
        z-index: 10;
      }

      .crumpled-paper {
        box-shadow:
          inset 0 0 10px rgba(0, 0, 0, 0.05),
          inset 0 0 20px rgba(0, 0, 0, 0.05),
          inset 0 0 30px rgba(0, 0, 0, 0.05),
          inset 0 0 40px rgba(0, 0, 0, 0.05),
          inset 0 0 50px rgba(0, 0, 0, 0.05),
          inset 0 0 60px rgba(0, 0, 0, 0.05),
          inset 0 0 70px rgba(0, 0, 0, 0.05),
          inset 0 0 80px rgba(0, 0, 0, 0.05),
          inset 5px 5px 15px rgba(0, 0, 0, 0.02),
          inset -5px -5px 15px rgba(0, 0, 0, 0.02),
          inset 10px -10px 20px rgba(0, 0, 0, 0.02),
          inset -10px 10px 20px rgba(0, 0, 0, 0.02);
      }
    `}
  </style>
);

const FilterModal = ({ isOpen, onClose, onFilterChange }) => {
  const [selectedTech, setSelectedTech] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const technologies = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Node.js',
    'MongoDB',
    'Git',
    'Figma',
    'Vite'
  ];

  const categories = [
    'Web Development',
    'Frontend Design',
    'Full Stack',
    'Mobile Apps',
    'UI/UX Design',
    'E-commerce',
    'Portfolio'
  ];

  const handleTechToggle = (tech) => {
    setSelectedTech(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(prev => prev === category ? '' : category);
  };

  const handleApply = () => {
    onFilterChange({ technologies: selectedTech, category: selectedCategory });
    onClose();
  };

  const handleReset = () => {
    setSelectedTech([]);
    setSelectedCategory('');
    onFilterChange({ technologies: [], category: '' });
  };

  if (!isOpen) return null;

  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleDateString('en-US', { 
      month: '2-digit', 
      day: '2-digit', 
      year: 'numeric' 
    });
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    }).toUpperCase();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Inject crumpled paper styles */}
      <CrumpledStyles />
      
      {/* Receipt Modal - Blond Style */}
      <div 
        className="relative bg-white max-w-md w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 rounded-lg font-sans text-black crumpled-paper"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-gray-600 transition-colors z-20"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Section 1: Header */}
        <header className="text-center mb-8">
          <h1 className="text-7xl sm:text-8xl font-bold tracking-tighter">
            skills
          </h1>
          <p className="text-base sm:text-lg font-medium tracking-[0.2em] mt-2 text-gray-900">
            PORTFOLIO FILTER
          </p>
        </header>
        
        {/* Section 2: Date/Time */}
        <section className="flex justify-between font-mono text-xs sm:text-sm my-8">
          <span>{getCurrentDate()}</span>
          <span>{getCurrentTime()}</span>
        </section>
        
        {/* Section 3: Technologies Tracklist */}
        <section className="font-mono text-sm sm:text-base mb-6">
          <div className="text-xs uppercase mb-3 text-gray-600">TECHNOLOGIES</div>
          <ul className="space-y-2">
            {technologies.map((tech) => {
              const isSelected = selectedTech.includes(tech);
              return (
                <li key={tech}>
                  <button
                    onClick={() => handleTechToggle(tech)}
                    className="w-full flex justify-between hover:bg-gray-50 transition-colors py-1"
                  >
                    <span className={isSelected ? 'font-semibold' : ''}>{tech.toUpperCase()}</span>
                    <span>{isSelected ? '✓' : '○'}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Section 4: Categories Tracklist */}
        <section className="font-mono text-sm sm:text-base mb-6">
          <div className="text-xs uppercase mb-3 text-gray-600">CATEGORIES</div>
          <ul className="space-y-2">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <li key={category}>
                  <button
                    onClick={() => handleCategorySelect(category)}
                    className="w-full flex justify-between hover:bg-gray-50 transition-colors py-1"
                  >
                    <span className={isSelected ? 'font-semibold' : ''}>{category.toUpperCase()}</span>
                    <span>{isSelected ? '✓' : '○'}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
        
        {/* Section 5: Total Selected */}
        <section className="flex font-mono text-sm sm:text-base font-medium mt-8 pt-4 border-t border-dashed border-gray-400">
          <span>TOTAL</span>
          <span className="flex-1 text-center">SELECTED</span>
          <span>{selectedTech.length + (selectedCategory ? 1 : 0)}</span>
        </section>
        
        {/* Section 6: Action Buttons */}
        <section className="flex gap-3 mt-6 font-mono">
          <button
            onClick={handleReset}
            className="flex-1 px-4 py-2 text-xs text-black bg-white border border-black hover:bg-gray-100 transition-colors uppercase tracking-wide"
          >
            Reset
          </button>
          <button
            onClick={handleApply}
            className="flex-1 px-4 py-2 text-xs text-white bg-black hover:bg-gray-800 transition-colors uppercase tracking-wide"
          >
            Apply
          </button>
        </section>
        
        {/* Section 7: Credits */}
        <footer className="text-center text-xs text-gray-700 mt-8 space-y-1">
          <p>FILTER YOUR PORTFOLIO PROJECTS</p>
          <p>BY TECHNOLOGY AND CATEGORY</p>
        </footer>
      </div>
    </div>
  );
};

export default FilterModal;
