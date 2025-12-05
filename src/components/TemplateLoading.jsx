import { useState, useEffect } from "react";

const TemplateLoading = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/10 rounded-full animate-float"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 3}s`,
              }}
            />
          ))}
        </div>

        {/* Logo Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          {/* Logo Placeholder - Replace with your logo */}
          <div className="relative">
            <div className="w-32 h-32 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center animate-pulse-scale shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-white to-purple-100 rounded-2xl flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  L
                </span>
              </div>
            </div>

            {/* Spinning Ring */}
            <div
              className="absolute inset-0 border-4 border-transparent border-t-white/50 rounded-3xl animate-spin"
              style={{ animationDuration: "2s" }}
            />
          </div>

          {/* Loading Text */}
          <div className="mt-8 text-white text-xl font-semibold animate-pulse">
            Loading...
          </div>

          {/* Progress Dots */}
          <div className="flex gap-2 mt-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-white rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) translateX(0);
              opacity: 0.3;
            }
            50% {
              transform: translateY(-30px) translateX(20px);
              opacity: 0.6;
            }
          }

          @keyframes pulse-scale {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }

          .animate-float {
            animation: float infinite ease-in-out;
          }

          .animate-pulse-scale {
            animation: pulse-scale 2s infinite ease-in-out;
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
};

export default TemplateLoading;
