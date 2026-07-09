import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef(); // 1. फॉर्म का रेफरेंस हैंडल करने के लिए
  const [isSending, setIsSending] = useState(false); // लोडिंग स्टेट के लिए
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '$200 - $500',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // 🔑 आपकी लाइव EmailJS क्रेडेंशियल्स
    const SERVICE_ID = 'service_vl8txyp'; 
    const TEMPLATE_ID = 'template_v7fk326'; // 👈 यहाँ नया वाला आईडी डाल दिया है
    const PUBLIC_KEY = 'igUOkQwnWKdPk8Hcw';
    // 🚀 ईमेल भेजने का ऑटोमेशन लॉजिक
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        alert(`Thank you ${formData.name}! Ardarx IT Solution will contact you shortly.`);
        // ईमेल जाने के बाद फॉर्म खाली करने के लिए
        setFormData({ name: '', email: '', budget: '$200 - $500', details: '' });
      }, (error) => {
        alert("Oops! Something went wrong. Please try again or email directly.");
        console.error("EmailJS Error:", error.text);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-6 border-b border-slate-900">
      {/* हेडिंग */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Start Your Automation Journey</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Ready to build institutional-grade software solutions? Fill out the form below or reach out directly via email.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8 items-start">
        {/* बायाँ हिस्सा: डायरेक्ट ईमेल इंफो */}
        <div className="md:col-span-2 p-6 bg-slate-900/50 rounded-2xl border border-slate-900 space-y-4">
          <div>
            <span className="text-xs text-slate-500 block uppercase font-mono tracking-wider mb-1">Direct Agency Email</span>
            <a href="mailto:amit@ardarx.com" className="text-lg font-bold text-blue-400 hover:text-blue-300 transition-colors select-all">
              amit@ardarx.com
            </a>
          </div>
          <div className="text-xs text-slate-500 font-mono pt-4 border-t border-slate-800">
            ⚡ Response Time: Within 12 Hours
          </div>
        </div>

        {/* दायाँ हिस्सा: प्रीमियम कांटैक्ट फॉर्म */}
        {/* 2. यहाँ ref={formRef} जोड़ा गया है ताकि EmailJS डेटा रीड कर सके */}
        <form ref={formRef} onSubmit={handleSubmit} className="md:col-span-3 space-y-5 p-8 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl text-left">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Your Name</label>
            <input 
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe" 
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 focus:outline-none focus:border-blue-500 transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
            <input 
              type="email" 
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com" 
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 focus:outline-none focus:border-blue-500 transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Estimated Project Budget</label>
            <select 
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-300 focus:outline-none focus:border-blue-500 transition-colors text-sm"
            >
              <option>$200 - $500</option>
              <option>$500 - $1000</option>
              <option>$1000+</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Project Constraints & Requirements</label>
            <textarea 
              name="details"
              required
              rows="4"
              value={formData.details}
              onChange={handleChange}
              placeholder="Describe the manual workflow or application architecture you want us to build..." 
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
            />
          </div>

          {/* 3. बटन को भेजने के दौरान डिसेबल करने के लिए स्टेट जोड़ी गई है */}
          <button 
            type="submit" 
            disabled={isSending}
            className="w-full py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/30 text-center text-sm cursor-pointer disabled:bg-blue-800 disabled:cursor-not-allowed"
          >
            {isSending ? 'Sending...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </section>
  );
}