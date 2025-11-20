import React from 'react';
import { VALUES } from '../constants';

const PlatformIntro: React.FC = () => {
  return (
    <section id="values" className="py-24 relative bg-slate-900 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            我们的森林法则
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            在此念文化，我们不制造焦虑，只培育灵魂的养分。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((value, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl glass-panel hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] border border-white/5"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 border border-white/10">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                {value.title}
              </h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformIntro;