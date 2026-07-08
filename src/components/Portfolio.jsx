import React from 'react';

// आपके 4 बड़े रियल-वर्ल्ड प्रोजेक्ट्स का डेटा
const projects = [
  {
    title: "MP Markfed Inventory Automation",
    description: "Successfully automated large-scale inventory and supply chain data processing. Transformed complex legacy manual workflows into a unified system, boosting operational speed by 10x.",
    tech: ["Python", "Django", "PostgreSQL", "Excel Automation"]
  },
  {
    title: "Zerodha Kite Intraday Automation",
    description: "Built an intelligent algorithmic trading assistant that automates data parsing, technical indicator analysis, and real-time execution via Kite Connect APIs.",
    tech: ["Python", "Kite API", "WebSockets", "Automation"]
  },
  {
    title: "Dr. Coolcare GST Structure Automation",
    description: "Developed a custom invoicing and GST structure automation engine, eliminating human calculations and ensuring 100% accurate, single-click billing operations.",
    tech: ["VBA", "Advanced Excel", "Power Query"]
  },
  {
    title: "Secure School Management Backend",
    description: "Architected a scalable school management platform backend featuring enterprise-grade security, Google OAuth integration, and robust RBAC (Role-Based Access Control).",
    tech: ["Python", "Django", "Google OAuth", "REST APIs"]
  }
];

export default function Portfolio() {
  return (
    <section id="projects" className="py-24 bg-slate-900/10 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* सेक्शन हेडर */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Proven Case Studies</h2>
          <p className="text-slate-400">Real automation architectures built to handle enterprise scale and precision engineering.</p>
        </div>
        
        {/* प्रोजेक्ट्स का ग्रिड */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className="flex flex-col justify-between p-8 bg-gradient-to-b from-slate-900/60 to-slate-900/20 rounded-2xl border border-slate-900 hover:border-slate-800 transition-all duration-300"
            >
              <div>
                {/* प्रोजेक्ट टाइटल */}
                <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">
                  {proj.title}
                </h3>
                {/* प्रोजेक्ट का काम */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>
              
              {/* इस्तेमाल की गई टेक्नोलॉजी के छोटे बैज */}
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-md text-slate-400 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}