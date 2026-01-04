
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const reviews = [
  {
    name: "Dusk",
    role: "Regular Member",
    quote: "Actually a really chill place. I've been here for a bit and the community is super welcoming to newcomers. Highly recommend joining if you want a non-toxic environment.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dusk",
    rating: 5,
    tag: "Verified Member"
  },
  {
    name: "Luna",
    role: "Gamer",
    quote: "The game nights are the highlight of my week. Everyone is friendly and it's easy to find people to play with. The vibes are unmatched.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna",
    rating: 5,
    tag: "Active Gamer"
  },
  {
    name: "Solstice",
    role: "Creative",
    quote: "I love the creative vibe here. The channels are well-organized and the staff is active but not overbearing. It really feels like a haven.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Solstice",
    rating: 5,
    tag: "Art Enthusiast"
  },
  {
    name: "Astra",
    role: "Late Night Chatter",
    quote: "Found my best friends here. The VCs are always active around 2 AM and it's just the best feeling to talk your heart out.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Astra",
    rating: 5,
    tag: "Night Owl"
  },
  {
    name: "Zen",
    role: "Study Hub Regular",
    quote: "The study channels help me focus so much. Having people to study with virtually makes it less lonely.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zen",
    rating: 5,
    tag: "Scholar"
  },
  {
    name: "Rogue",
    role: "Valorant Comp",
    quote: "Finding a non-toxic duo in India is hard. Mystic Haven made it easy. We've been playing together for 3 months now.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rogue",
    rating: 5,
    tag: "Top Fragger"
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="pt-48 pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Header */}
        <ScrollReveal>
          <div className="mb-32 relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="max-w-3xl">
              <h2 className="text-xs font-black text-purple-500 uppercase tracking-[0.5em] mb-6">Testimonials</h2>
              <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none mb-10 italic">
                Voices of the <br/><span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-800">Haven.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed">
                We don't just host members; we build friendships. See what our community has to say about their experience in the haven.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div 
                className="group relative p-10 rounded-[2.5rem] bg-[#120a21]/50 border border-white/5 backdrop-blur-xl hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
              >
                <div className="flex gap-1 mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                  {[...Array(rev.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-purple-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-slate-300 text-lg leading-relaxed mb-12 italic font-medium relative z-10">
                  "{rev.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 bg-purple-600 rounded-2xl rotate-3 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
                    <img 
                      src={rev.avatar} 
                      alt={rev.name} 
                      className="relative w-full h-full object-cover rounded-2xl border border-white/10 shadow-lg"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-black uppercase text-sm tracking-widest">{rev.name}</h4>
                      <svg className="w-3.5 h-3.5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                    </div>
                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{rev.role}</div>
                  </div>
                </div>

                <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all">
                  <span className="px-3 py-1 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400 text-[9px] font-black uppercase tracking-tighter">
                    {rev.tag}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-32 text-center p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 relative group">
            <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[4rem]"></div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10 italic">
              Enjoying your stay <span className="text-purple-500">at the Haven?</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10 relative z-10 text-lg">
              Share your experience with others on Disboard and help our community grow.
            </p>
            <a 
              href="https://disboard.org/server/1438560636429930540" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-10 py-4 bg-purple-600 text-white font-black rounded-xl hover:scale-105 transition-all uppercase tracking-widest text-xs relative z-10 shadow-2xl"
            >
              Submit a Review
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Reviews;
