import React from 'react';

const Navbar = () => {
  return (
    // Sticky header with dark blue background and shadow
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Name / Logo */}
        <div className="text-2xl font-bold text-cyan-400 tracking-wider">
          <a href="#">Sanjana</a>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-8 text-slate-300 font-medium">
    
            <li>
              <a href="#works" className="hover:text-cyan-400 transition-colors duration-300">
                Works
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
};

export default Navbar;