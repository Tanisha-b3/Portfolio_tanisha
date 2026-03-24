import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`}>
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="text-4xl font-bold text-white">
          Tanisha<span className="text-[#00d1d1]">Borana</span>
        </div>

        {/* Loading bar */}
        <div className="w-64 h-1 bg-[#1b263b] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#00d1d1] to-[#6bffff] transition-all duration-300"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Loading text */}
        <p className="text-gray-400 text-sm">
          Loading<span className="animate-pulse">...</span>
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
