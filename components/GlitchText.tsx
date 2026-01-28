'use client';

import { useState, useEffect, useRef } from 'react';

const CHARS = "!@#$%^&*():{};|,.<>/?[]0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function GlitchText({ text, className }: { text: string, className?: string }) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let pos = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const scrambled = text.split("")
        .map((char, index) => {
          if (pos / 2 > index) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayText(scrambled);
      pos++;

      if (pos >= text.length * 2) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
      }
    }, 50);
  };

  return (
    <span 
      onMouseEnter={scramble} 
      className={className} // Allows you to pass styles like 'font-bold text-4xl'
    >
      {displayText}
    </span>
  );
}