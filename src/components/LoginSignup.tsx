import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';

interface LoginSignupProps {
  isDarkMode: boolean;
  onLogin: () => void;
}

const LoginSignup: React.FC<LoginSignupProps> = ({ isDarkMode, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const getNeomorphicStyle = (pressed = false, size = 'normal') => {
    const baseStyle = {
      transition: 'all 0.3s ease',
    };

    if (size === 'large') {
      return {
        ...baseStyle,
        boxShadow: isDarkMode
          ? pressed
            ? 'inset 8px 8px 20px rgba(0, 0, 0, 0.5), inset -8px -8px 20px rgba(255, 255, 255, 0.02)'
            : '12px 12px 30px rgba(0, 0, 0, 0.4), -12px -12px 30px rgba(255, 255, 255, 0.02)'
          : pressed
            ? 'inset 8px 8px 20px rgba(0, 0, 0, 0.1), inset -8px -8px 20px rgba(255, 255, 255, 0.9)'
            : '12px 12px 30px rgba(0, 0, 0, 0.1), -12px -12px 30px rgba(255, 255, 255, 0.8)'
      };
    }

    return {
      ...baseStyle,
      boxShadow: isDarkMode
        ? pressed
          ? 'inset 4px 4px 12px rgba(0, 0, 0, 0.5), inset -4px -4px 12px rgba(255, 255, 255, 0.02)'
          : '6px 6px 16px rgba(0, 0, 0, 0.4), -6px -6px 16px rgba(255, 255, 255, 0.02)'
        : pressed
          ? 'inset 4px 4px 12px rgba(0, 0, 0, 0.1), inset -4px -4px 12px rgba(255, 255, 255, 0.9)'
          : '6px 6px 16px rgba(0, 0, 0, 0.1), -6px -6px 16px rgba(255, 255, 255, 0.8)'
    };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  const handleGoogleLogin = () => {
    onLogin();
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-all duration-500 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div 
        className={`w-full max-w-md p-8 rounded-3xl transition-all duration-500 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}
        style={getNeomorphicStyle(false, 'large')}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold mb-2 bg-clip-text text-transparent ${
            isDarkMode
              ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400'
              : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600'
          }`}>
            MySillyDreams
          </h1>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {isLogin ? 'Welcome back!' : 'Create your account'}
          </p>
        </div>

        {/* Toggle Buttons */}
        <div 
          className={`flex p-1 rounded-2xl mb-8 ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
          }`}
          style={getNeomorphicStyle(true)}
        >
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
              isLogin
                ? isDarkMode
                  ? 'bg-gray-600 text-white'
                  : 'bg-white text-gray-900'
                : isDarkMode
                  ? 'text-gray-400'
                  : 'text-gray-600'
            }`}
            style={isLogin ? getNeomorphicStyle() : {}}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
              !isLogin
                ? isDarkMode
                  ? 'bg-gray-600 text-white'
                  : 'bg-white text-gray-900'
                : isDarkMode
                  ? 'text-gray-400'
                  : 'text-gray-600'
            }`}
            style={!isLogin ? getNeomorphicStyle() : {}}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Full Name
              </label>
              <div className="relative">
                <div 
                  className={`flex items-center rounded-2xl p-4 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                  style={getNeomorphicStyle(true)}
                >
                  <User className={`w-5 h-5 mr-3 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`flex-1 bg-transparent outline-none ${
                      isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter your full name"
                    required={!isLogin}
                  />
                </div>
              </div>
            </div>
          )}

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Email Address
            </label>
            <div className="relative">
              <div 
                className={`flex items-center rounded-2xl p-4 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}
                style={getNeomorphicStyle(true)}
              >
                <Mail className={`w-5 h-5 mr-3 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`flex-1 bg-transparent outline-none ${
                    isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Password
            </label>
            <div className="relative">
              <div 
                className={`flex items-center rounded-2xl p-4 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}
                style={getNeomorphicStyle(true)}
              >
                <Lock className={`w-5 h-5 mr-3 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`flex-1 bg-transparent outline-none ${
                    isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`ml-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 ${
              isDarkMode
                ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600'
            }`}
            style={getNeomorphicStyle()}
          >
            <span className="flex items-center justify-center">
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className={`absolute inset-0 flex items-center ${
              isDarkMode ? 'text-gray-600' : 'text-gray-400'
            }`}>
              <div className={`w-full border-t ${
                isDarkMode ? 'border-gray-600' : 'border-gray-300'
              }`} />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-4 ${
                isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'
              }`}>
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className={`w-full py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 ${
              isDarkMode
                ? 'bg-gray-700 text-white border border-gray-600'
                : 'bg-white text-gray-900 border border-gray-300'
            }`}
            style={getNeomorphicStyle()}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Continue with Google</span>
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className={`font-medium ${
                isDarkMode ? 'text-purple-400' : 'text-purple-600'
              } hover:underline`}
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;