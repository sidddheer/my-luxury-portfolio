// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';
// import { Radio, Workflow, Code2, Rocket, Cpu, Network, ShieldCheck, Database } from 'lucide-react';

// // Re-using ScrambleText for consistency
// const ScrambleText = ({ text, active }: { text: string, active: boolean }) => {
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
//   return <span>{display}</span>;
// };

// const STEPS = [
//     {
//         id: "01",
//         title: "SIGNAL INGESTION",
//         subtitle: "Requirements Gathering & Data Audit",
//         icon: Radio,
//         description: "I don't just ask questions; I perform a deep-dive audit of the existing infrastructure. This involves mapping data lineage, identifying signal noise versus valuable metrics, and establishing the 'Ground Truth' for the project. I treat business requirements as raw data streams that need to be parsed and validated before architecture begins.",
//         tech: ["Data Lineage", "Stakeholder Interviews", "Infrastructure Audit", "Feasibility Analysis"]
//     },
//     {
//         id: "02",
//         title: "ALGORITHMIC BLUEPRINT",
//         subtitle: "System Architecture & Logic Design",
//         icon: Workflow,
//         description: "This is where the logic is forged. I design scalable ETL/ELT pipelines and select the appropriate stack (SQL vs NoSQL, Batch vs Stream). I define the transformation logic, schema validation rules, and error handling protocols. It is not just about moving data; it is about designing a self-healing system that ensures data integrity at scale.",
//         tech: ["Schema Design", "Pipeline Architecture", "Logic Gates", "System Design"]
//     },
//     {
//         id: "03",
//         title: "CORE PROCESSING",
//         subtitle: "Development & Model Training",
//         icon: Code2,
//         description: "The build phase. I write modular, vectorized code (Python/SQL) to minimize latency. For predictive tasks, this involves feature engineering, model selection, and rigorous hyperparameter tuning. I implement continuous testing (Unit/Integration) to ensure the code is robust enough for production environments, not just local notebooks.",
//         tech: ["Python/SQL", "Vectorization", "ML Training", "CI/CD", "Docker"]
//     },
//     {
//         id: "04",
//         title: "SECURITY & VALIDATION",
//         subtitle: "Stress Testing & Fairness Audits",
//         icon: ShieldCheck,
//         description: "Before deployment, the system undergoes a rigorous stress test. I implement bias detection algorithms (Fairness Audits) for ML models and perform load testing for APIs. Security protocols are verified to ensure RBAC (Role-Based Access Control) compliance. Nothing leaves this stage without a 99.9% reliability score.",
//         tech: ["Bias Detection", "Load Testing", "Security Audit", "RBAC"]
//     },
//     {
//         id: "05",
//         title: "DEPLOYMENT SYNTHESIS",
//         subtitle: "Actionable Intelligence Delivery",
//         icon: Rocket,
//         description: "Data is useless without consumption. I deploy models via REST APIs or visualize insights through interactive dashboards (Tableau/PowerBI/React). I ensure the final output is not just a 'report,' but a dynamic tool that decision-makers can interact with. The cycle ends with a feedback loop setup for future model drift monitoring.",
//         tech: ["API Deployment", "Dashboarding", "Drift Monitoring", "Client Handover"]
//     }
// ];

// export default function ProcessThread() {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start center", "end end"]
//     });

//     const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//     return (
//         <section ref={containerRef} className="relative py-24 px-6 md:px-12 bg-black text-white overflow-hidden min-h-screen">
            
//             {/* GRID BACKGROUND */}
//             <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

//             {/* HEADER */}
//             <div className="relative z-10 max-w-7xl mx-auto mb-32 text-center">
//                 <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-800 rounded-full bg-zinc-900/50 backdrop-blur-md mb-6">
//                     <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
//                     <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Execution_Protocol_v2.0</span>
//                 </div>
//                 <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-600">
//                     OPERATIONAL<br/>PROTOCOL
//                 </h2>
//                 <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest max-w-md mx-auto">
//                     From Raw Signal to Optimized Output. The standard operating procedure for complex data architectures.
//                 </p>
//             </div>

//             {/* THE THREAD CONTAINER */}
//             <div className="relative max-w-5xl mx-auto">
                
//                 {/* 1. THE CENTRAL LINE (Dim) */}
//                 <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-800 -translate-x-1/2"></div>
                
//                 {/* 2. THE ACTIVE LINE (Cyan - Grows on scroll) */}
//                 <motion.div 
//                     style={{ height: lineHeight }}
//                     className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)] -translate-x-1/2 origin-top z-0"
//                 />

//                 {/* THE STEPS */}
//                 <div className="flex flex-col gap-32 relative z-10 pb-32">
//                     {STEPS.map((step, index) => {
//                         const isEven = index % 2 === 0;
//                         return (
//                             <StepCard key={step.id} step={step} index={index} isEven={isEven} />
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// }

