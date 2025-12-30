import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Events = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const eventList = [
  {
    id: 1,
    name: "Code Sprint",
    category: "Coding",
    desc: "Global competitive programming battle for the fastest logic.",
    time: "10:00 AM",
    date: "Mar 15",
    prize: "₹20,000",
    icon: "bx-code-alt",
    color: "from-blue-500",
  },
  {
    id: 2,
    name: "Robo Wars",
    category: "Robotics",
    desc: "Custom combat robots fighting for the title of the strongest.",
    time: "11:30 AM",
    date: "Mar 15",
    prize: "₹35,000",
    icon: "bx-bot",
    color: "from-red-500",
  },
  {
    id: 3,
    name: "Design-a-thon",
    category: "UI/UX",
    desc: "24-hour design challenge focused on solving accessibility.",
    time: "01:00 PM",
    date: "Mar 16",
    prize: "₹15,000",
    icon: "bx-palette",
    color: "from-purple-500",
  },
  {
    id: 4,
    name: "Cyber Siege",
    category: "Security",
    desc: "Advanced CTF event featuring real-world hacking scenarios.",
    time: "02:30 PM",
    date: "Mar 16",
    prize: "₹25,000",
    icon: "bx-shield-quarter",
    color: "from-green-500",
  },
  {
    id: 5,
    name: "AI Workshop",
    category: "Learning",
    desc: "Hands-on training session on deploying LLMs locally.",
    time: "04:00 PM",
    date: "Mar 17",
    prize: "Certificates",
    icon: "bx-brain",
    color: "from-yellow-500",
  },
  {
    id: 6,
    name: "Valorant Cup",
    category: "Gaming",
    desc: "5v5 tactical shooter tournament with pro casting.",
    time: "06:00 PM",
    date: "Mar 17",
    prize: "₹50,000",
    icon: "bx-game",
    color: "from-pink-500",
  },
  {
    id: 7,
    name: "Startup Pitch",
    category: "Business",
    desc: "Pitch your tech ideas to a panel of venture capitalists.",
    time: "10:00 AM",
    date: "Mar 18",
    prize: "Funding",
    icon: "bx-rocket",
    color: "from-orange-500",
  },
  {
    id: 8,
    name: "Data Viz",
    category: "Analytics",
    desc: "Transform complex datasets into beautiful stories.",
    time: "12:00 PM",
    date: "Mar 18",
    prize: "₹10,000",
    icon: "bx-bar-chart-alt",
    color: "from-teal-500",
  },
  {
    id: 9,
    name: "Web 3.0 Summit",
    category: "Blockchain",
    desc: "Exploring the future of decentralized applications.",
    time: "03:00 PM",
    date: "Mar 19",
    prize: "NFT Drops",
    icon: "bx-link-external",
    color: "from-indigo-500",
  },
  {
    id: 10,
    name: "Closing Gala",
    category: "Ceremony",
    desc: "The grand finale featuring award announcements.",
    time: "07:00 PM",
    date: "Mar 19",
    prize: "Grand Trophy",
    icon: "bx-party",
    color: "from-rose-500",
  },
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
          <span className='text-[12px] tracking-[0.4em] font-bold text-[#e99b63] uppercase'>Teach Fest 2026</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500'
        >
          Featured Events
        </motion.h2>

        {/* --- NEW DESCRIPTION PARAGRAPH --- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-gray-400 text-sm md:text-lg leading-relaxed font-light"
        >
          Push your limits and showcase your talent across a diverse spectrum of 
          technical and creative challenges. From high-stakes coding to high-octane 
          robotics, find your arena and compete for the ultimate glory.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventList.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group relative h-full"
          >
            {/* Hover Gradient Border */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-[26px] transition-all duration-500 group-hover:from-[#e99b63] group-hover:to-transparent opacity-50 group-hover:opacity-100" />
            
            {/* Card Content */}
            <div className="relative h-full bg-[#0a0a0a] rounded-[25px] p-8 border border-white/5 flex flex-col items-start overflow-hidden">
              
              <div className={`absolute -top-24 -left-24 w-48 h-48 rounded-full bg-gradient-to-br ${event.color} opacity-0 blur-[60px] group-hover:opacity-20 transition-all duration-700`} />

              <div className="w-full flex justify-between items-start mb-6">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-[#e99b63]/50 group-hover:bg-[#e99b63]/10"
                >
                  <i className={`bx ${event.icon} text-3xl text-gray-400 group-hover:text-[#e99b63]`}></i>
                </motion.div>
                <span className="text-[10px] font-black tracking-widest text-gray-500 uppercase py-1 px-3 border border-white/10 rounded-full group-hover:text-white group-hover:border-white/30 transition-all">
                  {event.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#e99b63] transition-colors">{event.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 text-left line-clamp-2">
                {event.desc}
              </p>

              <div className="w-full grid grid-cols-2 gap-y-4 pt-6 mt-auto border-t border-white/5">
                <div className="flex items-center gap-2">
                  <i className='bx bx-calendar-event text-gray-500 group-hover:text-[#e99b63]'></i>
                  <span className="text-xs text-gray-400">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className='bx bx-time-five text-gray-500 group-hover:text-[#e99b63]'></i>
                  <span className="text-xs text-gray-400">{event.time}</span>
                </div>
                <div className="flex items-center gap-2 col-span-2">
                  <i className='bx bx-trophy text-gray-500 group-hover:text-[#e99b63]'></i>
                  <span className="text-xs font-bold text-gray-200">Prize Pool: {event.prize}</span>
                </div>
              </div>

              <motion.button
                className="absolute bottom-0 left-0 w-full py-4 bg-[#e99b63] text-black font-bold text-xs tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
              >
                VIEW FULL DETAILS
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Events;