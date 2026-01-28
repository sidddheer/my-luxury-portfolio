// 'use client';

// import { useState, useRef } from 'react';

// interface ProjectProps {
//   number: string;
//   title: string;
//   category: string;
// }

// const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+[]{}|;:,.<>?";

// export default function ProjectItem({ number, title, category }: ProjectProps) {
//   const [displayText, setDisplayText] = useState(title);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   const startScramble = () => {
//     let iteration = 0;

//     if (intervalRef.current) clearInterval(intervalRef.current);

//     intervalRef.current = setInterval(() => {
//       setDisplayText((prev) =>
//         title
//           .split("")
//           .map((letter, index) => {
//             if (index < iteration) {
//               return title[index];
//             }
//             return CHARS[Math.floor(Math.random() * CHARS.length)];
//           })
//           .join("")
//       );

//       if (iteration >= title.length) {
//         if (intervalRef.current) clearInterval(intervalRef.current);
//       }

//       iteration += 1 / 3; 
//     }, 30);
//   };

//   const stopScramble = () => {
//       // Optional: Reset on mouse leave if desired
//   };

//   return (
//     <div 
//       onMouseEnter={startScramble}
//       onMouseLeave={stopScramble}
//       // FIX 1: Changed hover background to black (visible on white)
//       // FIX 2: Changed border color to standard black/10
//       className="group relative flex flex-col py-8 border-b border-black/10 cursor-none transition-colors hover:bg-black/5"
//     >
//       <div className="flex items-baseline justify-between w-full">
//         <div className="flex items-baseline gap-6">
//           {/* FIX 3: Changed text color to Gray/Black */}
//           <span className="text-sm font-mono text-gray-400 group-hover:text-black transition-colors">
//             {number}
//           </span>
          
//           {/* FIX 4: Changed title to BLACK (was white) */}
//           <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black uppercase tabular-nums">
//             {displayText}
//           </h2>
//         </div>

//         {/* Arrow (Hidden by default, appears Black on hover) */}
//         <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-black text-2xl">
//           →
//         </span>
//       </div>

//       {/* Category Details */}
//       <div className="pl-[calc(2rem+1.5rem)] mt-2 overflow-hidden h-0 group-hover:h-6 transition-all duration-300">
//          <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">
//             {category}
//          </p>
//       </div>
//     </div>
//   );
// }


'use client';

import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface ProjectItemProps {
  number: string;
  title: string;
  category: string;
}

export default function ProjectItem({ number, title, category }: ProjectItemProps) {
  const [displayText, setDisplayText] = useState(title);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // THE MATRIX EFFECT LOGIC
  const scrambleText = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let iteration = 0;
    
    clearInterval(intervalRef.current as NodeJS.Timeout);

    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        title
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return title[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= title.length) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }
      
      iteration += 1 / 2; // Speed of decoding (Higher denominator = Slower)
    }, 30);
  };

  useEffect(() => {
    if (isHovered) {
      scrambleText();
    } else {
      // Reset to original text instantly when mouse leaves (optional)
      // or let it finish. Here we reset to ensure clean state.
      setDisplayText(title);
      clearInterval(intervalRef.current as NodeJS.Timeout);
    }
    
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [isHovered, title]);

  return (
    <div 
        className="group relative flex items-center justify-between py-8 border-b border-gray-800 cursor-pointer overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Hover Background (Subtle highlight) */}
      <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

      {/* LEFT: Number + Title */}
      <div className="relative z-10 flex items-center gap-8 transition-transform duration-300 group-hover:translate-x-4">
        <span className="text-xs font-mono text-gray-500">
          [{number}]
        </span>
        {/* WE USE 'displayText' HERE INSTEAD OF 'title' */}
        <h3 className="text-3xl md:text-5xl font-light tracking-tight text-white group-hover:text-green-400 transition-colors font-mono">
          {displayText}
        </h3>
      </div>

      {/* RIGHT: Category + Arrow */}
      <div className="relative z-10 flex items-center gap-8 transition-transform duration-300 group-hover:-translate-x-4">
        <span className="hidden md:block text-xs font-mono text-gray-400 uppercase tracking-widest">
          {category}
        </span>
        <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 group-hover:border-green-400 group-hover:bg-green-400 group-hover:text-black transition-all">
           <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
        </div>
      </div>

    </div>
  );
}