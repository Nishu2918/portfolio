import React from 'react';

const About = () => {
  const techItems = [
    'Python', 'Django / DRF', 'JavaScript', 'TypeScript',
    'React', 'PostgreSQL', 'Redis', 'REST APIs',
    'Zoho CRM API', 'Celery', 'Git', 'Docker',
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-number">01.</span>
          <h2 className="section-heading">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text animate-on-scroll">
            <p>
              Hey! I'm <span className="highlight">Nishanth</span>, an Associate AI Engineer 
              based in <span className="highlight">Mysore, Karnataka</span>. I build AI-powered 
              solutions and production backend systems — from robust REST APIs and CRM integrations 
              to LLM-powered applications and full-stack web products.
            </p>
            <p>
              Currently, I'm focused on connecting <span className="highlight">AI/LLMs</span> with 
              real-world backend infrastructure — designing RAG pipelines, building intelligent APIs, 
              and shipping AI features end-to-end. Previously, I worked as a 
              <span className="highlight">Backend Developer Intern at Opencourse</span>, where I 
              built Django REST APIs, automated Zoho CRM workflows, and engineered reliable 
              data sync pipelines.
            </p>
            <p>
              My core strength is <span className="highlight">Python/Django</span> backends — 
              but I'm always expanding my toolkit. I'm passionate about building systems that 
              are clean, scalable, and actually solve real problems.
            </p>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="tech-list">
              {techItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="animate-on-scroll">
            {/* Stats */}
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">25+</span>
                <span className="stat-label">GitHub Repos</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">5+</span>
                <span className="stat-label">Tech Stacks</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">∞</span>
                <span className="stat-label">Lines of Code</span>
              </div>
            </div>

            {/* Terminal card */}
            <div style={{
              marginTop: '1.5rem',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                background: 'var(--bg-card)',
                borderBottom: '1px solid var(--border-subtle)',
              }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }}></span>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }}></span>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }}></span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-tertiary)', marginLeft: '0.5rem' }}>~/nishanth</span>
              </div>
              <div style={{
                padding: '1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                lineHeight: 1.8,
              }}>
                <div>
                  <span style={{ color: 'var(--accent-primary)' }}>$ </span>
                  <span style={{ color: 'var(--text-primary)' }}>cat about.txt</span>
                </div>
                <div style={{ color: 'var(--text-secondary)', paddingLeft: '0.5rem', marginTop: '0.25rem' }}>
                  <div>Name: Nishanth H S</div>
                  <div>Role: Software Developer</div>
                  <div>Focus: Backend & API Engineering</div>
                  <div>Location: Mysore, Karnataka</div>
                  <div style={{ color: 'var(--accent-green)' }}>Status: Building cool stuff 🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
