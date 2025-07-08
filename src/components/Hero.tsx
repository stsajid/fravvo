import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import HostSection from "./HostSection";
import EventDetails from "./EventDetails";
import Expact from "./Expect";
import { useToast } from "@/hooks/use-toast";
import FloatingParticles from "./FloatingParticles";
interface HeroProps {
  onRegisterClick: () => void;
}

const Hero = ({ onRegisterClick }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [terminalText, setTerminalText] = useState("");
  const [registeredCount, setRegisteredCount] = useState(81);
  const { toast } = useToast();

  const terminalCommands = [
    "npm create vibe-app",
    "cd vibe-session",
    "npm run build-something-insane",
    "> Starting live coding session...",
    "> Let's ship some magic ✨",
  ];

  useEffect(() => {
    setIsVisible(true);

    let commandIndex = 0;
    let charIndex = 0;
    const typeCommand = () => {
      if (commandIndex < terminalCommands.length) {
        if (charIndex < terminalCommands[commandIndex].length) {
          setTerminalText(
            (prev) => prev + terminalCommands[commandIndex][charIndex]
          );
          charIndex++;
          setTimeout(typeCommand, 100);
        } else {
          setTimeout(() => {
            setTerminalText((prev) => prev + "\n");
            commandIndex++;
            charIndex = 0;
            setTimeout(typeCommand, 500);
          }, 1000);
        }
      }
    };

    setTimeout(typeCommand, 3000);

    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setRegisteredCount((prev) => prev + 1);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-lathran-blue overflow-hidden mt-10">
       <div className="fixed inset-0 z-0">
              <FloatingParticles />
            </div>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute w-96 h-96 bg-lathran-orange/10 rounded-full blur-3xl top-10 -left-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full blur-3xl bottom-10 -right-20"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.5, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="sm:mb-10 pt-3 sm:pt-6 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4 text-center">
            <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black border-0 px-6 py-3 text-sm sm:text-base font-bold animate-pulse">
              <Sparkles className="w-4 h-4 mr-2" />
              SESSION 001: PROMPT & FLOW
            </Badge>
            <Badge className="flex items-center bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2 text-xs sm:text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              LIVE
            </Badge>
          </div>
        </motion.div>

        <div className="mb-6 mt-[-5] sm:mb-10 space-y-3 sm:space-y-5 px-4 sm:px-6 text-center ">
          <motion.h1
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-grotesk leading-tight sm:leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="block text-white drop-shadow-2xl">
              Vibe Coding
            </span>

            <div className="m-2">
              <h2 className="text-2xl md:text-4xl text-orange-400 font-bold my-4">
                Build & Deploy Your GenAI MVP
              </h2>
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur-sm rounded-xl p-4 mb-6 max-w-2xl mx-auto mx-auto border border-orange-500/20 w-full">
                <p className="text-white font-bold text-lg mb-2">
                  Hosted by
                  <a
                    href="https://lathransoft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-lathran-green transition px-2"
                  >
                    LathranSoft
                  </a>
                </p>
                <p
                  className="text-orange-400 font-medium text-small"
                  style={{ fontSize: "20px" }}
                >
                  Expert-led coding bootcamp series
                </p>
              </div>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-[-6px]">
                A real-time, step-by-step build session with a seasoned CTO.
                <br className="hidden md:block" />
                Walk away with a{" "}
                <span className="text-white font-semibold">
                  working CRUD GenAI app
                </span>
                , a{" "}
                <span className="text-white font-semibold">
                  reusable cookbook
                </span>
                , and the{" "}
                <span className="text-white font-semibold">
                  skills to deploybg
                </span>
                .
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 ">
                <a href="#register" className="w-[300px]">
                  <Button
                    type="button"
                    size="lg"
                    className="w-full bg-gradient-to-r from-lathran-orange to-lathran-green hover:from-lathran-green hover:to-lathran-orange text-white font-bold py-4 md:py-6 text-lg md:text-xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(237,132,37,0.5)] shadow-2xl rounded-3xl group relative overflow-hidden font-grotesk disabled:opacity-50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    🎟️ Secure My Spot
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </a>
                <a href="#breakdown" className="w-[300px]">
                  <Button
                    type="button"
                    size="lg"
                    className="w-full text-white font-bold py-4 md:py-6 text-lg md:text-xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(237,132,37,0.5)] shadow-2xl rounded-3xl group relative overflow-hidden font-grotesk disabled:opacity-50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    See How it Works
                  </Button>
                </a>
              </div>
            </div>

            <div className="text-left">
              <EventDetails />
            </div>

            <HostSection />
          </motion.h1>
        </div>
        <div className="text-left">
          <Expact />
        </div>
      </motion.div>

      <motion.div
        className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <Button
          className="w-full bg-gradient-to-r from-lathran-orange to-lathran-green text-white font-bold py-4 text-lg rounded-2xl shadow-2xl font-grotesk"
          onClick={onRegisterClick}
        >
          🔔 Register Now
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
