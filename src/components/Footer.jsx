import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const navItems = ['HOME', 'CLUBS', 'EVENTS', 'CONNECT'];

  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-10 px-6 border-t border-white/5 overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#e99b63]/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: About Tech Fest */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-6">
            <img src='/WebAssets/logo.png' className="w-10 h-10 bg-[#e99b63] rounded-lg flex items-center justify-center font-bold text-black text-xl" alt='logo'>
              
            </img>
            <span className="text-2xl font-bold tracking-tighter uppercase">Tech Fest<span className="text-[#e99b63]"> 2026</span></span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 text-left">
            The ultimate convergence of technology and creativity. Join us for a journey 
            featuring high-stakes competitions and networking with industry leaders.
          </p>
          {/* Only Instagram Icon */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-[#e99b63] hover:text-black transition-all duration-300">
              <i className='bx bxl-instagram'></i>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links (Updated with NavItems) */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-[#e99b63]">Navigation</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors flex items-center gap-2">
                  <i className='bx bx-chevron-right text-[#e99b63]'></i> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Event Details */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-[#e99b63]">Event Timeline</h4>
          <div className="space-y-5">
            <div className="flex items-start gap-4 text-left">
              <i className='bx bx-calendar text-2xl text-[#e99b63]'></i>
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-wider">March 15 - 19, 2026</p>
                <p className="text-xs text-gray-500 mt-1">University Tech Campus</p>
              </div>
            </div>
            <div className="flex items-start gap-4 text-left">
              <i className='bx bx-map-pin text-2xl text-[#e99b63]'></i>
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-wider">Main Convention Hall</p>
                <p className="text-xs text-gray-500 mt-1">Sector 7, Innovation Park</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4: Contact Information */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-[#e99b63]">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <i className='bx bx-envelope text-lg text-[#e99b63]'></i>
              <a href="mailto:info@techfest.com" className="hover:text-white">info@techfest.com</a>
            </li>
            <li className="flex items-center gap-3">
              <i className='bx bx-phone text-lg text-[#e99b63]'></i>
              <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
            </li>
            <li className="flex items-start gap-3 text-left">
              <i className='bx bx-current-location text-lg text-[#e99b63]'></i>
              <span>Building 101, Science Park, <br/>Cyber City, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Credits Section */}
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-gray-500 uppercase tracking-widest">
          © 2026 TechFest. All Rights Reserved.
        </p>
        
        {/* Alfa Coding Club Branding */}
        <div className="flex items-center gap-4 group cursor-default">
          <div className="text-right">
            <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Developed by</p>
            <p className="text-sm font-black group-hover:text-[#e99b63] transition-colors">ALFA CODING CLUB</p>
          </div>
          <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-all duration-500 group-hover:border-[#e99b63]/50 group-hover:shadow-[0_0_15px_rgba(233,155,99,0.2)]">
            <img src='/WebAssets/WhatsApp Image 2025-12-28 at 9.03.33 PM.jpeg' className="text-[#e99b63] font-black text-xl" alt='logo'></img>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;