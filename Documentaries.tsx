import React from 'react';
import { Play, Clock, Hash } from 'lucide-react';
import { DOCUMENTARIES } from '../constants';

const Documentaries: React.FC = () => {
  return (
    <section id="documentaries" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
              精选纪录片
            </h2>
            <p className="text-slate-400">透过镜头，看见万物生灵的呼吸</p>
          </div>
          <button className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 transition-colors">
            查看全部作品 &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCUMENTARIES.map((doc) => (
            <div 
              key={doc.id} 
              className="group relative rounded-xl overflow-hidden bg-slate-800 shadow-lg transition-all duration-300 hover:shadow-emerald-900/20 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Thumbnail Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={doc.thumbnail} 
                  alt={doc.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center pl-1 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                    <Play fill="white" className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white flex items-center gap-1 backdrop-blur-sm">
                  <Clock size={12} /> {doc.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-1">
                  {doc.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 line-clamp-2 h-10">
                  {doc.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {doc.tags.map((tag, i) => (
                    <span key={i} className="inline-flex items-center gap-0.5 text-xs px-2 py-1 rounded bg-slate-700 text-slate-300">
                      <Hash size={10} /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documentaries;