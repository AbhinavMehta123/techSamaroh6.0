import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Clubs = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const clubList = [
    { 
      id: 1, 
      name: "The Coding Society", 
      desc: "A community of developers dedicated to mastering algorithms, competitive programming, and open-source contribution.",
      icon: "bx-terminal", 
      color: "from-blue-600" 
    },
    { 
      id: 2, 
      name: "Robotics Collective", 
      desc: "Where engineering meets imagination. We design, build, and program autonomous machines to solve real-world problems.",
      icon: "bx-cog", 
      color: "from-red-600" 
    },
    { 
      id: 3, 
      name: "AI & Data Guild", 
      desc: "Exploring the frontiers of Machine Learning and Big Data. Our members build predictive models and dive deep into neural networks.",
      icon: "bx-brain", 
      color: "from-purple-600" 
    },
    { 
      id: 4, 
      name: "Pixel Perfect Design", 
      desc: "Bridging the gap between aesthetics and functionality. We focus on UI/UX research and creating seamless digital experiences.",
      icon: "bx-shape-polygon", 
      color: "from-pink-600" 
    },
    { 
      id: 5, 
      name: "Cyber Security Hub", 
      desc: "The guardians of the digital realm. We train in ethical hacking and cryptography to secure the future of the internet.",
      icon: "bx-lock-alt", 
      color: "from-cyan-600" 
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity, scale }}
      className="py-24 px-6 w-full max-w-7xl mx-auto text-center text-white"
    >
      {/* Header Section */}
      <div className="flex flex-col items-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className='relative px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8'
        >
          <span className='text-[12px] tracking-[0.4em] font-bold text-[#e99b63] uppercase'>Communities</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500'
        >
          Our Tech Clubs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl text-gray-400 text-sm md:text-lg leading-relaxed font-light"
        >
          Join a community of enthusiasts and experts. Our clubs provide the perfect 
          environment to collaborate, learn, and build the next big thing.
        </motion.p>
      </div>

      {/* Clubs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {clubList.map((club, index) => (
          <motion.div
            key={club.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-[350px]"
          >
            {/* --- EXACT HOVER GRADIENT BORDER FROM EVENTS --- */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-[30px] transition-all duration-500 group-hover:from-[#e99b63] group-hover:to-transparent opacity-50 group-hover:opacity-100" />
            
            {/* Card Content */}
            <div className="relative h-full bg-[#0d0d0d] rounded-[29px] p-10 border border-white/5 flex flex-col items-center justify-center overflow-hidden">
              
              {/* Specialized Glow for Clubs */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br ${club.color} opacity-0 blur-[70px] group-hover:opacity-40 transition-all duration-700`} />

              {/* Icon */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 mb-6 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#e99b63]/50 group-hover:bg-[#e99b63]/10 transition-all duration-500"
              >
                <i className={`bx ${club.icon} text-4xl text-gray-300 group-hover:text-[#e99b63]`}></i>
              </motion.div>

              {/* Club Name */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                {club.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed text-center group-hover:text-gray-200 transition-colors mb-4">
                {club.desc}
              </p>

              {/* Slide-Up Button */}
              <motion.button
                className="absolute bottom-0 left-0 w-full py-4 bg-[#e99b63] text-black font-bold text-xs tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
              >
                JOIN THE COMMUNITY
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Clubs;