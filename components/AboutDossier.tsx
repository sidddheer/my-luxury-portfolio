'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Scan, Shield, Activity, Lock, Unlock } from 'lucide-react';

// --- SUB-COMPONENT: REDACTED TEXT ---
const RedactedText = ({ text, revealed }: { text: string, revealed: boolean }) => {
  return (
    <span className={`relative transition-all duration-300 ${revealed ? 'bg-transparent text-cyan-400' : 'bg-zinc-800 text-zinc-800 select-none hover:cursor-help'}`}>
      <span className={revealed ? '' : 'opacity-0'}>{text}</span>
      {!revealed && (
         <span className="absolute inset-0 flex items-center justify-center text-[10px] text-zinc-600 font-mono tracking-widest opacity-50">
            [REDACTED]
         </span>
      )}
    </span>
  );
};

export default function AboutDossier() {
  const [isDecrypted, setIsDecrypted] = useState(false);

  // Skill "Diagnostics" Data
  const diagnostics = [
    { label: 'PYTHON CORE', level: 98, color: 'bg-emerald-500' },
    { label: 'SQL QUERY ENGINE', level: 95, color: 'bg-blue-500' },
    { label: 'REACT ARCHITECTURE', level: 88, color: 'bg-cyan-500' },
    { label: 'DATA VISUALIZATION', level: 92, color: 'bg-purple-500' },
  ];

  return (
    <section className="min-h-screen bg-zinc-950 text-zinc-300 font-mono p-6 md:p-24 flex items-center justify-center relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(zinc-800 1px, transparent 1px), linear-gradient(90deg, zinc-800 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 z-10">
        
        {/* LEFT COLUMN: VISUAL ID */}
        <div className="flex flex-col items-center justify-center">
            <motion.div 
                whileHover={{ rotateY: 15, rotateX: -5 }}
                className="relative w-72 h-96 bg-black border border-zinc-700 p-4 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] group perspective-1000"
            >
                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none z-20 group-hover:opacity-100 transition-opacity opacity-50"></div>
                
                {/* Scanner Line */}
                <motion.div 
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[2px] bg-cyan-400 z-30 shadow-[0_0_15px_rgba(34,211,238,1)] opacity-70"
                />

                {/* The "Photo" Placeholder - Replace BG color with your image */}
                <div className="w-full h-2/3 bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden mb-4 grayscale contrast-125">
                    <Scan className="w-12 h-12 text-zinc-700" />
                    <div className="absolute bottom-2 right-2 text-[10px] text-cyan-500 animate-pulse">ID_VERIFIED</div>
                </div>

                {/* ID Details */}
                <div className="space-y-2 text-xs">
                    <div className="flex justify-between border-b border-zinc-800 pb-1">
                        <span className="text-zinc-500">SUBJECT:</span>
                        <span className="text-white font-bold tracking-widest">DATA_MASTER</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-800 pb-1">
                        <span className="text-zinc-500">CLEARANCE:</span>
                        <span className="text-red-500 font-bold">LEVEL 5 (OMNI)</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-zinc-500">STATUS:</span>
                        <span className="text-emerald-500 animate-pulse">ONLINE</span>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* RIGHT COLUMN: THE DOSSIER */}
        <div className="flex flex-col justify-center space-y-8">
            
            {/* Header */}
            <div className="border-l-2 border-cyan-500 pl-6">
                <h2 className="text-4xl font-bold text-white mb-2 tracking-tighter">PERSONNEL FILE</h2>
                <div className="flex items-center gap-2 text-xs text-cyan-500">
                    <Shield className="w-4 h-4" />
                    <span>ENCRYPTED CONNECTION ESTABLISHED</span>
                </div>
            </div>

            {/* The Bio with Redaction */}
            <div className="bg-black/40 p-6 border border-zinc-800 rounded-sm relative">
                <button 
                    onClick={() => setIsDecrypted(!isDecrypted)}
                    className="absolute top-4 right-4 text-xs flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                    {isDecrypted ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                    {isDecrypted ? "ENCRYPT" : "DECRYPT"}
                </button>

                <p className="leading-relaxed text-sm md:text-base">
                    {/* FIXED: Replaced >> with &gt;&gt; */}
                    <span className="text-zinc-500 block mb-4 text-xs uppercase tracking-widest">&gt;&gt; Beginning Transmission...</span>
                    Subject identified as a high-level data architect. 
                    Origin: <RedactedText text="Buffalo, NY" revealed={isDecrypted} />. 
                    Primary objective involves the <RedactedText text="systematic deconstruction" revealed={isDecrypted} /> of complex datasets into actionable intelligence.
                    <br/><br/>
                    Known to operate during <RedactedText text="non-standard hours" revealed={isDecrypted} /> to maximize server load efficiency. 
                    Specializes in building infrastructure that <RedactedText text="scales autonomously" revealed={isDecrypted} /> without human intervention.
                </p>
            </div>

            {/* System Diagnostics (Skills) */}
            <div className="space-y-4">
                <div className="text-xs uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4" /> System_Resources_Check
                </div>
                {diagnostics.map((skill, index) => (
                    <div key={index} className="group">
                        <div className="flex justify-between text-xs mb-1">
                            <span className="group-hover:text-white transition-colors">{skill.label}</span>
                            <span className="text-zinc-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.5, delay: index * 0.2, ease: "circOut" }}
                                className={`h-full ${skill.color} shadow-[0_0_10px_currentColor]`}
                            />
                        </div>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
}