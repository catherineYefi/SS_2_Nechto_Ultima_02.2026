import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import './App.css';

// Import all slides
import Slide01Title from './components/slides/Slide01Title';
import Slide02Strategic from './components/slides/Slide02Strategic';
import Slide03Retrospective from './components/slides/Slide03Retrospective';
import Slide04KeyInsights from './components/slides/Slide04KeyInsights';
import Slide05KeyReflections from './components/slides/Slide05KeyReflections';
import Slide06KeyNumbers from './components/slides/Slide06KeyNumbers';
import Slide07FocusFuture from './components/slides/Slide07FocusFuture';
import Slide07AManagement from './components/slides/Slide07AManagement';
import Slide07BManagementProof from './components/slides/Slide07BManagementProof';
import Slide08Transition from './components/slides/Slide08Transition';
import Slide09Market from './components/slides/Slide09Market';
import Slide10Niche from './components/slides/Slide10Niche';
import Slide11Scale from './components/slides/Slide11Scale';
import Slide12Problems from './components/slides/Slide12Problems';
import Slide13WhatKept from './components/slides/Slide13WhatKept';
import Slide14Concept from './components/slides/Slide14Concept';
import Slide15NewRhythm from './components/slides/Slide15NewRhythm';
import Slide16BI from './components/slides/Slide16BI';
import Slide17Elite from './components/slides/Slide17Elite';
import Slide18Trackers from './components/slides/Slide18Trackers';
import Slide19Converters from './components/slides/Slide19Converters';
import Slide20AdditionalProducts from './components/slides/Slide20AdditionalProducts';
import Slide21Plan from './components/slides/Slide21Plan';
import Slide22Benefits from './components/slides/Slide22Benefits';
import Slide23Price from './components/slides/Slide23Price';
import Slide24Fixations from './components/slides/Slide24Fixations';
import Slide25Projects from './components/slides/Slide25Projects';
import Slide26Resume from './components/slides/Slide26Resume';
import Slide26Final from './components/slides/Slide26Final';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <Slide01Title key="slide-1" />,
    <Slide02Strategic key="slide-2" />,
    <Slide03Retrospective key="slide-3" />,
    <Slide04KeyInsights key="slide-4" />,
    <Slide05KeyReflections key="slide-5" />,
    <Slide06KeyNumbers key="slide-6" />,
    <Slide07FocusFuture key="slide-7" />,
    <Slide07AManagement key="slide-7a" />,
    <Slide07BManagementProof key="slide-7b" />,
    <Slide08Transition key="slide-8" />,
    <Slide09Market key="slide-9" />,
    <Slide10Niche key="slide-10" />,
    <Slide11Scale key="slide-11" />,
    <Slide12Problems key="slide-12" />,
    <Slide13WhatKept key="slide-13" />,
    <Slide14Concept key="slide-14" />,
    <Slide15NewRhythm key="slide-15" />,
    <Slide16BI key="slide-16" />,
    <Slide17Elite key="slide-17" />,
    <Slide18Trackers key="slide-18" />,
    <Slide19Converters key="slide-19" />,
    <Slide20AdditionalProducts key="slide-20" />,
    <Slide21Plan key="slide-21" />,
    <Slide22Benefits key="slide-22" />,
    <Slide23Price key="slide-23" />,
    <Slide24Fixations key="slide-24" />,
    <Slide25Projects key="slide-25" />,
    <Slide26Resume key="slide-26-resume" />,
    <Slide26Final key="slide-26" />,
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  return (
    <div className="presentation">
      <div className="slide-container">{slides[currentSlide]}</div>

      <Navigation
        onPrev={prevSlide}
        onNext={nextSlide}
        onSlideClick={goToSlide}
        current={currentSlide + 1}
        total={slides.length}
      />
    </div>
  );
}

export default App;
