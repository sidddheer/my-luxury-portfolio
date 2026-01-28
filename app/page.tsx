// 'use client';

// // CHANGE 1: Added 'Variants' to the import list
// import { motion, Variants } from 'framer-motion';
// import { ArrowDownRight, Terminal } from 'lucide-react';
// import DataSculpture from '@/components/DataSculpture';

// import { useState } from 'react';

// // CHANGE 2: Added ': Variants' type definition here
// const reveal: Variants = {
//   hidden: { y: 100, opacity: 0 },
//   visible: (i: number) => ({
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", stiffness: 40, damping: 20, delay: i * 0.15 }
//   })
// };

// export default function Portfolio() {
//   return (
//     <main className="min-h-screen text-foreground selection:bg-black selection:text-white overflow-hidden relative">
      
//       {/* 3D Background Layer */}
//       <DataSculpture />

//       {/* Grid Overlay for Texture */}
//       {/* <div className="fixed inset-0 bg-grid-pattern bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none" /> */}
//       <div className="fixed inset-0 bg-grid-pattern bg-size-[4rem_4rem] opacity-[0.03] pointer-events-none" />

//       <div className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
        
//         {/* Navigation / Header */}
//         <motion.header 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//           className="flex justify-between items-start border-b border-black/10 pb-6 mb-24"
//         >
//           <div className="text-xs font-mono uppercase tracking-widest">
//             Data Analyst & <br /> Architect
//           </div>
//           <div className="text-xs font-mono text-right">
//             [ EST. 2024 ] <br />
//             NYC / REMOTE
//           </div>
//         </motion.header>

//         {/* Hero Section */}
//         <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
//           <div className="lg:col-span-9">
//             <motion.h1 
//               custom={1}
//               initial="hidden"
//               animate="visible"
//               variants={reveal}
//               className="text-display font-bold leading-[0.85] tracking-tighter mb-12"
//             >
//               RAW DATA <br />
//               <span className="text-black/20">REFINED</span> <br />
//               INSIGHT.
//             </motion.h1>
//           </div>
          
//           <div className="lg:col-span-3 flex flex-col justify-end pb-4">
//             <motion.div 
//               custom={2}
//               initial="hidden"
//               animate="visible"
//               variants={reveal}
//               className="space-y-6"
//             >
//               <p className="text-lg font-medium leading-relaxed max-w-xs">
//                 Translating chaotic datasets into linear narratives. Specializing in Python, SQL, and predictive modeling for luxury retail.
//               </p>
//               <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
//                 Explore Index <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"/>
//               </button>
//             </motion.div>
//           </div>
//         </section>

//         {/* Selected Works Table */}
//         <section className="mt-32">
//             <motion.div 
//                 custom={3}
//                 initial="hidden"
//                 animate="visible"
//                 variants={reveal}
//                 className="border-t border-black"
//             >
//                 {[
//                     { id: '01', client: 'ZARA ANALYTICS', scope: 'Customer Retention Model' },
//                     { id: '02', client: 'TEENAGE ENGINEERING', scope: 'Supply Chain Visualization' },
//                     { id: '03', client: 'AESOP', scope: 'Market Penetration Study' }
//                 ].map((project) => (
//                     <div key={project.id} className="group flex flex-col md:flex-row justify-between items-baseline py-8 border-b border-black/10 hover:bg-black hover:text-white transition-colors duration-500 px-4 -mx-4 cursor-pointer">
//                         <span className="text-xs font-mono opacity-50 mb-2 md:mb-0">({project.id})</span>
//                         <h3 className="text-3xl font-light tracking-tight md:absolute md:left-1/4">{project.client}</h3>
//                         <span className="text-sm font-mono uppercase tracking-wider">{project.scope}</span>
//                     </div>
//                 ))}
//             </motion.div>
//         </section>

//       </div>

//       {/* The Chat Interface Component */}
//       <ChatInterface />
//     </main>
//   );
// }

// // Sub-component for the AI Chat bubble
// function ChatInterface() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }} 
//       animate={{ opacity: 1 }} 
//       transition={{ delay: 1 }}
//       className="fixed bottom-8 right-8 z-50 flex flex-col items-end"
//     >
//       {isOpen && (
//         <motion.div 
//           initial={{ opacity: 0, y: 10, scale: 0.95 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           className="mb-4 w-80 bg-white border border-black/10 p-6 shadow-2xl"
//         >
//           <div className="text-xs font-mono text-black/40 mb-4 uppercase tracking-widest">
//             AI Assistant // v1.0
//           </div>
//           <div className="h-32 flex items-center justify-center text-sm text-black/60 italic border-b border-dashed border-black/10 mb-4">
//             "Ask about my stack..."
//           </div>
//           <input 
//             type="text" 
//             placeholder="TYPE_QUERY..." 
//             className="w-full bg-transparent border-none outline-none text-sm font-mono placeholder:text-black/20"
//           />
//         </motion.div>
//       )}

//       <button 
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-12 h-12 bg-black text-white flex items-center justify-center hover:scale-90 transition-transform duration-300"
//       >
//         <Terminal className="w-5 h-5" />
//       </button>
//     </motion.div>
//   );
// }


// 'use client';

// import { motion, Variants } from 'framer-motion';
// import { ArrowDownRight, Terminal } from 'lucide-react';
// import DataSculpture from '@/components/DataSculpture';
// import CustomCursor from '@/components/CustomCursor'; // Ensure this is imported
// import ProjectItem from '@/components/ProjectItem';   // The new "Matrix" list component
// import { useState } from 'react';

// // Animation variants for smooth page load
// const reveal: Variants = {
//   hidden: { y: 100, opacity: 0 },
//   visible: (i: number) => ({
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", stiffness: 40, damping: 20, delay: i * 0.15 }
//   })
// };

// export default function Portfolio() {
//   return (
//     <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden relative">
      
//       {/* 1. Custom Cursor & Backgrounds */}
//       <CustomCursor />
//       <DataSculpture />
      
//       {/* Grid Overlay */}
//       <div className="fixed inset-0 bg-grid-pattern bg-[size:4rem_4rem] opacity-[0.05] pointer-events-none" />

//       <div className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
        
//         {/* 2. Header */}
//         <motion.header 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//           className="flex justify-between items-start border-b border-white/10 pb-6 mb-24"
//         >
//           <div className="text-xs font-mono uppercase tracking-widest text-gray-400">
//             Data Analyst & <br /> Architect
//           </div>
//           <div className="text-xs font-mono text-right text-gray-400">
//             [ EST. 2024 ] <br />
//             NYC / REMOTE
//           </div>
//         </motion.header>

//         {/* 3. Hero Section */}
//         <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
//           <div className="lg:col-span-9">
//             <motion.h1 
//               custom={1}
//               initial="hidden"
//               animate="visible"
//               variants={reveal}
//               className="text-7xl md:text-9xl font-bold leading-[0.85] tracking-tighter mb-12"
//             >
//               RAW DATA <br />
//               <span className="text-white/20">REFINED</span> <br />
//               INSIGHT.
//             </motion.h1>
//           </div>
          
//           <div className="lg:col-span-3 flex flex-col justify-end pb-4">
//             <motion.div 
//               custom={2}
//               initial="hidden"
//               animate="visible"
//               variants={reveal}
//               className="space-y-6"
//             >
//               <p className="text-lg text-gray-400 font-medium leading-relaxed max-w-xs">
//                 Translating chaotic datasets into linear narratives. Specializing in Python, SQL, and predictive modeling for luxury retail.
//               </p>
//               <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-white/50 transition-colors">
//                 Explore Index <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"/>
//               </button>
//             </motion.div>
//           </div>
//         </section>

//         {/* 4. Selected Works (UPDATED WITH KINETIC DECODER) */}
//         <section className="mt-32">
//           <motion.div 
//               custom={3}
//               initial="hidden"
//               animate="visible"
//               variants={reveal}
//               className="border-t border-white/10"
//           >
//               <div className="flex flex-col">
//                 <ProjectItem 
//                   number="(01)" 
//                   title="ZARA ANALYTICS" 
//                   category="Customer Retention Model • Python • SQL"
//                 />
//                 <ProjectItem 
//                   number="(02)" 
//                   title="TEENAGE ENGINEERING" 
//                   category="Supply Chain Visualization • Real-time Processing"
//                 />
//                 <ProjectItem 
//                   number="(03)" 
//                   title="AESOP" 
//                   category="Market Penetration Study • Predictive Modeling"
//                 />
//               </div>
//           </motion.div>
//         </section>

//       </div>

//       {/* 5. Chat Interface */}
//       <ChatInterface />
//     </main>
//   );
// }

// // Sub-component for the AI Chat bubble
// function ChatInterface() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }} 
//       animate={{ opacity: 1 }} 
//       transition={{ delay: 1 }}
//       className="fixed bottom-8 right-8 z-50 flex flex-col items-end"
//     >
//       {isOpen && (
//         <motion.div 
//           initial={{ opacity: 0, y: 10, scale: 0.95 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           className="mb-4 w-80 bg-zinc-900 border border-white/10 p-6 shadow-2xl"
//         >
//           <div className="text-xs font-mono text-white/40 mb-4 uppercase tracking-widest">
//             AI Assistant // v1.0
//           </div>
//           <div className="h-32 flex items-center justify-center text-sm text-white/60 italic border-b border-dashed border-white/10 mb-4">
//             "Ask about my stack..."
//           </div>
//           <input 
//             type="text" 
//             placeholder="TYPE_QUERY..." 
//             className="w-full bg-transparent border-none outline-none text-sm font-mono text-white placeholder:text-white/20 focus:ring-0"
//           />
//         </motion.div>
//       )}

//       <button 
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-12 h-12 bg-white text-black flex items-center justify-center hover:scale-90 transition-transform duration-300 rounded-full"
//       >
//         <Terminal className="w-5 h-5" />
//       </button>
//     </motion.div>
//   );
// }

// 'use client';

// import { motion, Variants } from 'framer-motion';
// import { ArrowDownRight, Terminal } from 'lucide-react';
// import DataSculpture from '@/components/DataSculpture';
// import CustomCursor from '@/components/CustomCursor';
// // 1. Import the new component
// import ProjectItem from '@/components/ProjectItem'; 
// import { useState } from 'react';

// const reveal: Variants = {
//   hidden: { y: 100, opacity: 0 },
//   visible: (i: number) => ({
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", stiffness: 40, damping: 20, delay: i * 0.15 }
//   })
// };

// export default function Portfolio() {
//   return (
//     // Reverted to your original main class with 'text-foreground'
//     <main className="min-h-screen text-foreground selection:bg-black selection:text-white overflow-hidden relative">
      
//       <CustomCursor />
//       <DataSculpture />

//       {/* Reverted to your original grid opacity and settings */}
//       <div className="fixed inset-0 bg-grid-pattern bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none" />

//       <div className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
        
//         <motion.header 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//           className="flex justify-between items-start border-b border-black/10 pb-6 mb-24"
//         >
//           <div className="text-xs font-mono uppercase tracking-widest">
//             Data Analyst & <br /> Architect
//           </div>
//           <div className="text-xs font-mono text-right">
//             [ EST. 2024 ] <br />
//             NYC / REMOTE
//           </div>
//         </motion.header>

//         <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
//           <div className="lg:col-span-9">
//             {/* Kept your 'text-display' class */}
//             <motion.h1 
//               custom={1}
//               initial="hidden"
//               animate="visible"
//               variants={reveal}
//               className="text-display font-bold leading-[0.85] tracking-tighter mb-12"
//             >
//               RAW DATA <br />
//               <span className="text-black/20">REFINED</span> <br />
//               INSIGHT.
//             </motion.h1>
//           </div>
          
//           <div className="lg:col-span-3 flex flex-col justify-end pb-4">
//             <motion.div 
//               custom={2}
//               initial="hidden"
//               animate="visible"
//               variants={reveal}
//               className="space-y-6"
//             >
//               <p className="text-lg font-medium leading-relaxed max-w-xs">
//                 Translating chaotic datasets into linear narratives. Specializing in Python, SQL, and predictive modeling for luxury retail.
//               </p>
//               <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
//                 Explore Index <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"/>
//               </button>
//             </motion.div>
//           </div>
//         </section>

//         {/* 2. THE ONLY CHANGE: Replaced the map loop with ProjectItem components */}
//         <section className="mt-32">
//             <motion.div 
//                 custom={3}
//                 initial="hidden"
//                 animate="visible"
//                 variants={reveal}
//                 className="border-t border-black/10"
//             >
//                 <div className="flex flex-col">
//                   <ProjectItem 
//                     number="(01)" 
//                     title="ZARA ANALYTICS" 
//                     category="Customer Retention Model"
//                   />
//                   <ProjectItem 
//                     number="(02)" 
//                     title="TEENAGE ENGINEERING" 
//                     category="Supply Chain Visualization"
//                   />
//                   <ProjectItem 
//                     number="(03)" 
//                     title="AESOP" 
//                     category="Market Penetration Study"
//                   />
//                 </div>
//             </motion.div>
//         </section>

//       </div>

//       <ChatInterface />
//     </main>
//   );
// }

// function ChatInterface() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }} 
//       animate={{ opacity: 1 }} 
//       transition={{ delay: 1 }}
//       className="fixed bottom-8 right-8 z-50 flex flex-col items-end"
//     >
//       {isOpen && (
//         <motion.div 
//           initial={{ opacity: 0, y: 10, scale: 0.95 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           className="mb-4 w-80 bg-white border border-black/10 p-6 shadow-2xl"
//         >
//           <div className="text-xs font-mono text-black/40 mb-4 uppercase tracking-widest">
//             AI Assistant // v1.0
//           </div>
//           <div className="h-32 flex items-center justify-center text-sm text-black/60 italic border-b border-dashed border-black/10 mb-4">
//             "Ask about my stack..."
//           </div>
//           <input 
//             type="text" 
//             placeholder="TYPE_QUERY..." 
//             className="w-full bg-transparent border-none outline-none text-sm font-mono placeholder:text-black/20"
//           />
//         </motion.div>
//       )}

//       <button 
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-12 h-12 bg-black text-white flex items-center justify-center hover:scale-90 transition-transform duration-300"
//       >
//         <Terminal className="w-5 h-5" />
//       </button>
//     </motion.div>
//   );
// }

// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';
// import { ArrowDownRight } from 'lucide-react';

// // Components
// import DataSculpture from '@/components/DataSculpture';
// import CustomCursor from '@/components/CustomCursor';
// import ProjectItem from '@/components/ProjectItem';
// import HeroTypewriter from '@/components/HeroTypewriter'; // <--- IMPORT ADDED

// export default function Home() {
//   const containerRef = useRef(null);
  
//   // Track scroll progress for the whole page
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   // PARALLAX EFFECTS
//   const heroTextY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

//   return (
//     <main ref={containerRef} className="relative bg-white min-h-[250vh] selection:bg-black selection:text-white">
      
//       <CustomCursor />

//       {/* ------------------------------------------------------- */}
//       {/* LAYER 0: The "Points Bot" (Fixed Background)            */}
//       {/* ------------------------------------------------------- */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//           <DataSculpture />
//       </div>

//       {/* ------------------------------------------------------- */}
//       {/* SECTION 1: THE HERO (The "Before" State)                */}
//       {/* ------------------------------------------------------- */}
//       <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
//         <motion.div 
//             style={{ y: heroTextY, opacity: heroOpacity }}
//             className="max-w-[90vw]"
//         >
//           <div className="text-xs font-mono text-gray-400 mb-6 tracking-widest uppercase">
//             Data Analyst & Architect
//           </div>
//           <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black">
//             RAW DATA <br />
//             <span className="text-gray-300">REFINED</span> <br />
//             INSIGHT.
//           </h1>
//         </motion.div>
        
//         {/* Scroll Indicator */}
//         <motion.div 
//             style={{ opacity: heroOpacity }}
//             className="absolute bottom-12 right-12 flex gap-4 items-center text-xs font-mono text-gray-400"
//         >
//             <span className="animate-pulse">INITIALIZING_SYSTEM</span>
//             <ArrowDownRight className="w-4 h-4" />
//         </motion.div>
//       </section>

//       {/* ------------------------------------------------------- */}
//       {/* SECTION 2: THE SPLIT (The "After" State)                */}
//       {/* ------------------------------------------------------- */}
//       <div className="relative z-20 w-full">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             {/* LEFT SIDE: "The Window" */}
//             <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-between p-12 pointer-events-none">
//                 <div className="text-xs font-mono text-black/30 uppercase tracking-widest">
//                     System_Status: <span className="text-green-500">Active</span>
//                 </div>
//                 <div className="text-xs font-mono text-black/30">
//                      [ Lat: 40.7128° N ] <br />
//                      [ Lon: 74.0060° W ]
//                 </div>
//             </div>

//             {/* RIGHT SIDE: "The Terminal" */}
//             <div className="bg-black text-white min-h-screen p-8 md:p-20 flex flex-col gap-32 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] mt-[10vh]">
                
//                 {/* 2.1 INTRO - REPLACED WITH TYPEWRITER */}
//                 <div className="pt-24">
//                     <div className="text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">
//                         [ // Introduction ]
//                     </div>
                    
//                     {/* The new typewriter component handles the Title + The Paragraph below it */}
//                     <HeroTypewriter />
//                 </div>

//                 {/* 2.2 PROJECT INDEX */}
//                 <div>
//                     <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-12">
//                          <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">
//                             Select_Index_
//                         </div>
//                         <div className="text-xs font-mono text-gray-700">
//                             [ 05 FILES FOUND ]
//                         </div>
//                     </div>
                   
//                     <div className="flex flex-col">
//                         <ProjectItem 
//                             number="01" 
//                             title="ZARA ANALYTICS" 
//                             category="Predictive Modeling • Python"
//                         />
//                         <ProjectItem 
//                             number="02" 
//                             title="TEENAGE ENG." 
//                             category="Supply Chain • SQL"
//                         />
//                         <ProjectItem 
//                             number="03" 
//                             title="AESOP SKINCARE" 
//                             category="Market Analysis • R"
//                         />
//                         <ProjectItem 
//                             number="04" 
//                             title="ACNE STUDIOS" 
//                             category="Forecasting • Tableau"
//                         />
//                     </div>
//                 </div>

//                 {/* 2.3 FOOTER */}
//                 <div className="pb-32 pt-12 border-t border-gray-800">
//                      <h3 className="text-[10vw] md:text-6xl font-bold tracking-tighter leading-none hover:text-gray-400 transition-colors cursor-pointer">
//                         LET'S WORK.
//                      </h3>
//                      <div className="mt-8 flex gap-8 text-xs font-mono text-gray-600">
//                         <a href="#" className="hover:text-white transition-colors">LINKEDIN ↗</a>
//                         <a href="#" className="hover:text-white transition-colors">GITHUB ↗</a>
//                         <a href="#" className="hover:text-white transition-colors">EMAIL ↗</a>
//                      </div>
//                 </div>

//             </div>
//         </div>
//       </div>
//     </main>
//   );
// }


// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';
// import { ArrowDownRight } from 'lucide-react';

// // Components
// import DataSculpture from '@/components/DataSculpture';
// import CustomCursor from '@/components/CustomCursor';
// import ProjectItem from '@/components/ProjectItem';
// import HeroTypewriter from '@/components/HeroTypewriter'; 

// export default function Home() {
//   const containerRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const heroTextY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

//   return (
//     // CHANGE IS HERE: Removed "bg-white" so we can see the layer behind it
//     <main ref={containerRef} className="relative min-h-[250vh] selection:bg-black selection:text-white">
      
//       <CustomCursor />

//       {/* LAYER 0: The "Points Bot" (Visible now because main is transparent) */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//           <DataSculpture />
//       </div>

//       {/* SECTION 1: THE HERO */}
//       <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
//         <motion.div 
//             style={{ y: heroTextY, opacity: heroOpacity }}
//             className="max-w-[90vw]"
//         >
//           <div className="text-xs font-mono text-gray-400 mb-6 tracking-widest uppercase">
//             Data Analyst & Architect
//           </div>
//           <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black">
//             RAW DATA <br />
//             <span className="text-gray-300">REFINED</span> <br />
//             INSIGHT.
//           </h1>
//         </motion.div>
        
//         <motion.div 
//             style={{ opacity: heroOpacity }}
//             className="absolute bottom-12 right-12 flex gap-4 items-center text-xs font-mono text-gray-400"
//         >
//             <span className="animate-pulse">INITIALIZING_SYSTEM</span>
//             <ArrowDownRight className="w-4 h-4" />
//         </motion.div>
//       </section>

//       {/* SECTION 2: THE SPLIT */}
//       <div className="relative z-20 w-full">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             {/* LEFT SIDE: Transparent Window */}
//             <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-between p-12 pointer-events-none">
//                 <div className="text-xs font-mono text-black/30 uppercase tracking-widest">
//                     System_Status: <span className="text-green-500">Active</span>
//                 </div>
//                 <div className="text-xs font-mono text-black/30">
//                      [ Lat: 40.7128° N ] <br />
//                      [ Lon: 74.0060° W ]
//                 </div>
//             </div>

//             {/* RIGHT SIDE: The Terminal */}
//             <div className="bg-black text-white min-h-screen p-8 md:p-20 flex flex-col gap-32 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] mt-[10vh]">
                
//                 {/* 2.1 INTRO */}
//                 <div className="pt-24">
//                     <div className="text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">
//                         [ // Introduction ]
//                     </div>
//                     <HeroTypewriter />
//                 </div>

//                 {/* 2.2 PROJECT INDEX */}
//                 <div>
//                     <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-12">
//                          <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">
//                             Select_Index_
//                         </div>
//                         <div className="text-xs font-mono text-gray-700">
//                             [ 05 FILES FOUND ]
//                         </div>
//                     </div>
                   
//                     <div className="flex flex-col">
//                         <ProjectItem 
//                             number="01" 
//                             title="ZARA ANALYTICS" 
//                             category="Predictive Modeling • Python"
//                         />
//                         <ProjectItem 
//                             number="02" 
//                             title="TEENAGE ENG." 
//                             category="Supply Chain • SQL"
//                         />
//                         <ProjectItem 
//                             number="03" 
//                             title="AESOP SKINCARE" 
//                             category="Market Analysis • R"
//                         />
//                         <ProjectItem 
//                             number="04" 
//                             title="ACNE STUDIOS" 
//                             category="Forecasting • Tableau"
//                         />
//                     </div>
//                 </div>

//                 {/* 2.3 FOOTER */}
//                 <div className="pb-32 pt-12 border-t border-gray-800">
//                      <h3 className="text-[10vw] md:text-6xl font-bold tracking-tighter leading-none hover:text-gray-400 transition-colors cursor-pointer">
//                         LET'S WORK.
//                      </h3>
//                      <div className="mt-8 flex gap-8 text-xs font-mono text-gray-600">
//                         <a href="#" className="hover:text-white transition-colors">LINKEDIN ↗</a>
//                         <a href="#" className="hover:text-white transition-colors">GITHUB ↗</a>
//                         <a href="#" className="hover:text-white transition-colors">EMAIL ↗</a>
//                      </div>
//                 </div>

//             </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';
// import { ArrowDownRight } from 'lucide-react';

// // Components
// import DataSculpture from '@/components/DataSculpture'; // Ensure this file exists and renders black particles
// import CustomCursor from '@/components/CustomCursor';
// import ProjectItem from '@/components/ProjectItem';
// import HeroTypewriter from '@/components/HeroTypewriter'; 
// import TechTicker from '@/components/TechTicker'; // <--- NEW IMPORT

// export default function Home() {
//   const containerRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const heroTextY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

//   return (
//     // FIX IS HERE: Added "bg-white" back so the hero is visible against the black particles
//     <main ref={containerRef} className="relative min-h-[250vh] bg-white selection:bg-black selection:text-white">
      
//       <CustomCursor />

//       {/* LAYER 0: The "Points Bot" */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//           <DataSculpture />
//       </div>

//       {/* SECTION 1: THE HERO (White Background / Black Text) */}
//       <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
//         <motion.div 
//             style={{ y: heroTextY, opacity: heroOpacity }}
//             className="max-w-[90vw]"
//         >
//           <div className="text-xs font-mono text-zinc-400 mb-6 tracking-widest uppercase">
//             Data Analyst & Architect
//           </div>
//           <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black">
//             RAW DATA <br />
//             <span className="text-zinc-300">REFINED</span> <br />
//             INSIGHT.
//           </h1>
//         </motion.div>
        
//         <motion.div 
//             style={{ opacity: heroOpacity }}
//             className="absolute bottom-12 right-12 flex gap-4 items-center text-xs font-mono text-zinc-400"
//         >
//             <span className="animate-pulse">INITIALIZING_SYSTEM</span>
//             <ArrowDownRight className="w-4 h-4" />
//         </motion.div>
//       </section>

//       {/* SECTION 2: THE SPLIT (Content slides up) */}
//       <div className="relative z-20 w-full">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             {/* LEFT SIDE: Transparent Window (Shows the 3D Bot behind) */}
//             <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-between p-12 pointer-events-none">
//                 <div className="text-xs font-mono text-black/30 uppercase tracking-widest">
//                     System_Status: <span className="text-green-600">Active</span>
//                 </div>
//                 <div className="text-xs font-mono text-black/30">
//                      [ Lat: 40.7128° N ] <br />
//                      [ Lon: 74.0060° W ]
//                 </div>
//             </div>

//             {/* RIGHT SIDE: The Terminal (Black Panel) */}
//             <div className="bg-black text-white min-h-screen p-8 md:p-20 flex flex-col gap-20 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] mt-[10vh]">
                
//                 {/* 2.1 INTRO */}
//                 <div className="pt-24">
//                     <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">
//                         [ // Introduction ]
//                     </div>
//                     <HeroTypewriter />
//                 </div>

//                 {/* 2.2 TECH STACK (NEW) */}
//                 <div>
//                      <div className="text-xs font-mono text-zinc-500 mb-4 uppercase tracking-widest">
//                         [ // Stack ]
//                     </div>
//                     <TechTicker />
//                 </div>

//                 {/* 2.3 PROJECT INDEX */}
//                 <div>
//                     <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-12">
//                          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
//                             Select_Index_
//                         </div>
//                         <div className="text-xs font-mono text-zinc-700">
//                             [ 05 FILES FOUND ]
//                         </div>
//                     </div>
                   
//                     <div className="flex flex-col">
//                         <ProjectItem number="01" title="ZARA ANALYTICS" category="Predictive Modeling • Python" />
//                         <ProjectItem number="02" title="TEENAGE ENG." category="Supply Chain • SQL" />
//                         <ProjectItem number="03" title="AESOP SKINCARE" category="Market Analysis • R" />
//                         <ProjectItem number="04" title="ACNE STUDIOS" category="Forecasting • Tableau" />
//                     </div>
//                 </div>

//                 {/* 2.4 FOOTER */}
//                 <div className="pb-32 pt-12 border-t border-zinc-800">
//                      <h3 className="text-[10vw] md:text-6xl font-bold tracking-tighter leading-none hover:text-zinc-400 transition-colors cursor-pointer">
//                         LET'S WORK.
//                      </h3>
//                      <div className="mt-8 flex gap-8 text-xs font-mono text-zinc-600">
//                         <a href="#" className="hover:text-white transition-colors">LINKEDIN ↗</a>
//                         <a href="#" className="hover:text-white transition-colors">GITHUB ↗</a>
//                         <a href="#" className="hover:text-white transition-colors">EMAIL ↗</a>
//                      </div>
//                 </div>

