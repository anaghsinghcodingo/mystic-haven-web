
import React, { useState } from 'react';
import { Icons } from '../constants';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  onLearnMore?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLearnMore }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-32 md:pt-48 pb-12 px-6 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-5%] md:top-[-10%] left-[10%] md:left-[20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-indigo-600/5 rounded-full blur-[80px] md:blur-[100px]"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <div className="flex justify-center mb-10 md:mb-14">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/20 to-indigo-600/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative p-1 rounded-[2.2rem] bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-sm">
                <div className="bg-[#120a21] rounded-[2rem] overflow-hidden w-28 h-28 md:w-44 md:h-44 flex items-center justify-center border border-white/5 relative shadow-inner">
                  {!imgError ? (
                    <img 
                      src="logo.png" 
                      alt="Mystic Haven" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="text-white text-5xl md:text-8xl font-black italic tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">
                      M
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                </div>
                
                <div className="absolute -bottom-1 -right-1 flex items-center gap-1.5 px-3 py-1 bg-[#1a102b] border border-white/10 rounded-full shadow-xl">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[9px] md:text-[10px] font-bold text-white/70 uppercase tracking-widest">Online</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <div className="space-y-4 md:space-y-6 mb-10 md:mb-12">
          <ScrollReveal delay={200}>
            <h1 className="text-xs md:text-base font-bold text-purple-400 uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4">
              Mystic Haven
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <h2 className="text-4xl md:text-8xl font-black text-white tracking-tight leading-[1.15] md:leading-[1.1] selection:bg-purple-500">
              A calm Indian teen corner to <br className="hidden md:block" />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                chill, play & connect
              </span>
            </h2>
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={600} direction="none">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a 
              href="https://discord.gg/hjraWTVQ95"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 md:px-14 py-4 md:py-5 bg-purple-600 text-white font-black text-lg md:text-xl rounded-2xl hover:bg-purple-500 transition-all shadow-[0_0_40px_-10px_rgba(147,51,234,0.5)] flex items-center justify-center gap-4 group"
            >
              <Icons.Discord />
              Join the Haven
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <button 
              onClick={onLearnMore}
              className="w-full sm:w-auto px-8 md:px-14 py-4 md:py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-base md:text-lg hover:bg-white/10 transition-all text-white backdrop-blur-md"
            >
              Explore More
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
