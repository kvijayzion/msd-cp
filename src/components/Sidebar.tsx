import React, { useState } from 'react';
import { Home, Grid3X3, Settings, Zap } from 'lucide-react';

interface SidebarProps {
  isDarkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isDarkMode }) => {
  const [activeItem, setActiveItem] = useState('home');

  const menuItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'categories', icon: Grid3X3, label: 'Categories' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full w-20 z-40 flex flex-col items-center justify-center transition-all duration-500 ${
      isDarkMode
        ? 'bg-gray-900'
        : 'bg-gray-50'
    }`}>
      {/* Logo */}
      <div className="absolute top-8">
        <div
          className={`p-4 rounded-full transition-all duration-300 hover:scale-105 ${
            isDarkMode
              ? 'bg-gray-800'
              : 'bg-white'
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
          <Zap className={`w-6 h-6 ${
            isDarkMode 
              ? 'text-purple-400' 
              : 'text-indigo-600'
          }`} />
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col space-y-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`group relative p-4 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${
                isDarkMode
                  ? isActive 
                    ? 'bg-gray-700' 
                    : 'bg-gray-800'
                  : isActive 
                    ? 'bg-gray-200' 
                    : 'bg-white'
              }`}
              style={{
                boxShadow: isActive
                  ? isDarkMode
                    ? `
                      inset 4px 4px 12px rgba(0, 0, 0, 0.4),
                      inset -4px -4px 12px rgba(255, 255, 255, 0.02)
                    `
                    : `
                      inset 4px 4px 12px rgba(0, 0, 0, 0.1),
                      inset -4px -4px 12px rgba(255, 255, 255, 0.9)
                    `
                  : isDarkMode
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
              <Icon className={`w-6 h-6 transition-all duration-300 ${
                isActive
                  ? isDarkMode
                    ? 'text-purple-400'
                    : 'text-indigo-600'
                  : isDarkMode
                    ? 'text-gray-400'
                    : 'text-gray-600'
              }`} />
              
              {/* Tooltip */}
              <div className={`absolute left-full ml-4 px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap ${
                isDarkMode
                  ? 'bg-gray-800 text-white border border-gray-700'
                  : 'bg-white text-gray-900 border border-gray-200 shadow-lg'
              }`}>
                {item.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;