// 'use client';

// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { Scan, Shield, Activity, Lock, Unlock } from 'lucide-react';

// // --- SUB-COMPONENT: REDACTED TEXT ---
// const RedactedText = ({ text, revealed }: { text: string, revealed: boolean }) => {
//   return (
//     <span className={`relative transition-all duration-300 ${revealed ? 'bg-transparent text-cyan-400' : 'bg-zinc-800 text-zinc-800 select-none hover:cursor-help'}`}>
//       <span className={revealed ? '' : 'opacity-0'}>{text}</span>
//       {!revealed && (
//          <span className="absolute inset-0 flex items-center justify-center text-[10px] text-zinc-600 font-mono tracking-widest opacity-50">
//             [REDACTED]
//          </span>
//       )}
//     </span>
//   );
// };

// export default function AboutDossier() {
//   const [isDecrypted, setIsDecrypted] = useState(false);

//   // Skill "Diagnostics" Data
//   const diagnostics = [
//     { label: 'PYTHON CORE', level: 98, color: 'bg-emerald-500' },
//     { label: 'SQL QUERY ENGINE', level: 95, color: 'bg-blue-500' },
//     { label: 'REACT ARCHITECTURE', level: 88, color: 'bg-cyan-500' },
//     { label: 'DATA VISUALIZATION', level: 92, color: 'bg-purple-500' },
//   ];

//   return (
//     <section className="min-h-screen bg-zinc-950 text-zinc-300 font-mono p-6 md:p-24 flex items-center justify-center relative overflow-hidden">
      
//       {/* Background Grid */}
//       <div className="absolute inset-0 opacity-10" 
//            style={{ backgroundImage: 'linear-gradient(zinc-800 1px, transparent 1px), linear-gradient(90deg, zinc-800 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
//       </div>

//       <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 z-10">
        
//         {/* LEFT COLUMN: VISUAL ID */}
//         <div className="flex flex-col items-center justify-center">
//             <motion.div 
//                 whileHover={{ rotateY: 15, rotateX: -5 }}
//                 className="relative w-72 h-96 bg-black border border-zinc-700 p-4 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] group perspective-1000"
//             >
//                 {/* Holographic Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none z-20 group-hover:opacity-100 transition-opacity opacity-50"></div>
                
//                 {/* Scanner Line */}
//                 <motion.div 
//                     animate={{ top: ['0%', '100%', '0%'] }}
//                     transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//                     className="absolute left-0 w-full h-[2px] bg-cyan-400 z-30 shadow-[0_0_15px_rgba(34,211,238,1)] opacity-70"
//                 />

//                 {/* The "Photo" Placeholder - Replace BG color with your image */}
//                 <div className="w-full h-2/3 bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden mb-4 grayscale contrast-125">
//                     <Scan className="w-12 h-12 text-zinc-700" />
//                     <div className="absolute bottom-2 right-2 text-[10px] text-cyan-500 animate-pulse">ID_VERIFIED</div>
//                 </div>

//                 {/* ID Details */}
//                 <div className="space-y-2 text-xs">
//                     <div className="flex justify-between border-b border-zinc-800 pb-1">
//                         <span className="text-zinc-500">SUBJECT:</span>
//                         <span className="text-white font-bold tracking-widest">DATA_MASTER</span>
//                     </div>
//                     <div className="flex justify-between border-b border-zinc-800 pb-1">
//                         <span className="text-zinc-500">CLEARANCE:</span>
//                         <span className="text-red-500 font-bold">LEVEL 5 (OMNI)</span>
//                     </div>
//                     <div className="flex justify-between">
//                         <span className="text-zinc-500">STATUS:</span>
//                         <span className="text-emerald-500 animate-pulse">ONLINE</span>
//                     </div>
//                 </div>
//             </motion.div>
//         </div>

//         {/* RIGHT COLUMN: THE DOSSIER */}
//         <div className="flex flex-col justify-center space-y-8">
            
//             {/* Header */}
//             <div className="border-l-2 border-cyan-500 pl-6">
//                 <h2 className="text-4xl font-bold text-white mb-2 tracking-tighter">PERSONNEL FILE</h2>
//                 <div className="flex items-center gap-2 text-xs text-cyan-500">
//                     <Shield className="w-4 h-4" />
//                     <span>ENCRYPTED CONNECTION ESTABLISHED</span>
//                 </div>
//             </div>

//             {/* The Bio with Redaction */}
//             <div className="bg-black/40 p-6 border border-zinc-800 rounded-sm relative">
//                 <button 
//                     onClick={() => setIsDecrypted(!isDecrypted)}
//                     className="absolute top-4 right-4 text-xs flex items-center gap-2 hover:text-cyan-400 transition-colors"
//                 >
//                     {isDecrypted ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
//                     {isDecrypted ? "ENCRYPT" : "DECRYPT"}
//                 </button>

//                 <p className="leading-relaxed text-sm md:text-base">
//                     {/* FIXED: Replaced >> with &gt;&gt; */}
//                     <span className="text-zinc-500 block mb-4 text-xs uppercase tracking-widest">&gt;&gt; Beginning Transmission...</span>
//                     Subject identified as a high-level data architect. 
//                     Origin: <RedactedText text="Buffalo, NY" revealed={isDecrypted} />. 
//                     Primary objective involves the <RedactedText text="systematic deconstruction" revealed={isDecrypted} /> of complex datasets into actionable intelligence.
//                     <br/><br/>
//                     Known to operate during <RedactedText text="non-standard hours" revealed={isDecrypted} /> to maximize server load efficiency. 
//                     Specializes in building infrastructure that <RedactedText text="scales autonomously" revealed={isDecrypted} /> without human intervention.
//                 </p>
//             </div>

//             {/* System Diagnostics (Skills) */}
//             <div className="space-y-4">
//                 <div className="text-xs uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
//                     <Activity className="w-4 h-4" /> System_Resources_Check
//                 </div>
//                 {diagnostics.map((skill, index) => (
//                     <div key={index} className="group">
//                         <div className="flex justify-between text-xs mb-1">
//                             <span className="group-hover:text-white transition-colors">{skill.label}</span>
//                             <span className="text-zinc-500">{skill.level}%</span>
//                         </div>
//                         <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
//                             <motion.div 
//                                 initial={{ width: 0 }}
//                                 whileInView={{ width: `${skill.level}%` }}
//                                 transition={{ duration: 1.5, delay: index * 0.2, ease: "circOut" }}
//                                 className={`h-full ${skill.color} shadow-[0_0_10px_currentColor]`}
//                             />
//                         </div>
//                     </div>
//                 ))}
//             </div>

//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client';

// import { motion } from 'framer-motion';
// import { Cpu, Globe, Zap, Database, Code, Server, ShieldCheck, Terminal } from 'lucide-react';
// import Navbar from '@/components/Navbar'; // Ensure this path matches your setup

// export default function AboutPage() {
//   const skills = [
//     { name: 'NEXT.JS / REACT', level: 98, icon: <Code className="w-4 h-4" /> },
//     { name: 'TYPESCRIPT', level: 95, icon: <Terminal className="w-4 h-4" /> },
//     { name: 'CLOUD INFRA (AWS)', level: 88, icon: <Globe className="w-4 h-4" /> },
//     { name: 'DATA ARCHITECTURE', level: 92, icon: <Database className="w-4 h-4" /> },
//     { name: 'AI / ML INTEGRATION', level: 85, icon: <Cpu className="w-4 h-4" /> },
//     { name: 'BACKEND SYSTEMS', level: 90, icon: <Server className="w-4 h-4" /> },
//   ];

//   return (
//     <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 overflow-x-hidden">
//       {/* Background Grid - consistent with your theme */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
//          <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
//       </div>

//       <Navbar />

//       <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        
//         {/* HEADER SECTION */}
//         <div className="mb-16 border-b border-white/10 pb-8">
//             <motion.div 
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="flex items-center gap-3 text-cyan-500 mb-4"
//             >
//                 <ShieldCheck className="w-5 h-5" />
//                 <span className="font-mono text-xs tracking-[0.3em]">PERSONNEL FILE: SID.DEV</span>
//             </motion.div>
            
//             <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
//                 The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Architect</span>
//             </h1>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
//             {/* LEFT COLUMN: THE PROFILE & BIO */}
//             <div className="lg:col-span-7 space-y-12">
                
//                 {/* 1. The "Hook" - High level intro */}
//                 <motion.div 
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                     className="prose prose-invert max-w-none"
//                 >
//                     <p className="text-xl md:text-2xl leading-relaxed text-zinc-300 font-light">
//                         <span className="text-cyan-400 font-bold">I don't just write code. I build digital engines.</span><br/>
//                         In a world of chaotic data, I provide structure. Specializing in high-performance web architecture and data visualization, I turn complex problems into elegant, scalable solutions.
//                     </p>
//                 </motion.div>

//                 {/* 2. The Detailed "Log" */}
//                 <motion.div 
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 }}
//                     className="bg-zinc-900/40 border border-white/5 p-8 rounded-lg backdrop-blur-sm"
//                 >
//                     <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-2">
//                         <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
//                         <h3 className="font-mono text-sm text-zinc-400 tracking-widest uppercase">MISSION_STATEMENT</h3>
//                     </div>
//                     <p className="text-zinc-400 leading-7 mb-6">
//                         My philosophy is simple: **Performance is paramount.** Whether I'm designing a 3D interactive frontend or a heavy-duty backend API, every line of code is optimized for speed and stability.
//                     </p>
//                     <p className="text-zinc-400 leading-7">
//                         I operate at the intersection of **Design** and **Engineering**. I speak the language of pixels and the logic of algorithms, ensuring that the final product isn't just functional—it's visceral.
//                     </p>
//                 </motion.div>
//             </div>

