// 'use client';

// export default function Logo({ className = "" }: { className?: string }) {
//   return (
//     // Container: Simple, clean, no colored glows. 
//     // 'group' allows hover effects on child elements.
//     <div className={`relative flex items-center justify-center w-10 h-10 group cursor-pointer ${className}`}>
      
//       {/* The SVG Icon - Scaled up slightly to fit the 10x10 container */}
//       <svg 
//           viewBox="0 0 24 24" 
//           fill="none" 
//           xmlns="http://www.w3.org/2000/svg"
//           // strokeWidth="1.5" results in a clean, technical look.
//           // "currentColor" means it will be white in your navbar because of the parent text color.
//           className="relative z-10 w-full h-full text-current transition-transform duration-300 group-hover:scale-105"
//       >
//           {/* The Brackets { } */}
//           <path 
//             d="M7 4H4V8M4 16V20H7" 
//             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
//           />
//           <path 
//             d="M17 4H20V8M20 16V20H17" 
//             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
//           />

//           {/* The Central Data Line & Nodes */}
//           <path d="M12 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-50 group-hover:opacity-100 transition-opacity"/>
//           <circle cx="12" cy="2" r="1.5" fill="currentColor" />
//           <circle cx="12" cy="22" r="1.5" fill="currentColor" />

//           {/* The 'S' (Left side, geometric) */}
//           <path 
//             d="M9 7H7V10H10V13H7V16H9" 
//             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
//           />
//           {/* Connector for S */}
//           <path d="M10 10H12" stroke="currentColor" strokeWidth="1.5"/>
//           <path d="M10 13H12" stroke="currentColor" strokeWidth="1.5"/>

//           {/* The 'D' (Right side, geometric) */}
//           <path 
//             d="M15 7H17V16H15" 
//             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
//           />
//           {/* Connector for D */}
//           <path d="M12 7H15" stroke="currentColor" strokeWidth="1.5"/>
//           <path d="M12 16H15" stroke="currentColor" strokeWidth="1.5"/>
//           <path d="M17 11.5H15" stroke="currentColor" strokeWidth="1.5"/>

//       </svg>
//     </div>
//   );
// }

'use client';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    // A slightly larger container for the complex geometry
    <div className={`relative flex items-center justify-center w-12 h-12 group cursor-pointer ${className}`}>
      
      {/* OPTIONAL: Subtle glow effect (remove if you want strict flat monochrome) */}
      {/* Because your navbar uses mix-blend-difference, a white blur creates a cool halo effect */}
      <div className="absolute inset-0 bg-white/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* The SVG Icon */}
      <svg 
          viewBox="0 0 36 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          // Uses the current text color (white in navbar)
          className="relative z-10 w-full h-full text-current transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-180"
      >
          {/* Outer Reactor Ring (Segmented) */}
          <path 
            d="M18 2.5C9.43959 2.5 2.5 9.43959 2.5 18C2.5 26.5604 9.43959 33.5 18 33.5C26.5604 33.5 33.5 26.5604 33.5 18C33.5 9.43959 26.5604 2.5 18 2.5ZM18 4.5C25.4558 4.5 31.5 10.5442 31.5 18C31.5 25.4558 25.4558 31.5 18 31.5C10.5442 31.5 4.5 25.4558 4.5 18C4.5 10.5442 10.5442 4.5 18 4.5Z" 
            fill="currentColor"
            opacity="0.8"
          />
          {/* Energy Breaks in outer ring */}
          <rect x="17" y="1" width="2" height="4" fill="#000" className="mix-blend-overlay" />
          <rect x="17" y="31" width="2" height="4" fill="#000" className="mix-blend-overlay" />
          <rect x="1" y="17" width="4" height="2" fill="#000" className="mix-blend-overlay" />
          <rect x="31" y="17" width="4" height="2" fill="#000" className="mix-blend-overlay" />

          {/* Inner Core Hexagon Structure */}
          <path 
            d="M18 8L26.6603 13V23L18 28L9.33975 23V13L18 8Z" 
            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
          />
          
          {/* The Central "S" Energy Plates (Solid Fill) */}
          {/* Top Plate */}
          <path d="M18 10L24 13.5V17H15L12 14.5V13.5L18 10Z" fill="currentColor"/>
          {/* Bottom Plate */}
          <path d="M18 26L12 22.5V19H21L24 21.5V22.5L18 26Z" fill="currentColor"/>
          
          {/* Central Conduit Nodes (The glowing dots) */}
          <circle cx="18" cy="18" r="2" fill="currentColor" className="group-hover:animate-pulse"/>
          <circle cx="18" cy="8" r="1" fill="currentColor"/>
          <circle cx="18" cy="28" r="1" fill="currentColor"/>
          <circle cx="9.34" cy="13" r="1" fill="currentColor"/>
          <circle cx="26.66" cy="13" r="1" fill="currentColor"/>
          <circle cx="9.34" cy="23" r="1" fill="currentColor"/>
          <circle cx="26.66" cy="23" r="1" fill="currentColor"/>

      </svg>
    </div>
  );
}