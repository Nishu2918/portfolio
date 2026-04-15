import React from 'react';
import { Section } from '../components/ui/Section.jsx';
// Using Material Symbols instead of lucide-react

const Contact = () => {
  return (
    <main className="max-w-7xl mx-auto px-8 py-32 md:py-48">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left Column: Content & Form */}
        <div className="lg:col-span-7 space-y-16">
          <header className="space-y-8">
            <h1 className="font-headline text-6xl md:text-8xl font-normal tracking-tighter text-[#1b1c19] italic">
              Let's Connect.
            </h1>
            <p className="text-[#4e453c] font-body text-xl md:text-2xl max-w-xl leading-relaxed">
              I'm currently available for selective freelance partnerships and exciting new project inquiries.
            </p>
          </header>

          <section className="bg-[#f6f3ed] p-8 md:p-12 border border-[#76553e]/15">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="font-label text-xs font-bold text-[#76553e] uppercase tracking-[0.2em]">Full Name</label>
                  <input 
                    className="w-full bg-transparent border-0 border-b border-[#d8c2bc]/30 rounded-none py-4 px-0 text-[#1b1c19] focus:ring-0 focus:border-[#76553e] transition-all outline-none placeholder:text-[#85736e]/40" 
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-label text-xs font-bold text-[#76553e] uppercase tracking-[0.2em]">Email Address</label>
                  <input 
                    className="w-full bg-transparent border-0 border-b border-[#d8c2bc]/30 rounded-none py-4 px-0 text-[#1b1c19] focus:ring-0 focus:border-[#76553e] transition-all outline-none placeholder:text-[#85736e]/40" 
                    placeholder="john@example.com" 
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="font-label text-xs font-bold text-[#76553e] uppercase tracking-[0.2em]">Inquiry Type</label>
                <select className="w-full bg-transparent border-0 border-b border-[#d8c2bc]/30 rounded-none py-4 px-0 text-[#1b1c19] focus:ring-0 focus:border-[#76553e] transition-all outline-none appearance-none cursor-pointer">
                  <option>Freelance Project</option>
                  <option>Full-time Role</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="font-label text-xs font-bold text-[#76553e] uppercase tracking-[0.2em]">Message</label>
                <textarea 
                  className="w-full bg-transparent border-0 border-b border-[#d8c2bc]/30 rounded-none py-4 px-0 text-[#1b1c19] focus:ring-0 focus:border-[#76553e] transition-all outline-none placeholder:text-[#85736e]/40 resize-none" 
                  placeholder="Tell me about your project..." 
                  rows="4"
                ></textarea>
              </div>
              <button className="w-full bg-[#76553e] text-white font-headline font-bold py-5 rounded-none text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-90 active:scale-[0.98]" type="submit">
                Send Inquiry
              </button>
            </form>
          </section>
        </div>

        {/* Right Column: Info & Status */}
        <div className="lg:col-span-5 space-y-16">
          {/* Status Card */}
          <div className="bg-[#e9e6df] p-8 md:p-10 border border-[#76553e]/15 space-y-10 relative overflow-hidden group">
            <div className="space-y-4">
              <h3 className="font-label text-[10px] font-bold text-[#76553e] uppercase tracking-[0.3em]">Location</h3>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <img 
                    alt="Mysore cityscape" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT2Dg418GfO83Sws6MvLO3EoTeafXeKWGGtx5aFr9_ZpEhc2t4oio7zLDMz4cv9QpyADnAK7gSDf-1C3Nw__CaPK4XjJThYkFlwB98GcMJVdtw9evxvIwZDo4K2tf9JI3MR-7-4-tgOgDFgmSpz5ikpBCUAEqV9S8SCs_LOgRXipJzr0jjGlE7pQiTN1TvGnwErEfT6hgKHodVrD2y0fOo2QQT139_msonRhrh133Wonu-pPAD4jHV3AUr6GAXGDeKF5aAnQSKIUpv"
                  />
                </div>
                <div>
                  <p className="text-3xl font-headline font-bold text-[#1b1c19] tracking-tight">Mysore, KA</p>
                  <p className="text-[#4e453c] font-label text-xs uppercase tracking-widest flex items-center gap-2 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#76553e] animate-pulse"></span>
                    Avg. response: 24h
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[1px] bg-[#d1c5b8]/30 w-full"></div>
            <div className="space-y-8">
              <h3 className="font-label text-[10px] font-bold text-[#76553e] uppercase tracking-[0.3em]">Direct Channels</h3>
              <div className="space-y-6">
                <a className="flex items-center gap-5 group/link" href="mailto:nishanth@example.com">
                  <div className="bg-[#76553e]/5 p-3 group-hover/link:bg-[#76553e] group-hover/link:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </div>
                  <span className="text-[#4e453c] group-hover/link:text-[#1b1c19] transition-colors font-medium border-b border-transparent group-hover/link:border-[#76553e]/30">nishanth-hs@linkedin.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social Grid */}
          <div className="space-y-8">
            <h3 className="font-label text-[10px] font-bold text-[#85736e] uppercase tracking-[0.3em] px-2">Digital Footprint</h3>
            <div className="grid grid-cols-2 gap-4">
              <a className="bg-[#f6f3ed] hover:bg-[#e9e6df] p-8 border border-[#76553e]/15 transition-all duration-500 group flex flex-col gap-4" href="https://www.linkedin.com/in/nishanth-hs" target="_blank" rel="noreferrer">
                <span className="material-symbols-outlined text-[#85736e] group-hover:text-[#76553e] transition-colors text-3xl">link</span>
                <span className="text-[#1b1c19] font-headline font-bold text-lg">LinkedIn</span>
              </a>
              <a className="bg-[#f6f3ed] hover:bg-[#e9e6df] p-8 border border-[#76553e]/15 transition-all duration-500 group flex flex-col gap-4" href="https://github.com/Nishu2918" target="_blank" rel="noreferrer">
                <span className="material-symbols-outlined text-[#85736e] group-hover:text-[#76553e] transition-colors text-3xl">data_object</span>
                <span className="text-[#1b1c19] font-headline font-bold text-lg">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
