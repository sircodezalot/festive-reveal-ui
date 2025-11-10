import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  delay: number;
  rotation: number;
}

export const Confetti = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const colors = [
    "hsl(var(--festive-red))",
    "hsl(var(--festive-green))",
    "hsl(var(--festive-gold))",
    "hsl(var(--festive-red-light))",
    "hsl(var(--festive-gold-light))",
  ];

  useEffect(() => {
    const pieces: ConfettiPiece[] = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.5,
      rotation: Math.random() * 360,
    }));
    setConfetti(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 animate-confetti"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};
