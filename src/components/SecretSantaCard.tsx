import { useState } from "react";
import { Gift } from "lucide-react";

interface SecretSantaCardProps {
  name: string;
  onReveal: () => void;
}

export const SecretSantaCard = ({ name, onReveal }: SecretSantaCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(true);
    setTimeout(() => {
      onReveal();
    }, 800);
  };

  return (
    <div className="perspective-1000 w-80 h-96">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        onClick={!isFlipped ? handleClick : undefined}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-festive-red to-festive-red-light shadow-2xl flex flex-col items-center justify-center p-8 border-4 border-festive-gold">
          <Gift className="w-24 h-24 text-snow-white mb-6 animate-float" />
          <h3 className="text-3xl font-bold text-snow-white text-center mb-4">
            Your Secret Santa
          </h3>
          <p className="text-snow-white/90 text-center mb-6">Click to reveal!</p>
          <div className="w-16 h-16 rounded-full bg-festive-gold/30 animate-pulse-glow" />
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] rounded-2xl bg-gradient-to-br from-snow-white to-winter-white shadow-2xl flex flex-col items-center justify-center p-8 border-4 border-festive-gold">
          <div className="text-center">
            <p className="text-2xl text-muted-foreground mb-4">You're Secret Santa for</p>
            <h2 className="text-5xl font-bold text-festive-red mb-6 animate-scale-in">
              {name}
            </h2>
            <Gift className="w-16 h-16 text-festive-gold mx-auto animate-pulse-glow" />
          </div>
        </div>
      </div>
    </div>
  );
};
