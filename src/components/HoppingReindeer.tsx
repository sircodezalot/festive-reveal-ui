import { useEffect, useState } from "react";

export const HoppingReindeer = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition((prev) => {
        const newPos = prev + (direction * 0.5);
        if (newPos >= 85 || newPos <= 0) {
          setDirection((d) => -d);
        }
        return newPos;
      });
    }, 30);

    return () => clearInterval(moveInterval);
  }, [direction]);

  return (
    <div
      className="fixed bottom-20 z-40 pointer-events-none transition-all duration-75 ease-linear"
      style={{ 
        left: `${position}%`,
        transform: direction === -1 ? 'scaleX(-1)' : 'scaleX(1)'
      }}
    >
      <div className="text-7xl select-none animate-[reindeer-hop_0.8s_ease-in-out_infinite]">
        🦌
      </div>
    </div>
  );
};
