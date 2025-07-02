
import { motion } from 'framer-motion';

interface SocialProofProps {
  registeredCount: number;
}

const SocialProof = ({ registeredCount }: SocialProofProps) => {
  return (
    <motion.div 
      className="my-12 mx-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
    >
      <p className="text-lathran-green font-semibold text-lg text-center font-grotesk">
        ⚡️ {registeredCount} developers already signed up — only {100 - registeredCount} spots left!
      </p>
    </motion.div>
  );
};

export default SocialProof;