//             </div>
//         </div>
//       </div>
//     </main>
//   );
// }



// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';
// import { ArrowDownRight } from 'lucide-react';

// // Components
// import DataSculpture from '@/components/DataSculpture'; 
// import CustomCursor from '@/components/CustomCursor';
// import ProjectItem from '@/components/ProjectItem';
// import HeroTypewriter from '@/components/HeroTypewriter'; 
// import TechTicker from '@/components/TechTicker'; 

// export default function Home() {
//   const containerRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const heroTextY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

//   return (
//     <main ref={containerRef} className="relative min-h-[250vh] bg-white selection:bg-black selection:text-white">
      
//       <CustomCursor />

//       {/* LAYER 0: The "Points Bot" */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//           <DataSculpture />
//       </div>

//       {/* SECTION 1: THE HERO */}
//       <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
//         <motion.div 
//             style={{ y: heroTextY, opacity: heroOpacity }}
//             className="max-w-[90vw]"
//         >
//           <div className="text-xs font-mono text-zinc-400 mb-6 tracking-widest uppercase">
//             Data Analyst & Architect
//           </div>
//           <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black">
//             RAW DATA <br />
//             <span className="text-zinc-300">REFINED</span> <br />
//             INSIGHT.
//           </h1>
//         </motion.div>
        
//         <motion.div 
//             style={{ opacity: heroOpacity }}
//             className="absolute bottom-12 right-12 flex gap-4 items-center text-xs font-mono text-zinc-400"
//         >
//             <span className="animate-pulse">INITIALIZING_SYSTEM</span>
//             <ArrowDownRight className="w-4 h-4" />
//         </motion.div>
//       </section>

//       {/* SECTION 2: THE SPLIT */}
//       <div className="relative z-20 w-full">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             {/* LEFT SIDE: Transparent Window */}
//             {/* FIX APPLIED BELOW: Changed p-12 to 'px-12 pb-12 pt-32' to clear the Navbar */}
//             <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-between px-12 pb-12 pt-32 pointer-events-none">
//                 <div className="text-xs font-mono text-black/30 uppercase tracking-widest flex items-center gap-2">
//                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//                     System_Status: Active
//                 </div>
//                 <div className="text-xs font-mono text-black/30">
//                      [ Lat: 40.7128° N ] <br />
//                      [ Lon: 74.0060° W ]
//                 </div>
//             </div>

//             {/* RIGHT SIDE: The Terminal */}
//             <div className="bg-black text-white min-h-screen p-8 md:p-20 flex flex-col gap-20 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] mt-[10vh]">
                
//                 {/* 2.1 INTRO */}
//                 <div className="pt-24">
//                     <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">
//                         [ // Introduction ]
//                     </div>
//                     <HeroTypewriter />
//                 </div>

//                 {/* 2.2 TECH STACK */}
//                 <div>
//                      <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">
//                         [ // Stack ]
//                     </div>
//                     {/* This component will now render the large icons defined below */}
//                     <TechTicker />
//                 </div>

//                 {/* 2.3 PROJECT INDEX */}
//                 <div>
//                     <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-12">
//                          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
//                             Select_Index_
//                         </div>
//                         <div className="text-xs font-mono text-zinc-700">
//                             [ 05 FILES FOUND ]
//                         </div>
//                     </div>
                   
//                     <div className="flex flex-col">
//                         <ProjectItem number="01" title="ZARA ANALYTICS" category="Predictive Modeling • Python" />
//                         <ProjectItem number="02" title="TEENAGE ENG." category="Supply Chain • SQL" />
//                         <ProjectItem number="03" title="AESOP SKINCARE" category="Market Analysis • R" />
//                         <ProjectItem number="04" title="ACNE STUDIOS" category="Forecasting • Tableau" />
//                     </div>
//                 </div>

//                 {/* 2.4 FOOTER */}
//                 <div className="pb-32 pt-12 border-t border-zinc-800">
//                      <h3 className="text-[10vw] md:text-6xl font-bold tracking-tighter leading-none hover:text-zinc-400 transition-colors cursor-pointer">
//                         LET'S WORK.
//                      </h3>
//                      <div className="mt-8 flex gap-8 text-xs font-mono text-zinc-600">
//                         <a href="#" className="hover:text-white transition-colors">LINKEDIN ↗</a>
//                         <a href="#" className="hover:text-white transition-colors">GITHUB ↗</a>
//                         <a href="#" className="hover:text-white transition-colors">EMAIL ↗</a>
//                      </div>
//                 </div>

//             </div>
//         </div>
//       </div>
//     </main>
//   );
// }


// 'use client';

// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { ArrowDownRight, X, ArrowLeft } from 'lucide-react';

// // Components
// import DataSculpture from '@/components/DataSculpture'; 
// import CustomCursor from '@/components/CustomCursor';
// import ProjectItem from '@/components/ProjectItem';
// import HeroTypewriter from '@/components/HeroTypewriter'; 
// import TechTicker from '@/components/TechTicker'; 

// export default function Home() {
//   const containerRef = useRef(null);
//   const [isBreached, setIsBreached] = useState(false);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const heroTextY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

//   return (
//     <main ref={containerRef} className="relative min-h-[250vh] bg-white selection:bg-black selection:text-white">
      
//       <CustomCursor />

//       {/* LAYER 0: The "Points Bot" */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//           <DataSculpture />
//       </div>

//       {/* SECTION 1: THE HERO */}
//       <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
//         <motion.div 
//             style={{ y: heroTextY, opacity: heroOpacity }}
//             className="max-w-[90vw]"
//         >
//           <div className="text-xs font-mono text-zinc-400 mb-6 tracking-widest uppercase">
//             Data Analyst & Architect
//           </div>
//           <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black">
//             RAW DATA <br />
//             <span className="text-zinc-300">REFINED</span> <br />
//             INSIGHT.
//           </h1>
//         </motion.div>
        
//         <motion.div 
//             style={{ opacity: heroOpacity }}
//             className="absolute bottom-12 right-12 flex gap-4 items-center text-xs font-mono text-zinc-400"
//         >
//             <span className="animate-pulse">INITIALIZING_SYSTEM</span>
//             <ArrowDownRight className="w-4 h-4" />
//         </motion.div>
//       </section>

//       {/* SECTION 2: THE SPLIT */}
//       <div className="relative z-20 w-full">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             {/* LEFT SIDE: Transparent Window */}
//             <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-between px-12 pb-12 pt-32 pointer-events-none">
//                 <div className="text-xs font-mono text-black/30 uppercase tracking-widest flex items-center gap-2">
//                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//                     System_Status: Active
//                 </div>
//                 <div className="text-xs font-mono text-black/30">
//                      [ Lat: 40.7128° N ] <br />
//                      [ Lon: 74.0060° W ]
//                 </div>
//             </div>

//             {/* RIGHT SIDE: The Terminal */}
//             <div className="bg-black text-white min-h-screen p-8 md:p-20 flex flex-col gap-20 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] mt-[10vh]">
                
//                 {/* 2.1 INTRO */}
//                 <div className="pt-24">
//                     <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">
//                         [ // Introduction ]
//                     </div>
//                     <HeroTypewriter />
//                 </div>

//                 {/* 2.2 TECH STACK */}
//                 <div>
//                      <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">
//                         [ // Stack ]
//                     </div>
//                     <TechTicker />
//                 </div>

//                 {/* 2.3 PROJECT INDEX */}
//                 <div>
//                     <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-12">
//                          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
//                             Select_Index_
//                         </div>
//                         <div className="text-xs font-mono text-zinc-700">
//                             [ 05 FILES FOUND ]
//                         </div>
//                     </div>
                   
//                     <div className="flex flex-col">
//                         <ProjectItem number="01" title="ZARA ANALYTICS" category="Predictive Modeling • Python" />
//                         <ProjectItem number="02" title="TEENAGE ENG." category="Supply Chain • SQL" />
//                         <ProjectItem number="03" title="AESOP SKINCARE" category="Market Analysis • R" />
//                         <ProjectItem number="04" title="ACNE STUDIOS" category="Forecasting • Tableau" />
//                     </div>
//                 </div>

//                 {/* 2.4 THE SENSOR (Automatic Trigger) */}
//                 <div className="pb-32 pt-12 border-t border-zinc-800">
                    
//                     {/* SPACER: Forces user to scroll deep to hit the trigger */}
//                     <div className="h-[20vh] w-full flex items-center justify-center">
//                         <p className="font-mono text-xs text-zinc-700 animate-pulse">
//                             ▼ SCROLL TO BREACH ▼
//                         </p>
//                     </div>

//                     {/* THE INVISIBLE SENSOR */}
//                     <motion.div 
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ amount: 1 }} // Requires 100% visibility
//                         onViewportEnter={() => setIsBreached(true)}
//                         className="h-32 w-full flex items-center justify-center border-t border-dashed border-zinc-800 mt-12"
//                     >
//                          <span className="font-mono text-xs text-red-500 animate-pulse tracking-[0.5em]">
//                             [ SYSTEM_BREACH_DETECTED ]
//                         </span>
//                     </motion.div>
//                 </div>

//             </div>
//         </div>
//       </div>

//       {/* ======================================================== */}
//       {/* THE "WARP" OVERLAY - Fixed Layer on Top                  */}
//       {/* ======================================================== */}
//       <AnimatePresence>
//         {isBreached && (
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl text-white overflow-hidden"
//             >
//                 {/* CLOSE BUTTON */}
//                 <button 
//                     onClick={() => {
//                         setIsBreached(false);
//                         // Optional: Smooth scroll up slightly so they don't re-trigger immediately
//                         window.scrollBy({ top: -200, behavior: 'smooth' });
//                     }}
//                     className="fixed top-8 left-8 z-50 text-white/50 hover:text-white flex items-center gap-2 font-mono text-xs uppercase tracking-widest cursor-pointer"
//                 >
//                     <ArrowLeft className="w-4 h-4" /> Return to Terminal
//                 </button>

//                 {/* HORIZONTAL CONTENT */}
//                 <motion.div 
//                     initial={{ x: 100, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.2 }}
//                     className="flex items-center h-full px-[10vw] gap-20 overflow-x-auto w-full no-scrollbar"
//                 >
                    
//                     {/* TITLE CARD */}
//                     <div className="min-w-[40vw]">
//                         <h2 className="text-[8vw] leading-none font-bold tracking-tighter text-zinc-100">
//                             ARCHIVE <br/> DEEP_LAYER
//                         </h2>
//                         <div className="mt-8 font-mono text-green-500 text-xs tracking-widest border-l border-green-500 pl-4">
//                             ACCESS_GRANTED <br/> LEVEL_05_CLEARANCE
//                         </div>
//                     </div>

//                     {/* CARD 1 */}
//                     <div className="min-w-[85vw] md:min-w-[40vw] h-[60vh] bg-zinc-900 border border-zinc-800 p-12 flex flex-col justify-between hover:border-zinc-600 transition-colors group cursor-pointer">
//                         <div className="flex justify-between items-start">
//                              <div className="font-mono text-xs text-zinc-500">[ 001 ]</div>
//                              <ArrowDownRight className="text-zinc-500 group-hover:text-white transition-colors" />
//                         </div>
//                         <div>
//                             <h3 className="text-4xl font-bold mb-4">SQL ENGINE</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed">
//                                 Optimized 14TB of data warehousing architecture reducing query latency by 400%.
//                             </p>
//                         </div>
//                     </div>

//                     {/* CARD 2 */}
//                     <div className="min-w-[85vw] md:min-w-[40vw] h-[60vh] bg-zinc-900 border border-zinc-800 p-12 flex flex-col justify-between hover:border-zinc-600 transition-colors group cursor-pointer">
//                         <div className="flex justify-between items-start">
//                              <div className="font-mono text-xs text-zinc-500">[ 002 ]</div>
//                              <ArrowDownRight className="text-zinc-500 group-hover:text-white transition-colors" />
//                         </div>
//                         <div>
//                             <h3 className="text-4xl font-bold mb-4">PYTHON API</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed">
//                                 RESTful service handling 5k rps for real-time inventory tracking across global stores.
//                             </p>
//                         </div>
//                     </div>

//                 </motion.div>
//             </motion.div>
//         )}
//       </AnimatePresence>

//     </main>
//   );
// }


// 'use client';

// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { ArrowDownRight, X, ArrowLeft, Database, Code, Terminal } from 'lucide-react';

// // Components
// import DataSculpture from '@/components/DataSculpture'; 
// import CustomCursor from '@/components/CustomCursor';
// import ProjectItem from '@/components/ProjectItem';
// import HeroTypewriter from '@/components/HeroTypewriter'; 
// import TechTicker from '@/components/TechTicker'; 

// export default function Home() {
//   const containerRef = useRef(null);
//   const [isBreached, setIsBreached] = useState(false);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const heroTextY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

//   return (
//     <main ref={containerRef} className="relative min-h-[250vh] bg-white selection:bg-black selection:text-white">
      
//       <CustomCursor />

//       {/* LAYER 0: The "Points Bot" */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//           <DataSculpture />
//       </div>

//       {/* SECTION 1: THE HERO */}
//       <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
//         <motion.div 
//             style={{ y: heroTextY, opacity: heroOpacity }}
//             className="max-w-[90vw]"
//         >
//           <div className="text-xs font-mono text-zinc-400 mb-6 tracking-widest uppercase">
//             Data Analyst & Architect
//           </div>
//           <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black">
//             RAW DATA <br />
//             <span className="text-zinc-300">REFINED</span> <br />
//             INSIGHT.
//           </h1>
//         </motion.div>
        
//         <motion.div 
//             style={{ opacity: heroOpacity }}
//             className="absolute bottom-12 right-12 flex gap-4 items-center text-xs font-mono text-zinc-400"
//         >
//             <span className="animate-pulse">INITIALIZING_SYSTEM</span>
//             <ArrowDownRight className="w-4 h-4" />
//         </motion.div>
//       </section>

//       {/* SECTION 2: THE SPLIT */}
//       <div className="relative z-20 w-full">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             {/* LEFT SIDE: Transparent Window */}
//             <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-between px-12 pb-12 pt-32 pointer-events-none">
//                 <div className="text-xs font-mono text-black/30 uppercase tracking-widest flex items-center gap-2">
//                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//                     System_Status: Active
//                 </div>
//                 <div className="text-xs font-mono text-black/30">
//                      [ Lat: 40.7128° N ] <br />
//                      [ Lon: 74.0060° W ]
//                 </div>
//             </div>

//             {/* RIGHT SIDE: The Terminal */}
//             <div className="bg-black text-white min-h-screen p-8 md:p-20 flex flex-col gap-20 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] mt-[10vh]">
                
//                 {/* 2.1 INTRO */}
//                 <div className="pt-24">
//                     <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">
//                         [ // Introduction ]
//                     </div>
//                     <HeroTypewriter />
//                 </div>

//                 {/* 2.2 TECH STACK */}
//                 <div>
//                      <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">
//                         [ // Stack ]
//                     </div>
//                     <TechTicker />
//                 </div>

//                 {/* 2.3 PROJECT INDEX */}
//                 <div>
//                     <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-12">
//                          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
//                             Select_Index_
//                         </div>
//                         <div className="text-xs font-mono text-zinc-700">
//                             [ 05 FILES FOUND ]
//                         </div>
//                     </div>
                   
//                     <div className="flex flex-col">
//                         <ProjectItem number="01" title="ZARA ANALYTICS" category="Predictive Modeling • Python" />
//                         <ProjectItem number="02" title="TEENAGE ENG." category="Supply Chain • SQL" />
//                         <ProjectItem number="03" title="AESOP SKINCARE" category="Market Analysis • R" />
//                         <ProjectItem number="04" title="ACNE STUDIOS" category="Forecasting • Tableau" />
//                     </div>
//                 </div>

//                 {/* 2.4 THE SENSOR (Automatic Trigger) */}
//                 <div className="pb-32 pt-12 border-t border-zinc-800">
                    
//                     {/* SPACER: Forces user to scroll deep to hit the trigger */}
//                     <div className="h-[20vh] w-full flex items-center justify-center opacity-30">
//                         <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest animate-bounce">
//                             ↓ Breach Threshold ↓
//                         </p>
//                     </div>

//                     {/* THE INVISIBLE SENSOR */}
//                     <motion.div 
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ amount: 1 }} // Requires 100% visibility
//                         onViewportEnter={() => setIsBreached(true)}
//                         className="h-32 w-full flex items-center justify-center border-t border-dashed border-zinc-800 mt-12 bg-gradient-to-b from-black to-red-950/20"
//                     >
//                          <span className="font-mono text-xs text-red-500 animate-pulse tracking-[0.5em]">
//                             [ SYSTEM_BREACH_DETECTED ]
//                         </span>
//                     </motion.div>
//                 </div>

//             </div>
//         </div>
//       </div>

//       {/* ======================================================== */}
//       {/* THE "WARP" OVERLAY - Refined                             */}
//       {/* ======================================================== */}
//       <AnimatePresence>
//         {isBreached && (
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Smooth "Apple-like" ease
//                 className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl text-white"
//             >
                
//                 {/* CLOSE BUTTON */}
//                 <button 
//                     onClick={() => {
//                         setIsBreached(false);
//                         // REFINEMENT: Scroll up 50% of viewport to safely exit the "danger zone"
//                         window.scrollBy({ top: -window.innerHeight * 0.5, behavior: 'smooth' });
//                     }}
//                     className="fixed top-8 left-8 z-50 text-white/40 hover:text-white flex items-center gap-2 font-mono text-xs uppercase tracking-widest cursor-pointer group"
//                 >
//                     <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
//                     Exit Archive
//                 </button>

//                 {/* HORIZONTAL CONTENT CONTAINER */}
//                 <div className="w-full h-full flex items-center overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
                    
//                     {/* SPACER FOR LEFT PADDING */}
//                     <div className="min-w-[10vw] snap-center"></div>
                    
//                     {/* TITLE CARD */}
//                     <motion.div 
//                         initial={{ opacity: 0, x: 50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.2 }}
//                         className="min-w-[40vw] pr-20 snap-center"
//                     >
//                         <h2 className="text-[10vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
//                             DEEP <br/> STORAGE
//                         </h2>
//                         <div className="mt-8 font-mono text-green-400 text-xs tracking-widest border-l border-green-500 pl-4 flex flex-col gap-1">
//                             <span>ACCESS_LEVEL: ROOT</span>
//                             <span>ENCRYPTION: NONE</span>
//                         </div>
//                     </motion.div>

//                     {/* CARD 1 */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-900/50 border border-white/10 p-12 flex flex-col justify-between hover:bg-zinc-800/50 hover:border-white/20 transition-all duration-500 mr-12 snap-center rounded-sm">
//                         <div className="flex justify-between items-start">
//                              <div className="p-3 bg-blue-500/10 rounded-full">
//                                 <Database className="w-6 h-6 text-blue-400" />
//                              </div>
//                              <div className="font-mono text-xs text-zinc-500">[ 001 ]</div>
//                         </div>
//                         <div>
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12">WAREHOUSE<br/>OPTIMIZATION</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md">
//                                 Re-engineered legacy SQL architecture for a Fortune 500 retailer. Reduced query time by 85% and storage costs by $20k/mo.
//                             </p>
//                         </div>
//                     </div>

//                     {/* CARD 2 */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-900/50 border border-white/10 p-12 flex flex-col justify-between hover:bg-zinc-800/50 hover:border-white/20 transition-all duration-500 mr-12 snap-center rounded-sm">
//                         <div className="flex justify-between items-start">
//                              <div className="p-3 bg-purple-500/10 rounded-full">
//                                 <Code className="w-6 h-6 text-purple-400" />
//                              </div>
//                              <div className="font-mono text-xs text-zinc-500">[ 002 ]</div>
//                         </div>
//                         <div>
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12">INVENTORY<br/>PREDICTION API</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md">
//                                 A Flask-based REST API serving real-time predictions to 400+ endpoints. Utilizes Redis for caching and Celery for async tasks.
//                             </p>
//                         </div>
//                     </div>

//                      {/* CARD 3 */}
//                      <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-900/50 border border-white/10 p-12 flex flex-col justify-between hover:bg-zinc-800/50 hover:border-white/20 transition-all duration-500 mr-12 snap-center rounded-sm">
//                         <div className="flex justify-between items-start">
//                              <div className="p-3 bg-orange-500/10 rounded-full">
//                                 <Terminal className="w-6 h-6 text-orange-400" />
//                              </div>
//                              <div className="font-mono text-xs text-zinc-500">[ 003 ]</div>
//                         </div>
//                         <div>
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12">CLI<br/>DASHBOARD</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md">
//                                 Built a custom Rust-based terminal UI for monitoring server health, outperforming standard web-dashboards in low-bandwidth environments.
//                             </p>
//                         </div>
//                     </div>

//                     {/* SPACER FOR RIGHT PADDING */}
//                     <div className="min-w-[10vw] snap-center"></div>

//                 </div>
//             </motion.div>
//         )}
//       </AnimatePresence>

//     </main>
//   );
// }


// 'use client';

// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';
// import { ArrowDownRight, ArrowLeft, Database, Code, Terminal, Lock, AlertTriangle } from 'lucide-react';

// // Components
// import DataSculpture from '@/components/DataSculpture'; 
// import CustomCursor from '@/components/CustomCursor';
// import ProjectItem from '@/components/ProjectItem';
// import HeroTypewriter from '@/components/HeroTypewriter'; 
// import TechTicker from '@/components/TechTicker'; 

// export default function Home() {
//   const containerRef = useRef(null);
  
//   // State: 'idle' | 'scanning' | 'breached'
//   const [status, setStatus] = useState('idle'); 
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const heroTextY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

//   // RESET LOGIC: When returning, reset status to idle
//   const handleReturn = () => {
//     setStatus('idle');
//     window.scrollBy({ top: -window.innerHeight * 0.5, behavior: 'smooth' });
//   };

//   return (
//     <main ref={containerRef} className="relative min-h-[250vh] bg-white selection:bg-black selection:text-white">
      
//       <CustomCursor />

//       {/* LAYER 0: The "Points Bot" */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//           <DataSculpture />
//       </div>

//       {/* SECTION 1: THE HERO */}
//       <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
//         <motion.div 
//             style={{ y: heroTextY, opacity: heroOpacity }}
//             className="max-w-[90vw]"
//         >
//           <div className="text-xs font-mono text-zinc-400 mb-6 tracking-widest uppercase">
//             Data Analyst & Architect
//           </div>
//           <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black">
//             RAW DATA <br />
//             <span className="text-zinc-300">REFINED</span> <br />
//             INSIGHT.
//           </h1>
//         </motion.div>
        
//         <motion.div 
//             style={{ opacity: heroOpacity }}
//             className="absolute bottom-12 right-12 flex gap-4 items-center text-xs font-mono text-zinc-400"
//         >
//             <span className="animate-pulse">INITIALIZING_SYSTEM</span>
//             <ArrowDownRight className="w-4 h-4" />
//         </motion.div>
//       </section>

//       {/* SECTION 2: THE SPLIT */}
//       <div className="relative z-20 w-full">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             {/* LEFT SIDE: Transparent Window */}
//             <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-between px-12 pb-12 pt-32 pointer-events-none">
//                 <div className="text-xs font-mono text-black/30 uppercase tracking-widest flex items-center gap-2">
//                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//                     System_Status: Active
//                 </div>
//                 <div className="text-xs font-mono text-black/30">
//                      [ Lat: 40.7128° N ] <br />
//                      [ Lon: 74.0060° W ]
//                 </div>
//             </div>

//             {/* RIGHT SIDE: The Terminal */}
//             <div className="bg-black text-white min-h-screen p-8 md:p-20 flex flex-col gap-20 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] mt-[10vh]">
                
//                 {/* 2.1 INTRO */}
//                 <div className="pt-24">
//                     <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">
//                         [ // Introduction ]
//                     </div>
//                     <HeroTypewriter />
//                 </div>

//                 {/* 2.2 TECH STACK */}
//                 <div>
//                      <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">
//                         [ // Stack ]
//                     </div>
//                     <TechTicker />
//                 </div>

//                 {/* 2.3 PROJECT INDEX */}
//                 <div>
//                     <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-12">
//                          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
//                             Select_Index_
//                         </div>
//                         <div className="text-xs font-mono text-zinc-700">
//                             [ 05 FILES FOUND ]
//                         </div>
//                     </div>
                   
//                     <div className="flex flex-col">
//                         <ProjectItem number="01" title="ZARA ANALYTICS" category="Predictive Modeling • Python" />
//                         <ProjectItem number="02" title="TEENAGE ENG." category="Supply Chain • SQL" />
//                         <ProjectItem number="03" title="AESOP SKINCARE" category="Market Analysis • R" />
//                         <ProjectItem number="04" title="ACNE STUDIOS" category="Forecasting • Tableau" />
//                     </div>
//                 </div>

//                 {/* 2.4 THE TRIGGER ZONE */}
//                 <div className="pb-32 pt-24 border-t border-zinc-800">
                    
//                     {/* VISIBLE PROMPT - Made Bigger & Clearer */}
//                     <div className="h-[20vh] w-full flex flex-col items-center justify-center gap-4 opacity-70">
//                         <Lock className="w-6 h-6 text-zinc-600" />
//                         <p className="font-mono text-sm text-zinc-400 uppercase tracking-widest">
//                             Restricted Area Below
//                         </p>
//                         <ArrowDownRight className="w-4 h-4 text-zinc-600 animate-bounce mt-2" />
//                     </div>

//                     {/* THE HACKING SENSOR */}
//                     <motion.div 
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ amount: 0.8 }} // Trigger when 80% visible
//                         onViewportEnter={() => {
//                             if (status === 'idle') {
//                                 setStatus('scanning');
//                                 // Wait 2 seconds, then Breach
//                                 setTimeout(() => setStatus('breached'), 2200);
//                             }
//                         }}
//                         className="relative h-48 w-full border border-red-900/30 bg-red-950/10 rounded-lg overflow-hidden mt-8"
//                     >
//                         {/* STATE 1: SCANNING ANIMATION */}
//                         {status === 'scanning' && (
//                             <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500 font-mono z-10">
//                                 <AlertTriangle className="w-8 h-8 mb-4 animate-pulse" />
//                                 <div className="text-sm tracking-widest font-bold">DETECTING BREACH...</div>
//                                 <div className="text-xs mt-2 text-red-400/70">BYPASSING FIREWALL</div>
//                             </div>
//                         )}

//                         {/* PROGRESS BAR (Fills up during scanning) */}
//                         {status === 'scanning' && (
//                             <motion.div 
//                                 initial={{ width: "0%" }}
//                                 animate={{ width: "100%" }}
//                                 transition={{ duration: 2, ease: "linear" }}
//                                 className="absolute bottom-0 left-0 h-1 bg-red-500 shadow-[0_0_20px_rgba(220,38,38,0.8)]"
//                             />
//                         )}

//                         {/* BACKGROUND GRID EFFECT */}
//                         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
//                     </motion.div>

//                 </div>

//             </div>
//         </div>
//       </div>

//       {/* ======================================================== */}
//       {/* THE "WARP" OVERLAY                                       */}
//       {/* ======================================================== */}
//       <AnimatePresence>
//         {status === 'breached' && (
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
//                 className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl text-white"
//             >
                
//                 {/* CLOSE BUTTON */}
//                 <button 
//                     onClick={handleReturn}
//                     className="fixed top-8 left-8 z-50 text-white/40 hover:text-white flex items-center gap-2 font-mono text-xs uppercase tracking-widest cursor-pointer group"
//                 >
//                     <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
//                     Exit Archive
//                 </button>

//                 {/* HORIZONTAL CONTENT */}
//                 <div className="w-full h-full flex items-center overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
                    
//                     <div className="min-w-[10vw] snap-center"></div>
                    
//                     {/* TITLE */}
//                     <motion.div 
//                         initial={{ opacity: 0, x: 50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.2 }}
//                         className="min-w-[40vw] pr-20 snap-center"
//                     >
//                         <h2 className="text-[10vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
//                             DEEP <br/> STORAGE
//                         </h2>
//                         <div className="mt-8 font-mono text-red-500 text-xs tracking-widest border-l border-red-500 pl-4 flex flex-col gap-1">
//                             <span>WARNING: UNVERIFIED DATA</span>
//                             <span>SECURITY: DISABLED</span>
//                         </div>
//                     </motion.div>

//                     {/* CARD 1 */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-900/50 border border-white/10 p-12 flex flex-col justify-between hover:bg-zinc-800/50 hover:border-white/20 transition-all duration-500 mr-12 snap-center rounded-sm">
//                         <div className="flex justify-between items-start">
//                              <div className="p-3 bg-blue-500/10 rounded-full">
//                                 <Database className="w-6 h-6 text-blue-400" />
//                              </div>
//                              <div className="font-mono text-xs text-zinc-500">[ 001 ]</div>
//                         </div>
//                         <div>
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12">WAREHOUSE<br/>OPTIMIZATION</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md">
//                                 Re-engineered legacy SQL architecture for a Fortune 500 retailer. Reduced query time by 85% and storage costs by $20k/mo.
//                             </p>
//                         </div>
//                     </div>

//                     {/* CARD 2 */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-900/50 border border-white/10 p-12 flex flex-col justify-between hover:bg-zinc-800/50 hover:border-white/20 transition-all duration-500 mr-12 snap-center rounded-sm">
//                         <div className="flex justify-between items-start">
//                              <div className="p-3 bg-purple-500/10 rounded-full">
//                                 <Code className="w-6 h-6 text-purple-400" />
//                              </div>
//                              <div className="font-mono text-xs text-zinc-500">[ 002 ]</div>
//                         </div>
//                         <div>
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12">INVENTORY<br/>PREDICTION API</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md">
//                                 A Flask-based REST API serving real-time predictions to 400+ endpoints. Utilizes Redis for caching and Celery for async tasks.
//                             </p>
//                         </div>
//                     </div>

//                      {/* CARD 3 */}
//                      <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-900/50 border border-white/10 p-12 flex flex-col justify-between hover:bg-zinc-800/50 hover:border-white/20 transition-all duration-500 mr-12 snap-center rounded-sm">
//                         <div className="flex justify-between items-start">
//                              <div className="p-3 bg-orange-500/10 rounded-full">
//                                 <Terminal className="w-6 h-6 text-orange-400" />
//                              </div>
//                              <div className="font-mono text-xs text-zinc-500">[ 003 ]</div>
//                         </div>
//                         <div>
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12">CLI<br/>DASHBOARD</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md">
//                                 Built a custom Rust-based terminal UI for monitoring server health, outperforming standard web-dashboards in low-bandwidth environments.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="min-w-[10vw] snap-center"></div>

//                 </div>
//             </motion.div>
//         )}
//       </AnimatePresence>

//     </main>
//   );
// }



// 'use client';

// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { ArrowDownRight, ArrowLeft, Database, Code, Terminal, Lock, AlertTriangle } from 'lucide-react';

// // Components
// import DataSculpture from '@/components/DataSculpture'; 
// import CustomCursor from '@/components/CustomCursor';
// import HeroTypewriter from '@/components/HeroTypewriter'; 
// import TechTicker from '@/components/TechTicker'; 

// export default function Home() {
//   const containerRef = useRef(null);
//   const [status, setStatus] = useState('idle'); 
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const heroTextY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

//   const handleReturn = () => {
//     setStatus('idle');
//     window.scrollBy({ top: -window.innerHeight * 0.5, behavior: 'smooth' });
//   };

//   return (
//     <main ref={containerRef} className="relative min-h-[150vh] bg-white selection:bg-black selection:text-white">
      
//       <CustomCursor />

//       {/* LAYER 0: Background */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//           <DataSculpture />
//       </div>

//       {/* SECTION 1: HERO */}
//       <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
//         <motion.div 
//             style={{ y: heroTextY, opacity: heroOpacity }}
//             className="max-w-[90vw]"
//         >
//           <div className="text-xs font-mono text-zinc-400 mb-6 tracking-widest uppercase">
//             Data Analyst & Architect
//           </div>
//           <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black">
//             RAW DATA <br />
//             <span className="text-zinc-300">REFINED</span> <br />
//             INSIGHT.
//           </h1>
//         </motion.div>
        
//         <motion.div 
//             style={{ opacity: heroOpacity }}
//             className="absolute bottom-12 right-12 flex gap-4 items-center text-xs font-mono text-zinc-400"
//         >
//             <span className="animate-pulse">INITIALIZING_SYSTEM</span>
//             <ArrowDownRight className="w-4 h-4" />
//         </motion.div>
//       </section>

//       {/* SECTION 2: THE TERMINAL SPLIT */}
//       <div className="relative z-20 w-full">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             {/* LEFT SIDE: Fixed Window */}
//             <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-between px-12 pb-12 pt-32 pointer-events-none">
//                 <div className="text-xs font-mono text-black/30 uppercase tracking-widest flex items-center gap-2">
//                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//                     System_Status: Active
//                 </div>
//                 <div className="text-xs font-mono text-black/30">
//                      [ Lat: 40.7128° N ] <br />
//                      [ Lon: 74.0060° W ]
//                 </div>
//             </div>

//             {/* RIGHT SIDE: The Terminal */}
//             {/* CHANGED: Reduced gap-20 to gap-12 to tighten the layout */}
//             <div className="bg-black text-white min-h-screen p-8 md:p-20 flex flex-col gap-12 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] mt-[10vh]">
                
//                 {/* 2.1 INTRO */}
//                 <div className="pt-24">
//                     <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">
//                         [ // Introduction ]
//                     </div>
//                     <HeroTypewriter />
//                 </div>

//                 {/* 2.2 TECH STACK */}
//                 <div>
//                      <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">
//                         [ // Stack ]
//                     </div>
//                     <TechTicker />
//                 </div>

//                 {/* 2.3 THE TRIGGER ZONE */}
//                 {/* CHANGED: Removed margins (mt-12) and reduced padding (pt-8) */}
//                 <div className="pb-32 pt-8 border-t border-zinc-800">
                    
//                     {/* VISIBLE PROMPT */}
//                     <div className="h-[20vh] w-full flex flex-col items-center justify-center gap-4 opacity-70">
//                         <Lock className="w-6 h-6 text-zinc-600" />
//                         <p className="font-mono text-sm text-zinc-400 uppercase tracking-widest">
//                             Restricted Area Below
//                         </p>
//                         <ArrowDownRight className="w-4 h-4 text-zinc-600 animate-bounce mt-2" />
//                     </div>

//                     {/* THE HACKING SENSOR */}
//                     <motion.div 
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ amount: 0.8 }} 
//                         onViewportEnter={() => {
//                             if (status === 'idle') {
//                                 setStatus('scanning');
//                                 setTimeout(() => setStatus('breached'), 2200);
//                             }
//                         }}
//                         className="relative h-48 w-full border border-red-900/30 bg-red-950/10 rounded-lg overflow-hidden mt-4"
//                     >
//                         {/* STATE 1: SCANNING ANIMATION */}
//                         {status === 'scanning' && (
//                             <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500 font-mono z-10">
//                                 <AlertTriangle className="w-8 h-8 mb-4 animate-pulse" />
//                                 <div className="text-sm tracking-widest font-bold">DETECTING BREACH...</div>
//                                 <div className="text-xs mt-2 text-red-400/70">BYPASSING FIREWALL</div>
//                             </div>
//                         )}

//                         {/* PROGRESS BAR */}
//                         {status === 'scanning' && (
//                             <motion.div 
//                                 initial={{ width: "0%" }}
//                                 animate={{ width: "100%" }}
//                                 transition={{ duration: 2, ease: "linear" }}
//                                 className="absolute bottom-0 left-0 h-1 bg-red-500 shadow-[0_0_20px_rgba(220,38,38,0.8)]"
//                             />
//                         )}

//                         {/* BACKGROUND GRID */}
//                         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
//                     </motion.div>
//                 </div>

//             </div>
//         </div>
//       </div>

//       {/* ======================================================== */}
//       {/* THE "WARP" OVERLAY                                       */}
//       {/* ======================================================== */}
//       <AnimatePresence>
//         {status === 'breached' && (
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
//                 className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl text-white"
//             >
//                 <button 
//                     onClick={handleReturn}
//                     className="fixed top-8 left-8 z-50 text-white/40 hover:text-white flex items-center gap-2 font-mono text-xs uppercase tracking-widest cursor-pointer group"
//                 >
//                     <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
//                     Exit Archive
//                 </button>

//                 <div className="w-full h-full flex items-center overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
//                     <div className="min-w-[10vw] snap-center"></div>
                    
//                     <motion.div 
//                         initial={{ opacity: 0, x: 50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.2 }}
//                         className="min-w-[40vw] pr-20 snap-center"
//                     >
//                         <h2 className="text-[10vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
//                             DEEP <br/> STORAGE
//                         </h2>
//                         <div className="mt-8 font-mono text-red-500 text-xs tracking-widest border-l border-red-500 pl-4 flex flex-col gap-1">
//                             <span>WARNING: UNVERIFIED DATA</span>
//                             <span>SECURITY: DISABLED</span>
//                         </div>
//                     </motion.div>

//                     {/* CARD 1 */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-900/50 border border-white/10 p-12 flex flex-col justify-between hover:bg-zinc-800/50 hover:border-white/20 transition-all duration-500 mr-12 snap-center rounded-sm">
//                         <div className="flex justify-between items-start">
//                              <div className="p-3 bg-blue-500/10 rounded-full">
//                                 <Database className="w-6 h-6 text-blue-400" />
//                              </div>
//                              <div className="font-mono text-xs text-zinc-500">[ 001 ]</div>
//                         </div>
//                         <div>
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12">WAREHOUSE<br/>OPTIMIZATION</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md">
//                                 Re-engineered legacy SQL architecture for a Fortune 500 retailer. Reduced query time by 85% and storage costs by $20k/mo.
//                             </p>
//                         </div>
//                     </div>

//                     {/* CARD 2 */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-900/50 border border-white/10 p-12 flex flex-col justify-between hover:bg-zinc-800/50 hover:border-white/20 transition-all duration-500 mr-12 snap-center rounded-sm">
//                         <div className="flex justify-between items-start">
//                              <div className="p-3 bg-purple-500/10 rounded-full">
//                                 <Code className="w-6 h-6 text-purple-400" />
//                              </div>
//                              <div className="font-mono text-xs text-zinc-500">[ 002 ]</div>
//                         </div>
//                         <div>
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12">INVENTORY<br/>PREDICTION API</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md">
//                                 A Flask-based REST API serving real-time predictions to 400+ endpoints. Utilizes Redis for caching and Celery for async tasks.
//                             </p>
//                         </div>
//                     </div>

//                      {/* CARD 3 */}
//                      <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-900/50 border border-white/10 p-12 flex flex-col justify-between hover:bg-zinc-800/50 hover:border-white/20 transition-all duration-500 mr-12 snap-center rounded-sm">
//                         <div className="flex justify-between items-start">
//                              <div className="p-3 bg-orange-500/10 rounded-full">
//                                 <Terminal className="w-6 h-6 text-orange-400" />
//                              </div>
//                              <div className="font-mono text-xs text-zinc-500">[ 003 ]</div>
//                         </div>
//                         <div>
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12">CLI<br/>DASHBOARD</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md">
//                                 Built a custom Rust-based terminal UI for monitoring server health, outperforming standard web-dashboards in low-bandwidth environments.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="min-w-[10vw] snap-center"></div>

//                 </div>
//             </motion.div>
//         )}
//       </AnimatePresence>

//     </main>
//   );
// }


// 'use client';

// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';
// import { ArrowDownRight, ArrowLeft, Database, Code, Terminal, Lock, AlertTriangle } from 'lucide-react';

// // Components
// import DataSculpture from '@/components/DataSculpture'; 
// import CustomCursor from '@/components/CustomCursor';
// import HeroTypewriter from '@/components/HeroTypewriter'; 
// import TechTicker from '@/components/TechTicker'; 

// // --- HELPER: TEXT SCRAMBLER COMPONENT ---
// const ScrambleText = ({ text, active, className }: { text: string, active: boolean, className?: string }) => {
//   const [display, setDisplay] = useState(text);
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

//   useEffect(() => {
//     if (!active) {
//         setDisplay(text);
//         return;
//     }

//     let interval: NodeJS.Timeout;
//     let iteration = 0;

//     interval = setInterval(() => {
//       setDisplay(
//         text
//           .split("")
//           .map((letter, index) => {
//             if (index < iteration) return text[index];
//             return chars[Math.floor(Math.random() * chars.length)];
//           })
//           .join("")
//       );

//       if (iteration >= text.length) clearInterval(interval);
//       iteration += 1 / 3; 
//     }, 30);

//     return () => clearInterval(interval);
//   }, [active, text]);

//   return <span className={className}>{display}</span>;
// };


// export default function Home() {
//   const containerRef = useRef(null);
  
//   // STATUS: 'idle' | 'scanning' | 'critical' | 'breached' | 'rebooting'
//   const [status, setStatus] = useState('idle'); 
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const heroTextY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

//   // --- THE HACKING LOGIC (ENTRY) ---
//   const handleTriggerEnter = () => {
//       if (status === 'idle') {
//           setStatus('scanning');
          
//           // PHASE 1: Scanning (1.5s) -> Then Critical
//           setTimeout(() => {
//               setStatus('critical'); // Triggers shake
//           }, 1500);

//           // PHASE 2: Breach (Total 2.2s) -> Then Overlay
//           setTimeout(() => {
//               setStatus('breached');
//           }, 2200);
//       }
//   };

//   // --- THE HARD REBOOT LOGIC (EXIT) ---
//   const handleReturn = () => {
//     // 1. Trigger White Flash state (covers screen)
//     setStatus('rebooting');
    
//     // 2. While screen is hidden by white flash, teleport to TOP (0)
//     setTimeout(() => {
//         window.scrollTo({ top: 0, behavior: "auto" }); // Snap to White Hero
//         setStatus('idle'); // Reset system state
//     }, 100); 
//   };

//   return (
//     <main ref={containerRef} className="relative min-h-[150vh] bg-white selection:bg-black selection:text-white">
      
//       <CustomCursor />

//       {/* LAYER 0: Background */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//           <DataSculpture />
//       </div>

//       {/* --- REBOOT FLASH OVERLAY --- */}
//       {/* This creates the "CRT Turn Off" effect when exiting */}
//       <AnimatePresence>
//           {status === 'rebooting' && (
//               <motion.div 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0, transition: { duration: 0.8 } }} // Slow fade out
//                   transition={{ duration: 0.1 }} // Fast flash in
//                   className="fixed inset-0 z-[999] bg-white pointer-events-none"
//               />
//           )}
//       </AnimatePresence>

//       {/* SECTION 1: HERO (White Mode) */}
//       <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
//         <motion.div 
//             style={{ y: heroTextY, opacity: heroOpacity }}
//             className="max-w-[90vw]"
//         >
//           <div className="text-xs font-mono text-zinc-400 mb-6 tracking-widest uppercase">
//             Data Analyst & Architect
//           </div>
//           <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black">
//             RAW DATA <br />
//             <span className="text-zinc-300">REFINED</span> <br />
//             INSIGHT.
//           </h1>
//         </motion.div>
        
//         <motion.div 
//             style={{ opacity: heroOpacity }}
//             className="absolute bottom-12 right-12 flex gap-4 items-center text-xs font-mono text-zinc-400"
//         >
//             <span className="animate-pulse">INITIALIZING_SYSTEM</span>
//             <ArrowDownRight className="w-4 h-4" />
//         </motion.div>
//       </section>

//       {/* SECTION 2: THE TERMINAL SPLIT */}
//       <div className="relative z-20 w-full">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             {/* LEFT SIDE: Fixed Window */}
//             <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-between px-12 pb-12 pt-32 pointer-events-none">
//                 <div className="text-xs font-mono text-black/30 uppercase tracking-widest flex items-center gap-2">
//                     <span className={`w-2 h-2 rounded-full ${status === 'scanning' ? 'bg-red-500 animate-ping' : 'bg-green-500 animate-pulse'}`}></span>
//                     System_Status: {status === 'idle' ? 'Active' : 'WARNING'}
//                 </div>
//                 <div className="text-xs font-mono text-black/30">
//                      [ Lat: 40.7128° N ] <br />
//                      [ Lon: 74.0060° W ]
//                 </div>
//             </div>

//             {/* RIGHT SIDE: The Terminal */}
//             <div className="bg-black text-white min-h-screen p-8 md:p-20 flex flex-col gap-12 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] mt-[10vh]">
                
//                 {/* 2.1 INTRO */}
//                 <div className="pt-24">
//                     <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">
//                         [ // Introduction ]
//                     </div>
//                     <HeroTypewriter />
//                 </div>

//                 {/* 2.2 TECH STACK */}
//                 <div>
//                      <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">
//                         [ // Stack ]
//                     </div>
//                     <TechTicker />
//                 </div>

//                 {/* 2.3 THE TRIGGER ZONE */}
//                 <div className="pb-32 pt-8 border-t border-zinc-800">
                    
//                     {/* VISIBLE PROMPT */}
//                     <div className="h-[20vh] w-full flex flex-col items-center justify-center gap-4 opacity-70">
//                         {status === 'scanning' || status === 'critical' ? (
//                             <Lock className="w-6 h-6 text-red-500 animate-pulse" />
//                         ) : (
//                             <Lock className="w-6 h-6 text-zinc-600" />
//                         )}
//                         <p className="font-mono text-sm text-zinc-400 uppercase tracking-widest">
//                             Restricted Area Below
//                         </p>
//                     </div>

//                     {/* THE HACKING SENSOR */}
//                     <motion.div 
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ amount: 0.8 }} 
//                         onViewportEnter={handleTriggerEnter}
//                         // SHAKE ANIMATION ON CRITICAL
//                         animate={status === 'critical' ? { x: [-5, 5, -5, 5, 0], transition: { duration: 0.2 } } : {}}
//                         className={`relative h-48 w-full border rounded-lg overflow-hidden mt-4 transition-colors duration-300 ${status === 'critical' ? 'border-red-500 bg-red-950/30' : 'border-red-900/30 bg-red-950/10'}`}
//                     >
//                         {/* STATE 1: SCANNING ANIMATION */}
//                         {(status === 'scanning' || status === 'critical') && (
//                             <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500 font-mono z-10">
//                                 <AlertTriangle className={`w-8 h-8 mb-4 ${status === 'critical' ? 'animate-bounce' : 'animate-pulse'}`} />
                                
//                                 <div className="text-sm tracking-widest font-bold">
//                                     <ScrambleText text="DETECTING BREACH..." active={true} />
//                                 </div>
                                
//                                 <div className="text-xs mt-2 text-red-400/70">
//                                     {status === 'critical' ? 'CRITICAL FAILURE' : 'BYPASSING FIREWALL'}
//                                 </div>
//                             </div>
//                         )}

//                         {/* PROGRESS BAR */}
//                         {(status === 'scanning' || status === 'critical') && (
//                             <motion.div 
//                                 initial={{ width: "0%" }}
//                                 animate={{ width: "100%" }}
//                                 transition={{ duration: 2.2, ease: "linear" }}
//                                 className="absolute bottom-0 left-0 h-1 bg-red-500 shadow-[0_0_20px_rgba(220,38,38,0.8)]"
//                             />
//                         )}

//                         {/* BACKGROUND GRID */}
//                         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
//                     </motion.div>
//                 </div>

//             </div>
//         </div>
//       </div>

//       {/* ======================================================== */}
//       {/* THE "WARP" OVERLAY (Instant Snap)                        */}
//       {/* ======================================================== */}
//       <AnimatePresence mode='wait'>
//         {status === 'breached' && (
//             <motion.div 
//                 initial={{ opacity: 0 }} 
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }} 
//                 // INSTANT TRANSITION ON ENTRY
//                 transition={{ duration: 0.1 }} 
//                 className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl text-white"
//             >
//                 <button 
//                     onClick={handleReturn}
//                     className="fixed top-8 left-8 z-50 text-white/40 hover:text-white flex items-center gap-2 font-mono text-xs uppercase tracking-widest cursor-pointer group"
//                 >
//                     <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
//                     Exit Archive
//                 </button>

//                 <div className="w-full h-full flex items-center overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
//                     <div className="min-w-[10vw] snap-center"></div>
                    
//                     <motion.div 
//                         initial={{ opacity: 0, x: 50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.2 }}
//                         className="min-w-[40vw] pr-20 snap-center"
//                     >
//                         <h2 className="text-[10vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
//                             DEEP <br/> STORAGE
//                         </h2>
//                         <div className="mt-8 font-mono text-red-500 text-xs tracking-widest border-l border-red-500 pl-4 flex flex-col gap-1">
//                             {/* SCRAMBLE TEXT ON TITLE TOO */}
//                             <span><ScrambleText text="WARNING: UNVERIFIED DATA" active={true} /></span>
//                             <span>SECURITY: DISABLED</span>
//                         </div>
//                     </motion.div>

//                     {/* CARD 1 */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-900/50 border border-white/10 p-12 flex flex-col justify-between hover:bg-zinc-800/50 hover:border-white/20 transition-all duration-500 mr-12 snap-center rounded-sm">
//                         <div className="flex justify-between items-start">
//                              <div className="p-3 bg-blue-500/10 rounded-full">
//                                 <Database className="w-6 h-6 text-blue-400" />
//                              </div>
//                              <div className="font-mono text-xs text-zinc-500">[ 001 ]</div>
//                         </div>
//                         <div>
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12">WAREHOUSE<br/>OPTIMIZATION</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md">
//                                 Re-engineered legacy SQL architecture for a Fortune 500 retailer. Reduced query time by 85% and storage costs by $20k/mo.
//                             </p>
//                         </div>
//                     </div>

//                     {/* CARD 2 */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-900/50 border border-white/10 p-12 flex flex-col justify-between hover:bg-zinc-800/50 hover:border-white/20 transition-all duration-500 mr-12 snap-center rounded-sm">
//                         <div className="flex justify-between items-start">
//                              <div className="p-3 bg-purple-500/10 rounded-full">
//                                 <Code className="w-6 h-6 text-purple-400" />
//                              </div>
//                              <div className="font-mono text-xs text-zinc-500">[ 002 ]</div>
//                         </div>
//                         <div>
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12">INVENTORY<br/>PREDICTION API</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md">
//                                 A Flask-based REST API serving real-time predictions to 400+ endpoints. Utilizes Redis for caching and Celery for async tasks.
//                             </p>
//                         </div>
//                     </div>

//                      {/* CARD 3 */}
//                      <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-900/50 border border-white/10 p-12 flex flex-col justify-between hover:bg-zinc-800/50 hover:border-white/20 transition-all duration-500 mr-12 snap-center rounded-sm">
//                         <div className="flex justify-between items-start">
//                              <div className="p-3 bg-orange-500/10 rounded-full">
//                                 <Terminal className="w-6 h-6 text-orange-400" />
//                              </div>
//                              <div className="font-mono text-xs text-zinc-500">[ 003 ]</div>
//                         </div>
//                         <div>
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12">CLI<br/>DASHBOARD</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md">
//                                 Built a custom Rust-based terminal UI for monitoring server health, outperforming standard web-dashboards in low-bandwidth environments.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="min-w-[10vw] snap-center"></div>

//                 </div>
//             </motion.div>
//         )}
//       </AnimatePresence>

//     </main>
//   );
// }

// 'use client';

// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';
// import { ArrowDownRight, ArrowLeft, Database, Code, Terminal, Lock, AlertTriangle, Scan, Activity, Cpu } from 'lucide-react';

// // Components (Assuming these exist based on previous context)
// import DataSculpture from '@/components/DataSculpture'; 
// import CustomCursor from '@/components/CustomCursor';
// import HeroTypewriter from '@/components/HeroTypewriter'; 
// import TechTicker from '@/components/TechTicker'; 

// // --- HELPER: TEXT SCRAMBLER ---
// const ScrambleText = ({ text, active, className }: { text: string, active: boolean, className?: string }) => {
//   const [display, setDisplay] = useState(text);
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

//   useEffect(() => {
//     if (!active) {
//         setDisplay(text);
//         return;
//     }
//     let interval: NodeJS.Timeout;
//     let iteration = 0;
//     interval = setInterval(() => {
//       setDisplay(
//         text.split("").map((letter, index) => {
//             if (index < iteration) return text[index];
//             return chars[Math.floor(Math.random() * chars.length)];
//           }).join("")
//       );
//       if (iteration >= text.length) clearInterval(interval);
//       iteration += 1 / 3; 
//     }, 30);
//     return () => clearInterval(interval);
//   }, [active, text]);
//   return <span className={className}>{display}</span>;
// };

// // --- NEW COMPONENT: THE JARVIS HUD BACKGROUND ---
// const JarvisBackdrop = () => {
//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center bg-black">
            
//             {/* 1. MOVING FLOOR GRID (Bright & Glowing) */}
//             <div className="absolute inset-0 opacity-40" 
//                  style={{ 
//                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', 
//                      backgroundSize: '60px 60px',
//                      transform: 'perspective(600px) rotateX(60deg) translateY(0%) translateZ(-200px)',
//                      maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)' // Fade out top so it looks like a floor
//                  }}>
//                  {/* Moving Scan Line on Floor */}
//                  <motion.div 
//                     animate={{ top: ['0%', '100%'] }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                     className="absolute w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
//                  />
//             </div>

//             {/* 2. THE REACTOR RINGS (Center Focus) */}
//             <div className="relative z-0 opacity-60 scale-125 md:scale-150">
//                 {/* Outer Ring: Dashed */}
//                 <motion.div 
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//                     className="absolute inset-0 w-[600px] h-[600px] border-[1px] border-dashed border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
//                 />
                
//                 {/* Middle Ring: Thick with Glow */}
//                 <motion.div 
//                     animate={{ rotate: -360 }}
//                     transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                     className="absolute inset-0 w-[450px] h-[450px] border-[2px] border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
//                 >
//                     <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1 shadow-[0_0_10px_white]"></div>
//                     <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 translate-y-1 shadow-[0_0_10px_white]"></div>
//                 </motion.div>

