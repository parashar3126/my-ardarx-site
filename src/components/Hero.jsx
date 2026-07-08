import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 border-b border-slate-900">
      {/* बैकग्राउंड में चमकता हुआ प्रीमियम ग्लो इफेक्ट */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_45%)]" />
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* छोटा बैज जो आपकी कोर पहचान दिखाता है */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-950 text-blue-400 border border-blue-900 mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> The Ground-Up Automation Architect
        </span>
        
        {/* मुख्य दमदार हेडलाइन */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Transforming Manual Workflows Into <br />
          <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            10x 'Single-Button' Efficiency
          </span>
        </h1>
        
        {/* एजेंसी का मुख्य सब-टेक्स्ट (डेटा एंट्री रिजेक्शन के साथ) */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          We architect intelligent SaaS, custom web systems, and high-performance automated tools that eliminate repetitive tasks entirely. No data-entry shortcuts—just pure, institutional-grade software engineering.
        </p>
        
        {/* ऐक्शन बटन्स जो सीधे प्रोजेक्ट्स और कॉन्टैक्ट पर ले जाएंगे */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20 text-center">
            View Case Studies
          </a>
          <a href="#contact" className="px-8 py-4 rounded-xl bg-slate-900 text-slate-300 font-semibold border border-slate-800 hover:bg-slate-800 transition-all text-center">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}