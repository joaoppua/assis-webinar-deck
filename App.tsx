import React, { useState, useEffect, useCallback } from 'react';
import { slides } from './slides';
import SlideRenderer from './components/SlideRenderer';
import Controls from './components/Controls';
import { AnimatePresence } from 'framer-motion';
import { SlideLayout } from './types';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentSlide = slides[currentSlideIndex];
  const progress = ((currentSlideIndex + 1) / slides.length) * 100;
  
  // Hide global logo on Impact Cover slides as they have their own centered logo
  const showGlobalLogo = currentSlide.layout !== SlideLayout.IMPACT_COVER;

  return (
    <div className="h-screen w-screen bg-[#FFF9F6] text-slate-900 overflow-hidden relative selection:bg-[#FF5533] selection:text-white">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#FF5533]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-200/20 rounded-full blur-[100px]" />
      </div>

      {/* Persistent Logo */}
      {showGlobalLogo && (
        <div className="absolute top-8 left-8 z-50">
          <img 
            src="https://www.assis.co/_astro/assis_logo.Mt_6m-GC.svg?dpl=dpl_B2MQdrw45vFMduP1PMk4nr3ui3wG" 
            alt="Assis Logo" 
            className="h-8 md:h-10"
          />
        </div>
      )}

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full">
        <AnimatePresence mode='wait'>
          <SlideRenderer key={currentSlide.id} data={currentSlide} />
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 h-1 bg-slate-200 w-full z-50">
        <div 
          className="h-full bg-[#FF5533] transition-all duration-300 ease-out" 
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Controls */}
      <Controls 
        onNext={nextSlide} 
        onPrev={prevSlide} 
        current={currentSlideIndex} 
        total={slides.length} 
      />
    </div>
  );
};

export default App;