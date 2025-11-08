import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-[#F56042] font-bold text-xl tracking-wide">Sevaa™</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="text-gray-800 hover:text-[#F56042] transition duration-200">
              How it works
            </a>
            <a href="#services" className="text-gray-800 hover:text-[#F56042] transition duration-200">
              Services
            </a>
            <a href="#why-sevaa" className="text-gray-800 hover:text-[#F56042] transition duration-200">
              Why Sevaa
            </a>
            <a href="#faqs" className="text-gray-800 hover:text-[#F56042] transition duration-200">
              FAQS
            </a>
          </div>

          {/* Mobile Menu Button (optional) */}
          <div className="md:hidden">
            {/* You can add a hamburger menu here if needed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;