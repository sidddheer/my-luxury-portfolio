// 'use client';

// import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
// import { useState, useRef } from 'react';
// import { Radio, CheckCircle, AlertCircle, ChevronRight } from 'lucide-react';

// export default function ContactUplink() {
//   const [identity, setIdentity] = useState('');
//   const [message, setMessage] = useState('');
//   const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  
//   // Slider Logic
//   const constraintsRef = useRef(null);
//   const x = useMotionValue(0);
//   const backgroundOpacity = useTransform(x, [0, 250], [0.1, 1]);
  
//   // Check if slider reached end
//   const handleDragEnd = () => {
//     if (x.get() > 200 && identity && message) {
//         setStatus('sending');
//         // Simulate Network Request
//         setTimeout(() => {
//             setStatus('success');
//         }, 2000);
//     } else {
//         animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
//     }
//   };

//   return (
//     <section className="min-h-screen bg-black text-green-500 font-mono p-6 md:p-12 flex flex-col items-center justify-center relative overflow-hidden selection:bg-green-900 selection:text-white">
      
//       {/* VIGNETTE & CRT LINES */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[5] pointer-events-none bg-[length:100%_4px,3px_100%]"></div>
      
//       {/* SUCCESS RECEIPT */}
//       {status === 'success' && (
//           <motion.div 
//             initial={{ y: -100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="absolute inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
//           >
//               <div className="bg-white text-black p-8 font-mono max-w-md w-full shadow-[0_0_50px_rgba(34,197,94,0.5)] transform -rotate-1">
//                   <div className="border-b-2 border-black border-dashed pb-4 mb-4 flex justify-between items-center">
//                       <span className="text-xl font-bold">TRANSMISSION RECEIPT</span>
//                       <CheckCircle className="w-6 h-6" />
//                   </div>
//                   <div className="space-y-2 text-sm uppercase">
//                       <div className="flex justify-between"><span>STATUS:</span> <span>DELIVERED</span></div>
//                       <div className="flex justify-between"><span>PACKET_ID:</span> <span>{Math.floor(Math.random() * 999999)}</span></div>
//                       <div className="flex justify-between"><span>TIMESTAMP:</span> <span>{new Date().toLocaleTimeString()}</span></div>
//                       <div className="flex justify-between"><span>ENCRYPTION:</span> <span>SHA-256</span></div>
//                   </div>
//                   <div className="mt-8 text-center text-xs">
//                       // END OF LINE <br/>
//                       The architect will respond shortly.
//                   </div>
//                   <button onClick={() => window.location.reload()} className="mt-8 w-full bg-black text-white py-2 hover:bg-zinc-800 transition-colors">
//                       [ RESET TERMINAL ]
//                   </button>
//               </div>
//           </motion.div>
//       )}

//       <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 z-10">
        
//         {/* LEFT: SIGNAL RADAR */}
//         <div className="lg:col-span-1 flex flex-col items-center justify-center border border-green-900/50 bg-green-950/10 p-8 rounded-sm">
//              <div className="relative w-48 h-48 rounded-full border border-green-500/30 flex items-center justify-center overflow-hidden">
//                  {/* Radar Sweep */}
//                  <motion.div 
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                     className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,197,94,0.5)_360deg)] opacity-50 rounded-full"
//                     style={{ maskImage: 'radial-gradient(transparent 40%, black 100%)' }}
//                  />
//                  {/* Grid Lines */}
//                  <div className="absolute inset-0 border border-green-500/20 rounded-full scale-75"></div>
//                  <div className="absolute inset-0 border border-green-500/20 rounded-full scale-50"></div>
//                  <div className="w-1 h-1 bg-green-500 rounded-full animate-ping"></div>
//              </div>
//              <div className="mt-6 text-center space-y-1">
//                  <div className="text-xs text-green-700 tracking-widest">SIGNAL_STRENGTH</div>
//                  <div className="text-2xl font-bold flex items-center justify-center gap-2">
//                      <Radio className="w-5 h-5 animate-pulse" /> STRONG
//                  </div>
//              </div>
//         </div>

