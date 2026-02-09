import React from 'react';
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react';

interface ControlsProps {
  onNext: () => void;
  onPrev: () => void;
  current: number;
  total: number;
}

const Controls: React.FC<ControlsProps> = ({ onNext, onPrev, current, total }) => {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 flex justify-between items-center text-slate-600 z-50">
      <div className="flex items-center space-x-4">
        <span className="text-sm font-mono text-slate-400">
          {current + 1} / {total}
        </span>
      </div>
      
      <div className="flex items-center space-x-2">
        <button 
          onClick={onPrev}
          disabled={current === 0}
          className="p-2 rounded-full hover:bg-slate-100 disabled:opacity-30 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={onNext}
          disabled={current === total - 1}
          className="p-2 rounded-full hover:bg-slate-100 disabled:opacity-30 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex items-center">
        <button onClick={toggleFullScreen} className="p-2 hover:bg-slate-100 rounded-full">
           <Maximize size={20} />
        </button>
      </div>
    </div>
  );
};

export default Controls;