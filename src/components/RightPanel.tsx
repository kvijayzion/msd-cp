import React, { useState } from 'react';
import { Package, Users, Star, Check, Plus, ShoppingCart } from 'lucide-react';
import ReelsSection from './ReelsSection';

interface RightPanelProps {
  isDarkMode: boolean;
}

interface PackageItem {
  id: string;
  name: string;
  price: number;
  checked: boolean;
}

const RightPanel: React.FC<RightPanelProps> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('package');
  const [packageItems, setPackageItems] = useState<PackageItem[]>([
    { id: '1', name: 'Premium Video Quality', price: 9.99, checked: true },
    { id: '2', name: 'Advanced Filters', price: 4.99, checked: false },
    { id: '3', name: 'Custom Thumbnails', price: 2.99, checked: true },
    { id: '4', name: 'Analytics Dashboard', price: 7.99, checked: false },
    { id: '5', name: 'Priority Support', price: 12.99, checked: true },
  ]);

  const reviews = [
    {
      id: '1',
      user: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      comment: 'Amazing quality and great features! Highly recommended.',
      date: '2 days ago'
    },
    {
      id: '2',
      user: 'Mike Chen',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 4,
      comment: 'Good value for money. The interface is intuitive and easy to use.',
      date: '1 week ago'
    },
    {
      id: '3',
      user: 'Emma Davis',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      comment: 'Excellent service and support. The premium features are worth it!',
      date: '2 weeks ago'
    }
  ];

  const tabs = [
    { id: 'package', label: 'Package Details', icon: Package },
    { id: 'reels', label: 'Reels & Recommendations', icon: Users },
    { id: 'reviews', label: 'Reviews', icon: Star },
  ];

  const togglePackageItem = (id: string) => {
    setPackageItems(items =>
      items.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const getTotalPrice = () => {
    return packageItems
      .filter(item => item.checked)
      .reduce((total, item) => total + item.price, 0);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? 'text-yellow-400 fill-yellow-400'
            : isDarkMode
              ? 'text-gray-600'
              : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div
      className={`h-[calc(100vh-6rem)] rounded-3xl transition-all duration-500 ${
        isDarkMode
          ? 'bg-gray-800'
          : 'bg-white'
      }`}
      style={{
        boxShadow: isDarkMode
          ? `
            20px 20px 60px rgba(0, 0, 0, 0.5),
            inset -8px -8px 20px rgba(255, 255, 255, 0.02),
            inset 8px 8px 20px rgba(0, 0, 0, 0.3)
          `
          : `
            20px 20px 60px rgba(0, 0, 0, 0.1),
            inset -8px -8px 20px rgba(255, 255, 255, 0.1),
            inset 8px 8px 20px rgba(0, 0, 0, 0.05)
          `
      }}
    >
      {/* Tab Navigation */}
      <div className="flex p-6 border-b border-opacity-20 border-gray-300">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 mr-2 ${
                isDarkMode
                  ? isActive 
                    ? 'bg-gray-700' 
                    : 'bg-gray-800'
                  : isActive 
                    ? 'bg-gray-100' 
                    : 'bg-gray-50'
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
                      4px 4px 12px rgba(0, 0, 0, 0.4),
                      -4px -4px 12px rgba(255, 255, 255, 0.02)
                    `
                    : `
                      4px 4px 12px rgba(0, 0, 0, 0.1),
                      -4px -4px 12px rgba(255, 255, 255, 0.8)
                    `
              }}
            >
              <Icon className={`w-5 h-5 ${
                isActive
                  ? isDarkMode
                    ? 'text-purple-400'
                    : 'text-indigo-600'
                  : isDarkMode
                    ? 'text-gray-400'
                    : 'text-gray-600'
              }`} />
              <span className={`text-sm font-medium ${
                isActive
                  ? isDarkMode
                    ? 'text-purple-400'
                    : 'text-indigo-600'
                  : isDarkMode
                    ? 'text-gray-400'
                    : 'text-gray-600'
              }`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {activeTab === 'package' && (
          <div className="space-y-6">
            <h3 className={`text-xl font-semibold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Package Details
            </h3>
            
            <div className="space-y-4">
              {packageItems.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                    isDarkMode
                      ? 'bg-gray-700'
                      : 'bg-gray-50'
                  }`}
                  style={{
                    boxShadow: isDarkMode
                      ? `
                        4px 4px 12px rgba(0, 0, 0, 0.4),
                        -4px -4px 12px rgba(255, 255, 255, 0.02)
                      `
                      : `
                        4px 4px 12px rgba(0, 0, 0, 0.1),
                        -4px -4px 12px rgba(255, 255, 255, 0.8)
                      `
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => togglePackageItem(item.id)}
                      className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        item.checked
                          ? isDarkMode
                            ? 'bg-purple-600'
                            : 'bg-indigo-600'
                          : isDarkMode
                            ? 'bg-gray-600'
                            : 'bg-gray-200'
                      }`}
                      style={{
                        boxShadow: item.checked
                          ? isDarkMode
                            ? `
                              inset 2px 2px 6px rgba(0, 0, 0, 0.4),
                              inset -2px -2px 6px rgba(255, 255, 255, 0.02)
                            `
                            : `
                              inset 2px 2px 6px rgba(0, 0, 0, 0.1),
                              inset -2px -2px 6px rgba(255, 255, 255, 0.9)
                            `
                          : isDarkMode
                            ? `
                              2px 2px 6px rgba(0, 0, 0, 0.4),
                              -2px -2px 6px rgba(255, 255, 255, 0.02)
                            `
                            : `
                              2px 2px 6px rgba(0, 0, 0, 0.1),
                              -2px -2px 6px rgba(255, 255, 255, 0.8)
                            `
                      }}
                    >
                      {item.checked && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </button>
                    <span className={`font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.name}
                    </span>
                  </div>
                  <span className={`font-semibold ${
                    isDarkMode ? 'text-purple-400' : 'text-indigo-600'
                  }`}>
                    ${item.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Total and Add to Cart */}
            <div
              className={`p-6 rounded-2xl ${
                isDarkMode
                  ? 'bg-gray-700'
                  : 'bg-gray-50'
              }`}
              style={{
                boxShadow: isDarkMode
                  ? `
                    8px 8px 20px rgba(0, 0, 0, 0.4),
                    -8px -8px 20px rgba(255, 255, 255, 0.02)
                  `
                  : `
                    8px 8px 20px rgba(0, 0, 0, 0.1),
                    -8px -8px 20px rgba(255, 255, 255, 0.8)
                  `
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-lg font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Total:
                </span>
                <span className={`text-2xl font-bold ${
                  isDarkMode ? 'text-purple-400' : 'text-indigo-600'
                }`}>
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
              
              <button
                className={`w-full flex items-center justify-center space-x-2 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isDarkMode
                    ? 'bg-purple-600 text-white'
                    : 'bg-indigo-600 text-white'
                }`}
                style={{
                  boxShadow: isDarkMode
                    ? `
                      6px 6px 16px rgba(0, 0, 0, 0.4),
                      -6px -6px 16px rgba(255, 255, 255, 0.02)
                    `
                    : `
                      6px 6px 16px rgba(0, 0, 0, 0.2),
                      -6px -6px 16px rgba(255, 255, 255, 0.8)
                    `
                }}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'reels' && (
          <ReelsSection isDarkMode={isDarkMode} />
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <h3 className={`text-xl font-semibold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              User Reviews
            </h3>
            
            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className={`p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                    isDarkMode
                      ? 'bg-gray-700'
                      : 'bg-gray-50'
                  }`}
                  style={{
                    boxShadow: isDarkMode
                      ? `
                        6px 6px 16px rgba(0, 0, 0, 0.4),
                        -6px -6px 16px rgba(255, 255, 255, 0.02)
                      `
                      : `
                        6px 6px 16px rgba(0, 0, 0, 0.1),
                        -6px -6px 16px rgba(255, 255, 255, 0.8)
                      `
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={review.avatar}
                        alt={review.user}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`font-semibold ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {review.user}
                        </h4>
                        <span className={`text-sm ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {review.date}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-1 mb-3">
                        {renderStars(review.rating)}
                      </div>
                      
                      <p className={`${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {review.comment}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightPanel;