import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Snowflakes } from "@/components/Snowflakes";
import { SecretSantaCard } from "@/components/SecretSantaCard";
import { Confetti } from "@/components/Confetti";
import { Gift, Sparkles, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Draw = () => {
  const navigate = useNavigate();
  const [hasDrawn, setHasDrawn] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [assignedPerson] = useState("John Doe"); // Mock data

  const handleDraw = () => {
    setIsDrawing(true);
    
    // Simulate drawing animation
    setTimeout(() => {
      setShowCard(true);
      setIsDrawing(false);
    }, 2000);
  };

  const handleReveal = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setHasDrawn(true);
    }, 1000);
  };

  if (showCard && !hasDrawn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-winter-white to-snow-white relative overflow-hidden flex items-center justify-center">
        <Snowflakes />
        <div className="relative z-10 animate-scale-in">
          <SecretSantaCard name={assignedPerson} onReveal={handleReveal} />
        </div>
      </div>
    );
  }

  if (hasDrawn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-winter-white to-snow-white relative overflow-hidden">
        <Snowflakes />
        {showConfetti && <Confetti />}
        
        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="absolute top-8 left-8 text-muted-foreground hover:text-festive-red"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Home
          </Button>

          <div className="text-center animate-fade-in">
            <div className="mb-8 relative inline-block">
              <Gift className="w-32 h-32 text-festive-green animate-float mx-auto" />
              <Sparkles className="w-12 h-12 text-festive-gold absolute -top-4 -right-4 animate-sparkle" />
            </div>
            
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-festive-red via-festive-gold to-festive-green bg-clip-text text-transparent">
              Congratulations! 🎉
            </h1>
            
            <div className="bg-snow-white rounded-3xl shadow-2xl p-12 mb-8 border-2 border-festive-gold max-w-2xl mx-auto">
              <p className="text-2xl text-muted-foreground mb-4">
                You're Secret Santa for
              </p>
              <h2 className="text-7xl font-bold text-festive-red mb-8">
                {assignedPerson}
              </h2>
              
              <div className="h-1 w-32 bg-gradient-to-r from-festive-red via-festive-gold to-festive-green mx-auto rounded-full mb-8" />
              
              <p className="text-lg text-muted-foreground mb-6">
                Remember to keep it a secret! 🤫
              </p>
              
              <div className="bg-winter-white rounded-xl p-6 border border-festive-gold/30">
                <p className="text-sm text-muted-foreground mb-3">
                  💡 <strong>Tips for being a great Secret Santa:</strong>
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left max-w-md mx-auto">
                  <li>• Think about what {assignedPerson} would truly enjoy</li>
                  <li>• Stay within the agreed budget</li>
                  <li>• Add a personal touch to make it special</li>
                  <li>• Keep the secret until the big reveal!</li>
                </ul>
              </div>
            </div>

            <p className="text-muted-foreground text-lg">
              Happy gifting! May your present bring joy! 🎁✨
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-winter-white to-snow-white relative overflow-hidden">
      <Snowflakes />
      
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="absolute top-8 left-8 text-muted-foreground hover:text-festive-red"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Home
        </Button>

        <div className="text-center animate-fade-in">
          {isDrawing ? (
            <div className="space-y-8">
              <div className="relative">
                <Gift className="w-40 h-40 text-festive-red animate-pulse-glow mx-auto" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border-4 border-festive-gold rounded-full border-t-transparent animate-spin" />
                </div>
              </div>
              
              <h2 className="text-4xl font-bold text-festive-red animate-pulse">
                Drawing your Secret Santa...
              </h2>
              
              <div className="flex justify-center gap-2">
                <div className="w-3 h-3 bg-festive-red rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                <div className="w-3 h-3 bg-festive-gold rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                <div className="w-3 h-3 bg-festive-green rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          ) : (
            <>
              <div className="mb-8 relative inline-block">
                <Gift className="w-32 h-32 text-festive-red animate-float mx-auto" />
                <Sparkles className="w-10 h-10 text-festive-gold absolute top-0 right-0 animate-sparkle" />
              </div>
              
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-festive-red via-festive-gold to-festive-green bg-clip-text text-transparent">
                Ready to Draw?
              </h1>
              
              <p className="text-2xl text-muted-foreground mb-12 max-w-xl mx-auto">
                Click the button below to discover who you'll be gifting to this holiday season! 🎄
              </p>

              <Button
                onClick={handleDraw}
                size="lg"
                className="text-2xl px-16 py-10 rounded-2xl shadow-festive hover:shadow-glow transition-all duration-300 hover:scale-110 bg-gradient-to-r from-festive-red via-festive-red-light to-festive-gold text-snow-white border-4 border-festive-gold animate-pulse-glow"
              >
                <Gift className="mr-4 h-8 w-8" />
                Draw Your Secret Santa
                <Sparkles className="ml-4 h-8 w-8" />
              </Button>

              <p className="text-sm text-muted-foreground mt-8">
                Remember: Once you draw, you can't change it! 🎁
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
