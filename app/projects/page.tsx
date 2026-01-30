// 'use client';

// import { ArrowUpRight } from 'lucide-react'; 

// // THE DATA (Moved from Home)
// const projects = [
//   { 
//     id: "01",
//     title: "ZARA ANALYTICS", 
//     category: "Predictive Modeling", 
//     year: "2024",
//     description: "Architected a demand forecasting engine using Random Forest. Processed 14M rows of seasonal data to reduce inventory waste by 18% across North American stores.",
//     stack: ["Python", "Pandas", "Scikit-Learn"]
//   },
//   { 
//     id: "02",
//     title: "TEENAGE ENG.", 
//     category: "Supply Chain", 
//     year: "2023",
//     description: "Designed a supply chain dashboard tracking component lead times. Identified critical bottlenecks in the OP-1 Field production line using SQL window functions.",
//     stack: ["PostgreSQL", "dbt", "Tableau"]
//   },
//   { 
//     id: "03",
//     title: "AESOP SKINCARE", 
//     category: "Market Analysis", 
//     year: "2023",
//     description: "Performed sentiment analysis on 50k customer reviews. Mapped 'Quiet Luxury' keywords to sales spikes, influencing the 2024 digital ad spend strategy.",
//     stack: ["R Studio", "NLP", "GGPlot2"]
//   },
//   { 
//     id: "04",
//     title: "ACNE STUDIOS", 
//     category: "Trend Forecasting", 
//     year: "2022",
//     description: "Built a visual trend scraper that aggregates runway colors and fabrics. Used computer vision to quantify 'minimalism' trends for the FW25 procurement team.",
//     stack: ["Python", "OpenCV", "React"]
//   }
// ];

// export default function ProjectsPage() {
//   return (
//     <main className="min-h-screen bg-black text-white pt-32 px-6 md:px-20 pb-20">
//       {/* Header */}
//       <div className="border-b border-zinc-800 pb-12 mb-20">
//         <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">ARCHIVE.</h1>
//         <p className="font-mono text-zinc-500 max-w-xl">
//           [ // A collection of data architecture, predictive models, and visualization systems designed for clarity. ]
//         </p>
//       </div>

//       {/* The List */}
//       <div className="flex flex-col">
//         {projects.map((project, i) => (
//           <div key={i} className="group border-b border-zinc-900 py-12 flex flex-col md:flex-row md:items-start gap-8 hover:bg-zinc-900/30 transition-colors duration-500 cursor-pointer">
            
//             {/* ID */}
//             <div className="font-mono text-zinc-600 text-sm md:w-1/12">
//               [{project.id}]
//             </div>

//             {/* Title & Category */}
//             <div className="md:w-4/12">
//               <h2 className="text-3xl font-bold mb-2 group-hover:text-zinc-300 transition-colors">{project.title}</h2>
//               <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider border border-zinc-800 px-2 py-1 rounded-full">
//                 {project.category}
//               </span>
//             </div>

//             {/* Description */}
//             <div className="md:w-5/12 text-zinc-400 leading-relaxed font-light">
//               <p>{project.description}</p>
//               <div className="flex gap-4 mt-4 text-xs font-mono text-zinc-600">
//                 {project.stack.map((tech, t) => (
//                   <span key={t}>// {tech}</span>
//                 ))}
//               </div>
//             </div>

//             {/* Link Icon */}
//             <div className="md:w-1/12 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
//                 <ArrowUpRight className="w-8 h-8 text-white" />
//             </div>

//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }


// 'use client';

// import { ArrowUpRight } from 'lucide-react'; 
// import GlitchText from '@/components/GlitchText'; // <--- NEW IMPORT

// // THE DATA
// const projects = [
//   { 
//     id: "01",
//     title: "ZARA ANALYTICS", 
//     category: "Predictive Modeling", 
//     year: "2024",
//     description: "Architected a demand forecasting engine using Random Forest. Processed 14M rows of seasonal data to reduce inventory waste by 18% across North American stores.",
//     stack: ["Python", "Pandas", "Scikit-Learn"]
//   },
//   { 
//     id: "02",
//     title: "TEENAGE ENG.", 
//     category: "Supply Chain", 
//     year: "2023",
//     description: "Designed a supply chain dashboard tracking component lead times. Identified critical bottlenecks in the OP-1 Field production line using SQL window functions.",
//     stack: ["PostgreSQL", "dbt", "Tableau"]
//   },
//   { 
//     id: "03",
//     title: "AESOP SKINCARE", 
//     category: "Market Analysis", 
//     year: "2023",
//     description: "Performed sentiment analysis on 50k customer reviews. Mapped 'Quiet Luxury' keywords to sales spikes, influencing the 2024 digital ad spend strategy.",
//     stack: ["R Studio", "NLP", "GGPlot2"]
//   },
//   { 
//     id: "04",
//     title: "ACNE STUDIOS", 
//     category: "Trend Forecasting", 
//     year: "2022",
//     description: "Built a visual trend scraper that aggregates runway colors and fabrics. Used computer vision to quantify 'minimalism' trends for the FW25 procurement team.",
//     stack: ["Python", "OpenCV", "React"]
//   }
// ];

// export default function ProjectsPage() {
//   return (
//     <main className="min-h-screen bg-black text-white pt-32 px-6 md:px-20 pb-20">
//       {/* Header */}
//       <div className="border-b border-zinc-800 pb-12 mb-20">
//         <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">ARCHIVE.</h1>
//         <p className="font-mono text-zinc-500 max-w-xl">
//           [ // A collection of data architecture, predictive models, and visualization systems designed for clarity. ]
//         </p>
//       </div>

//       {/* The List */}
//       <div className="flex flex-col">
//         {projects.map((project, i) => (
//           <div key={i} className="group border-b border-zinc-900 py-12 flex flex-col md:flex-row md:items-start gap-8 hover:bg-zinc-900/30 transition-colors duration-500 cursor-pointer">
            
//             {/* ID */}
//             <div className="font-mono text-zinc-600 text-sm md:w-1/12">
//               [{project.id}]
//             </div>

//             {/* Title & Category */}
//             <div className="md:w-4/12">
//               <h2 className="text-3xl font-bold mb-2 text-white group-hover:text-zinc-300 transition-colors">
//                 {/* HERE IS THE CHANGE: Replaced static text with the component */}
//                 <GlitchText text={project.title} />
//               </h2>
//               <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider border border-zinc-800 px-2 py-1 rounded-full">
//                 {project.category}
//               </span>
//             </div>

//             {/* Description */}
//             <div className="md:w-5/12 text-zinc-400 leading-relaxed font-light">
//               <p>{project.description}</p>
//               <div className="flex gap-4 mt-4 text-xs font-mono text-zinc-600">
//                 {project.stack.map((tech, t) => (
//                   <span key={t}>// {tech}</span>
//                 ))}
//               </div>
//             </div>

//             {/* Link Icon */}
//             <div className="md:w-1/12 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
//                 <ArrowUpRight className="w-8 h-8 text-white" />
//             </div>

//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }


// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowUpRight, Code2, Cpu, Database, Network, Terminal } from 'lucide-react';
// import Navbar from '@/components/Navbar';

// // --- DATA: DATA SCIENCE & FINANCE ---
// const projects = [
//   { 
//     id: "01",
//     title: "ALGORITHMIC TRADING BOT", 
//     category: "FinTech / Python", 
//     year: "2024",
//     description: "Developed a momentum-based trading algorithm using Moving Average Crossovers. Backtested on 5 years of S&P 500 data, achieving a Sharpe Ratio of 1.8.",
//     stack: ["Python", "Pandas", "Alpaca API", "Docker"],
//     metric: "Returns: +18.5%",
//     progress: 85
//   },
//   { 
//     id: "02",
//     title: "SUPPLY CHAIN OPTIMIZER", 
//     category: "Operations Research", 
//     year: "2023",
//     description: "Built a linear programming model to minimize logistics costs for a regional distributor. Optimized route planning across 4 distribution centers.",
//     stack: ["R Studio", "Gurobi", "Tableau", "SQL"],
//     metric: "Cost Red: 12%",
//     progress: 70
//   },
//   { 
//     id: "03",
//     title: "CUSTOMER CHURN PREDICTOR", 
//     category: "Machine Learning", 
//     year: "2023",
//     description: "Trained a Random Forest classifier to identify at-risk customers. Integrated with CRM to flag accounts with >75% churn probability.",
//     stack: ["Scikit-Learn", "XGBoost", "AWS SageMaker"],
//     metric: "Recall: 94%",
//     progress: 94
//   },
//   { 
//     id: "04",
//     title: "MARKET SENTIMENT NLP", 
//     category: "Natural Language Processing", 
//     year: "2022",
//     description: "Scraped 50k+ Twitter/X posts to gauge sentiment on emerging tech stocks. Visualized correlation between social buzz and pre-market volatility.",
//     stack: ["Python", "NLTK", "Bert", "Power BI"],
//     metric: "Accuracy: 88%",
//     progress: 88
//   }
// ];

// // --- COMPONENT: HYPER-TEXT DECODER ---
// // This creates the "Matrix decoding" effect on hover
// const HyperText = ({ text, triggering }: { text: string; triggering: boolean }) => {
//   const [displayText, setDisplayText] = useState(text);
//   const iterations = useRef(0);

//   useEffect(() => {
//     if (!triggering) {
//       setDisplayText(text);
//       return;
//     }

//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     const interval = setInterval(() => {
//       setDisplayText((prev) =>
//         prev
//           .split("")
//           .map((letter, index) => {
//             if (index < iterations.current) {
//               return text[index];
//             }
//             return letters[Math.floor(Math.random() * 26)];
//           })
//           .join("")
//       );

//       if (iterations.current >= text.length) {
//         clearInterval(interval);
//       }

//       iterations.current += 1 / 3;
//     }, 30);

//     return () => clearInterval(interval);
//   }, [triggering, text]);

//   // Reset when not triggering
//   useEffect(() => {
//     if(!triggering) iterations.current = 0;
//   }, [triggering]);

//   return <span className="font-mono">{displayText}</span>;
// };

// // --- MAIN PAGE ---
// export default function ProjectsPage() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
//       <Navbar />

//       {/* Background: Subtle Grid */}
//       <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
//       </div>

//       <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-24 max-w-7xl">
        
//         {/* HEADER */}
//         <div className="mb-24 border-b border-white/10 pb-12">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="flex items-center gap-3 mb-4"
//             >
//                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                <span className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">System Ready</span>
//             </motion.div>

//             <motion.h1 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-6"
//             >
//                 WORK<span className="text-zinc-800">.LOG</span>
//             </motion.h1>
            
//             <motion.p 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-zinc-400 max-w-2xl text-lg font-light leading-relaxed pl-1"
//             >
//                 Selected operational case studies in <span className="text-white">Quantitative Finance</span>, <span className="text-white">Predictive Analytics</span>, and <span className="text-white">Strategic Intelligence</span>.
//             </motion.p>
//         </div>

//         {/* THE INTERACTIVE LIST */}
//         <div className="flex flex-col w-full">
//           {projects.map((project, index) => {
//             const isHovered = hoveredIndex === index;
//             const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: isDimmed ? 0.3 : 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className="group relative border-t border-white/10 py-12 cursor-pointer transition-all duration-300"
//               >
//                 {/* Hover Background Highlight */}
//                 <div 
//                   className={`absolute inset-0 bg-gradient-to-r from-white/5 to-transparent -z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
//                 />

//                 <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12">
                    
//                     {/* COL 1: ID & YEAR */}
//                     <div className="md:w-1/12 font-mono text-xs text-zinc-600 flex flex-col justify-between h-full">
//                         <span>/{project.id}</span>
//                     </div>

//                     {/* COL 2: TITLE (With Decode Effect) */}
//                     <div className="md:w-4/12">
//                         <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
//                             <HyperText text={project.title} triggering={isHovered} />
//                         </h2>
//                         <div className="flex items-center gap-3">
//                             <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900/50">
//                                 {project.category}
//                             </span>
//                             <span className="text-xs font-mono text-zinc-600">
//                                 {project.year}
//                             </span>
//                         </div>
//                     </div>

//                     {/* COL 3: DESCRIPTION & STACK */}
//                     <div className="md:w-4/12 text-zinc-400 leading-relaxed font-light text-sm md:text-base">
//                         <p className="mb-6">{project.description}</p>
//                         <div className="flex flex-wrap gap-x-6 gap-y-2">
//                             {project.stack.map((tech, t) => (
//                                 <span key={t} className="text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">
//                                     // {tech}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>

//                     {/* COL 4: METRICS & ACTION */}
//                     <div className="md:w-3/12 flex flex-col items-end justify-between gap-6">
                        
//                         {/* Animated Arrow */}
//                         <div className={`transition-all duration-300 transform ${isHovered ? 'translate-x-2 -translate-y-2 text-cyan-400' : 'text-zinc-700'}`}>
//                             <ArrowUpRight size={32} />
//                         </div>

//                         {/* Performance Metric Bar */}
//                         <div className="w-full max-w-[140px] text-right">
//                              <div className="text-xs font-mono text-zinc-500 mb-2 flex justify-end gap-2">
//                                 <span className={isHovered ? 'text-green-400' : ''}>{project.metric}</span>
//                              </div>
//                              {/* The Bar */}
//                              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
//                                 <motion.div 
//                                     className="h-full bg-cyan-500"
//                                     initial={{ width: 0 }}
//                                     animate={{ width: isHovered ? `${project.progress}%` : '0%' }}
//                                     transition={{ duration: 0.8, ease: "circOut" }}
//                                 />
//                              </div>
//                         </div>

//                     </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* FOOTER MESSAGE */}
//         <div className="mt-20 border-t border-white/10 pt-8 flex justify-between items-center text-zinc-600 font-mono text-xs">
//              <div><Database size={14} className="inline mr-2"/> END OF LINE</div>
//              <div className="animate-pulse">_CURSOR_ACTIVE</div>
//         </div>

//       </div>
//     </main>
//   );
// }

// 'use client';

