import { useState } from "react";

export const InteractiveSanta = () => {
  const [isWaving, setIsWaving] = useState(false);
  const [position, setPosition] = useState({ x: 10, y: 20 });

  const handleClick = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000);
    
    // Move Santa to a new random position
    setPosition({
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 10,
    });
  };

  return (
    <div
      className="fixed z-40 cursor-pointer transition-all duration-1000 ease-in-out hover:scale-110"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      onClick={handleClick}
    >
      <div className="relative animate-float">
        <div className="text-8xl select-none">
          🎅
        </div>
        <div
          className={`absolute -right-2 top-4 text-4xl transition-transform duration-300 origin-bottom-left ${
            isWaving ? "animate-[wave_0.5s_ease-in-out_2]" : ""
          }`}
        >
          👋
        </div>
      </div>
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-festive-red bg-snow-white/90 px-3 py-1 rounded-full opacity-0 hover:opacity-100 transition-opacity">
        Click me!
      </div>
    </div>
  );
};
