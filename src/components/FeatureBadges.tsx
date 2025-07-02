
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface FeatureBadgesProps {
  registeredCount: number;
}

const FeatureBadges = ({ registeredCount }: FeatureBadgesProps) => {
  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <Badge variant="outline" className="border-lathran-green/40 text-lathran-green hover:bg-lathran-green/20 transition-all duration-300 rounded-full px-6 py-3 text-base font-inter backdrop-blur-sm">
        Organized by LathranSoft
      </Badge>
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Badge variant="outline" className="border-lathran-red/40 text-lathran-red hover:bg-lathran-red/20 transition-all duration-300 rounded-full px-6 py-3 text-base font-inter backdrop-blur-sm">
          {50 - (registeredCount - 50)} Seats Left
        </Badge>
      </motion.div>
      <Badge variant="outline" className="border-lathran-orange/40 text-lathran-orange hover:bg-lathran-orange/20 transition-all duration-300 rounded-full px-6 py-3 text-base font-inter backdrop-blur-sm">
        Live, not recorded
      </Badge>
    </motion.div>
  );
};

export default FeatureBadges;
