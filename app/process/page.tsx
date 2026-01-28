// 'use client';

// import ProcessThread from '@/components/ProcessThread';
// import CustomCursor from '@/components/CustomCursor';
// import { ArrowLeft } from 'lucide-react';
// import Link from 'next/link';
// import { useState } from 'react';

// export default function ProcessPage() {
//     // We force the cursor to be white because the background is black
//     const [isHoveringLink, setIsHoveringLink] = useState(false);

//     return (
//         <main className="bg-black min-h-screen selection:bg-cyan-500 selection:text-black">
            
//             {/* Cursor is always white here because background is black */}
//             {/* isInverse=true sets it to white. We also track hovering for size change. */}
//             <CustomCursor isInverse={true} />

//             {/* NAVIGATION: Back to Mainframe */}
//             <div className="fixed top-8 left-8 z-50">
//                 <Link 
//                     href="/" 
//                     onMouseEnter={() => setIsHoveringLink(true)}
//                     onMouseLeave={() => setIsHoveringLink(false)}
//                     className="flex items-center gap-3 text-zinc-500 hover:text-cyan-400 transition-colors group"
//                 >
//                     <div className="p-3 border border-zinc-800 rounded-full bg-black/50 backdrop-blur-md group-hover:border-cyan-500/50 transition-colors">
//                         <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
//                     </div>
//                     <span className="font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
//                         Return to Mainframe
//                     </span>
//                 </Link>
//             </div>

//             {/* THE PROCESS THREAD COMPONENT */}
//             <ProcessThread />

//         </main>
//     );
// }

// 'use client';

// import ProcessThread from '@/components/ProcessThread';
// import CustomCursor from '@/components/CustomCursor';
// import { ArrowLeft, Cpu } from 'lucide-react';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// export default function ProcessPage() {
//     const [mounted, setMounted] = useState(false);

//     useEffect(() => {
//         setMounted(true);
//     }, []);

//     return (
//         <main className="bg-black min-h-screen selection:bg-cyan-500 selection:text-black">
            
//             <CustomCursor isInverse={true} />

//             {/* --- NAVIGATION --- */}
//             <motion.div 
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//                 className="fixed top-6 left-6 z-50"
//             >
//                 <Link 
//                     href="/" 
//                     className="flex items-center gap-3 text-zinc-500 hover:text-cyan-400 transition-colors group"
//                 >
//                     <div className="p-3 border border-zinc-800 rounded-full bg-black/50 backdrop-blur-md group-hover:border-cyan-500/50 group-hover:bg-cyan-950/30 transition-all">
//                         <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
//                     </div>
//                     <div className="flex flex-col">
//                         <span className="font-mono text-xs uppercase tracking-widest font-bold text-white group-hover:text-cyan-400 transition-colors">
//                             Mainframe
//                         </span>
//                         <span className="font-mono text-[10px] text-zinc-600 group-hover:text-cyan-500/60 transition-colors">
//                             Return to Base
//                         </span>
//                     </div>
//                 </Link>
//             </motion.div>

//             {/* --- SYSTEM BOOT TEXT (Top Right) --- */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1 }}
//                 className="fixed top-6 right-6 z-50 text-right hidden md:block"
//             >
//                 <div className="flex items-center gap-2 justify-end mb-1">
//                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                     <span className="font-mono text-xs text-zinc-400">SYSTEM_ONLINE</span>
//                 </div>
//                 <div className="font-mono text-[10px] text-zinc-600">
//                     SECURE CONNECTION ESTABLISHED
//                 </div>
//             </motion.div>

//             {/* --- THE MAIN CONTENT --- */}
//             <ProcessThread />

//         </main>
//     );
// }


'use client';

import ProcessThread from '@/components/ProcessThread';
import CustomCursor from '@/components/CustomCursor';
import { ArrowLeft, ChevronDown, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProcessPage() {
    const [mounted, setMounted] = useState(false);
    
    // Scroll tracking to fade out the helper text
    const { scrollY } = useScroll();
    const scrollHintOpacity = useTransform(scrollY, [0, 100], [1, 0]);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <main className="bg-black min-h-screen selection:bg-cyan-500 selection:text-black">
            
            <CustomCursor isInverse={true} />

            {/* --- NAVIGATION (Moved down to top-32 to clear Navbar) --- */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="fixed top-32 left-6 md:left-12 z-40"
            >
                <Link 
                    href="/" 
                    className="flex items-center gap-4 text-zinc-500 hover:text-cyan-400 transition-colors group"
                >
                    <div className="p-4 border border-zinc-800 rounded-full bg-black/80 backdrop-blur-md group-hover:border-cyan-500/50 group-hover:bg-cyan-950/30 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </div>
                    <div className="hidden md:flex flex-col">
                        <span className="font-mono text-sm uppercase tracking-widest font-bold text-white group-hover:text-cyan-400 transition-colors">
                            Abort Protocol
                        </span>
                        <span className="font-mono text-[10px] text-zinc-600 group-hover:text-cyan-500/60 transition-colors">
                            Return to Mainframe
                        </span>
                    </div>
                </Link>
            </motion.div>

            {/* --- SYSTEM BOOT TEXT (Moved down to top-32) --- */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="fixed top-32 right-6 md:right-12 z-40 text-right hidden md:block"
            >
                <div className="flex items-center gap-2 justify-end mb-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,199,89,0.8)]"></div>
                    <span className="font-mono text-xs text-zinc-400 tracking-widest">SYSTEM_ONLINE</span>
                </div>
                <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
                    SECURE CONNECTION ESTABLISHED
                </div>
            </motion.div>

            {/* --- BIG SCROLL INDICATOR --- */}
            <motion.div 
                style={{ opacity: scrollHintOpacity }}
                className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-6 pointer-events-none"
            >
                <div className="flex flex-col items-center gap-2">
                    <div className="p-4 rounded-full border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-sm animate-bounce">
                        <ChevronDown className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="h-16 w-[1px] bg-gradient-to-b from-cyan-500 to-transparent"></div>
                </div>

                <div className="text-center bg-black/80 backdrop-blur-md border border-zinc-800 px-8 py-4 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                    <div className="flex items-center gap-3 mb-2 justify-center">
                        <MousePointer2 className="w-4 h-4 text-cyan-500 animate-pulse" />
                        <span className="font-mono text-sm font-bold text-white tracking-[0.2em] animate-pulse">
                            SCROLL TO INITIATE
                        </span>
                    </div>
                    <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                        Decrypting Operational Workflow...
                    </p>
                </div>
            </motion.div>

            {/* --- THE MAIN CONTENT --- */}
            <ProcessThread />

        </main>
    );
}