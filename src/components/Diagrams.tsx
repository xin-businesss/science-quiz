import { motion } from 'motion/react';
import { useState } from 'react';
import { X, Sun, Droplets, Wind, Zap, Battery, Lightbulb, ThermometerSun } from 'lucide-react';

interface DiagramProps {
  type: 'photosynthesis' | 'energy-conversion';
  onClose: () => void;
}

export default function Diagram({ type, onClose }: DiagramProps) {
  const [activeInfo, setActiveInfo] = useState<string | null>(null);

  const getPhotosynthesisContent = () => (
    <div className="relative w-full min-h-[300px] sm:aspect-video bg-sky-50 rounded-3xl overflow-hidden border-4 border-white shadow-xl p-8 mb-4">
      <div className="absolute top-4 right-4 z-10">
        <Sun className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 animate-pulse cursor-pointer" onClick={() => setActiveInfo('Sun: Provides light energy for plants to make food.')} />
      </div>
      
      {/* The Leaf */}
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-36 sm:w-64 sm:h-48 bg-green-500 rounded-[40px] rotate-12 flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors shadow-lg"
        onClick={() => setActiveInfo('Leaf: The "kitchen" of the plant where photosynthesis happens.')}
      >
        <span className="text-white font-bold text-lg">LEAF</span>
      </motion.div>

      {/* Input: Water */}
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-4 left-4 sm:bottom-20 sm:left-10 flex flex-col items-center cursor-pointer"
        onClick={() => setActiveInfo('Water: Absorbed by roots and travels to the leaf.')}
      >
        <Droplets className="text-blue-500 w-8 h-8 sm:w-10 sm:h-10" />
        <span className="text-blue-600 font-bold text-[10px] sm:text-xs">WATER</span>
      </motion.div>

      {/* Input: CO2 */}
      <motion.div 
        animate={{ x: [-10, 0, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-4 sm:top-1/2 sm:left-20 flex flex-col items-center cursor-pointer"
        onClick={() => setActiveInfo('Carbon Dioxide: Taken in from the air through tiny pores called stomata.')}
      >
        <Wind className="text-gray-400 w-8 h-8 sm:w-10 sm:h-10" />
        <span className="text-gray-500 font-bold text-[10px] sm:text-xs uppercase">CO2</span>
      </motion.div>

      {/* Output: Oxygen */}
      <motion.div 
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 right-4 sm:top-1/2 sm:right-20 flex flex-col items-center cursor-pointer"
        onClick={() => setActiveInfo('Oxygen: Released into the air for us to breathe!')}
      >
        <Wind className="text-blue-200 w-8 h-8 sm:w-10 sm:h-10" />
        <span className="text-blue-400 font-bold text-[10px] sm:text-xs uppercase">OXYGEN</span>
      </motion.div>

      {/* Output: Glucose */}
      <div 
        className="absolute bottom-4 right-4 sm:bottom-20 sm:right-10 cursor-pointer text-center"
        onClick={() => setActiveInfo('Glucose (Food): The sugar the plant makes for energy and growth.')}
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg border-2 border-green-200 flex items-center justify-center text-xl shadow-sm mx-auto">🍬</div>
        <span className="text-green-600 font-bold text-[10px] sm:text-xs uppercase block mt-1">GLUCOSE</span>
      </div>

      {activeInfo && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-x-4 bottom-4 p-4 bg-white/95 backdrop-blur-md rounded-2xl border-2 border-green-200 shadow-xl text-[#4A453F] font-medium text-sm z-20"
        >
          {activeInfo}
          <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={() => setActiveInfo(null)}><X size={16} /></button>
        </motion.div>
      )}
    </div>
  );

  const getEnergyConversionContent = () => (
    <div className="relative w-full min-h-[300px] sm:aspect-video bg-slate-50 rounded-3xl overflow-hidden border-4 border-white shadow-xl p-4 sm:p-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
      {/* Chemical Potential */}
      <div className="flex flex-col items-center">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="w-16 h-24 sm:w-24 sm:h-32 bg-gray-200 rounded-xl relative flex items-center justify-center cursor-pointer border-4 border-gray-100 shadow-md"
          onClick={() => setActiveInfo('Chemical Potential Energy: Stored inside the batteries.')}
        >
          <div className="absolute top-0 w-full h-3 sm:h-4 bg-black rounded-t-xl" />
          <Battery className="w-8 h-8 sm:w-12 sm:h-12 text-gray-800" />
        </motion.div>
        <p className="mt-2 font-bold text-gray-500 text-[10px] sm:text-xs">CHEMICAL</p>
      </div>

      <Zap className="text-yellow-400 w-6 h-6 sm:w-8 sm:h-8 animate-pulse rotate-90 sm:rotate-0" />

      {/* Electrical */}
      <div className="flex flex-col items-center cursor-pointer" onClick={() => setActiveInfo('Electrical Energy: Carried through the wires to the bulb.')}>
        <div className="w-24 sm:w-32 h-2 bg-gray-300 rounded-full overflow-hidden">
          <motion.div 
            animate={{ x: [-100, 100] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-10 h-full bg-yellow-400 blur-sm"
          />
        </div>
        <p className="mt-2 font-bold text-yellow-600 text-[10px] sm:text-xs uppercase tracking-widest">Electrical</p>
      </div>

      <ChevronRight className="text-gray-300 rotate-90 sm:rotate-0" />

      {/* Light + Heat */}
      <div className="flex flex-col items-center gap-2 sm:gap-4">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="w-20 h-20 sm:w-24 sm:h-24 bg-yellow-100 rounded-full flex items-center justify-center cursor-pointer border-4 border-white shadow-xl"
          onClick={() => setActiveInfo('Light Energy: Allows us to see. Heat Energy: The bulb gets warm while it shines.')}
        >
          <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500" />
        </motion.div>
        <div className="flex gap-1 sm:gap-2">
          <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-yellow-100 text-yellow-700 text-[8px] sm:text-[10px] font-bold rounded-full border border-yellow-200 uppercase">Light</span>
          <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-red-100 text-red-700 text-[8px] sm:text-[10px] font-bold rounded-full border border-red-200 uppercase flex items-center gap-1">
            <ThermometerSun size={10} /> Heat
          </span>
        </div>
      </div>

      {activeInfo && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-x-4 bottom-4 p-4 bg-white/95 backdrop-blur-md rounded-2xl border-2 border-yellow-200 shadow-xl text-[#4A453F] font-medium text-sm z-20"
        >
          {activeInfo}
          <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={() => setActiveInfo(null)}><X size={16} /></button>
        </motion.div>
      )}
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/40 backdrop-blur-sm overflow-y-auto pt-10 pb-10 sm:items-center"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl bg-white rounded-[40px] shadow-2xl relative overflow-hidden"
      >
        <div className="p-8 flex justify-between items-center border-b border-[#F1EDE7]">
          <div>
            <h3 className="text-2xl font-display font-bold text-[#4A453F]">
              {type === 'photosynthesis' ? 'Photosynthesis Explorer' : 'Energy Transformation Magic'}
            </h3>
            <p className="text-sm text-[#A39E93]">Click on the icons to reveal the secrets!</p>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-[#F1EDE7] rounded-2xl transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-8">
          {type === 'photosynthesis' ? getPhotosynthesisContent() : getEnergyConversionContent()}
        </div>

        <div className="p-8 bg-[#F9F7F5] border-t border-[#F1EDE7] text-center">
          <button 
            onClick={onClose}
            className="cute-button cute-button-green px-12"
          >
            Got it! Let's Quiz 🚀
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}
