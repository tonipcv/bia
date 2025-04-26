"use client";

export default function ActivityTimeline() {
  return (
    <div className="flex justify-between items-center h-32">
      {[...Array(24)].map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-1 flex-1">
          <div 
            className={`w-full h-16 rounded-sm ${
              i >= 8 && i <= 18 ? 'bg-[#00F5D4]/20' : 'bg-zinc-800/50'
            }`}
          />
          <span className="text-[10px] text-zinc-500">
            {i.toString().padStart(2, '0')}
          </span>
        </div>
      ))}
    </div>
  );
} 