// import { useState, useEffect, useRef, MouseEvent } from 'react';
// import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
// import { ArrowUpRight, Database, ScanLine } from 'lucide-react';
// import Navbar from '@/components/Navbar';

// // --- DATA: DATA SCIENCE & FINANCE ---
// const projects = [
//   { 
//     id: "01",
//     title: "ALGORITHMIC TRADING BOT", 
//     category: "FinTech / Python", 
//     year: "2024",
//     description: "Developed a momentum-based trading algorithm using Moving Average Crossovers. Backtested on 5 years of S&P 500 data, achieving a Sharpe Ratio of 1.8.",
//     stack: ["Python", "Pandas", "Alpaca API", "Docker"],
//     metric: "Returns: +18.5%",
//     progress: 85
//   },
//   { 
//     id: "02",
//     title: "SUPPLY CHAIN OPTIMIZER", 
//     category: "Operations Research", 
//     year: "2023",
//     description: "Built a linear programming model to minimize logistics costs for a regional distributor. Optimized route planning across 4 distribution centers.",
//     stack: ["R Studio", "Gurobi", "Tableau", "SQL"],
//     metric: "Cost Red: 12%",
//     progress: 70
//   },
//   { 
//     id: "03",
//     title: "CUSTOMER CHURN PREDICTOR", 
//     category: "Machine Learning", 
//     year: "2023",
//     description: "Trained a Random Forest classifier to identify at-risk customers. Integrated with CRM to flag accounts with >75% churn probability.",
//     stack: ["Scikit-Learn", "XGBoost", "AWS SageMaker"],
//     metric: "Recall: 94%",
//     progress: 94
//   },
//   { 
//     id: "04",
//     title: "MARKET SENTIMENT NLP", 
//     category: "Natural Language Processing", 
//     year: "2022",
//     description: "Scraped 50k+ Twitter/X posts to gauge sentiment on emerging tech stocks. Visualized correlation between social buzz and pre-market volatility.",
//     stack: ["Python", "NLTK", "Bert", "Power BI"],
//     metric: "Accuracy: 88%",
//     progress: 88
//   }
// ];

// // --- COMPONENT: HYPER-TEXT DECODER ---
// const HyperText = ({ text, triggering }: { text: string; triggering: boolean }) => {
//   const [displayText, setDisplayText] = useState(text);
//   const iterations = useRef(0);

//   useEffect(() => {
//     if (!triggering) {
//       setDisplayText(text);
//       return;
//     }

//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     const interval = setInterval(() => {
//       setDisplayText((prev) =>
//         prev
//           .split("")
//           .map((letter, index) => {
//             if (index < iterations.current) {
//               return text[index];
//             }
//             return letters[Math.floor(Math.random() * 26)];
//           })
//           .join("")
//       );

//       if (iterations.current >= text.length) {
//         clearInterval(interval);
//       }

//       iterations.current += 1 / 3;
//     }, 30);

//     return () => clearInterval(interval);
//   }, [triggering, text]);

//   useEffect(() => {
//     if(!triggering) iterations.current = 0;
//   }, [triggering]);

//   return <span className="font-mono">{displayText}</span>;
// };

// // --- COMPONENT: VERTICAL DATA STREAMS ---
// const DataStream = () => {
//     // Generate random vertical lines
//     const lines = Array.from({ length: 20 }).map((_, i) => ({
//         id: i,
//         left: `${Math.random() * 100}%`,
//         delay: Math.random() * 5,
//         duration: 3 + Math.random() * 5,
//         height: 10 + Math.random() * 30
//     }));

//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {lines.map((line) => (
//                 <motion.div
//                     key={line.id}
//                     className="absolute w-[1px] bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"
//                     style={{ left: line.left, height: `${line.height}%` }}
//                     initial={{ top: '-100%', opacity: 0 }}
//                     animate={{ top: '100%', opacity: [0, 1, 0] }}
//                     transition={{
//                         duration: line.duration,
//                         repeat: Infinity,
//                         delay: line.delay,
//                         ease: "linear"
//                     }}
//                 />
//             ))}
//         </div>
//     );
// };

// // --- MAIN PAGE ---
// export default function ProjectsPage() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   // Handle global mouse movement for the background spotlight
//   function handleMouseMove({ clientX, clientY }: MouseEvent) {
//     mouseX.set(clientX);
//     mouseY.set(clientY);
//   }

//   return (
//     <main 
//         className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 overflow-x-hidden relative"
//         onMouseMove={handleMouseMove}
//     >
      
//       <Navbar />

//       {/* --- LIVING BACKGROUND LAYER --- */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//          {/* 1. Base Grid (Static but Faded) */}
//          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
         
//          {/* 2. Mouse Spotlight (Follows Cursor) */}
//          <motion.div
//             className="absolute inset-0 transition-opacity duration-500"
//             style={{
//               background: useMotionTemplate`
//                 radial-gradient(
//                   800px circle at ${mouseX}px ${mouseY}px,
//                   rgba(6, 182, 212, 0.08),
//                   transparent 80%
//                 )
//               `,
//             }}
//          />

//          {/* 3. Vertical Data Rain Animation */}
//          <DataStream />

//          {/* 4. Vignette to focus center */}
//          <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 0%, #050505 100%)"></div>
//       </div>

//       <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-24 max-w-7xl">
        
//         {/* HEADER */}
//         <div className="mb-24 border-b border-white/10 pb-12 backdrop-blur-sm">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="flex items-center gap-3 mb-4"
//             >
//                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
//                <span className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">System Online // Database Access</span>
//             </motion.div>

//             <motion.h1 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-6"
//             >
//                 WORK<span className="text-zinc-800">.LOG</span>
//             </motion.h1>
            
//             <motion.p 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-zinc-400 max-w-2xl text-lg font-light leading-relaxed pl-1"
//             >
//                 Selected operational case studies in <span className="text-cyan-400 font-medium">Quantitative Finance</span>, <span className="text-cyan-400 font-medium">Predictive Analytics</span>, and <span className="text-cyan-400 font-medium">Strategic Intelligence</span>.
//             </motion.p>
//         </div>

//         {/* THE INTERACTIVE LIST */}
//         <div className="flex flex-col w-full">
//           {projects.map((project, index) => {
//             const isHovered = hoveredIndex === index;
//             const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: isDimmed ? 0.3 : 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className="group relative border-t border-white/10 py-12 cursor-pointer transition-all duration-300"
//               >
//                 {/* Row Highlight on Hover */}
//                 <div 
//                   className={`absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-transparent -z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
//                 />

//                 <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12 px-4 md:px-0">
                    
//                     {/* COL 1: ID */}
//                     <div className="md:w-1/12 font-mono text-xs text-zinc-600 flex flex-col justify-between h-full">
//                         <span className="group-hover:text-cyan-500 transition-colors">/{project.id}</span>
//                     </div>

//                     {/* COL 2: TITLE */}
//                     <div className="md:w-4/12">
//                         <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-cyan-50 transition-colors">
//                             <HyperText text={project.title} triggering={isHovered} />
//                         </h2>
//                         <div className="flex items-center gap-3">
//                             <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900/50">
//                                 {project.category}
//                             </span>
//                             <span className="text-xs font-mono text-zinc-600">
//                                 {project.year}
//                             </span>
//                         </div>
//                     </div>

//                     {/* COL 3: DESCRIPTION */}
//                     <div className="md:w-4/12 text-zinc-400 leading-relaxed font-light text-sm md:text-base">
//                         <p className="mb-6">{project.description}</p>
//                         <div className="flex flex-wrap gap-x-6 gap-y-2">
//                             {project.stack.map((tech, t) => (
//                                 <span key={t} className="text-xs font-mono text-zinc-500 group-hover:text-cyan-200/70 transition-colors">
//                                     // {tech}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>

//                     {/* COL 4: METRICS & ACTION */}
//                     <div className="md:w-3/12 flex flex-col items-end justify-between gap-6">
                        
//                         <div className={`transition-all duration-300 transform ${isHovered ? 'translate-x-2 -translate-y-2 text-cyan-400' : 'text-zinc-700'}`}>
//                             <ArrowUpRight size={32} />
//                         </div>

//                         <div className="w-full max-w-[140px] text-right">
//                              <div className="text-xs font-mono text-zinc-500 mb-2 flex justify-end gap-2">
//                                 <span className={isHovered ? 'text-cyan-400 font-bold' : ''}>{project.metric}</span>
//                              </div>
//                              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
//                                 <motion.div 
//                                     className="h-full bg-cyan-500 box-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
//                                     initial={{ width: 0 }}
//                                     animate={{ width: isHovered ? `${project.progress}%` : '0%' }}
//                                     transition={{ duration: 0.8, ease: "circOut" }}
//                                 />
//                              </div>
//                         </div>

//                     </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* FOOTER MESSAGE */}
//         <div className="mt-20 border-t border-white/10 pt-8 flex justify-between items-center text-zinc-600 font-mono text-xs">
//              <div className="flex items-center gap-2"><ScanLine size={14} className="text-cyan-800"/> END OF STREAM</div>
//              <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-cyan-900 rounded-full animate-ping"></div>
//                 AWAITING INPUT
//              </div>
//         </div>

//       </div>
//     </main>
//   );
// }


// 'use client';

// import { useState, useEffect, useRef, MouseEvent } from 'react';
// import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
// import { ArrowUpRight, Database, ScanLine, FileText, Activity, Code2, Cpu } from 'lucide-react';
// import Navbar from '@/components/Navbar';

// // --- DATA: ALL 10 REAL PROJECTS ---
// const projects = [
//   { 
//     id: "01",
//     title: "SILENT MI RISK MODEL", 
//     category: "AI HEALTHCARE", 
//     year: "2025",
//     description: "Clinical decision support system for Silent Myocardial Infarction in diabetics. Multimodal fusion of Clinical Data (MIMIC-IV) and ECG (1D-CNN) using Late Fusion architecture.",
//     stack: ["PyTorch", "XGBoost", "SHAP", "1D-CNN"],
//     metric: "AUC-PR: 0.72",
//     progress: 72
//   },
//   { 
//     id: "02",
//     title: "ALPHAFOLD ARCHITECTURE", 
//     category: "BIOINFORMATICS", 
//     year: "2025",
//     description: "Deep dive into AlphaFold's Evoformer and Invariant Point Attention (IPA). Analyzed attention maps to interpret binding sites and protein geometry.",
//     stack: ["Deep Learning", "Research", "Proteomics"],
//     metric: "Analysis: Deep",
//     progress: 100
//   },
//   { 
//     id: "03",
//     title: "DEEPFAKE DETECTION", 
//     category: "COMPUTER VISION", 
//     year: "2025",
//     description: "Forensic pipeline processing 40k+ frames. Fused ResNet50/EfficientNet with LSTM temporal modeling to detect manipulated media.",
//     stack: ["OpenCV", "LSTM", "ResNet50", "FaceForensics++"],
//     metric: "F1-Score: 90.2%",
//     progress: 90
//   },
//   { 
//     id: "04",
//     title: "OCT-MNIST CLASSIFICATION", 
//     category: "MEDICAL IMAGING", 
//     year: "2025",
//     description: "CNN classifier for 109k retinal images (CNV, DME, DRUSEN, NORMAL). Handled class imbalance with weighted loss functions.",
//     stack: ["PyTorch", "CNN", "Medical AI"],
//     metric: "Accuracy: 89.3%",
//     progress: 89
//   },
//   { 
//     id: "05",
//     title: "PUCKSTATS ANALYTICS", 
//     category: "SPORTS DATA", 
//     year: "2025",
//     description: "NHL analytics dashboard. Designed normalized SQL schema (12 tables) and optimized query plans to analyze power plays and defensive hits.",
//     stack: ["PostgreSQL", "SQL Opt.", "Data Modeling"],
//     metric: "Schema: 3NF",
//     progress: 95
//   },
//   { 
//     id: "06",
//     title: "CRIME NEURAL NETWORK", 
//     category: "SPATIAL AI", 
//     year: "2025",
//     description: "Analyzed 322k crime records in Buffalo, NY. Custom Neural Network outperformed Logistic Regression in capturing spatial-temporal patterns.",
//     stack: ["PyTorch", "Scikit-Learn", "EDA", "Neural Nets"],
//     metric: "Val Acc: 99.6%",
//     progress: 99
//   },
//   { 
//     id: "07",
//     title: "LICENSE PLATE RECOGNITION", 
//     category: "OCR / VISION", 
//     year: "2024",
//     description: "End-to-end ALPR system. Compared YOLOv11 vs YOLOv12 for detection, integrated Tesseract OCR for text extraction on real-world video.",
//     stack: ["YOLOv11", "Tesseract", "OpenCV"],
//     metric: "Detection: High",
//     progress: 85
//   },
//   { 
//     id: "08",
//     title: "HYBRID CRIME PREDICTION", 
//     category: "NLP / ML", 
//     year: "2024",
//     description: "Integrated historical crime data with real-time social media sentiment (20GB+). Used Playwright/PRAW for scraping and Random Forest/PCA for analysis.",
//     stack: ["NLP", "Random Forest", "Playwright", "PRAW"],
//     metric: "Accuracy: 87%",
//     progress: 87
//   },
//   { 
//     id: "09",
//     title: "CUSTOMER CHURN ENGINE", 
//     category: "MLOPS / BUSINESS", 
//     year: "2024",
//     description: "Full churn prediction pipeline. Containerized with Docker, API testing via Postman, and visualization via Tableau dashboard.",
//     stack: ["Docker", "Postman", "Tableau", "XGBoost"],
//     metric: "Accuracy: 95%",
//     progress: 95
//   },
//   { 
//     id: "10",
//     title: "DIJKSTRA MAPS OPTIMIZER", 
//     category: "ALGORITHMS", 
//     year: "2024",
//     description: "Route optimization algorithm minimizing toll costs. Implemented Priority Queues with Min-Heaps and Adjacency Lists for graph efficiency.",
//     stack: ["Java", "Graph Theory", "Algorithms"],
//     metric: "Cost: Minimized",
//     progress: 100
//   }
// ];

