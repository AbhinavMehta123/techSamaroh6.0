import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'boxicons/css/boxicons.min.css';
import Events from './Events';
import Clubs from './Clubs';
import Footer from './Footer';

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormOpen(false);
  };

  // Variants for the staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each child's animation
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: "spring", stiffness: 300, damping: 25 } 
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(90vh-6rem)] text-center px-6 pt-16">
      
      {/* Main Hero Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-xl z-10 flex flex-col items-center"
      >
        {/* Intro badge */}
        <motion.div variants={itemVariants} className='relative w-[95%] sm:w-48 h-10 mx-auto bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
          <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 font-bold text-[15px] tracking-widest text-white'>
            <i className='bx bxs-diamond'></i>
            INTRODUCING
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider mt-10 mb-6 leading-tight text-white"
        >
          Redefining <br /> 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
            What's Next
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[30rem] mx-auto mb-10"
        >
          Tech Samaaroh 2026 – Trinity Dwarka’s premier Tech Fest, showcasing
          innovation, competitions, and creativity in the digital era!
        </motion.p>

        {/* Enquire Button */}
        <motion.div variants={itemVariants}>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFormOpen(true)}
            className="bg-white text-black py-4 px-10 rounded-full font-bold text-[13px] tracking-[0.3em] transition-all"
          >
            ENQUIRE NOW
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Events Section - Animates on scroll */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-24 w-full"
      >
        <Events />
      </motion.section>

      {/* Enquire Modal Logic */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsFormOpen(false)} 
              className="absolute inset-0 bg-black/90 backdrop-blur-md" 
            />
            
            <motion.div 
              variants={modalVariants} 
              initial="hidden" 
              animate="visible" 
              exit="exit" 
              className="bg-[#111] border border-white/10 w-full max-w-md p-10 rounded-3xl relative z-[120] text-white shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-light tracking-[0.2em]">GET IN TOUCH</h2>
                <button 
                  onClick={() => setIsFormOpen(false)} 
                  className="text-2xl hover:text-[#e99b63] transition-colors"
                >
                  <i className='bx bx-x'></i>
                </button>
              </div>
              
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="space-y-1 group">
                  <input required placeholder="NAME" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#e99b63] transition-colors text-sm tracking-widest uppercase" />
                </div>
                <div className="space-y-1">
                  <input required type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#e99b63] transition-colors text-sm tracking-widest uppercase" />
                </div>
                <div className="space-y-1">
                  <textarea required rows="3" placeholder="HOW CAN WE HELP?" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#e99b63] transition-colors resize-none text-sm tracking-widest uppercase" />
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "#e99b63", color: "white" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="mt-4 bg-white text-black py-4 rounded-full font-black text-xs tracking-[0.2em] transition-all"
                >
                  SEND ENQUIRY
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <Clubs/>
    </main>
  );
};

export default Home;