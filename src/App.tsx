import React, { useState, useEffect } from 'react';
import { Moon, Sun, User, ShoppingCart, Home, Grid3X3, Settings, Play, Heart, MessageCircle, Share, Star, Check } from 'lucide-react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('package');
  const [activeReelsTab, setActiveReelsTab] = useState('live');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const packageItems = [
    { id: 1, name: 'Premium Video Quality', price: 29.99 },
    { id: 2, name: 'HD Audio Enhancement', price: 19.99 },
    { id: 3, name: 'Custom Filters Pack', price: 15.99 },
    { id: 4, name: 'Advanced Editing Tools', price: 39.99 },
    { id: 5, name: 'Cloud Storage (100GB)', price: 24.99 },
  ];

  const toggleItem = (id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const totalPrice = selectedItems.reduce((sum, id) => {
    const item = packageItems.find(item => item.id === id);
    return sum + (item?.price || 0);
  }, 0);

  const reelsData = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    thumbnail: `https://images.pexels.com/photos/${1000000 + i * 100000}/pexels-photo-${1000000 + i * 100000}.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop`,
    views: Math.floor(Math.random() * 1000000),
    likes: Math.floor(Math.random() * 50000),
  }));

  const reviews = [
    { id: 1, name: 'Sarah Johnson', rating: 5, comment: 'Amazing quality and features! Highly recommended.', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { id: 2, name: 'Mike Chen', rating: 4, comment: 'Great value for money. The editing tools are fantastic.', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { id: 3, name: 'Emily Davis', rating: 5, comment: 'Perfect for content creators. Love the cloud storage feature.', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
  ];

  const getNeomorphicStyle = (pressed = false) => ({
    boxShadow: isDarkMode
      ? pressed
        ? 'inset 4px 4px 8px rgba(0, 0, 0, 0.5), inset -4px -4px 8px rgba(255, 255, 255, 0.05)'
        : '6px 6px 12px rgba(0, 0, 0, 0.4), -6px -6px 12px rgba(255, 255, 255, 0.02)'
      : pressed
        ? 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.9)'
        : '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)'
  });

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Navbar */}
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
                className={`relative group p-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
                style={getNeomorphicStyle()}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400 transition-all duration-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600 transition-all duration-300" />
                )}
              </button>

              {/* Profile */}
              <button
                className={`relative group p-1 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
                style={getNeomorphicStyle()}
              >
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </button>

              {/* Cart */}
              <button
                className={`relative group p-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
                style={getNeomorphicStyle()}
              >
                <ShoppingCart className={`w-5 h-5 transition-all duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`} />
                {selectedItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {selectedItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Left Sidebar */}
        <div className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col items-center space-y-4 p-4 rounded-2xl transition-all duration-500 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`} style={getNeomorphicStyle()}>
          {/* Logo */}
          <div className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
          }`} style={getNeomorphicStyle()}>
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
          </div>

          {/* Navigation Buttons */}
          {[
            { icon: Home, label: 'Home' },
            { icon: Grid3X3, label: 'Categories' },
            { icon: Settings, label: 'Settings' }
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="relative group">
              <button
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${
                  isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                }`}
                style={getNeomorphicStyle()}
              >
                <Icon className={`w-5 h-5 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`} />
              </button>
              <div className={`absolute left-full ml-3 px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'
              }`}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex ml-20">
          {/* Video Player Section */}
          <div className="w-80 p-4">
            <div className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`} style={getNeomorphicStyle()}>
              <div className="aspect-[9/16] bg-gradient-to-br from-purple-500 to-pink-500 relative">
                <img
                  src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </button>
                </div>
                
                {/* Video Controls */}
                <div className="absolute bottom-4 right-4 flex flex-col space-y-3">
                  <button className="bg-black/30 backdrop-blur-sm rounded-full p-2 hover:bg-black/50 transition-all duration-300">
                    <Heart className="w-6 h-6 text-white" />
                  </button>
                  <button className="bg-black/30 backdrop-blur-sm rounded-full p-2 hover:bg-black/50 transition-all duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </button>
                  <button className="bg-black/30 backdrop-blur-sm rounded-full p-2 hover:bg-black/50 transition-all duration-300">
                    <Share className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex-1 p-4">
            <div className={`h-full rounded-2xl transition-all duration-500 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`} style={getNeomorphicStyle()}>
              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                {[
                  { id: 'package', label: 'Package Details' },
                  { id: 'reels', label: 'Reels & Recommendations' },
                  { id: 'reviews', label: 'Reviews' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-4 font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? isDarkMode
                          ? 'text-purple-400 border-b-2 border-purple-400'
                          : 'text-purple-600 border-b-2 border-purple-600'
                        : isDarkMode
                          ? 'text-gray-400 hover:text-gray-300'
                          : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 h-full overflow-y-auto">
                {activeTab === 'package' && (
                  <div className="space-y-4">
                    <h3 className={`text-xl font-bold mb-6 ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      Select Package Items
                    </h3>
                    
                    {packageItems.map(item => (
                      <div
                        key={item.id}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                          isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                        }`}
                        style={getNeomorphicStyle(selectedItems.includes(item.id))}
                      >
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => toggleItem(item.id)}
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                              selectedItems.includes(item.id)
                                ? 'bg-purple-500 border-purple-500'
                                : isDarkMode
                                  ? 'border-gray-500 hover:border-purple-400'
                                  : 'border-gray-300 hover:border-purple-500'
                            }`}
                          >
                            {selectedItems.includes(item.id) && (
                              <Check className="w-3 h-3 text-white" />
                            )}
                          </button>
                          <span className={`font-medium ${
                            isDarkMode ? 'text-white' : 'text-gray-800'
                          }`}>
                            {item.name}
                          </span>
                        </div>
                        <span className={`font-bold ${
                          isDarkMode ? 'text-purple-400' : 'text-purple-600'
                        }`}>
                          ${item.price}
                        </span>
                      </div>
                    ))}

                    <div className={`mt-6 p-4 rounded-xl ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                    }`} style={getNeomorphicStyle()}>
                      <div className="flex justify-between items-center mb-4">
                        <span className={`text-lg font-bold ${
                          isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                          Total: ${totalPrice.toFixed(2)}
                        </span>
                      </div>
                      <button
                        disabled={selectedItems.length === 0}
                        className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                          selectedItems.length > 0
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 active:scale-95'
                            : isDarkMode
                              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                        style={selectedItems.length > 0 ? getNeomorphicStyle() : {}}
                      >
                        Add to Cart ({selectedItems.length} items)
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'reels' && (
                  <div>
                    {/* Sub-tab Navigation */}
                    <div className="flex mb-6">
                      {[
                        { id: 'live', label: 'Live Reels' },
                        { id: 'recommendations', label: 'Recommendations' }
                      ].map(tab => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveReelsTab(tab.id)}
                          className={`px-4 py-2 rounded-xl mr-2 font-medium transition-all duration-300 ${
                            activeReelsTab === tab.id
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                              : isDarkMode
                                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                          style={activeReelsTab === tab.id ? {} : getNeomorphicStyle()}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {/* Reels Grid */}
                    <div className="grid grid-cols-3 gap-4">
                      {reelsData.map(reel => (
                        <div
                          key={reel.id}
                          className={`relative aspect-[9/16] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                            isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                          }`}
                          style={getNeomorphicStyle()}
                        >
                          <img
                            src={reel.thumbnail}
                            alt={`Reel ${reel.id}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-2 left-2 right-2">
                            <div className="flex items-center justify-between text-white text-xs">
                              <span>{(reel.views / 1000).toFixed(1)}K views</span>
                              <span>{(reel.likes / 1000).toFixed(1)}K ❤️</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-4">
                    <h3 className={`text-xl font-bold mb-6 ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      User Reviews
                    </h3>
                    
                    {reviews.map(review => (
                      <div
                        key={review.id}
                        className={`p-4 rounded-xl transition-all duration-300 ${
                          isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                        }`}
                        style={getNeomorphicStyle()}
                      >
                        <div className="flex items-start space-x-3">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className={`font-medium ${
                                isDarkMode ? 'text-white' : 'text-gray-800'
                              }`}>
                                {review.name}
                              </h4>
                              <div className="flex items-center">
                                {Array.from({ length: 5 }, (_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? 'text-yellow-400 fill-yellow-400'
                                        : isDarkMode
                                          ? 'text-gray-600'
                                          : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className={`text-sm ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {review.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;