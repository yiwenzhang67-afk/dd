import React from 'react';
import { Leaf, Instagram, Twitter, Youtube } from 'lucide-react';
import { BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Leaf className="w-6 h-6 text-emerald-500" />
            <span className="text-xl font-serif font-bold text-slate-200">
              {BRAND_NAME}
            </span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Youtube size={20} />
            </a>
          </div>
          
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;