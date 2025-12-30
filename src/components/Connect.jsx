import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Camera, Zap, ArrowRight, Fingerprint, Share2 } from 'lucide-react';

const Connect = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Reduced parallax range to prevent images from "hiding" or clipping too much
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={containerRef} className="py-24 px-6 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE: THE SYNC STATEMENT */}
        <div className="relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <Fingerprint className="w-5 h-5 text-[#e99b63]" />
            <span className="text-[10px] font-black tracking-[0.6em] text-[#e99b63] uppercase">Let's Connect</span>
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.85] text-white">
            Get <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e99b63] to-white/50">Synced</span> <br />
            Now
          </h2>

          <p className="mt-8 text-gray-400 text-lg font-light max-w-sm leading-relaxed">
            Every breakthrough, every win, and every story—mapped to the grid. Be part of the digital footprint of Tech Fest 2026.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open('https://instagram.com', '_blank')}
            className="mt-10 group flex items-center gap-6 px-3 py-3 pr-10 bg-[#0a0a0a] border border-white/10 rounded-2xl hover:border-[#e99b63]/50 transition-all duration-500"
          >
            <div className="w-14 h-14 bg-[#e99b63] rounded-xl flex items-center justify-center text-black shadow-[0_0_20px_rgba(233,155,99,0.2)]">
              <Instagram className="w-7 h-7" />
            </div>
            <div className="text-left">
                <span className="block text-white font-black text-xs tracking-[0.2em] uppercase">Connect to @Grid</span>
                <span className="text-[9px] text-gray-600 font-bold uppercase tracking-widest mt-1">Open Instagram</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-[#e99b63] group-hover:translate-x-2 transition-all ml-auto" />
          </motion.button>
        </div>

        {/* RIGHT SIDE: THE DYNAMIC STACK */}
        <div className="relative flex gap-4 h-[550px] md:h-[600px] select-none">
          
          {/* Column 1 */}
          <motion.div style={{ y: y1 }} className="flex-1 space-y-4">
            <div className="aspect-[3/4] rounded-[32px] bg-[#0a0a0a] border border-white/5 relative overflow-hidden">
               <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500')] bg-cover bg-center grayscale" />
               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>
            <div className="aspect-square rounded-[32px] bg-white/5 border border-white/5 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
              <Zap className="w-8 h-8 text-[#e99b63] mb-3" />
              <span className="text-[10px] font-black text-white tracking-widest uppercase">Real-Time <br/> Engagement</span>
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div style={{ y: y2 }} className="flex-1 space-y-4 mt-12 md:mt-20">
            <div className="aspect-square rounded-[32px] bg-[#e99b63] p-6 md:p-8 flex flex-col justify-between">
               <Share2 className="w-6 h-6 md:w-8 md:h-8 text-black" />
               <span className="text-black font-black text-xl md:text-2xl italic uppercase leading-tight tracking-tighter">Join <br/> The Network</span>
            </div>
            <div className="aspect-[3/4] rounded-[32px] bg-[#0a0a0a] border border-white/5 relative overflow-hidden">
               <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500')] bg-cover bg-center grayscale" />
               <div className="absolute top-4 right-4 text-[#e99b63]">
                  <Camera className="w-5 h-5 md:w-6 md:h-6" />
               </div>
            </div>
          </motion.div>

          {/* Background Glow - localized to the images */}
          <div className="absolute inset-0 bg-[#e99b63]/5 blur-[100px] -z-10 rounded-full" />
        </div>
      </div>

      {/* FOOTER METRICS - Ensure clear spacing from the images above */}
      <div className="mt-16 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-20 bg-black/50 backdrop-blur-sm md:bg-transparent">
        {[
          { label: "Community", val: "2.4K" },
          { label: "Stories", val: "800+" },
          { label: "Tags", val: "1.2K" },
          { label: "Reach", val: "50K" }
        ].map((stat, i) => (
          <div key={i} className="text-left">
            <p className="text-[9px] text-gray-600 font-bold uppercase tracking-[0.3em] mb-2">{stat.label}</p>
            <p className="text-2xl font-black text-white italic tracking-tighter uppercase">{stat.val}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Connect;