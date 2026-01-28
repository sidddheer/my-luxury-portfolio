'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useState, useRef } from 'react';
import { Radio, CheckCircle, AlertCircle, ChevronRight } from 'lucide-react';

export default function ContactUplink() {
  const [identity, setIdentity] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  
  // Slider Logic
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const backgroundOpacity = useTransform(x, [0, 250], [0.1, 1]);
  
  // Check if slider reached end
  const handleDragEnd = () => {
    if (x.get() > 200 && identity && message) {
        setStatus('sending');
        // Simulate Network Request
        setTimeout(() => {
            setStatus('success');
        }, 2000);
    } else {
        animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
    }
  };

  return (
    <section className="min-h-screen bg-black text-green-500 font-mono p-6 md:p-12 flex flex-col items-center justify-center relative overflow-hidden selection:bg-green-900 selection:text-white">
      
      {/* VIGNETTE & CRT LINES */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[5] pointer-events-none bg-[length:100%_4px,3px_100%]"></div>
      
      {/* SUCCESS RECEIPT */}
      {status === 'success' && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
          >
              <div className="bg-white text-black p-8 font-mono max-w-md w-full shadow-[0_0_50px_rgba(34,197,94,0.5)] transform -rotate-1">
                  <div className="border-b-2 border-black border-dashed pb-4 mb-4 flex justify-between items-center">
                      <span className="text-xl font-bold">TRANSMISSION RECEIPT</span>
                      <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 text-sm uppercase">
                      <div className="flex justify-between"><span>STATUS:</span> <span>DELIVERED</span></div>
                      <div className="flex justify-between"><span>PACKET_ID:</span> <span>{Math.floor(Math.random() * 999999)}</span></div>
                      <div className="flex justify-between"><span>TIMESTAMP:</span> <span>{new Date().toLocaleTimeString()}</span></div>
                      <div className="flex justify-between"><span>ENCRYPTION:</span> <span>SHA-256</span></div>
                  </div>
                  <div className="mt-8 text-center text-xs">
                      // END OF LINE <br/>
                      The architect will respond shortly.
                  </div>
                  <button onClick={() => window.location.reload()} className="mt-8 w-full bg-black text-white py-2 hover:bg-zinc-800 transition-colors">
                      [ RESET TERMINAL ]
                  </button>
              </div>
          </motion.div>
      )}

      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 z-10">
        
        {/* LEFT: SIGNAL RADAR */}
        <div className="lg:col-span-1 flex flex-col items-center justify-center border border-green-900/50 bg-green-950/10 p-8 rounded-sm">
             <div className="relative w-48 h-48 rounded-full border border-green-500/30 flex items-center justify-center overflow-hidden">
                 {/* Radar Sweep */}
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,197,94,0.5)_360deg)] opacity-50 rounded-full"
                    style={{ maskImage: 'radial-gradient(transparent 40%, black 100%)' }}
                 />
                 {/* Grid Lines */}
                 <div className="absolute inset-0 border border-green-500/20 rounded-full scale-75"></div>
                 <div className="absolute inset-0 border border-green-500/20 rounded-full scale-50"></div>
                 <div className="w-1 h-1 bg-green-500 rounded-full animate-ping"></div>
             </div>
             <div className="mt-6 text-center space-y-1">
                 <div className="text-xs text-green-700 tracking-widest">SIGNAL_STRENGTH</div>
                 <div className="text-2xl font-bold flex items-center justify-center gap-2">
                     <Radio className="w-5 h-5 animate-pulse" /> STRONG
                 </div>
             </div>
        </div>

        {/* RIGHT: COMMAND INPUT */}
        <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
                <h2 className="text-3xl font-bold mb-2 glitch-text">SECURE UPLINK</h2>
                <p className="text-green-700 text-xs uppercase tracking-widest">Establish connection to send data packet</p>
            </div>

            <div className="space-y-6">
                {/* Identity Field */}
                <div className="group">
                    {/* FIXED: Replaced >> with &gt;&gt; */}
                    <label className="block text-xs text-green-800 mb-1 uppercase tracking-widest group-hover:text-green-500 transition-colors">&gt;&gt; Enter_Identity (Email/Name)</label>
                    <input 
                        type="text" 
                        value={identity}
                        onChange={(e) => setIdentity(e.target.value)}
                        className="w-full bg-black border-b border-green-900 text-green-400 p-2 focus:outline-none focus:border-green-500 font-mono transition-all"
                        placeholder="UNIDENTIFIED_USER"
                    />
                </div>

                {/* Message Field */}
                <div className="group">
                    {/* FIXED: Replaced >> with &gt;&gt; */}
                    <label className="block text-xs text-green-800 mb-1 uppercase tracking-widest group-hover:text-green-500 transition-colors">&gt;&gt; Input_Coordinates (Message)</label>
                    <textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="w-full bg-black border-b border-green-900 text-green-400 p-2 focus:outline-none focus:border-green-500 font-mono transition-all resize-none"
                        placeholder="Awaiting data input..."
                    />
                </div>

                {/* THE LAUNCH KEY SLIDER */}
                <div className="pt-8" ref={constraintsRef}>
                    <div className="relative h-14 bg-green-950/30 border border-green-900/50 rounded-full overflow-hidden flex items-center">
                        <motion.div 
                            style={{ opacity: backgroundOpacity }}
                            className="absolute inset-0 bg-green-900/20" 
                        />
                        <div className="absolute w-full text-center text-xs tracking-[0.2em] text-green-700 pointer-events-none select-none">
                            {status === 'sending' ? 'TRANSMITTING...' : 'SLIDE TO UPLINK'}
                        </div>

                        <motion.div 
                            drag="x"
                            dragConstraints={{ left: 0, right: 250 }}
                            dragElastic={0}
                            dragMomentum={false}
                            onDragEnd={handleDragEnd}
                            style={{ x }}
                            className="relative z-10 h-10 w-10 ml-2 bg-green-500 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-[0_0_20px_rgba(34,197,94,0.6)]"
                        >
                            <ChevronRight className="text-black w-6 h-6" />
                        </motion.div>
                    </div>
                </div>
                
                {(!identity || !message) && (
                    <div className="text-[10px] text-red-500 flex items-center gap-1 opacity-50">
                        <AlertCircle className="w-3 h-3" /> FIELDS_MISSING
                    </div>
                )}
            </div>
        </div>

      </div>
    </section>
  );
}