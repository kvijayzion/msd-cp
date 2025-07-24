import React from 'react';

interface NavbarProps {
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode }) => {
  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${
      isDarkMode
        ? 'bg-gray-900/80 border-gray-700/30'
        : 'bg-white/80 border-gray-200/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold bg-clip-text text-transparent transition-all duration-500 ${
              isDarkMode
                ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400'
                : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600'
            }`}>
              MySillyDreams
            </h1>
          </div>

          {/* Navigation items can be added here in the future */}
          <div className="flex items-center space-x-4">
            {/* Placeholder for future nav items */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;