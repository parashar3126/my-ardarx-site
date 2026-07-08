import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* कंपनी का नाम / ब्रांड लोगो */}
        <div className="text-2xl font-black tracking-wider bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
          ARDARX<span className="text-slate-400 text-sm font-medium tracking-normal block -mt-1">IT SOLUTION</span>
        </div>
        
        {/* नेविगेशन लिंक्स */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#projects" className="hover:text-white transition-colors">Key Projects</a>
          <a href="#philosophy" className="hover:text-white transition-colors">Our Philosophy</a>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/30">
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}