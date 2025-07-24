import React, { useState } from 'react';
import { Play, Heart, MessageCircle, User, Sparkles } from 'lucide-react';

interface ReelsSectionProps {
  isDarkMode: boolean;
}

interface Reel {
  id: string;
  thumbnail: string;
  title: string;
  views: string;
  likes: number;
  duration: string;
}

const ReelsSection: React.FC<ReelsSectionProps> = ({ isDarkMode }) => {
  const [activeSubTab, setActiveSubTab] = useState('live');

  const liveReels: Reel[] = [
    {
      id: '1',
      thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      title: 'Amazing Sunset Views',
      views: '12.5K',
      likes: 1250,
      duration: '0:45'
    },
    {
      id: '2',
      thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      title: 'City Night Life',
      views: '8.3K',
      likes: 890,
      duration: '1:20'
    },
    {
      id: '3',
      thumbnail: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      title: 'Ocean Waves',
      views: '15.7K',
      likes: 2100,
      duration: '0:30'
    },
    {
      id: '4',
      thumbnail: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      title: 'Mountain Adventure',
      views: '9.8K',
      likes: 1450,
      duration: '2:15'
    }
  ];

  const recommendedReels: Reel[] = [
    {
      id: '5',
      thumbnail: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      title: 'Forest Walk',
      views: '22.1K',
      likes: 3200,
      duration: '1:45'
    },
    {
      id: '6',
      thumbnail: 'https://images.pexels.com/photos/1181697/pexels-photo-1181697.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      title: 'Urban Photography',
      views: '18.9K',
      likes: 2800,
      duration: '1:10'
    },
    {
      id: '7',
      thumbnail: 'https://images.pexels.com/photos/1181701/pexels-photo-1181701.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      title: 'Desert Landscape',
      views: '14.2K',
      likes: 1900,
      duration: '0:55'
    },
    {
      id: '8',
      thumbnail: 'https://images.pexels.com/photos/1181705/pexels-photo-1181705.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      title: 'Waterfall Beauty',
      views: '31.5K',
      likes: 4100,
      duration: '2:30'
    }
  ];

  const currentReels = activeSubTab === 'live' ? liveReels : recommendedReels;

  return (
    <div className="space-y-6">
      {/* Sub-tab Navigation */}
      <div className="flex space-x-4">
        <button
          onClick={() => setActiveSubTab('live')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${
            isDarkMode
              ? activeSubTab === 'live' 
                ? 'bg-gray-600' 
                : 'bg-gray-700'
              : activeSubTab === 'live' 
                ? 'bg-gray-200' 
                : 'bg-gray-100'
          }`}
          style={{
            boxShadow: activeSubTab === 'live'
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
          <User className={`w-5 h-5 ${
            activeSubTab === 'live'
              ? isDarkMode
                ? 'text-purple-400'
                : 'text-indigo-600'
              : isDarkMode
                ? 'text-gray-400'
                : 'text-gray-600'
          }`} />
          <span className={`font-medium ${
            activeSubTab === 'live'
              ? isDarkMode
                ? 'text-purple-400'
                : 'text-indigo-600'
              : isDarkMode
                ? 'text-gray-400'
                : 'text-gray-600'
          }`}>
            User Live Reels
          </span>
        </button>

        <button
          onClick={() => setActiveSubTab('recommended')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${
            isDarkMode
              ? activeSubTab === 'recommended' 
                ? 'bg-gray-600' 
                : 'bg-gray-700'
              : activeSubTab === 'recommended' 
                ? 'bg-gray-200' 
                : 'bg-gray-100'
          }`}
          style={{
            boxShadow: activeSubTab === 'recommended'
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
          <Sparkles className={`w-5 h-5 ${
            activeSubTab === 'recommended'
              ? isDarkMode
                ? 'text-purple-400'
                : 'text-indigo-600'
              : isDarkMode
                ? 'text-gray-400'
                : 'text-gray-600'
          }`} />
          <span className={`font-medium ${
            activeSubTab === 'recommended'
              ? isDarkMode
                ? 'text-purple-400'
                : 'text-indigo-600'
              : isDarkMode
                ? 'text-gray-400'
                : 'text-gray-600'
          }`}>
            Recommendations
          </span>
        </button>
      </div>

      {/* Reels Grid */}
      <div className="grid grid-cols-2 gap-4">
        {currentReels.map((reel) => (
          <div
            key={reel.id}
            className={`group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${
              isDarkMode
                ? 'bg-gray-700'
                : 'bg-gray-100'
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
            {/* Thumbnail */}
            <img
              src={reel.thumbnail}
              alt={reel.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div
                className={`p-3 rounded-full backdrop-blur-sm ${
                  isDarkMode
                    ? 'bg-white/20'
                    : 'bg-black/20'
                }`}
                style={{
                  boxShadow: isDarkMode
                    ? `
                      4px 4px 12px rgba(0, 0, 0, 0.4),
                      -4px -4px 12px rgba(255, 255, 255, 0.02)
                    `
                    : `
                      4px 4px 12px rgba(0, 0, 0, 0.2),
                      -4px -4px 12px rgba(255, 255, 255, 0.8)
                    `
                }}
              >
                <Play className="w-6 h-6 text-white" fill="white" />
              </div>
            </div>

            {/* Duration */}
            <div className="absolute top-3 right-3">
              <span className="px-2 py-1 bg-black/50 text-white text-xs rounded-lg backdrop-blur-sm">
                {reel.duration}
              </span>
            </div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h4 className="font-semibold text-sm mb-1 truncate">
                {reel.title}
              </h4>
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center space-x-1">
                  <Play className="w-3 h-3" />
                  <span>{reel.views}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Heart className="w-3 h-3" />
                  <span>{reel.likes.toLocaleString()}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelsSection;