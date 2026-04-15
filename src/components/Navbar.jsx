import React, { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navItems = [
    { num: '01', label: 'About', href: '#about' },
    { num: '02', label: 'Skills', href: '#skills' },
    { num: '03', label: 'Experience', href: '#experience' },
    { num: '04', label: 'Projects', href: '#projects' },
    { num: '05', label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-primary)', textDecoration: 'none', letterSpacing: '-0.02em' }}>
            <span style={{ opacity: 0.5 }}>&lt;</span>
            NH
            <span style={{ opacity: 0.5 }}>/&gt;</span>
          </a>

          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {navItems.map((item) => (
              <a key={item.num} href={item.href} className="nav-link">
                <span className="nav-number">{item.num}.</span>
                {item.label}
              </a>
            ))}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <div className="theme-toggle-knob">
                {theme === 'dark' ? '🌙' : '☀️'}
              </div>
            </button>
            <a href="mailto:nishanthhs8@gmail.com" className="resume-btn">Say Hello</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="mobile-controls">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              style={{ display: 'none' }}
            >
              <div className="theme-toggle-knob">
                {theme === 'dark' ? '🌙' : '☀️'}
              </div>
            </button>
            <button
              className={`hamburger ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <style>{`
            .mobile-controls .theme-toggle { display: none; }
            @media (max-width: 768px) {
              .mobile-controls .theme-toggle { display: flex !important; }
            }
          `}</style>
        </div>
      </nav>

      <div className={`mobile-menu-backdrop ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(false)} />

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <a key={item.num} href={item.href} className="nav-link" onClick={handleNavClick}>
            <span className="nav-number">{item.num}.</span>
            {item.label}
          </a>
        ))}
        <a href="mailto:nishanthhs8@gmail.com" className="resume-btn" onClick={handleNavClick}>Say Hello</a>
      </div>
    </>
  );
};

export default Navbar;
