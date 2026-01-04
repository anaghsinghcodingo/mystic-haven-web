
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const founders = [
  { 
    name: "Mysterio", 
    role: "Founder", 
    initial: "M", 
    bio: "The visionary behind the Haven. Dedicated to creating a safe, vibrant space for the Indian teen community." 
  }
];

const guardians = [
  { name: "Agent 11", role: "Mystic Agent", initial: "A11" },
  { name: "𝔸𝕟𝕒𝕘𝕙", role: "Magician", initial: "A" },
  { name: "Void Queen", role: "Magician", initial: "VQ" },
  { name: "! Ethan﹒", role: "Magician", initial: "E" },
  { name: "sword🗡", role: "Magician", initial: "S" },
];

const Staff: React.FC = () => {
  return (
    <section className="pt-48 pb-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Editorial Header */}
        <ScrollReveal>
          <div className="mb-32 relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="max-w-3xl">
              <h2 className="text-xs font-black text-purple-500 uppercase tracking-[0.5em] mb-6">Our Team</h2>
              <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none mb-10 italic">
                The <br/><span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-800">Architects.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed">
                Meet the people who work behind the scenes to keep Mystic Haven safe, active, and welcoming every single day.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* The Core (Founders) */}
        <div className="mb-40">
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-16">
              <h3 className="text-sm font-black text-white uppercase tracking-[0.4em]">The Core</h3>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-1 gap-12">
            {founders.map((founder, i) => (
              <ScrollReveal key={i} direction="up">
                <div className="group relative flex flex-col md:flex-row items-center gap-12 p-12 rounded-[3rem] bg-[#120a21]/50 border border-white/5 backdrop-blur-xl">
                  <div className="relative w-32 h-32 md:w-48 md:h-48 shrink-0">
                    <div className="absolute inset-0 bg-purple-600 rounded-[2.5rem] rotate-6 group-hover:rotate-12 transition-transform duration-700 opacity-20 group-hover:opacity-40"></div>
                    <div className="absolute inset-0 bg-[#1a102b] rounded-[2.5rem] border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                      <span className="text-5xl md:text-7xl font-black text-white italic group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all duration-500">
                        {founder.initial}
                      </span>
                    </div>
                  </div>
                  <div className="text-center md:text-left space-y-4">
                    <span className="px-4 py-1 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-400 text-[10px] font-black uppercase tracking-widest">
                      {founder.role}
                    </span>
                    <h4 className="text-4xl md:text-6xl font-black text-white tracking-tight italic">{founder.name}</h4>
                    <p className="text-slate-400 text-lg md:text-xl max-w-xl font-medium leading-relaxed italic">
                      "{founder.bio}"
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* The Guardians (Staff) */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-16">
              <h3 className="text-sm font-black text-white uppercase tracking-[0.4em]">The Guardians</h3>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {guardians.map((member, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex flex-col items-center group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 h-full">
                  <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-purple-500/10 border border-white/10 group-hover:border-purple-500/50 group-hover:scale-110 transition-all duration-500"></div>
                    <div className="absolute inset-2 rounded-full bg-[#120a21] border border-white/5 flex items-center justify-center shadow-inner overflow-hidden">
                      <span className="text-white/40 group-hover:text-purple-400 font-black text-2xl transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] group-hover:scale-110">
                        {member.initial}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-white text-sm font-black text-center uppercase tracking-wider mb-2 transition-colors group-hover:text-purple-400">
                    {member.name}
                  </h4>
                  <div className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em] transition-colors group-hover:text-purple-500/70">
                    {member.role}
                  </div>
                  <div className="mt-4 w-6 h-0.5 bg-white/5 group-hover:bg-purple-600 group-hover:w-12 transition-all duration-500 rounded-full"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Accountability Banner */}
        <ScrollReveal>
          <div className="mt-40 p-12 md:p-20 rounded-[4rem] bg-[#120a21] border border-white/10 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-6 italic relative z-10">We lead with <span className="text-purple-500">Integrity.</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed relative z-10 font-medium">
              Our staff follows a strict code of conduct. We are here to serve the community and ensure every member feels respected and heard.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Staff;
