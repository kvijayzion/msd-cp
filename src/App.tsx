import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import HomePage from './components/HomePage';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Check for saved theme preference or default to light mode
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleGoogleLogin = () => {
    setIsLoggingIn(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoggingIn(false);
    }, 2000);
  };

  // If user is logged in, show home page
  if (isLoggedIn) {
    return <HomePage />;
  }

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
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
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl animate-pulse delay-500 transition-all duration-500 ${
        isDarkMode 
          ? 'bg-pink-600 bg-opacity-15' 
          : 'bg-indigo-400 bg-opacity-15'
      }`}></div>

      {/* Dark Mode Toggle */}
      <div className="absolute top-6 right-6 z-20">
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

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Main Login Card */}
          <div 
            className={`rounded-3xl p-8 shadow-2xl border transition-all duration-500 ${
              isDarkMode
                ? 'bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border-gray-700/30'
                : 'bg-gradient-to-br from-gray-100/90 to-gray-200/90 backdrop-blur-xl border-white/20'
            }`}
            style={{
              boxShadow: isDarkMode
                ? `
                  20px 20px 60px rgba(0, 0, 0, 0.5),
                  inset -8px -8px 20px rgba(255, 255, 255, 0.02),
                  inset 8px 8px 20px rgba(0, 0, 0, 0.3)
                `
                : `
                  20px 20px 60px rgba(0, 0, 0, 0.15),
                  inset -8px -8px 20px rgba(255, 255, 255, 0.1),
                  inset 8px 8px 20px rgba(0, 0, 0, 0.05)
                `
            }}
          >
            {/* Logo */}
            <div className="text-center mb-12">
              <h1 className={`text-4xl font-bold bg-clip-text text-transparent mb-2 transition-all duration-500 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400'
                  : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600'
              }`}>
                MySillyDreams
              </h1>
              <div className={`w-16 h-1 rounded-full mx-auto transition-all duration-500 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400'
                  : 'bg-gradient-to-r from-indigo-500 to-pink-500'
              }`}></div>
            </div>

            {/* Welcome Text */}
            <div className="text-center mb-10">
              <h2 className={`text-2xl font-semibold mb-3 transition-colors duration-500 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-800'
              }`}>
                Welcome Back
              </h2>
              <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Sign in to your account to continue your journey with us
              </p>
            </div>

            {/* Google Login Button */}
            <div className="mb-8">
              <button
                onClick={handleGoogleLogin}
                className="w-full relative group"
              >
                <div 
                  className={`w-full rounded-2xl p-4 flex items-center justify-center space-x-3 transition-all duration-300 group-hover:scale-[1.02] group-active:scale-[0.98] ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  }`}
                  style={{
                    boxShadow: isDarkMode
                      ? `
                        8px 8px 20px rgba(0, 0, 0, 0.4),
                        -8px -8px 20px rgba(255, 255, 255, 0.02),
                        inset 2px 2px 4px rgba(0, 0, 0, 0.2),
                        inset -2px -2px 4px rgba(255, 255, 255, 0.05)
                      `
                      : `
                        8px 8px 20px rgba(0, 0, 0, 0.1),
                        -8px -8px 20px rgba(255, 255, 255, 0.8),
                        inset 2px 2px 4px rgba(0, 0, 0, 0.05),
                        inset -2px -2px 4px rgba(255, 255, 255, 0.9)
                      `
                  }}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className={`font-medium text-lg transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Continue with Google
                  </span>
                </div>
                
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-indigo-500/30'
                    : 'bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20'
                }`}></div>
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className={`flex-1 h-px transition-all duration-500 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-transparent via-gray-600 to-transparent'
                  : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'
              }`}></div>
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center shadow-inner transition-all duration-500 ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-gray-700 to-gray-800'
                    : 'bg-gradient-to-br from-indigo-100 to-pink-100'
                }`}
              >
                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-purple-400 to-pink-400'
                    : 'bg-gradient-to-br from-indigo-400 to-pink-400'
                }`}></div>
              </div>
              <div className={`flex-1 h-px transition-all duration-500 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-transparent via-gray-600 to-transparent'
                  : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'
              }`}></div>
            </div>

            {/* Footer Text */}
            <div className="text-center">
              <p className={`text-xs leading-relaxed transition-colors duration-500 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-500'
              }`}>
                By continuing, you agree to our{' '}
                <span className={`cursor-pointer font-medium transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-purple-400 hover:text-purple-300' 
                    : 'text-indigo-600 hover:text-indigo-700'
                }`}>
                  Terms of Service
                </span>{' '}
                and{' '}
                <span className={`cursor-pointer font-medium transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-purple-400 hover:text-purple-300' 
                    : 'text-indigo-600 hover:text-indigo-700'
                }`}>
                  Privacy Policy
                </span>
              </p>
            </div>
          </div>

          {/* Additional Decorative Card */}
          <div className="mt-6 text-center">
            <div 
              className={`inline-block backdrop-blur-sm rounded-2xl px-6 py-3 text-sm transition-all duration-500 ${
                isDarkMode
                  ? 'bg-gray-800/30 text-gray-300'
                  : 'bg-white/20 text-white'
              }`}
              style={{
                boxShadow: isDarkMode
                  ? `
                    4px 4px 12px rgba(0, 0, 0, 0.3),
                    -4px -4px 12px rgba(255, 255, 255, 0.02)
                  `
                  : `
                    4px 4px 12px rgba(0, 0, 0, 0.1),
                    -4px -4px 12px rgba(255, 255, 255, 0.1)
                  `
              }}
            >
              <div className="flex items-center space-x-2">
                {isLoggingIn ? (
                  <>
                    <div className={`w-6 h-6 border-2 border-t-transparent rounded-full animate-spin ${
                      isDarkMode ? 'border-gray-300' : 'border-gray-600'
                    }`}></div>
                    <span>Logging in...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span>Continue with Google</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className={\`absolute top-20 right-20 w-4 h-4 rounded-full animate-bounce delay-300 transition-all duration-500 ${
        isDarkMode ? 'bg-purple-400/40' : 'bg-white/30'
      }`}></div>
      <div className={\`absolute bottom-32 left-16 w-3 h-3 rounded-full animate-bounce delay-700 transition-all duration-500 ${
        isDarkMode ? 'bg-indigo-400/40' : 'bg-pink-300/40'
      }`}></div>
      <div className={\`absolute top-1/3 left-8 w-2 h-2 rounded-full animate-bounce delay-1000 transition-all duration-500 ${
        isDarkMode ? 'bg-pink-400/50' : 'bg-indigo-300/50'
      }`}></div>
    </div>
  );
}

export default App;