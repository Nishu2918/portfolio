import React from 'react';
import { Section } from '../components/ui/Section.jsx';
import { Button } from '../components/ui/Button.jsx';
// Removed lucide-react imports temporarily to debug build failure

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative w-full h-[750px] overflow-hidden bg-[#f0eee9]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-background)] z-10"></div>
        <img 
          className="w-full h-full object-cover opacity-80" 
          alt="Futuristic digital infrastructure interface" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgMz7WGaEWSO4PMrbmp2FCXkgNLfByHY5szYPPyf6GDIMats4V0uWot9PyAnU-2hmwXptMZNNkFozpaKXjLnVJx3562vmYwvgIkm3UQr19HJzqcvclTS4FLe5j_bGTdcCg9HGFnuGV945KuS5v6f154HojnW_wZNuomcQxIy1aU6VwCemr8iF0mU9ny-pOas-nhQ5FHf4zZ1SmvTGRJsjEZpxOCJf3y9oKmIPB0Zy3QM0Xx_O-HA93YADKu7vprDl4CaoU09jA43LZ"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end px-8 pb-32 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-[#d8c2bc]/30 self-start">
            <span className="w-1.5 h-1.5 rounded-full bg-[#76553e]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#76553e]">Full Stack • UI/UX • Architecture</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tight text-[#1b1c19] mb-8 leading-[0.9]">
            Precision <br/>Curator.
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-[#4e453c] font-body leading-relaxed font-medium">
            Bridging the gap between high-end aesthetic design and robust technical execution. Curating digital experiences that push boundaries.
          </p>
        </div>
      </header>

      {/* Project Metrics */}
      <section className="max-w-7xl mx-auto px-8 -mt-20 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white border border-[#d1c5b8]/30 shadow-2xl">
          <div className="p-10 border-b md:border-b-0 md:border-r border-[#d1c5b8]/30">
            <div className="text-[#76553e] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Development</div>
            <div className="text-5xl font-headline font-bold text-[#1b1c19] mb-2">20+</div>
            <div className="text-[#4e453c] text-xs uppercase tracking-wider font-medium">GitHub Repositories</div>
          </div>
          <div className="p-10 border-b md:border-b-0 md:border-r border-[#d1c5b8]/30">
            <div className="text-[#76553e] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Architecture</div>
            <div className="text-5xl font-headline font-bold text-[#1b1c19] mb-2">Scalable</div>
            <div className="text-[#4e453c] text-xs uppercase tracking-wider font-medium">System Design Focused</div>
          </div>
          <div className="p-10">
            <div className="text-[#76553e] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Design</div>
            <div className="text-5xl font-headline font-bold text-[#1b1c19] mb-2">99%</div>
            <div className="text-[#4e453c] text-xs uppercase tracking-wider font-medium">Visual Precision</div>
          </div>
        </div>
      </section>

      {/* Narrative Section - The Challenge */}
      <Section background="surface" className="py-40">
        <div className="grid-12 items-start">
          <div className="col-span-12 lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-headline font-bold text-[#1b1c19] mb-10 editorial-border pb-4">The Philosophy</h2>
              <div className="space-y-8 text-[#4e453c] leading-relaxed text-lg font-medium">
                <p>I believe that every pixel should serve a purpose. My process integrates deep analytical thinking with a curator's eye for aesthetics, ensuring that the end product is not just a website, but a performance-driven asset.</p>
                <p>Traditional systems suffer from fragmenting liquidity and outdated routing protocols. Our goal is to build systems that bypass legacy hurdles without sacrificing the security of enterprise-grade compliance.</p>
              </div>
              <div className="mt-12 flex gap-4">
                <Button variant="primary">Start a Project</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-[#f0eee9] p-4 rounded-lg overflow-hidden group border border-[#d8c2bc]/20 shadow-sm relative aspect-[4/3]">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] grayscale" 
                  alt="Detailed financial dashboard" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP1EeE2pq7FmixV80OijUxaceNtlMTP-OLN294pEb3S9yeRGUbrVe_Il3PJT1ej3NUm80_x7flGh6almu3Jj2tm7KOX2Q13THxHPSHJUz1gXyzpEm6j-jJ_yqiodLeHUGXYV7-r54wgWI-QXXLGK5chmKjVdwC2MrjU7f85761c_ONNVAxDP9xcMxU6efH2XPnJi9jKMhq4qHduKWlB0YdrZTtxZlTmOkD-gGnqtqsbKr3W9xgnQvEn7xxIAJy1VaFxz158GjIV7ay"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Narrative Section - The Solution */}
      <Section background="surface-low" className="py-40">
        <div className="grid-12 items-center">
            <div className="col-span-12 lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="bg-[#f0eee9] p-4 rounded-lg overflow-hidden group border border-[#d8c2bc]/20 shadow-sm relative aspect-[4/3]">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] grayscale" 
                    alt="Mobile app interface" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxPMCACPVraIb7QtaUFUUcYx6qlQA_Rgoi2u5zcYj0U5uLnKlEYsiR9AJNARu7-1KCjmeo33hXBGDfeVaMkGbexrhZxrWN60_Ip5QInNbnxq9gwTeKkG6yIWK33m45Mz3bwg2I128br5mixYFD8xtNDqrYbl4g26WtRMKl7Ba0_CTJyYJnILyqKbS11yS0V_WRcwk1dTJtN_p-SAN8h99snjnQSgj3O4K31sd1KloAm6kvMI9DHwTdN_q1xO1UDkoAsmTvjYztxh7D"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2 lg:pl-12">
                <h2 className="text-4xl font-headline font-bold text-[#1b1c19] mb-10 editorial-border pb-4">Core Craft</h2>
                <div className="space-y-8 text-[#4e453c] leading-relaxed text-lg font-medium">
                  <p>Paired with a sophisticated Design System that utilizes atmospheric depth, I build tools that empower institutional operators.</p>
                  <ul className="space-y-6">
                    <li className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-[#76553e] shrink-0 text-2xl">check_circle</span>
                      <span className="text-sm font-bold uppercase tracking-widest pt-1">Decentralized Architecture Integration</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-[#76553e] shrink-0 text-2xl">check_circle</span>
                      <span className="text-sm font-bold uppercase tracking-widest pt-1">AI-Powered Interaction Design</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-[#76553e] shrink-0 text-2xl">check_circle</span>
                      <span className="text-sm font-bold uppercase tracking-widest pt-1">Real-time Visualization Nodes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </Section>
    </main>
  );
};

export default Home;
