// 'use client';

// import { useEffect, useState } from 'react';

// export default function CustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   // 1. Add a state to track if the component has mounted in the browser
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     // 2. Signal that we are now on the client and ready to render
//     setIsMounted(true);

//     const updatePosition = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//       // Only show after first mouse movement
//       if (!isVisible) setIsVisible(true);
//     };

//     const handleHoverCheck = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       // Check if target is an interactive element
//       const isHoverable = target.matches('p, h1, h2, h3, h4, h5, h6, span, a, button, a *, button *, li');
//       setIsHovering(isHoverable);
//     };

//     window.addEventListener('mousemove', updatePosition);
//     document.addEventListener('mouseover', handleHoverCheck);

//     return () => {
//       window.removeEventListener('mousemove', updatePosition);
//       document.removeEventListener('mouseover', handleHoverCheck);
//     };
//   }, [isVisible]);

//   // 3. If we haven't mounted yet, render null.
//   // This matches the server's output and fixes the error.
//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <div
//       className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference"
//       style={{
//         // Use a translate3d for better performance
//         transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
//         // Fade in only after user moves mouse
//         opacity: isVisible ? 1 : 0, 
//       }}
//     >
//       <svg
//         width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
//         // Center the spear tip on the cursor position
//         style={{ marginLeft: '-3px', marginTop: '-3px' }}
//       >
//         <path 
//           d="M2 2L22 22 M2 2L9 2 M2 2L2 9" 
//           stroke="white" 
//           strokeWidth="1.5" 
//           strokeLinecap="round" 
//           strokeLinejoin="round"
//           // Smooth fade effect on hover
//           className={`transition-opacity duration-300 ease-out ${isHovering ? 'opacity-30' : 'opacity-100'}`}
//         />
//       </svg>
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';

// export default function CustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);

//     const updatePosition = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//       if (!isVisible) setIsVisible(true);
//     };

//     const handleHoverCheck = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       // Check for buttons, links, inputs, and text elements
//       const isHoverable = target.matches('a, button, input, textarea, select, [role="button"], h1, h2, h3, p, span, a *, button *');
//       setIsHovering(isHoverable);
//     };

//     window.addEventListener('mousemove', updatePosition);
//     document.addEventListener('mouseover', handleHoverCheck);

//     return () => {
//       window.removeEventListener('mousemove', updatePosition);
//       document.removeEventListener('mouseover', handleHoverCheck);
//     };
//   }, [isVisible]);

//   // THIS BLOCK FIXES THE HYDRATION ERROR
//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <div
//       className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
//       style={{
//         transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
//         opacity: isVisible ? 1 : 0,
//       }}
//     >
//       {/* The Cursor Shape */}
//       <div
//         className={`
//           rounded-full bg-white transition-all duration-300 ease-out
//           ${isHovering ? 'h-12 w-12 opacity-30' : 'h-3 w-3 opacity-100'}
//         `}
//       />
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';

// export default function CustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
  
//   // 1. The Safety Switch to prevent "Hydration failed" error
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true); // Tell React we are ready to render

//     const updatePosition = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//       if (!isVisible) setIsVisible(true);
//     };

//     const handleHoverCheck = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       // Check for buttons, links, inputs, and text elements
//       const isHoverable = target.matches('a, button, input, textarea, select, [role="button"], h1, h2, h3, p, span, a *, button *');
//       setIsHovering(isHoverable);
//     };

//     window.addEventListener('mousemove', updatePosition);
//     document.addEventListener('mouseover', handleHoverCheck);

//     return () => {
//       window.removeEventListener('mousemove', updatePosition);
//       document.removeEventListener('mouseover', handleHoverCheck);
//     };
//   }, [isVisible]);

//   // 2. If not ready, render nothing. This STOPS the crash.
//   if (!isMounted) return null;

//   return (
//     <div
//       className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
//       style={{
//         transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
//         opacity: isVisible ? 1 : 0,
//       }}
//     >
//       {/* The Dot Design: High-Res Code, Not an Image */}
//       <div
//         className={`
//           rounded-full bg-white transition-all duration-300 ease-out
//           ${isHovering ? 'h-10 w-10 opacity-30' : 'h-2.5 w-2.5 opacity-100'}
//         `}
//       />
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';

// export default function CustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);