//             {/* RIGHT COLUMN: THE "TECH SPECS" */}
//             <div className="lg:col-span-5 space-y-8">
                
//                 {/* 1. Skill Matrix (Progress Bars) */}
//                 <motion.div 
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.4 }}
//                     className="bg-zinc-900/80 border border-white/10 p-6 rounded-xl relative overflow-hidden"
//                 >
//                     {/* Decorative Scanner Line */}
//                     <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.8)] animate-scan"></div>

//                     <h3 className="font-mono text-xs text-zinc-500 tracking-widest mb-6 uppercase flex justify-between">
//                         <span>Core_Modules</span>
//                         <span>[ONLINE]</span>
//                     </h3>

//                     <div className="space-y-6">
//                         {skills.map((skill, index) => (
//                             <div key={index} className="space-y-2">
//                                 <div className="flex justify-between items-center text-xs font-mono">
//                                     <span className="flex items-center gap-2 text-zinc-300">
//                                         {skill.icon} {skill.name}
//                                     </span>
//                                     <span className="text-cyan-500">{skill.level}%</span>
//                                 </div>
//                                 <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
//                                     <motion.div 
//                                         initial={{ width: 0 }}
//                                         whileInView={{ width: `${skill.level}%` }}
//                                         transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
//                                         className="h-full bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
//                                     ></motion.div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </motion.div>

//                 {/* 2. "Status" Box */}
//                 <div className="grid grid-cols-2 gap-4">
//                     <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg flex flex-col justify-center items-center text-center">
//                         <Zap className="w-6 h-6 text-yellow-400 mb-2" />
//                         <span className="text-2xl font-bold text-white">4+</span>
//                         <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Years Exp.</span>
//                     </div>
//                     <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg flex flex-col justify-center items-center text-center">
//                         <Globe className="w-6 h-6 text-blue-400 mb-2" />
//                         <span className="text-2xl font-bold text-white">100%</span>
//                         <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Uptime</span>
//                     </div>
//                 </div>

//             </div>
//         </div>
//       </div>
//     </main>
//   );
// }



// 'use client';

// import { motion } from 'framer-motion';
// import { Github, Twitter, Linkedin, MapPin, Cpu, Globe, ArrowUpRight, Code2, Terminal } from 'lucide-react';
// import Navbar from '@/components/Navbar';
// import Link from 'next/link';

// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      
//       {/* Background Ambience */}
//       <div className="fixed inset-0 pointer-events-none">
//           <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-cyan-900/10 blur-[120px] rounded-full"></div>
//           <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full"></div>
//       </div>

//       <Navbar />

//       <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 pb-20 max-w-6xl">
        
//         {/* Page Title */}
//         <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-12"
//         >
//             <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
//                 ABOUT <span className="text-zinc-600">ME</span>
//             </h1>
//             <p className="text-xl text-zinc-400 max-w-2xl">
//                 I build systems that live on the web. A blend of creative motion and strict engineering.
//             </p>
//         </motion.div>

//         {/* THE BENTO GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
            
//             {/* 1. MAIN BIO (Span 2x2) */}
//             <motion.div 
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="md:col-span-2 md:row-span-2 bg-zinc-900/50 border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-colors group relative overflow-hidden backdrop-blur-md"
//             >
//                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
//                     <Code2 size={120} />
//                 </div>
//                 <div>
//                     <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6">
//                         <span className="text-black font-bold font-mono">SD</span>
//                     </div>
//                     <h3 className="text-2xl font-bold mb-4">Hello, I'm Sid.</h3>
//                     <p className="text-zinc-400 leading-relaxed">
//                         I am a Data Architect and Full Stack Engineer driven by performance and design. I don't just write code; I architect digital experiences that feel alive. My work bridges the gap between raw data and visual storytelling.
//                     </p>
//                 </div>
//                 <div className="mt-6 flex gap-4">
//                     <div className="px-4 py-2 bg-white/5 rounded-full text-xs font-mono border border-white/10">Full Stack</div>
//                     <div className="px-4 py-2 bg-white/5 rounded-full text-xs font-mono border border-white/10">3D Web</div>
//                 </div>
//             </motion.div>

//             {/* 2. LOCATION (Span 1x1) */}
//             <motion.div 
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//                 className="bg-zinc-900/50 border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center hover:bg-zinc-800/50 transition-colors backdrop-blur-md"
//             >
//                 <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 mb-4">
//                     <MapPin size={24} />
//                 </div>
//                 <h4 className="font-bold text-lg">Based in</h4>
//                 <p className="text-zinc-500 text-sm font-mono mt-1">Buffalo, NY</p>
//                 <p className="text-zinc-600 text-xs mt-2">UTC-5</p>
//             </motion.div>

//             {/* 3. SOCIALS (Span 1x1) */}
//             <motion.div 
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 className="bg-zinc-900/50 border border-white/10 rounded-3xl p-6 flex flex-col justify-center gap-4 backdrop-blur-md"
//             >
//                 <Link href="https://github.com" target="_blank" className="flex items-center justify-between group">
//                     <div className="flex items-center gap-3">
//                         <div className="p-2 bg-white/5 rounded-lg"><Github size={18} /></div>
//                         <span className="font-mono text-sm text-zinc-400 group-hover:text-white transition-colors">Github</span>
//                     </div>
//                     <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-white transition-colors"/>
//                 </Link>
//                 <Link href="https://twitter.com" target="_blank" className="flex items-center justify-between group">
//                     <div className="flex items-center gap-3">
//                         <div className="p-2 bg-white/5 rounded-lg"><Twitter size={18} /></div>
//                         <span className="font-mono text-sm text-zinc-400 group-hover:text-white transition-colors">Twitter</span>
//                     </div>
//                     <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-white transition-colors"/>
//                 </Link>
//                 <Link href="https://linkedin.com" target="_blank" className="flex items-center justify-between group">
//                     <div className="flex items-center gap-3">
//                         <div className="p-2 bg-white/5 rounded-lg"><Linkedin size={18} /></div>
//                         <span className="font-mono text-sm text-zinc-400 group-hover:text-white transition-colors">LinkedIn</span>
//                     </div>
//                     <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-white transition-colors"/>
//                 </Link>
//             </motion.div>

//             {/* 4. TECH STACK (Span 1x2 - Tall) */}
//             <motion.div 
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className="md:col-span-1 md:row-span-2 bg-zinc-900/50 border border-white/10 rounded-3xl p-6 relative overflow-hidden backdrop-blur-md group"
//             >
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10 pointer-events-none"></div>
                
//                 <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
//                     <Terminal size={16} className="text-cyan-500"/>
//                     The Stack
//                 </h3>
                
//                 <div className="space-y-4">
//                     {[
//                         { name: "Next.js 14", type: "Framework" },
//                         { name: "TypeScript", type: "Language" },
//                         { name: "Tailwind", type: "Styling" },
//                         { name: "React Three", type: "3D / WebGL" },
//                         { name: "Node.js", type: "Backend" },
//                         { name: "PostgreSQL", type: "Database" },
//                         { name: "AWS", type: "Cloud" },
//                         { name: "Framer Motion", type: "Animation" },
//                     ].map((tech, i) => (
//                         <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0">
//                             <span className="text-sm font-mono text-zinc-300">{tech.name}</span>
//                             <span className="text-[10px] text-zinc-600 uppercase">{tech.type}</span>
//                         </div>
//                     ))}
//                 </div>
//             </motion.div>

//             {/* 5. CURRENT STATUS (Span 2x1) */}
//             <motion.div 
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//                 className="md:col-span-2 bg-gradient-to-r from-zinc-900 to-zinc-800 border border-white/10 rounded-3xl p-8 flex items-center justify-between relative overflow-hidden group"
//             >
//                 <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
//                 <div className="relative z-10">
//                     <div className="flex items-center gap-2 mb-2">
//                         <span className="relative flex h-3 w-3">
//                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                           <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//                         </span>
//                         <span className="text-xs font-mono text-green-400 tracking-widest uppercase">Available for work</span>
//                     </div>
//                     <h3 className="text-2xl md:text-3xl font-bold">Let's build something.</h3>
//                 </div>

//                 <Link href="/contact" className="relative z-10 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform">
//                     Start a Project
//                 </Link>
//             </motion.div>

//             {/* 6. STATS (Span 1x1) */}
//             <motion.div 
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="bg-zinc-900/50 border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center backdrop-blur-md"
//             >
//                 <Globe size={32} className="text-zinc-600 mb-2" />
//                 <span className="text-4xl font-bold text-white">4+</span>
//                 <span className="text-xs text-zinc-500 font-mono uppercase mt-1">Years Experience</span>
//             </motion.div>

//         </div>
//       </div>
//     </main>
//   );
// }


// 'use client';

// import { motion } from 'framer-motion';
// import { Cpu, Database, Layout, Lock, Terminal, Zap, Activity } from 'lucide-react';
// import Navbar from '@/components/Navbar';

// export default function AboutPage() {
//   // Animation variants for the "data stream" effect
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, x: -20 },
//     show: { opacity: 1, x: 0 }
//   };

//   return (
//     <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 overflow-x-hidden font-sans">
      
