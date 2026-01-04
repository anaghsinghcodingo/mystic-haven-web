
import React, { useState } from 'react';
import { Icons } from '../constants';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about' | 'offers' | 'reviews' | 'staff' | 'rules') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-[#0a0514]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate?.('home')}>
              {!imgError ? (
                <img 
                  src="logo.png" 
                  alt="Logo" 
                  className="w-12 h-12 rounded-xl"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white font-black">
                  M
                </div>
              )}
              <span className="text-3xl font-black tracking-tighter text-white uppercase italic">
                MYSTIC HAVEN
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium max-w-xs text-center md:text-left italic">
              The premium sanctuary for Indian teenagers. Chill, connect, and grow in a safe digital corner.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 w-full md:w-auto">
            <div className="flex flex-col gap-5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Explore</h4>
              <button onClick={() => onNavigate?.('home')} className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-purple-400 transition-colors text-left">Home</button>
              <button onClick={() => onNavigate?.('rules')} className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-purple-400 transition-colors text-left">Rules</button>
              <button onClick={() => onNavigate?.('offers')} className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-purple-400 transition-colors text-left">Offers</button>
            </div>
            
            <div className="flex flex-col gap-5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Community</h4>
              <button onClick={() => onNavigate?.('staff')} className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-purple-400 transition-colors text-left">Staff Team</button>
              <button onClick={() => onNavigate?.('about')} className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-purple-400 transition-colors text-left">Our Mission</button>
              <button onClick={() => onNavigate?.('reviews')} className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-purple-400 transition-colors text-left">Reviews</button>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Connect</h4>
              <div className="flex gap-4">
                <a 
                  href="https://discord.gg/hjraWTVQ95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-purple-600 transition-all text-white shadow-lg border border-white/5"
                >
                  <Icons.Discord />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest italic">© 2026 Mystic Haven Community</p>
          <div className="flex gap-8">
            <span className="text-slate-600 text-[9px] font-black uppercase tracking-widest italic flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              Systems Operational
            </span>
          </div>
        </div>
        
        <div className="mt-8 text-center md:text-left">
          <p className="text-slate-700 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] italic opacity-40 hover:opacity-100 transition-opacity">
            Developed by the Magician - Anagh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
