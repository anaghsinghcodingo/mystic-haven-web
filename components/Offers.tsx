
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const offers = [
  {
    title: "Late Night Sanctuary",
    subtitle: "Chill & Late Night Talks",
    desc: "When the world goes quiet, the Haven comes alive. Deep conversations, venting sessions, and relaxed vibes that make the night feel shorter.",
    gradient: "from-purple-500/10 to-transparent",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )
  },
  {
    title: "The Multi-Hub",
    subtitle: "Gaming, Music & Anime",
    desc: "Dedicated spaces for your hobbies. Find your Valorant duo, share your Spotify playlists, or discuss the latest seasonal anime releases.",
    gradient: "from-indigo-500/10 to-transparent",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    )
  },
  {
    title: "Zen Zone",
    subtitle: "Calm Vibes & Safe Space",
    desc: "A strictly moderated environment where peace is the priority. No toxicity, no drama—just a pure safe haven for your mental peace.",
    gradient: "from-violet-500/10 to-transparent",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Desi Corner",
    subtitle: "Indian Teen Friendly",
    desc: "Connect with people who get your culture. From relatable memes to local trends, it's a slice of home in a digital world.",
    gradient: "from-fuchsia-500/10 to-transparent",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h.5A2.5 2.5 0 0118 14.5v.326a2.36 2.36 0 00.717 1.67l2.329 2.329m7.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const Offers: React.FC = () => {
  return (
    <section className="pt-32 md:pt-48 pb-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Elegant Header */}
        <ScrollReveal>
          <div className="text-center mb-20 md:mb-32 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <h2 className="text-xs md:text-sm font-black text-purple-500 uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4 md:mb-6">Experience</h2>
            <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic">
              What we <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-800">Offer.</span>
            </h1>
          </div>
        </ScrollReveal>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {offers.map((offer, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div 
                className={`group relative p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br ${offer.gradient} border border-white/5 backdrop-blur-3xl hover:border-purple-500/30 transition-all duration-700 h-full`}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8 md:mb-12 flex justify-between items-start">
                    <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-[#120a21] border border-white/10 text-purple-500 group-hover:text-white group-hover:bg-purple-600 transition-all duration-500 shadow-xl">
                      {offer.icon}
                    </div>
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">0{i + 1}</span>
                  </div>
                  
                  <h3 className="text-[10px] md:text-sm font-black text-purple-500 uppercase tracking-widest mb-2 md:mb-3">{offer.title}</h3>
                  <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-4 md:mb-6 italic">{offer.subtitle}</h2>
                  <p className="text-slate-400 leading-relaxed font-medium text-base md:text-lg">
                    {offer.desc}
                  </p>
                  
                  <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5 flex items-center gap-4 text-purple-400 font-black text-[10px] uppercase tracking-widest md:opacity-0 md:group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500">
                    Explore Hub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Banner */}
        <ScrollReveal>
          <div className="mt-24 md:mt-32 p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] bg-[#120a21] border border-white/10 relative overflow-hidden group text-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <h2 className="text-2xl md:text-5xl font-black text-white mb-6 md:mb-8 relative z-10 italic">Ready to find your <span className="text-purple-500">spot?</span></h2>
            <a 
              href="https://discord.gg/hjraWTVQ95" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-10 md:px-12 py-4 md:py-5 bg-white text-purple-900 font-black rounded-xl md:rounded-2xl hover:scale-105 transition-transform shadow-2xl relative z-10 uppercase tracking-widest text-xs md:text-sm"
            >
              Enter the Haven
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Offers;