//       {/* Background: Technical Grid */}
//       <div className="fixed inset-0 pointer-events-none">
//           {/* Subtle grid pattern */}
//           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
//           {/* Vignette to focus center */}
//           <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 0%, black 100%)"></div>
//       </div>

//       <Navbar />

//       <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 max-w-5xl">
        
//         {/* HEADER: IDENTITY */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="border-b border-white/20 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
//         >
//           <div>
//             <div className="flex items-center gap-2 text-cyan-500 mb-2 font-mono text-xs tracking-widest uppercase">
//               <Activity className="w-4 h-4 animate-pulse" />
//               <span>System Identity Verified</span>
//             </div>
//             <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
//               SID<span className="text-zinc-600">.DEV</span>
//             </h1>
//           </div>
//           <div className="text-right">
//              <div className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-1">Class</div>
//              <div className="text-xl font-bold text-cyan-400">DATA ARCHITECT</div>
//           </div>
//         </motion.div>

//         <motion.div 
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="grid grid-cols-1 lg:grid-cols-3 gap-12"
//         >
            
//             {/* COLUMN 1: DIRECTIVE (BIO) */}
//             <div className="lg:col-span-2 space-y-8">
              
//               <motion.div variants={item} className="group relative">
//                 {/* Technical Bracket Decor */}
//                 <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                
//                 <h2 className="text-sm font-mono text-zinc-500 mb-4 uppercase tracking-[0.2em] flex items-center gap-2">
//                   <Terminal className="w-4 h-4 text-cyan-500" />
//                   Primary Directive
//                 </h2>
                
//                 <div className="text-xl md:text-2xl leading-relaxed font-light text-zinc-200">
//                   <p className="mb-6">
//                     I do not simply write code. <strong className="text-white font-bold">I engineer digital ecosystems.</strong>
//                   </p>
//                   <p className="text-zinc-400 text-lg">
//                     My work operates at the intersection of heavy data architecture and fluid user experience. While others focus on components, I focus on the <span className="text-cyan-400 border-b border-cyan-500/30">flow of information</span>. I build systems that are resilient, scalable, and deceptively simple.
//                   </p>
//                 </div>
//               </motion.div>

//               {/* STATS ROW */}
//               <motion.div variants={item} className="grid grid-cols-3 gap-4 py-8 border-y border-white/5">
//                  <div>
//                     <div className="text-3xl font-bold text-white">4+</div>
//                     <div className="text-[10px] font-mono text-zinc-500 uppercase mt-1">Years Active</div>
//                  </div>
//                  <div>
//                     <div className="text-3xl font-bold text-white">NY</div>
//                     <div className="text-[10px] font-mono text-zinc-500 uppercase mt-1">Base of Ops</div>
//                  </div>
//                  <div>
//                     <div className="text-3xl font-bold text-cyan-400">100%</div>
//                     <div className="text-[10px] font-mono text-zinc-500 uppercase mt-1">Commitment</div>
//                  </div>
//               </motion.div>

//             </div>

//             {/* COLUMN 2: INFRASTRUCTURE (TECH STACK) */}
//             <div className="space-y-8">
               
//                <motion.div variants={item} className="bg-zinc-900/30 border border-white/10 p-6 rounded-sm backdrop-blur-sm relative overflow-hidden">
//                   {/* Glowing Corner */}
//                   <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/10 blur-xl rounded-full"></div>

//                   <h3 className="text-sm font-mono text-zinc-500 mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
//                     <Cpu className="w-4 h-4 text-cyan-500" />
//                     Infrastructure
//                   </h3>

//                   <div className="space-y-6">
//                     {/* Tech Category 1 */}
//                     <div>
//                       <div className="text-xs font-bold text-white mb-2 uppercase tracking-wider border-b border-white/10 pb-1 inline-block">Frontend Core</div>
//                       <div className="flex flex-wrap gap-2">
//                         <span className="px-2 py-1 bg-white/5 text-cyan-100 text-xs font-mono border border-white/10">Next.js 14</span>
//                         <span className="px-2 py-1 bg-white/5 text-cyan-100 text-xs font-mono border border-white/10">React</span>
//                         <span className="px-2 py-1 bg-white/5 text-cyan-100 text-xs font-mono border border-white/10">Tailwind</span>
//                         <span className="px-2 py-1 bg-white/5 text-cyan-100 text-xs font-mono border border-white/10">Framer Motion</span>
//                       </div>
//                     </div>

//                     {/* Tech Category 2 */}
//                     <div>
//                       <div className="text-xs font-bold text-white mb-2 uppercase tracking-wider border-b border-white/10 pb-1 inline-block">Backend / Data</div>
//                       <div className="flex flex-wrap gap-2">
//                         <span className="px-2 py-1 bg-white/5 text-blue-100 text-xs font-mono border border-white/10">Node.js</span>
//                         <span className="px-2 py-1 bg-white/5 text-blue-100 text-xs font-mono border border-white/10">PostgreSQL</span>
//                         <span className="px-2 py-1 bg-white/5 text-blue-100 text-xs font-mono border border-white/10">Supabase</span>
//                       </div>
//                     </div>

//                     {/* Tech Category 3 */}
//                     <div>
//                       <div className="text-xs font-bold text-white mb-2 uppercase tracking-wider border-b border-white/10 pb-1 inline-block">Visuals / 3D</div>
//                       <div className="flex flex-wrap gap-2">
//                         <span className="px-2 py-1 bg-white/5 text-purple-100 text-xs font-mono border border-white/10">Three.js</span>
//                         <span className="px-2 py-1 bg-white/5 text-purple-100 text-xs font-mono border border-white/10">React Three Fiber</span>
//                         <span className="px-2 py-1 bg-white/5 text-purple-100 text-xs font-mono border border-white/10">WebGL</span>
//                       </div>
//                     </div>
//                   </div>
//                </motion.div>

//                {/* Philosophy Box */}
//                <motion.div variants={item} className="border-l-2 border-cyan-500 pl-4 py-2">
//                  <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">Operational Philosophy</h3>
//                  <p className="text-sm text-zinc-300 italic">
//                    "Complexity is failure. Simplicity is the ultimate sophistication."
//                  </p>
//                </motion.div>

//             </div>

//         </motion.div>

//         {/* BOTTOM DECORATION: SCANNER LINE */}
//         <div className="mt-20 border-t border-white/10 pt-4 flex justify-between items-center opacity-50">
//             <div className="text-[10px] font-mono text-zinc-600">SYS_ID: 8492-AX</div>
//             <div className="h-1 w-20 bg-zinc-800 rounded-full overflow-hidden">
//                 <div className="h-full w-1/2 bg-cyan-900 animate-pulse"></div>
//             </div>
//             <div className="text-[10px] font-mono text-zinc-600">SECURE CONNECTION</div>
//         </div>

//       </div>
//     </main>
//   );
// }


// 'use client';

// import { motion } from 'framer-motion';
// import { Cpu, Database, GraduationCap, Code2, Terminal, Zap, Layers, Globe, Shield } from 'lucide-react';
// import Navbar from '@/components/Navbar';

// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 font-mono overflow-x-hidden">
      
//       {/* --- BACKGROUND LAYERS --- */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//           {/* Cyberpunk Grid */}
//           <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
//           {/* Radial Vignette */}
//           <div className="absolute inset-0 bg-radial-gradient(circle at 50% 50%, transparent 0%, black 85%)"></div>
//           {/* Moving Scanline */}
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-[200%] w-full animate-scanline"></div>
//       </div>

//       <Navbar />

//       <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 pb-24 max-w-7xl">
        
//         {/* --- HEADER HUD --- */}
//         <div className="flex justify-between items-end border-b border-cyan-900/50 pb-4 mb-12">
//             <div>
//                 <motion.div 
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     className="flex items-center gap-2 text-cyan-500 mb-2 text-xs tracking-[0.3em] uppercase"
//                 >
//                     <Shield className="w-4 h-4" />
//                     <span>Secure Database // Level 5</span>
//                 </motion.div>
//                 <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-800">
//                     SID.DEV
//                 </h1>
//             </div>
//             <div className="hidden md:block text-right">
//                 <div className="text-[10px] text-cyan-700 uppercase tracking-widest">System Status</div>
//                 <div className="text-xl font-bold text-cyan-400 flex items-center justify-end gap-2">
//                     <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
//                     ONLINE
//                 </div>
//             </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
//             {/* --- COLUMN 1: THE BIO (LOG ENTRY) --- */}
//             <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="lg:col-span-8 space-y-8"
//             >
//                 {/* BIO CARD */}
//                 <div className="relative bg-zinc-900/40 border border-cyan-500/20 p-8 rounded-lg backdrop-blur-sm group overflow-hidden">
//                     {/* Decorative Corner */}
//                     <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-500/50 rounded-tr-xl"></div>
                    
//                     <h2 className="text-cyan-400 font-bold text-xl mb-6 flex items-center gap-3">
//                         <Terminal className="w-5 h-5" />
//                         MISSION_PROFILE
//                     </h2>
                    
//                     <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed space-y-6">
//                         <p className="text-lg">
//                             <span className="text-white font-bold">I am an architect of digital chaos.</span> My mission is to take complex, unstructured data and forge it into elegant, high-performance systems.
//                         </p>
//                         <p>
//                             This isn't just coding; it's engineering. I specialize in building scalable web applications that feel instantaneous. From the immersive front-end interactions to the heavy-lifting of backend logic, I ensure every byte serves a purpose.
//                         </p>
//                         <p className="border-l-2 border-cyan-500/50 pl-4 text-cyan-100/80 italic">
//                             "A user interface is only as good as the architecture that supports it. I build the engine, not just the paint job."
//                         </p>
//                     </div>
//                 </div>

