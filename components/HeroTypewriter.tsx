'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function HeroTypewriter() {
  // 1. Setup the Scroll Observer
  const containerRef = useRef(null);
  // 'once: true' = only animate the first time
  // 'amount: 0.5' = trigger when 50% of the text is visible on screen
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  const segments = useMemo(() => [
    { text: "Hi, I am ", style: "font-mono text-gray-400" },
    { text: "Sid", style: "font-mono font-bold text-white" }, 
    { text: ". A data architect turning chaotic signals into ", style: "font-mono text-gray-400" },
    { text: "linear narratives", style: "font-mono italic text-white" }, 
    { text: ".", style: "font-mono text-gray-400" },
  ], []);

  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // --- THE FIX: STOP HERE IF NOT VISIBLE ---
    if (!isInView) return; 

    // 1. Check if we are done with all segments
    if (currentSegmentIndex >= segments.length) {
      setIsComplete(true);
      return;
    }

    const currentSegment = segments[currentSegmentIndex];

    // 2. Check if we are done with the current segment
    if (currentCharIndex >= currentSegment.text.length) {
      const timeout = setTimeout(() => {
        setCurrentSegmentIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 150); 
      return () => clearTimeout(timeout);
    }

    // 3. Type the next character
    const timeout = setTimeout(() => {
      setCurrentCharIndex((prev) => prev + 1);
    }, 40); 

    return () => clearTimeout(timeout);
  }, [isInView, currentSegmentIndex, currentCharIndex, segments]); // Added isInView to dependencies

  return (
    // Attached the ref here so we know when THIS div is on screen
    <div ref={containerRef} className="max-w-4xl min-h-[160px]"> 
      
      <h1 className="sr-only">
        Hi, I am Sid. A data architect turning chaotic signals into linear narratives.
      </h1>

      <div className="text-3xl md:text-5xl leading-tight tracking-tight break-words">
        {segments.map((segment, index) => {
          if (index < currentSegmentIndex) {
            return (
              <span key={index} className={segment.style}>
                {segment.text}
              </span>
            );
          }
          return null;
        })}

        {currentSegmentIndex < segments.length && (
          <span className={segments[currentSegmentIndex].style}>
            {segments[currentSegmentIndex].text.slice(0, currentCharIndex)}
            
            {/* The Retro Block Cursor */}
            {!isComplete && (
               <span className="inline-block w-4 h-8 md:h-10 bg-white ml-1 animate-pulse align-middle mb-2" />
            )}
          </span>
        )}
      </div>
      
      {/* Subtext: Appears after typing is done */}
      <p 
        className={`mt-10 text-base md:text-lg font-mono text-gray-500 max-w-2xl leading-relaxed transition-opacity duration-1000 ${isComplete ? 'opacity-100' : 'opacity-0'}`}
      >
        {">"} I specialize in building predictive engines and visualization systems for luxury retail. I don't just report the past; I model the future.
      </p>
    </div>
  );
}