//                 {/* Inner Ring: Tech details */}
//                 <motion.div 
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//                     className="absolute inset-0 w-[300px] h-[300px] border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex items-center justify-center"
//                 >
//                     <div className="w-[90%] h-[90%] border-t border-b border-white/50 rounded-full"></div>
//                 </motion.div>

//                 {/* Core: Pulse */}
//                 <motion.div 
//                     animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                     className="absolute w-[100px] h-[100px] bg-white/5 rounded-full backdrop-blur-md border border-white/30 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)]"
//                 >
//                     <Cpu className="w-8 h-8 text-white/70" />
//                 </motion.div>
//             </div>

//             {/* 3. SIDE HUD COLUMNS (Vertical Data) */}
//             <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 text-[10px] font-mono text-white/40 tracking-widest text-right border-r border-white/20 pr-4 h-[60vh] justify-center">
//                 <div className="flex flex-col gap-1">
//                     <span className="text-white/80">SYS.OVR</span>
//                     <span>44.21.X</span>
//                     <span>89.00.Z</span>
//                 </div>
//                 <div className="flex flex-col gap-1">
//                     <span className="text-white/80">MEM.ALC</span>
//                     <span><ScrambleText text="99.9%" active={true}/></span>
//                 </div>
//                 <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent self-end"></div>
//             </div>

//             <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 text-[10px] font-mono text-white/40 tracking-widest text-left border-l border-white/20 pl-4 h-[60vh] justify-center">
//                 <div className="flex flex-col gap-1">
//                      <span className="text-white/80">NET.SPD</span>
//                     <span>10GB/S</span>
//                 </div>
//                 <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent self-start"></div>
//                  <div className="flex flex-col gap-1">
//                      <span className="text-white/80">ENC.KEY</span>
//                     <span><ScrambleText text="XH-992" active={true}/></span>
//                 </div>
//             </div>
            
//             {/* 4. VIGNETTE FADE */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_120%)] z-10 pointer-events-none"></div>
//         </div>
//     );
// };


// export default function Home() {
//   const containerRef = useRef(null);
//   const [status, setStatus] = useState('idle'); 
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const heroTextY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

//   const handleTriggerEnter = () => {
//       if (status === 'idle') {
//           setStatus('scanning');
//           setTimeout(() => setStatus('critical'), 1500);
//           setTimeout(() => setStatus('breached'), 2200);
//       }
//   };

//   const handleReturn = () => {
//     setStatus('rebooting');
//     setTimeout(() => {
//         window.scrollTo({ top: 0, behavior: "auto" }); 
//         setStatus('idle'); 
//     }, 100); 
//   };

//   return (
//     <main ref={containerRef} className="relative min-h-[150vh] bg-white selection:bg-black selection:text-white">
      
//       <CustomCursor />

//       {/* LAYER 0: Background */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//           <DataSculpture />
//       </div>

//       {/* --- REBOOT FLASH OVERLAY --- */}
//       {/* FIX: Corrected the TypeScript Error here by moving exit prop out of transition */}
//       <AnimatePresence>
//           {status === 'rebooting' && (
//               <motion.div 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }} // Corrected: Exit is top level
//                   transition={{ duration: 0.1 }} // Transition applies to animate
//                   className="fixed inset-0 z-[999] bg-white pointer-events-none"
//               >
//                   {/* Optional: Add a specific exit transition if needed using AnimatePresence props or custom logic, 
//                       but usually a simple exit prop suffices for fade out. 
//                       If you need different timing for exit, use: 
//                       exit={{ opacity: 0, transition: { duration: 0.8 } }} 
//                   */}
//               </motion.div>
//           )}
//       </AnimatePresence>

//       {/* SECTION 1: HERO */}
//       <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
//         <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="max-w-[90vw]">
//           <div className="text-xs font-mono text-zinc-400 mb-6 tracking-widest uppercase">Data Analyst & Architect</div>
//           <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black">
//             RAW DATA <br /><span className="text-zinc-300">REFINED</span> <br />INSIGHT.
//           </h1>
//         </motion.div>
//         <motion.div style={{ opacity: heroOpacity }} className="absolute bottom-12 right-12 flex gap-4 items-center text-xs font-mono text-zinc-400">
//             <span className="animate-pulse">INITIALIZING_SYSTEM</span>
//             <ArrowDownRight className="w-4 h-4" />
//         </motion.div>
//       </section>

//       {/* SECTION 2: THE TERMINAL SPLIT */}
//       <div className="relative z-20 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             {/* LEFT SIDE: Fixed Window */}
//             <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-between px-12 pb-12 pt-32 pointer-events-none">
//                 <div className="text-xs font-mono text-black/30 uppercase tracking-widest flex items-center gap-2">
//                     <span className={`w-2 h-2 rounded-full ${status === 'scanning' ? 'bg-red-500 animate-ping' : 'bg-green-500 animate-pulse'}`}></span>
//                     System_Status: {status === 'idle' ? 'Active' : 'WARNING'}
//                 </div>
//                 <div className="text-xs font-mono text-black/30">[ Lat: 40.7128° N ] <br />[ Lon: 74.0060° W ]</div>
//             </div>

//             {/* RIGHT SIDE: The Terminal */}
//             <div className="bg-black text-white min-h-screen p-8 md:p-20 flex flex-col gap-12 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] mt-[10vh]">
//                 <div className="pt-24">
//                     <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">[ // Introduction ]</div>
//                     <HeroTypewriter />
//                 </div>
//                 <div>
//                      <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">[ // Stack ]</div>
//                     <TechTicker />
//                 </div>

//                 {/* THE TRIGGER ZONE */}
//                 <div className="pb-32 pt-8 border-t border-zinc-800">
//                     <div className="h-[20vh] w-full flex flex-col items-center justify-center gap-4 opacity-70">
//                         {status === 'scanning' || status === 'critical' ? (
//                             <Lock className="w-6 h-6 text-red-500 animate-pulse" />
//                         ) : (
//                             <Lock className="w-6 h-6 text-zinc-600" />
//                         )}
//                         <p className="font-mono text-sm text-zinc-400 uppercase tracking-widest">Restricted Area Below</p>
//                     </div>

//                     <motion.div 
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ amount: 0.8 }} 
//                         onViewportEnter={handleTriggerEnter}
//                         animate={status === 'critical' ? { x: [-5, 5, -5, 5, 0], transition: { duration: 0.2 } } : {}}
//                         className={`relative h-48 w-full border rounded-lg overflow-hidden mt-4 transition-colors duration-300 ${status === 'critical' ? 'border-red-500 bg-red-950/30' : 'border-red-900/30 bg-red-950/10'}`}
//                     >
//                         {(status === 'scanning' || status === 'critical') && (
//                             <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500 font-mono z-10">
//                                 <AlertTriangle className={`w-8 h-8 mb-4 ${status === 'critical' ? 'animate-bounce' : 'animate-pulse'}`} />
//                                 <div className="text-sm tracking-widest font-bold"><ScrambleText text="DETECTING BREACH..." active={true} /></div>
//                                 <div className="text-xs mt-2 text-red-400/70">{status === 'critical' ? 'CRITICAL FAILURE' : 'BYPASSING FIREWALL'}</div>
//                             </div>
//                         )}
//                         {(status === 'scanning' || status === 'critical') && (
//                             <motion.div 
//                                 initial={{ width: "0%" }}
//                                 animate={{ width: "100%" }}
//                                 transition={{ duration: 2.2, ease: "linear" }}
//                                 className="absolute bottom-0 left-0 h-1 bg-red-500 shadow-[0_0_20px_rgba(220,38,38,0.8)]"
//                             />
//                         )}
//                         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//       </div>

//       {/* ======================================================== */}
//       {/* THE "JARVIS" OVERLAY (EXTRAVAGANT HUD)                   */}
//       {/* ======================================================== */}
//       <AnimatePresence mode='wait'>
//         {status === 'breached' && (
//             <motion.div 
//                 initial={{ opacity: 0 }} 
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }} 
//                 transition={{ duration: 0.2 }} 
//                 className="fixed inset-0 z-[100] bg-black text-white overflow-hidden"
//             >
//                 {/* --- THE NEW JARVIS BACKGROUND --- */}
//                 <JarvisBackdrop />
//                 {/* ------------------------------------ */}

//                 <button 
//                     onClick={handleReturn}
//                     className="fixed top-8 left-8 z-50 text-white/40 hover:text-white flex items-center gap-2 font-mono text-xs uppercase tracking-widest cursor-pointer group bg-black/50 px-4 py-2 border border-white/10 rounded-full"
//                 >
//                     <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
//                     Exit Archive
//                 </button>

//                 {/* SCROLLING CONTENT LAYER */}
//                 <div className="relative z-10 w-full h-full flex items-center overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pl-[10vw]">
                    
//                     {/* Intro Title */}
//                     <motion.div 
//                         initial={{ opacity: 0, x: 50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.2 }}
//                         className="min-w-[40vw] pr-20 snap-center shrink-0"
//                     >
//                         <h2 className="text-[10vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
//                             DEEP <br/> STORAGE
//                         </h2>
//                         <div className="mt-8 font-mono text-cyan-400 text-xs tracking-widest border-l-2 border-cyan-400 pl-4 flex flex-col gap-1 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
//                             <span className="font-bold"><ScrambleText text="WARNING: ENCRYPTION BROKEN" active={true} /></span>
//                             <span className="text-cyan-400/60">ACCESS LEVEL: UNRESTRICTED</span>
//                         </div>
//                     </motion.div>

//                     {/* CARD 1 */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-cyan-400/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden">
//                          {/* Card Internal Glow */}
//                          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
                        
//                         <div className="flex justify-between items-start relative z-10">
//                              <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"><Database className="w-6 h-6 text-cyan-300" /></div>
//                              <div className="font-mono text-xs text-zinc-500">[ 001 ]</div>
//                         </div>
//                         <div className="relative z-10">
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:text-cyan-100 transition-colors">WAREHOUSE<br/>OPTIMIZATION</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4">
//                                 Re-engineered legacy SQL architecture. <span className="text-cyan-400">Query time -85%</span>. Storage costs reduced by $20k/mo.
//                             </p>
//                         </div>
//                     </div>

//                     {/* CARD 2 */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-purple-400/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden">
//                         <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all"></div>

//                         <div className="flex justify-between items-start relative z-10">
//                              <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"><Code className="w-6 h-6 text-purple-300" /></div>
//                              <div className="font-mono text-xs text-zinc-500">[ 002 ]</div>
//                         </div>
//                         <div className="relative z-10">
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:text-purple-100 transition-colors">PREDICTION<br/>ENGINE API</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4">
//                                 Flask-based REST API. Serving 400+ endpoints. <span className="text-purple-400">Redis Cache & Celery</span> integrated for async tasks.
//                             </p>
//                         </div>
//                     </div>

//                      {/* CARD 3 */}
//                      <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-orange-400/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden">
//                         <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all"></div>

//                         <div className="flex justify-between items-start relative z-10">
//                              <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"><Terminal className="w-6 h-6 text-orange-300" /></div>
//                              <div className="font-mono text-xs text-zinc-500">[ 003 ]</div>
//                         </div>
//                         <div className="relative z-10">
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:text-orange-100 transition-colors">RUST CLI<br/>DASHBOARD</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4">
//                                 Custom terminal UI for server monitoring. <span className="text-orange-400">Zero-latency</span> rendering in low-bandwidth environments.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="min-w-[10vw] snap-center"></div>
//                 </div>
//             </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// }



// 'use client';

// // 1. Added 'Variants' to the import list
// import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';
// import { ArrowDownRight, ArrowLeft, Database, Code, Terminal, Lock, AlertTriangle, Cpu } from 'lucide-react';

// // Components
// import DataSculpture from '@/components/DataSculpture'; 
// import CustomCursor from '@/components/CustomCursor';
// import HeroTypewriter from '@/components/HeroTypewriter'; 
// import TechTicker from '@/components/TechTicker'; 

// // --- HELPER: TEXT SCRAMBLER ---
// const ScrambleText = ({ text, active, className }: { text: string, active: boolean, className?: string }) => {
//   const [display, setDisplay] = useState(text);
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

//   useEffect(() => {
//     if (!active) {
//         setDisplay(text);
//         return;
//     }
//     let interval: NodeJS.Timeout;
//     let iteration = 0;
//     interval = setInterval(() => {
//       setDisplay(
//         text.split("").map((letter, index) => {
//             if (index < iteration) return text[index];
//             return chars[Math.floor(Math.random() * chars.length)];
//           }).join("")
//       );
//       if (iteration >= text.length) clearInterval(interval);
//       iteration += 1 / 3; 
//     }, 30);
//     return () => clearInterval(interval);
//   }, [active, text]);
//   return <span className={className}>{display}</span>;
// };

// // --- COMPONENT: THE JARVIS HUD BACKGROUND ---
// const JarvisBackdrop = () => {
//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center bg-black">
            
//             {/* 1. MOVING FLOOR GRID */}
//             <div className="absolute inset-0 opacity-40" 
//                  style={{ 
//                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', 
//                      backgroundSize: '60px 60px',
//                      transform: 'perspective(600px) rotateX(60deg) translateY(0%) translateZ(-200px)',
//                      maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)' 
//                  }}>
//                  <motion.div 
//                     animate={{ top: ['0%', '100%'] }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                     className="absolute w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
//                  />
//             </div>

//             {/* 2. THE REACTOR RINGS */}
//             <div className="relative z-0 opacity-60 scale-125 md:scale-150">
//                 <motion.div 
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//                     className="absolute inset-0 w-[600px] h-[600px] border-[1px] border-dashed border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
//                 />
//                 <motion.div 
//                     animate={{ rotate: -360 }}
//                     transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                     className="absolute inset-0 w-[450px] h-[450px] border-[2px] border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
//                 >
//                     <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1 shadow-[0_0_10px_white]"></div>
//                     <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 translate-y-1 shadow-[0_0_10px_white]"></div>
//                 </motion.div>
//                 <motion.div 
//                     animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                     className="absolute w-[100px] h-[100px] bg-white/5 rounded-full backdrop-blur-md border border-white/30 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)]"
//                 >
//                     <Cpu className="w-8 h-8 text-white/70" />
//                 </motion.div>
//             </div>

//             {/* 3. VIGNETTE */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_120%)] z-10 pointer-events-none"></div>
//         </div>
//     );
// };


// export default function Home() {
//   const containerRef = useRef(null);
//   const [status, setStatus] = useState('idle'); 
//   const [isExiting, setIsExiting] = useState(false); 
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const heroTextY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

//   // --- PREVENT SCROLLING WHEN OVERLAY IS OPEN ---
//   useEffect(() => {
//     if (status === 'breached') {
//         document.body.style.overflow = 'hidden';
//     } else {
//         document.body.style.overflow = 'unset';
//     }
//     return () => { document.body.style.overflow = 'unset'; }
//   }, [status]);

//   const handleTriggerEnter = () => {
//       if (status === 'idle') {
//           setStatus('scanning');
//           setTimeout(() => setStatus('critical'), 1500);
//           setTimeout(() => setStatus('breached'), 2200);
//       }
//   };

//   // --- ANIMATION VARIANTS (Fixed Typing) ---
//   // 2. Explicitly typed as 'Variants' to solve the TS Error
//   const overlayVariants: Variants = {
//     hidden: { 
//         opacity: 0,
//         scale: 1, 
//     },
//     visible: { 
//         opacity: 1,
//         scale: 1,
//         filter: ["brightness(1)"],
//         transition: { duration: 0.5 }
//     },
//     exit: { 
//         scaleY: [1, 0.005, 0.005],
//         scaleX: [1, 1, 0],
//         opacity: [1, 1, 0],
//         // 3. Changed filter to an array to match the keyframe structure of scale/opacity
//         filter: ["brightness(1)", "brightness(1)", "brightness(2)"],
//         transition: { 
//             duration: 0.4, 
//             times: [0, 0.6, 1],
//             ease: "easeInOut"
//         }
//     }
//   };

//   const handleReturn = async () => {
//     setIsExiting(true); 
//     await new Promise(r => setTimeout(r, 400));
//     setStatus('rebooting'); 
//     setTimeout(() => {
//         window.scrollTo({ top: 0, behavior: "auto" }); 
//         setStatus('idle');
//         setIsExiting(false);
//     }, 100); 
//   };

//   return (
//     <main ref={containerRef} className="relative min-h-[150vh] bg-white selection:bg-black selection:text-white">
      
//       <CustomCursor />

//       {/* LAYER 0: Background */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//           <DataSculpture />
//       </div>

//       {/* --- REBOOT FLASH OVERLAY --- */}
//       <AnimatePresence>
//           {status === 'rebooting' && (
//               <motion.div 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }} 
//                   transition={{ duration: 0.1 }} 
//                   className="fixed inset-0 z-[9999] bg-white pointer-events-none"
//               />
//           )}
//       </AnimatePresence>

//       {/* SECTION 1: HERO */}
//       <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
//         <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="max-w-[90vw]">
//           <div className="text-xs font-mono text-zinc-400 mb-6 tracking-widest uppercase">Data Analyst & Architect</div>
//           <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black">
//             RAW DATA <br /><span className="text-zinc-300">REFINED</span> <br />INSIGHT.
//           </h1>
//         </motion.div>
//         <motion.div style={{ opacity: heroOpacity }} className="absolute bottom-12 right-12 flex gap-4 items-center text-xs font-mono text-zinc-400">
//             <span className="animate-pulse">INITIALIZING_SYSTEM</span>
//             <ArrowDownRight className="w-4 h-4" />
//         </motion.div>
//       </section>

//       {/* SECTION 2: THE TERMINAL SPLIT */}
//       <div className="relative z-20 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             {/* LEFT SIDE: Fixed Window */}
//             <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-between px-12 pb-12 pt-32 pointer-events-none">
//                 <div className="text-xs font-mono text-black/30 uppercase tracking-widest flex items-center gap-2">
//                     <span className={`w-2 h-2 rounded-full ${status === 'scanning' ? 'bg-red-500 animate-ping' : 'bg-green-500 animate-pulse'}`}></span>
//                     System_Status: {status === 'idle' ? 'Active' : 'WARNING'}
//                 </div>
//             </div>

//             {/* RIGHT SIDE: The Terminal */}
//             <div className="bg-black text-white min-h-screen p-8 md:p-20 flex flex-col gap-12 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] mt-[10vh]">
//                 <div className="pt-24">
//                     <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">[ // Introduction ]</div>
//                     <HeroTypewriter />
//                 </div>
//                 <div>
//                      <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">[ // Stack ]</div>
//                     <TechTicker />
//                 </div>

//                 {/* THE TRIGGER ZONE */}
//                 <div className="pb-32 pt-8 border-t border-zinc-800">
//                     <div className="h-[20vh] w-full flex flex-col items-center justify-center gap-4 opacity-70">
//                         {status === 'scanning' || status === 'critical' ? (
//                             <Lock className="w-6 h-6 text-red-500 animate-pulse" />
//                         ) : (
//                             <Lock className="w-6 h-6 text-zinc-600" />
//                         )}
//                         <p className="font-mono text-sm text-zinc-400 uppercase tracking-widest">Restricted Area Below</p>
//                     </div>

//                     <motion.div 
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ amount: 0.8 }} 
//                         onViewportEnter={handleTriggerEnter}
//                         animate={status === 'critical' ? { x: [-5, 5, -5, 5, 0], transition: { duration: 0.2 } } : {}}
//                         className={`relative h-48 w-full border rounded-lg overflow-hidden mt-4 transition-colors duration-300 ${status === 'critical' ? 'border-red-500 bg-red-950/30' : 'border-red-900/30 bg-red-950/10'}`}
//                     >
//                         {(status === 'scanning' || status === 'critical') && (
//                             <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500 font-mono z-10">
//                                 <AlertTriangle className={`w-8 h-8 mb-4 ${status === 'critical' ? 'animate-bounce' : 'animate-pulse'}`} />
//                                 <div className="text-sm tracking-widest font-bold"><ScrambleText text="DETECTING BREACH..." active={true} /></div>
//                                 <div className="text-xs mt-2 text-red-400/70">{status === 'critical' ? 'CRITICAL FAILURE' : 'BYPASSING FIREWALL'}</div>
//                             </div>
//                         )}
//                         {(status === 'scanning' || status === 'critical') && (
//                             <motion.div 
//                                 initial={{ width: "0%" }}
//                                 animate={{ width: "100%" }}
//                                 transition={{ duration: 2.2, ease: "linear" }}
//                                 className="absolute bottom-0 left-0 h-1 bg-red-500 shadow-[0_0_20px_rgba(220,38,38,0.8)]"
//                             />
//                         )}
//                         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//       </div>

//       {/* ======================================================== */}
//       {/* THE "JARVIS" OVERLAY                                     */}
//       {/* ======================================================== */}
//       {status === 'breached' && (
//             <motion.div 
//                 key="jarvis-interface"
//                 variants={overlayVariants}
//                 initial="hidden"
//                 animate={isExiting ? "exit" : "visible"}
//                 className="fixed inset-0 z-[100] bg-black text-white overflow-hidden origin-center" 
//             >
//                 {/* --- BACKGROUND --- */}
//                 <JarvisBackdrop />

//                 {/* EXIT BUTTON */}
//                 <button 
//                     onClick={handleReturn}
//                     className="fixed top-8 left-8 z-[999] text-white/40 hover:text-white flex items-center gap-2 font-mono text-xs uppercase tracking-widest cursor-pointer group bg-black/50 px-4 py-2 border border-white/10 rounded-full"
//                 >
//                     <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
//                     Exit Archive
//                 </button>

//                 {/* SCROLLING CONTENT LAYER */}
//                 <motion.div 
//                     animate={{ opacity: isExiting ? 0 : 1 }}
//                     transition={{ duration: 0.2 }}
//                     className="relative z-10 w-full h-full flex items-center overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pl-[10vw]"
//                 >
                    
//                     {/* Intro Title */}
//                     <div className="min-w-[40vw] pr-20 snap-center shrink-0">
//                         <h2 className="text-[10vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
//                             DEEP <br/> STORAGE
//                         </h2>
//                         <div className="mt-8 font-mono text-cyan-400 text-xs tracking-widest border-l-2 border-cyan-400 pl-4 flex flex-col gap-1 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
//                             <span className="font-bold"><ScrambleText text="WARNING: ENCRYPTION BROKEN" active={true} /></span>
//                             <span className="text-cyan-400/60">ACCESS LEVEL: UNRESTRICTED</span>
//                         </div>
//                     </div>

//                     {/* CARD 1 */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-cyan-400/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden">
//                          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
//                         <div className="flex justify-between items-start relative z-10">
//                              <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"><Database className="w-6 h-6 text-cyan-300" /></div>
//                              <div className="font-mono text-xs text-zinc-500">[ 001 ]</div>
//                         </div>
//                         <div className="relative z-10">
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:text-cyan-100 transition-colors">WAREHOUSE<br/>OPTIMIZATION</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4">
//                                 Re-engineered legacy SQL architecture. <span className="text-cyan-400">Query time -85%</span>. Storage costs reduced by $20k/mo.
//                             </p>
//                         </div>
//                     </div>

//                     {/* CARD 2 */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-purple-400/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden">
//                         <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all"></div>
//                         <div className="flex justify-between items-start relative z-10">
//                              <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"><Code className="w-6 h-6 text-purple-300" /></div>
//                              <div className="font-mono text-xs text-zinc-500">[ 002 ]</div>
//                         </div>
//                         <div className="relative z-10">
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:text-purple-100 transition-colors">PREDICTION<br/>ENGINE API</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4">
//                                 Flask-based REST API. Serving 400+ endpoints. <span className="text-purple-400">Redis Cache & Celery</span> integrated for async tasks.
//                             </p>
//                         </div>
//                     </div>

//                      {/* CARD 3 */}
//                      <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-orange-400/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden">
//                         <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all"></div>
//                         <div className="flex justify-between items-start relative z-10">
//                              <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"><Terminal className="w-6 h-6 text-orange-300" /></div>
//                              <div className="font-mono text-xs text-zinc-500">[ 003 ]</div>
//                         </div>
//                         <div className="relative z-10">
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:text-orange-100 transition-colors">RUST CLI<br/>DASHBOARD</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4">
//                                 Custom terminal UI for server monitoring. <span className="text-orange-400">Zero-latency</span> rendering in low-bandwidth environments.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="min-w-[10vw] snap-center"></div>
//                 </motion.div>
//             </motion.div>
//       )}
//     </main>
//   );
// }


// 'use client';

// // 1. Added 'Variants' to the import list for TypeScript safety
// import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';
// import { ArrowDownRight, ArrowLeft, Database, Code, Terminal, Lock, AlertTriangle, Cpu } from 'lucide-react';

// // Components
// import DataSculpture from '@/components/DataSculpture'; 
// import CustomCursor from '@/components/CustomCursor';
// import HeroTypewriter from '@/components/HeroTypewriter'; 
// import TechTicker from '@/components/TechTicker'; 

// // --- HELPER: TEXT SCRAMBLER ---
// const ScrambleText = ({ text, active, className }: { text: string, active: boolean, className?: string }) => {
//   const [display, setDisplay] = useState(text);
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

//   useEffect(() => {
//     if (!active) {
//         setDisplay(text);
//         return;
//     }
//     let interval: NodeJS.Timeout;
//     let iteration = 0;
//     interval = setInterval(() => {
//       setDisplay(
//         text.split("").map((letter, index) => {
//             if (index < iteration) return text[index];
//             return chars[Math.floor(Math.random() * chars.length)];
//           }).join("")
//       );
//       if (iteration >= text.length) clearInterval(interval);
//       iteration += 1 / 3; 
//     }, 30);
//     return () => clearInterval(interval);
//   }, [active, text]);
//   return <span className={className}>{display}</span>;
// };

// // --- COMPONENT: THE JARVIS HUD BACKGROUND ---
// const JarvisBackdrop = () => {
//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center bg-black">
            
//             {/* 1. MOVING FLOOR GRID */}
//             <div className="absolute inset-0 opacity-40" 
//                  style={{ 
//                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', 
//                      backgroundSize: '60px 60px',
//                      transform: 'perspective(600px) rotateX(60deg) translateY(0%) translateZ(-200px)',
//                      maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)' 
//                  }}>
//                  <motion.div 
//                     animate={{ top: ['0%', '100%'] }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                     className="absolute w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
//                  />
//             </div>

//             {/* 2. THE REACTOR RINGS */}
//             <div className="relative z-0 opacity-60 scale-125 md:scale-150">
//                 <motion.div 
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//                     className="absolute inset-0 w-[600px] h-[600px] border-[1px] border-dashed border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
//                 />
//                 <motion.div 
//                     animate={{ rotate: -360 }}
//                     transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                     className="absolute inset-0 w-[450px] h-[450px] border-[2px] border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
//                 >
//                     <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1 shadow-[0_0_10px_white]"></div>
//                     <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 translate-y-1 shadow-[0_0_10px_white]"></div>
//                 </motion.div>
//                 <motion.div 
//                     animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                     className="absolute w-[100px] h-[100px] bg-white/5 rounded-full backdrop-blur-md border border-white/30 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)]"
//                 >
//                     <Cpu className="w-8 h-8 text-white/70" />
//                 </motion.div>
//             </div>