//         {/* RIGHT: COMMAND INPUT */}
//         <div className="lg:col-span-2 flex flex-col gap-6">
//             <div>
//                 <h2 className="text-3xl font-bold mb-2 glitch-text">SECURE UPLINK</h2>
//                 <p className="text-green-700 text-xs uppercase tracking-widest">Establish connection to send data packet</p>
//             </div>

//             <div className="space-y-6">
//                 {/* Identity Field */}
//                 <div className="group">
//                     {/* FIXED: Replaced >> with &gt;&gt; */}
//                     <label className="block text-xs text-green-800 mb-1 uppercase tracking-widest group-hover:text-green-500 transition-colors">&gt;&gt; Enter_Identity (Email/Name)</label>
//                     <input 
//                         type="text" 
//                         value={identity}
//                         onChange={(e) => setIdentity(e.target.value)}
//                         className="w-full bg-black border-b border-green-900 text-green-400 p-2 focus:outline-none focus:border-green-500 font-mono transition-all"
//                         placeholder="UNIDENTIFIED_USER"
//                     />
//                 </div>

//                 {/* Message Field */}
//                 <div className="group">
//                     {/* FIXED: Replaced >> with &gt;&gt; */}
//                     <label className="block text-xs text-green-800 mb-1 uppercase tracking-widest group-hover:text-green-500 transition-colors">&gt;&gt; Input_Coordinates (Message)</label>
//                     <textarea 
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         rows={4}
//                         className="w-full bg-black border-b border-green-900 text-green-400 p-2 focus:outline-none focus:border-green-500 font-mono transition-all resize-none"
//                         placeholder="Awaiting data input..."
//                     />
//                 </div>

//                 {/* THE LAUNCH KEY SLIDER */}
//                 <div className="pt-8" ref={constraintsRef}>
//                     <div className="relative h-14 bg-green-950/30 border border-green-900/50 rounded-full overflow-hidden flex items-center">
//                         <motion.div 
//                             style={{ opacity: backgroundOpacity }}
//                             className="absolute inset-0 bg-green-900/20" 
//                         />
//                         <div className="absolute w-full text-center text-xs tracking-[0.2em] text-green-700 pointer-events-none select-none">
//                             {status === 'sending' ? 'TRANSMITTING...' : 'SLIDE TO UPLINK'}
//                         </div>

//                         <motion.div 
//                             drag="x"
//                             dragConstraints={{ left: 0, right: 250 }}
//                             dragElastic={0}
//                             dragMomentum={false}
//                             onDragEnd={handleDragEnd}
//                             style={{ x }}
//                             className="relative z-10 h-10 w-10 ml-2 bg-green-500 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-[0_0_20px_rgba(34,197,94,0.6)]"
//                         >
//                             <ChevronRight className="text-black w-6 h-6" />
//                         </motion.div>
//                     </div>
//                 </div>
                
//                 {(!identity || !message) && (
//                     <div className="text-[10px] text-red-500 flex items-center gap-1 opacity-50">
//                         <AlertCircle className="w-3 h-3" /> FIELDS_MISSING
//                     </div>
//                 )}
//             </div>
//         </div>

//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Shield, Radio, CheckCircle, Wifi, Cpu, AlertCircle } from 'lucide-react';

