import React from 'react';
import { Quote } from 'lucide-react';
import { FOUNDER_INFO } from '../constants';

const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500 rounded-2xl rotate-6 opacity-20 blur-sm"></div>
                        <img 
                            src={FOUNDER_INFO.image} 
                            alt={FOUNDER_INFO.name} 
                            className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-2xl shadow-2xl relative z-10 filter grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                <div className="w-full md:w-2/3 text-left">
                    <h2 className="text-3xl font-serif font-bold text-white mb-1">
                        {FOUNDER_INFO.name}
                    </h2>
                    <p className="text-emerald-500 font-medium mb-6 uppercase tracking-wider text-sm">
                        {FOUNDER_INFO.title}
                    </p>
                    
                    <div className="mb-8 relative">
                        <Quote className="absolute -top-4 -left-6 text-emerald-900/40 w-16 h-16 transform -scale-x-100" />
                        <p className="text-slate-300 text-lg leading-relaxed relative z-10">
                            {FOUNDER_INFO.bio}
                        </p>
                    </div>

                    <blockquote className="pl-4 border-l-4 border-emerald-500/30 italic text-slate-400 text-xl font-serif">
                        {FOUNDER_INFO.quote}
                    </blockquote>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;