//             {/* 3. VIGNETTE */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_120%)] z-10 pointer-events-none"></div>
//         </div>
//     );
// };


// export default function Home() {
//   const containerRef = useRef(null);
//   const [status, setStatus] = useState('idle'); 
//   const [isExiting, setIsExiting] = useState(false); 
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const heroTextY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

//   // --- PREVENT SCROLLING WHEN OVERLAY IS OPEN ---
//   useEffect(() => {
//     if (status === 'breached') {
//         document.body.style.overflow = 'hidden';
//     } else {
//         document.body.style.overflow = 'unset';
//     }
//     return () => { document.body.style.overflow = 'unset'; }
//   }, [status]);

//   const handleTriggerEnter = () => {
//       if (status === 'idle') {
//           setStatus('scanning');
//           setTimeout(() => setStatus('critical'), 1500);
//           setTimeout(() => setStatus('breached'), 2200);
//       }
//   };

//   // --- ANIMATION VARIANTS ---
//   const overlayVariants: Variants = {
//     hidden: { 
//         opacity: 0,
//         scale: 1, 
//     },
//     visible: { 
//         opacity: 1,
//         scale: 1,
//         filter: ["brightness(1)"],
//         transition: { duration: 0.5 }
//     },
//     exit: { 
//         scaleY: [1, 0.005, 0.005],
//         scaleX: [1, 1, 0],
//         opacity: [1, 1, 0],
//         filter: ["brightness(1)", "brightness(1)", "brightness(2)"],
//         transition: { 
//             duration: 0.4, 
//             times: [0, 0.6, 1],
//             ease: "easeInOut"
//         }
//     }
//   };

//   const handleReturn = async () => {
//     setIsExiting(true); 
//     await new Promise(r => setTimeout(r, 400));
//     setStatus('rebooting'); 
//     setTimeout(() => {
//         window.scrollTo({ top: 0, behavior: "auto" }); 
//         setStatus('idle');
//         setIsExiting(false);
//     }, 100); 
//   };

//   return (
//     <main 
//       ref={containerRef} 
//       className="relative min-h-[150vh] bg-white selection:bg-black selection:text-white"
//     >
      
//       {/* --- THE FIX ---
//          We pass 'isInverse' based on the status.
//          status === 'breached' -> Overlay is open -> Cursor becomes White (isInverse=true)
//          Any other status -> Main page -> Cursor becomes Black (isInverse=false)
//       */}
//       <CustomCursor isInverse={status === 'breached'} />

//       {/* LAYER 0: Background */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//           <DataSculpture />
//       </div>

//       {/* --- REBOOT FLASH OVERLAY --- */}
//       <AnimatePresence>
//           {status === 'rebooting' && (
//               <motion.div 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }} 
//                   transition={{ duration: 0.1 }} 
//                   className="fixed inset-0 z-[9999] bg-white pointer-events-none"
//               />
//           )}
//       </AnimatePresence>

//       {/* SECTION 1: HERO */}
//       <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
//         <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="max-w-[90vw]">
//           <div className="text-xs font-mono text-zinc-400 mb-6 tracking-widest uppercase">Data Analyst & Architect</div>
//           <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black">
//             RAW DATA <br /><span className="text-zinc-300">REFINED</span> <br />INSIGHT.
//           </h1>
//         </motion.div>
//         <motion.div style={{ opacity: heroOpacity }} className="absolute bottom-12 right-12 flex gap-4 items-center text-xs font-mono text-zinc-400">
//             <span className="animate-pulse">INITIALIZING_SYSTEM</span>
//             <ArrowDownRight className="w-4 h-4" />
//         </motion.div>
//       </section>

//       {/* SECTION 2: THE TERMINAL SPLIT */}
//       <div className="relative z-20 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             {/* LEFT SIDE: Fixed Window */}
//             <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-between px-12 pb-12 pt-32 pointer-events-none">
//                 <div className="text-xs font-mono text-black/30 uppercase tracking-widest flex items-center gap-2">
//                     <span className={`w-2 h-2 rounded-full ${status === 'scanning' ? 'bg-red-500 animate-ping' : 'bg-green-500 animate-pulse'}`}></span>
//                     System_Status: {status === 'idle' ? 'Active' : 'WARNING'}
//                 </div>
//             </div>

//             {/* RIGHT SIDE: The Terminal */}
//             <div className="bg-black text-white min-h-screen p-8 md:p-20 flex flex-col gap-12 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] mt-[10vh]">
//                 <div className="pt-24">
//                     <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">[ // Introduction ]</div>
//                     <HeroTypewriter />
//                 </div>
//                 <div>
//                      <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">[ // Stack ]</div>
//                     <TechTicker />
//                 </div>

//                 {/* THE TRIGGER ZONE */}
//                 <div className="pb-32 pt-8 border-t border-zinc-800">
//                     <div className="h-[20vh] w-full flex flex-col items-center justify-center gap-4 opacity-70">
//                         {status === 'scanning' || status === 'critical' ? (
//                             <Lock className="w-6 h-6 text-red-500 animate-pulse" />
//                         ) : (
//                             <Lock className="w-6 h-6 text-zinc-600" />
//                         )}
//                         <p className="font-mono text-sm text-zinc-400 uppercase tracking-widest">Restricted Area Below</p>
//                     </div>

//                     <motion.div 
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ amount: 0.8 }} 
//                         onViewportEnter={handleTriggerEnter}
//                         animate={status === 'critical' ? { x: [-5, 5, -5, 5, 0], transition: { duration: 0.2 } } : {}}
//                         className={`relative h-48 w-full border rounded-lg overflow-hidden mt-4 transition-colors duration-300 ${status === 'critical' ? 'border-red-500 bg-red-950/30' : 'border-red-900/30 bg-red-950/10'}`}
//                     >
//                         {(status === 'scanning' || status === 'critical') && (
//                             <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500 font-mono z-10">
//                                 <AlertTriangle className={`w-8 h-8 mb-4 ${status === 'critical' ? 'animate-bounce' : 'animate-pulse'}`} />
//                                 <div className="text-sm tracking-widest font-bold"><ScrambleText text="DETECTING BREACH..." active={true} /></div>
//                                 <div className="text-xs mt-2 text-red-400/70">{status === 'critical' ? 'CRITICAL FAILURE' : 'BYPASSING FIREWALL'}</div>
//                             </div>
//                         )}
//                         {(status === 'scanning' || status === 'critical') && (
//                             <motion.div 
//                                 initial={{ width: "0%" }}
//                                 animate={{ width: "100%" }}
//                                 transition={{ duration: 2.2, ease: "linear" }}
//                                 className="absolute bottom-0 left-0 h-1 bg-red-500 shadow-[0_0_20px_rgba(220,38,38,0.8)]"
//                             />
//                         )}
//                         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//       </div>

//       {/* ======================================================== */}
//       {/* THE "JARVIS" OVERLAY                                     */}
//       {/* ======================================================== */}
//       {status === 'breached' && (
//             <motion.div 
//                 key="jarvis-interface"
//                 variants={overlayVariants}
//                 initial="hidden"
//                 animate={isExiting ? "exit" : "visible"}
//                 className="fixed inset-0 z-[100] bg-black text-white overflow-hidden origin-center" 
//             >
//                 {/* --- BACKGROUND --- */}
//                 <JarvisBackdrop />

//                 {/* EXIT BUTTON */}
//                 <button 
//                     onClick={handleReturn}
//                     className="fixed top-8 left-8 z-[999] text-white/40 hover:text-white flex items-center gap-2 font-mono text-xs uppercase tracking-widest cursor-pointer group bg-black/50 px-4 py-2 border border-white/10 rounded-full"
//                 >
//                     <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
//                     Exit Archive
//                 </button>

//                 {/* SCROLLING CONTENT LAYER */}
//                 <motion.div 
//                     animate={{ opacity: isExiting ? 0 : 1 }}
//                     transition={{ duration: 0.2 }}
//                     className="relative z-10 w-full h-full flex items-center overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pl-[10vw]"
//                 >
                    
//                     {/* Intro Title */}
//                     <div className="min-w-[40vw] pr-20 snap-center shrink-0">
//                         <h2 className="text-[10vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
//                             DEEP <br/> STORAGE
//                         </h2>
//                         <div className="mt-8 font-mono text-cyan-400 text-xs tracking-widest border-l-2 border-cyan-400 pl-4 flex flex-col gap-1 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
//                             <span className="font-bold"><ScrambleText text="WARNING: ENCRYPTION BROKEN" active={true} /></span>
//                             <span className="text-cyan-400/60">ACCESS LEVEL: UNRESTRICTED</span>
//                         </div>
//                     </div>

//                     {/* CARD 1 */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-cyan-400/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden">
//                          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
//                         <div className="flex justify-between items-start relative z-10">
//                              <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"><Database className="w-6 h-6 text-cyan-300" /></div>
//                              <div className="font-mono text-xs text-zinc-500">[ 001 ]</div>
//                         </div>
//                         <div className="relative z-10">
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:text-cyan-100 transition-colors">WAREHOUSE<br/>OPTIMIZATION</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4">
//                                 Re-engineered legacy SQL architecture. <span className="text-cyan-400">Query time -85%</span>. Storage costs reduced by $20k/mo.
//                             </p>
//                         </div>
//                     </div>

//                     {/* CARD 2 */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-purple-400/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden">
//                         <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all"></div>
//                         <div className="flex justify-between items-start relative z-10">
//                              <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"><Code className="w-6 h-6 text-purple-300" /></div>
//                              <div className="font-mono text-xs text-zinc-500">[ 002 ]</div>
//                         </div>
//                         <div className="relative z-10">
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:text-purple-100 transition-colors">PREDICTION<br/>ENGINE API</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4">
//                                 Flask-based REST API. Serving 400+ endpoints. <span className="text-purple-400">Redis Cache & Celery</span> integrated for async tasks.
//                             </p>
//                         </div>
//                     </div>

//                      {/* CARD 3 */}
//                      <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-orange-400/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden">
//                         <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all"></div>
//                         <div className="flex justify-between items-start relative z-10">
//                              <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"><Terminal className="w-6 h-6 text-orange-300" /></div>
//                              <div className="font-mono text-xs text-zinc-500">[ 003 ]</div>
//                         </div>
//                         <div className="relative z-10">
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:text-orange-100 transition-colors">RUST CLI<br/>DASHBOARD</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4">
//                                 Custom terminal UI for server monitoring. <span className="text-orange-400">Zero-latency</span> rendering in low-bandwidth environments.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="min-w-[10vw] snap-center"></div>
//                 </motion.div>
//             </motion.div>
//       )}
//     </main>
//   );
// }

// 'use client';

// // 1. ADDED: ChevronLeft, ChevronRight, MousePointer2 for the scroll UI
// import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';
// import { ArrowDownRight, ArrowLeft, Database, Code, Terminal, Lock, AlertTriangle, Cpu, ChevronLeft, ChevronRight, MousePointer2 } from 'lucide-react';

// // Components
// import DataSculpture from '@/components/DataSculpture'; 
// import CustomCursor from '@/components/CustomCursor';
// import HeroTypewriter from '@/components/HeroTypewriter'; 
// import TechTicker from '@/components/TechTicker'; 

// // --- HELPER: TEXT SCRAMBLER ---
// const ScrambleText = ({ text, active, className }: { text: string, active: boolean, className?: string }) => {
//   const [display, setDisplay] = useState(text);
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

//   useEffect(() => {
//     if (!active) {
//         setDisplay(text);
//         return;
//     }
//     let interval: NodeJS.Timeout;
//     let iteration = 0;
//     interval = setInterval(() => {
//       setDisplay(
//         text.split("").map((letter, index) => {
//             if (index < iteration) return text[index];
//             return chars[Math.floor(Math.random() * chars.length)];
//           }).join("")
//       );
//       if (iteration >= text.length) clearInterval(interval);
//       iteration += 1 / 3; 
//     }, 30);
//     return () => clearInterval(interval);
//   }, [active, text]);
//   return <span className={className}>{display}</span>;
// };

// // --- COMPONENT: THE JARVIS HUD BACKGROUND ---
// const JarvisBackdrop = () => {
//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center bg-black">
            
//             {/* 1. MOVING FLOOR GRID */}
//             <div className="absolute inset-0 opacity-40" 
//                  style={{ 
//                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', 
//                      backgroundSize: '60px 60px',
//                      transform: 'perspective(600px) rotateX(60deg) translateY(0%) translateZ(-200px)',
//                      maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)' 
//                  }}>
//                  <motion.div 
//                     animate={{ top: ['0%', '100%'] }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                     className="absolute w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
//                  />
//             </div>

//             {/* 2. THE REACTOR RINGS */}
//             <div className="relative z-0 opacity-60 scale-125 md:scale-150">
//                 <motion.div 
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//                     className="absolute inset-0 w-[600px] h-[600px] border-[1px] border-dashed border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
//                 />
//                 <motion.div 
//                     animate={{ rotate: -360 }}
//                     transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                     className="absolute inset-0 w-[450px] h-[450px] border-[2px] border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
//                 >
//                     <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1 shadow-[0_0_10px_white]"></div>
//                     <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 translate-y-1 shadow-[0_0_10px_white]"></div>
//                 </motion.div>
//                 <motion.div 
//                     animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                     className="absolute w-[100px] h-[100px] bg-white/5 rounded-full backdrop-blur-md border border-white/30 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)]"
//                 >
//                     <Cpu className="w-8 h-8 text-white/70" />
//                 </motion.div>
//             </div>

//             {/* 3. VIGNETTE */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_120%)] z-10 pointer-events-none"></div>
//         </div>
//     );
// };


// export default function Home() {
//   const containerRef = useRef(null);
  
//   // 2. NEW: This ref attaches to the scrolling container in the overlay
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const [status, setStatus] = useState('idle'); 
//   const [isExiting, setIsExiting] = useState(false); 
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const heroTextY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

//   // --- PREVENT SCROLLING WHEN OVERLAY IS OPEN ---
//   useEffect(() => {
//     if (status === 'breached') {
//         document.body.style.overflow = 'hidden';
//     } else {
//         document.body.style.overflow = 'unset';
//     }
//     return () => { document.body.style.overflow = 'unset'; }
//   }, [status]);

//   const handleTriggerEnter = () => {
//       if (status === 'idle') {
//           setStatus('scanning');
//           setTimeout(() => setStatus('critical'), 1500);
//           setTimeout(() => setStatus('breached'), 2200);
//       }
//   };

//   // 3. NEW: Logic to scroll the cards programmatically
//   const scrollCards = (direction: 'left' | 'right') => {
//     if (scrollContainerRef.current) {
//         // Scroll amount is dynamic: larger on desktop, smaller on mobile
//         const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : window.innerWidth * 0.45;
//         scrollContainerRef.current.scrollBy({
//             left: direction === 'left' ? -scrollAmount : scrollAmount,
//             behavior: 'smooth'
//         });
//     }
//   };

//   // --- ANIMATION VARIANTS ---
//   const overlayVariants: Variants = {
//     hidden: { 
//         opacity: 0,
//         scale: 1, 
//     },
//     visible: { 
//         opacity: 1,
//         scale: 1,
//         filter: ["brightness(1)"],
//         transition: { duration: 0.5 }
//     },
//     exit: { 
//         scaleY: [1, 0.005, 0.005],
//         scaleX: [1, 1, 0],
//         opacity: [1, 1, 0],
//         filter: ["brightness(1)", "brightness(1)", "brightness(2)"],
//         transition: { 
//             duration: 0.4, 
//             times: [0, 0.6, 1],
//             ease: "easeInOut"
//         }
//     }
//   };

//   const handleReturn = async () => {
//     setIsExiting(true); 
//     await new Promise(r => setTimeout(r, 400));
//     setStatus('rebooting'); 
//     setTimeout(() => {
//         window.scrollTo({ top: 0, behavior: "auto" }); 
//         setStatus('idle');
//         setIsExiting(false);
//     }, 100); 
//   };

//   return (
//     <main 
//       ref={containerRef} 
//       className="relative min-h-[150vh] bg-white selection:bg-black selection:text-white"
//     >
      
//       <CustomCursor isInverse={status === 'breached'} />

//       {/* LAYER 0: Background */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//           <DataSculpture />
//       </div>

//       {/* --- REBOOT FLASH OVERLAY --- */}
//       <AnimatePresence>
//           {status === 'rebooting' && (
//               <motion.div 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }} 
//                   transition={{ duration: 0.1 }} 
//                   className="fixed inset-0 z-[9999] bg-white pointer-events-none"
//               />
//           )}
//       </AnimatePresence>

//       {/* SECTION 1: HERO */}
//       <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
//         <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="max-w-[90vw]">
//           <div className="text-xs font-mono text-zinc-400 mb-6 tracking-widest uppercase">Data Analyst & Architect</div>
//           <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black">
//             RAW DATA <br /><span className="text-zinc-300">REFINED</span> <br />INSIGHT.
//           </h1>
//         </motion.div>
//         <motion.div style={{ opacity: heroOpacity }} className="absolute bottom-12 right-12 flex gap-4 items-center text-xs font-mono text-zinc-400">
//             <span className="animate-pulse">INITIALIZING_SYSTEM</span>
//             <ArrowDownRight className="w-4 h-4" />
//         </motion.div>
//       </section>

//       {/* SECTION 2: THE TERMINAL SPLIT */}
//       <div className="relative z-20 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             {/* LEFT SIDE: Fixed Window */}
//             <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-between px-12 pb-12 pt-32 pointer-events-none">
//                 <div className="text-xs font-mono text-black/30 uppercase tracking-widest flex items-center gap-2">
//                     <span className={`w-2 h-2 rounded-full ${status === 'scanning' ? 'bg-red-500 animate-ping' : 'bg-green-500 animate-pulse'}`}></span>
//                     System_Status: {status === 'idle' ? 'Active' : 'WARNING'}
//                 </div>
//             </div>

//             {/* RIGHT SIDE: The Terminal */}
//             <div className="bg-black text-white min-h-screen p-8 md:p-20 flex flex-col gap-12 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] mt-[10vh]">
//                 <div className="pt-24">
//                     <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">[ // Introduction ]</div>
//                     <HeroTypewriter />
//                 </div>
//                 <div>
//                      <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">[ // Stack ]</div>
//                     <TechTicker />
//                 </div>

//                 {/* THE TRIGGER ZONE */}
//                 <div className="pb-32 pt-8 border-t border-zinc-800">
//                     <div className="h-[20vh] w-full flex flex-col items-center justify-center gap-4 opacity-70">
//                         {status === 'scanning' || status === 'critical' ? (
//                             <Lock className="w-6 h-6 text-red-500 animate-pulse" />
//                         ) : (
//                             <Lock className="w-6 h-6 text-zinc-600" />
//                         )}
//                         <p className="font-mono text-sm text-zinc-400 uppercase tracking-widest">Restricted Area Below</p>
//                     </div>

//                     <motion.div 
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ amount: 0.8 }} 
//                         onViewportEnter={handleTriggerEnter}
//                         animate={status === 'critical' ? { x: [-5, 5, -5, 5, 0], transition: { duration: 0.2 } } : {}}
//                         className={`relative h-48 w-full border rounded-lg overflow-hidden mt-4 transition-colors duration-300 ${status === 'critical' ? 'border-red-500 bg-red-950/30' : 'border-red-900/30 bg-red-950/10'}`}
//                     >
//                         {(status === 'scanning' || status === 'critical') && (
//                             <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500 font-mono z-10">
//                                 <AlertTriangle className={`w-8 h-8 mb-4 ${status === 'critical' ? 'animate-bounce' : 'animate-pulse'}`} />
//                                 <div className="text-sm tracking-widest font-bold"><ScrambleText text="DETECTING BREACH..." active={true} /></div>
//                                 <div className="text-xs mt-2 text-red-400/70">{status === 'critical' ? 'CRITICAL FAILURE' : 'BYPASSING FIREWALL'}</div>
//                             </div>
//                         )}
//                         {(status === 'scanning' || status === 'critical') && (
//                             <motion.div 
//                                 initial={{ width: "0%" }}
//                                 animate={{ width: "100%" }}
//                                 transition={{ duration: 2.2, ease: "linear" }}
//                                 className="absolute bottom-0 left-0 h-1 bg-red-500 shadow-[0_0_20px_rgba(220,38,38,0.8)]"
//                             />
//                         )}
//                         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//       </div>

//       {/* ======================================================== */}
//       {/* THE "JARVIS" OVERLAY                                     */}
//       {/* ======================================================== */}
//       {status === 'breached' && (
//             <motion.div 
//                 key="jarvis-interface"
//                 variants={overlayVariants}
//                 initial="hidden"
//                 animate={isExiting ? "exit" : "visible"}
//                 className="fixed inset-0 z-[100] bg-black text-white overflow-hidden origin-center" 
//             >
//                 {/* --- BACKGROUND --- */}
//                 <JarvisBackdrop />

//                 {/* 4. NEW: NAVIGATION CONTROLS (Bottom Right) */}
//                 <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end gap-2">
//                     <div className="flex gap-2">
//                         <button 
//                             onClick={() => scrollCards('left')}
//                             className="p-4 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-sm text-white/50 hover:text-white hover:bg-zinc-800 hover:scale-105 transition-all active:scale-95"
//                         >
//                             <ChevronLeft className="w-6 h-6" />
//                         </button>
//                         <button 
//                             onClick={() => scrollCards('right')}
//                             className="p-4 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-sm text-white/50 hover:text-white hover:bg-zinc-800 hover:scale-105 transition-all active:scale-95"
//                         >
//                             <ChevronRight className="w-6 h-6" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* 5. NEW: "SCROLL TO NAVIGATE" INDICATOR POPUP (Bottom Center) */}
//                 <motion.div 
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 1, duration: 0.5 }}
//                     className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[900] pointer-events-none flex flex-col items-center gap-2"
//                 >
//                     <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md">
//                         <MousePointer2 className="w-4 h-4 text-cyan-400 animate-bounce" />
//                         <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest animate-pulse">
//                             SCROLL TO NAVIGATE
//                         </span>
//                     </div>
//                     {/* Decorative line */}
//                     <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
//                 </motion.div>

//                 {/* EXIT BUTTON */}
//                 <button 
//                     onClick={handleReturn}
//                     className="fixed top-8 left-8 z-[999] text-white/40 hover:text-white flex items-center gap-2 font-mono text-xs uppercase tracking-widest cursor-pointer group bg-black/50 px-4 py-2 border border-white/10 rounded-full"
//                 >
//                     <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
//                     Exit Archive
//                 </button>

//                 {/* SCROLLING CONTENT LAYER */}
//                 {/* 6. ATTACH THE REF (scrollContainerRef) here */}
//                 <motion.div 
//                     ref={scrollContainerRef}
//                     animate={{ opacity: isExiting ? 0 : 1 }}
//                     transition={{ duration: 0.2 }}
//                     className="relative z-10 w-full h-full flex items-center overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pl-[10vw]"
//                 >
                    
//                     {/* Intro Title */}
//                     <div className="min-w-[40vw] pr-20 snap-center shrink-0">
//                         <h2 className="text-[10vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
//                             DEEP <br/> STORAGE
//                         </h2>
//                         <div className="mt-8 font-mono text-cyan-400 text-xs tracking-widest border-l-2 border-cyan-400 pl-4 flex flex-col gap-1 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
//                             <span className="font-bold"><ScrambleText text="WARNING: ENCRYPTION BROKEN" active={true} /></span>
//                             <span className="text-cyan-400/60">ACCESS LEVEL: UNRESTRICTED</span>
//                         </div>
//                     </div>

//                     {/* CARD 1 */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-cyan-400/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden">
//                          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
//                         <div className="flex justify-between items-start relative z-10">
//                              <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"><Database className="w-6 h-6 text-cyan-300" /></div>
//                              <div className="font-mono text-xs text-zinc-500">[ 001 ]</div>
//                         </div>
//                         <div className="relative z-10">
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:text-cyan-100 transition-colors">WAREHOUSE<br/>OPTIMIZATION</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4">
//                                 Re-engineered legacy SQL architecture. <span className="text-cyan-400">Query time -85%</span>. Storage costs reduced by $20k/mo.
//                             </p>
//                         </div>
//                     </div>

//                     {/* CARD 2 */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-purple-400/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden">
//                         <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all"></div>
//                         <div className="flex justify-between items-start relative z-10">
//                              <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"><Code className="w-6 h-6 text-purple-300" /></div>
//                              <div className="font-mono text-xs text-zinc-500">[ 002 ]</div>
//                         </div>
//                         <div className="relative z-10">
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:text-purple-100 transition-colors">PREDICTION<br/>ENGINE API</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4">
//                                 Flask-based REST API. Serving 400+ endpoints. <span className="text-purple-400">Redis Cache & Celery</span> integrated for async tasks.
//                             </p>
//                         </div>
//                     </div>

//                      {/* CARD 3 */}
//                      <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-orange-400/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden">
//                         <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all"></div>
//                         <div className="flex justify-between items-start relative z-10">
//                              <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"><Terminal className="w-6 h-6 text-orange-300" /></div>
//                              <div className="font-mono text-xs text-zinc-500">[ 003 ]</div>
//                         </div>
//                         <div className="relative z-10">
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:text-orange-100 transition-colors">RUST CLI<br/>DASHBOARD</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4">
//                                 Custom terminal UI for server monitoring. <span className="text-orange-400">Zero-latency</span> rendering in low-bandwidth environments.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="min-w-[10vw] snap-center"></div>
//                 </motion.div>
//             </motion.div>
//       )}
//     </main>
//   );
// }

// 'use client';

// // 1. ADDED: HeartPulse, ScanFace, Siren for the new project icons
// import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';
// import { ArrowDownRight, ArrowLeft, Database, Code, Terminal, Lock, AlertTriangle, Cpu, ChevronLeft, ChevronRight, MousePointer2, HeartPulse, ScanFace, Siren } from 'lucide-react';

// // Components
// import DataSculpture from '@/components/DataSculpture'; 
// import CustomCursor from '@/components/CustomCursor';
// import HeroTypewriter from '@/components/HeroTypewriter'; 
// import TechTicker from '@/components/TechTicker'; 

// // --- HELPER: TEXT SCRAMBLER ---
// const ScrambleText = ({ text, active, className }: { text: string, active: boolean, className?: string }) => {
//   const [display, setDisplay] = useState(text);
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

//   useEffect(() => {
//     if (!active) {
//         setDisplay(text);
//         return;
//     }
//     let interval: NodeJS.Timeout;
//     let iteration = 0;
//     interval = setInterval(() => {
//       setDisplay(
//         text.split("").map((letter, index) => {
//             if (index < iteration) return text[index];
//             return chars[Math.floor(Math.random() * chars.length)];
//           }).join("")
//       );
//       if (iteration >= text.length) clearInterval(interval);
//       iteration += 1 / 3; 
//     }, 30);
//     return () => clearInterval(interval);
//   }, [active, text]);
//   return <span className={className}>{display}</span>;
// };

// // --- COMPONENT: THE JARVIS HUD BACKGROUND ---
// const JarvisBackdrop = () => {
//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center bg-black">
            
