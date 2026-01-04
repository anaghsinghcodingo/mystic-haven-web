
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section className="pt-32 md:pt-48 pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <ScrollReveal>
          <div className="mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-end justify-between">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter mb-6 md:mb-8 italic">
                  Beyond the <br className="hidden md:block"/><span className="text-purple-600">Screen.</span>
                </h1>
                <p className="text-lg md:text-2xl text-slate-400 leading-relaxed font-medium">
                  We didn't just want to build another Discord server. We wanted to build a haven 
                  where your identity as an Indian teenager is celebrated and protected.
                </p>
              </div>
              <div className="hidden md:block pb-4">
                <div className="w-32 h-px bg-white/20"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-40">
          {[
            { 
              title: "Toxicity Free", 
              desc: "Our automated systems and dedicated staff work 24/7 to keep the environment friendly and welcoming.",
              num: "01"
            },
            { 
              title: "33 Channels", 
              desc: "From #study-hub to #valorant-lfg, our structure ensures your notifications are only about what you love.",
              num: "02"
            },
            { 
              title: "Indian Culture", 
              desc: "A space where you can share desi memes, talk about local trends, and connect with people nearby.",
              num: "03"
            }
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 200}>
              <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all duration-500 h-full">
                <div className="text-purple-600 text-xs md:text-sm font-black mb-8 md:mb-12 tracking-widest">{item.num}</div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4 uppercase">{item.title}</h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Deep Dive Section */}
        <div className="mb-24 md:mb-40 space-y-24 md:space-y-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal direction="up" className="order-2 md:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-purple-600/10 rounded-[3rem] md:rounded-[4rem] blur-2xl group-hover:bg-purple-600/20 transition-all"></div>
                <div className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-tr from-purple-900/50 to-slate-900 border border-white/10 flex items-center justify-center p-8 md:p-12 overflow-hidden shadow-2xl">
                  <div className="text-center space-y-4 md:space-y-6">
                    <div className="text-5xl md:text-7xl font-black text-white italic opacity-20">01</div>
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">The Core Philosophy</h3>
                    <div className="w-10 md:w-12 h-1 bg-purple-600 mx-auto rounded-full"></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" className="order-1 md:order-2">
              <div className="space-y-6 md:space-y-8">
                <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight leading-none italic">Quality over <br className="hidden md:block"/><span className="text-purple-500">Quantity.</span></h2>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
                  Most servers focus on member count. We focus on member experience. Every channel, role, and rule in Mystic Haven is designed to foster meaningful interactions. 
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6 md:pt-8">
                  <div>
                    <h4 className="text-white font-black uppercase text-[10px] tracking-widest mb-1 italic">Since</h4>
                    <p className="text-slate-500 text-xs italic">Founded 2026</p>
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase text-[10px] tracking-widest mb-1 italic">Base</h4>
                    <p className="text-slate-500 text-xs italic">India / Digital</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="space-y-16 md:space-y-24">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="relative aspect-video rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-purple-600/20 to-indigo-900/40 border border-white/10 overflow-hidden flex items-center justify-center group">
                 <div className="text-purple-500 font-black text-base md:text-xl tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity italic text-center px-4">Safe Haven</div>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl md:text-3xl font-black text-white italic tracking-tight">The Haven Standard</h4>
                <p className="text-base md:text-lg text-slate-400 leading-relaxed italic">
                  We prioritize mental health and a calm atmosphere. This isn't a place for drama 
                  or ego—it's a place for growth, laughter, and shared moments in voice chat.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="order-2 md:order-1 space-y-4">
                <h4 className="text-2xl md:text-3xl font-black text-white italic tracking-tight">Vibrant Evenings</h4>
                <p className="text-base md:text-lg text-slate-400 leading-relaxed italic">
                  Our evenings are filled with movie streams, casual gaming, and 'chai-pe-charcha' 
                  style conversations. There is always a seat at our digital table for you.
                </p>
              </div>
              <div className="order-1 md:order-2 relative aspect-video rounded-[2rem] md:rounded-[3rem] bg-gradient-to-bl from-indigo-600/20 to-purple-900/40 border border-white/10 overflow-hidden flex items-center justify-center group">
                 <div className="text-indigo-400 font-black text-base md:text-xl tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity italic text-center px-4">Vibrant Vibes</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
