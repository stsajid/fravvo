
import { motion } from 'framer-motion';

const StatsBar = () => {
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto px-4 my-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
    >
      <motion.div 
        className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-4xl sm:text-5xl font-bold text-lathran-orange mb-3 font-grotesk" style={{ fontSize: '2rem', fontWeight: '700' }}>90</div>
        <div className="text-base text-gray-300 font-inter" style={{ color: '#B0B0B0' }}>Minutes Live</div>
      </motion.div>
      <motion.div 
        className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-4xl sm:text-5xl font-bold text-lathran-green mb-3 font-grotesk" style={{ fontSize: '2rem', fontWeight: '700' }}>100</div>
        <div className="text-base text-gray-300 font-inter" style={{ color: '#B0B0B0' }}>Max Seats</div>
      </motion.div>
      <motion.div 
        className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-3 font-grotesk" style={{ fontSize: '2rem', fontWeight: '700' }}>AI</div>
        <div className="text-base text-gray-300 font-inter" style={{ color: '#B0B0B0' }}>Powered</div>
      </motion.div>
    </motion.div>
  );
};

export default StatsBar;
