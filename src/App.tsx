import React, { useState, useEffect } from 'react';
import LoginSignup from './components/LoginSignup';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoPlayer from './components/VideoPlayer';
import RightPanel from './components/RightPanel';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    const savedLoginState = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(savedLoginState === 'true');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  if (!isLoggedIn) {
    return <LoginSignup isDarkMode={isDarkMode} onLogin={handleLogin} />;
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Sidebar isDarkMode={isDarkMode} />
      
      <div className="flex pl-24 pt-4">
        <div className="w-96 p-4">
          <VideoPlayer isDarkMode={isDarkMode} />
        </div>
        <div className="flex-1 p-4 min-w-0">
          <RightPanel isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default App;