//             {/* 1. MOVING FLOOR GRID */}
//             <div className="absolute inset-0 opacity-40" 
//                  style={{ 
//                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', 
//                      backgroundSize: '60px 60px',
//                      transform: 'perspective(600px) rotateX(60deg) translateY(0%) translateZ(-200px)',
//                      maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)' 
//                  }}>
//                  <motion.div 
//                     animate={{ top: ['0%', '100%'] }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                     className="absolute w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
//                  />
//             </div>

//             {/* 2. THE REACTOR RINGS */}
//             <div className="relative z-0 opacity-60 scale-125 md:scale-150">
//                 <motion.div 
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//                     className="absolute inset-0 w-[600px] h-[600px] border-[1px] border-dashed border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
//                 />
//                 <motion.div 
//                     animate={{ rotate: -360 }}
//                     transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                     className="absolute inset-0 w-[450px] h-[450px] border-[2px] border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
//                 >
//                     <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1 shadow-[0_0_10px_white]"></div>
//                     <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 translate-y-1 shadow-[0_0_10px_white]"></div>
//                 </motion.div>
//                 <motion.div 
//                     animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                     className="absolute w-[100px] h-[100px] bg-white/5 rounded-full backdrop-blur-md border border-white/30 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)]"
//                 >
//                     <Cpu className="w-8 h-8 text-white/70" />
//                 </motion.div>
//             </div>

//             {/* 3. VIGNETTE */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_120%)] z-10 pointer-events-none"></div>
//         </div>
//     );
// };


// export default function Home() {
//   const containerRef = useRef(null);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const [status, setStatus] = useState('idle'); 
//   const [isExiting, setIsExiting] = useState(false); 
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const heroTextY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

//   // --- PREVENT SCROLLING WHEN OVERLAY IS OPEN ---
//   useEffect(() => {
//     if (status === 'breached') {
//         document.body.style.overflow = 'hidden';
//     } else {
//         document.body.style.overflow = 'unset';
//     }
//     return () => { document.body.style.overflow = 'unset'; }
//   }, [status]);

//   const handleTriggerEnter = () => {
//       if (status === 'idle') {
//           setStatus('scanning');
//           setTimeout(() => setStatus('critical'), 1500);
//           setTimeout(() => setStatus('breached'), 2200);
//       }
//   };

//   const scrollCards = (direction: 'left' | 'right') => {
//     if (scrollContainerRef.current) {
//         const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : window.innerWidth * 0.45;
//         scrollContainerRef.current.scrollBy({
//             left: direction === 'left' ? -scrollAmount : scrollAmount,
//             behavior: 'smooth'
//         });
//     }
//   };

//   // --- ANIMATION VARIANTS ---
//   const overlayVariants: Variants = {
//     hidden: { 
//         opacity: 0,
//         scale: 1, 
//     },
//     visible: { 
//         opacity: 1,
//         scale: 1,
//         filter: ["brightness(1)"],
//         transition: { duration: 0.5 }
//     },
//     exit: { 
//         scaleY: [1, 0.005, 0.005],
//         scaleX: [1, 1, 0],
//         opacity: [1, 1, 0],
//         filter: ["brightness(1)", "brightness(1)", "brightness(2)"],
//         transition: { 
//             duration: 0.4, 
//             times: [0, 0.6, 1],
//             ease: "easeInOut"
//         }
//     }
//   };

//   const handleReturn = async () => {
//     setIsExiting(true); 
//     await new Promise(r => setTimeout(r, 400));
//     setStatus('rebooting'); 
//     setTimeout(() => {
//         window.scrollTo({ top: 0, behavior: "auto" }); 
//         setStatus('idle');
//         setIsExiting(false);
//     }, 100); 
//   };

//   return (
//     <main 
//       ref={containerRef} 
//       className="relative min-h-[150vh] bg-white selection:bg-black selection:text-white"
//     >
      
//       <CustomCursor isInverse={status === 'breached'} />

//       {/* LAYER 0: Background */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//           <DataSculpture />
//       </div>

//       {/* --- REBOOT FLASH OVERLAY --- */}
//       <AnimatePresence>
//           {status === 'rebooting' && (
//               <motion.div 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }} 
//                   transition={{ duration: 0.1 }} 
//                   className="fixed inset-0 z-[9999] bg-white pointer-events-none"
//               />
//           )}
//       </AnimatePresence>

//       {/* SECTION 1: HERO */}
//       <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
//         <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="max-w-[90vw]">
//           <div className="text-xs font-mono text-zinc-400 mb-6 tracking-widest uppercase">Data Analyst & Architect</div>
//           <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black">
//             RAW DATA <br /><span className="text-zinc-300">REFINED</span> <br />INSIGHT.
//           </h1>
//         </motion.div>
        
//         <motion.div style={{ opacity: heroOpacity }} className="absolute bottom-12 right-12 flex gap-4 items-center text-xs font-mono text-zinc-400">
//             <span className="animate-pulse">INITIALIZING_SYSTEM</span>
//             <ArrowDownRight className="w-4 h-4" />
//         </motion.div>
//       </section>

//       {/* SECTION 2: THE TERMINAL SPLIT */}
//       <div className="relative z-20 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             {/* LEFT SIDE: Fixed Window */}
//             <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-between px-12 pb-12 pt-32 pointer-events-none">
//                 <div className="text-xs font-mono text-black/30 uppercase tracking-widest flex items-center gap-2">
//                     <span className={`w-2 h-2 rounded-full ${status === 'scanning' ? 'bg-red-500 animate-ping' : 'bg-green-500 animate-pulse'}`}></span>
//                     System_Status: {status === 'idle' ? 'Active' : 'WARNING'}
//                 </div>
//             </div>

//             {/* RIGHT SIDE: The Terminal */}
//             <div className="bg-black text-white min-h-screen p-8 md:p-20 flex flex-col gap-12 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] mt-[10vh]">
//                 <div className="pt-24">
//                     <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">[ // Introduction ]</div>
//                     <HeroTypewriter />
//                 </div>
//                 <div>
//                      <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">[ // Stack ]</div>
//                     <TechTicker />
//                 </div>

//                 {/* THE TRIGGER ZONE */}
//                 <div className="pb-32 pt-8 border-t border-zinc-800">
//                     <div className="h-[20vh] w-full flex flex-col items-center justify-center gap-4 opacity-70">
//                         {status === 'scanning' || status === 'critical' ? (
//                             <Lock className="w-6 h-6 text-red-500 animate-pulse" />
//                         ) : (
//                             <Lock className="w-6 h-6 text-zinc-600" />
//                         )}
//                         <p className="font-mono text-sm text-zinc-400 uppercase tracking-widest">Restricted Area Below</p>
//                     </div>

//                     <motion.div 
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ amount: 0.8 }} 
//                         onViewportEnter={handleTriggerEnter}
//                         animate={status === 'critical' ? { x: [-5, 5, -5, 5, 0], transition: { duration: 0.2 } } : {}}
//                         className={`relative h-48 w-full border rounded-lg overflow-hidden mt-4 transition-colors duration-300 ${status === 'critical' ? 'border-red-500 bg-red-950/30' : 'border-red-900/30 bg-red-950/10'}`}
//                     >
//                         {(status === 'scanning' || status === 'critical') && (
//                             <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500 font-mono z-10">
//                                 <AlertTriangle className={`w-8 h-8 mb-4 ${status === 'critical' ? 'animate-bounce' : 'animate-pulse'}`} />
//                                 <div className="text-sm tracking-widest font-bold"><ScrambleText text="DETECTING BREACH..." active={true} /></div>
//                                 <div className="text-xs mt-2 text-red-400/70">{status === 'critical' ? 'CRITICAL FAILURE' : 'BYPASSING FIREWALL'}</div>
//                             </div>
//                         )}
//                         {(status === 'scanning' || status === 'critical') && (
//                             <motion.div 
//                                 initial={{ width: "0%" }}
//                                 animate={{ width: "100%" }}
//                                 transition={{ duration: 2.2, ease: "linear" }}
//                                 className="absolute bottom-0 left-0 h-1 bg-red-500 shadow-[0_0_20px_rgba(220,38,38,0.8)]"
//                             />
//                         )}
//                         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//       </div>

//       {/* ======================================================== */}
//       {/* THE "JARVIS" OVERLAY                                     */}
//       {/* ======================================================== */}
//       {status === 'breached' && (
//             <motion.div 
//                 key="jarvis-interface"
//                 variants={overlayVariants}
//                 initial="hidden"
//                 animate={isExiting ? "exit" : "visible"}
//                 className="fixed inset-0 z-[100] bg-black text-white overflow-hidden origin-center" 
//             >
//                 {/* --- BACKGROUND --- */}
//                 <JarvisBackdrop />

//                 {/* NAVIGATION CONTROLS */}
//                 <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end gap-2">
//                     <div className="flex gap-2">
//                         <button 
//                             onClick={() => scrollCards('left')}
//                             className="p-4 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-sm text-white/50 hover:text-white hover:bg-zinc-800 hover:scale-105 transition-all active:scale-95"
//                         >
//                             <ChevronLeft className="w-6 h-6" />
//                         </button>
//                         <button 
//                             onClick={() => scrollCards('right')}
//                             className="p-4 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-sm text-white/50 hover:text-white hover:bg-zinc-800 hover:scale-105 transition-all active:scale-95"
//                         >
//                             <ChevronRight className="w-6 h-6" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* SCROLL NAV HINT */}
//                 <motion.div 
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 1, duration: 0.5 }}
//                     className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[900] pointer-events-none flex flex-col items-center gap-2"
//                 >
//                     <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md">
//                         <MousePointer2 className="w-4 h-4 text-cyan-400 animate-bounce" />
//                         <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest animate-pulse">
//                             SCROLL TO NAVIGATE
//                         </span>
//                     </div>
//                     <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
//                 </motion.div>

//                 {/* EXIT BUTTON */}
//                 <button 
//                     onClick={handleReturn}
//                     className="fixed top-8 left-8 z-[999] text-white/40 hover:text-white flex items-center gap-2 font-mono text-xs uppercase tracking-widest cursor-pointer group bg-black/50 px-4 py-2 border border-white/10 rounded-full"
//                 >
//                     <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
//                     Exit Archive
//                 </button>

//                 {/* SCROLLING CONTENT LAYER */}
//                 <motion.div 
//                     ref={scrollContainerRef}
//                     animate={{ opacity: isExiting ? 0 : 1 }}
//                     transition={{ duration: 0.2 }}
//                     className="relative z-10 w-full h-full flex items-center overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pl-[10vw]"
//                 >
                    
//                     {/* Intro Title */}
//                     <div className="min-w-[40vw] pr-20 snap-center shrink-0">
//                         <h2 className="text-[10vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
//                             DEEP <br/> STORAGE
//                         </h2>
//                         <div className="mt-8 font-mono text-cyan-400 text-xs tracking-widest border-l-2 border-cyan-400 pl-4 flex flex-col gap-1 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
//                             <span className="font-bold"><ScrambleText text="WARNING: ENCRYPTION BROKEN" active={true} /></span>
//                             <span className="text-cyan-400/60">ACCESS LEVEL: UNRESTRICTED</span>
//                         </div>
//                     </div>

//                     {/* CARD 1: SMI / HEART DISEASE */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-red-500/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden">
//                          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all"></div>
//                         <div className="flex justify-between items-start relative z-10">
//                              <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"><HeartPulse className="w-6 h-6 text-red-400" /></div>
//                              <div className="font-mono text-xs text-zinc-500">[ 001 ]</div>
//                         </div>
//                         <div className="relative z-10">
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:text-red-100 transition-colors">SILENT MI<br/>DETECTION</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4">
//                                 Multimodal fusion (ECG + Clinical). <span className="text-red-400">AUC-PR 0.72</span>. Fairness audit & SHAP explainability.
//                             </p>
//                         </div>
//                     </div>

//                     {/* CARD 2: DEEPFAKE */}
//                     <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-cyan-400/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden">
//                         <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
//                         <div className="flex justify-between items-start relative z-10">
//                              <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"><ScanFace className="w-6 h-6 text-cyan-300" /></div>
//                              <div className="font-mono text-xs text-zinc-500">[ 002 ]</div>
//                         </div>
//                         <div className="relative z-10">
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:text-cyan-100 transition-colors">DEEPFAKE<br/>FORENSICS</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4">
//                                 CNN + LSTM temporal modeling. <span className="text-cyan-400">90% F1-Score</span>. ResNet50/EfficientNet backbone. 
//                             </p>
//                         </div>
//                     </div>

//                      {/* CARD 3: CRIME PREDICTION */}
//                      <div className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-orange-400/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden">
//                         <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all"></div>
//                         <div className="flex justify-between items-start relative z-10">
//                              <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"><Siren className="w-6 h-6 text-orange-300" /></div>
//                              <div className="font-mono text-xs text-zinc-500">[ 003 ]</div>
//                         </div>
//                         <div className="relative z-10">
//                             <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:text-orange-100 transition-colors">PREDICTIVE<br/>POLICING</h3>
//                             <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4">
//                                 Hybrid Sentiment Analysis + Historical Data. <span className="text-orange-400">87% Accuracy</span>. Processed 20GB+ social streams.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="min-w-[10vw] snap-center"></div>
//                 </motion.div>
//             </motion.div>
//       )}
//     </main>
//   );
// }



// 'use client';

// import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';
// import { ArrowDownRight, ArrowLeft, Database, Code, Terminal, Lock, AlertTriangle, Cpu, ChevronLeft, ChevronRight, MousePointer2, HeartPulse, ScanFace, Siren, X, Calendar, Building2, Layers, CheckCircle2, FileText, Share2, Network } from 'lucide-react';

// // Components
// import DataSculpture from '@/components/DataSculpture'; 
// import CustomCursor from '@/components/CustomCursor';
// import HeroTypewriter from '@/components/HeroTypewriter'; 
// import TechTicker from '@/components/TechTicker'; 

// // --- TYPES & DATA ---
// type Project = {
//     id: number;
//     title: string;
//     date: string;
//     association: string;
//     icon: any;
//     color: string;
//     problem: string;
//     methodology: string[];
//     results: string[];
//     stack: string[];
// };

// const PROJECT_DATA: Project[] = [
//     {
//         id: 1,
//         title: "Risk Assessment Models for Silent Myocardial Infarction",
//         date: "Aug 2025 - Nov 2025",
//         association: "University at Buffalo",
//         icon: HeartPulse,
//         color: "text-red-400",
//         problem: "Developed a clinical decision support system to detect Silent Myocardial Infarction (SMI) in patients with Type 2 Diabetes. Diabetic autonomic neuropathy often masks chest pain ('silent' presentation), leading to delayed diagnosis and high mortality. Standard risk scores (e.g., Framingham) often fail to detect these subtle ischemic events.",
//         methodology: [
//             "Designed a 'Late Fusion' multimodal architecture integrating two distinct data streams.",
//             "Longitudinal Clinical Data: Processed electronic health records (MIMIC-IV) using MICE imputation for missing values.",
//             "Raw Physiological Waveforms: Developed a 1D-Convolutional Neural Network (1D-CNN) pre-trained on PTB-XL to extract deep morphological embeddings (e.g., repolarization dispersion) from raw 10-second ECG signals.",
//             "Fusion Layer: Concatenated deep ECG embeddings with clinical features into an XGBoost classifier to capture non-linear interactions between physiology and patient history."
//         ],
//         results: [
//             "Performance: The multimodal fusion model achieved an AUC-PR of 0.72, significantly outperforming unimodal baselines (Clinical-only RF: 0.61; ECG-only CNN: 0.66).",
//             "Clinical Utility: Performed Decision Curve Analysis (DCA), demonstrating a higher net clinical benefit than 'Treat-All' or 'Treat-None' strategies in the critical 5%–40% risk threshold range.",
//             "Responsible AI: Implemented Isotonic Regression to calibrate probabilities (reducing Brier Score to 0.138) and conducted a Fairness Audit, confirming equal opportunity (TPR parity <3% gap) across age and sex subgroups.",
//             "Interpretability: Utilized SHAP analysis to reveal that deep ECG embeddings were top-ranking predictors, identifying subtle T-wave morphological variances often missed in manual clinical review."
//         ],
//         stack: ["Machine Learning", "Deep Learning (1D-CNN)", "Multimodal Data Fusion", "XGBoost", "Python (PyTorch)", "Medical Signal Processing", "SHAP", "Algorithmic Fairness", "Clinical Data Engineering"]
//     },
//     {
//         id: 2,
//         title: "Deepfake Detection using CNNs & Temporal Modeling",
//         date: "May 2025 - Jun 2025",
//         association: "University at Buffalo",
//         icon: ScanFace,
//         color: "text-cyan-400",
//         problem: "The rise of synthetic media threatens digital authenticity. This project aimed to build a robust detection pipeline capable of distinguishing between real and manipulated video frames across diverse datasets, addressing the challenge of high-fidelity facial reenactment.",
//         methodology: [
//             "Designed a data pipeline to process over 40,000+ video frames from the FaceForensics++ dataset.",
//             "Used OpenCV + MTCNN for face detection and cropping; implemented frame-level data normalization and augmentation for model readiness.",
//             "Built multiple CNN-based architectures (e.g., ResNet50, EfficientNet-B0) and fused them using temporal LSTM layers to extract features across video time steps.",
//             "Performed quantitative analysis of model metrics (accuracy, precision, recall, F1-score) and visualized performance using ROC curves, confusion matrices, and Grad-CAM."
//         ],
//         results: [
//             "Feature fusion models outperformed individual CNNs by capturing complementary visual patterns, increasing F1-score from 71% to 87%.",
//             "Fine-tuning and face-focused training provided the best result, achieving an F1-score of 90.18% and accuracy of 85%.",
//             "Demonstrated that domain-specific training and data preprocessing significantly impact model performance — a key insight for data-centric roles."
//         ],
//         stack: ["Machine Learning", "Deep Learning", "Multimodal Data Fusion", "XGBoost", "Python", "Generative Shape Design", "Algorithm Design", "Artificial Intelligence"]
//     },
//     {
//         id: 3,
//         title: "Crime Prediction Using Sentiment Analysis",
//         date: "Aug 2024 - Dec 2024",
//         association: "University at Buffalo",
//         icon: Siren,
//         color: "text-orange-400",
//         problem: "Traditional crime prediction relies heavily on historical hotspots, often reinforcing bias and failing to account for social dynamics. This project sought to bridge the gap between static data systems and live actionable intelligence by integrating real-time social sentiment.",
//         methodology: [
//             "Designed and implemented a hybrid predictive model that integrates historical crime data with real-time social media sentiment.",
//             "Preprocessed and managed over 20GB of data, leveraging powerful tools like Playwright, PRAW, NLTK, and TextBlob to extract meaningful insights from unstructured social media datasets.",
//             "Applied Principal Component Analysis (PCA) for dimensionality reduction and Random Forest algorithms for severity prediction.",
//             "Enhanced data reliability by addressing challenges in data cleaning, reducing inconsistencies, and improving preprocessing workflows."
//         ],
//         results: [
//             "Achieved 87% accuracy in sentiment analysis and crime severity predictions.",
//             "Enabled dynamic crime severity assessments by integrating real-time sentiment data with traditional crime statistics.",
//             "Demonstrated the transformative potential of machine learning in public safety by delivering a scalable model for urban safety planning and resource allocation.",
//             "Showcased leadership in developing solutions that combine AI, data science, and social insights to solve complex societal challenges."
//         ],
//         stack: ["PCA", "Artificial Intelligence", "Machine Learning", "Data Mining", "Python", "NLTK", "TextBlob", "Random Forest", "Playwright"]
//     }
// ];

// // --- HELPER: TEXT SCRAMBLER ---
// const ScrambleText = ({ text, active, className }: { text: string, active: boolean, className?: string }) => {
//   const [display, setDisplay] = useState(text);
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

//   useEffect(() => {
//     if (!active) {
//         setDisplay(text);
//         return;
//     }
//     let interval: NodeJS.Timeout;
//     let iteration = 0;
//     interval = setInterval(() => {
//       setDisplay(
//         text.split("").map((letter, index) => {
//             if (index < iteration) return text[index];
//             return chars[Math.floor(Math.random() * chars.length)];
//           }).join("")
//       );
//       if (iteration >= text.length) clearInterval(interval);
//       iteration += 1 / 3; 
//     }, 30);
//     return () => clearInterval(interval);
//   }, [active, text]);
//   return <span className={className}>{display}</span>;
// };

// // --- COMPONENT: JARVIS BACKGROUND ---
// const JarvisBackdrop = () => {
//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center bg-black">
//             <div className="absolute inset-0 opacity-40" 
//                  style={{ 
//                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', 
//                      backgroundSize: '60px 60px',
//                      transform: 'perspective(600px) rotateX(60deg) translateY(0%) translateZ(-200px)',
//                      maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)' 
//                  }}>
//                  <motion.div 
//                     animate={{ top: ['0%', '100%'] }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                     className="absolute w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
//                  />
//             </div>
//             <div className="relative z-0 opacity-60 scale-125 md:scale-150">
//                 <motion.div 
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//                     className="absolute inset-0 w-[600px] h-[600px] border-[1px] border-dashed border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
//                 />
//                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-[2px] border-white/40 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)]"></div>
//             </div>
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_120%)] z-10 pointer-events-none"></div>
//         </div>
//     );
// };

// // --- COMPONENT: PROJECT DETAIL VIEW ---
// const ProjectDetail = ({ project, onClose }: { project: Project, onClose: () => void }) => {
//     const bgColor = project.color.replace('text-', 'bg-');
//     const borderColor = project.color.replace('text-', 'border-');

//     return (
//         <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="fixed inset-0 z-[2000] bg-zinc-950 flex flex-col overflow-y-auto no-scrollbar"
//         >
//             {/* BACKGROUND GRID */}
//             <div className="fixed inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
//             {/* TOP BAR */}
//             <div className="sticky top-0 z-[2002] p-6 flex justify-between items-center bg-zinc-950/90 backdrop-blur-md border-b border-white/10">
//                 <div className="flex items-center gap-4">
//                      <div className={`p-2 rounded-full bg-white/5 border border-white/10 ${project.color}`}>
//                         <project.icon className="w-5 h-5" />
//                      </div>
//                      <div className="flex flex-col">
//                         <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Secure_Record</span>
//                         <span className="font-mono text-sm font-bold text-white tracking-widest">ID_00{project.id}</span>
//                      </div>
//                 </div>
//                 <button 
//                     onClick={onClose} 
//                     className="group flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest border border-white/10 rounded-full hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/50 transition-all"
//                 >
//                     <span className="hidden md:inline">Close File</span>
//                     <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
//                 </button>
//             </div>

//             {/* CONTENT */}
//             <div className="max-w-6xl mx-auto w-full p-6 md:p-12 pb-24 flex flex-col gap-16 relative z-10">
                
//                 {/* HERO HEADER */}
//                 <div className="border-l-2 border-white/20 pl-8 relative">
//                     <motion.div 
//                         initial={{ height: 0 }} 
//                         animate={{ height: "100%" }} 
//                         className={`absolute left-[-2px] top-0 w-[2px] ${bgColor}`}
//                     />
//                     <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-none text-white">
//                         {project.title}
//                     </h1>
//                     <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-xs text-zinc-400 uppercase tracking-widest">
//                         <div className="flex items-center gap-2">
//                             <Calendar className="w-4 h-4 text-zinc-600" /> {project.date}
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Building2 className="w-4 h-4 text-zinc-600" /> {project.association}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
//                     {/* LEFT COLUMN: Main Tech Specs */}
//                     <div className="lg:col-span-8 flex flex-col gap-12">
                        
//                         {/* PROBLEM */}
//                         <section className="group">
//                             <h3 className={`text-sm font-mono uppercase tracking-widest mb-4 flex items-center gap-2 ${project.color}`}>
//                                 <AlertTriangle className="w-4 h-4" /> Mission Brief (Problem)
//                             </h3>
//                             <p className="text-zinc-300 leading-relaxed text-lg border border-white/5 bg-white/5 p-6 rounded-sm">
//                                 {project.problem}
//                             </p>
//                         </section>

//                         {/* METHODOLOGY */}
//                         <section>
//                             <h3 className={`text-sm font-mono uppercase tracking-widest mb-4 flex items-center gap-2 ${project.color}`}>
//                                 <Network className="w-4 h-4" /> Technical Architecture
//                             </h3>
//                             <div className="space-y-4">
//                                 {project.methodology.map((item, i) => (
//                                     <div key={i} className="flex gap-4">
//                                         <div className={`mt-2 min-w-[6px] h-[6px] rounded-full ${bgColor}`}></div>
//                                         <p className="text-zinc-400 leading-relaxed">{item}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </section>

//                         {/* RESULTS */}
//                         <section>
//                             <h3 className={`text-sm font-mono uppercase tracking-widest mb-4 flex items-center gap-2 ${project.color}`}>
//                                 <CheckCircle2 className="w-4 h-4" /> Execution Log (Results)
//                             </h3>
//                             <div className="grid grid-cols-1 gap-4">
//                                 {project.results.map((res, i) => (
//                                     <div key={i} className="flex items-center gap-4 p-4 border border-white/5 bg-zinc-900/50 rounded-sm hover:border-white/20 transition-colors">
//                                         <div className={`w-1 h-8 ${bgColor}`}></div>
//                                         <span className="text-zinc-300 text-sm leading-relaxed">{res}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </section>

//                     </div>

//                     {/* RIGHT COLUMN: Stack & Metadata */}
//                     <div className="lg:col-span-4 flex flex-col gap-8">
//                         <div className="sticky top-32">
//                              <div className="p-6 border border-white/10 rounded-sm bg-zinc-900/80 backdrop-blur-sm">
//                                 <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-2">
//                                     <Layers className="w-4 h-4" /> Tech Stack
//                                 </h3>
//                                 <div className="flex flex-wrap gap-2">
//                                     {project.stack.map((tech) => (
//                                         <span key={tech} className={`px-3 py-1.5 text-xs font-mono border border-white/10 rounded-sm text-zinc-300 bg-black/50 hover:${project.color} hover:border-white/30 transition-colors cursor-default`}>
//                                             {tech}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="mt-8 p-6 border border-dashed border-white/10 rounded-sm opacity-50">
//                                 <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-2">Security Level</h3>
//                                 <p className="text-xs font-mono text-zinc-400">UNRESTRICTED ACCESS</p>
//                                 <div className="w-full h-1 bg-zinc-800 mt-4 overflow-hidden">
//                                     <motion.div 
//                                         animate={{ x: ["-100%", "100%"] }} 
//                                         transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                                         className={`w-1/2 h-full ${bgColor}`}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </motion.div>
//     );
// };


// export default function Home() {
//   const containerRef = useRef(null);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const [status, setStatus] = useState('idle'); 
//   const [isExiting, setIsExiting] = useState(false); 
  
//   // NEW STATE: Selected Project for Detail View
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const heroTextY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

//   // Prevent scrolling
//   useEffect(() => {
//     if (status === 'breached') {
//         document.body.style.overflow = 'hidden';
//     } else {
//         document.body.style.overflow = 'unset';
//     }
//   }, [status]);

