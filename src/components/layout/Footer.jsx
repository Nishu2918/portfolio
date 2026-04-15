import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#f0eee9] w-full mt-auto border-t border-[#d1c5b8]/15">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0">
          <div className="text-lg font-serif italic text-[#1b1c19] mb-2 font-['Noto_Serif']">Editorial Sophistication</div>
          <p className="font-['Manrope'] text-xs uppercase tracking-widest text-[#4e453c] opacity-80">
            © 2024 { "Editorial Sophistication" }. All Rights Reserved.
          </p>
        </div>
        <div className="flex gap-12 font-['Manrope'] text-sm uppercase tracking-widest">
          <a className="text-[#4e453c] hover:underline decoration-[#76553e] underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" href="#">Instagram</a>
          <a className="text-[#4e453c] hover:underline decoration-[#76553e] underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" href="#">LinkedIn</a>
          <a className="text-[#4e453c] hover:underline decoration-[#76553e] underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" href="#">Dribbble</a>
        </div>
      </div>
    </footer>
  );
};
