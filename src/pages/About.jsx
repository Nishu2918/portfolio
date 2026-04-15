import React from 'react';
import { Section } from '../components/ui/Section.jsx';
// Using Material Symbols instead of lucide-react

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-32 grid md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto px-8">
        <div className="order-2 md:order-1">
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tight text-[#1b1c19] mb-10 leading-[1.05]">
            Curating <span className="italic text-[#76553e]">experiences</span> that matter.
          </h1>
          <p className="text-lg text-[#4e453c] max-w-lg mb-12 leading-relaxed font-body">
            I bridge the gap between complex technical systems and elegant human interaction. My approach is rooted in architectural precision and sensory-driven digital design.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-3 px-5 py-2.5 bg-[#f0eee9] border border-[#d1c5b8]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#76553e]"></span>
              <span className="text-[11px] font-label uppercase tracking-[0.25em] text-[#4e453c] font-semibold">Available for projects</span>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 relative group">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#f0eee9] shadow-sm border border-[#d1c5b8]/20">
            <img 
              alt="Designer Portrait" 
              className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out" 
              src="/profile.jpg"
            />
          </div>
        </div>
      </section>

      {/* Core Skills & Toolkit */}
      <section className="py-32 border-t border-[#d1c5b8]/15 max-w-7xl mx-auto px-8">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-[#76553e] font-label text-[11px] uppercase tracking-[0.4em] font-bold block mb-4">Specialization</span>
          <h2 className="font-headline text-5xl font-bold text-[#1b1c19]">Core Skills & Toolkit</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#d1c5b8]/15">
          {/* Skill Cards */}
          <div className="p-12 space-y-8 group border-r border-[#d1c5b8]/15 last:border-r-0 hover:bg-[#f0eee9]/50 transition-colors">
              <span className="material-symbols-outlined text-4xl">architecture</span>
            <div>
              <h3 className="text-2xl font-headline font-bold text-[#1b1c19] mb-6">Interface Architecture</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-[#4e453c] text-[13px] font-medium tracking-wide">
                  <span className="w-4 h-px bg-[#76553e]"></span> DESIGN SYSTEM STRATEGY
                </li>
                <li className="flex items-center gap-4 text-[#4e453c] text-[13px] font-medium tracking-wide">
                  <span className="w-4 h-px bg-[#76553e]"></span> COMPONENT ENGINEERING
                </li>
              </ul>
            </div>
          </div>
          <div className="p-12 space-y-8 group border-r border-[#d1c5b8]/15 last:border-r-0 hover:bg-[#f0eee9]/50 transition-colors">
              <span className="material-symbols-outlined text-4xl">terminal</span>
            <div>
              <h3 className="text-2xl font-headline font-bold text-[#1b1c19] mb-6">Digital Craft</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-[#4e453c] text-[13px] font-medium tracking-wide">
                  <span className="w-4 h-px bg-[#76553e]"></span> TYPESCRIPT ARCHITECTURE
                </li>
                <li className="flex items-center gap-4 text-[#4e453c] text-[13px] font-medium tracking-wide">
                  <span className="w-4 h-px bg-[#76553e]"></span> FULL STACK SYSTEMS
                </li>
              </ul>
            </div>
          </div>
          <div className="p-12 space-y-8 group hover:bg-[#f0eee9]/50 transition-colors">
              <span className="material-symbols-outlined text-4xl">palette</span>
            <div>
              <h3 className="text-2xl font-headline font-bold text-[#1b1c19] mb-6">Visual Storytelling</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-[#4e453c] text-[13px] font-medium tracking-wide">
                  <span className="w-4 h-px bg-[#76553e]"></span> EDITORIAL TYPOGRAPHY
                </li>
                <li className="flex items-center gap-4 text-[#4e453c] text-[13px] font-medium tracking-wide">
                  <span className="w-4 h-px bg-[#76553e]"></span> BRAND IDENTITY
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trajectory */}
      <section className="py-32 border-t border-[#d1c5b8]/15 max-w-7xl mx-auto px-8">
        <div className="mb-24">
          <span className="text-[#76553e] font-label text-[11px] uppercase tracking-[0.4em] font-bold">The Journey</span>
          <h2 className="font-headline text-5xl font-bold text-[#1b1c19] mt-4">Trajectory</h2>
        </div>
        <div className="relative ml-8 md:ml-0">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#76553e]/10"></div>
          <div className="space-y-32">
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-20 mb-8 md:mb-0 text-left md:text-right">
                <span className="text-[#76553e] font-headline italic font-bold text-lg">2022 — Present</span>
                <h4 className="text-[#1b1c19] text-3xl font-bold mt-2">Senior Experience Lead</h4>
                <p className="text-[#4e453c] mt-4 text-sm leading-relaxed max-w-md md:ml-auto">Leading the next generation of full-stack TypeScript interfaces, focusing on performance-driven user flows.</p>
              </div>
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-2 h-2 bg-[#76553e] outline outline-[8px] outline-[#fbf9f4]"></div>
              <div className="md:w-1/2 md:pl-20"></div>
            </div>
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-20 order-2 md:order-1"></div>
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-2 h-2 bg-[#a68a64] outline outline-[8px] outline-[#fbf9f4]"></div>
              <div className="md:w-1/2 md:pl-20 order-1 md:order-2 mb-8 md:mb-0">
                <span className="text-[#a68a64] font-headline italic font-bold text-lg">2019 — 2021</span>
                <h4 className="text-[#1b1c19] text-3xl font-bold mt-2">Full Stack Engineer</h4>
                <p className="text-[#4e453c] mt-4 text-sm leading-relaxed max-w-md">Designed and developed internal automation tooling for enterprise clients, reducing workflow latency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Screen */}
      <section className="py-32 mb-32 border-t border-[#d1c5b8]/15 max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <span className="text-[#76553e] font-label text-[11px] uppercase tracking-[0.4em] font-bold">Personal Interests</span>
          <h2 className="font-headline text-5xl font-bold text-[#1b1c19] mt-4">Beyond the Screen</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[650px]">
          <div className="md:col-span-2 md:row-span-2 bg-[#f0eee9] overflow-hidden relative group border border-[#d1c5b8]/15">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDchWUp5uiGrJAkqMxqwLie2K9mo8PPeWU4LXMPKzlPSXz_Vmf9LvytuHEiPcMU5RQU_eeZY3xf2avxGu-BaQeTic4izCmALRbW0Ym4SNEkSoHBIrJ7Xzg8hvV0nP7f7RFrcknfqUyC9IhGJf1REnIHULTjZV7FNtFl8SL0vK0Msq3pPvgKo4DlC28yGVYr_2yHp_CAvdBDne9imDcmtNNekP3VqDPhUYFZb-h4Vlgv5lHCGaZbjrOlXKAhwK1HXzhbXUhUmthgHtXW"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c19]/80 via-transparent to-transparent flex flex-col justify-end p-10">
              <h4 className="text-white font-headline font-bold text-2xl">Photography</h4>
              <p className="text-white/80 text-sm mt-3 tracking-wide font-label uppercase">Finding patient perspective through film and digital craft.</p>
            </div>
          </div>
          <div className="md:col-span-2 bg-[#f0eee9] flex items-center p-12 gap-10 group border border-[#d1c5b8]/15">
              <span className="material-symbols-outlined text-3xl">fitness_center</span>
            <div>
              <h4 className="text-[#1b1c19] font-headline font-bold text-2xl">Climbing & Flow</h4>
              <p className="text-[#4e453c] text-sm mt-2 leading-relaxed">Physical problem-solving that mimics the software design process.</p>
            </div>
          </div>
          <div className="md:col-span-1 bg-white border border-[#d1c5b8]/15 p-10 flex flex-col justify-center items-center text-center group hover:bg-[#76553e]/5 transition-colors">
            <span className="material-symbols-outlined text-[#76553e] mb-6 text-5xl">menu_book</span>
            <h4 className="text-[#1b1c19] font-headline font-bold text-lg">Curating Knowledge</h4>
            <p className="text-[#4e453c] text-[11px] mt-3 font-label uppercase tracking-widest leading-relaxed">Constant pursuit of architectural elegance.</p>
          </div>
          <div className="md:col-span-1 bg-white border border-[#d1c5b8]/15 p-10 flex flex-col justify-center items-center text-center group hover:bg-[#a68a64]/5 transition-colors">
            <span className="material-symbols-outlined text-[#a68a64] mb-6 text-5xl">coffee</span>
            <h4 className="text-[#1b1c19] font-headline font-bold text-lg">The Ritual</h4>
            <p className="text-[#4e453c] text-[11px] mt-3 font-label uppercase tracking-widest leading-relaxed">Obsessive about the details in every cup.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