export default function ContactUplink() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    // Reset after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="relative py-32 min-h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white selection:bg-cyan-500/30">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 blur-[100px] rounded-full"></div>
          {/* Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        
        {/* LEFT COLUMN: STATUS DISPLAY */}
        <div className="lg:col-span-2 space-y-8">
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                    <Wifi className="w-5 h-5 animate-pulse" />
                    <span className="font-mono text-xs tracking-[0.2em] uppercase">Uplink Established</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">
                    INITIATE <br/> <span className="text-zinc-500">PROTOCOL</span>
                </h2>
                <p className="text-zinc-400 text-sm border-l-2 border-zinc-800 pl-4 py-2 mt-4 max-w-xs">
                    Direct line to the Architect. All transmissions are encrypted and prioritized based on urgency.
                </p>
            </div>

            {/* Status Indicators */}
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg backdrop-blur-sm">
                    <div className="text-xs text-zinc-500 font-mono mb-2 uppercase tracking-wider">Encryption</div>
                    <div className="flex items-center gap-2 text-green-400">
                        <Shield className="w-4 h-4" />
                        <span className="font-bold text-sm">AES-256</span>
                    </div>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg backdrop-blur-sm">
                    <div className="text-xs text-zinc-500 font-mono mb-2 uppercase tracking-wider">Latency</div>
                    <div className="flex items-center gap-2 text-cyan-400">
                        <Radio className="w-4 h-4" />
                        <span className="font-bold text-sm">12ms</span>
                    </div>
                </div>
            </div>
        </div>

        {/* RIGHT COLUMN: THE INTERFACE */}
        <div className="lg:col-span-3">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-1 md:p-8 rounded-2xl shadow-2xl overflow-hidden group"
            >
                {/* Decorative Corner Brackets */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-500/50 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyan-500/50 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyan-500/50 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-500/50 rounded-br-lg"></div>
                
                {status === 'success' ? (
                    <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                        <motion.div 
                            initial={{ scale: 0 }} 
                            animate={{ scale: 1 }} 
                            className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/50 text-green-500"
                        >
                            <CheckCircle className="w-10 h-10" />
                        </motion.div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">TRANSMISSION COMPLETE</h3>
                            <p className="text-zinc-400 font-mono text-sm">Packet delivered to secure server.</p>
                        </div>
                        <button 
                            onClick={() => setStatus('idle')}
                            className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-sm font-mono transition-colors"
                        >
                            RESET_UPLINK
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 p-4 md:p-0 relative z-10">
                        {/* Header Bar */}
                        <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
                            <span className="text-xs font-mono text-cyan-400 animate-pulse">● LIVE INPUT</span>
                            <span className="text-[10px] font-mono text-zinc-600 uppercase">Secure_Form_v2.0</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest ml-1">Operator_ID</label>
                                <div className="relative group/input">
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-950/10 transition-all placeholder:text-zinc-700"
                                        placeholder="ENTER NAME"
                                    />
                                    <div className="absolute inset-0 border border-cyan-500/0 rounded-md pointer-events-none group-hover/input:border-cyan-500/20 transition-all"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest ml-1">Return_Freq</label>
                                <div className="relative group/input">
                                    <input 
                                        type="email" 
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-950/10 transition-all placeholder:text-zinc-700"
                                        placeholder="ENTER EMAIL"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest ml-1">Data_Packet</label>
                            <div className="relative group/input">
                                <textarea 
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-950/10 transition-all resize-none placeholder:text-zinc-700"
                                    placeholder="TYPE MESSAGE HERE..."
                                ></textarea>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === 'sending'}
                            className="w-full relative group overflow-hidden rounded-md p-[1px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md opacity-80 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative bg-black h-full w-full rounded-md px-6 py-4 flex items-center justify-center gap-3 transition-colors group-hover:bg-black/80">
                                {status === 'sending' ? (
                                    <>
                                        <Cpu className="w-4 h-4 text-cyan-400 animate-spin" />
                                        <span className="font-mono text-sm font-bold text-cyan-400 tracking-widest">UPLOADING...</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="font-mono text-sm font-bold text-white tracking-widest group-hover:text-cyan-200">TRANSMIT_PAYLOAD</span>
                                        <Send className="w-4 h-4 text-cyan-500 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </div>
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
      </div>
    </section>
  );
}