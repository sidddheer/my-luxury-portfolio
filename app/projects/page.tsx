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


'use client';

import { useState, useEffect, useRef, MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight, Database, ScanLine, FileText, Activity, Code2, Cpu } from 'lucide-react';
import Navbar from '@/components/Navbar';

// --- DATA: ALL 10 REAL PROJECTS ---
const projects = [
  { 
    id: "01",
    title: "SILENT MI RISK MODEL", 
    category: "AI HEALTHCARE", 
    year: "2025",
    description: "Clinical decision support system for Silent Myocardial Infarction in diabetics. Multimodal fusion of Clinical Data (MIMIC-IV) and ECG (1D-CNN) using Late Fusion architecture.",
    stack: ["PyTorch", "XGBoost", "SHAP", "1D-CNN"],
    metric: "AUC-PR: 0.72",
    progress: 72
  },
  { 
    id: "02",
    title: "ALPHAFOLD ARCHITECTURE", 
    category: "BIOINFORMATICS", 
    year: "2025",
    description: "Deep dive into AlphaFold's Evoformer and Invariant Point Attention (IPA). Analyzed attention maps to interpret binding sites and protein geometry.",
    stack: ["Deep Learning", "Research", "Proteomics"],
    metric: "Analysis: Deep",
    progress: 100
  },
  { 
    id: "03",
    title: "DEEPFAKE DETECTION", 
    category: "COMPUTER VISION", 
    year: "2025",
    description: "Forensic pipeline processing 40k+ frames. Fused ResNet50/EfficientNet with LSTM temporal modeling to detect manipulated media.",
    stack: ["OpenCV", "LSTM", "ResNet50", "FaceForensics++"],
    metric: "F1-Score: 90.2%",
    progress: 90
  },
  { 
    id: "04",
    title: "OCT-MNIST CLASSIFICATION", 
    category: "MEDICAL IMAGING", 
    year: "2025",
    description: "CNN classifier for 109k retinal images (CNV, DME, DRUSEN, NORMAL). Handled class imbalance with weighted loss functions.",
    stack: ["PyTorch", "CNN", "Medical AI"],
    metric: "Accuracy: 89.3%",
    progress: 89
  },
  { 
    id: "05",
    title: "PUCKSTATS ANALYTICS", 
    category: "SPORTS DATA", 
    year: "2025",
    description: "NHL analytics dashboard. Designed normalized SQL schema (12 tables) and optimized query plans to analyze power plays and defensive hits.",
    stack: ["PostgreSQL", "SQL Opt.", "Data Modeling"],
    metric: "Schema: 3NF",
    progress: 95
  },
  { 
    id: "06",
    title: "CRIME NEURAL NETWORK", 
    category: "SPATIAL AI", 
    year: "2025",
    description: "Analyzed 322k crime records in Buffalo, NY. Custom Neural Network outperformed Logistic Regression in capturing spatial-temporal patterns.",
    stack: ["PyTorch", "Scikit-Learn", "EDA", "Neural Nets"],
    metric: "Val Acc: 99.6%",
    progress: 99
  },
  { 
    id: "07",
    title: "LICENSE PLATE RECOGNITION", 
    category: "OCR / VISION", 
    year: "2024",
    description: "End-to-end ALPR system. Compared YOLOv11 vs YOLOv12 for detection, integrated Tesseract OCR for text extraction on real-world video.",
    stack: ["YOLOv11", "Tesseract", "OpenCV"],
    metric: "Detection: High",
    progress: 85
  },
  { 
    id: "08",
    title: "HYBRID CRIME PREDICTION", 
    category: "NLP / ML", 
    year: "2024",
    description: "Integrated historical crime data with real-time social media sentiment (20GB+). Used Playwright/PRAW for scraping and Random Forest/PCA for analysis.",
    stack: ["NLP", "Random Forest", "Playwright", "PRAW"],
    metric: "Accuracy: 87%",
    progress: 87
  },
  { 
    id: "09",
    title: "CUSTOMER CHURN ENGINE", 
    category: "MLOPS / BUSINESS", 
    year: "2024",
    description: "Full churn prediction pipeline. Containerized with Docker, API testing via Postman, and visualization via Tableau dashboard.",
    stack: ["Docker", "Postman", "Tableau", "XGBoost"],
    metric: "Accuracy: 95%",
    progress: 95
  },
  { 
    id: "10",
    title: "DIJKSTRA MAPS OPTIMIZER", 
    category: "ALGORITHMS", 
    year: "2024",
    description: "Route optimization algorithm minimizing toll costs. Implemented Priority Queues with Min-Heaps and Adjacency Lists for graph efficiency.",
    stack: ["Java", "Graph Theory", "Algorithms"],
    metric: "Cost: Minimized",
    progress: 100
  }
];

