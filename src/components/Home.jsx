import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'boxicons/css/boxicons.min.css';
import Events from './Events';
import Clubs from './Clubs';
import Connect from './Connect';

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setIsFormOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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
    <main className="flex flex-col items-center justify-center min-h-[calc(90vh-6rem)] text-center px-6 pt-16 overflow-x-hidden">

      {/* Hero Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-xl z-10 flex flex-col items-center"
      >
        {/* Intro badge */}
        <motion.div variants={itemVariants} className="relative mb-8">
          <div className="relative w-52 h-10 mx-auto rounded-full bg-black flex items-center justify-center">

            {/* SVG Path Animation */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ overflow: 'visible' }}
            >
              {/* 1. Subtle background track so the badge has a faint border everywhere */}
              <rect
                x="0.5" y="0.5"
                width="100%" height="100%"
                rx="20" ry="20"
                fill="none"
                stroke="rgba(233, 155, 99, 0.1)"
                strokeWidth="1"
                className="w-[calc(100%-1px)] h-[calc(100%-1px)]"
              />

              {/* 2. The Animated Line Segment */}
              <motion.rect
                x="0.5" y="0.5"
                width="100%" height="100%"
                rx="20" ry="20"
                fill="none"
                stroke="#e99b63"
                strokeWidth="1.5"
                strokeLinecap="round"
                // dasharray: first number is line length, second is the gap
                strokeDasharray="60 500"
                className="w-[calc(100%-1px)] h-[calc(100%-1px)]"
                animate={{
                  // 496 is the approximate perimeter for 208 width + 40 height
                  strokeDashoffset: [0, -496],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </svg>

            {/* Content */}
            <div className="flex items-center justify-center gap-2 z-10 px-4">
              <i className="bx bxs-diamond text-[#e99b63] text-[10px]"></i>
              <span className="font-black text-[11px] tracking-[0.4em] text-white">
                INTRODUCING
              </span>
            </div>
          </div>
        </motion.div>
        {/* Heading */}
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsFormOpen(true)}
            className="w-full py-4 px-10 rounded-xl bg-[#e99b63] text-black font-black text-[10px] tracking-[0.2em] hover:bg-white transition-all shadow-lg shadow-[#e99b63]/10"
          >
            ENQUIRE NOW
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Sections Grid */}
      <div className="w-full space-y-32 mt-32">
        <Events />
        <Clubs />
        <Connect />
      </div>

      {/* Modal Section */}
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
                <button onClick={() => setIsFormOpen(false)} className="text-2xl hover:text-[#e99b63] transition-colors">
                  <i className="bx bx-x"></i>
                </button>
              </div>

              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <input required placeholder="NAME" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#e99b63] transition-colors text-sm tracking-widest uppercase" />
                <input required type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#e99b63] transition-colors text-sm tracking-widest uppercase" />
                <textarea required rows="3" placeholder="HOW CAN WE HELP?" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#e99b63] transition-colors resize-none text-sm tracking-widest uppercase" />
                <motion.button type="submit" className="w-full py-4 rounded-xl bg-[#e99b63] text-black font-black text-[10px] tracking-[0.2em] hover:bg-white transition-all shadow-lg shadow-[#e99b63]/10">
                  SEND ENQUIRY
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Home;