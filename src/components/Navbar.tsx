import React from 'react';
import { Moon, Sun, User, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${
      isDarkMode
        ? 'bg-gray-900/95 border-gray-700/30'
        : 'bg-white/95 border-gray-200/30'
    }`}>
      <div className="max-w-full mx-auto px-6 pl-28">
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
            {/* Profile */}
            <button
              className={`relative group p-1 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}
              style={{
                boxShadow: isDarkMode
                  ? `
                    6px 6px 16px rgba(0, 0, 0, 0.4),
                    -6px -6px 16px rgba(255, 255, 255, 0.02),
                    inset 2px 2px 4px rgba(0, 0, 0, 0.2),
                    inset -2px -2px 4px rgba(255, 255, 255, 0.05)
                  `
                  : `
                    6px 6px 16px rgba(0, 0, 0, 0.1),
                    -6px -6px 16px rgba(255, 255, 255, 0.8),
                    inset 2px 2px 4px rgba(0, 0, 0, 0.05),
                    inset -2px -2px 4px rgba(255, 255, 255, 0.9)
                  `
              }}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </button>

            {/* Cart */}
            <button
              className={`relative group p-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}
              style={{
                boxShadow: isDarkMode
                  ? `
                    6px 6px 16px rgba(0, 0, 0, 0.4),
                    -6px -6px 16px rgba(255, 255, 255, 0.02),
                    inset 2px 2px 4px rgba(0, 0, 0, 0.2),
                    inset -2px -2px 4px rgba(255, 255, 255, 0.05)
                  `
                  : `
                    6px 6px 16px rgba(0, 0, 0, 0.1),
                    -6px -6px 16px rgba(255, 255, 255, 0.8),
                    inset 2px 2px 4px rgba(0, 0, 0, 0.05),
                    inset -2px -2px 4px rgba(255, 255, 255, 0.9)
                  `
              }}
            >
              <ShoppingCart className={`w-5 h-5 transition-all duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`} />
              {/* Cart badge */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Separator */}
            <div className={`h-8 w-px ${
              isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
            }`} />

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`relative group p-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
                isDarkMode
                  ? 'bg-gray-800'
                  : 'bg-gray-100'
              }`}
              style={{
                boxShadow: isDarkMode
                  ? `
                    6px 6px 16px rgba(0, 0, 0, 0.4),
                    -6px -6px 16px rgba(255, 255, 255, 0.02),
                    inset 2px 2px 4px rgba(0, 0, 0, 0.2),
                    inset -2px -2px 4px rgba(255, 255, 255, 0.05)
                  `
                  : `
                    6px 6px 16px rgba(0, 0, 0, 0.1),
                    -6px -6px 16px rgba(255, 255, 255, 0.8),
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;