// --- COMPONENT: HYPER-TEXT DECODER ---
const HyperText = ({ text, triggering }: { text: string; triggering: boolean }) => {
  const [displayText, setDisplayText] = useState(text);
  const iterations = useRef(0);

  useEffect(() => {
    if (!triggering) {
      setDisplayText(text);
      return;
    }

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iterations.current) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iterations.current >= text.length) {
        clearInterval(interval);
      }

      iterations.current += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [triggering, text]);

  useEffect(() => {
    if(!triggering) iterations.current = 0;
  }, [triggering]);

  return <span className="font-mono">{displayText}</span>;
};

// --- COMPONENT: VERTICAL DATA STREAMS (Rain) ---
const DataStream = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => setIsClient(true), []);

    if (!isClient) return null;

    const lines = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 5,
        height: 10 + Math.random() * 30
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {lines.map((line) => (
                <motion.div
                    key={line.id}
                    className="absolute w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
                    style={{ left: line.left, height: `${line.height}%` }}
                    initial={{ top: '-100%', opacity: 0 }}
                    animate={{ top: '100%', opacity: [0, 1, 0] }}
                    transition={{
                        duration: line.duration,
                        repeat: Infinity,
                        delay: line.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

// --- MAIN PAGE ---
export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY }: MouseEvent) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  return (
    <main 
        className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 overflow-x-hidden relative"
        onMouseMove={handleMouseMove}
    >
      
      <Navbar />

      {/* --- LIVING BACKGROUND LAYER --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         {/* 1. Base Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
         
         {/* 2. Mouse Spotlight */}
         <motion.div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  800px circle at ${mouseX}px ${mouseY}px,
                  rgba(6, 182, 212, 0.08),
                  transparent 80%
                )
              `,
            }}
         />

         {/* 3. Data Rain */}
         <DataStream />

         {/* 4. Vignette */}
         <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 0%, #050505 100%)"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-24 max-w-7xl">
        
        {/* HEADER */}
        <div className="mb-20 border-b border-white/10 pb-12 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-4"
            >
               <Activity className="w-4 h-4 text-green-500 animate-pulse" />
               <span className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">Research Archive // v2.4</span>
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-6"
            >
                CASE<span className="text-zinc-800">.STUDIES</span>
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-zinc-400 max-w-2xl text-lg font-light leading-relaxed pl-1"
            >
                Advanced implementations in <span className="text-cyan-400 font-medium">Medical AI</span>, <span className="text-cyan-400 font-medium">Computer Vision</span>, and <span className="text-cyan-400 font-medium">Predictive Analytics</span>.
            </motion.p>
        </div>

        {/* THE INTERACTIVE LIST */}
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
                className="group relative border-t border-white/10 py-10 cursor-pointer transition-all duration-300"
              >
                {/* Row Highlight */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-transparent -z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
                />

                <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12 px-4 md:px-0">
                    
                    {/* COL 1: ID */}
                    <div className="md:w-1/12 font-mono text-xs text-zinc-600 flex flex-col justify-between h-full">
                        <span className="group-hover:text-cyan-500 transition-colors">/{project.id}</span>
                    </div>

                    {/* COL 2: TITLE */}
                    <div className="md:w-4/12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-50 transition-colors">
                            <HyperText text={project.title} triggering={isHovered} />
                        </h2>
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900/50">
                                {project.category}
                            </span>
                            <span className="text-[10px] font-mono text-zinc-600">
                                {project.year}
                            </span>
                        </div>
                    </div>

                    {/* COL 3: DESCRIPTION */}
                    <div className="md:w-4/12 text-zinc-400 leading-relaxed font-light text-sm">
                        <p className="mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                            {project.stack.map((tech, t) => (
                                <span key={t} className="text-[10px] font-mono text-zinc-600 group-hover:text-cyan-200/70 transition-colors">
                                    // {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* COL 4: METRICS & ACTION */}
                    <div className="md:w-3/12 flex flex-col items-end justify-between gap-6">
                        
                        <div className={`transition-all duration-300 transform ${isHovered ? 'translate-x-2 -translate-y-2 text-cyan-400' : 'text-zinc-700'}`}>
                            <FileText size={28} />
                        </div>

                        <div className="w-full max-w-[140px] text-right">
                             <div className="text-[10px] font-mono text-zinc-500 mb-2 flex justify-end gap-2">
                                <span className={isHovered ? 'text-cyan-400 font-bold' : ''}>{project.metric}</span>
                             </div>
                             {/* PROGRESS BAR */}
                             <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-cyan-500 box-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                                    initial={{ width: 0 }}
                                    animate={{ width: isHovered ? `${project.progress}%` : '0%' }}
                                    transition={{ duration: 0.8, ease: "circOut" }}
                                />
                             </div>
                        </div>

                    </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER MESSAGE */}
        <div className="mt-20 border-t border-white/10 pt-8 flex justify-between items-center text-zinc-600 font-mono text-xs">
             <div className="flex items-center gap-2"><ScanLine size={14} className="text-cyan-800"/> END OF RECORD</div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-900 rounded-full animate-ping"></div>
                SYSTEM IDLE
             </div>
        </div>

      </div>
    </main>
  );
}