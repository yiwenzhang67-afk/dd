import React from 'react';
import { TAGLINE } from '../constants';
import { PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=1" 
          alt="Mystical Forest" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900"></div>
      </div>

      {/* Animated Particles/Fireflies (Simulated with CSS) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-200 rounded-full blur-[2px] animate-pulse opacity-70"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-emerald-300 rounded-full blur-[3px] animate-bounce opacity-50" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white rounded-full blur-[1px] animate-ping opacity-60" style={{ animationDuration: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 animate-fade-in-down">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-sm tracking-widest uppercase mb-4 backdrop-blur-sm">
            Welcome to Ci Nian
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-teal-200 mb-6 leading-tight drop-shadow-lg">
          探索内在的<br />奇幻森林
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light tracking-wide">
          {TAGLINE}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#documentaries"
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2"
          >
            <PlayCircle size={20} />
            开始旅程
          </a>
          <a 
            href="#spirit"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white rounded-full font-medium transition-all hover:border-white/30"
          >
            召唤森灵
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;