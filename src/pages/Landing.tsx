import { Button } from "@/components/ui/button";
import { Snowflakes } from "@/components/Snowflakes";
import { Gift, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-winter-white to-snow-white relative overflow-hidden">
      <Snowflakes />
      
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center animate-fade-in">
          <div className="mb-8 relative inline-block">
            <Gift className="w-32 h-32 text-festive-red animate-float mx-auto" />
            <Sparkles className="w-8 h-8 text-festive-gold absolute top-0 right-0 animate-sparkle" />
            <Sparkles className="w-6 h-6 text-festive-gold absolute bottom-0 left-0 animate-sparkle" style={{ animationDelay: "0.5s" }} />
          </div>
          
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-festive-red via-festive-red-light to-festive-red bg-clip-text text-transparent">
            Secret Santa
          </h1>
          
          <p className="text-3xl text-secondary mb-4 font-semibold">
            🎄 Holiday Gift Exchange 🎄
          </p>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Spread joy this holiday season! Log in to discover who you'll be gifting to.
            The magic of giving awaits! ✨
          </p>

          <Button
            onClick={() => navigate("/login")}
            size="lg"
            className="text-xl px-12 py-8 rounded-2xl shadow-festive hover:shadow-glow transition-all duration-300 hover:scale-105 bg-gradient-to-r from-festive-red to-festive-red-light text-snow-white border-2 border-festive-gold"
          >
            <Gift className="mr-3 h-6 w-6" />
            Get Started
          </Button>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-snow-white/50 backdrop-blur-sm shadow-card">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="font-bold text-lg mb-2 text-festive-red">Draw Your Match</h3>
              <p className="text-sm text-muted-foreground">Click to reveal your Secret Santa recipient</p>
            </div>
            
            <div className="p-6 rounded-xl bg-snow-white/50 backdrop-blur-sm shadow-card">
              <div className="text-4xl mb-3">🎅</div>
              <h3 className="font-bold text-lg mb-2 text-festive-red">Keep It Secret</h3>
              <p className="text-sm text-muted-foreground">Your match is stored securely</p>
            </div>
            
            <div className="p-6 rounded-xl bg-snow-white/50 backdrop-blur-sm shadow-card">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="font-bold text-lg mb-2 text-festive-red">Spread Joy</h3>
              <p className="text-sm text-muted-foreground">Make someone's holiday magical!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