//                 {/* EDUCATION CARD (UB HIGHLIGHT) */}
//                 <motion.div 
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.3 }}
//                     className="relative bg-gradient-to-r from-zinc-900/60 to-black border border-white/10 p-1"
//                 >
//                     <div className="absolute inset-0 bg-cyan-500/5 animate-pulse"></div>
//                     <div className="relative p-8 flex flex-col md:flex-row gap-8 items-start">
//                         <div className="p-4 bg-cyan-950/30 border border-cyan-500/30 rounded-lg">
//                             <GraduationCap className="w-12 h-12 text-cyan-400" />
//                         </div>
//                         <div>
//                             <div className="flex items-center gap-3 mb-2">
//                                 <h3 className="text-2xl font-bold text-white">University at Buffalo</h3>
//                                 <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-[10px] border border-cyan-500/30 rounded tracking-widest uppercase">
//                                     Master's Degree
//                                 </span>
//                             </div>
//                             <p className="text-zinc-400 text-sm mb-4 font-mono">MS in Computer Science & Engineering</p>
                            
//                             <p className="text-zinc-300 leading-relaxed mb-4">
//                                 My time at UB was a rigorous deep-dive into the theoretical and practical limits of computing. It wasn't just about passing classes; it was about mastering <strong>Distributed Systems</strong>, <strong>Algorithm Optimization</strong>, and <strong>Cloud Architecture</strong>.
//                             </p>
                            
//                             <div className="grid grid-cols-2 gap-4">
//                                 <div className="text-xs text-cyan-500/80 font-mono flex items-center gap-2">
//                                     <span className="w-1 h-1 bg-cyan-500"></span>
//                                     Advanced Data Structures
//                                 </div>
//                                 <div className="text-xs text-cyan-500/80 font-mono flex items-center gap-2">
//                                     <span className="w-1 h-1 bg-cyan-500"></span>
//                                     Machine Learning Integrations
//                                 </div>
//                                 <div className="text-xs text-cyan-500/80 font-mono flex items-center gap-2">
//                                     <span className="w-1 h-1 bg-cyan-500"></span>
//                                     Scalable System Design
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>

//             </motion.div>

//             {/* --- COLUMN 2: THE TECH ARSENAL --- */}
//             <motion.div 
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.5 }}
//                 className="lg:col-span-4 space-y-6"
//             >
//                 {/* Tech Header */}
//                 <div className="flex items-center gap-2 text-zinc-500 border-b border-white/10 pb-2">
//                     <Zap className="w-4 h-4" />
//                     <span className="text-xs uppercase tracking-widest">Arsenal // Tech Stack</span>
//                 </div>

//                 {/* STACK ITEMS */}
//                 <div className="space-y-4">
//                     {[
//                         { name: "Next.js 14", icon: <Globe size={16}/>, level: "MASTERY" },
//                         { name: "React Three Fiber", icon: <Layers size={16}/>, level: "ADVANCED" },
//                         { name: "TypeScript", icon: <Code2 size={16}/>, level: "NATIVE" },
//                         { name: "AWS Cloud", icon: <Database size={16}/>, level: "OPERATIONAL" },
//                         { name: "Node.js", icon: <Cpu size={16}/>, level: "EXPERT" },
//                     ].map((tech, i) => (
//                         <div key={i} className="group relative bg-zinc-900/30 border border-white/5 p-4 hover:border-cyan-500/50 hover:bg-cyan-950/10 transition-all duration-300">
//                             <div className="flex justify-between items-center relative z-10">
//                                 <div className="flex items-center gap-3">
//                                     <div className="text-cyan-600 group-hover:text-cyan-400 transition-colors">
//                                         {tech.icon}
//                                     </div>
//                                     <span className="font-bold text-sm text-zinc-300 group-hover:text-white">{tech.name}</span>
//                                 </div>
//                                 <span className="text-[10px] font-mono text-cyan-800 group-hover:text-cyan-400 transition-colors">
//                                     {tech.level}
//                                 </span>
//                             </div>
//                             {/* Scanning bar effect on hover */}
//                             <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-500 group-hover:w-full transition-all duration-500"></div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* DECORATIVE TERMINAL BLOCK */}
//                 <div className="mt-8 p-4 bg-black border border-zinc-800 font-mono text-[10px] text-green-500/80 leading-loose opacity-70">
//                     <p>{`> INITIATING PROTOCOL...`}</p>
//                     <p>{`> SCANNING SECTOR: BUFFALO, NY`}</p>
//                     <p>{`> DECRYPTING MASTER'S THESIS...`}</p>
//                     <p>{`> OPTIMIZATION: 100%`}</p>
//                     <p className="animate-pulse">{`> AWAITING INPUT..._`}</p>
//                 </div>

//             </motion.div>

//         </div>
//       </div>
//     </main>
//   );
// }



// 'use client';

// import { motion } from 'framer-motion';
// import { 
//   BarChart3, 
//   BrainCircuit, 
//   Database, 
//   GraduationCap, 
//   MapPin, 
//   Search, 
//   TrendingUp, 
//   Network,
//   Binary,
//   Cpu
// } from 'lucide-react';
// import Navbar from '@/components/Navbar';

// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      
//       {/* --- LIVING BACKGROUND --- */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//           {/* Cyberpunk Grid */}
//           <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
//           {/* Glowing Orbs (The "Neural Nodes") */}
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
//           {/* Vignette */}
//           <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 0%, black 90%)"></div>
//       </div>

//       <Navbar />

//       <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 pb-24 max-w-7xl">
        
//         {/* --- HEADER: ANALYTICS HUD --- */}
//         <motion.div 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex flex-col md:flex-row justify-between items-end border-b border-cyan-800/30 pb-6 mb-12 gap-6"
//         >
//             <div>
//                 <div className="flex items-center gap-2 text-cyan-400 mb-2 text-xs font-mono tracking-[0.2em] uppercase">
//                     <Network className="w-4 h-4" />
//                     <span>Neural Link Established</span>
//                 </div>
//                 <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
//                     SID<span className="text-cyan-500">.DATA</span>
//                 </h1>
//                 <p className="text-zinc-400 mt-2 text-lg md:text-xl max-w-2xl">
//                     Data Scientist | Business Analyst | Predictive Strategist
//                 </p>
//             </div>
            
//             {/* Location Badge */}
//             <div className="flex items-center gap-3 bg-zinc-900/50 border border-cyan-500/30 px-4 py-2 rounded-full backdrop-blur-md">
//                 <div className="relative">
//                     <span className="absolute w-full h-full bg-cyan-500 rounded-full animate-ping opacity-75"></span>
//                     <span className="relative block w-2 h-2 bg-cyan-500 rounded-full"></span>
//                 </div>
//                 <div className="flex flex-col">
//                     <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Current Location</span>
//                     <span className="text-sm font-bold text-white flex items-center gap-1">
//                         <MapPin size={12} className="text-cyan-400"/> Irving, TX
//                     </span>
//                 </div>
//             </div>
//         </motion.div>


//         {/* --- MAIN DASHBOARD GRID --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            
//             {/* 1. THE PROFILE NODE (Large Card) */}
//             <motion.div 
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="lg:col-span-8 bg-zinc-900/40 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/40 transition-colors"
//             >
//                 {/* Scanning Light Effect */}
//                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
//                 <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
//                     <Search className="text-cyan-400" />
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">The Analyst's Eye</span>
//                 </h2>
                
//                 <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
//                     <p>
//                         In the age of information, data is noise. <strong className="text-white">I create the signal.</strong>
//                     </p>
//                     <p>
//                         I am a Data Scientist and Business Analyst specialized in transforming raw, unstructured datasets into actionable strategic power. My work isn't just about building models; it's about seeing the story hidden in the numbers.
//                     </p>
//                     <p>
//                         From <span className="text-cyan-400">Predictive Machine Learning</span> to <span className="text-purple-400">Executive Dashboards</span>, I bridge the gap between technical complexity and business ROI.
//                     </p>
//                 </div>

//                 {/* Animated Stat Row */}
//                 <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
//                     <div>
//                         <div className="text-3xl font-bold text-white">MS</div>
//                         <div className="text-xs text-zinc-500 font-mono uppercase">Data Science</div>
//                     </div>
//                     <div>
//                         <div className="text-3xl font-bold text-cyan-400">SQL</div>
//                         <div className="text-xs text-zinc-500 font-mono uppercase">Native Speaker</div>
//                     </div>
//                     <div>
//                         <div className="text-3xl font-bold text-purple-400">BI</div>
//                         <div className="text-xs text-zinc-500 font-mono uppercase">Visualisation</div>
//                     </div>
//                 </div>
//             </motion.div>

//             {/* 2. THE EDUCATION CORE (UB) */}
//             <motion.div 
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="lg:col-span-4 bg-gradient-to-b from-zinc-900 to-black border border-cyan-900/50 rounded-2xl p-6 relative overflow-hidden"
//             >
//                 {/* Background Pattern */}
//                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
//                 <div className="relative z-10">
//                     <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 border border-blue-500/30">
//                         <GraduationCap className="text-blue-400" size={24} />
//                     </div>
                    
