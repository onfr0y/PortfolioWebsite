import React from 'react';

function Headerbar() {
  const navItems = ["About", "Work", "Experience", "Contact"];

  return (
    // The component now only returns the header element, making it reusable.
    <header className="w-full max-w-4xl flex items-center justify-center p-3 px-8 bg-white/50 backdrop-blur-lg rounded-full border border-gray-200 shadow-lg">
      <nav>
        <ul className="flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item}>
              <a href="#" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Headerbar;

