import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Navbar from './Navbar';
import VideoPlayer from './VideoPlayer';
import VideoPlayerSkeleton from './VideoPlayerSkeleton';

const HomePage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900' 
        : 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'
    }`}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isDarkMode ? 'bg-black bg-opacity-30' : 'bg-black bg-opacity-10'
      }`}></div>
      
      {/* Animated Background Elements */}
      <div className={`absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse transition-all duration-500 ${
        isDarkMode 
          ? 'bg-purple-600 bg-opacity-20' 
          : 'bg-white bg-opacity-10'
      }`}></div>
      <div className={`absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-500 ${
        isDarkMode 
          ? 'bg-indigo-600 bg-opacity-20' 
          : 'bg-pink-400 bg-opacity-20'
      }`}></div>

      {/* Dark Mode Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={toggleDarkMode}
          className={`relative group p-3 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${
            isDarkMode
              ? 'bg-gray-800/80 backdrop-blur-sm'
              : 'bg-white/20 backdrop-blur-sm'
          }`}
          style={{
            boxShadow: isDarkMode
              ? `
                6px 6px 16px rgba(0, 0, 0, 0.4),
                -6px -6px 16px rgba(255, 255, 255, 0.05),
                inset 2px 2px 4px rgba(0, 0, 0, 0.2),
                inset -2px -2px 4px rgba(255, 255, 255, 0.1)
              `
              : `
                6px 6px 16px rgba(0, 0, 0, 0.15),
                -6px -6px 16px rgba(255, 255, 255, 0.3),
                inset 2px 2px 4px rgba(0, 0, 0, 0.1),
                inset -2px -2px 4px rgba(255, 255, 255, 0.8)
              `
          }}
        >
          <div className="relative">
            {isDarkMode ? (
              <Sun className={`w-6 h-6 transition-all duration-300 ${
                isDarkMode ? 'text-yellow-400' : 'text-white'
              }`} />
            ) : (
              <Moon className={`w-6 h-6 transition-all duration-300 ${
                isDarkMode ? 'text-blue-400' : 'text-white'
              }`} />
            )}
          </div>
          
          {/* Glow effect */}
          <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10 ${
            isDarkMode
              ? 'bg-gradient-to-r from-yellow-400/30 to-orange-400/30'
              : 'bg-gradient-to-r from-blue-400/30 to-purple-400/30'
          }`}></div>
        </button>
      </div>

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar isDarkMode={isDarkMode} />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {isLoading ? (
          <VideoPlayerSkeleton isDarkMode={isDarkMode} />
        ) : (
          <VideoPlayer isDarkMode={isDarkMode} />
        )}
      </div>

      {/* Floating Elements */}
      <div className={`absolute top-20 right-20 w-4 h-4 rounded-full animate-bounce delay-300 transition-all duration-500 ${
        isDarkMode ? 'bg-purple-400/40' : 'bg-white/30'
      }`}></div>
      <div className={`absolute bottom-32 left-16 w-3 h-3 rounded-full animate-bounce delay-700 transition-all duration-500 ${
        isDarkMode ? 'bg-indigo-400/40' : 'bg-pink-300/40'
      }`}></div>
      <div className={`absolute top-1/3 left-8 w-2 h-2 rounded-full animate-bounce delay-1000 transition-all duration-500 ${
        isDarkMode ? 'bg-pink-400/50' : 'bg-indigo-300/50'
      }`}></div>
    </div>
  );
};

export default HomePage;