//                     <h3 className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">Academic Core</h3>
//                     <h2 className="text-xl font-bold text-white mb-1">University at Buffalo</h2>
//                     <p className="text-sm text-zinc-400 mb-6">MS in Data Science</p>

//                     <ul className="space-y-3">
//                         <li className="flex items-center gap-3 text-sm text-zinc-300">
//                             <Binary size={14} className="text-cyan-500" />
//                             <span>Statistical Mining</span>
//                         </li>
//                         <li className="flex items-center gap-3 text-sm text-zinc-300">
//                             <BrainCircuit size={14} className="text-cyan-500" />
//                             <span>Machine Learning Algorithms</span>
//                         </li>
//                         <li className="flex items-center gap-3 text-sm text-zinc-300">
//                             <Database size={14} className="text-cyan-500" />
//                             <span>Big Data Architectures</span>
//                         </li>
//                     </ul>
//                 </div>
//             </motion.div>

//             {/* 3. SKILL NODES (Responsive Grid) */}
//             <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
//             >
//                 {/* Skill Card 1 */}
//                 <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-xl hover:bg-white/5 hover:border-cyan-500/30 transition-all duration-300 group">
//                     <Database className="text-cyan-600 mb-4 group-hover:text-cyan-400 transition-colors" />
//                     <h3 className="font-bold text-white mb-2">Data Engineering</h3>
//                     <p className="text-xs text-zinc-400 font-mono">SQL, PostgreSQL, MongoDB, ETL Pipelines, AWS Redshift</p>
//                 </div>

//                 {/* Skill Card 2 */}
//                 <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-xl hover:bg-white/5 hover:border-purple-500/30 transition-all duration-300 group">
//                     <BrainCircuit className="text-purple-600 mb-4 group-hover:text-purple-400 transition-colors" />
//                     <h3 className="font-bold text-white mb-2">Machine Learning</h3>
//                     <p className="text-xs text-zinc-400 font-mono">Python (Pandas, Scikit), R, TensorFlow, Predictive Modeling</p>
//                 </div>

//                 {/* Skill Card 3 */}
//                 <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-xl hover:bg-white/5 hover:border-green-500/30 transition-all duration-300 group">
//                     <BarChart3 className="text-green-600 mb-4 group-hover:text-green-400 transition-colors" />
//                     <h3 className="font-bold text-white mb-2">Visualization</h3>
//                     <p className="text-xs text-zinc-400 font-mono">Tableau, PowerBI, Matplotlib, D3.js, Executive Reporting</p>
//                 </div>

//                 {/* Skill Card 4 */}
//                 <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-xl hover:bg-white/5 hover:border-orange-500/30 transition-all duration-300 group">
//                     <TrendingUp className="text-orange-600 mb-4 group-hover:text-orange-400 transition-colors" />
//                     <h3 className="font-bold text-white mb-2">Business Intel</h3>
//                     <p className="text-xs text-zinc-400 font-mono">A/B Testing, KPI Analysis, Market Forecasting, Strategy</p>
//                 </div>
//             </motion.div>

//             {/* 4. FOOTER STATUS BAR */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//                 className="lg:col-span-12 mt-8 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6 text-xs font-mono text-zinc-600"
//             >
//                 <div>
//                     SYSTEM_ID: SID_DATA_CORE_V2
//                 </div>
//                 <div className="flex gap-4 mt-2 md:mt-0">
//                     <span className="flex items-center gap-1 text-green-500/70"><Cpu size={10}/> OPTIMIZED</span>
//                     <span className="flex items-center gap-1 text-cyan-500/70"><Search size={10}/> INDEXED</span>
//                 </div>
//             </motion.div>

//         </div>
//       </div>
//     </main>
//   );
// }


// 'use client';

// import { motion } from 'framer-motion';
// import { 
//   Binary, 
//   BrainCircuit, 
//   Cpu, 
//   Database, 
//   Globe, 
//   LineChart, 
//   MapPin, 
//   Scan, 
//   Search, 
//   ShieldCheck, 
//   Terminal, 
//   Zap 
// } from 'lucide-react';
// import Navbar from '@/components/Navbar';

// // --- SUB-COMPONENTS FOR JARVIS UI ---

// // A Reusable Holographic Panel with Corner Brackets
// const HoloPanel = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
//   <motion.div 
//     initial={{ opacity: 0, scale: 0.9, borderColor: 'rgba(6,182,212,0)' }}
//     animate={{ opacity: 1, scale: 1, borderColor: 'rgba(6,182,212,0.3)' }}
//     transition={{ duration: 0.5, delay }}
//     className={`relative bg-black/60 backdrop-blur-md border border-cyan-500/30 p-6 ${className}`}
//   >
//     {/* Corner Brackets */}
//     <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
//     <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></div>
//     <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></div>
//     <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>
    
//     {/* Scanline Overlay */}
//     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-50 pointer-events-none bg-[length:100%_4px]"></div>
    
//     {children}
//   </motion.div>
// );

// // A Rotating Data Ring
// const DataRing = () => (
//     <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
//         <div className="w-[500px] h-[500px] border border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
//         <div className="absolute w-[450px] h-[450px] border border-dashed border-cyan-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
//         <div className="absolute w-[300px] h-[300px] border-2 border-t-transparent border-b-transparent border-cyan-500/20 rounded-full animate-spin"></div>
//     </div>
// );

// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-black text-cyan-50 font-mono selection:bg-cyan-500/30 overflow-x-hidden">
      
//       {/* --- BACKGROUND FX --- */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//           <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
//           <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,1)] animate-scanline"></div>
//           <DataRing />
//       </div>

//       <Navbar />

//       <div className="relative z-10 container mx-auto px-4 pt-32 pb-24 max-w-7xl">
        
//         {/* --- HEADER: IDENTITY VERIFICATION --- */}
//         <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-cyan-900/50 pb-6 mb-12 relative">
//             <div className="absolute bottom-0 right-0 w-32 h-2 bg-cyan-500/50"></div>
            
//             <motion.div 
//                 initial={{ x: -50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 className="space-y-2"
//             >
//                 <div className="flex items-center gap-2 text-cyan-400 text-xs tracking-[0.3em] uppercase animate-pulse">
//                     <Scan className="w-4 h-4" />
//                     <span>Identity Confirmed</span>
//                 </div>
//                 <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase" style={{ textShadow: "0 0 20px rgba(6,182,212,0.5)" }}>
//                     SID<span className="text-cyan-500">.DATA</span>
//                 </h1>
//                 <div className="flex flex-wrap gap-4 text-sm text-cyan-200/70 uppercase tracking-widest">
//                     <span>// Data Scientist</span>
//                     <span>// Business Analyst</span>
//                     <span>// Strategist</span>
//                 </div>
//             </motion.div>

//             <motion.div 
//                 initial={{ opacity: 0 }} 
//                 animate={{ opacity: 1 }} 
//                 className="mt-6 md:mt-0 text-right space-y-1"
//             >
//                 <div className="flex items-center justify-end gap-2 text-cyan-400">
//                     <MapPin size={16} />
//                     <span className="font-bold">SECTOR: IRVING_TX</span>
//                 </div>
//                 <div className="text-[10px] text-zinc-500">COORDS: 32.8140° N, 96.9489° W</div>
//             </motion.div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
//             {/* --- COLUMN 1: THE CORE (Personal Data) --- */}
//             <div className="lg:col-span-8 space-y-6">
                
//                 {/* 1. OPERATIVE SUMMARY */}
//                 <HoloPanel className="flex flex-col md:flex-row gap-8 items-center md:items-start" delay={0.2}>
//                     {/* Rotating Avatar Placeholder */}
//                     <div className="relative flex-shrink-0 w-32 h-32 flex items-center justify-center">
//                         <div className="absolute inset-0 border-2 border-cyan-500 rounded-full border-t-transparent animate-spin"></div>
//                         <div className="absolute inset-2 border border-cyan-500/30 rounded-full"></div>
//                         <Search className="w-12 h-12 text-cyan-400" />
//                     </div>
                    
//                     <div className="space-y-4">
//                         <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-cyan-500/30 pb-2">
//                             <Terminal className="text-cyan-400 w-5 h-5" />
//                             OPERATIVE_PROFILE
//                         </h2>
//                         <p className="text-cyan-100/80 leading-relaxed text-lg">
//                             "I translate chaos into logic."
//                         </p>
//                         <p className="text-zinc-400 text-sm leading-relaxed">
//                             Specialized in high-level data architecture and business intelligence. I don't just analyze numbers; I build the predictive engines that drive decision-making. My background combines deep technical engineering (MS Data Science) with strategic business application.
//                         </p>
//                     </div>
//                 </HoloPanel>

//                 {/* 2. ACADEMIC DATABASE */}
//                 <HoloPanel delay={0.4}>
//                      <div className="flex items-center justify-between mb-6">
//                         <h3 className="text-lg font-bold text-white flex items-center gap-2">
//                             <Database className="text-cyan-400 w-5 h-5" />
//                             KNOWLEDGE_BASE
//                         </h3>
//                         <span className="text-[10px] bg-cyan-900/50 text-cyan-400 px-2 py-1 border border-cyan-500/30">
//                             VERIFIED: UB_NY
//                         </span>
//                      </div>
                     
