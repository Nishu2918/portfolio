import React from 'react';
import { Section } from '../components/ui/Section.jsx';
// Using Material Symbols instead of lucide-react

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'GCC-FUSION',
      category: 'Full-Stack / Automation',
      description: 'A robust TypeScript application geared towards enterprise workflow automation and scalable system processing.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKqsGJLusJGWkDBGOt98MgHMvjRdq5lu_gzwh4WOY-YYKy-ARP8_bPOnwQZVrRYx1Y4FeYntXciQyguIczTaiL2WhdCS2dxcCdu1Di73gjHaM0GUZXuL5FtVi-4Tf0EmZqs6EPr6awCUS6NEp2lyQKJ-vgxZuKlbRspq00qEJE6XBHxAZDivXuA_GFE8EBmMozt4Tidyw562Eugp76sqDBeir-YP1qlgkmA9boZgfRxPV2-aydZR8UPHLf17vkaPypPu3DoWCh1270',
      size: 'large'
    },
    {
      id: 2,
      title: 'Albertsons Workflow Builder',
      category: 'UI/UX / React',
      description: 'Custom workflow construction software enabling intuitive process flow definitions with high-performance routing.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIm6fCIrQI2IGtCQ_GdjNDVc6djt15xA0LNNzJFQdZZz0FdvykmfFt9NXTYyTs8fgyp2iw-zEiT41yvQjodupji63EkjabVNxIKBg9A8mMqsAUILZrDN0PSi82U5N7NI9U5ZmTnUZ24sTEeVuyGyFXG2x7dLnRQ2k6IIqVQpSB3gXe2Cws5JlllNecpzv0x9SSneQowWCeRpzVblcLBLFQBCtOlKVV7P6ijpksom6QodLlLvQTl268IEq2WlKUOJnQ_MfJYJ4IRdvT',
      size: 'small'
    },
    {
      id: 3,
      title: 'Airena Load Tests',
      category: 'Infrastructure',
      description: 'Complex load testing infrastructure for high-concurrency environments, written in pure TypeScript.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2R_7t67CVi6uPT8Wc3E58PQe41fdqi9UY0hMGXxer6adHhlzsSYKP-9fBL0P_6yWtY8lWAw6CUni8kvC8YUEq1LGTEobRBBtC1n4lLG6eSi2hlLQAwMmAa9XPFV4MgNwOha4yV8CiF6xH6alaOSh2UPOc2U53josTvx-OH84s8Qp0L7S_736mpUKe-SAOfvLeia0940nOpYdtbaAscCQNmglVExVNKL1StEffmw5x1QEwsKAJ2du45il9KDrOg-K48FUgE1yMR5U0',
      size: 'small'
    },
    {
      id: 4,
      title: 'Frontend GCC',
      category: 'Performance UI',
      description: 'Next-generation analytical platform leveraging real-time processing to visualize complex dataset connections.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaLeu_DLV75JeGxW2xi6pBSAPTZc8L882l7ou5qtxhMViGBBvpd3wserOwICNEGEywhLH64txOphI358Zi-yyXSxr9bi43XPWKCivyIO6rum2VarMj_jkW3Gn3e0HMToSe4bXYXlzkj-AfyhJOogWMotUgixjQ-n2W78xiJfBHzTMhLqa-d5PuJXCKS5UpqpHSpcCIOG7Q6WabxgHLDA3BpFKc_klQ5f-gEDTNWSN6m2aGpjm9rSRYsiarNoh5kWMR0MzDxOtczDTL',
      size: 'large'
    }
  ];

  return (
    <Section background="surface" className="pt-48 pb-32 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 editorial-border pb-16">
        <div className="space-y-6">
          <p className="text-[#link-primary] font-label font-bold tracking-[0.2em] uppercase text-xs">Architectural Gallery</p>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tight text-[#1b1c19] leading-[0.9]">
            Selected<br/><span className="italic font-normal">Works.</span>
          </h1>
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-2.5 rounded-full bg-[#76553e] text-white font-label font-medium text-xs tracking-widest uppercase transition-all shadow-lg hover:bg-[#5d4331]">All</button>
          <button className="px-8 py-2.5 rounded-full bg-[#f4f1ea] hover:bg-[#e9e6df] text-[#4e453c] font-label font-medium text-xs tracking-widest uppercase transition-all border border-[#d1c5b8]/30">Full-Stack</button>
          <button className="px-8 py-2.5 rounded-full bg-[#f4f1ea] hover:bg-[#e9e6df] text-[#4e453c] font-label font-medium text-xs tracking-widest uppercase transition-all border border-[#d1c5b8]/30">UI/UX</button>
        </div>
      </div>

      <div className="grid-12 gap-y-10">
        {projects.map((project) => (
          <div 
            key={project.id}
            className={`${project.size === 'large' ? 'col-span-12 md:col-span-8' : 'col-span-12 md:col-span-4'} group relative overflow-hidden rounded-xl editorial-card hover-lift min-h-[500px]`}
          >
            <img 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] group-hover:scale-105" 
              src={project.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c19]/90 via-[#1b1c19]/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-10">
              <span className="text-[#a68a64] font-label text-xs font-bold uppercase tracking-[0.2em] mb-4 block">{project.category}</span>
              <div className="flex justify-between items-center group">
                <h3 className="text-3xl font-headline font-bold text-white transition-all transform flex items-center gap-3">
                  {project.title}
                  <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
                </h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed max-w-lg font-body mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
