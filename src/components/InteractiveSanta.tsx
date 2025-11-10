import { useEffect, useState } from "react";

export const InteractiveSanta = () => {
  const [isWaving, setIsWaving] = useState(false);
  const [position, setPosition] = useState({ x: 15, y: 20 });
  const [targetPosition, setTargetPosition] = useState({ x: 15, y: 20 });

  const handleClick = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000);
    
    setTargetPosition({
      x: Math.random() * 70 + 10,
      y: Math.random() * 50 + 15,
    });
  };

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition((prev) => {
        const dx = targetPosition.x - prev.x;
        const dy = targetPosition.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 0.5) return prev;
        
        return {
          x: prev.x + (dx / distance) * 0.3,
          y: prev.y + (dy / distance) * 0.3,
        };
      });
    }, 30);

    return () => clearInterval(moveInterval);
  }, [targetPosition]);

  return (
    <div
      className="fixed z-40 cursor-pointer transition-transform duration-200 hover:scale-110"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      onClick={handleClick}
    >
      <div className="relative animate-[santa-sway_2s_ease-in-out_infinite]">
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