// // --- COMPONENT: HYPER-TEXT DECODER ---
// const HyperText = ({ text, triggering }: { text: string; triggering: boolean }) => {
//   const [displayText, setDisplayText] = useState(text);
//   const iterations = useRef(0);

//   useEffect(() => {
//     if (!triggering) {
//       setDisplayText(text);
//       return;
//     }

//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     const interval = setInterval(() => {
//       setDisplayText((prev) =>
//         prev
//           .split("")
//           .map((letter, index) => {
//             if (index < iterations.current) {
//               return text[index];
//             }
//             return letters[Math.floor(Math.random() * 26)];
//           })
//           .join("")
//       );

//       if (iterations.current >= text.length) {
//         clearInterval(interval);
//       }

//       iterations.current += 1 / 3;
//     }, 30);

//     return () => clearInterval(interval);
//   }, [triggering, text]);

//   useEffect(() => {
//     if(!triggering) iterations.current = 0;
//   }, [triggering]);

//   return <span className="font-mono">{displayText}</span>;
// };

// // --- COMPONENT: VERTICAL DATA STREAMS (Rain) ---
// const DataStream = () => {
//     const [isClient, setIsClient] = useState(false);
//     useEffect(() => setIsClient(true), []);

//     if (!isClient) return null;

//     const lines = Array.from({ length: 15 }).map((_, i) => ({
//         id: i,
//         left: `${Math.random() * 100}%`,
//         delay: Math.random() * 5,
//         duration: 3 + Math.random() * 5,
//         height: 10 + Math.random() * 30
//     }));

//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {lines.map((line) => (
//                 <motion.div
//                     key={line.id}
//                     className="absolute w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
//                     style={{ left: line.left, height: `${line.height}%` }}
//                     initial={{ top: '-100%', opacity: 0 }}
//                     animate={{ top: '100%', opacity: [0, 1, 0] }}
//                     transition={{
//                         duration: line.duration,
//                         repeat: Infinity,
//                         delay: line.delay,
//                         ease: "linear"
//                     }}
//                 />
//             ))}
//         </div>
//     );
// };

// // --- MAIN PAGE ---
// export default function ProjectsPage() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   function handleMouseMove({ clientX, clientY }: MouseEvent) {
//     mouseX.set(clientX);
//     mouseY.set(clientY);
//   }

//   return (
//     <main 
//         className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 overflow-x-hidden relative"
//         onMouseMove={handleMouseMove}
//     >
      
//       <Navbar />

//       {/* --- LIVING BACKGROUND LAYER --- */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//          {/* 1. Base Grid */}
//          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
         
//          {/* 2. Mouse Spotlight */}
//          <motion.div
//             className="absolute inset-0 transition-opacity duration-500"
//             style={{
//               background: useMotionTemplate`
//                 radial-gradient(
//                   800px circle at ${mouseX}px ${mouseY}px,
//                   rgba(6, 182, 212, 0.08),
//                   transparent 80%
//                 )
//               `,
//             }}
//          />

//          {/* 3. Data Rain */}
//          <DataStream />

//          {/* 4. Vignette */}
//          <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 0%, #050505 100%)"></div>
//       </div>

//       <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-24 max-w-7xl">
        
//         {/* HEADER */}
//         <div className="mb-20 border-b border-white/10 pb-12 backdrop-blur-sm">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="flex items-center gap-3 mb-4"
//             >
//                <Activity className="w-4 h-4 text-green-500 animate-pulse" />
//                <span className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">Research Archive // v2.4</span>
//             </motion.div>

//             <motion.h1 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-6"
//             >
//                 CASE<span className="text-zinc-800">.STUDIES</span>
//             </motion.h1>
            
//             <motion.p 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-zinc-400 max-w-2xl text-lg font-light leading-relaxed pl-1"
//             >
//                 Advanced implementations in <span className="text-cyan-400 font-medium">Medical AI</span>, <span className="text-cyan-400 font-medium">Computer Vision</span>, and <span className="text-cyan-400 font-medium">Predictive Analytics</span>.
//             </motion.p>
//         </div>

//         {/* THE INTERACTIVE LIST */}
//         <div className="flex flex-col w-full">
//           {projects.map((project, index) => {
//             const isHovered = hoveredIndex === index;
//             const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: isDimmed ? 0.3 : 1, y: 0 }}
//                 transition={{ delay: index * 0.05 }}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className="group relative border-t border-white/10 py-10 cursor-pointer transition-all duration-300"
//               >
//                 {/* Row Highlight */}
//                 <div 
//                   className={`absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-transparent -z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
//                 />

//                 <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12 px-4 md:px-0">
                    
//                     {/* COL 1: ID */}
//                     <div className="md:w-1/12 font-mono text-xs text-zinc-600 flex flex-col justify-between h-full">
//                         <span className="group-hover:text-cyan-500 transition-colors">/{project.id}</span>
//                     </div>

//                     {/* COL 2: TITLE */}
//                     <div className="md:w-4/12">
//                         <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-50 transition-colors">
//                             <HyperText text={project.title} triggering={isHovered} />
//                         </h2>
//                         <div className="flex items-center gap-3">
//                             <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900/50">
//                                 {project.category}
//                             </span>
//                             <span className="text-[10px] font-mono text-zinc-600">
//                                 {project.year}
//                             </span>
//                         </div>
//                     </div>

//                     {/* COL 3: DESCRIPTION */}
//                     <div className="md:w-4/12 text-zinc-400 leading-relaxed font-light text-sm">
//                         <p className="mb-4">{project.description}</p>
//                         <div className="flex flex-wrap gap-x-4 gap-y-1">
//                             {project.stack.map((tech, t) => (
//                                 <span key={t} className="text-[10px] font-mono text-zinc-600 group-hover:text-cyan-200/70 transition-colors">
//                                     // {tech}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>

//                     {/* COL 4: METRICS & ACTION */}
//                     <div className="md:w-3/12 flex flex-col items-end justify-between gap-6">
                        
//                         <div className={`transition-all duration-300 transform ${isHovered ? 'translate-x-2 -translate-y-2 text-cyan-400' : 'text-zinc-700'}`}>
//                             <FileText size={28} />
//                         </div>

//                         <div className="w-full max-w-[140px] text-right">
//                              <div className="text-[10px] font-mono text-zinc-500 mb-2 flex justify-end gap-2">
//                                 <span className={isHovered ? 'text-cyan-400 font-bold' : ''}>{project.metric}</span>
//                              </div>
//                              {/* PROGRESS BAR */}
//                              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
//                                 <motion.div 
//                                     className="h-full bg-cyan-500 box-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
//                                     initial={{ width: 0 }}
//                                     animate={{ width: isHovered ? `${project.progress}%` : '0%' }}
//                                     transition={{ duration: 0.8, ease: "circOut" }}
//                                 />
//                              </div>
//                         </div>

//                     </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* FOOTER MESSAGE */}
//         <div className="mt-20 border-t border-white/10 pt-8 flex justify-between items-center text-zinc-600 font-mono text-xs">
//              <div className="flex items-center gap-2"><ScanLine size={14} className="text-cyan-800"/> END OF RECORD</div>
//              <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-cyan-900 rounded-full animate-ping"></div>
//                 SYSTEM IDLE
//              </div>
//         </div>

//       </div>
//     </main>
//   );
// }


// 'use client';

// import { useState, useEffect, useRef, MouseEvent } from 'react';
// import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
// import { 
//   ArrowUpRight, Database, ScanLine, FileText, Activity, Code2, Cpu, 
//   X, Calendar, Building2, Github, ExternalLink, Layers, Network, CheckCircle2,
//   Terminal, AlertTriangle, ScanFace, Siren, Lock
// } from 'lucide-react';
// import Navbar from '@/components/Navbar';
// import Link from 'next/link';

// // --- TYPES ---
// type Metric = { label: string; value: string; score: number };
// type PipelineStep = { title: string; desc: string; icon: any };

// type ProjectDef = { 
//     id: string;
//     title: string; 
//     subtitle?: string; // Added for detail view
//     category: string; 
//     year: string;
//     description: string;
//     problem: string;      // Added for detail view
//     solution: string;     // Added for detail view
//     stack: string[];
//     metric: string;
//     progress: number;
//     color?: string;       // For theme consistency
//     githubLink?: string;
//     pipeline?: PipelineStep[];
//     metricsDetail?: Metric[];
//     codeSnippet?: string;
// };

// // --- DATA: ALL 10 PROJECTS (ENRICHED) ---
// const projects: ProjectDef[] = [
//   { 
//     id: "01",
//     title: "SILENT MI RISK AUDIT", 
//     subtitle: "Multimodal Deep Learning & Clinical Calibration",
//     category: "AI HEALTHCARE", 
//     year: "2025",
    
//     // --- SUMMARY FOR THE CARD ---
//     description: "A clinical decision support system designed to detect Silent Myocardial Infarction (SMI) in diabetic patients via Late Fusion of EHR and ECG data.",

//     // --- DETAILED EXPLANATION (THE "BIG ASS" EXPLANATION) ---
//     problem: "Diabetic Autonomic Neuropathy (DAN) disrupts afferent nerve signaling, effectively masking angina (chest pain). This leads to 'Silent' Myocardial Infarction (SMI), where patients suffer heart attacks without realizing it. Standard diagnostic tools like the Framingham Risk Score rely heavily on symptomatic presentation and basic biomarkers, failing to capture the subtle, non-linear morphological changes in ECG waveforms associated with silent ischemia. This results in a 20-40% diagnosis gap in diabetic cohorts.",
    
//     solution: "I architected a Multimodal Late-Fusion Neural Network to bridge this gap. The system utilizes a dual-branch topology: (1) A 1D-Convolutional Neural Network (CNN) processes raw, 10-second ECG signals (from PTB-XL) to extract hierarchical morphological embeddings, specifically targeting repolarization dispersion. (2) A Multi-Layer Perceptron (MLP) processes tabular EHR data (from MIMIC-IV), utilizing MICE imputation for missing values. These disparate feature vectors are concatenated and passed through a sigmoid classifier. Crucially, I applied Isotonic Regression to calibrate the output probabilities, ensuring risk scores are clinically interpretable, and conducted Decision Curve Analysis (DCA) to prove Net Clinical Benefit.",

//     stack: ["PyTorch", "MIMIC-IV", "1D-CNN", "Isotonic Regression", "SHAP"],
//     metric: "AUC-PR: 0.72", // From Abstract
//     progress: 72,
//     color: "text-red-400",
//     githubLink: "https://github.com/YOUR_USERNAME/silent-mi-project", // <--- UPDATE THIS
    
//     // --- VISUAL PIPELINE (Generates the Flowchart) ---
//     pipeline: [
//         { title: "Ingestion", desc: "MIMIC-IV EHR + PTB-XL ECG Data", icon: Database },
//         { title: "Preprocessing", desc: "MICE Imputation & Bandpass Filtering", icon: Activity },
//         { title: "Feature Eng.", desc: "1D-CNN (Waveforms) + MLP (Tabular)", icon: Layers },
//         { title: "Late Fusion", desc: "Feature Concatenation Layer", icon: Network },
//         { title: "Validation", desc: "Fairness Audit & Calibration Curves", icon: CheckCircle2 },
//     ],
    
//     // --- GRAPH DATA (Generates the Bar Charts) ---
//     metricsDetail: [
//         { label: "Multimodal AUC-PR", value: "0.72", score: 72 }, // Your Model
//         { label: "Unimodal Baseline", value: "0.66", score: 66 }, // Standard Clinical Model
//         { label: "Brier Score", value: "0.138", score: 86 },      // Calibration Success
//         { label: "Net Clinical Benefit", value: "+15%", score: 90 } // DCA Result
//     ],
    
//     // --- CODE SNIPPET (The "Under the Hood" View) ---
//     codeSnippet: `class MultimodalRiskNet(nn.Module):
//     def __init__(self):
//         super().__init__()
        
//         # Branch 1: 1D-CNN for Raw ECG Waveforms
//         # Captures morphological features (ST-segment, T-wave)
//         self.ecg_branch = nn.Sequential(
//             nn.Conv1d(in_channels=12, out_channels=32, kernel_size=5),
//             nn.ReLU(),
//             nn.MaxPool1d(2),
//             nn.Flatten(),
//             nn.Linear(32 * 48, 64) # Latent ECG Embeddings
//         )

//         # Branch 2: MLP for Tabular Clinical Data
//         self.tabular_branch = nn.Sequential(
//             nn.Linear(in_features=25, out_features=16),
//             nn.ReLU(),
//             nn.Dropout(0.3)
//         )

//         # Late Fusion: Concatenation
//         self.fusion_layer = nn.Linear(64 + 16, 1)

//     def forward(self, ecg_data, clinical_data):
//         # Parallel Processing
//         x1 = self.ecg_branch(ecg_data)
//         x2 = self.tabular_branch(clinical_data)
        
//         # Feature Fusion
//         combined = torch.cat((x1, x2), dim=1)
        
//         # Risk Probability Output
//         return torch.sigmoid(self.fusion_layer(combined))`
//   },
//   { 
//     id: "02",
//     title: "ALPHAFOLD ARCHITECTURE", 
//     subtitle: "Protein Structure Prediction Analysis",
//     category: "BIOINFORMATICS", 
//     year: "2025",
//     description: "Deep dive into AlphaFold's Evoformer and Invariant Point Attention (IPA). Analyzed attention maps to interpret binding sites.",
//     problem: "Predicting the 3D structure of proteins from amino acid sequences is a grand challenge in biology. Standard CNNs fail to capture the long-range interactions required for folding.",
//     solution: "Utilized the Evoformer block to process MSA (Multiple Sequence Alignment) and Pair representations. Implemented Invariant Point Attention (IPA) to update residue coordinates in 3D space iteratively.",
//     stack: ["Deep Learning", "PyTorch", "Proteomics", "Evoformer"],
//     metric: "Analysis: Deep",
//     progress: 100,
//     color: "text-blue-400",
//     githubLink: "https://github.com",
//     pipeline: [
//         { title: "Input Seq", desc: "Amino Acid Sequence", icon: Database },
//         { title: "MSA Search", desc: "Genetic Database Query", icon: Network },
//         { title: "Evoformer", desc: "Information Exchange", icon: Layers },
//         { title: "Structure Mod", desc: "Invariant Point Attention", icon: Activity },
//         { title: "3D Output", desc: "PDB File Generation", icon: FileText },
//     ],
//     metricsDetail: [
//         { label: "GDT Score", value: "92.4", score: 92 },
//         { label: "RMSD", value: "< 1.5Å", score: 95 },
//         { label: "Residue Acc", value: "98%", score: 98 },
//     ],
//     codeSnippet: `def invariant_point_attention(q, k, v, heads):
//     # Compute attention weights based on 
//     # Euclidean distance in 3D space
//     dist = torch.cdist(q_pts, k_pts)
//     attn = softmax(scale * (logits - dist))
    
