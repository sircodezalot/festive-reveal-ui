import { Button } from "@/components/ui/button";
import { Snowflakes } from "@/components/Snowflakes";
import { LogIn, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock login - simulate successful authentication
    setTimeout(() => {
      navigate("/draw");
    }, 1000);
  };

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
          Back
        </Button>

        <div className="w-full max-w-md animate-scale-in">
          <div className="bg-snow-white rounded-3xl shadow-2xl p-10 border-2 border-festive-gold/20">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-festive-red to-festive-red-light flex items-center justify-center animate-pulse-glow">
                <LogIn className="w-10 h-10 text-snow-white" />
              </div>
              
              <h2 className="text-3xl font-bold mb-2 text-festive-red">
                Welcome Back!
              </h2>
              <p className="text-muted-foreground">
                Sign in with your company account
              </p>
            </div>

            <Button
              onClick={handleLogin}
              className="w-full py-6 text-lg rounded-xl bg-gradient-to-r from-festive-red to-festive-red-light text-snow-white hover:shadow-glow transition-all duration-300 hover:scale-105 border-2 border-festive-gold"
            >
              <svg
                className="mr-3 h-6 w-6"
                viewBox="0 0 21 21"
                fill="currentColor"
              >
                <path d="M11.5 0L15.5 4H11.5V0Z" />
                <path d="M10.5 0V4H0V21H21V0H10.5ZM19 19H2V6H9.5V0H19V19Z" />
              </svg>
              Sign in with Microsoft
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-6">
              By signing in, you agree to participate in the Secret Santa gift exchange
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
