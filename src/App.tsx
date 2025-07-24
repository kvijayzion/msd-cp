import React from 'react';
import { Moon, Sun, User, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${
      isDarkMode
        ? 'bg-gray-900/90 border-gray-700/30'
        : 'bg-white/90 border-gray-200/30'
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

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`relative group p-2.5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
                isDarkMode
                  ? 'bg-gray-800/80'
                  : 'bg-gray-100/80'
              }`}
              style={{
                boxShadow: isDarkMode
                  ? `
                    4px 4px 12px rgba(0, 0, 0, 0.4),
                    -4px -4px 12px rgba(255, 255, 255, 0.02),
                    inset 2px 2px 4px rgba(0, 0, 0, 0.2),
                    inset -2px -2px 4px rgba(255, 255, 255, 0.05)
                  `
                  : `
                    4px 4px 12px rgba(0, 0, 0, 0.1),
                    -4px -4px 12px rgba(255, 255, 255, 0.8),
                    inset 2px 2px 4px rgba(0, 0, 0, 0.05),
                    inset -2px -2px 4px rgba(255, 255, 255, 0.9)
                  `
              }}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400 transition-all duration-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 transition-all duration-300" />
              )}
            </button>

            {/* Profile */}
            <button
              className={`relative group p-2.5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
                isDarkMode
                  ? 'bg-gray-800/80'
                  : 'bg-gray-100/80'
              }`}
              style={{
                boxShadow: isDarkMode
                  ? `
                    4px 4px 12px rgba(0, 0, 0, 0.4),
                    -4px -4px 12px rgba(255, 255, 255, 0.02),
                    inset 2px 2px 4px rgba(0, 0, 0, 0.2),
                    inset -2px -2px 4px rgba(255, 255, 255, 0.05)
                  `
                  : `
                    4px 4px 12px rgba(0, 0, 0, 0.1),
                    -4px -4px 12px rgba(255, 255, 255, 0.8),
                    inset 2px 2px 4px rgba(0, 0, 0, 0.05),
                    inset -2px -2px 4px rgba(255, 255, 255, 0.9)
                  `
              }}
            >
              <User className={`w-5 h-5 transition-all duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;