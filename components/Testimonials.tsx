
import React from 'react';

const testimonials = [
  {
    name: "Dusk",
    role: "Regular Member",
    quote: "Actually a really chill place. I've been here for a bit and the community is super welcoming to newcomers. Highly recommend joining if you want a non-toxic environment.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dusk"
  },
  {
    name: "Luna",
    role: "Gamer",
    quote: "The game nights are the highlight of my week. Everyone is friendly and it's easy to find people to play with. 5/5 stars!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna"
  },
  {
    name: "Solstice",
    role: "Creative",
    quote: "I love the creative vibe here. The channels are well-organized and the staff is active but not overbearing. It really feels like a haven.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Solstice"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-black mb-4 text-white">Member Reviews</h2>
          <p className="text-slate-400 max-w-xl">We pride ourselves on being one of the most welcoming communities on Disboard.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-10 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col justify-between hover:bg-white/[0.05] transition-all">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 italic mb-10 leading-relaxed text-lg">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl border border-white/10 shadow-lg" />
                <div>
                  <div className="text-white font-black text-lg">{t.name}</div>
                  <div className="text-purple-500 text-xs font-bold uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://disboard.org/server/1438560636429930540" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
          >
            Read more reviews on Disboard
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
