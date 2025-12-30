import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  Target,
  Zap,
  Instagram, 
  Linkedin, 
  Trophy,
  Calendar,
  ChevronRight,
  Users
} from 'lucide-react';

const ClubPage = () => {
  const navigate = useNavigate();

  // TEAM MEMBERS ARRAY - Modify this for future updates
  const teamMembers = [
    {
      name: "Aryan Sharma",
      role: "President",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=1" 
    },
    {
      name: "Priya Patel",
      role: "Technical Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=2"
    },
    {
      name: "Rahul Verma",
      role: "Operations Head",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=3"
    }
  ];

  const ClubSection = ({ title, children, icon }) => (
    <div className="mb-16 text-left">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mr-4 text-white">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
      </div>
      <div className="pl-0 md:pl-14">{children}</div>
    </div>
  );

  return (
    <div className="w-full text-white font-sans min-h-screen pb-20">
      
      {/* 1. TOP NAV */}
      <div className="container mx-auto px-6 py-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-[10px] font-bold text-gray-500 hover:text-white transition-colors tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          BACK TO DASHBOARD
        </button>
      </div>

      {/* 2. HERO SECTION */}
      <div className="container mx-auto px-6 mb-20">
        <div className="w-full bg-[#0a0a0a] border border-white/5 rounded-[40px] p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-3xl bg-[#111] border border-white/10 flex items-center justify-center text-3xl font-black italic tracking-tighter">
              TIC
            </div>
            <div className="text-center md:text-left">
              <span className="text-[10px] font-bold tracking-[0.4em] text-indigo-400 uppercase mb-2 block">
                OFFICIAL STUDENT CHAPTER
              </span>
              <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
                TECH INNOVATORS CLUB
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT GRID */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT SECTION */}
          <div className="lg:col-span-8">
            <ClubSection title="The Mission" icon={<Target className="w-5 h-5" />}>
              <h4 className="text-xl text-gray-400 italic font-light mb-6">
                "Building the Future, One Line at a Time"
              </h4>
              <p className="text-gray-500 leading-relaxed text-lg max-w-2xl">
                The Tech Innovators Club is a premier student organization focused on bridging the 
                gap between academic theory and industry practice.
              </p>
            </ClubSection>

            <ClubSection title="What We Do" icon={<Zap className="w-5 h-5" />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Weekly Hands-on Workshops",
                  "Annual 24-Hour Hackathons",
                  "Industry Expert Guest Lectures",
                  "Collaborative Open Source Projects"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 rounded-[24px] bg-[#0a0a0a] border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    <span className="text-sm text-gray-400 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </ClubSection>

            {/* TEAM SECTION ADDED HERE */}
            <ClubSection title="Our Team" icon={<Users className="w-5 h-5" />}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {teamMembers.map((member, i) => (
                  <div key={i} className="group flex flex-col items-center md:items-start">
                    <div className="relative w-full aspect-square rounded-[32px] overflow-hidden bg-[#0a0a0a] border border-white/5 mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <h4 className="text-white font-bold text-sm tracking-wide">{member.name}</h4>
                    <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-[0.2em] mt-1 italic">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </ClubSection>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-4 space-y-4">
            {/* EVENT BOX */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-[45px] p-10 flex flex-col items-center shadow-2xl">
              <h3 className="text-[10px] font-bold text-gray-500 tracking-[0.5em] uppercase mb-10">
                Upcoming Events
              </h3>
              <div className="w-full space-y-10">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-[13px] text-gray-300 leading-tight font-bold">Tech Samaaroh 2025</p>
                      <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">March 15 - 17</p>
                    </div>
                  </div>
                  <button onClick={() => navigate('/events/tech-samaaroh-2025')} className="w-full py-3 bg-white/5 border border-white/10 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-[15px] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                    View Event Detail <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Trophy className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-[13px] text-gray-300 leading-tight font-bold">National Tech Expo</p>
                      <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">₹50,000 Prize Pool</p>
                    </div>
                  </div>
                  <button onClick={() => navigate('/events/tech-expo-2025')} className="w-full py-3 bg-white/5 border border-white/10 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-[15px] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                    View Event Detail <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* SOCIALS BOX */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-[30px] p-6 flex items-center justify-between">
              <div className="flex-1 flex flex-col items-center group cursor-pointer" onClick={() => window.open('https://instagram.com', '_blank')}>
                <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors mb-2" />
                <span className="text-[8px] font-bold text-gray-700 uppercase tracking-widest">Insta</span>
              </div>
              <div className="w-[1px] h-8 bg-white/5" />
              <div className="flex-1 flex flex-col items-center group cursor-pointer" onClick={() => window.open('https://linkedin.com', '_blank')}>
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors mb-2" />
                <span className="text-[8px] font-bold text-gray-700 uppercase tracking-widest">Linked</span>
              </div>
            </div>

            <p className="text-center text-[8px] text-gray-700 font-bold uppercase tracking-[0.3em] pt-4">
              Established 2024 • Guided by Excellence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubPage;