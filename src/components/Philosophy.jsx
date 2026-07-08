import React from 'react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 max-w-5xl mx-auto px-6 text-center border-b border-slate-900">
      <div className="p-8 md:p-12 bg-blue-950/20 border border-blue-900/30 rounded-3xl relative overflow-hidden">
        {/* सजावटी बैकग्राउंड ग्लो */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500/5 blur-3xl rounded-full" />
        
        {/* सेक्शन का छोटा टाइटल */}
        <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-4 font-mono tracking-wider">
          OUR MANDATE
        </h3>
        
        {/* आपकी मुख्य कार्य नीति */}
        <p className="text-xl md:text-2xl font-light text-slate-200 max-w-3xl mx-auto leading-relaxed italic">
          "We do not engage in simple manual data entry or basic lead research. We build the architecture that automates it. If it can be done manually in 8 hours, we build the button that does it in 8 seconds."
        </p>
      </div>
    </section>
  );
}