// // --- SUB-COMPONENT: INDIVIDUAL STEP CARD ---
// const StepCard = ({ step, index, isEven }: { step: any, index: number, isEven: boolean }) => {
//     const ref = useRef(null);
//     const [isActive, setIsActive] = useState(false);
    
//     return (
//         <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ amount: 0.6, margin: "-50px" }}
//             onViewportEnter={() => setIsActive(true)}
//             onViewportLeave={() => setIsActive(false)}
//             className={`relative flex flex-col md:flex-row items-start md:items-center gap-12 ${isEven ? 'md:flex-row-reverse' : ''}`}
//         >
//             {/* CENTER NODE */}
//             <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center z-20 bg-black rounded-full border border-zinc-800 shadow-xl">
//                 <div className={`w-4 h-4 rounded-full transition-all duration-500 ${isActive ? 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)] scale-125' : 'bg-zinc-800'}`} />
//             </div>

//             {/* SPACER FOR DESKTOP */}
//             <div className="hidden md:block w-1/2" />

//             {/* CARD */}
//             <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-24 text-right' : 'md:pl-24 text-left'}`}>
                
//                 {/* ID Label */}
//                 <div className={`font-mono text-7xl font-bold mb-4 transition-colors duration-500 ${isActive ? 'text-zinc-800' : 'text-zinc-900'}`}>
//                     {step.id}
//                 </div>

//                 <div className={`
//                     p-8 border rounded-sm bg-zinc-950/90 backdrop-blur-md transition-all duration-500 group relative overflow-hidden
//                     ${isActive ? 'border-cyan-500/50 shadow-[0_0_50px_rgba(34,211,238,0.05)]' : 'border-white/5'}
//                 `}>
//                     {/* Glowing Corner Accents (Only on Active) */}
//                     {isActive && (
//                         <>
//                             <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500"></div>
//                             <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500"></div>
//                             <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500"></div>
//                             <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500"></div>
//                         </>
//                     )}

//                     {/* Header */}
//                     <div className={`flex items-center gap-4 mb-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
//                          <div className={`p-4 rounded-full bg-white/5 border border-white/10 ${isActive ? 'text-cyan-400 border-cyan-500/30' : 'text-zinc-600'}`}>
//                              <step.icon className="w-6 h-6" />
//                          </div>
//                          <div>
//                              <h3 className={`text-2xl font-bold tracking-tight ${isActive ? 'text-white' : 'text-zinc-500'}`}>
//                                 <ScrambleText text={step.title} active={isActive} />
//                              </h3>
//                              <p className="text-xs font-mono text-cyan-500/70 uppercase tracking-widest mt-1">{step.subtitle}</p>
//                          </div>
//                     </div>

//                     {/* Description */}
//                     <p className="text-zinc-400 leading-relaxed text-base">
//                         {step.description}
//                     </p>

//                     {/* Tech Stack */}
//                     <div className={`flex flex-wrap gap-2 mt-8 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
//                         {step.tech.map((t: string) => (
//                             <span key={t} className="px-3 py-1 text-[10px] font-mono border border-white/10 rounded-full bg-white/5 text-zinc-300 uppercase tracking-widest">
//                                 {t}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Radio, Workflow, Code2, Rocket, ShieldCheck, Cpu, Terminal, Zap, Activity, Lock } from 'lucide-react';

