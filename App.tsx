
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Offers from './components/Offers';
import Reviews from './components/Reviews';
import Staff from './components/Staff';
import Rules from './components/Rules';
import { ScrollReveal } from './components/ScrollReveal';

type View = 'home' | 'about' | 'offers' | 'reviews' | 'staff' | 'rules';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  const navigateTo = (page: View) => {
    setView(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-purple-600/30 overflow-x-hidden bg-[#0b0616]">
      <Navbar onNavigate={navigateTo} currentView={view} />
      
      <main>
        {view === 'home' && (
          <div className="flex flex-col items-center">
            <Hero onLearnMore={() => navigateTo('about')} />
            
            {/* Fancy About Snippet - Home Page */}
            <div className="w-full max-w-6xl px-6 pb-40">
              <ScrollReveal>
                <button 
                  onClick={() => navigateTo('about')}
                  className="w-full text-left relative p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 backdrop-blur-xl overflow-hidden group transition-all duration-500 hover:border-purple-500/40"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-600/10 transition-colors duration-700"></div>
                  
                  <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-widest group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:bg-white"></span>
                        Our Mission
                      </div>
                      <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
                        A digital space that feels like <span className="text-purple-500 italic">home.</span>
                      </h3>
                    </div>
                    
                    <div className="space-y-8">
                      <p className="text-xl text-slate-400 leading-relaxed font-medium">
                        Mystic Haven is more than just a server. It’s a carefully curated sanctuary for Indian teens. 
                        Whether you're looking for gaming partners or late-night venting sessions, 
                        we’ve built a calm corner just for you.
                      </p>
                      
                      <div className="flex gap-12">
                        <div>
                          <div className="text-3xl font-black text-white">33</div>
                          <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1 italic">Specialized Channels</div>
                        </div>
                        <div className="w-px h-10 bg-white/10"></div>
                        <div>
                          <div className="text-3xl font-black text-white">Zero</div>
                          <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1 italic">Toxicity Tolerance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            </div>
          </div>
        )}
        {view === 'about' && <About />}
        {view === 'offers' && <Offers />}
        {view === 'reviews' && <Reviews />}
        {view === 'staff' && <Staff />}
        {view === 'rules' && <Rules />}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
