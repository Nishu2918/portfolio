import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fbf9f4]/80 backdrop-blur-xl editorial-border">
      <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-[#1b1c19] font-['Noto_Serif'] uppercase tracking-[0.1em]">
          CURATED GALLERY
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `text-sm font-['Noto_Serif'] uppercase tracking-tight transition-colors duration-300 ${isActive ? 'text-[#1b1c19] border-b border-[#76553e] pb-1' : 'text-[#4e453c] hover:text-[#76553e]'}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({isActive}) => 
              `text-sm font-['Noto_Serif'] uppercase tracking-tight transition-colors duration-300 ${isActive ? 'text-[#1b1c19] border-b border-[#76553e] pb-1' : 'text-[#4e453c] hover:text-[#76553e]'}`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              `text-sm font-['Noto_Serif'] uppercase tracking-tight transition-colors duration-300 ${isActive ? 'text-[#1b1c19] border-b border-[#76553e] pb-1' : 'text-[#4e453c] hover:text-[#76553e]'}`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              `text-sm font-['Noto_Serif'] uppercase tracking-tight transition-colors duration-300 ${isActive ? 'text-[#1b1c19] border-b border-[#76553e] pb-1' : 'text-[#4e453c] hover:text-[#76553e]'}`
            }
          >
            Contact
          </NavLink>
        </div>

        <NavLink to="/contact">
          <button className="bg-[#76553e] text-white font-['Noto_Serif'] font-bold px-8 py-3 rounded-full hover:bg-[#5d4331] transition-all duration-300 active:scale-95 text-xs uppercase tracking-widest">
            Let's Talk
          </button>
        </NavLink>
      </div>
    </nav>
  );
};
