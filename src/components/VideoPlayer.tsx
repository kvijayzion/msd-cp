import React, { useState, useRef, useEffect } from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal, Play, Pause } from 'lucide-react';

interface Video {
  id: string;
  url: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
}

interface VideoPlayerProps {
  isDarkMode: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ isDarkMode }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [dragStartY, setDragStartY] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Dummy videos - using sample videos from various sources
  const videos: Video[] = [
    {
      id: '1',
      url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      title: 'Beautiful Sunset',
      description: 'A stunning sunset over the mountains with vibrant colors painting the sky.',
      likes: 1234,
      comments: 89
    },
    {
      id: '2',
      url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      title: 'Ocean Waves',
      description: 'Relaxing ocean waves crashing against the shore on a peaceful evening.',
      likes: 2567,
      comments: 156
    },
    {
      id: '3',
      url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
      title: 'City Lights',
      description: 'Time-lapse of bustling city life with beautiful light trails and urban energy.',
      likes: 3891,
      comments: 234
    }
  ];

  const currentVideo = videos[currentVideoIndex];

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(console.error);
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, currentVideoIndex]);

  const handleVideoClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartY(e.clientY);
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartY !== null) {
      const deltaY = dragStartY - e.clientY;
      if (Math.abs(deltaY) > 10) {
        setIsDragging(true);
      }
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartY !== null && isDragging) {
      const deltaY = dragStartY - e.clientY;
      if (deltaY > 50 && currentVideoIndex < videos.length - 1) {
        // Swipe up - next video
        setCurrentVideoIndex(currentVideoIndex + 1);
        setIsPlaying(true);
      } else if (deltaY < -50 && currentVideoIndex > 0) {
        // Swipe down - previous video
        setCurrentVideoIndex(currentVideoIndex - 1);
        setIsPlaying(true);
      }
    }
    setDragStartY(null);
    setIsDragging(false);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-4">
      <div 
        ref={containerRef}
        className={`relative w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${
          isDarkMode
            ? 'bg-gray-800'
            : 'bg-gray-100'
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
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Video */}
        <video
          ref={videoRef}
          src={currentVideo.url}
          className="w-full h-full object-cover cursor-pointer"
          onClick={handleVideoClick}
          loop
          muted
          playsInline
        />

        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300">
            <div 
              className={`p-4 rounded-full backdrop-blur-sm transition-all duration-300 ${
                isDarkMode
                  ? 'bg-white/20'
                  : 'bg-black/20'
              }`}
              style={{
                boxShadow: isDarkMode
                  ? `
                    8px 8px 20px rgba(0, 0, 0, 0.4),
                    -8px -8px 20px rgba(255, 255, 255, 0.02)
                  `
                  : `
                    8px 8px 20px rgba(0, 0, 0, 0.2),
                    -8px -8px 20px rgba(255, 255, 255, 0.1)
                  `
              }}
            >
              <Play className="w-12 h-12 text-white" fill="white" />
            </div>
          </div>
        )}

        {/* Right Side Actions */}
        <div className="absolute right-4 bottom-20 flex flex-col space-y-6">
          {/* Like Button */}
          <button
            onClick={handleLike}
            className="group relative"
          >
            <div 
              className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-active:scale-95 ${
                isDarkMode
                  ? 'bg-gray-800/60'
                  : 'bg-white/60'
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
              <Heart 
                className={`w-6 h-6 transition-all duration-300 ${
                  isLiked 
                    ? 'text-red-500 fill-red-500' 
                    : isDarkMode 
                      ? 'text-white' 
                      : 'text-gray-700'
                }`} 
              />
            </div>
            <span className={`text-xs mt-1 block text-center transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-700'
            }`}>
              {isLiked ? currentVideo.likes + 1 : currentVideo.likes}
            </span>
          </button>

          {/* Comment Button */}
          <button className="group relative">
            <div 
              className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-active:scale-95 ${
                isDarkMode
                  ? 'bg-gray-800/60'
                  : 'bg-white/60'
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
              <MessageCircle className={`w-6 h-6 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-700'
              }`} />
            </div>
            <span className={`text-xs mt-1 block text-center transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-700'
            }`}>
              {currentVideo.comments}
            </span>
          </button>

          {/* Share Button */}
          <button className="group relative">
            <div 
              className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-active:scale-95 ${
                isDarkMode
                  ? 'bg-gray-800/60'
                  : 'bg-white/60'
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
              <Share className={`w-6 h-6 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-700'
              }`} />
            </div>
          </button>

          {/* More Options */}
          <button className="group relative">
            <div 
              className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-active:scale-95 ${
                isDarkMode
                  ? 'bg-gray-800/60'
                  : 'bg-white/60'
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
              <MoreHorizontal className={`w-6 h-6 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-700'
              }`} />
            </div>
          </button>
        </div>

        {/* Video Info */}
        <div className="absolute bottom-4 left-4 right-20">
          <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-white'
          }`}>
            {currentVideo.title}
          </h3>
          <p className={`text-sm leading-relaxed transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-200'
          }`}>
            {currentVideo.description}
          </p>
        </div>

        {/* Video Progress Indicator */}
        <div className="absolute top-4 left-4 right-4">
          <div className="flex space-x-1">
            {videos.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  index === currentVideoIndex
                    ? isDarkMode
                      ? 'bg-purple-400'
                      : 'bg-white'
                    : isDarkMode
                      ? 'bg-gray-600'
                      : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;