//   const handleTriggerEnter = () => {
//       if (status === 'idle') {
//           setStatus('scanning');
//           setTimeout(() => setStatus('critical'), 1500);
//           setTimeout(() => setStatus('breached'), 2200);
//       }
//   };

//   const scrollCards = (direction: 'left' | 'right') => {
//     if (scrollContainerRef.current) {
//         const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : window.innerWidth * 0.45;
//         scrollContainerRef.current.scrollBy({
//             left: direction === 'left' ? -scrollAmount : scrollAmount,
//             behavior: 'smooth'
//         });
//     }
//   };

//   const overlayVariants: Variants = {
//     hidden: { opacity: 0, scale: 1 },
//     visible: { opacity: 1, scale: 1, filter: ["brightness(1)"], transition: { duration: 0.5 } },
//     exit: { 
//         scaleY: [1, 0.005, 0.005], scaleX: [1, 1, 0], opacity: [1, 1, 0],
//         filter: ["brightness(1)", "brightness(1)", "brightness(2)"],
//         transition: { duration: 0.4, times: [0, 0.6, 1], ease: "easeInOut" }
//     }
//   };

//   const handleReturn = async () => {
//     setIsExiting(true); 
//     await new Promise(r => setTimeout(r, 400));
//     setStatus('rebooting'); 
//     setTimeout(() => {
//         window.scrollTo({ top: 0, behavior: "auto" }); 
//         setStatus('idle');
//         setIsExiting(false);
//         setSelectedProject(null); // Ensure project view is closed on full exit
//     }, 100); 
//   };

//   return (
//     <main 
//       ref={containerRef} 
//       className="relative min-h-[150vh] bg-white selection:bg-black selection:text-white"
//     >
      
//       {/* Cursor Logic: 
//          - White if 'breached' (Overlay) 
//          - White if 'selectedProject' is active (Detail View)
//       */}
//       <CustomCursor isInverse={status === 'breached' || !!selectedProject} />

//       <div className="fixed inset-0 z-0 pointer-events-none">
//           <DataSculpture />
//       </div>

//       <AnimatePresence>
//           {status === 'rebooting' && (
//               <motion.div 
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
//                   transition={{ duration: 0.1 }} 
//                   className="fixed inset-0 z-[9999] bg-white pointer-events-none"
//               />
//           )}
//       </AnimatePresence>

//       {/* --- PROJECT DETAIL VIEW (AnimatePresence allows exit animations) --- */}
//       <AnimatePresence>
//           {selectedProject && (
//               <ProjectDetail 
//                   project={selectedProject} 
//                   onClose={() => setSelectedProject(null)} 
//               />
//           )}
//       </AnimatePresence>

//       {/* SECTION 1: HERO */}
//       <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
//         <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="max-w-[90vw]">
//           <div className="text-xs font-mono text-zinc-400 mb-6 tracking-widest uppercase">Data Analyst & Architect</div>
//           <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black">
//             RAW DATA <br /><span className="text-zinc-300">REFINED</span> <br />INSIGHT.
//           </h1>
//         </motion.div>
//         <motion.div style={{ opacity: heroOpacity }} className="absolute bottom-12 right-12 flex gap-4 items-center text-xs font-mono text-zinc-400">
//             <span className="animate-pulse">INITIALIZING_SYSTEM</span>
//             <ArrowDownRight className="w-4 h-4" />
//         </motion.div>
//       </section>

//       {/* SECTION 2: THE TERMINAL SPLIT */}
//       <div className="relative z-20 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-between px-12 pb-12 pt-32 pointer-events-none">
//                 <div className="text-xs font-mono text-black/30 uppercase tracking-widest flex items-center gap-2">
//                     <span className={`w-2 h-2 rounded-full ${status === 'scanning' ? 'bg-red-500 animate-ping' : 'bg-green-500 animate-pulse'}`}></span>
//                     System_Status: {status === 'idle' ? 'Active' : 'WARNING'}
//                 </div>
//             </div>

//             <div className="bg-black text-white min-h-screen p-8 md:p-20 flex flex-col gap-12 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] mt-[10vh]">
//                 <div className="pt-24">
//                     <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">[ // Introduction ]</div>
//                     <HeroTypewriter />
//                 </div>
//                 <div>
//                      <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">[ // Stack ]</div>
//                     <TechTicker />
//                 </div>

//                 <div className="pb-32 pt-8 border-t border-zinc-800">
//                     <div className="h-[20vh] w-full flex flex-col items-center justify-center gap-4 opacity-70">
//                         <Lock className={`w-6 h-6 ${status === 'scanning' ? 'text-red-500 animate-pulse' : 'text-zinc-600'}`} />
//                         <p className="font-mono text-sm text-zinc-400 uppercase tracking-widest">Restricted Area Below</p>
//                     </div>

//                     <motion.div 
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ amount: 0.8 }} 
//                         onViewportEnter={handleTriggerEnter}
//                         animate={status === 'critical' ? { x: [-5, 5, -5, 5, 0], transition: { duration: 0.2 } } : {}}
//                         className={`relative h-48 w-full border rounded-lg overflow-hidden mt-4 transition-colors duration-300 ${status === 'critical' ? 'border-red-500 bg-red-950/30' : 'border-red-900/30 bg-red-950/10'}`}
//                     >
//                         {(status === 'scanning' || status === 'critical') && (
//                             <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500 font-mono z-10">
//                                 <AlertTriangle className={`w-8 h-8 mb-4 ${status === 'critical' ? 'animate-bounce' : 'animate-pulse'}`} />
//                                 <div className="text-sm tracking-widest font-bold"><ScrambleText text="DETECTING BREACH..." active={true} /></div>
//                             </div>
//                         )}
//                         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//       </div>

//       {/* ======================================================== */}
//       {/* THE "JARVIS" OVERLAY                                     */}
//       {/* ======================================================== */}
//       {status === 'breached' && (
//             <motion.div 
//                 key="jarvis-interface"
//                 variants={overlayVariants}
//                 initial="hidden"
//                 animate={isExiting ? "exit" : "visible"}
//                 className="fixed inset-0 z-[100] bg-black text-white overflow-hidden origin-center" 
//             >
//                 <JarvisBackdrop />

//                 {/* CONTROLS */}
//                 <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end gap-2">
//                     <div className="flex gap-2">
//                         <button onClick={() => scrollCards('left')} className="p-4 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-sm text-white/50 hover:text-white hover:bg-zinc-800 hover:scale-105 transition-all active:scale-95">
//                             <ChevronLeft className="w-6 h-6" />
//                         </button>
//                         <button onClick={() => scrollCards('right')} className="p-4 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-sm text-white/50 hover:text-white hover:bg-zinc-800 hover:scale-105 transition-all active:scale-95">
//                             <ChevronRight className="w-6 h-6" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* SCROLL NAV HINT */}
//                 <motion.div 
//                     initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }}
//                     className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[900] pointer-events-none flex flex-col items-center gap-2"
//                 >
//                     <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md">
//                         <MousePointer2 className="w-4 h-4 text-cyan-400 animate-bounce" />
//                         <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest animate-pulse">SCROLL TO NAVIGATE</span>
//                     </div>
//                     <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
//                 </motion.div>

//                 {/* EXIT */}
//                 <button onClick={handleReturn} className="fixed top-8 left-8 z-[999] text-white/40 hover:text-white flex items-center gap-2 font-mono text-xs uppercase tracking-widest cursor-pointer group bg-black/50 px-4 py-2 border border-white/10 rounded-full">
//                     <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Exit Archive
//                 </button>

//                 {/* SCROLLING CONTENT LAYER */}
//                 <motion.div 
//                     ref={scrollContainerRef}
//                     animate={{ opacity: isExiting ? 0 : 1 }}
//                     transition={{ duration: 0.2 }}
//                     className="relative z-10 w-full h-full flex items-center overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pl-[10vw]"
//                 >
//                     {/* Intro */}
//                     <div className="min-w-[40vw] pr-20 snap-center shrink-0">
//                         <h2 className="text-[10vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">DEEP <br/> STORAGE</h2>
//                         <div className="mt-8 font-mono text-cyan-400 text-xs tracking-widest border-l-2 border-cyan-400 pl-4 flex flex-col gap-1">
//                             <span className="font-bold"><ScrambleText text="WARNING: ENCRYPTION BROKEN" active={true} /></span>
//                             <span className="text-cyan-400/60">ACCESS LEVEL: UNRESTRICTED</span>
//                         </div>
//                     </div>

//                     {/* DYNAMIC CARD RENDERING FROM 'PROJECT_DATA' */}
//                     {PROJECT_DATA.map((proj) => (
//                          <div 
//                             key={proj.id}
//                             onClick={() => setSelectedProject(proj)}
//                             className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-white/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden cursor-pointer"
//                         >
//                             <div className={`absolute top-0 right-0 w-32 h-32 ${proj.color.replace('text-', 'bg-')}/10 rounded-full blur-3xl group-hover:${proj.color.replace('text-', 'bg-')}/20 transition-all`}></div>
//                             <div className="flex justify-between items-start relative z-10">
//                                 <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform">
//                                     <proj.icon className={`w-6 h-6 ${proj.color}`} />
//                                 </div>
//                                 <div className="font-mono text-xs text-zinc-500">[ 00{proj.id} ]</div>
//                             </div>
//                             <div className="relative z-10">
//                                 <h3 className={`text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:${proj.color.replace('text-', 'text-').replace('400', '100')} transition-colors`}>
//                                     {proj.title}
//                                 </h3>
//                                 <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4 line-clamp-3">
//                                     {proj.problem}
//                                 </p>
//                                 <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
//                                     <span>Read Full File</span>
//                                     <ArrowDownRight className="w-3 h-3" />
//                                 </div>
//                             </div>
//                         </div>
//                     ))}

//                     <div className="min-w-[10vw] snap-center"></div>
//                 </motion.div>
//             </motion.div>
//       )}
//     </main>
//   );
// }


// 'use client';

// import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';
// import { ArrowDownRight, ArrowLeft, Lock, AlertTriangle, ChevronLeft, ChevronRight, MousePointer2, HeartPulse, ScanFace, Siren, X, Calendar, Building2, Layers, CheckCircle2, Network } from 'lucide-react';

// // Components
// import DataSculpture from '@/components/DataSculpture'; 
// import CustomCursor from '@/components/CustomCursor';
// import HeroTypewriter from '@/components/HeroTypewriter'; 
// import TechTicker from '@/components/TechTicker'; 

// // --- TYPES & DATA ---
// type Project = {
//     id: number;
//     title: string;
//     date: string;
//     association: string;
//     icon: any;
//     color: string;
//     problem: string;
//     methodology: string[];
//     results: string[];
//     stack: string[];
// };

// const PROJECT_DATA: Project[] = [
//     {
//         id: 1,
//         title: "Risk Assessment Models for Silent Myocardial Infarction",
//         date: "Aug 2025 - Nov 2025",
//         association: "University at Buffalo",
//         icon: HeartPulse,
//         color: "text-red-400",
//         problem: "Developed a clinical decision support system to detect Silent Myocardial Infarction (SMI) in patients with Type 2 Diabetes. Diabetic autonomic neuropathy often masks chest pain ('silent' presentation), leading to delayed diagnosis and high mortality. Standard risk scores (e.g., Framingham) often fail to detect these subtle ischemic events.",
//         methodology: [
//             "Designed a 'Late Fusion' multimodal architecture integrating two distinct data streams.",
//             "Longitudinal Clinical Data: Processed electronic health records (MIMIC-IV) using MICE imputation for missing values.",
//             "Raw Physiological Waveforms: Developed a 1D-Convolutional Neural Network (1D-CNN) pre-trained on PTB-XL to extract deep morphological embeddings (e.g., repolarization dispersion) from raw 10-second ECG signals.",
//             "Fusion Layer: Concatenated deep ECG embeddings with clinical features into an XGBoost classifier to capture non-linear interactions between physiology and patient history."
//         ],
//         results: [
//             "Performance: The multimodal fusion model achieved an AUC-PR of 0.72, significantly outperforming unimodal baselines (Clinical-only RF: 0.61; ECG-only CNN: 0.66).",
//             "Clinical Utility: Performed Decision Curve Analysis (DCA), demonstrating a higher net clinical benefit than 'Treat-All' or 'Treat-None' strategies in the critical 5%–40% risk threshold range.",
//             "Responsible AI: Implemented Isotonic Regression to calibrate probabilities (reducing Brier Score to 0.138) and conducted a Fairness Audit, confirming equal opportunity (TPR parity <3% gap) across age and sex subgroups.",
//             "Interpretability: Utilized SHAP analysis to reveal that deep ECG embeddings were top-ranking predictors, identifying subtle T-wave morphological variances often missed in manual clinical review."
//         ],
//         stack: ["Machine Learning", "Deep Learning (1D-CNN)", "Multimodal Data Fusion", "XGBoost", "Python (PyTorch)", "Medical Signal Processing", "SHAP", "Algorithmic Fairness", "Clinical Data Engineering"]
//     },
//     {
//         id: 2,
//         title: "Deepfake Detection using CNNs & Temporal Modeling",
//         date: "May 2025 - Jun 2025",
//         association: "University at Buffalo",
//         icon: ScanFace,
//         color: "text-cyan-400",
//         problem: "The rise of synthetic media threatens digital authenticity. This project aimed to build a robust detection pipeline capable of distinguishing between real and manipulated video frames across diverse datasets, addressing the challenge of high-fidelity facial reenactment.",
//         methodology: [
//             "Designed a data pipeline to process over 40,000+ video frames from the FaceForensics++ dataset.",
//             "Used OpenCV + MTCNN for face detection and cropping; implemented frame-level data normalization and augmentation for model readiness.",
//             "Built multiple CNN-based architectures (e.g., ResNet50, EfficientNet-B0) and fused them using temporal LSTM layers to extract features across video time steps.",
//             "Performed quantitative analysis of model metrics (accuracy, precision, recall, F1-score) and visualized performance using ROC curves, confusion matrices, and Grad-CAM."
//         ],
//         results: [
//             "Feature fusion models outperformed individual CNNs by capturing complementary visual patterns, increasing F1-score from 71% to 87%.",
//             "Fine-tuning and face-focused training provided the best result, achieving an F1-score of 90.18% and accuracy of 85%.",
//             "Demonstrated that domain-specific training and data preprocessing significantly impact model performance — a key insight for data-centric roles."
//         ],
//         stack: ["Machine Learning", "Deep Learning", "Multimodal Data Fusion", "XGBoost", "Python", "Generative Shape Design", "Algorithm Design", "Artificial Intelligence"]
//     },
//     {
//         id: 3,
//         title: "Crime Prediction Using Sentiment Analysis",
//         date: "Aug 2024 - Dec 2024",
//         association: "University at Buffalo",
//         icon: Siren,
//         color: "text-orange-400",
//         problem: "Traditional crime prediction relies heavily on historical hotspots, often reinforcing bias and failing to account for social dynamics. This project sought to bridge the gap between static data systems and live actionable intelligence by integrating real-time social sentiment.",
//         methodology: [
//             "Designed and implemented a hybrid predictive model that integrates historical crime data with real-time social media sentiment.",
//             "Preprocessed and managed over 20GB of data, leveraging powerful tools like Playwright, PRAW, NLTK, and TextBlob to extract meaningful insights from unstructured social media datasets.",
//             "Applied Principal Component Analysis (PCA) for dimensionality reduction and Random Forest algorithms for severity prediction.",
//             "Enhanced data reliability by addressing challenges in data cleaning, reducing inconsistencies, and improving preprocessing workflows."
//         ],
//         results: [
//             "Achieved 87% accuracy in sentiment analysis and crime severity predictions.",
//             "Enabled dynamic crime severity assessments by integrating real-time sentiment data with traditional crime statistics.",
//             "Demonstrated the transformative potential of machine learning in public safety by delivering a scalable model for urban safety planning and resource allocation.",
//             "Showcased leadership in developing solutions that combine AI, data science, and social insights to solve complex societal challenges."
//         ],
//         stack: ["PCA", "Artificial Intelligence", "Machine Learning", "Data Mining", "Python", "NLTK", "TextBlob", "Random Forest", "Playwright"]
//     }
// ];

// // --- HELPER: TEXT SCRAMBLER ---
// const ScrambleText = ({ text, active, className }: { text: string, active: boolean, className?: string }) => {
//   const [display, setDisplay] = useState(text);
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

//   useEffect(() => {
//     if (!active) {
//         setDisplay(text);
//         return;
//     }
//     let interval: NodeJS.Timeout;
//     let iteration = 0;
//     interval = setInterval(() => {
//       setDisplay(
//         text.split("").map((letter, index) => {
//             if (index < iteration) return text[index];
//             return chars[Math.floor(Math.random() * chars.length)];
//           }).join("")
//       );
//       if (iteration >= text.length) clearInterval(interval);
//       iteration += 1 / 3; 
//     }, 30);
//     return () => clearInterval(interval);
//   }, [active, text]);
//   return <span className={className}>{display}</span>;
// };

// // --- COMPONENT: JARVIS BACKGROUND ---
// const JarvisBackdrop = () => {
//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center bg-black">
//             <div className="absolute inset-0 opacity-40" 
//                  style={{ 
//                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', 
//                      backgroundSize: '60px 60px',
//                      transform: 'perspective(600px) rotateX(60deg) translateY(0%) translateZ(-200px)',
//                      maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)' 
//                  }}>
//                  <motion.div 
//                     animate={{ top: ['0%', '100%'] }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                     className="absolute w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
//                  />
//             </div>
//             <div className="relative z-0 opacity-60 scale-125 md:scale-150">
//                 <motion.div 
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//                     className="absolute inset-0 w-[600px] h-[600px] border-[1px] border-dashed border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
//                 />
//                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-[2px] border-white/40 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)]"></div>
//             </div>
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_120%)] z-10 pointer-events-none"></div>
//         </div>
//     );
// };

// // --- COMPONENT: PROJECT DETAIL VIEW ---
// const ProjectDetail = ({ project, onClose }: { project: Project, onClose: () => void }) => {
//     const bgColor = project.color.replace('text-', 'bg-');
//     const borderColor = project.color.replace('text-', 'border-');

//     return (
//         <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="fixed inset-0 z-[2000] bg-zinc-950 flex flex-col overflow-y-auto no-scrollbar"
//         >
//             {/* BACKGROUND GRID */}
//             <div className="fixed inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
//             {/* TOP BAR */}
//             <div className="sticky top-0 z-[2002] p-6 flex justify-between items-center bg-zinc-950/90 backdrop-blur-md border-b border-white/10">
//                 <div className="flex items-center gap-4">
//                      <div className={`p-2 rounded-full bg-white/5 border border-white/10 ${project.color}`}>
//                         <project.icon className="w-5 h-5" />
//                      </div>
//                      <div className="flex flex-col">
//                         <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Secure_Record</span>
//                         <span className="font-mono text-sm font-bold text-white tracking-widest">ID_00{project.id}</span>
//                      </div>
//                 </div>
//                 <button 
//                     onClick={onClose} 
//                     className="group flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest border border-white/10 rounded-full hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/50 transition-all"
//                 >
//                     <span className="hidden md:inline">Close File</span>
//                     <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
//                 </button>
//             </div>

//             {/* CONTENT */}
//             <div className="max-w-6xl mx-auto w-full p-6 md:p-12 pb-24 flex flex-col gap-16 relative z-10">
                
//                 {/* HERO HEADER */}
//                 <div className="border-l-2 border-white/20 pl-8 relative">
//                     <motion.div 
//                         initial={{ height: 0 }} 
//                         animate={{ height: "100%" }} 
//                         className={`absolute left-[-2px] top-0 w-[2px] ${bgColor}`}
//                     />
//                     <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-none text-white">
//                         {project.title}
//                     </h1>
//                     <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-xs text-zinc-400 uppercase tracking-widest">
//                         <div className="flex items-center gap-2">
//                             <Calendar className="w-4 h-4 text-zinc-600" /> {project.date}
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Building2 className="w-4 h-4 text-zinc-600" /> {project.association}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
//                     {/* LEFT COLUMN: Main Tech Specs */}
//                     <div className="lg:col-span-8 flex flex-col gap-12">
                        
//                         {/* PROBLEM */}
//                         <section className="group">
//                             <h3 className={`text-sm font-mono uppercase tracking-widest mb-4 flex items-center gap-2 ${project.color}`}>
//                                 <AlertTriangle className="w-4 h-4" /> Mission Brief (Problem)
//                             </h3>
//                             <p className="text-zinc-300 leading-relaxed text-lg border border-white/5 bg-white/5 p-6 rounded-sm">
//                                 {project.problem}
//                             </p>
//                         </section>

//                         {/* METHODOLOGY */}
//                         <section>
//                             <h3 className={`text-sm font-mono uppercase tracking-widest mb-4 flex items-center gap-2 ${project.color}`}>
//                                 <Network className="w-4 h-4" /> Technical Architecture
//                             </h3>
//                             <div className="space-y-4">
//                                 {project.methodology.map((item, i) => (
//                                     <div key={i} className="flex gap-4">
//                                         <div className={`mt-2 min-w-[6px] h-[6px] rounded-full ${bgColor}`}></div>
//                                         <p className="text-zinc-400 leading-relaxed">{item}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </section>

//                         {/* RESULTS */}
//                         <section>
//                             <h3 className={`text-sm font-mono uppercase tracking-widest mb-4 flex items-center gap-2 ${project.color}`}>
//                                 <CheckCircle2 className="w-4 h-4" /> Execution Log (Results)
//                             </h3>
//                             <div className="grid grid-cols-1 gap-4">
//                                 {project.results.map((res, i) => (
//                                     <div key={i} className="flex items-center gap-4 p-4 border border-white/5 bg-zinc-900/50 rounded-sm hover:border-white/20 transition-colors">
//                                         <div className={`w-1 h-8 ${bgColor}`}></div>
//                                         <span className="text-zinc-300 text-sm leading-relaxed">{res}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </section>

//                     </div>

//                     {/* RIGHT COLUMN: Stack & Metadata */}
//                     <div className="lg:col-span-4 flex flex-col gap-8">
//                         <div className="sticky top-32">
//                              <div className="p-6 border border-white/10 rounded-sm bg-zinc-900/80 backdrop-blur-sm">
//                                 <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-2">
//                                     <Layers className="w-4 h-4" /> Tech Stack
//                                 </h3>
//                                 <div className="flex flex-wrap gap-2">
//                                     {project.stack.map((tech) => (
//                                         <span key={tech} className={`px-3 py-1.5 text-xs font-mono border border-white/10 rounded-sm text-zinc-300 bg-black/50 hover:${project.color} hover:border-white/30 transition-colors cursor-default`}>
//                                             {tech}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="mt-8 p-6 border border-dashed border-white/10 rounded-sm opacity-50">
//                                 <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-2">Security Level</h3>
//                                 <p className="text-xs font-mono text-zinc-400">UNRESTRICTED ACCESS</p>
//                                 <div className="w-full h-1 bg-zinc-800 mt-4 overflow-hidden">
//                                     <motion.div 
//                                         animate={{ x: ["-100%", "100%"] }} 
//                                         transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                                         className={`w-1/2 h-full ${bgColor}`}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </motion.div>
//     );
// };


// export default function Home() {
//   const containerRef = useRef(null);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const [status, setStatus] = useState('idle'); 
//   const [isExiting, setIsExiting] = useState(false); 
  
//   // NEW STATE: Selected Project for Detail View
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const heroTextY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

//   // Prevent scrolling
//   useEffect(() => {
//     if (status === 'breached') {
//         document.body.style.overflow = 'hidden';
//     } else {
//         document.body.style.overflow = 'unset';
//     }
//   }, [status]);

//   const handleTriggerEnter = () => {
//       if (status === 'idle') {
//           setStatus('scanning');
//           setTimeout(() => setStatus('critical'), 1500);
//           setTimeout(() => setStatus('breached'), 2200);
//       }
//   };

//   const scrollCards = (direction: 'left' | 'right') => {
//     if (scrollContainerRef.current) {
//         const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : window.innerWidth * 0.45;
//         scrollContainerRef.current.scrollBy({
//             left: direction === 'left' ? -scrollAmount : scrollAmount,
//             behavior: 'smooth'
//         });
//     }
//   };

//   const overlayVariants: Variants = {
//     hidden: { opacity: 0, scale: 1 },
//     visible: { opacity: 1, scale: 1, filter: ["brightness(1)"], transition: { duration: 0.5 } },
//     exit: { 
//         scaleY: [1, 0.005, 0.005], scaleX: [1, 1, 0], opacity: [1, 1, 0],
//         filter: ["brightness(1)", "brightness(1)", "brightness(2)"],
//         transition: { duration: 0.4, times: [0, 0.6, 1], ease: "easeInOut" }
//     }
//   };

//   const handleReturn = async () => {
//     setIsExiting(true); 
//     await new Promise(r => setTimeout(r, 400));
//     setStatus('rebooting'); 
//     setTimeout(() => {
//         window.scrollTo({ top: 0, behavior: "auto" }); 
//         setStatus('idle');
//         setIsExiting(false);
//         setSelectedProject(null); // Ensure project view is closed on full exit
//     }, 100); 
//   };

//   return (
//     <main 
//       ref={containerRef} 
//       className="relative min-h-[150vh] bg-white selection:bg-black selection:text-white"
//     >
      
//       {/* Cursor Logic: 
//          - White if 'breached' (Overlay) 
//          - White if 'selectedProject' is active (Detail View)
//       */}
//       <CustomCursor isInverse={status === 'breached' || !!selectedProject} />

//       <div className="fixed inset-0 z-0 pointer-events-none">
//           <DataSculpture />
//       </div>

//       <AnimatePresence>
//           {status === 'rebooting' && (
//               <motion.div 
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
//                   transition={{ duration: 0.1 }} 
//                   className="fixed inset-0 z-[9999] bg-white pointer-events-none"
//               />
//           )}
//       </AnimatePresence>

//       {/* --- PROJECT DETAIL VIEW (AnimatePresence allows exit animations) --- */}
//       <AnimatePresence>
//           {selectedProject && (
//               <ProjectDetail 
//                   project={selectedProject} 
//                   onClose={() => setSelectedProject(null)} 
//               />
//           )}
//       </AnimatePresence>

//       {/* SECTION 1: HERO */}
//       <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
//         <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="max-w-[90vw]">
//           <div className="text-xs font-mono text-zinc-400 mb-6 tracking-widest uppercase">Data Analyst & Architect</div>
//           <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black">
//             RAW DATA <br /><span className="text-zinc-300">REFINED</span> <br />INSIGHT.
//           </h1>
//         </motion.div>
//         <motion.div style={{ opacity: heroOpacity }} className="absolute bottom-12 right-12 flex gap-4 items-center text-xs font-mono text-zinc-400">
//             <span className="animate-pulse">INITIALIZING_SYSTEM</span>
//             <ArrowDownRight className="w-4 h-4" />
//         </motion.div>
//       </section>

