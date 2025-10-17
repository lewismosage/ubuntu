'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ElegantStatCardProps {
  value: string | number;
  label: string;
  color?: string;
  duration?: number; // Animation duration in milliseconds
}

export default function ElegantStatCard({ 
  value, 
  label, 
  color = '#084B8A',
  duration = 2000
}: ElegantStatCardProps) {
  const [displayValue, setDisplayValue] = useState<string | number>(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Parse the numeric value from the string (handles "%" and "+" suffixes)
  const getNumericValue = (val: string | number): number => {
    if (typeof val === 'number') return val;
    return parseInt(val.toString().replace(/[^0-9]/g, ''), 10) || 0;
  };

  // Format the display value to match the original format
  const formatValue = (num: number): string => {
    if (typeof value === 'string') {
      const suffix = value.replace(/[0-9]/g, '');
      return `${num}${suffix}`;
    }
    return num.toString();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger animation when element comes into view
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounter = () => {
    const numericValue = getNumericValue(value);
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Use easing function for smooth animation
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentValue = Math.floor(numericValue * easeOutQuad);

      setDisplayValue(formatValue(currentValue));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        // Ensure final value is exact
        setDisplayValue(formatValue(numericValue));
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <div ref={elementRef} className="relative p-8 flex flex-col items-center justify-center">
      {/* Top-left corner bracket */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: color }}></div>
      
      {/* Top-right corner bracket */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2" style={{ borderColor: color }}></div>
      
      {/* Bottom-left corner bracket */}
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: color }}></div>
      
      {/* Bottom-right corner bracket */}
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: color }}></div>

      {/* Content */}
      <div className="text-center z-10">
        <div 
          className="text-5xl md:text-6xl font-bold mb-3 tabular-nums"
          style={{ color: color }}
        >
          {displayValue}
        </div>
        <div 
          className="text-lg font-semibold"
          style={{ color: color }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}