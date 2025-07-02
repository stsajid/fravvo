
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

interface TerminalPreviewProps {
  terminalText: string;
}

const TerminalPreview = ({ terminalText }: TerminalPreviewProps) => {
  return (
    <motion.div
      className="mb-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <div className="bg-gray-900/90 backdrop-blur-lg border border-lathran-green/30 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <Terminal className="w-4 h-4 text-gray-400 ml-2" />
          <span className="text-sm text-gray-400 font-mono">vibe-terminal</span>
        </div>
        <div className="font-mono text-sm text-left">
          <span className="text-lathran-green">➜</span>
          <span className="text-gray-300 whitespace-pre-line">{terminalText}</span>
          <motion.span 
            className="text-lathran-orange"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalPreview;