//                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <div className="text-2xl font-bold text-white mb-1">M.S. Data Science</div>
//                             <div className="text-cyan-500 text-sm uppercase tracking-wider mb-4">University at Buffalo</div>
//                             <p className="text-xs text-zinc-400 border-l border-cyan-500/30 pl-3">
//                                 Focus: Distributed Computing, Machine Learning Algorithms, Statistical Mining.
//                             </p>
//                         </div>
//                         <div className="space-y-2">
//                             <div className="flex justify-between text-xs text-cyan-300 uppercase">
//                                 <span>Algorithm Optimization</span>
//                                 <span>98%</span>
//                             </div>
//                             <div className="h-1 w-full bg-zinc-800"><div className="h-full w-[98%] bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div></div>
                            
//                             <div className="flex justify-between text-xs text-cyan-300 uppercase pt-2">
//                                 <span>Big Data Systems</span>
//                                 <span>95%</span>
//                             </div>
//                             <div className="h-1 w-full bg-zinc-800"><div className="h-full w-[95%] bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div></div>
//                         </div>
//                      </div>
//                 </HoloPanel>

//             </div>

//             {/* --- COLUMN 2: MODULES (Skills) --- */}
//             <div className="lg:col-span-4 space-y-6">
                
//                 {/* STATUS BAR */}
//                 <motion.div 
//                     initial={{ opacity: 0 }} animate={{ opacity: 1 }}
//                     className="flex justify-between items-center text-[10px] text-cyan-600 uppercase font-bold tracking-widest border-b border-cyan-900 pb-2"
//                 >
//                     <span>System Modules</span>
//                     <span className="animate-pulse">Active</span>
//                 </motion.div>

//                 {/* TECH STACK CARDS */}
//                 {[
//                     { title: "DATA ENGINEERING", icon: <Binary />, skills: ["SQL", "PostgreSQL", "ETL Pipelines", "AWS Redshift"] },
//                     { title: "PREDICTIVE AI", icon: <BrainCircuit />, skills: ["Python", "TensorFlow", "Scikit-Learn", "Regression Models"] },
//                     { title: "VISUALIZATION", icon: <LineChart />, skills: ["Tableau", "PowerBI", "D3.js", "Executive Dashboards"] },
//                     { title: "STRATEGY", icon: <ShieldCheck />, skills: ["A/B Testing", "KPI Analysis", "Market Forecasting"] }
//                 ].map((item, i) => (
//                     <HoloPanel key={i} className="group hover:bg-cyan-950/20 transition-colors" delay={0.5 + (i * 0.1)}>
//                         <div className="flex items-center gap-3 mb-3">
//                             <div className="text-cyan-400 group-hover:text-white transition-colors group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
//                                 {item.icon}
//                             </div>
//                             <h4 className="font-bold text-white text-sm tracking-wider">{item.title}</h4>
//                         </div>
//                         <div className="flex flex-wrap gap-2">
//                             {item.skills.map((skill, k) => (
//                                 <span key={k} className="text-[10px] text-cyan-200/70 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">
//                                     {skill}
//                                 </span>
//                             ))}
//                         </div>
//                     </HoloPanel>
//                 ))}

//             </div>

//         </div>

//         {/* --- FOOTER: SYSTEM LOG --- */}
//         <div className="mt-12 border-t border-cyan-900/50 pt-6 flex flex-col md:flex-row justify-between items-center opacity-60">
//             <div className="flex gap-4 font-mono text-[10px] text-cyan-700">
//                 <span>MEM_USAGE: 42%</span>
//                 <span>LATENCY: 12ms</span>
//                 <span>ENCRYPTION: AES-256</span>
//             </div>
//             <div className="mt-2 md:mt-0 text-[10px] text-cyan-700 uppercase">
//                 Jarvis Protocol v7.0.2 // Online
//             </div>
//         </div>

//       </div>
//     </main>
//   );
// }


// 'use client';

// import { motion } from 'framer-motion';
// import { 
//   BarChart4, 
//   Binary, 
//   BrainCircuit, 
//   Briefcase, 
//   Calculator, 
//   Database, 
//   Globe, 
//   LineChart, 
//   MapPin, 
//   PieChart, 
//   Scan, 
//   Search, 
//   ShieldCheck, 
//   Terminal, 
//   TrendingUp, 
//   Zap 
// } from 'lucide-react';
// import Navbar from '@/components/Navbar';
// import Link from 'next/link';

// // --- SUB-COMPONENTS FOR JARVIS UI ---

// // A Reusable Holographic Panel with Corner Brackets
// const HoloPanel = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
//   <motion.div 
//     initial={{ opacity: 0, scale: 0.9, borderColor: 'rgba(6,182,212,0)' }}
//     animate={{ opacity: 1, scale: 1, borderColor: 'rgba(6,182,212,0.3)' }}
//     transition={{ duration: 0.5, delay }}
//     className={`relative bg-black/60 backdrop-blur-md border border-cyan-500/30 p-6 ${className}`}
//   >
//     {/* Corner Brackets */}
//     <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
//     <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></div>
//     <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></div>
//     <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>
    
//     {/* Scanline Overlay */}
//     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-50 pointer-events-none bg-[length:100%_4px]"></div>
    
//     {children}
//   </motion.div>
// );

// // A Rotating Data Ring
// const DataRing = () => (
//     <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
//         <div className="w-[500px] h-[500px] border border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
//         <div className="absolute w-[450px] h-[450px] border border-dashed border-cyan-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
//         <div className="absolute w-[300px] h-[300px] border-2 border-t-transparent border-b-transparent border-cyan-500/20 rounded-full animate-spin"></div>
//     </div>
// );

// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-black text-cyan-50 font-mono selection:bg-cyan-500/30 overflow-x-hidden">
      
//       {/* --- BACKGROUND FX --- */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//           <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
//           <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,1)] animate-scanline"></div>
//           <DataRing />
//       </div>

//       <Navbar />

//       <div className="relative z-10 container mx-auto px-4 pt-32 pb-24 max-w-7xl">
        
//         {/* --- HEADER: IDENTITY VERIFICATION --- */}
//         <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-cyan-900/50 pb-6 mb-12 relative">
//             <div className="absolute bottom-0 right-0 w-32 h-2 bg-cyan-500/50"></div>
            
//             <motion.div 
//                 initial={{ x: -50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 className="space-y-2"
//             >
//                 <div className="flex items-center gap-2 text-cyan-400 text-xs tracking-[0.3em] uppercase animate-pulse">
//                     <Scan className="w-4 h-4" />
//                     <span>Identity Confirmed</span>
//                 </div>
//                 <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase" style={{ textShadow: "0 0 20px rgba(6,182,212,0.5)" }}>
//                     SID<span className="text-cyan-500">.DATA</span>
//                 </h1>
//                 <div className="flex flex-wrap gap-4 text-sm text-cyan-200/70 uppercase tracking-widest">
//                     <span>// Data Scientist</span>
//                     <span>// Financial Analyst</span>
//                     <span>// Business Intel</span>
//                 </div>
//             </motion.div>

//             <motion.div 
//                 initial={{ opacity: 0 }} 
//                 animate={{ opacity: 1 }} 
//                 className="mt-6 md:mt-0 text-right space-y-1"
//             >
//                 <div className="flex items-center justify-end gap-2 text-cyan-400">
//                     <MapPin size={16} />
//                     <span className="font-bold">SECTOR: IRVING_TX</span>
//                 </div>
//                 <div className="text-[10px] text-zinc-500">COORDS: 32.8140° N, 96.9489° W</div>
//             </motion.div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
//             {/* --- COLUMN 1: THE CORE (Personal Data) --- */}
//             <div className="lg:col-span-8 space-y-6">
                
//                 {/* 1. OPERATIVE SUMMARY (Expanded) */}
//                 <HoloPanel className="flex flex-col gap-6" delay={0.2}>
//                     <div className="flex items-center gap-4 border-b border-cyan-500/30 pb-4">
//                         <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
//                             <Terminal className="text-cyan-400 w-6 h-6" />
//                         </div>
//                         <h2 className="text-xl font-bold text-white tracking-widest">
//                             OPERATIVE_PROFILE
//                         </h2>
//                     </div>
                    
//                     <div className="space-y-5 text-zinc-300 leading-relaxed">
//                         <p className="text-lg text-white font-medium">
//                             I operate at the intersection of <span className="text-cyan-400">Data Science</span>, <span className="text-cyan-400">Finance</span>, and <span className="text-cyan-400">Business Strategy</span>.
//                         </p>
//                         <p>
//                             My mission is to translate complex, unstructured datasets into clear, profitable strategies. I don't just build models; I build the financial roadmaps and predictive engines that drive executive decision-making. 
//                         </p>
//                         <p>
//                             With a Master’s in Data Science from the <strong>University at Buffalo</strong>, I possess the technical rigor to handle Big Data architectures and the business acumen to perform deep financial modeling. Whether analyzing market risks, forecasting quarterly trends, or optimizing supply chains, I ensure that every number tells a story.
//                         </p>
//                         <div className="flex gap-3 pt-2">
//                              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-300">Predictive Analytics</span>
//                              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-300">Financial Modeling</span>
//                              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-300">Risk Assessment</span>
//                         </div>
//                     </div>
//                 </HoloPanel>

//                 {/* 2. ACADEMIC DATABASE */}
//                 <HoloPanel delay={0.4}>
//                      <div className="flex items-center justify-between mb-6">
//                         <h3 className="text-lg font-bold text-white flex items-center gap-2">
//                             <Database className="text-cyan-400 w-5 h-5" />
//                             KNOWLEDGE_BASE
//                         </h3>
//                         <span className="text-[10px] bg-cyan-900/50 text-cyan-400 px-2 py-1 border border-cyan-500/30">
//                             VERIFIED: UB_NY
//                         </span>
//                      </div>
                     
