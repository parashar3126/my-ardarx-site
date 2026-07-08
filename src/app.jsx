import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* 1. हेडर (नेविगेशन बार) */}
      <Header />

      {/* 2. हीरो सेक्शन (मुख्य बैनर) */}
      <Hero />

      {/* 3. सर्विसेज सेक्शन (हमारी सेवाएं) */}
      <Services />

      {/* 4. पोर्टफोलियो सेक्शन (प्रोजेक्ट केस स्टडीज) */}
      <Portfolio />

      {/* 5. फिलॉसफी सेक्शन (हमारी कार्य नीति) */}
      <Philosophy />

      {/* 6. कॉन्टैक्ट सेक्शन (ईमेल बॉक्स) */}
      <Contact />

      {/* फुटर (कॉपीराइट नोट) */}
      <footer className="py-8 border-t border-slate-900 text-center text-xs text-slate-600">
        &copy; {new Date().getFullYear()} Ardarx IT Solution. All Rights Reserved.
      </footer>
    </div>
  );
}