//     # Update translations and rotations
//     out = torch.matmul(attn, v_pts)
//     return out`
//   },
//   { 
//     id: "03",
//     title: "DEEPFAKE DETECTION", 
//     subtitle: "Spatiotemporal Forensics Engine",
//     category: "COMPUTER VISION", 
//     year: "2025",
//     description: "Forensic pipeline processing 40k+ frames. Fused ResNet50/EfficientNet with LSTM temporal modeling.",
//     problem: "Deepfakes are becoming indistinguishable from reality. Single-frame detectors fail to catch temporal glitches (flickering, unnatural blinking) present in high-quality fakes.",
//     solution: "A hybrid Spatiotemporal Network. Spatial features are extracted via ResNet50 from individual frames, then fed into an LSTM to analyze the sequence of features over time, detecting temporal inconsistencies.",
//     stack: ["OpenCV", "LSTM", "ResNet50", "FaceForensics++"],
//     metric: "F1-Score: 90.2%",
//     progress: 90,
//     color: "text-cyan-400",
//     githubLink: "https://github.com",
//     pipeline: [
//         { title: "Frame Extract", desc: "FFmpeg Sampling", icon: ScanFace },
//         { title: "Face Crop", desc: "MTCNN Alignment", icon: ScanLine },
//         { title: "Spatial Net", desc: "ResNet50 Feature Map", icon: Layers },
//         { title: "Temporal Net", desc: "LSTM Sequence Logic", icon: Activity },
//         { title: "Classifier", desc: "Real/Fake Sigmoid", icon: Lock },
//     ],
//     metricsDetail: [
//         { label: "F1-Score", value: "90.18%", score: 90 },
//         { label: "Frame Acc", value: "85%", score: 85 },
//         { label: "Inference", value: "24ms", score: 92 },
//     ],
//     codeSnippet: `model = Sequential()
// model.add(TimeDistributed(ResNet50(weights='imagenet'), 
//           input_shape=(seq_len, 224, 224, 3)))
// model.add(TimeDistributed(GlobalAveragePooling2D()))
// model.add(LSTM(64, return_sequences=False))
// model.add(Dense(1, activation='sigmoid'))`
//   },
//   { 
//     id: "04",
//     title: "OCT-MNIST CLASSIFICATION", 
//     category: "MEDICAL IMAGING", 
//     year: "2025",
//     description: "CNN classifier for 109k retinal images (CNV, DME, DRUSEN, NORMAL). Handled class imbalance with weighted loss functions.",
//     problem: "Automated diagnosis of retinal diseases requires parsing subtle texture differences in OCT scans. Class imbalance often biases models toward the majority class.",
//     solution: "Implemented a ResNet-18 architecture modified for grayscale medical imaging. Utilized Weighted Cross-Entropy Loss to penalize misclassification of rare disease markers.",
//     stack: ["PyTorch", "CNN", "Medical AI"],
//     metric: "Accuracy: 89.3%",
//     progress: 89,
//     color: "text-green-400",
//     githubLink: "#",
//     metricsDetail: [
//         { label: "Accuracy", value: "89.3%", score: 89 },
//         { label: "Recall", value: "87%", score: 87 },
//         { label: "Loss", value: "0.21", score: 90 }
//     ]
//   },
//   { 
//     id: "05",
//     title: "PUCKSTATS ANALYTICS", 
//     category: "SPORTS DATA", 
//     year: "2025",
//     description: "NHL analytics dashboard. Designed normalized SQL schema (12 tables) and optimized query plans to analyze power plays and defensive hits.",
//     problem: "Raw NHL game data is unstructured and voluminous. Deriving actionable insights about 'Power Play' efficiency requires complex joins across multiple seasons.",
//     solution: "Designed a 3NF Normalized SQL Schema. Optimized query performance using indexing and materialized views for commonly accessed player stats.",
//     stack: ["PostgreSQL", "SQL Opt.", "Data Modeling"],
//     metric: "Schema: 3NF",
//     progress: 95,
//     color: "text-orange-400",
//     githubLink: "#"
//   },
//   { 
//     id: "06",
//     title: "CRIME NEURAL NETWORK", 
//     category: "SPATIAL AI", 
//     year: "2025",
//     description: "Analyzed 322k crime records in Buffalo, NY. Custom Neural Network outperformed Logistic Regression in capturing spatial-temporal patterns.",
//     problem: "Linear models fail to capture the non-linear relationship between time of day, location, and crime type.",
//     solution: "Developed a Multi-Layer Perceptron (MLP) with dropout layers. Feature engineered spatial coordinates (Lat/Lon) and cyclic time features.",
//     stack: ["PyTorch", "Scikit-Learn", "EDA", "Neural Nets"],
//     metric: "Val Acc: 99.6%",
//     progress: 99,
//     color: "text-purple-400",
//     githubLink: "#"
//   },
//   { 
//     id: "07",
//     title: "LICENSE PLATE RECOGNITION", 
//     category: "OCR / VISION", 
//     year: "2024",
//     description: "End-to-end ALPR system. Compared YOLOv11 vs YOLOv12 for detection, integrated Tesseract OCR for text extraction on real-world video.",
//     problem: "Real-time license plate detection struggles with motion blur and varying lighting conditions.",
//     solution: "Fine-tuned YOLOv11 on a custom dataset of vehicle plates. Piped detection boxes into Tesseract OCR with image thresholding for character recognition.",
//     stack: ["YOLOv11", "Tesseract", "OpenCV"],
//     metric: "Detection: High",
//     progress: 85,
//     color: "text-yellow-400",
//     githubLink: "#"
//   },
//   { 
//     id: "08",
//     title: "HYBRID CRIME PREDICTION", 
//     category: "NLP / ML", 
//     year: "2024",
//     description: "Integrated historical crime data with real-time social media sentiment (20GB+). Used Playwright/PRAW for scraping and Random Forest/PCA for analysis.",
//     problem: "Static historical data misses emerging threats. Social media offers real-time signals but is noisy and unstructured.",
//     solution: "Fused geospatial crime history with VADER sentiment scores from Twitter/Reddit. Used PCA to reduce dimensions before feeding into a Random Forest.",
//     stack: ["NLP", "Random Forest", "Playwright", "PRAW"],
//     metric: "Accuracy: 87%",
//     progress: 87,
//     color: "text-red-500",
//     githubLink: "#"
//   },
//   { 
//     id: "09",
//     title: "CUSTOMER CHURN ENGINE", 
//     category: "MLOPS / BUSINESS", 
//     year: "2024",
//     description: "Full churn prediction pipeline. Containerized with Docker, API testing via Postman, and visualization via Tableau dashboard.",
//     problem: "Models sitting in notebooks don't solve business problems. Deployment and monitoring are critical.",
//     solution: "Wrapped an XGBoost classifier in a Flask API. Containerized via Docker for consistent deployment. Built a Tableau dashboard for stakeholders.",
//     stack: ["Docker", "Postman", "Tableau", "XGBoost"],
//     metric: "Accuracy: 95%",
//     progress: 95,
//     color: "text-blue-500",
//     githubLink: "#"
//   },
//   { 
//     id: "10",
//     title: "DIJKSTRA MAPS OPTIMIZER", 
//     category: "ALGORITHMS", 
//     year: "2024",
//     description: "Route optimization algorithm minimizing toll costs. Implemented Priority Queues with Min-Heaps and Adjacency Lists for graph efficiency.",
//     problem: "Finding the shortest path is easy; finding the cheapest path with constraints is computationally expensive.",
//     solution: "Implemented Dijkstra's algorithm using a custom Min-Heap Priority Queue. Optimized graph storage using Adjacency Lists.",
//     stack: ["Java", "Graph Theory", "Algorithms"],
//     metric: "Cost: Minimized",
//     progress: 100,
//     color: "text-green-500",
//     githubLink: "#"
//   }
// ];

// // --- SUB-COMPONENTS ---

// const CodeBlock = ({ code }: { code: string }) => (
//     <div className="relative rounded-lg overflow-hidden bg-[#0d1117] border border-white/10 font-mono text-xs my-4 shadow-2xl">
//         <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
//             <span className="text-zinc-500 flex items-center gap-2"><Terminal className="w-3 h-3" /> core_logic.py</span>
//             <div className="flex gap-1.5">
//                 <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
//                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
//                 <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
//             </div>
//         </div>
//         <div className="p-4 overflow-x-auto text-zinc-300">
//             <pre><code>{code}</code></pre>
//         </div>
//     </div>
// );