//                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <div className="text-2xl font-bold text-white mb-1">M.S. Data Science</div>
//                             <div className="text-cyan-500 text-sm uppercase tracking-wider mb-4">University at Buffalo</div>
//                             <p className="text-xs text-zinc-400 border-l border-cyan-500/30 pl-3 leading-5">
//                                 Rigorous coursework in Distributed Systems, Statistical Mining, and Machine Learning Algorithms.
//                             </p>
//                         </div>
//                         <div className="space-y-3">
//                             <div className="group">
//                                 <div className="flex justify-between text-xs text-cyan-300 uppercase mb-1">
//                                     <span>Statistical Analysis</span>
//                                     <span>98%</span>
//                                 </div>
//                                 <div className="h-1 w-full bg-zinc-800"><div className="h-full w-[98%] bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div></div>
//                             </div>
                            
//                             <div className="group">
//                                 <div className="flex justify-between text-xs text-cyan-300 uppercase mb-1">
//                                     <span>Business Intelligence</span>
//                                     <span>95%</span>
//                                 </div>
//                                 <div className="h-1 w-full bg-zinc-800"><div className="h-full w-[95%] bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div></div>
//                             </div>
//                         </div>
//                      </div>
//                 </HoloPanel>

//             </div>

//             {/* --- COLUMN 2: MODULES (Skills) --- */}
//             <div className="lg:col-span-4 space-y-6">
                
//                 {/* STATUS BAR */}
//                 <motion.div 
//                     initial={{ opacity: 0 }} animate={{ opacity: 1 }}
//                     className="flex justify-between items-center text-[10px] text-cyan-600 uppercase font-bold tracking-widest border-b border-cyan-900 pb-2"
//                 >
//                     <span>System Modules</span>
//                     <span className="animate-pulse text-green-500">OPTIMIZED</span>
//                 </motion.div>

//                 {/* TECH STACK CARDS - Updated for Data/Finance */}
//                 <div className="space-y-4">
                    
//                     {/* Module 1: Core Analytics */}
//                     <HoloPanel className="group hover:bg-cyan-950/20 transition-colors p-4" delay={0.5}>
//                         <div className="flex items-center gap-3 mb-2">
//                             <Binary className="text-cyan-400 w-5 h-5" />
//                             <h4 className="font-bold text-white text-sm">DATA CORE</h4>
//                         </div>
//                         <div className="flex flex-wrap gap-2">
//                             {["Python", "R", "SQL (Advanced)", "SAS", "Excel (VBA)"].map((skill, k) => (
//                                 <span key={k} className="text-[10px] text-cyan-200 bg-cyan-500/10 px-2 py-1 border border-cyan-500/20 rounded">
//                                     {skill}
//                                 </span>
//                             ))}
//                         </div>
//                     </HoloPanel>

//                     {/* Module 2: Visualization */}
//                     <HoloPanel className="group hover:bg-cyan-950/20 transition-colors p-4" delay={0.6}>
//                         <div className="flex items-center gap-3 mb-2">
//                             <PieChart className="text-purple-400 w-5 h-5" />
//                             <h4 className="font-bold text-white text-sm">VISUALIZATION</h4>
//                         </div>
//                         <div className="flex flex-wrap gap-2">
//                             {["Tableau", "Power BI", "Matplotlib", "Looker", "D3.js"].map((skill, k) => (
//                                 <span key={k} className="text-[10px] text-purple-200 bg-purple-500/10 px-2 py-1 border border-purple-500/20 rounded">
//                                     {skill}
//                                 </span>
//                             ))}
//                         </div>
//                     </HoloPanel>

//                     {/* Module 3: ML & AI */}
//                     <HoloPanel className="group hover:bg-cyan-950/20 transition-colors p-4" delay={0.7}>
//                         <div className="flex items-center gap-3 mb-2">
//                             <BrainCircuit className="text-green-400 w-5 h-5" />
//                             <h4 className="font-bold text-white text-sm">PREDICTIVE AI</h4>
//                         </div>
//                         <div className="flex flex-wrap gap-2">
//                             {["Scikit-Learn", "TensorFlow", "Pandas", "Regression Models"].map((skill, k) => (
//                                 <span key={k} className="text-[10px] text-green-200 bg-green-500/10 px-2 py-1 border border-green-500/20 rounded">
//                                     {skill}
//                                 </span>
//                             ))}
//                         </div>
//                     </HoloPanel>

//                      {/* Module 4: Finance/Business */}
//                      <HoloPanel className="group hover:bg-cyan-950/20 transition-colors p-4" delay={0.8}>
//                         <div className="flex items-center gap-3 mb-2">
//                             <TrendingUp className="text-orange-400 w-5 h-5" />
//                             <h4 className="font-bold text-white text-sm">STRATEGY</h4>
//                         </div>
//                         <div className="flex flex-wrap gap-2">
//                             {["Financial Modeling", "Market Research", "Risk Analysis", "A/B Testing"].map((skill, k) => (
//                                 <span key={k} className="text-[10px] text-orange-200 bg-orange-500/10 px-2 py-1 border border-orange-500/20 rounded">
//                                     {skill}
//                                 </span>
//                             ))}
//                         </div>
//                     </HoloPanel>

//                 </div>

//             </div>

//              {/* --- FULL WIDTH: START PROJECT (Matches Screenshot) --- */}
//              <div className="lg:col-span-12 mt-8">
//                 <HoloPanel className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-zinc-900 to-black hover:border-green-500/50 transition-colors group" delay={0.9}>
//                     <div className="space-y-2">
//                         <div className="flex items-center gap-3">
//                             <span className="relative flex h-3 w-3">
//                               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                               <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//                             </span>
//                             <span className="text-xs font-mono text-green-400 tracking-[0.2em] uppercase">Status: Available for Work</span>
//                         </div>
//                         <h3 className="text-3xl md:text-4xl font-bold text-white">Let's build something.</h3>
//                         <p className="text-zinc-400 text-sm max-w-xl">
//                             Ready to deploy advanced analytics to solve your business challenges? Initiate the uplink below.
//                         </p>
//                     </div>
                    
//                     <Link href="/contact">
//                         <motion.button 
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2"
//                         >
//                             <Zap className="w-4 h-4 text-black fill-black" />
//                             START A PROJECT
//                         </motion.button>
//                     </Link>
//                 </HoloPanel>
//              </div>

//         </div>

//         {/* --- FOOTER: SYSTEM LOG --- */}
//         <div className="mt-12 border-t border-cyan-900/50 pt-6 flex flex-col md:flex-row justify-between items-center opacity-60">
//             <div className="flex gap-4 font-mono text-[10px] text-cyan-700">
//                 <span>MEM_USAGE: 42%</span>
//                 <span>LATENCY: 12ms</span>
//                 <span>ENCRYPTION: AES-256</span>
//             </div>
//             <div className="mt-2 md:mt-0 text-[10px] text-cyan-700 uppercase">
//                 Jarvis Protocol v7.0.2 // Online
//             </div>
//         </div>

//       </div>
//     </main>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import { 
  BarChart4, 
  Binary, 
  BrainCircuit, 
  Briefcase, 
  Calculator, 
  Database, 
  Globe, 
  LineChart, 
  MapPin, 
  PieChart, 
  Scan, 
  Search, 
  ShieldCheck, 
  Terminal, 
  TrendingUp, 
  Zap,
  Github,    // <--- IMPORTED
  Linkedin   // <--- IMPORTED
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

// --- SUB-COMPONENTS FOR JARVIS UI ---

