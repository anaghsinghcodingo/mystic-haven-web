
import React, { useState, useEffect } from 'react';
import { Icons } from '../constants';

interface NavbarProps {
  onNavigate: (page: 'home' | 'about' | 'offers' | 'reviews' | 'staff' | 'rules') => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [imgError, setImgError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on navigation
  const handleNav = (page: 'home' | 'about' | 'offers' | 'reviews' | 'staff' | 'rules') => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks: { label: string; view: 'home' | 'about' | 'offers' | 'reviews' | 'staff' | 'rules' }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Rules', view: 'rules' },
    { label: 'Offers', view: 'offers' },
    { label: 'Staff', view: 'staff' },
    { label: 'About', view: 'about' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[110] px-4 md:px-6 py-4 md:py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
          {/* Logo Glass Card */}
          <div 
            className="flex items-center gap-3 md:gap-4 cursor-pointer group p-1.5 pr-4 md:pr-6 rounded-2xl bg-[#120a21]/60 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500"
            onClick={() => handleNav('home')}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl overflow-hidden bg-purple-600 flex items-center justify-center text-white font-black shadow-lg">
              {!imgError ? (
                <img src="logo.png" alt="M" className="w-full h-full object-cover" onError={() => setImgError(true)} />
              ) : "M"}
            </div>
            <span className="text-[10px] md:text-sm font-black tracking-[0.2em] md:tracking-[0.3em] text-white uppercase italic truncate max-w-[120px] md:max-w-none">
              Mystic Haven
            </span>
          </div>
          
          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-2 p-2 rounded-2xl bg-[#120a21]/40 backdrop-blur-xl border border-white/10 overflow-hidden">
            {navLinks.map((link) => (
              <button 
                key={link.view}
                onClick={() => handleNav(link.view)}
                className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${currentView === link.view ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                {link.label}
              </button>
            ))}
            <div className="w-px h-6 bg-white/10 mx-2"></div>
            <a 
              href="https://discord.gg/hjraWTVQ95" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black bg-white text-purple-900 uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
            >
              <Icons.Discord />
              Join
            </a>
          </div>

          {/* Mobile Menu Toggle (Three line type) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-11 h-11 rounded-xl bg-[#120a21]/60 backdrop-blur-xl border border-white/10 text-white transition-all hover:border-purple-500/50 active:scale-95 z-[120]"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-4">
              <span className={`absolute left-0 block w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
              <span className={`absolute left-0 block w-full h-0.5 bg-current transition-all duration-300 top-2 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
              <span className={`absolute left-0 block w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[105] lg:hidden transition-all duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="absolute inset-0 bg-[#0b0616]/95 backdrop-blur-3xl"></div>
        {/* Decorative background glow for mobile menu */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative h-full flex flex-col items-center justify-center p-6 space-y-8">
          <div className="flex flex-col items-center gap-2 w-full max-w-xs">
            {navLinks.map((link, i) => (
              <button
                key={link.view}
                onClick={() => handleNav(link.view)}
                style={{ transitionDelay: `${i * 50}ms` }}
                className={`w-full py-6 text-2xl font-black uppercase tracking-tighter italic transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${currentView === link.view ? 'text-purple-500' : 'text-white'}`}
              >
                {link.label}
              </button>
            ))}
          </div>
          
          <div className={`w-full max-w-xs pt-8 border-t border-white/10 transition-all duration-700 delay-300 ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <a 
              href="https://discord.gg/hjraWTVQ95" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 w-full py-5 rounded-2xl bg-purple-600 text-white font-black uppercase tracking-widest text-lg shadow-2xl"
            >
              <Icons.Discord />
              Join the Haven
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
