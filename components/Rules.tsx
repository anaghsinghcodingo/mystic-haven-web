
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const rules = [
  { id: "01", title: "Respect the Realm", desc: "Be kind, don’t hate, don’t target anyone. Keep the vibe peaceful." },
  { id: "02", title: "Keep the Space Clean", desc: "No spam, flooding, ear-rape, or unnecessary tagging." },
  { id: "03", title: "Stay in the Right Channels", desc: "Use each channel for its proper purpose." },
  { id: "04", title: "No NSFW or Disturbing Content", desc: "Keep the server safe and comfortable for everyone." },
  { id: "05", title: "Respect Privacy", desc: "Don’t share or ask for anyone’s personal information." },
  { id: "06", title: "No Self-Promo", desc: "Only share links or promotions where it’s specifically allowed." },
  { id: "07", title: "Listen to the Moderators", desc: "Their decisions keep the server running smoothly." },
  { id: "08", title: "No Drama or Toxic Behavior", desc: "Arguments happen — drama shouldn’t." },
  { id: "09", title: "Use Common Sense", desc: "If something might ruin the vibe, don’t do it." },
  { id: "10", title: "Enjoy the Haven", desc: "Talk, chill, make friends, and keep the energy pure 💜🌙" }
];

const Rules: React.FC = () => {
  return (
    <section className="pt-32 md:pt-48 pb-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <ScrollReveal>
          <div className="mb-20 md:mb-32 relative text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-[10px] md:text-xs font-black text-purple-500 uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 md:mb-6">Constitution</h2>
              <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6 md:mb-10 italic">
                🌌 Mystic <br/><span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-800 text-5xl md:text-9xl">Haven Rules.</span>
              </h1>
              <p className="text-base md:text-xl text-slate-400 font-medium max-w-2xl mx-auto italic px-4">
                "A sanctuary is only as strong as the peace it protects."
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Rules Grid */}
        <div className="space-y-4 md:space-y-6">
          {rules.map((rule, i) => (
            <ScrollReveal key={i} delay={i * 100} direction="up">
              <div 
                className="group relative flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-[#120a21]/50 border border-white/5 hover:border-purple-500/30 backdrop-blur-xl transition-all duration-500"
              >
                <div className="shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-purple-600/10 border border-purple-500/20 text-purple-500 font-black text-xl md:text-2xl italic group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-xl">
                  {rule.id}
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-2 md:mb-3 italic group-hover:text-purple-400 transition-colors">
                    {rule.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-lg font-medium leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                    {rule.desc}
                  </p>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/5 group-hover:bg-purple-600/50 transition-colors"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Closing Footer */}
        <ScrollReveal>
          <div className="mt-24 md:mt-40 text-center space-y-6 md:space-y-8 px-4">
            <div className="inline-block px-6 md:px-8 py-2 md:py-3 rounded-full bg-white/[0.02] border border-white/10 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
              Strict Enforcement Active
            </div>
            <p className="text-slate-500 max-w-xl mx-auto italic text-sm md:text-base leading-relaxed">
              By being a member of Mystic Haven, you implicitly agree to follow these guidelines. 
              Failure to do so may result in temporary or permanent suspension of your residency.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Rules;