//       {/* SECTION 2: THE TERMINAL SPLIT */}
//       <div className="relative z-20 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-between px-12 pb-12 pt-32 pointer-events-none">
//                 <div className="text-xs font-mono text-black/30 uppercase tracking-widest flex items-center gap-2">
//                     <span className={`w-2 h-2 rounded-full ${status === 'scanning' ? 'bg-red-500 animate-ping' : 'bg-green-500 animate-pulse'}`}></span>
//                     System_Status: {status === 'idle' ? 'Active' : 'WARNING'}
//                 </div>
//             </div>

//             <div className="bg-black text-white min-h-screen p-8 md:p-20 flex flex-col gap-12 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] mt-[10vh]">
//                 <div className="pt-24">
//                     <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">[ // Introduction ]</div>
//                     <HeroTypewriter />
//                 </div>
//                 <div>
//                      <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">[ // Stack ]</div>
//                     <TechTicker />
//                 </div>

//                 <div className="pb-32 pt-8 border-t border-zinc-800">
//                     <div className="h-[20vh] w-full flex flex-col items-center justify-center gap-4 opacity-70">
//                         <Lock className={`w-6 h-6 ${status === 'scanning' ? 'text-red-500 animate-pulse' : 'text-zinc-600'}`} />
//                         <p className="font-mono text-sm text-zinc-400 uppercase tracking-widest">Restricted Area Below</p>
//                     </div>

//                     <motion.div 
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ amount: 55, once: true }} 
//                         onViewportEnter={handleTriggerEnter}
//                         animate={status === 'critical' ? { x: [-5, 5, -5, 5, 0], transition: { duration: 0.2 } } : {}}
//                         className={`relative h-48 w-full border rounded-lg overflow-hidden mt-4 transition-colors duration-300 ${status === 'critical' ? 'border-red-500 bg-red-950/30' : 'border-red-900/30 bg-red-950/10'}`}
//                     >
//                         {(status === 'scanning' || status === 'critical') && (
//                             <>
//                                 <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500 font-mono z-10">
//                                     <AlertTriangle className={`w-8 h-8 mb-4 ${status === 'critical' ? 'animate-bounce' : 'animate-pulse'}`} />
//                                     <div className="text-sm tracking-widest font-bold"><ScrambleText text="DETECTING BREACH..." active={true} /></div>
//                                 </div>
//                                 {/* <--- ADDED LOADING BAR HERE --- */}
//                                 <div className="absolute bottom-0 left-0 w-full h-1 bg-red-900/20">
//                                     <motion.div 
//                                         initial={{ width: "0%" }}
//                                         animate={{ width: "100%" }}
//                                         transition={{ duration: 2.2, ease: "linear" }} 
//                                         className="h-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]"
//                                     />
//                                 </div>
//                             </>
//                         )}
//                         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//       </div>

//       {/* ======================================================== */}
//       {/* THE "JARVIS" OVERLAY                                     */}
//       {/* ======================================================== */}
//       {status === 'breached' && (
//             <motion.div 
//                 key="jarvis-interface"
//                 variants={overlayVariants}
//                 initial="hidden"
//                 animate={isExiting ? "exit" : "visible"}
//                 className="fixed inset-0 z-[100] bg-black text-white overflow-hidden origin-center" 
//             >
//                 <JarvisBackdrop />

//                 {/* CONTROLS */}
//                 <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end gap-2">
//                     <div className="flex gap-2">
//                         <button onClick={() => scrollCards('left')} className="p-4 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-sm text-white/50 hover:text-white hover:bg-zinc-800 hover:scale-105 transition-all active:scale-95">
//                             <ChevronLeft className="w-6 h-6" />
//                         </button>
//                         <button onClick={() => scrollCards('right')} className="p-4 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-sm text-white/50 hover:text-white hover:bg-zinc-800 hover:scale-105 transition-all active:scale-95">
//                             <ChevronRight className="w-6 h-6" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* SCROLL NAV HINT */}
//                 <motion.div 
//                     initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }}
//                     className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[900] pointer-events-none flex flex-col items-center gap-2"
//                 >
//                     <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md">
//                         <MousePointer2 className="w-4 h-4 text-cyan-400 animate-bounce" />
//                         <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest animate-pulse">SCROLL TO NAVIGATE</span>
//                     </div>
//                     <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
//                 </motion.div>

//                 {/* EXIT */}
//                 <button onClick={handleReturn} className="fixed top-8 left-8 z-[999] text-white/40 hover:text-white flex items-center gap-2 font-mono text-xs uppercase tracking-widest cursor-pointer group bg-black/50 px-4 py-2 border border-white/10 rounded-full">
//                     <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Exit Archive
//                 </button>

//                 {/* SCROLLING CONTENT LAYER */}
//                 <motion.div 
//                     ref={scrollContainerRef}
//                     animate={{ opacity: isExiting ? 0 : 1 }}
//                     transition={{ duration: 0.2 }}
//                     className="relative z-10 w-full h-full flex items-center overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pl-[10vw]"
//                 >
//                     {/* Intro */}
//                     <div className="min-w-[40vw] pr-20 snap-center shrink-0">
//                         <h2 className="text-[10vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">DEEP <br/> STORAGE</h2>
//                         <div className="mt-8 font-mono text-cyan-400 text-xs tracking-widest border-l-2 border-cyan-400 pl-4 flex flex-col gap-1">
//                             <span className="font-bold"><ScrambleText text="WARNING: ENCRYPTION BROKEN" active={true} /></span>
//                             <span className="text-cyan-400/60">ACCESS LEVEL: UNRESTRICTED</span>
//                         </div>
//                     </div>

//                     {/* DYNAMIC CARD RENDERING FROM 'PROJECT_DATA' */}
//                     {PROJECT_DATA.map((proj) => (
//                          <div 
//                             key={proj.id}
//                             onClick={() => setSelectedProject(proj)}
//                             className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-white/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden cursor-pointer"
//                         >
//                             <div className={`absolute top-0 right-0 w-32 h-32 ${proj.color.replace('text-', 'bg-')}/10 rounded-full blur-3xl group-hover:${proj.color.replace('text-', 'bg-')}/20 transition-all`}></div>
//                             <div className="flex justify-between items-start relative z-10">
//                                 <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform">
//                                     <proj.icon className={`w-6 h-6 ${proj.color}`} />
//                                 </div>
//                                 <div className="font-mono text-xs text-zinc-500">[ 00{proj.id} ]</div>
//                             </div>
//                             <div className="relative z-10">
//                                 <h3 className={`text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:${proj.color.replace('text-', 'text-').replace('400', '100')} transition-colors`}>
//                                     {proj.title}
//                                 </h3>
//                                 <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4 line-clamp-3">
//                                     {proj.problem}
//                                 </p>
//                                 <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
//                                     <span>Read Full File</span>
//                                     <ArrowDownRight className="w-3 h-3" />
//                                 </div>
//                             </div>
//                         </div>
//                     ))}

//                     <div className="min-w-[10vw] snap-center"></div>
//                 </motion.div>
//             </motion.div>
//       )}
//     </main>
//   );
// }

'use client';

import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowDownRight, ArrowLeft, Lock, AlertTriangle, ChevronLeft, ChevronRight, MousePointer2, HeartPulse, ScanFace, Siren, X, Calendar, Building2, Layers, CheckCircle2, Network } from 'lucide-react';

// Components
import DataSculpture from '@/components/DataSculpture'; 
import CustomCursor from '@/components/CustomCursor';
import HeroTypewriter from '@/components/HeroTypewriter'; 
import TechTicker from '@/components/TechTicker'; 

// --- TYPES & DATA ---
type Project = {
    id: number;
    title: string;
    date: string;
    association: string;
    icon: any;
    color: string;
    problem: string;
    methodology: string[];
    results: string[];
    stack: string[];
};

const PROJECT_DATA: Project[] = [
    {
        id: 1,
        title: "Risk Assessment Models for Silent Myocardial Infarction",
        date: "Aug 2025 - Nov 2025",
        association: "University at Buffalo",
        icon: HeartPulse,
        color: "text-red-400",
        problem: "Developed a clinical decision support system to detect Silent Myocardial Infarction (SMI) in patients with Type 2 Diabetes. Diabetic autonomic neuropathy often masks chest pain ('silent' presentation), leading to delayed diagnosis and high mortality. Standard risk scores (e.g., Framingham) often fail to detect these subtle ischemic events.",
        methodology: [
            "Designed a 'Late Fusion' multimodal architecture integrating two distinct data streams.",
            "Longitudinal Clinical Data: Processed electronic health records (MIMIC-IV) using MICE imputation for missing values.",
            "Raw Physiological Waveforms: Developed a 1D-Convolutional Neural Network (1D-CNN) pre-trained on PTB-XL to extract deep morphological embeddings (e.g., repolarization dispersion) from raw 10-second ECG signals.",
            "Fusion Layer: Concatenated deep ECG embeddings with clinical features into an XGBoost classifier to capture non-linear interactions between physiology and patient history."
        ],
        results: [
            "Performance: The multimodal fusion model achieved an AUC-PR of 0.72, significantly outperforming unimodal baselines (Clinical-only RF: 0.61; ECG-only CNN: 0.66).",
            "Clinical Utility: Performed Decision Curve Analysis (DCA), demonstrating a higher net clinical benefit than 'Treat-All' or 'Treat-None' strategies in the critical 5%–40% risk threshold range.",
            "Responsible AI: Implemented Isotonic Regression to calibrate probabilities (reducing Brier Score to 0.138) and conducted a Fairness Audit, confirming equal opportunity (TPR parity <3% gap) across age and sex subgroups.",
            "Interpretability: Utilized SHAP analysis to reveal that deep ECG embeddings were top-ranking predictors, identifying subtle T-wave morphological variances often missed in manual clinical review."
        ],
        stack: ["Machine Learning", "Deep Learning (1D-CNN)", "Multimodal Data Fusion", "XGBoost", "Python (PyTorch)", "Medical Signal Processing", "SHAP", "Algorithmic Fairness", "Clinical Data Engineering"]
    },
    {
        id: 2,
        title: "Deepfake Detection using CNNs & Temporal Modeling",
        date: "May 2025 - Jun 2025",
        association: "University at Buffalo",
        icon: ScanFace,
        color: "text-cyan-400",
        problem: "The rise of synthetic media threatens digital authenticity. This project aimed to build a robust detection pipeline capable of distinguishing between real and manipulated video frames across diverse datasets, addressing the challenge of high-fidelity facial reenactment.",
        methodology: [
            "Designed a data pipeline to process over 40,000+ video frames from the FaceForensics++ dataset.",
            "Used OpenCV + MTCNN for face detection and cropping; implemented frame-level data normalization and augmentation for model readiness.",
            "Built multiple CNN-based architectures (e.g., ResNet50, EfficientNet-B0) and fused them using temporal LSTM layers to extract features across video time steps.",
            "Performed quantitative analysis of model metrics (accuracy, precision, recall, F1-score) and visualized performance using ROC curves, confusion matrices, and Grad-CAM."
        ],
        results: [
            "Feature fusion models outperformed individual CNNs by capturing complementary visual patterns, increasing F1-score from 71% to 87%.",
            "Fine-tuning and face-focused training provided the best result, achieving an F1-score of 90.18% and accuracy of 85%.",
            "Demonstrated that domain-specific training and data preprocessing significantly impact model performance — a key insight for data-centric roles."
        ],
        stack: ["Machine Learning", "Deep Learning", "Multimodal Data Fusion", "XGBoost", "Python", "Generative Shape Design", "Algorithm Design", "Artificial Intelligence"]
    },
    {
        id: 3,
        title: "Crime Prediction Using Sentiment Analysis",
        date: "Aug 2024 - Dec 2024",
        association: "University at Buffalo",
        icon: Siren,
        color: "text-orange-400",
        problem: "Traditional crime prediction relies heavily on historical hotspots, often reinforcing bias and failing to account for social dynamics. This project sought to bridge the gap between static data systems and live actionable intelligence by integrating real-time social sentiment.",
        methodology: [
            "Designed and implemented a hybrid predictive model that integrates historical crime data with real-time social media sentiment.",
            "Preprocessed and managed over 20GB of data, leveraging powerful tools like Playwright, PRAW, NLTK, and TextBlob to extract meaningful insights from unstructured social media datasets.",
            "Applied Principal Component Analysis (PCA) for dimensionality reduction and Random Forest algorithms for severity prediction.",
            "Enhanced data reliability by addressing challenges in data cleaning, reducing inconsistencies, and improving preprocessing workflows."
        ],
        results: [
            "Achieved 87% accuracy in sentiment analysis and crime severity predictions.",
            "Enabled dynamic crime severity assessments by integrating real-time sentiment data with traditional crime statistics.",
            "Demonstrated the transformative potential of machine learning in public safety by delivering a scalable model for urban safety planning and resource allocation.",
            "Showcased leadership in developing solutions that combine AI, data science, and social insights to solve complex societal challenges."
        ],
        stack: ["PCA", "Artificial Intelligence", "Machine Learning", "Data Mining", "Python", "NLTK", "TextBlob", "Random Forest", "Playwright"]
    }
];

// --- HELPER: TEXT SCRAMBLER ---
const ScrambleText = ({ text, active, className }: { text: string, active: boolean, className?: string }) => {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

  useEffect(() => {
    if (!active) {
        setDisplay(text);
        return;
    }
    let interval: NodeJS.Timeout;
    let iteration = 0;
    interval = setInterval(() => {
      setDisplay(
        text.split("").map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3; 
    }, 30);
    return () => clearInterval(interval);
  }, [active, text]);
  return <span className={className}>{display}</span>;
};

// --- COMPONENT: JARVIS BACKGROUND ---
const JarvisBackdrop = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center bg-black">
            <div className="absolute inset-0 opacity-40" 
                 style={{ 
                     backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', 
                     backgroundSize: '60px 60px',
                     transform: 'perspective(600px) rotateX(60deg) translateY(0%) translateZ(-200px)',
                     maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)' 
                 }}>
                 <motion.div 
                    animate={{ top: ['0%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                 />
            </div>
            <div className="relative z-0 opacity-60 scale-125 md:scale-150">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-[600px] h-[600px] border-[1px] border-dashed border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-[2px] border-white/40 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)]"></div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_120%)] z-10 pointer-events-none"></div>
        </div>
    );
};

// --- COMPONENT: PROJECT DETAIL VIEW ---
const ProjectDetail = ({ project, onClose }: { project: Project, onClose: () => void }) => {
    const bgColor = project.color.replace('text-', 'bg-');
    const borderColor = project.color.replace('text-', 'border-');

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[2000] bg-zinc-950 flex flex-col overflow-y-auto no-scrollbar"
        >
            {/* BACKGROUND GRID */}
            <div className="fixed inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            {/* TOP BAR */}
            <div className="sticky top-0 z-[2002] p-6 flex justify-between items-center bg-zinc-950/90 backdrop-blur-md border-b border-white/10">
                <div className="flex items-center gap-4">
                     <div className={`p-2 rounded-full bg-white/5 border border-white/10 ${project.color}`}>
                        <project.icon className="w-5 h-5" />
                     </div>
                     <div className="flex flex-col">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Secure_Record</span>
                        <span className="font-mono text-sm font-bold text-white tracking-widest">ID_00{project.id}</span>
                     </div>
                </div>
                <button 
                    onClick={onClose} 
                    className="group flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest border border-white/10 rounded-full hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/50 transition-all"
                >
                    <span className="hidden md:inline">Close File</span>
                    <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                </button>
            </div>

            {/* CONTENT */}
            <div className="max-w-6xl mx-auto w-full p-6 md:p-12 pb-24 flex flex-col gap-16 relative z-10">
                
                {/* HERO HEADER */}
                <div className="border-l-2 border-white/20 pl-8 relative">
                    <motion.div 
                        initial={{ height: 0 }} 
                        animate={{ height: "100%" }} 
                        className={`absolute left-[-2px] top-0 w-[2px] ${bgColor}`}
                    />
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-none text-white">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-xs text-zinc-400 uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-zinc-600" /> {project.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-zinc-600" /> {project.association}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* LEFT COLUMN: Main Tech Specs */}
                    <div className="lg:col-span-8 flex flex-col gap-12">
                        
                        {/* PROBLEM */}
                        <section className="group">
                            <h3 className={`text-sm font-mono uppercase tracking-widest mb-4 flex items-center gap-2 ${project.color}`}>
                                <AlertTriangle className="w-4 h-4" /> Mission Brief (Problem)
                            </h3>
                            <p className="text-zinc-300 leading-relaxed text-lg border border-white/5 bg-white/5 p-6 rounded-sm">
                                {project.problem}
                            </p>
                        </section>

                        {/* METHODOLOGY */}
                        <section>
                            <h3 className={`text-sm font-mono uppercase tracking-widest mb-4 flex items-center gap-2 ${project.color}`}>
                                <Network className="w-4 h-4" /> Technical Architecture
                            </h3>
                            <div className="space-y-4">
                                {project.methodology.map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className={`mt-2 min-w-[6px] h-[6px] rounded-full ${bgColor}`}></div>
                                        <p className="text-zinc-400 leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* RESULTS */}
                        <section>
                            <h3 className={`text-sm font-mono uppercase tracking-widest mb-4 flex items-center gap-2 ${project.color}`}>
                                <CheckCircle2 className="w-4 h-4" /> Execution Log (Results)
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {project.results.map((res, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 border border-white/5 bg-zinc-900/50 rounded-sm hover:border-white/20 transition-colors">
                                        <div className={`w-1 h-8 ${bgColor}`}></div>
                                        <span className="text-zinc-300 text-sm leading-relaxed">{res}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* RIGHT COLUMN: Stack & Metadata */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        <div className="sticky top-32">
                             <div className="p-6 border border-white/10 rounded-sm bg-zinc-900/80 backdrop-blur-sm">
                                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-2">
                                    <Layers className="w-4 h-4" /> Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className={`px-3 py-1.5 text-xs font-mono border border-white/10 rounded-sm text-zinc-300 bg-black/50 hover:${project.color} hover:border-white/30 transition-colors cursor-default`}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 p-6 border border-dashed border-white/10 rounded-sm opacity-50">
                                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-2">Security Level</h3>
                                <p className="text-xs font-mono text-zinc-400">UNRESTRICTED ACCESS</p>
                                <div className="w-full h-1 bg-zinc-800 mt-4 overflow-hidden">
                                    <motion.div 
                                        animate={{ x: ["-100%", "100%"] }} 
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className={`w-1/2 h-full ${bgColor}`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};


export default function Home() {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [status, setStatus] = useState('idle'); 
  const [isExiting, setIsExiting] = useState(false); 
  
  // NEW STATE: Selected Project for Detail View
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroTextY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // Prevent scrolling
  useEffect(() => {
    if (status === 'breached') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
  }, [status]);

  const handleTriggerEnter = () => {
      if (status === 'idle') {
          setStatus('scanning');
          setTimeout(() => setStatus('critical'), 1500);
          setTimeout(() => setStatus('breached'), 2200);
      }
  };

  const scrollCards = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
        const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : window.innerWidth * 0.45;
        scrollContainerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1, filter: ["brightness(1)"], transition: { duration: 0.5 } },
    exit: { 
        scaleY: [1, 0.005, 0.005], scaleX: [1, 1, 0], opacity: [1, 1, 0],
        filter: ["brightness(1)", "brightness(1)", "brightness(2)"],
        transition: { duration: 0.4, times: [0, 0.6, 1], ease: "easeInOut" }
    }
  };

  const handleReturn = async () => {
    setIsExiting(true); 
    await new Promise(r => setTimeout(r, 400));
    setStatus('rebooting'); 
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "auto" }); 
        setStatus('idle');
        setIsExiting(false);
        setSelectedProject(null); // Ensure project view is closed on full exit
    }, 100); 
  };

  return (
    <main 
      ref={containerRef} 
      className="relative min-h-[150vh] bg-white selection:bg-black selection:text-white"
    >
      
      {/* Cursor Logic: 
         - White if 'breached' (Overlay) 
         - White if 'selectedProject' is active (Detail View)
      */}
      <CustomCursor isInverse={status === 'breached' || !!selectedProject} />

      <div className="fixed inset-0 z-0 pointer-events-none">
          <DataSculpture />
      </div>

      <AnimatePresence>
          {status === 'rebooting' && (
              <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
                  transition={{ duration: 0.1 }} 
                  className="fixed inset-0 z-[9999] bg-white pointer-events-none"
              />
          )}
      </AnimatePresence>

      {/* --- PROJECT DETAIL VIEW (AnimatePresence allows exit animations) --- */}
      <AnimatePresence>
          {selectedProject && (
              <ProjectDetail 
                  project={selectedProject} 
                  onClose={() => setSelectedProject(null)} 
              />
          )}
      </AnimatePresence>

      {/* SECTION 1: HERO */}
      <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
        <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="max-w-[90vw]">
          <div className="text-xs font-mono text-zinc-400 mb-6 tracking-widest uppercase">Data Analyst & Architect</div>
          <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black">
            RAW DATA <br /><span className="text-zinc-300">REFINED</span> <br />INSIGHT.
          </h1>
        </motion.div>
        <motion.div style={{ opacity: heroOpacity }} className="absolute bottom-12 right-12 flex gap-4 items-center text-xs font-mono text-zinc-400">
            <span className="animate-pulse">INITIALIZING_SYSTEM</span>
            <ArrowDownRight className="w-4 h-4" />
        </motion.div>
      </section>

      {/* SECTION 2: THE TERMINAL SPLIT */}
      <div className="relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-between px-12 pb-12 pt-32 pointer-events-none">
                <div className="text-xs font-mono text-black/30 uppercase tracking-widest flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${status === 'scanning' ? 'bg-red-500 animate-ping' : 'bg-green-500 animate-pulse'}`}></span>
                    System_Status: {status === 'idle' ? 'Active' : 'WARNING'}
                </div>
            </div>

            <div className="bg-black text-white min-h-screen p-8 md:p-20 flex flex-col gap-12 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] mt-[10vh]">
                <div className="pt-24">
                    <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">[ // Introduction ]</div>
                    <HeroTypewriter />
                </div>
                <div>
                     <div className="text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">[ // Stack ]</div>
                    <TechTicker />
                </div>

                <div className="pb-32 pt-8 border-t border-zinc-800">
                    <div className="h-[20vh] w-full flex flex-col items-center justify-center gap-4 opacity-70">
                        <Lock className={`w-6 h-6 ${status === 'scanning' ? 'text-red-500 animate-pulse' : 'text-zinc-600'}`} />
                        <p className="font-mono text-sm text-zinc-400 uppercase tracking-widest">Restricted Area Below</p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ amount: 0.55, once: true }} // <--- CHANGED TO 0.55
                        onViewportEnter={handleTriggerEnter}
                        animate={status === 'critical' ? { x: [-5, 5, -5, 5, 0], transition: { duration: 0.2 } } : {}}
                        className={`relative h-48 w-full border rounded-lg overflow-hidden mt-4 transition-colors duration-300 ${status === 'critical' ? 'border-red-500 bg-red-950/30' : 'border-red-900/30 bg-red-950/10'}`}
                    >
                        {(status === 'scanning' || status === 'critical') && (
                            <>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500 font-mono z-10">
                                    <AlertTriangle className={`w-8 h-8 mb-4 ${status === 'critical' ? 'animate-bounce' : 'animate-pulse'}`} />
                                    <div className="text-sm tracking-widest font-bold"><ScrambleText text="DETECTING BREACH..." active={true} /></div>
                                </div>
                                {/* <--- ADDED LOADING BAR HERE --- */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-900/20">
                                    <motion.div 
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 2.2, ease: "linear" }} 
                                        className="h-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]"
                                    />
                                </div>
                            </>
                        )}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                    </motion.div>
                </div>
            </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* THE "JARVIS" OVERLAY                                     */}
      {/* ======================================================== */}
      {status === 'breached' && (
            <motion.div 
                key="jarvis-interface"
                variants={overlayVariants}
                initial="hidden"
                animate={isExiting ? "exit" : "visible"}
                className="fixed inset-0 z-[100] bg-black text-white overflow-hidden origin-center" 
            >
                <JarvisBackdrop />

                {/* CONTROLS */}
                <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end gap-2">
                    <div className="flex gap-2">
                        <button onClick={() => scrollCards('left')} className="p-4 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-sm text-white/50 hover:text-white hover:bg-zinc-800 hover:scale-105 transition-all active:scale-95">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button onClick={() => scrollCards('right')} className="p-4 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-sm text-white/50 hover:text-white hover:bg-zinc-800 hover:scale-105 transition-all active:scale-95">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* SCROLL NAV HINT */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }}
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[900] pointer-events-none flex flex-col items-center gap-2"
                >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md">
                        <MousePointer2 className="w-4 h-4 text-cyan-400 animate-bounce" />
                        <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest animate-pulse">SCROLL TO NAVIGATE</span>
                    </div>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                </motion.div>

                {/* EXIT */}
                <button onClick={handleReturn} className="fixed top-8 left-8 z-[999] text-white/40 hover:text-white flex items-center gap-2 font-mono text-xs uppercase tracking-widest cursor-pointer group bg-black/50 px-4 py-2 border border-white/10 rounded-full">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Exit Archive
                </button>

                {/* SCROLLING CONTENT LAYER */}
                <motion.div 
                    ref={scrollContainerRef}
                    animate={{ opacity: isExiting ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10 w-full h-full flex items-center overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pl-[10vw]"
                >
                    {/* Intro */}
                    <div className="min-w-[40vw] pr-20 snap-center shrink-0">
                        <h2 className="text-[10vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">DEEP <br/> STORAGE</h2>
                        <div className="mt-8 font-mono text-cyan-400 text-xs tracking-widest border-l-2 border-cyan-400 pl-4 flex flex-col gap-1">
                            <span className="font-bold"><ScrambleText text="WARNING: ENCRYPTION BROKEN" active={true} /></span>
                            <span className="text-cyan-400/60">ACCESS LEVEL: UNRESTRICTED</span>
                        </div>
                    </div>

                    {/* DYNAMIC CARD RENDERING FROM 'PROJECT_DATA' */}
                    {PROJECT_DATA.map((proj) => (
                         <div 
                            key={proj.id}
                            onClick={() => setSelectedProject(proj)}
                            className="min-w-[85vw] md:min-w-[45vw] h-[60vh] bg-zinc-950/80 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between hover:bg-zinc-900/90 hover:border-white/50 transition-all duration-500 mr-12 snap-center rounded-sm group relative overflow-hidden cursor-pointer"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 ${proj.color.replace('text-', 'bg-')}/10 rounded-full blur-3xl group-hover:${proj.color.replace('text-', 'bg-')}/20 transition-all`}></div>
                            <div className="flex justify-between items-start relative z-10">
                                <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform">
                                    <proj.icon className={`w-6 h-6 ${proj.color}`} />
                                </div>
                                <div className="font-mono text-xs text-zinc-500">[ 00{proj.id} ]</div>
                            </div>
                            <div className="relative z-10">
                                <h3 className={`text-4xl md:text-5xl font-bold mb-6 mt-12 text-white group-hover:${proj.color.replace('text-', 'text-').replace('400', '100')} transition-colors`}>
                                    {proj.title}
                                </h3>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4 line-clamp-3">
                                    {proj.problem}
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                                    <span>Read Full File</span>
                                    <ArrowDownRight className="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="min-w-[10vw] snap-center"></div>
                </motion.div>
            </motion.div>
      )}
    </main>
  );
}