"use client";

export default function ProgressCircles() {
  return (
    <div className="flex justify-between items-center">
      {[75, 85, 60].map((progress, i) => (
        <div key={i} className="relative w-20 h-20">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="stroke-[#1a1a1a] fill-none"
              strokeWidth="8"
              cx="50"
              cy="50"
              r="45"
            />
            <circle
              className="stroke-[#00F5D4] fill-none"
              strokeWidth="8"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="45"
              strokeDasharray={`${progress * 2.83} 283`}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-sm text-white/80">
            {progress}%
          </span>
        </div>
      ))}
    </div>
  );
} 