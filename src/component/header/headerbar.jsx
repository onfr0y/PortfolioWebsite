import React, { useState } from 'react';
import FilterModal from '../filter/FilterModal';

function Headerbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const navItems = [
    { name: "ABOUT", href: "#about" },
    { name: "WORK", href: "#work" },
    { name: "RESEARCH", href: "#research" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CONTACT", href: "#contact" }
  ];

  const handleFilterChange = (filters) => {
    // Handle filter changes - can be passed to parent or used for filtering
    console.log('Filters applied:', filters);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <header
      className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6"
      style={{
        backgroundColor: 'var(--theme-bg)',
        color: 'var(--theme-text)',
        borderBottom: '1px solid var(--theme-border)',
      }}
    >
      {/* Left: Menu - Mobile */}
      <button 
        className="lg:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Left: Filter Button - Desktop */}
      <button 
        className="hidden lg:block cursor-pointer"
        onClick={() => setIsFilterOpen(true)}
        aria-label="Open filter"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      </button>

      {/* Center: Logo */}
      <div className="flex-1 flex justify-center lg:justify-start">
        <div className="text-xl sm:text-2xl font-bold tracking-tight">PORTFOLIO</div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-4 xl:gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-xs xl:text-sm font-medium hover:opacity-70 transition-opacity uppercase tracking-wide"
                style={{ color: 'var(--theme-text)' }}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden" style={{ marginTop: '64px' }}>
          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-2xl font-medium text-black hover:opacity-70 transition-opacity uppercase tracking-wide"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Filter Modal */}
      <FilterModal 
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onFilterChange={handleFilterChange}
      />
    </header>
  );
}

export default Headerbar;

