import { useState, useRef, useEffect, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt?: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, alt = 'Comparison' }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const bounded = Math.max(0, Math.min(100, percentage));
    setSliderPosition(bounded);
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  }, [isDragging, updatePosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  }, [updatePosition]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [handleMouseMove, handleMouseUp, isDragging]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    return () => {
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className="relative h-52 w-full touch-pan-y select-none overflow-hidden rounded-lg bg-gray-200 md:h-80"
      onMouseDown={handleMouseDown}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      <img
        src={afterImage}
        alt={`${alt} - After`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={`${alt} - Before`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: containerRef.current ? `${(containerRef.current.offsetWidth / sliderPosition) * 100}%` : '100%' }}
          draggable={false}
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-x-1 rounded-full bg-white shadow-lg md:h-10 md:w-10 md:gap-x-2">
          <svg className="h-4 w-4 text-slate-700 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <svg className="h-4 w-4 text-slate-700 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="absolute left-3 top-3 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white md:left-4 md:top-4 md:px-3 md:text-sm">
        Before
      </div>
      <div className="absolute right-3 top-3 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white md:right-4 md:top-4 md:px-3 md:text-sm">
        After
      </div>
    </div>
  );
}
