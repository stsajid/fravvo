import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  onRegisterClick: () => void;
}

const CTAButton = ({ onRegisterClick }: CTAButtonProps) => {
  return (
    <motion.div
      className="mb-10 flex justify-center items-center px-4 sm:px-0 relative z-[10000]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6, duration: 0.6 }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto"
      >
        <Button
          size="lg"
          className="w-full sm:w-auto text-lg sm:text-2xl py-4 sm:py-8 px-6 sm:px-16 bg-gradient-to-r from-lathran-orange to-lathran-orange/90 hover:from-lathran-orange hover:to-lathran-green text-white font-bold rounded-full transition-all duration-700 hover:shadow-[0_0_40px_rgba(237,132,37,0.8)] shadow-2xl group relative overflow-hidden font-grotesk border-0"
          onClick={onRegisterClick}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 "></div>
          <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-4">
            🎟️ Secure Your Vibe Pass
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7" />
            </motion.div>
          </span>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default CTAButton;
