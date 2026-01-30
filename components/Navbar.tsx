// // 'use client';

// // import Link from 'next/link';
// // import { usePathname } from 'next/navigation';

// // const Navbar = () => {
// //   const pathname = usePathname();

// //   // Helper to style active links
// //   const isActive = (path: string) => {
// //     return pathname === path ? 'text-white' : 'text-zinc-500 hover:text-white';
// //   };

// //   return (
// //     <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white">
// //       {/* LEFT: Logo */}
// //       <Link href="/" className="text-xl font-bold tracking-tighter font-mono">
// //         SID.DEV
// //       </Link>

// //       {/* CENTER: Navigation Links */}
// //       <div className="hidden md:flex items-center gap-12 font-mono text-sm tracking-widest">
// //         <Link href="/about" className={`transition-colors duration-300 ${isActive('/about')}`}>
// //           ABOUT
// //         </Link>
// //         <Link href="/projects" className={`transition-colors duration-300 ${isActive('/projects')}`}>
// //           PROJECTS
// //         </Link>
// //         {/* Placeholder for "Process" link if we want it later */}
// //         {/* <Link href="/process" className={`transition-colors duration-300 ${isActive('/process')}`}>PROCESS</Link> */}
// //       </div>

// //       {/* RIGHT: Contact Button */}
// //       <Link href="/contact">
// //         <div className="group flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-700 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
// //             <span className="font-mono text-xs font-bold">CONTACT</span>
// //             <span className="group-hover:translate-x-1 transition-transform">→</span>
// //         </div>
// //       </Link>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // 'use client';

// // import Link from 'next/link';

// // export default function Navbar() {
// //   return (
// //     // 'mix-blend-difference' inverts the colors based on the background
// //     // We set text-white as the base. 
// //     // White text on White bg = Black. 
// //     // White text on Black bg = White.
// //     <nav className="fixed top-0 left-0 right-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-white">
      
// //       {/* LEFT: Logo */}
// //       <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter">
// //         SID.DEV
// //       </Link>

// //       {/* CENTER: Navigation Links */}
// //       {/* Increased opacity and font-weight for better visibility */}
// //       <div className="hidden md:flex gap-12 font-mono text-sm font-bold tracking-widest uppercase">
// //         <Link href="/about" className="hover:underline decoration-2 underline-offset-4">
// //           About
// //         </Link>
// //         <Link href="/projects" className="hover:underline decoration-2 underline-offset-4">
// //           Projects
// //         </Link>
// //       </div>

// //       {/* RIGHT: Contact Button */}
// //       <Link 
// //         href="/contact" 
// //         className="hidden md:flex items-center gap-2 border border-white px-6 py-2 rounded-full font-mono text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
// //       >
// //         <span>Contact</span>
// //         <span>→</span>
// //       </Link>

// //       {/* MOBILE MENU ICON (Simple Placeholder if needed) */}
// //       <div className="md:hidden">
// //          {/* You can add a hamburger menu here later */}
// //          <span className="font-mono text-xs">[MENU]</span>
// //       </div>

// //     </nav>
// //   );
// // }








// 'use client';

// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 right-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-white">
      
//       {/* LEFT: Logo */}
//       <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
//         SID.DEV
//       </Link>

//       {/* CENTER: Navigation Links */}
//       {/* REMOVED: hover:underline, decoration-2, underline-offset-4 */}
//       {/* ADDED: hover:opacity-60 transition-opacity */}
//       <div className="hidden md:flex gap-12 font-mono text-sm font-bold tracking-widest uppercase">
//         <Link href="/about" className="hover:opacity-60 transition-opacity duration-300">
//           About
//         </Link>
//         <Link href="/projects" className="hover:opacity-60 transition-opacity duration-300">
//           Projects
//         </Link>
//       </div>

//       {/* RIGHT: Contact Button */}
//       <Link 
//         href="/contact" 
//         className="hidden md:flex items-center gap-2 border border-white px-6 py-2 rounded-full font-mono text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
//       >
//         <span>Contact</span>
//         <span>→</span>
//       </Link>

//       {/* MOBILE MENU ICON */}
//       <div className="md:hidden">
//          <span className="font-mono text-xs">[MENU]</span>
//       </div>

//     </nav>
//   );
// }

// 'use client';

// import Link from 'next/link';
// import Logo from '@/components/Logo';

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 right-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-white">
      
//       {/* LEFT: Logo */}
//       <Link href="/">
//         <Logo />
//       </Link>

//       {/* CENTER: Navigation Links */}
//       <div className="hidden md:flex gap-12 font-mono text-sm font-bold tracking-widest uppercase">
//         <Link href="/about" className="hover:opacity-60 transition-opacity duration-300">
//           About
//         </Link>
//         <Link href="/projects" className="hover:opacity-60 transition-opacity duration-300">
//           Projects
//         </Link>
//         {/* ADDED: Link to the new Process page */}
//         <Link href="/process" className="hover:opacity-60 transition-opacity duration-300">
//           Process
//         </Link>
//       </div>

//       {/* RIGHT: Contact Button */}
//       <Link 
//         href="/contact" 
//         className="hidden md:flex items-center gap-2 border border-white px-6 py-2 rounded-full font-mono text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
//       >
//         <span>Contact</span>
//         <span>→</span>
//       </Link>

//       {/* MOBILE MENU ICON */}
//       <div className="md:hidden">
//          <span className="font-mono text-xs">[MENU]</span>
//       </div>

//     </nav>
//   );
// }

'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';

// 1. Accept the prop 'isProjectsPage'
export default function Navbar({ isProjectsPage = false }: { isProjectsPage?: boolean }) {
  
  // 2. Logic: 
  // If we are on the Projects Page -> Use solid White text and Extra Bold font (No blend mode).
  // If we are anywhere else -> Use 'mix-blend-difference' (Your original style).
  const navClass = isProjectsPage 
    ? "text-white"                 // Projects Page: Solid White
    : "mix-blend-difference text-white"; // Default: Inverted colors

  const linkWeight = isProjectsPage
    ? "font-extrabold" // Projects Page: Extra Bold
    : "font-bold";     // Default: Standard Bold

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 transition-all duration-300 ${navClass}`}>
      
      {/* LEFT: Logo */}
      <Link href="/">
        {/* Pass the mode to Logo if it needs color adjustment, otherwise keep as is */}
        <Logo />
      </Link>

      {/* CENTER: Navigation Links */}
      <div className={`hidden md:flex gap-12 font-mono text-sm tracking-widest uppercase ${linkWeight}`}>
        <Link href="/about" className="hover:opacity-60 transition-opacity duration-300">
          About
        </Link>
        <Link href="/projects" className="hover:opacity-60 transition-opacity duration-300">
          Projects
        </Link>
        <Link href="/process" className="hover:opacity-60 transition-opacity duration-300">
          Process
        </Link>
      </div>

      {/* RIGHT: Contact Button */}
      <Link 
        href="/contact" 
        className={`hidden md:flex items-center gap-2 border px-6 py-2 rounded-full font-mono text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300 ${isProjectsPage ? 'border-white' : 'border-white'} ${linkWeight}`}
      >
        <span>Contact</span>
        <span>→</span>
      </Link>

      {/* MOBILE MENU ICON */}
      <div className="md:hidden">
         <span className="font-mono text-xs">[MENU]</span>
      </div>

    </nav>
  );
}