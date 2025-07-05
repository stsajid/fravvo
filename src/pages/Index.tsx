import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import VibePass from "@/components/VibePass";
import SocialProof from "@/components/SocialProof";
import Hero from "@/components/Hero";
// import AboutSection from "@/components/AboutSection";
import ToolsSection from "@/components/ToolsSection";
import EventDetails from "@/components/EventDetails";
import AudienceSection from "@/components/AudienceSection";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import FloatingParticles from "@/components/FloatingParticles";
import TerminalPreview from "@/components/TerminalPreview";
import StatsBar from "@/components/StatsBar";
import CTAButton from "@/components/CTAButton";
import FeatureBadges from "@/components/FeatureBadges";
import LiveStats from "@/components/LiveStats";
import Navbar from "@/components/Navbar";
import Agenda from "@/components/Agenda";
import WhatYouNeed from "@/components/WhatYouNeed";

const Index = () => {
  const [showVibePass, setShowVibePass] = useState(false);
  const [registeredUser, setRegisteredUser] = useState({
    name: "",
    email: "",
    country: "",
  });
  const [registeredCount, setRegisteredCount] = useState(81);
  const { toast } = useToast();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [terminalText, setTerminalText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleRegistration = (formData: {
    name: string;
    email: string;
    phone: string;
    title: string;
    country: string;
    reason: string;
  }) => {
    setRegisteredUser({
      name: formData.name,
      email: formData.email,
      country: formData.country,
    });
    setShowVibePass(true);
    if (formData.country) {
      toast({
        title: `✅ You're in from ${formData.country}!`,
        description: "The vibe is going global — see you at the session!",
      });
    }
  };

  const handleRegisterClick = () => {
    toast({
      title: "🎫 Spot Reserved!",
      description:
        "Scroll down to complete your registration — you'll get an email confirmation shortly.",
    });
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

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
  if (showVibePass) {
    document.body.classList.remove("hide-cursor");
  } else {
    document.body.classList.add("hide-cursor");
  }
}, [showVibePass]);

  return (
    <div className="relative min-h-screen bg-lathran-blue text-white font-inter overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <FloatingParticles />
      </div>

      <motion.div
        className="fixed w-8 h-8 z-50 rounded-full border-2 border-lathran-orange/70 bg-lathran-orange/20 backdrop-blur-sm hidden md:block pointer-events-none"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Navbar />
      <Hero onRegisterClick={handleRegisterClick} />
      {/* <TerminalPreview terminalText={terminalText} />
      <FeatureBadges registeredCount={registeredCount} />
      <SocialProof registeredCount={registeredCount} />
      <CTAButton onRegisterClick={handleRegisterClick} />
      <StatsBar /> */}
      {/* <LiveStats /> */}
      {/* <SocialProof registeredCount={registeredCount} /> */}
      {/* <AboutSection /> */}
      <ToolsSection />
      <Agenda />
      {/* <EventDetails /> */}
      <WhatYouNeed />
      <AudienceSection />
      <RegistrationForm onSubmit={handleRegistration} />

      <Footer />

      {showVibePass && (
        <VibePass
          userName={registeredUser.name}
          userEmail={registeredUser.email}
          onClose={() => setShowVibePass(false)}
        />
      )}
    </div>
  );
};

export default Index;
