import React from 'react';

// आपकी कंपनी की मुख्य 4 प्रीमियम सर्विसेज
const services = [
  {
    title: "10x 'Single-Button' Automation",
    desc: "We eliminate operational bottlenecks. Converting complex spreadsheet tasks, repetitive reporting, and manual data processing into robust single-click automated systems using VBA, Apps Script, and Python.",
  },
  {
    title: "Custom ERP, CRM & SaaS Development",
    desc: "End-to-end engineering of tailored business platforms. We design robust database architectures, enterprise-grade secure backends, and highly intuitive modern frontends.",
  },
  {
    title: "Advanced Web Scraping & Data Extraction",
    desc: "Building highly resilient custom scrapers capable of bypassing advanced protections to mine complex data structures and funnel them directly into your database pipelines.",
  },
  {
    title: "Live Interactive Dashboards & BI",
    desc: "Turning raw tables into live, actionable decision-making charts. Creating custom executive dashboards powered by real-time automated data processing.",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6 border-b border-slate-900">
      {/* सेक्शन हेडर */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Core Engineering Services</h2>
        <p className="text-slate-400">High-tier technical solutions crafted to run your business operations on complete autopilot.</p>
      </div>
      
      {/* सर्विसेज का सुंदर Tailwind ग्रिड (होवर इफेक्ट्स के साथ) */}
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className="p-8 bg-slate-900/40 rounded-2xl border border-slate-900/80 hover:border-blue-900/50 hover:-translate-y-1 transition-all duration-300 group"
          >
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}