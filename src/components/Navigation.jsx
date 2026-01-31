import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Navigation({ onPrev, onNext, current, total, onSlideClick }) {
  return (
    <>
      <button 
        className="nav-button nav-prev" 
        onClick={onPrev}
        disabled={current === 1}
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      
      <button 
        className="nav-button nav-next" 
        onClick={onNext}
        disabled={current === total}
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>
      
      <div className="slide-counter">
        {current} / {total}
      </div>
      
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
      
      <div className="slide-dots">
        {[...Array(total)].map((_, index) => (
          <button
            key={index}
            className={`dot ${current === index + 1 ? 'active' : ''}`}
            onClick={() => onSlideClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
