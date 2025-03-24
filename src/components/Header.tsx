import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mainMenu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Apply", path: "/application", isButton: false },
    { name: "Contact", path: "/contact" },
  ];

  const dropdownMenu = [
    { name: "Events", path: "/events" },
    { name: "Facilities", path: "/facilities" },
    { name: "Incubation", path: "/incubation" },
    { name: "Advisory Board", path: "/advisory-board" },
    { name: "Partners", path: "/partners" },
    { name: "Industry", path: "/industry" },
    { name: "Startups", path: "/startups" },
  ];

  return (
    <header className="z-1000">
      <nav className="bg-white dark:bg-neutral-900 fixed w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <img className="h-20 w-20 mr-2 p-0 object-contain" style={{ filter: "drop-shadow(0px 0px 7px white)"}} src="/icon.png" alt="TBI Logo" />
              <span className="text-xl font-bold text-primary dark:text-white">TBI VIT Bhopal</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-4 relative">
              {mainMenu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    item.isButton
                      ? "bg-primary hover:bg-blue-700 text-white"
                      : "text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* More Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="block px-4 py-2 px-3 rounded-md text-sm font-medium transition-colors duration-200  bg-primary hover:bg-blue-700 text-white dark:hover:bg-neutral-800">More</button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-neutral-900 shadow-lg rounded-md py-2">
                    {dropdownMenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-neutral-900 shadow-lg">
            {[...mainMenu, ...dropdownMenu].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-neutral-800`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;