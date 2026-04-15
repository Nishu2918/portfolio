import React, { useState, useEffect } from 'react';

const roles = [
  'Associate AI Engineer',
  'Backend Developer',
  'API Engineer',
  'Python/Django Specialist',
  'AI Engineering Explorer',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-grid"></div>
      <div className="hero-glow-orb primary"></div>
      <div className="hero-glow-orb secondary"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <p className="hero-greeting">
          <span style={{ color: 'var(--accent-secondary)' }}>$</span> whoami
        </p>

        <h1 className="hero-name">
          Nishanth H S<span style={{ color: 'var(--accent-primary)' }}>.</span>
        </h1>

        <p className="hero-tagline">
          I build{' '}
          <span style={{ color: 'var(--accent-primary)', position: 'relative' }}>
            {displayText}
            <span className="typing-cursor" style={{ color: 'var(--accent-primary)' }}></span>
          </span>
        </p>

        <p className="hero-description">
          Currently working as an{' '}
          <span style={{ color: 'var(--accent-primary)' }}>Associate AI Engineer</span>, building 
          AI-powered solutions and production backend systems. Specializing in{' '}
          <span style={{ color: 'var(--accent-primary)' }}>Python/Django</span>,{' '}
          <span style={{ color: 'var(--accent-primary)' }}>REST APIs</span>, and{' '}
          <span style={{ color: 'var(--accent-secondary)' }}>LLM integrations</span> — 
          connecting AI with real-world infrastructure.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary btn-filled">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            View My Projects
          </a>
          <a href="#experience" className="btn-primary">
            My Experience
          </a>
        </div>

        <div className="status-indicator">
          <span className="status-dot"></span>
          Associate AI Engineer · Open to opportunities
        </div>
      </div>

      {/* Floating code snippet on desktop */}
      <div style={{
        position: 'absolute',
        right: 'clamp(2rem, 10vw, 8rem)',
        top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        color: 'var(--text-tertiary)',
        opacity: 'var(--code-snippet-opacity)',
        display: 'none',
        lineHeight: 2,
      }} className="desktop-code-snippet">
        <div style={{ color: 'var(--accent-secondary)' }}>class <span style={{ color: 'var(--accent-primary)' }}>Developer</span>:</div>
        <div style={{ paddingLeft: '1rem' }}>name = <span style={{ color: 'var(--accent-warning)' }}>"Nishanth"</span></div>
        <div style={{ paddingLeft: '1rem' }}>role = <span style={{ color: 'var(--accent-warning)' }}>"AI Engineer"</span></div>
        <div style={{ paddingLeft: '1rem' }}>stack = [<span style={{ color: 'var(--accent-warning)' }}>"Python"</span>, <span style={{ color: 'var(--accent-warning)' }}>"Django"</span>, <span style={{ color: 'var(--accent-warning)' }}>"LLMs"</span>]</div>
        <div style={{ paddingLeft: '1rem' }}>status = <span style={{ color: 'var(--accent-green)' }}>"building"</span></div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-code-snippet { display: block !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
