import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export const HoppingReindeer = () => {
  const [position, setPosition] = useState<Position>({ x: 80, y: 70 });
  const [isHopping, setIsHopping] = useState(false);

  useEffect(() => {
    const hopInterval = setInterval(() => {
      setIsHopping(true);
      
      setTimeout(() => {
        setPosition({
          x: Math.random() * 85 + 5,
          y: Math.random() * 70 + 15,
        });
        setIsHopping(false);
      }, 600);
    }, 3000);

    return () => clearInterval(hopInterval);
  }, []);

  return (
    <div
      className="fixed z-40 transition-all duration-1000 ease-out pointer-events-none"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
    >
      <div
        className={`text-7xl select-none ${
          isHopping ? "animate-[hop_0.6s_ease-in-out]" : ""
        }`}
      >
        🦌
      </div>
    </div>
  );
};
