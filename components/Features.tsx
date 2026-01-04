
import React from 'react';
import { Icons } from '../constants';

const features = [
  {
    title: "Weekly Events",
    desc: "From game nights to community movie streams, there's always something happening in the haven.",
    icon: <Icons.Sparkles />
  },
  {
    title: "Vibrant Community",
    desc: "A group of 124 active members sharing art, code, and gaming highlights every single day.",
    icon: <Icons.Users />
  },
  {
    title: "Safe Environment",
    desc: "Strict moderation and custom bots ensure our community remains welcoming and safe for everyone.",
    icon: <Icons.Shield />
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-black mb-4 text-white">Built for the Community</h2>
          <p className="text-slate-400 max-w-xl">We focus on quality interactions over quantity. Here is why you should join us.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-purple-600/20 text-purple-500 flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