//     const updatePosition = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//       if (!isVisible) setIsVisible(true);
//     };

//     const handleHoverCheck = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       // Triggers hover effect on links, buttons, inputs, and text headers
//       const isHoverable = target.matches('a, button, input, textarea, select, [role="button"], h1, h2, h3, h4, p, span, a *, button *');
//       setIsHovering(isHoverable);
//     };

//     window.addEventListener('mousemove', updatePosition);
//     document.addEventListener('mouseover', handleHoverCheck);

//     return () => {
//       window.removeEventListener('mousemove', updatePosition);
//       document.removeEventListener('mouseover', handleHoverCheck);
//     };
//   }, [isVisible]);

//   if (!isMounted) return null;

//   return (
//     <div
//       className="fixed top-0 left-0 pointer-events-none z-[9999]"
//       style={{
//         transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
//         opacity: isVisible ? 1 : 0,
//       }}
//     >
//       {/* DESIGN: 
//          1. bg-black -> Visible on white background
//          2. border-white -> Visible if it crosses black text
//       */}
//       <div
//         className={`
//           rounded-full bg-black border border-white/20 transition-all duration-300 ease-out
//           ${isHovering ? 'h-8 w-8 opacity-20' : 'h-6.5 w-6.5 opacity-100'}
//         `}
//       />
//     </div>
//   );
// }

// 'use client';

// import { useEffect, useState } from 'react';

// export default function CustomCursor({ isInverse = false }: { isInverse?: boolean }) {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);

//     const updatePosition = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//       if (!isVisible) setIsVisible(true);
//     };

//     const handleHoverCheck = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       const isHoverable = target.matches('a, button, input, textarea, select, [role="button"], h1, h2, h3, h4, p, span, a *, button *');
//       setIsHovering(isHoverable);
//     };

//     window.addEventListener('mousemove', updatePosition);
//     document.addEventListener('mouseover', handleHoverCheck);

//     return () => {
//       window.removeEventListener('mousemove', updatePosition);
//       document.removeEventListener('mouseover', handleHoverCheck);
//     };
//   }, [isVisible]);

//   if (!isMounted) return null;

//   return (
//     <div
//       className="fixed top-0 left-0 pointer-events-none z-[9999]"
//       style={{
//         transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
//         opacity: isVisible ? 1 : 0,
//       }}
//     >
//       <div
//         className={`
//           rounded-full border transition-all duration-300 ease-out
//           ${isInverse ? 'bg-white border-transparent' : 'bg-black border-white/20'}
//           ${isHovering ? 'h-10 w-10 opacity-30' : 'h-6 w-6 opacity-100'}
//         `}
//       />
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor({ isInverse = false }: { isInverse?: boolean }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // This tracks if we are specifically over a black section
  const [isOnDarkBackground, setIsOnDarkBackground] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleHoverCheck = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // 1. Hover State (Clickables)
      const isHoverable = target.matches('a, button, input, textarea, select, [role="button"], h1, h2, h3, h4, p, span, a *, button *');
      setIsHovering(isHoverable);

      // 2. Color Logic
      // Traverse up the DOM tree to see what color section we are in
      let el: HTMLElement | null = target;
      let foundDark = false;

      while (el && el !== document.body) {
          // If we hit a Black section -> Cursor White, Stop looking
          if (el.classList.contains('bg-black')) {
              foundDark = true;
              break;
          }
          // If we hit a White section -> Cursor Black, Stop looking
          // This prevents the cursor from turning white if the body has a black background
          if (el.classList.contains('bg-white')) {
              foundDark = false;
              break;
          }
          el = el.parentElement;
      }
      
      setIsOnDarkBackground(foundDark);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleHoverCheck);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleHoverCheck);
    };
  }, [isVisible]);

  if (!isMounted) return null;

  // Logic: 
  // 1. isInverse (from props) -> Force White (used for Overlay)
  // 2. isOnDarkBackground -> Found .bg-black -> Force White
  const shouldBeWhite = isInverse || isOnDarkBackground;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className={`
          rounded-full border transition-all duration-300 ease-out
          ${shouldBeWhite ? 'bg-white border-transparent' : 'bg-black border-white/20'}
          ${isHovering ? 'h-10 w-10 opacity-30' : 'h-6 w-6 opacity-100'}
        `}
      />
    </div>
  );
}
