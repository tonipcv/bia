"use client";

export default function PerformanceGraph() {
  return (
    <div className="h-32 flex items-end justify-between gap-2">
      {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
        <div key={i} className="w-full">
          <div 
            className="bg-gradient-to-t from-[#00F5D4]/20 to-[#00F5D4]/40 rounded-t"
            style={{ height: `${height}%` }}
          />
        </div>
      ))}
    </div>
  );
} 