// --- HELPER: SCRAMBLE TEXT ---
const ScrambleText = ({ text, active, className }: { text: string, active: boolean, className?: string }) => {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

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

// --- DATA: THE ALGORITHM STEPS ---
const STEPS = [
    {
        id: "01",
        title: "SIGNAL INGESTION",
        subtitle: "Requirements Gathering & Data Audit",
        icon: Radio,
        stats: { latency: "12ms", memory: "64MB", status: "LISTENING" },
        description: "Deep-dive audit of existing infrastructure. Mapping data lineage, identifying signal noise versus valuable metrics, and establishing 'Ground Truth'. I treat business requirements as raw data streams that need to be parsed and validated.",
        tech: ["Data Lineage", "Stakeholder Interviews", "Infrastructure Audit"]
    },
    {
        id: "02",
        title: "ALGORITHMIC BLUEPRINT",
        subtitle: "System Architecture & Logic Design",
        icon: Workflow,
        stats: { latency: "45ms", memory: "128MB", status: "DESIGNING" },
        description: "Designing scalable ETL/ELT pipelines and selecting the stack (SQL vs NoSQL). Defining transformation logic, schema validation rules, and error handling protocols. Designing a self-healing system that ensures data integrity at scale.",
        tech: ["Schema Design", "Pipeline Architecture", "Logic Gates"]
    },
    {
        id: "03",
        title: "CORE PROCESSING",
        subtitle: "Development & Model Training",
        icon: Code2,
        stats: { latency: "890ms", memory: "2.4GB", status: "TRAINING" },
        description: "Writing modular, vectorized code (Python/SQL) to minimize latency. Feature engineering, model selection, and rigorous hyperparameter tuning. Implementing continuous testing (Unit/Integration) for robust production environments.",
        tech: ["Python/SQL", "Vectorization", "ML Training", "CI/CD"]
    },
    {
        id: "04",
        title: "SECURITY & VALIDATION",
        subtitle: "Stress Testing & Fairness Audits",
        icon: ShieldCheck,
        stats: { latency: "110ms", memory: "512MB", status: "AUDITING" },
        description: "Rigorous stress testing and bias detection (Fairness Audits). Verifying security protocols for RBAC (Role-Based Access Control) compliance. Ensuring 99.9% reliability before the 'Go-Live' signal.",
        tech: ["Bias Detection", "Load Testing", "Security Audit", "RBAC"]
    },
    {
        id: "05",
        title: "DEPLOYMENT SYNTHESIS",
        subtitle: "Actionable Intelligence Delivery",
        icon: Rocket,
        stats: { latency: "24ms", memory: "1.2GB", status: "DEPLOYED" },
        description: "Deploying models via REST APIs and visualizing insights through interactive dashboards. Ensuring the output is a dynamic tool for decision-makers. Setting up feedback loops for future model drift monitoring.",
        tech: ["API Deployment", "Dashboarding", "Drift Monitoring"]
    }
];

export default function ProcessThread() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    // Smooth spring animation for the main line
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative py-32 px-4 md:px-12 bg-black text-white min-h-screen overflow-hidden">
            
            {/* --- BACKGROUND FX --- */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                 style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>
            
            {/* --- HEADER --- */}
            <div className="relative z-10 max-w-7xl mx-auto mb-40 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="inline-flex items-center gap-3 px-4 py-1.5 border border-zinc-800 rounded-full bg-zinc-950/80 backdrop-blur-md mb-8"
                >
                    <div className="flex gap-1">
                        <span className="w-1 h-3 bg-cyan-500 rounded-full animate-pulse"></span>
                        <span className="w-1 h-3 bg-cyan-500/50 rounded-full animate-pulse delay-75"></span>
                        <span className="w-1 h-3 bg-cyan-500/20 rounded-full animate-pulse delay-150"></span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em]">System_Protocol_v2.4</span>
                </motion.div>
                
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-white mix-blend-overlay opacity-90">
                    OPERATIONAL<br/>PROTOCOL
                </h2>
            </div>

            {/* --- THE THREAD --- */}
            <div className="relative max-w-6xl mx-auto">
                
                {/* Main Spine (Gray Background) */}
                <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-900 md:-translate-x-1/2"></div>
                
                {/* Main Spine (Cyan Active) */}
                <motion.div 
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.6)] md:-translate-x-1/2 z-0"
                />

                {/* Steps */}
                <div className="flex flex-col gap-32 md:gap-48 pb-32">
                    {STEPS.map((step, index) => (
                        <StepNode key={step.id} step={step} index={index} isEven={index % 2 === 0} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- NODE COMPONENT ---
const StepNode = ({ step, index, isEven }: { step: any, index: number, isEven: boolean }) => {
    const [isActive, setIsActive] = useState(false);
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.5, margin: "-10% 0px -10% 0px" }}
            onViewportEnter={() => setIsActive(true)}
            onViewportLeave={() => setIsActive(false)}
            className={`relative flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            
            {/* 1. CENTRAL CONNECTOR (The "Joint") */}
            <div className="absolute left-[8px] md:left-1/2 md:-translate-x-1/2 z-20 top-8 md:top-1/2 md:-translate-y-1/2">
                <div className={`
                    w-6 h-6 rounded-full border-2 transition-all duration-500 flex items-center justify-center bg-black
                    ${isActive ? 'border-cyan-400 scale-125 shadow-[0_0_20px_rgba(34,211,238,0.8)]' : 'border-zinc-800'}
                `}>
                    <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${isActive ? 'bg-cyan-400' : 'bg-zinc-800'}`} />
                </div>
            </div>

            {/* 2. THE SVG BEAM (Draws the line to the card) */}
            {/* This is visible only on Desktop for the horizontal connection */}
            <div className={`hidden md:block absolute top-1/2 left-1/2 w-1/2 h-[2px] z-10 ${isEven ? 'origin-right -scale-x-100' : ''}`}>
                 <svg width="100%" height="20" className="overflow-visible">
                    {/* The Path */}
                    <motion.path
                        d="M 0,0 L 40,0 L 80,0 L 100,0"
                        fill="none"
                        stroke={isActive ? "#06b6d4" : "#27272a"}
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isActive ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    {/* The Moving Particle */}
                    {isActive && (
                         <motion.circle 
                            r="2" fill="#fff"
                            initial={{ offsetDistance: "0%" }}
                            animate={{ offsetDistance: "100%" }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            style={{ offsetPath: 'path("M 0,0 L 100,0")' }}
                         />
                    )}
                 </svg>
            </div>


            {/* 3. THE CARD CONTAINER */}
            {/* We add padding to push it away from the center line */}
            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-24' : 'md:pl-24'}`}>
                
                {/* THE TECH CARD */}
                <div className={`
                    group relative p-6 md:p-8 bg-zinc-950/90 backdrop-blur-xl border transition-all duration-700 overflow-hidden
                    ${isActive ? 'border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.1)] translate-y-0 opacity-100' : 'border-white/5 translate-y-8 opacity-50'}
                `}>
                    {/* Scanning Line Animation */}
                    {isActive && (
                        <motion.div 
                            initial={{ top: "-10%" }}
                            animate={{ top: "120%" }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-0 pointer-events-none"
                        />
                    )}

                    {/* Corner Brackets */}
                    <div className={`absolute top-0 left-0 w-4 h-4 border-l border-t transition-colors duration-500 ${isActive ? 'border-cyan-500' : 'border-zinc-800'}`} />
                    <div className={`absolute top-0 right-0 w-4 h-4 border-r border-t transition-colors duration-500 ${isActive ? 'border-cyan-500' : 'border-zinc-800'}`} />
                    <div className={`absolute bottom-0 left-0 w-4 h-4 border-l border-b transition-colors duration-500 ${isActive ? 'border-cyan-500' : 'border-zinc-800'}`} />
                    <div className={`absolute bottom-0 right-0 w-4 h-4 border-r border-b transition-colors duration-500 ${isActive ? 'border-cyan-500' : 'border-zinc-800'}`} />

                    {/* Card Content */}
                    <div className="relative z-10">
                        {/* Header Row */}
                        <div className="flex justify-between items-start mb-6">
                             <div className={`p-3 rounded bg-white/5 border border-white/10 ${isActive ? 'text-cyan-400' : 'text-zinc-600'}`}>
                                 <step.icon className="w-6 h-6" />
                             </div>
                             <div className="flex flex-col items-end">
                                 <span className={`text-4xl font-bold font-mono opacity-20 ${isActive ? 'text-cyan-500' : 'text-zinc-700'}`}>{step.id}</span>
                                 <span className={`text-[10px] font-mono uppercase tracking-widest ${isActive ? 'text-cyan-400' : 'text-zinc-600'}`}>
                                     {isActive ? 'STATUS: ACTIVE' : 'STATUS: PENDING'}
                                 </span>
                             </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                            <ScrambleText text={step.title} active={isActive} className={isActive ? "text-white" : "text-zinc-500"} />
                        </h3>
                        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">{step.subtitle}</p>

                        {/* Description */}
                        <p className="text-zinc-400 leading-relaxed text-sm md:text-base border-l-2 border-white/10 pl-4 mb-6">
                            {step.description}
                        </p>

                        {/* Metadata Grid (Fake Stats) */}
                        <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-white/5 mb-6 bg-black/20">
                             <div className="flex flex-col items-center border-r border-white/5">
                                 <Activity className="w-3 h-3 text-zinc-600 mb-1" />
                                 <span className="text-[10px] font-mono text-zinc-500">LATENCY</span>
                                 <span className="text-xs font-mono text-cyan-300">{step.stats.latency}</span>
                             </div>
                             <div className="flex flex-col items-center border-r border-white/5">
                                 <Cpu className="w-3 h-3 text-zinc-600 mb-1" />
                                 <span className="text-[10px] font-mono text-zinc-500">MEM</span>
                                 <span className="text-xs font-mono text-cyan-300">{step.stats.memory}</span>
                             </div>
                             <div className="flex flex-col items-center">
                                 <Terminal className="w-3 h-3 text-zinc-600 mb-1" />
                                 <span className="text-[10px] font-mono text-zinc-500">THREAD</span>
                                 <span className="text-xs font-mono text-cyan-300">{step.stats.status}</span>
                             </div>
                        </div>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2">
                            {step.tech.map((t: string) => (
                                <span key={t} className={`
                                    px-2 py-1 text-[10px] font-mono uppercase tracking-wider border transition-colors duration-300
                                    ${isActive ? 'border-cyan-500/30 text-cyan-200 bg-cyan-950/30' : 'border-white/10 text-zinc-600 bg-transparent'}
                                `}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </motion.div>
    );
};