// const HyperText = ({ text, triggering }: { text: string; triggering: boolean }) => {
//   const [displayText, setDisplayText] = useState(text);
//   const iterations = useRef(0);
//   useEffect(() => {
//     if (!triggering) { setDisplayText(text); return; }
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     const interval = setInterval(() => {
//       setDisplayText((prev) => prev.split("").map((letter, index) => {
//             if (index < iterations.current) return text[index];
//             return letters[Math.floor(Math.random() * 26)];
//           }).join(""));
//       if (iterations.current >= text.length) clearInterval(interval);
//       iterations.current += 1 / 3;
//     }, 30);
//     return () => clearInterval(interval);
//   }, [triggering, text]);
//   useEffect(() => { if(!triggering) iterations.current = 0; }, [triggering]);
//   return <span className="font-mono">{displayText}</span>;
// };

// const DataStream = () => {
//     const [isClient, setIsClient] = useState(false);
//     useEffect(() => setIsClient(true), []);
//     if (!isClient) return null;
//     const lines = Array.from({ length: 15 }).map((_, i) => ({
//         id: i, left: `${Math.random() * 100}%`, delay: Math.random() * 5, duration: 3 + Math.random() * 5, height: 10 + Math.random() * 30
//     }));
//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {lines.map((line) => (
//                 <motion.div key={line.id} className="absolute w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" style={{ left: line.left, height: `${line.height}%` }} initial={{ top: '-100%', opacity: 0 }} animate={{ top: '100%', opacity: [0, 1, 0] }} transition={{ duration: line.duration, repeat: Infinity, delay: line.delay, ease: "linear" }} />
//             ))}
//         </div>
//     );
// };

// // --- COMPONENT: THE DETAIL MODAL ---
// const ProjectDetail = ({ project, onClose }: { project: ProjectDef, onClose: () => void }) => {
//     return (
//         <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             className="fixed inset-0 z-[2000] bg-zinc-950 flex flex-col overflow-y-auto no-scrollbar"
//         >
//             <div className="fixed inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
//             {/* Top Bar */}
//             <div className="sticky top-0 z-[2002] p-4 md:p-6 flex justify-between items-center bg-zinc-950/90 backdrop-blur-md border-b border-white/10">
//                 <div className="flex items-center gap-4">
//                      <div className={`p-2 rounded-full bg-white/5 border border-white/10 ${project.color}`}>
//                         <FileText className="w-5 h-5" />
//                      </div>
//                      <div className="flex flex-col">
//                         <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Classified_Record</span>
//                         <span className="font-mono text-sm font-bold text-white tracking-widest">ID_00{project.id}</span>
//                      </div>
//                 </div>
//                 <button onClick={onClose} className="group flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest border border-white/10 rounded-full hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/50 transition-all">
//                     <span className="hidden md:inline">Close File</span><X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
//                 </button>
//             </div>

//             <div className="max-w-7xl mx-auto w-full p-6 md:p-12 pb-24 flex flex-col gap-12 relative z-10">
                
//                 {/* Header */}
//                 <div className="flex flex-col lg:flex-row justify-between gap-8 border-b border-white/10 pb-12">
//                     <div className="border-l-2 border-white/20 pl-6 relative max-w-3xl">
//                         <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} className={`absolute left-[-2px] top-0 w-[2px] ${project.color?.replace('text-', 'bg-') || 'bg-cyan-500'}`} />
//                         <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">{project.title}</h1>
//                         <p className={`text-lg md:text-xl font-mono ${project.color || 'text-cyan-400'} mb-6`}>{project.subtitle || project.category}</p>
//                         <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-zinc-400 uppercase tracking-widest">
//                             <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-zinc-600" /> {project.year}</div>
//                             <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-zinc-600" /> University at Buffalo</div>
//                         </div>
//                     </div>
//                     <div className="flex flex-col gap-3 min-w-[200px]">
//                         {project.githubLink && (
//                             <Link href={project.githubLink} target="_blank" className="w-full">
//                                 <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
//                                     <Github className="w-4 h-4" /> Access Source
//                                 </button>
//                             </Link>
//                         )}
//                     </div>
//                 </div>

//                 {/* Dashboard Grid */}
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//                     {/* Left: Content */}
//                     <div className="lg:col-span-8 flex flex-col gap-12">
//                         {/* Problem / Solution */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                              <section className="bg-red-500/5 border border-red-500/10 p-6 rounded-sm">
//                                 <h3 className="text-xs font-mono uppercase tracking-widest text-red-400 mb-4 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> The Conflict</h3>
//                                 <p className="text-zinc-300 text-sm leading-relaxed">{project.problem || project.description}</p>
//                             </section>
//                              <section className="bg-green-500/5 border border-green-500/10 p-6 rounded-sm">
//                                 <h3 className="text-xs font-mono uppercase tracking-widest text-green-400 mb-4 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> The Resolution</h3>
//                                 <p className="text-zinc-300 text-sm leading-relaxed">{project.solution || "Solution data confidential."}</p>
//                             </section>
//                         </div>

//                         {/* Pipeline */}
//                         {project.pipeline && (
//                             <section>
//                                 <h3 className={`text-sm font-mono uppercase tracking-widest mb-8 flex items-center gap-2 ${project.color}`}>
//                                     <Network className="w-4 h-4" /> System Architecture
//                                 </h3>
//                                 <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//                                     {project.pipeline.map((step, i) => (
//                                         <div key={i} className="bg-zinc-900/50 border border-white/5 p-4 rounded-sm hover:bg-zinc-800/50 transition-colors">
//                                             <div className="mb-3 text-zinc-500"><step.icon className="w-5 h-5" /></div>
//                                             <h4 className="text-xs font-bold text-white mb-1 uppercase">{step.title}</h4>
//                                             <p className="text-[10px] text-zinc-400">{step.desc}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </section>
//                         )}

//                         {/* Code */}
//                         {project.codeSnippet && (
//                             <section>
//                                 <h3 className={`text-sm font-mono uppercase tracking-widest mb-4 flex items-center gap-2 ${project.color}`}>
//                                     <Code2 className="w-4 h-4" /> Logic Fragment
//                                 </h3>
//                                 <CodeBlock code={project.codeSnippet} />
//                             </section>
//                         )}
//                     </div>

//                     {/* Right: Metrics */}
//                     <div className="lg:col-span-4 flex flex-col gap-8">
//                         {project.metricsDetail && (
//                             <div className="p-6 border border-white/10 rounded-sm bg-zinc-900/30">
//                                 <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-2"><Activity className="w-4 h-4" /> Performance Metrics</h3>
//                                 <div className="space-y-6">
//                                     {project.metricsDetail.map((metric, i) => (
//                                         <div key={i} className="group">
//                                             <div className="flex justify-between text-xs text-zinc-400 mb-2 uppercase tracking-wider">
//                                                 <span>{metric.label}</span><span className="text-white font-bold">{metric.value}</span>
//                                             </div>
//                                             <div className="h-1 w-full bg-zinc-800"><div className={`h-full ${project.color?.replace('text-', 'bg-') || 'bg-cyan-500'} w-[${metric.score}%]`}></div></div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                         <div className="p-6 border border-white/10 rounded-sm bg-zinc-900/30">
//                             <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-2"><Layers className="w-4 h-4" /> Tech Stack</h3>
//                             <div className="flex flex-wrap gap-2">
//                                 {project.stack.map((tech) => (
//                                     <span key={tech} className="px-3 py-1.5 text-xs font-mono border border-white/10 rounded-sm text-zinc-300 bg-black/50">{tech}</span>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// // --- MAIN PAGE ---
// export default function ProjectsPage() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [selectedProject, setSelectedProject] = useState<ProjectDef | null>(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   function handleMouseMove({ clientX, clientY }: MouseEvent) {
//     mouseX.set(clientX);
//     mouseY.set(clientY);
//   }

//   // Disable scroll when modal is open
//   useEffect(() => {
//     if (selectedProject) document.body.style.overflow = 'hidden';
//     else document.body.style.overflow = 'unset';
//   }, [selectedProject]);

//   return (
//     <main 
//         className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 overflow-x-hidden relative"
//         onMouseMove={handleMouseMove}
//     >
//       <Navbar />

//       {/* Detail View Modal */}
//       <AnimatePresence>
//           {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
//       </AnimatePresence>

//       {/* Background FX */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
//          <motion.div className="absolute inset-0 transition-opacity duration-500" style={{ background: useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(6, 182, 212, 0.08), transparent 80%)` }} />
//          <DataStream />
//          <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 0%, #050505 100%)"></div>
//       </div>

//       <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-24 max-w-7xl">
//         {/* Header */}
//         <div className="mb-20 border-b border-white/10 pb-12 backdrop-blur-sm">
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
//                <Activity className="w-4 h-4 text-green-500 animate-pulse" />
//                <span className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">Research Archive // v2.4</span>
//             </motion.div>
//             <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-6">
//                 CASE<span className="text-zinc-800">.STUDIES</span>
//             </motion.h1>
//             <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-zinc-400 max-w-2xl text-lg font-light leading-relaxed pl-1">
//                 Advanced implementations in <span className="text-cyan-400 font-medium">Medical AI</span>, <span className="text-cyan-400 font-medium">Computer Vision</span>, and <span className="text-cyan-400 font-medium">Predictive Analytics</span>.
//             </motion.p>
//         </div>

//         {/* Project List */}
//         <div className="flex flex-col w-full">
//           {projects.map((project, index) => {
//             const isHovered = hoveredIndex === index;
//             const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: isDimmed ? 0.3 : 1, y: 0 }}
//                 transition={{ delay: index * 0.05 }}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 onClick={() => setSelectedProject(project)}
//                 className="group relative border-t border-white/10 py-10 cursor-pointer transition-all duration-300"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-transparent -z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
//                 <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12 px-4 md:px-0">
//                     <div className="md:w-1/12 font-mono text-xs text-zinc-600 flex flex-col justify-between h-full"><span className="group-hover:text-cyan-500 transition-colors">/{project.id}</span></div>
//                     <div className="md:w-4/12">
//                         <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-50 transition-colors"><HyperText text={project.title} triggering={isHovered} /></h2>
//                         <div className="flex items-center gap-3">
//                             <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900/50">{project.category}</span>
//                             <span className="text-[10px] font-mono text-zinc-600">{project.year}</span>
//                         </div>
//                     </div>
//                     <div className="md:w-4/12 text-zinc-400 leading-relaxed font-light text-sm">
//                         <p className="mb-4">{project.description}</p>
//                         <div className="flex flex-wrap gap-x-4 gap-y-1">
//                             {project.stack.map((tech, t) => (
//                                 <span key={t} className="text-[10px] font-mono text-zinc-600 group-hover:text-cyan-200/70 transition-colors">// {tech}</span>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="md:w-3/12 flex flex-col items-end justify-between gap-6">
//                         <div className={`transition-all duration-300 transform ${isHovered ? 'translate-x-2 -translate-y-2 text-cyan-400' : 'text-zinc-700'}`}><ArrowUpRight size={28} /></div>
//                         <div className="w-full max-w-[140px] text-right">
//                              <div className="text-[10px] font-mono text-zinc-500 mb-2 flex justify-end gap-2"><span className={isHovered ? 'text-cyan-400 font-bold' : ''}>{project.metric}</span></div>
//                              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden"><motion.div className="h-full bg-cyan-500 box-shadow-[0_0_10px_rgba(6,182,212,0.8)]" initial={{ width: 0 }} animate={{ width: isHovered ? `${project.progress}%` : '0%' }} transition={{ duration: 0.8, ease: "circOut" }} /></div>
//                         </div>
//                     </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
        
//         <div className="mt-20 border-t border-white/10 pt-8 flex justify-between items-center text-zinc-600 font-mono text-xs">
//              <div className="flex items-center gap-2"><ScanLine size={14} className="text-cyan-800"/> END OF RECORD</div>
//              <div className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-900 rounded-full animate-ping"></div> SYSTEM IDLE</div>
//         </div>
//       </div>
//     </main>
//   );
// }


'use client';

import { useState, useEffect, useRef, MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, Database, Activity, Code2, 
  X, Github, Layers, Network, CheckCircle2,
  Terminal, AlertTriangle, Lightbulb, GitCommit,
  Cpu, ArrowRight, FileJson, Search, Server
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

// --- TYPES ---
type Metric = { label: string; value: string; score: number };
type PipelineStep = { title: string; desc: string; icon: any };

type ProjectDef = { 
    id: string;
    title: string; 
    subtitle?: string;
    category: string; 
    year: string;
    description: string;
    problem: string;
    solution: string;
    stack: string[];
    metric: string;
    progress: number;
    color: string;
    githubLink?: string;
    pipeline?: PipelineStep[];
    metricsDetail?: Metric[];
    codeSnippet?: string;
};

// --- DATA ---
const projects: ProjectDef[] = [
  { 
    id: "01",
    title: "SILENT MI RISK AUDIT", 
    subtitle: "Multimodal Deep Learning & Calibration",
    category: "AI HEALTHCARE", 
    year: "2025",
    description: "Clinical decision support system designed to detect Silent Myocardial Infarction (SMI) in diabetic patients via Late Fusion of EHR and ECG data.",
    problem: "Diabetic Autonomic Neuropathy (DAN) disrupts afferent nerve signaling, effectively masking angina (chest pain). This leads to 'Silent' Myocardial Infarction (SMI), where patients suffer heart attacks without realizing it. Standard diagnostic tools like the Framingham Risk Score rely heavily on symptomatic presentation and basic biomarkers, failing to capture the subtle, non-linear morphological changes in ECG waveforms associated with silent ischemia.",
    solution: "I architected a Multimodal Late-Fusion Neural Network to bridge this gap. The system utilizes a dual-branch topology: (1) A 1D-Convolutional Neural Network (CNN) processes raw, 10-second ECG signals (from PTB-XL) to extract hierarchical morphological embeddings, specifically targeting repolarization dispersion. (2) A Multi-Layer Perceptron (MLP) processes tabular EHR data (from MIMIC-IV), utilizing MICE imputation for missing values. These disparate feature vectors are concatenated and passed through a sigmoid classifier. Crucially, I applied Isotonic Regression to calibrate the output probabilities.",
    stack: ["PyTorch", "MIMIC-IV", "1D-CNN", "Isotonic Reg.", "SHAP"],
    metric: "AUC-PR: 0.72",
    progress: 72,
    color: "text-red-500",
    githubLink: "https://github.com/sidddheer/Risk-Assessment-Models-for-Silent-Myocardial-Infarction-in-Diabetic-Patients.git",
    pipeline: [
        { title: "Ingestion", desc: "MIMIC-IV EHR + PTB-XL ECG", icon: Database },
        { title: "Preprocessing", desc: "MICE Imputation & Filtering", icon: Activity },
        { title: "Feature Eng.", desc: "1D-CNN (Wave) + MLP (Tab)", icon: Layers },
        { title: "Late Fusion", desc: "Feature Concatenation", icon: Network },
        { title: "Validation", desc: "Fairness Audit & Calibration", icon: CheckCircle2 },
    ],
    metricsDetail: [
        { label: "Multimodal AUC-PR", value: "0.72", score: 72 }, 
        { label: "Unimodal Baseline", value: "0.66", score: 66 }, 
        { label: "Brier Score", value: "0.138", score: 86 },      
        { label: "Net Benefit", value: "+15%", score: 90 } 
    ],
    codeSnippet: `class MultimodalRiskNet(nn.Module):
    def __init__(self):
        super().__init__()
        
        # Branch 1: 1D-CNN for Raw ECG Waveforms
        self.ecg_branch = nn.Sequential(
            nn.Conv1d(in_channels=12, out_channels=32, kernel_size=5),
            nn.ReLU(),
            nn.MaxPool1d(2),
            nn.Flatten(),
            nn.Linear(32 * 48, 64) # Latent ECG Embeddings
        )

        # Branch 2: MLP for Tabular Clinical Data
        self.tabular_branch = nn.Sequential(
            nn.Linear(in_features=25, out_features=16),
            nn.ReLU(),
            nn.Dropout(0.3)
        )

        # Late Fusion: Concatenation
        self.fusion_layer = nn.Linear(64 + 16, 1)

    def forward(self, ecg_data, clinical_data):
        x1 = self.ecg_branch(ecg_data)
        x2 = self.tabular_branch(clinical_data)
        combined = torch.cat((x1, x2), dim=1)
        return torch.sigmoid(self.fusion_layer(combined))`
  },
  { 
    id: "02",
    title: "ALPHAFOLD ARCHITECTURE", 
    subtitle: "Deep Learning for Protein Geometry",
    category: "BIOINFORMATICS", 
    year: "2025",
    description: "An architectural implementation and analysis of AlphaFold 2, focusing on the Evoformer attention mechanism and Invariant Point Attention (IPA) for 3D structure inference.",
    problem: "The 'Protein Folding Problem'—predicting a protein's 3D structure from its 1D amino acid sequence—is complicated by Levinthal's Paradox, which suggests a protein has an astronomical number of possible configurations. Traditional experimental methods like X-ray Crystallography and Cryo-EM are prohibitively expensive ($100k+ per structure) and slow. Furthermore, standard Convolutional Neural Networks (CNNs) fail to model the complex, long-range dependencies required to infer global geometry from local sequence data.",
    solution: "I implemented a deep learning pipeline replicating the core modules of AlphaFold 2. The architecture centers on the 'Evoformer' block, which treats protein folding as a graph inference problem. It maintains two parallel representations: (1) An MSA (Multiple Sequence Alignment) representation to capture evolutionary co-variation, and (2) A Pair Representation to model spatial distances between residues. These streams exchange information via Axial Attention. The final 3D coordinates are generated by the Structure Module using Invariant Point Attention (IPA), which updates residue positions in Euclidean space while maintaining rotational invariance.",
    stack: ["PyTorch", "BioPython", "Evoformer", "CUDA", "JAX"],
    metric: "GDT_TS: 92.4",
    progress: 100,
    color: "text-blue-500",
    githubLink: "https://github.com/sidddheer/AlphaFold-Architectural-Analysis-Evoformers-Geometric-Attention.git",
    pipeline: [
        { title: "Input Processing", desc: "FASTA Seq & MSA Search (HHBlits)", icon: Database },
        { title: "Embedding", desc: "MSA & Pair Representation Init", icon: Layers },
        { title: "Evoformer", desc: "Axial Attention & Triangular Updates", icon: Cpu },
        { title: "Structure Mod", desc: "Invariant Point Attention (IPA)", icon: Activity },
        { title: "Relaxation", desc: "AMBER Force Field Minimization", icon: CheckCircle2 },
    ],
    metricsDetail: [
        { label: "GDT_TS Score", value: "92.4", score: 92 }, 
        { label: "RMSD (Å)", value: "< 1.5", score: 95 },    
        { label: "Residue Acc", value: "98%", score: 98 },    
        { label: "Stereo-chem", value: "High", score: 90 }    
    ],
    codeSnippet: `class InvariantPointAttention(nn.Module):
    def __init__(self, c_s, c_z, c_hidden, no_heads):
        super().__init__()
        # Projections for Single (s) and Pair (z) representations
        self.qkv_proj = nn.Linear(c_s, c_hidden * no_heads * 3)
        self.bias_proj = nn.Linear(c_z, no_heads)

    def forward(self, s, z, r, t, mask):
        # s: [Batch, Residues, Channels]
        # r, t: Rotations & Translations (Rigid Body Frame)
        
        q, k, v = self.qkv_proj(s).chunk(3, dim=-1)
        
        # 1. Compute Standard Self-Attention
        attn_logits = torch.matmul(q, k.transpose(-1, -2))
        
        # 2. Add Pair Bias (Geometry Aware)
        attn_logits += self.bias_proj(z)
        
        # 3. Add 3D Euclidean Distance Bias
        # Calculates distance between points in local frames
        dist_matrix = compute_l2_dist(r, t) 
        attn_logits -= 0.5 * dist_matrix 
        
        weights = torch.softmax(attn_logits, dim=-1)
        return torch.matmul(weights, v)`
  },
  { 
    id: "03",
    title: "DEEPFAKE DETECTION", 
    subtitle: "Spatiotemporal Forensics Network",
    category: "COMPUTER VISION", 
    year: "2025",
    description: "A hybrid forensic pipeline fusing ResNet50 for spatial artifact detection and LSTM for temporal inconsistency modeling to detect Deepfake videos with 90.2% accuracy.",
    problem: "State-of-the-art Deepfakes (GAN-generated face swaps) have become nearly indistinguishable from reality in single frames. However, frame-by-frame generation often lacks temporal coherence, resulting in subtle 'jitter' in gaze, blinking, or lip-syncing. Purely spatial classifiers (like XceptionNet) fail to capture these time-dependent anomalies, and simple frequency analysis is easily bypassed by modern GAN upsamplers.",
    solution: "I engineered a Spatiotemporal Hybrid Network (ResNet50 + LSTM) to detect these temporal artifacts. The pipeline begins with MTCNN for face extraction and alignment. Spatial features are extracted from each frame using a ResNet50 backbone pre-trained on ImageNet (transfer learning). These feature vectors are then fed as a sequence into a bi-directional LSTM, which learns the temporal dynamics of facial movements. The final classification head determines authenticity based on the consistency of the feature sequence over time.",
    stack: ["OpenCV", "PyTorch", "ResNet50", "LSTM", "MTCNN"],
    metric: "F1-Score: 90.2%",
    progress: 90,
    color: "text-cyan-500",
    githubLink: "https://github.com/sidddheer/Visual-Deepfake-Detection-Using-CNNs.git",
    pipeline: [
        { title: "Extraction", desc: "Frame Sampling & MTCNN Face Crop", icon: Database },
        { title: "Spatial Feats", desc: "ResNet50 Feature Extraction", icon: Layers },
        { title: "Temporal Feats", desc: "Bi-Directional LSTM Sequence", icon: Activity },
        { title: "Classification", desc: "Fully Connected Binary Head", icon: Network },
        { title: "Evaluation", desc: "FaceForensics++ Benchmark", icon: CheckCircle2 },
    ],
    metricsDetail: [
        { label: "F1-Score", value: "90.2%", score: 90 }, 
        { label: "AUC-ROC", value: "0.94", score: 94 }, 
        { label: "False Pos Rate", value: "< 5%", score: 95 },      
        { label: "Frame Throughput", value: "40k+", score: 85 } 
    ],
    codeSnippet: `class ResNetLSTM(nn.Module):
    def __init__(self, hidden_dim=256, num_layers=2):
        super(ResNetLSTM, self).__init__()
        # 1. Spatial Feature Extractor (CNN)
        resnet = models.resnet50(pretrained=True)
        self.share = nn.Sequential(*list(resnet.children())[:-1]) # Remove FC layer
        
        # 2. Temporal Modeler (RNN)
        self.lstm = nn.LSTM(
            input_size=2048, # ResNet50 output size
            hidden_size=hidden_dim, 
            num_layers=num_layers, 
            batch_first=True
        )
        self.fc = nn.Linear(hidden_dim, 1)

    def forward(self, x):
        # x shape: [batch, seq_len, 3, 224, 224]
        b, s, c, h, w = x.size()
        
        # Process every frame through CNN
        spatial_feats = self.share(x.view(b*s, c, h, w)) 
        spatial_feats = spatial_feats.view(b, s, -1)
        
        # Process sequence through LSTM
        lstm_out, _ = self.lstm(spatial_feats)
        
        # Classify based on last hidden state
        return torch.sigmoid(self.fc(lstm_out[:, -1, :]))`
  },
  { 
    id: "04",
    title: "OCT-MNIST CLASSIFIER", 
    subtitle: "Retinal Disease Detection via CNNs",
    category: "MEDICAL IMAGING", 
    year: "2025",
    description: "A specialized Convolutional Neural Network designed to classify retinal optical coherence tomography (OCT) images into 4 diagnostic categories, specifically engineering solutions for severe class imbalance.",
    problem: `Automating retinal diagnosis requires interpreting subtle microstructural changes in Optical Coherence Tomography (OCT) scans. A major challenge with the OCTMNIST dataset is severe Class Imbalance: 'Normal' and 'CNV' cases vastly outnumber 'DME' and 'Drusen'. Standard training leads to model bias, where the network ignores rare pathologies to maximize global accuracy.`,
    solution: `I engineered a custom 3-block Convolutional Neural Network (CNN) optimized for 28x28 grayscale medical imaging. To counteract the class imbalance, I implemented a Weighted Cross-Entropy Loss function, assigning higher penalties (weights) to misclassifications of the minority classes. The architecture incorporates Batch Normalization and Dropout (0.5) to enforce regularization.`,
    
    // NOTE: Replace this URL with a real image from your public/ folder, e.g., "/oct-architecture.png"
    // imageUrl: "https://github.com/sidddheer/OCTMNIST-Retinal-Disease-Classification-Using-CNNs/blob/main/image.png", 
    
    stack: ["PyTorch", "MedMNIST", "CNN", "Weighted Loss", "Adam Opt"],
    metric: "Test Acc: 89.3%",
    progress: 89,
    color: "text-green-500",
    githubLink: "https://github.com/sidddheer/OCTMNIST-Retinal-Disease-Classification-Using-CNNs.git",
    pipeline: [
        { title: "Data Ingestion", desc: "MedMNIST Loader & Normalization", icon: Database },
        { title: "Feature Ext.", desc: "3-Block CNN + Batch Norm", icon: Layers },
        { title: "Regularization", desc: "Dropout (0.5) & MaxPool", icon: Activity },
        { title: "Optimization", desc: "Adam + Class-Weighted Loss", icon: Cpu },
        { title: "Inference", desc: "4-Class Softmax Probability", icon: CheckCircle2 },
    ],
    metricsDetail: [
        { label: "Test Accuracy", value: "89.33%", score: 89 }, 
        { label: "Macro F1-Score", value: "80.53%", score: 80 }, 
        { label: "Precision", value: "83.03%", score: 83 },      
        { label: "Recall", value: "78.72%", score: 79 } 
    ],
    codeSnippet: `class OCT_CNN(nn.Module):
    def __init__(self, num_classes):
        super(OCT_CNN, self).__init__()
        # Block 1: Feature Extraction
        self.conv1 = nn.Conv2d(1, 32, kernel_size=3, padding=1)
        self.bn1 = nn.BatchNorm2d(32)
        # Block 2: Deep Features
        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
        self.bn2 = nn.BatchNorm2d(64)
        # Block 3: Abstraction
        self.conv3 = nn.Conv2d(64, 128, kernel_size=3, padding=1)
        self.bn3 = nn.BatchNorm2d(128)
        
        self.pool = nn.MaxPool2d(2, 2)
        self.dropout = nn.Dropout(0.5) # Regularization
        self.fc1 = nn.Linear(128 * 3 * 3, 256)
        self.fc2 = nn.Linear(256, num_classes)

    def forward(self, x):
        x = self.pool(F.relu(self.bn1(self.conv1(x))))
        x = self.pool(F.relu(self.bn2(self.conv2(x))))
        x = self.pool(F.relu(self.bn3(self.conv3(x))))
        x = x.view(x.size(0), -1) 
        return self.fc2(self.dropout(F.relu(self.fc1(x))))

# Handling Class Imbalance
class_weights = torch.tensor([1.0, 1.0, 1.0, 3.0]).to(DEVICE) 
criterion = nn.CrossEntropyLoss(weight=class_weights)`
  },
  { 
    id: "05",
    title: "PUCKSTATS ANALYTICS", 
    subtitle: "High-Performance Relational Engine",
    category: "DATA ENGINEERING", 
    year: "2025",
    description: "A normalized (3NF) PostgreSQL database engine designed to ingest, store, and query high-velocity NHL game telemetry, utilizing complex CTEs and window functions for tactical analysis.",
    problem: "Modern sports analytics relies on determining context from chaos. Raw NHL game data is voluminous and event-heavy (shots, hits, faceoffs), often stored in flat JSON logs that suffer from extreme redundancy. Analyzing situational metrics—like 'Shooter Efficiency vs. Specific Goalies' or 'Defensive Zone Pressure'—in real-time is computationally expensive without a rigorous, optimized schema.",
    solution: "I architected a fully normalized relational database (PostgreSQL) to enforce data integrity and minimize redundancy. The system decomposes game events into a 3NF schema with rigid foreign key constraints. I developed a suite of advanced SQL algorithms using Common Table Expressions (CTEs) and conditional aggregation to calculate derived metrics (e.g., Power Play Points). To ensure sub-15ms query latency on complex joins, I implemented composite B-Tree indexing strategies on high-cardinality columns.",
    stack: ["PostgreSQL", "Advanced SQL", "3NF Normalization", "Query Optimization", "Data Modeling"],
    metric: "Query Latency: <15ms",
    progress: 95,
    color: "text-orange-500",
    githubLink: "https://github.com/sidddheer/PuckStats-High-Performance-NHL-Analytics-Engine.git",
    pipeline: [
        { title: "Raw Ingestion", desc: "Unstructured Game Telemetry", icon: Database },
        { title: "Normalization", desc: "Decomposition to 3rd Normal Form", icon: Layers },
        { title: "Indexing", desc: "Composite B-Tree & Hash Indexing", icon: Cpu },
        { title: "Query Engine", desc: "CTEs, Recursive Joins, Window Funcs", icon: Code2 },
        { title: "Analytics", desc: "Spatial & Situational Metrics", icon: Activity },
    ],
    metricsDetail: [
        { label: "Normalization", value: "3NF Strict", score: 100 }, 
        { label: "Query Latency", value: "< 15ms", score: 95 }, 
        { label: "Data Integrity", value: "100%", score: 100 },      
        { label: "Records", value: "500k+", score: 85 } 
    ],
    codeSnippet: `-- Query: Power Play Point Leaders via Conditional Aggregation
SELECT 
    p.first_name, 
    p.last_name, 
    -- Calculate Goals specific to Man-Advantage context
    COALESCE(SUM(CASE WHEN g.scorer = p.player_id THEN 1 ELSE 0 END), 0) AS pp_goals, 
    -- Calculate Assists (Primary + Secondary)
    COALESCE(SUM(CASE 
        WHEN g.primary_assist = p.player_id OR g.secondary_assist = p.player_id 
        THEN 1 ELSE 0 END), 0) AS pp_assists, 
    -- Total Points
    COALESCE(SUM(CASE 
        WHEN p.player_id IN (g.scorer, g.primary_assist, g.secondary_assist) 
        THEN 1 ELSE 0 END), 0) AS pp_points 
FROM goals g 
JOIN games gm ON g.game_id = gm.game_id 
JOIN players p ON p.player_id IN (g.scorer, g.primary_assist, g.secondary_assist) 
WHERE 
    -- Complex Logic: Filter for Home/Away Advantage situations
    ((g.event_owner = gm.home_id AND g.home_skaters > g.away_skaters) 
    OR 
    (g.event_owner = gm.away_id AND g.away_skaters > g.home_skaters))
GROUP BY p.player_id, p.first_name, p.last_name 
ORDER BY pp_points DESC;`
  },
  { 
    id: "06",
    title: "CRIME NEURAL NETWORK", 
    subtitle: "Spatial-Temporal Predictive Modeling",
    category: "SPATIAL AI", 
    year: "2025",
    
    // --- SUMMARY ---
    description: "A deep learning model analyzing over 320,000 crime records to predict incident types based on spatiotemporal features, outperforming logistic regression baselines.",

    // --- DEEP DIVE: THE PROBLEM ---
    problem: `Urban crime distribution is inherently non-linear and heavily dependent on complex interactions between time, location, and day of the week. Traditional linear models (like Logistic Regression) struggle to capture these high-dimensional dependencies. The Buffalo Crime Dataset (322k+ records) presents challenges with noisy GPS data and significant class imbalance, where rare violent crimes are drowned out by frequent property crimes.`,

    // --- DEEP DIVE: THE SOLUTION ---
    solution: `I developed a custom Multi-Layer Perceptron (MLP) using PyTorch to model these non-linear relationships. The pipeline begins with rigorous preprocessing: filtering invalid GPS coordinates (outside Buffalo bounds) and engineering temporal features (Hour, Day of Week). The network architecture features three fully connected layers (128 -> 64 -> 32 neurons) with ReLU activation and Dropout (0.3) to prevent overfitting.  By normalizing spatial inputs and one-hot encoding temporal cyclic features, the model effectively learns distinct crime "hotspots" in both space and time.`,

    stack: ["PyTorch", "Pandas", "Scikit-Learn", "MinMax Scaling", "EDA"],
    metric: "Val Acc: 99.6%",
    progress: 99,
    color: "text-purple-500",
    githubLink: "https://github.com/sidddheer/Predictive-Analysis-of-Crime-Incidents-Using-Neural-Networks.git",
    
    // --- VISUAL PIPELINE ---
    pipeline: [
        { title: "Ingestion", desc: "322k+ CSV Records", icon: Database },
        { title: "Cleaning", desc: "Geo-Filtering & Null Removal", icon: Activity },
        { title: "Feat. Eng.", desc: "One-Hot Days & Normalized Lat/Lon", icon: Layers },
        { title: "Training", desc: "3-Layer MLP + Adam Optimizer", icon: Cpu },
        { title: "Evaluation", desc: "Test Set Accuracy & Classification Report", icon: CheckCircle2 },
    ],
    
    // --- METRICS ---
    metricsDetail: [
        { label: "Training Accuracy", value: "99.8%", score: 99 }, 
        { label: "Validation Acc", value: "99.6%", score: 99 }, 
        { label: "Data Points", value: "322,000+", score: 90 },      
        { label: "Input Dim", value: "12 Features", score: 85 } 
    ],
    
    // --- CODE SNIPPET (Network Architecture) ---
    codeSnippet: `class CrimeNet(nn.Module):
    def __init__(self, input_dim, num_classes):
        super(CrimeNet, self).__init__()
        
        # Layer 1: Input -> 128 Neurons
        self.layer1 = nn.Sequential(
            nn.Linear(input_dim, 128),
            nn.ReLU(),
            nn.Dropout(0.3)
        )
        
        # Layer 2: 128 -> 64 Neurons
        self.layer2 = nn.Sequential(
            nn.Linear(128, 64),
            nn.ReLU(),
            nn.Dropout(0.3)
        )
        
        # Layer 3: 64 -> 32 Neurons
        self.layer3 = nn.Sequential(
            nn.Linear(64, 32),
            nn.ReLU()
        )
        
        # Output Layer
        self.output = nn.Linear(32, num_classes)

    def forward(self, x):
        x = self.layer1(x)
        x = self.layer2(x)
        x = self.layer3(x)
        return self.output(x) # CrossEntropyLoss handles Softmax`
  },
  { 
    id: "07",
    title: "LICENSE PLATE RECOGNITION", 
    subtitle: "Real-Time ALPR Pipeline",
    category: "OCR / VISION", 
    year: "2025",
    
    // --- SUMMARY ---
    description: "An end-to-end Automatic License Plate Recognition (ALPR) system integrating YOLOv11 for object detection and Tesseract for Optical Character Recognition, optimized for real-world lighting conditions.",

    // --- DEEP DIVE: THE PROBLEM ---
    problem: `Deploying ALPR in unconstrained environments is notoriously difficult due to "in-the-wild" variances: motion blur, extreme angles, and uneven lighting (shadows/glare). While generic object detectors find cars easily, localizing the small, high-density text region of a license plate requires high precision. Furthermore, passing raw crops directly to OCR engines results in high error rates due to noise and low contrast.`,

    // --- DEEP DIVE: THE SOLUTION ---
    solution: `I developed a two-stage cascade pipeline. Stage 1: Object Detection. I benchmarked YOLOv11 against YOLOv12, finding that YOLOv11 offered superior convergence consistency for this dataset. The model localizes plates with a confidence threshold of 0.5.  Stage 2: OCR Preprocessing. To solve the lighting issues, I implemented an OpenCV pipeline that applies Gaussian Blurring (to remove sensor noise) followed by Adaptive Thresholding (to handle uneven illumination). The binarized, high-contrast crop is then fed into Tesseract with a strict alphanumeric whitelist configuration.`,

    stack: ["YOLOv11", "OpenCV", "Tesseract", "Python", "Computer Vision"],
    metric: "Detection: 98%",
    progress: 85,
    color: "text-yellow-500",
    githubLink: "https://github.com/sidddheer/Vision-Based-License-Plate-Recognition-ALPR-.git",
    
    // --- VISUAL PIPELINE ---
    pipeline: [
        { title: "Input Stream", desc: "Real-time Video/Image Frame", icon: Database },
        { title: "Localization", desc: "YOLOv11 Plate Detection", icon: Layers },
        { title: "Preprocessing", desc: "Gaussian Blur & Adaptive Thresh", icon: Activity },
        { title: "OCR Extraction", desc: "Tesseract (Whitelist Config)", icon: Terminal },
        { title: "Parsing", desc: "String Cleanup & Validation", icon: CheckCircle2 },
    ],
    
    // --- METRICS ---
    metricsDetail: [
        { label: "Detection mAP", value: "0.98", score: 98 }, 
        { label: "OCR Accuracy", value: "92%", score: 92 }, 
        { label: "Inference Time", value: "45ms", score: 85 },      
        { label: "Model Choice", value: "v11 > v12", score: 100 } 
    ],
    
    // --- CODE SNIPPET (Preprocessing Logic) ---
    codeSnippet: `class LicensePlateRecognizer:
    def __init__(self, model_path):
        self.model = YOLO(model_path) # Using YOLOv11

    def preprocess_for_ocr(self, plate_crop):
        # 1. Grayscale
        gray = cv2.cvtColor(plate_crop, cv2.COLOR_BGR2GRAY)
        
        # 2. Gaussian Blur (Noise Reduction)
        blur = cv2.GaussianBlur(gray, (3, 3), 0)
        
        # 3. Adaptive Thresholding (Handle Glare/Shadows)
        # Critical for outdoor environments
        binary = cv2.adaptiveThreshold(
            blur, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, 
            cv2.THRESH_BINARY, 11, 2
        )
        return binary

    def process_frame(self, frame):
        results = self.model(frame, conf=0.5, verbose=False)
        for result in results:
             # Crop -> Preprocess -> OCR
             processed_plate = self.preprocess_for_ocr(crop)
             text = pytesseract.image_to_string(
                 processed_plate, 
                 config=r'--oem 3 --psm 7 -c tessedit_char_whitelist=A-Z0-9'
             )
        return detections`
  },
  { 
    id: "08",
    title: "HYBRID CRIME PREDICTION", 
    subtitle: "Sentiment-Augmented Forecasting",
    category: "NLP / ML", 
    year: "2024",
    
    // --- SUMMARY ---
    description: "A hybrid forecasting engine that improves crime prediction accuracy by fusing historical police data with real-time social media sentiment analysis (Twitter/Reddit) using VADER and Random Forests.",

    // --- DEEP DIVE: THE PROBLEM ---
    problem: `Traditional predictive policing relies heavily on 'Hotspot Mapping' (Kernel Density Estimation) using only historical arrest data. This approach suffers from two major flaws: (1) It reinforces bias by over-predicting crime in historically over-policed areas (Feedback Loop), and (2) It is static—it cannot react to sudden, real-time social unrest or emerging tensions until after reports are filed.`,

    // --- DEEP DIVE: THE SOLUTION ---
    solution: `I engineered a multi-modal pipeline to add a real-time "social temperature" variable to the prediction model. The system ingests two streams: (1) Historical spatiotemporal crime logs, and (2) Real-time geo-tagged discussions scraped from Twitter and Reddit using Playwright and PRAW. I utilized VADER (Valence Aware Dictionary and sEntiment Reasoner) to compute compound sentiment scores for specific neighborhoods.  These dynamic sentiment features were fused with the static historical features and trained on a Random Forest Classifier, allowing the model to detect anomalies where negative sentiment spikes preceded criminal activity.`,

    stack: ["Python", "VADER", "Random Forest", "Playwright", "PRAW"],
    metric: "Accuracy: 87%",
    progress: 87,
    color: "text-red-500",
    githubLink: "https://github.com/sidddheer/Crime-Prediction-Sentiment-Historical-Hybrid-Model.git",
    
    // --- VISUAL PIPELINE ---
    pipeline: [
        { title: "Data Mining", desc: "Scraping Reddit/Twitter (PRAW)", icon: Database },
        { title: "NLP Engine", desc: "VADER Sentiment Scoring", icon: Terminal },
        { title: "Fusion", desc: "Merging Spatial + Sentiment Feats", icon: Network },
        { title: "Reduction", desc: "PCA for Feature Selection", icon: Layers },
        { title: "Prediction", desc: "Random Forest Classifier", icon: CheckCircle2 },
    ],
    
    // --- METRICS ---
    metricsDetail: [
        { label: "Model Accuracy", value: "87%", score: 87 }, 
        { label: "Data Volume", value: "20GB+", score: 85 }, 
        { label: "Sentiment Sources", value: "Reddit/X", score: 90 },      
        { label: "Feature Lift", value: "+12%", score: 75 } 
    ],
    
    // --- CODE SNIPPET (Sentiment Fusion Logic) ---
    codeSnippet: `from nltk.sentiment.vader import SentimentIntensityAnalyzer
from sklearn.ensemble import RandomForestClassifier

# 1. Initialize VADER for Social Media Text
sia = SentimentIntensityAnalyzer()

def compute_social_pressure(text_batch):
    # Returns a compound score: -1 (Negative) to +1 (Positive)
    scores = [sia.polarity_scores(t)['compound'] for t in text_batch]
    return np.mean(scores)

# 2. Hybrid Feature Engineering
def train_hybrid_model(crime_df, social_df):
    # Merge datasets on Time Window and Geo-Block
    merged_df = pd.merge_asof(
        crime_df.sort_values('timestamp'),
        social_df.sort_values('timestamp'),
        on='timestamp',
        by='neighborhood_id'
    )
    
    # Features: Location + Time + Social Sentiment
    X = merged_df[['lat', 'lon', 'hour', 'sentiment_score']]
    y = merged_df['crime_occurred']
    
    clf = RandomForestClassifier(n_estimators=100)
    clf.fit(X, y)
    return clf`
  },
  { 
    id: "09",
    title: "SITE PULSE ANALYTICS", 
    subtitle: "Construction Safety Risk Engine",
    category: "PREDICTIVE AI", 
    year: "2024",
    
    // --- SUMMARY ---
    description: "A predictive analytics engine for construction sites that anticipates safety incidents by correlating quantitative labor data (fatigue) with qualitative superintendent notes (sentiment).",

    // --- DEEP DIVE: THE PROBLEM ---
    problem: `Construction projects suffer from "Death by a Thousand Cuts"—small, unreported frustrations that accumulate into major safety incidents. Traditional management relies on lagging indicators (Budget vs. Actual), which only reveal problems after they happen. Furthermore, valuable qualitative data—daily Superintendent logs—is often treated as "flat text" and ignored in risk modeling, despite containing early warning signs of crew confusion or morale decay.`,

    // --- DEEP DIVE: THE SOLUTION ---
    solution: `I engineered "Site Pulse," a predictive risk engine that digitizes site instinct. The system integrates structured labor data (hours, crew size) with unstructured field notes. I used NLTK/VADER to perform sentiment analysis on the notes, converting subjective entries (e.g., "confusion on drawings") into quantitative risk features. 

[Image of sentiment analysis process flow]
 These sentiment scores were combined with fatigue metrics (Rolling 7-Day Overtime) to train a Random Forest Classifier. The model outputs a daily "Risk Probability" for each crew, visualized on a Power BI Heatmap to enable pre-emptive safety interventions.`,

    stack: ["Python", "NLTK (VADER)", "Random Forest", "Power BI", "Pandas"],
    metric: "Risk Precision: 85%",
    progress: 95,
    color: "text-orange-600",
    githubLink: "https://github.com/sidddheer/Site-Pulse-Construction-Risk-Analytics.git",
    
    // --- VISUAL PIPELINE ---
    pipeline: [
        { title: "Ingestion", desc: "Daily Logs & Labor Hours", icon: Database },
        { title: "NLP Engine", desc: "VADER Sentiment Scoring", icon: Terminal },
        { title: "Feat. Eng.", desc: "Rolling Overtime & Day-of-Week", icon: Layers },
        { title: "Modeling", desc: "Random Forest Classifier", icon: Cpu },
        { title: "Dashboard", desc: "Power BI Risk Heatmap", icon: Activity },
    ],
    
    // --- METRICS ---
    metricsDetail: [
        { label: "Risk Prediction", value: "85% Prob", score: 85 }, 
        { label: "Data Type", value: "Hybrid (Txt/Num)", score: 90 }, 
        { label: "Insight", value: "Monday Effect", score: 95 },      
        { label: "Viz Platform", value: "Power BI", score: 80 } 
    ],
    
    // --- CODE SNIPPET (The Core Logic) ---
    codeSnippet: `# 1. Digitizing Instinct: Sentiment Analysis
sia = SentimentIntensityAnalyzer()
df['sentiment_score'] = df['notes'].apply(
    lambda x: sia.polarity_scores(x)['compound']
)

# 2. Engineering Fatigue (The "Grind" Factor)
# Calculate rolling 7-day overtime to detect burnout
df['rolling_overtime'] = df.groupby('crew_id')['daily_ot'].transform(
    lambda x: x.rolling(window=7).sum()
)

# 3. Predictive Modeling
features = ['sentiment_score', 'rolling_overtime', 'crew_count', 'day_of_week']
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(train_df[features], train_df['risk_event'])

# 4. Actionable Output
prob = model.predict_proba(today_data)[:, 1] # Probability of Incident`
  },
  { 
    id: "10",
    title: "DIJKSTRA MAPS OPTIMIZER", 
    subtitle: "Cost-Constraint Pathfinding Engine",
    category: "ALGORITHMS", 
    year: "2024",
    
    // --- SUMMARY ---
    description: "A high-efficiency route optimization engine implemented in Java, utilizing Min-Heaps and Adjacency Lists to minimize travel costs across complex weighted graphs.",

    // --- DEEP DIVE: THE PROBLEM ---
    problem: `Standard navigation systems often prioritize physical distance or time. However, for logistics and budget-conscious travelers, calculating the 'Cheapest Path' involves complex weighted graphs where edges contain multiple variables (distance, toll fees, road condition). Naive implementations using Adjacency Matrices suffer from $O(V^2)$ space complexity, making them unscalable for real-world road networks with thousands of nodes.`,

    // --- DEEP DIVE: THE SOLUTION ---
    solution: `I engineered a modular pathfinding system in Java that optimizes for both time and space. Instead of a standard matrix, I utilized **Adjacency Lists** to represent the map, reducing space complexity to $O(V+E)$. The core logic is a modified Dijkstra's Algorithm that uses a **Priority Queue (Min-Heap)** to extract the minimum cost node in logarithmic time.  The system models cities as nodes and roads as weighted edges, dynamically calculating the optimal route based on cumulative toll expenses, achieving a time complexity of $O(E \log V)$.`,

    stack: ["Java", "Graph Theory", "Priority Queue", "Adjacency List", "OOP"],
    metric: "Complexity: O(E log V)",
    progress: 100,
    color: "text-green-500",
    
    // --- VISUAL PIPELINE ---
    pipeline: [
        { title: "Graph Init", desc: "Adjacency List Construction", icon: Database },
        { title: "Weighting", desc: "Edge Costs (Tolls + Distance)", icon: Activity },
        { title: "Heuristic", desc: "Min-Heap Priority Queue", icon: Layers },
        { title: "Traversal", desc: "Edge Relaxation Loop", icon: Network },
        { title: "Backtracking", desc: "Path Reconstruction", icon: CheckCircle2 },
    ],
    
    // --- METRICS ---
    metricsDetail: [
        { label: "Time Complexity", value: "O(E log V)", score: 95 }, 
        { label: "Space Complexity", value: "O(V + E)", score: 90 }, 
        { label: "Graph Type", value: "Weighted/Dir", score: 100 },      
        { label: "Language", value: "Java (OOP)", score: 100 } 
    ],
    
    // --- CODE SNIPPET (Java Implementation) ---
    codeSnippet: `// Custom Edge Class for Weighted Graph
static class Edge {
    int dest;
    int cost;
    public Edge(int dest, int cost) {
        this.dest = dest;
        this.cost = cost;
    }
}

// Core Dijkstra Logic using Min-Heap
public static void dijkstra(ArrayList<Edge>[] graph, int src, int V) {
    // Priority Queue orders nodes by lowest cost (Min-Heap)
    PriorityQueue<Node> pq = new PriorityQueue<>(
        (a, b) -> a.cost - b.cost
    );
    
    int[] dist = new int[V];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[src] = 0;
    pq.add(new Node(src, 0));

    while (!pq.isEmpty()) {
        Node current = pq.poll(); // O(log V) extraction
        
        for (Edge neighbor : graph[current.id]) {
            // Relaxation Step
            if (dist[current.id] + neighbor.cost < dist[neighbor.dest]) {
                dist[neighbor.dest] = dist[current.id] + neighbor.cost;
                pq.add(new Node(neighbor.dest, dist[neighbor.dest]));
            }
        }
    }
}`
  },
  { 
    id: "11",
    title: "CUSTOMER CHURN ENGINE", 
    subtitle: "End-to-End ML Deployment",
    category: "MLOPS / BUSINESS", 
    year: "2024",
    
    // --- SUMMARY ---
    description: "A full-stack predictive system identifying at-risk telecom customers (95% accuracy). Containerized with Docker and deployed via a Streamlit dashboard for real-time business decision-making.",

    // --- DEEP DIVE: THE PROBLEM ---
    problem: `Customer acquisition costs 5x more than retention, yet businesses often fail to identify "at-risk" customers until they have already left. Analyzing behavioral patterns (tenure, payment methods, support tickets) across thousands of users manually is impossible. Furthermore, machine learning models often languish in Jupyter Notebooks, failing to provide actionable, real-time insights to non-technical stakeholders.`,

    // --- DEEP DIVE: THE SOLUTION ---
    solution: `I built an end-to-end production pipeline. I trained a Random Forest/XGBoost ensemble on the Telco Customer Churn dataset, achieving 95% accuracy by engineering features like "Tenure-to-Charge Ratio."  Crucially, I didn't stop at the model. I containerized the inference engine using Docker and exposed it via a FastAPI endpoint. I then built a user-friendly Streamlit dashboard that allows stakeholders to input customer details and receive instant "Churn Probability" scores, enabling proactive retention strategies.`,

    stack: ["Docker", "Streamlit", "XGBoost", "FastAPI", "Postman"],
    metric: "Accuracy: 95%",
    progress: 95,
    color: "text-blue-500",
    
    // --- VISUAL PIPELINE ---
    pipeline: [
        { title: "Data Ingestion", desc: "Telco Dataset (CSV)", icon: Database },
        { title: "Training", desc: "Random Forest & XGBoost", icon: Layers },
        { title: "Containerization", desc: "Docker Image Build", icon: Server },
        { title: "API Layer", desc: "FastAPI Endpoint", icon: Network },
        { title: "Frontend", desc: "Streamlit Dashboard", icon: Activity },
    ],
    
    // --- METRICS ---
    metricsDetail: [
        { label: "Model Accuracy", value: "95%", score: 95 }, 
        { label: "API Latency", value: "<100ms", score: 90 }, 
        { label: "Container", value: "Docker Slim", score: 100 },      
        { label: "Uptime", value: "99.9%", score: 99 } 
    ],
    
    // --- CODE SNIPPET (Frontend Logic) ---
    codeSnippet: `# Streamlit Dashboard Logic
if submitted:
    input_data = {
        "MonthlyCharges": MonthlyCharges,
        "tenure": tenure,
        "Contract": Contract,
        "InternetService": InternetService,
        # ... mapped fields
    }

    # Call Dockerized API
    api_url = "http://127.0.0.1:8000/predict/"
    try:
        response = requests.post(api_url, json=input_data)
        result = response.json()
        
        if result['prediction'] == 'Yes':
            st.error(f"High Churn Risk! (Probability: {result['prob']})")
        else:
            st.success("Customer is Safe.")`
  }
];

// --- SUB-COMPONENTS ---

const HyperText = ({ text, triggering }: { text: string; triggering: boolean }) => {
  const [displayText, setDisplayText] = useState(text);
  const iterations = useRef(0);
  useEffect(() => {
    if (!triggering) { setDisplayText(text); return; }
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const interval = setInterval(() => {
      setDisplayText((prev) => prev.split("").map((letter, index) => {
            if (index < iterations.current) return text[index];
            return letters[Math.floor(Math.random() * 26)];
          }).join(""));
      if (iterations.current >= text.length) clearInterval(interval);
      iterations.current += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [triggering, text]);
  useEffect(() => { if(!triggering) iterations.current = 0; }, [triggering]);
  return <span className="font-mono">{displayText}</span>;
};

const DataStream = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => setIsClient(true), []);
    if (!isClient) return null;
    const lines = Array.from({ length: 15 }).map((_, i) => ({
        id: i, left: `${Math.random() * 100}%`, delay: Math.random() * 5, duration: 3 + Math.random() * 5, height: 10 + Math.random() * 30
    }));
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {lines.map((line) => (
                <motion.div key={line.id} className="absolute w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" style={{ left: line.left, height: `${line.height}%` }} initial={{ top: '-100%', opacity: 0 }} animate={{ top: '100%', opacity: [0, 1, 0] }} transition={{ duration: line.duration, repeat: Infinity, delay: line.delay, ease: "linear" }} />
            ))}
        </div>
    );
};

// --- "THE ARCHITECT'S SHEET" DETAIL VIEW ---
const ProjectDetail = ({ project, onClose }: { project: ProjectDef, onClose: () => void }) => {
    const bgColor = project.color.replace('text-', 'bg-');
    
    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-zinc-950/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
        >
            <motion.div 
                initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
                className="w-full max-w-6xl h-[90vh] bg-[#0c0c0c] border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden"
            >
                {/* 1. TITLE BAR */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0a0a0a]">
                    <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                             <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                             <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                             <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                        </div>
                        <div className="h-4 w-[1px] bg-white/10"></div>
                        <div className="font-mono text-xs text-zinc-400 flex items-center gap-2">
                            <Database className="w-3 h-3" />
                            <span>projects</span>
                            <span className="text-zinc-600">/</span>
                            <span>{project.category.toLowerCase().replace(' ', '_')}</span>
                            <span className="text-zinc-600">/</span>
                            <span className="text-white">{project.id}_manifest.json</span>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* 2. SCROLLABLE CONTENT */}
                <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col lg:flex-row">
                    
                    {/* LEFT: NARRATIVE */}
                    <div className="flex-1 p-8 md:p-12 space-y-12">
                        
                        {/* Header */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{project.title}</h1>
                            <p className="text-lg text-zinc-400 font-light leading-relaxed border-l-2 border-white/10 pl-4">{project.description}</p>
                        </div>

                        {/* Problem / Solution Table */}
                        <div className="grid grid-cols-1 gap-8">
                             <div className="space-y-3">
                                <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4 text-red-400" /> Problem Statement
                                </h3>
                                <p className="text-zinc-300 leading-relaxed">{project.problem}</p>
                             </div>
                             
                             <div className="space-y-3">
                                <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                    <Lightbulb className="w-4 h-4 text-yellow-400" /> Technical Solution
                                </h3>
                                <p className="text-zinc-300 leading-relaxed">{project.solution}</p>
                             </div>
                        </div>

                        {/* Code Block */}
                        {project.codeSnippet && (
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                        <Code2 className="w-4 h-4 text-blue-400" /> Implementation Details
                                    </h3>
                                    <span className="text-[10px] text-zinc-600 font-mono">Python 3.9 / SQL</span>
                                </div>
                                <div className="bg-[#050505] border border-white/10 rounded p-6 overflow-x-auto">
                                    <pre className="font-mono text-xs text-zinc-300 leading-relaxed">{project.codeSnippet}</pre>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* RIGHT: SIDEBAR (METADATA & STATS) */}
                    <div className="w-full lg:w-[350px] bg-[#0a0a0a] border-l border-white/5 p-8 flex flex-col gap-10">
                        
                        {/* Actions */}
                        {project.githubLink && (
                            <Link href={project.githubLink} target="_blank">
                                <button className="w-full py-3 bg-white text-black font-medium text-sm rounded hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                                    <Github className="w-4 h-4" /> View Source Code
                                </button>
                            </Link>
                        )}

                        {/* Tech Stack */}
                        <div>
                            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Technology Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech, i) => (
                                    <span key={i} className="px-2 py-1 bg-zinc-900 border border-white/5 rounded text-[10px] text-zinc-300 font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Metrics */}
                        {project.metricsDetail && (
                            <div>
                                <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Performance Metrics</h4>
                                <div className="space-y-4">
                                    {project.metricsDetail.map((m, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-xs mb-1 text-zinc-400">
                                                <span>{m.label}</span>
                                                <span className="text-white font-mono">{m.value}</span>
                                            </div>
                                            <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${m.score}%` }}
                                                    transition={{ duration: 1 }}
                                                    className={`h-full ${bgColor}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Pipeline Timeline */}
                        {project.pipeline && (
                            <div>
                                <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Architecture Flow</h4>
                                <div className="relative border-l border-white/10 ml-2 space-y-6 pb-2">
                                    {project.pipeline.map((step, i) => (
                                        <div key={i} className="relative pl-6">
                                            <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-800 border-2 border-[#0a0a0a]"></div>
                                            <h5 className="text-xs font-bold text-white mb-0.5">{step.title}</h5>
                                            <p className="text-[10px] text-zinc-500 leading-tight">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// --- MAIN PAGE (LIST VIEW) ---
export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectDef | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY }: MouseEvent) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
  }, [selectedProject]);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 overflow-x-hidden relative" onMouseMove={handleMouseMove}>
      <Navbar isProjectsPage={true} />

      <AnimatePresence>
          {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>

      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
         <motion.div className="absolute inset-0 transition-opacity duration-500" style={{ background: useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(6, 182, 212, 0.08), transparent 80%)` }} />
         <DataStream />
         <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 0%, #050505 100%)"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-24 max-w-7xl">
        <div className="mb-20 border-b border-white/10 pb-12 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
               <Activity className="w-4 h-4 text-green-500 animate-pulse" />
               <span className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">Research Archive // v2.4</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-6">
                CASE<span className="text-zinc-800">.STUDIES</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-zinc-400 max-w-2xl text-lg font-light leading-relaxed pl-1">
                Advanced implementations in <span className="text-cyan-400 font-medium">Medical AI</span>, <span className="text-cyan-400 font-medium">Computer Vision</span>, and <span className="text-cyan-400 font-medium">Predictive Analytics</span>.
            </motion.p>
        </div>

        <div className="flex flex-col w-full">
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isDimmed ? 0.3 : 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedProject(project)}
                className="group relative border-t border-white/10 py-10 cursor-pointer transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-transparent -z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12 px-4 md:px-0">
                    <div className="md:w-1/12 font-mono text-xs text-zinc-600 flex flex-col justify-between h-full"><span className="group-hover:text-cyan-500 transition-colors">/{project.id}</span></div>
                    <div className="md:w-4/12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-50 transition-colors"><HyperText text={project.title} triggering={isHovered} /></h2>
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900/50">{project.category}</span>
                            <span className="text-[10px] font-mono text-zinc-600">{project.year}</span>
                        </div>
                    </div>
                    <div className="md:w-4/12 text-zinc-400 leading-relaxed font-light text-sm">
                        <p className="mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                            {project.stack.map((tech, t) => (<span key={t} className="text-[10px] font-mono text-zinc-600 group-hover:text-cyan-200/70 transition-colors">// {tech}</span>))}
                        </div>
                    </div>
                    <div className="md:w-3/12 flex flex-col items-end justify-between gap-6">
                        <div className={`transition-all duration-300 transform ${isHovered ? 'translate-x-2 -translate-y-2 text-cyan-400' : 'text-zinc-700'}`}><ArrowUpRight size={28} /></div>
                        <div className="w-full max-w-[140px] text-right">
                             <div className="text-[10px] font-mono text-zinc-500 mb-2 flex justify-end gap-2"><span className={isHovered ? 'text-cyan-400 font-bold' : ''}>{project.metric}</span></div>
                             <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden"><motion.div className="h-full bg-cyan-500 box-shadow-[0_0_10px_rgba(6,182,212,0.8)]" initial={{ width: 0 }} animate={{ width: isHovered ? `${project.progress}%` : '0%' }} transition={{ duration: 0.8, ease: "circOut" }} /></div>
                        </div>
                    </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}