// A Reusable Holographic Panel with Corner Brackets
const HoloPanel = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9, borderColor: 'rgba(6,182,212,0)' }}
    animate={{ opacity: 1, scale: 1, borderColor: 'rgba(6,182,212,0.3)' }}
    transition={{ duration: 0.5, delay }}
    className={`relative bg-black/60 backdrop-blur-md border border-cyan-500/30 p-6 ${className}`}
  >
    {/* Corner Brackets */}
    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
    <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></div>
    <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></div>
    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>
    
    {/* Scanline Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-50 pointer-events-none bg-[length:100%_4px]"></div>
    
    {children}
  </motion.div>
);

// A Rotating Data Ring
const DataRing = () => (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[500px] h-[500px] border border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute w-[450px] h-[450px] border border-dashed border-cyan-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute w-[300px] h-[300px] border-2 border-t-transparent border-b-transparent border-cyan-500/20 rounded-full animate-spin"></div>
    </div>
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-cyan-50 font-mono selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* --- BACKGROUND FX --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,1)] animate-scanline"></div>
          <DataRing />
      </div>

      <Navbar />

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-24 max-w-7xl">
        
        {/* --- HEADER: IDENTITY VERIFICATION --- */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-cyan-900/50 pb-6 mb-12 relative">
            <div className="absolute bottom-0 right-0 w-32 h-2 bg-cyan-500/50"></div>
            
            {/* LEFT SIDE: NAME & TITLE */}
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-2"
            >
                <div className="flex items-center gap-2 text-cyan-400 text-xs tracking-[0.3em] uppercase animate-pulse">
                    <Scan className="w-4 h-4" />
                    <span>Identity Confirmed</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase" style={{ textShadow: "0 0 20px rgba(6,182,212,0.5)" }}>
                    SID<span className="text-cyan-500">.DATA</span>
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-cyan-200/70 uppercase tracking-widest">
                    <span>// Data Scientist</span>
                    <span>// Financial Analyst</span>
                    <span>// Business Intel</span>
                </div>
            </motion.div>

            {/* RIGHT SIDE: SOCIALS & LOCATION */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="mt-8 md:mt-0 flex flex-col items-end gap-6"
            >
                {/* LOCATION BLOCK */}
                <div className="text-right space-y-1">
                    <div className="flex items-center justify-end gap-2 text-cyan-400">
                        <MapPin size={16} />
                        <span className="font-bold">SECTOR: IRVING_TX</span>
                    </div>
                    <div className="text-[10px] text-zinc-500">COORDS: 32.8140° N, 96.9489° W</div>
                </div>

                {/* --- NEW: SOCIAL LINKS --- */}
                <div className="flex items-center gap-3">
                    
                    {/* LINKEDIN BUTTON */}
                    <Link 
                        href="https://www.linkedin.com/in/siddhartha-dheer-860437247/" // <--- REPLACE THIS URL
                        target="_blank" 
                        className="group flex items-center gap-3 px-5 py-2 rounded-full border border-zinc-700 bg-zinc-900/50 hover:border-cyan-500 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300"
                    >
                        <Linkedin className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                        <span className="text-xs font-bold text-zinc-400 group-hover:text-cyan-400 tracking-widest transition-colors">LINKEDIN</span>
                    </Link>

                    {/* GITHUB BUTTON */}
                    <Link 
                        href="https://github.com/sidddheer" // <--- REPLACE THIS URL
                        target="_blank"
                        className="group flex items-center gap-3 px-5 py-2 rounded-full border border-zinc-700 bg-zinc-900/50 hover:border-cyan-500 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300"
                    >
                        <Github className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                        <span className="text-xs font-bold text-zinc-400 group-hover:text-cyan-400 tracking-widest transition-colors">GITHUB</span>
                    </Link>

                </div>

            </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* --- COLUMN 1: THE CORE (Personal Data) --- */}
            <div className="lg:col-span-8 space-y-6">
                
                {/* 1. OPERATIVE SUMMARY (Expanded) */}
                <HoloPanel className="flex flex-col gap-6" delay={0.2}>
                    <div className="flex items-center gap-4 border-b border-cyan-500/30 pb-4">
                        <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                            <Terminal className="text-cyan-400 w-6 h-6" />
                        </div>
                        <h2 className="text-xl font-bold text-white tracking-widest">
                            OPERATIVE_PROFILE
                        </h2>
                    </div>
                    
                    <div className="space-y-5 text-zinc-300 leading-relaxed">
                        <p className="text-lg text-white font-medium">
                            I operate at the intersection of <span className="text-cyan-400">Data Science</span>, <span className="text-cyan-400">Finance</span>, and <span className="text-cyan-400">Business Strategy</span>.
                        </p>
                        <p>
                            My mission is to translate complex, unstructured datasets into clear, profitable strategies. I don't just build models; I build the financial roadmaps and predictive engines that drive executive decision-making. 
                        </p>
                        <p>
                            With a Master’s in Data Science from the <strong>University at Buffalo</strong>, I possess the technical rigor to handle Big Data architectures and the business acumen to perform deep financial modeling. Whether analyzing market risks, forecasting quarterly trends, or optimizing supply chains, I ensure that every number tells a story.
                        </p>
                        <div className="flex gap-3 pt-2">
                             <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-300">Predictive Analytics</span>
                             <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-300">Financial Modeling</span>
                             <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-300">Risk Assessment</span>
                        </div>
                    </div>
                </HoloPanel>

                {/* 2. ACADEMIC DATABASE */}
                <HoloPanel delay={0.4}>
                     <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <Database className="text-cyan-400 w-5 h-5" />
                            KNOWLEDGE_BASE
                        </h3>
                        <span className="text-[10px] bg-cyan-900/50 text-cyan-400 px-2 py-1 border border-cyan-500/30">
                            VERIFIED: UB_NY
                        </span>
                     </div>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">M.S. Data Science</div>
                            <div className="text-cyan-500 text-sm uppercase tracking-wider mb-4">University at Buffalo</div>
                            <p className="text-xs text-zinc-400 border-l border-cyan-500/30 pl-3 leading-5">
                                Rigorous coursework in Distributed Systems, Statistical Mining, and Machine Learning Algorithms.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="group">
                                <div className="flex justify-between text-xs text-cyan-300 uppercase mb-1">
                                    <span>Statistical Analysis</span>
                                    <span>98%</span>
                                </div>
                                <div className="h-1 w-full bg-zinc-800"><div className="h-full w-[98%] bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div></div>
                            </div>
                            
                            <div className="group">
                                <div className="flex justify-between text-xs text-cyan-300 uppercase mb-1">
                                    <span>Business Intelligence</span>
                                    <span>95%</span>
                                </div>
                                <div className="h-1 w-full bg-zinc-800"><div className="h-full w-[95%] bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div></div>
                            </div>
                        </div>
                     </div>
                </HoloPanel>

            </div>

            {/* --- COLUMN 2: MODULES (Skills) --- */}
            <div className="lg:col-span-4 space-y-6">
                
                {/* STATUS BAR */}
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="flex justify-between items-center text-[10px] text-cyan-600 uppercase font-bold tracking-widest border-b border-cyan-900 pb-2"
                >
                    <span>System Modules</span>
                    <span className="animate-pulse text-green-500">OPTIMIZED</span>
                </motion.div>

                {/* TECH STACK CARDS - Updated for Data/Finance */}
                <div className="space-y-4">
                    
                    {/* Module 1: Core Analytics */}
                    <HoloPanel className="group hover:bg-cyan-950/20 transition-colors p-4" delay={0.5}>
                        <div className="flex items-center gap-3 mb-2">
                            <Binary className="text-cyan-400 w-5 h-5" />
                            <h4 className="font-bold text-white text-sm">DATA CORE</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {["Python", "R", "SQL (Advanced)", "SAS", "Excel (VBA)"].map((skill, k) => (
                                <span key={k} className="text-[10px] text-cyan-200 bg-cyan-500/10 px-2 py-1 border border-cyan-500/20 rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </HoloPanel>

                    {/* Module 2: Visualization */}
                    <HoloPanel className="group hover:bg-cyan-950/20 transition-colors p-4" delay={0.6}>
                        <div className="flex items-center gap-3 mb-2">
                            <PieChart className="text-purple-400 w-5 h-5" />
                            <h4 className="font-bold text-white text-sm">VISUALIZATION</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {["Tableau", "Power BI", "Matplotlib", "Looker", "D3.js"].map((skill, k) => (
                                <span key={k} className="text-[10px] text-purple-200 bg-purple-500/10 px-2 py-1 border border-purple-500/20 rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </HoloPanel>

                    {/* Module 3: ML & AI */}
                    <HoloPanel className="group hover:bg-cyan-950/20 transition-colors p-4" delay={0.7}>
                        <div className="flex items-center gap-3 mb-2">
                            <BrainCircuit className="text-green-400 w-5 h-5" />
                            <h4 className="font-bold text-white text-sm">PREDICTIVE AI</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {["Scikit-Learn", "TensorFlow", "Pandas", "Regression Models"].map((skill, k) => (
                                <span key={k} className="text-[10px] text-green-200 bg-green-500/10 px-2 py-1 border border-green-500/20 rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </HoloPanel>

                     {/* Module 4: Finance/Business */}
                     <HoloPanel className="group hover:bg-cyan-950/20 transition-colors p-4" delay={0.8}>
                        <div className="flex items-center gap-3 mb-2">
                            <TrendingUp className="text-orange-400 w-5 h-5" />
                            <h4 className="font-bold text-white text-sm">STRATEGY</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {["Financial Modeling", "Market Research", "Risk Analysis", "A/B Testing"].map((skill, k) => (
                                <span key={k} className="text-[10px] text-orange-200 bg-orange-500/10 px-2 py-1 border border-orange-500/20 rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </HoloPanel>

                </div>

            </div>

             {/* --- FULL WIDTH: START PROJECT (Matches Screenshot) --- */}
             <div className="lg:col-span-12 mt-8">
                <HoloPanel className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-zinc-900 to-black hover:border-green-500/50 transition-colors group" delay={0.9}>
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-mono text-green-400 tracking-[0.2em] uppercase">Status: Available for Work</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">Let's build something.</h3>
                        <p className="text-zinc-400 text-sm max-w-xl">
                            Ready to deploy advanced analytics to solve your business challenges? Initiate the uplink below.
                        </p>
                    </div>
                    
                    <Link href="/contact">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2"
                        >
                            <Zap className="w-4 h-4 text-black fill-black" />
                            START A PROJECT
                        </motion.button>
                    </Link>
                </HoloPanel>
             </div>

        </div>

        {/* --- FOOTER: SYSTEM LOG --- */}
        <div className="mt-12 border-t border-cyan-900/50 pt-6 flex flex-col md:flex-row justify-between items-center opacity-60">
            <div className="flex gap-4 font-mono text-[10px] text-cyan-700">
                <span>MEM_USAGE: 42%</span>
                <span>LATENCY: 12ms</span>
                <span>ENCRYPTION: AES-256</span>
            </div>
            <div className="mt-2 md:mt-0 text-[10px] text-cyan-700 uppercase">
                Jarvis Protocol v7.0.2 // Online
            </div>
        </div>

      </div>
    </main>
  );
}