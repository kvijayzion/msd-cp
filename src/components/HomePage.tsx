import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import VideoPlayer from './VideoPlayer';
import VideoPlayerSkeleton from './VideoPlayerSkeleton';
import RightPanel from './RightPanel';

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
        ? 'bg-gray-900' 
        : 'bg-gray-50'
    }`}>
      {/* Navbar */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Sidebar */}
      <Sidebar isDarkMode={isDarkMode} />

      {/* Main Content Area */}
      <div className="flex ml-20 pt-16">
        {/* Left Side - Video Player */}
        <div className="flex-shrink-0 p-4">
          {isLoading ? (
            <VideoPlayerSkeleton isDarkMode={isDarkMode} />
          ) : (
            <VideoPlayer isDarkMode={isDarkMode} />
          )}
        </div>

        {/* Right Side - Panel */}
        <div className="flex-1 p-4">
          <RightPanel isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;