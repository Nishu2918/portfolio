import React from 'react';

const featuredProject = {
  title: 'Zoho CRM Integration Suite',
  description: 'Production REST API layer syncing internal business data with Zoho CRM — lead ingestion, webhook handling, automated triggers, retry logic. Built with Python, Django, and PostgreSQL to handle real-world business workflows at scale.',
  tech: ['Python', 'Django', 'Zoho API', 'PostgreSQL', 'REST', 'Webhooks'],
  github: 'https://github.com/Nishu2918/django_zoho_crm_project',
};

const projects = [
  {
    title: 'GCC-FUSION',
    description: 'Full-scale application built with TypeScript and modern frameworks. Features a modular codebase with frontend and backend components working in harmony.',
    tech: ['TypeScript', 'React', 'Node.js', 'Vercel'],
    github: 'https://github.com/Nishu2918/GCC-FUSION',
    live: 'https://gcc-fusion.vercel.app',
  },
  {
    title: 'Bone Age Estimation',
    description: 'AI/ML project for medical bone age estimation using JavaScript. Applies machine learning techniques to analyze and predict bone age from imaging data.',
    tech: ['JavaScript', 'ML', 'AI', 'Medical Imaging'],
    github: 'https://github.com/Nishu2918/Bone-Age-Estimation',
  },
  {
    title: 'Mini Task Manager',
    description: 'Full-stack task management application with CRUD operations, deployed on Vercel. Clean UI with efficient state management and persistent data storage.',
    tech: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Nishu2918/mini-task-manager',
    live: 'https://mini-task-manager-six.vercel.app',
  },
  {
    title: 'Sweet Shop Management',
    description: 'Business management system for sweet shops with inventory tracking, order management, and sales analytics built with JavaScript.',
    tech: ['JavaScript', 'Express', 'MongoDB', 'EJS'],
    github: 'https://github.com/Nishu2918/Sweet-Shop-Management-System',
  },
  {
    title: 'AI Assistant (Flutter)',
    description: 'Cross-platform AI assistant mobile application built with Dart and Flutter. Features natural language processing and intelligent response generation.',
    tech: ['Dart', 'Flutter', 'AI', 'Mobile'],
    github: 'https://github.com/Nishu2918/AI_Assistant-main',
  },
  {
    title: 'User Management Dashboard',
    description: 'Comprehensive dashboard for user management with role-based access control, analytics, and a responsive admin interface.',
    tech: ['JavaScript', 'React', 'Node.js', 'JWT'],
    github: 'https://github.com/Nishu2918/user-management-dashboard',
  },
  {
    title: 'TinyLink — URL Shortener',
    description: 'Lightweight URL shortener that creates compact, shareable links. Features click analytics and custom slug support.',
    tech: ['HTML', 'JavaScript', 'CSS', 'Node.js'],
    github: 'https://github.com/Nishu2918/TinyLink',
  },
  {
    title: 'Bitespeed Backend',
    description: 'Backend identity reconciliation service built with TypeScript. Consolidates user contacts across multiple channels into unified profiles.',
    tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'Express'],
    github: 'https://github.com/Nishu2918/bitespeed-backend',
  },
];

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const FolderIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-number">04.</span>
          <h2 className="section-heading">Things I've Built</h2>
        </div>

        {/* Featured Project */}
        <div className="project-featured animate-on-scroll">
          <div>
            <div className="project-featured-label">★ Featured Project</div>
            <h3 className="project-featured-title">{featuredProject.title}</h3>
            <p className="project-featured-desc">{featuredProject.description}</p>
            <div className="project-tech" style={{ marginBottom: '1.5rem' }}>
              {featuredProject.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" title="View on GitHub">
                <GithubIcon />
              </a>
            </div>
          </div>
          <div className="project-featured-image">
            <div className="terminal-preview">
              <div className="terminal-bar">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt">$ </span>
                <span className="terminal-command">python manage.py runserver</span>
              </div>
              <div className="terminal-line terminal-output">Watching for file changes...</div>
              <div className="terminal-line terminal-output">System check identified no issues.</div>
              <div className="terminal-line terminal-output" style={{ color: 'var(--accent-green)' }}>
                Starting development server at http://127.0.0.1:8000/
              </div>
              <div className="terminal-line" style={{ marginTop: '0.5rem' }}>
                <span className="terminal-prompt">$ </span>
                <span className="terminal-command">curl -X POST /api/zoho/sync/</span>
              </div>
              <div className="terminal-line terminal-output" style={{ color: 'var(--accent-primary)' }}>
                {'{"status": "success", "synced": 142}'}
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <h3 className="animate-on-scroll" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          textAlign: 'center',
          margin: '3rem 0 2rem',
        }}>
          Other Noteworthy Projects
        </h3>

        <div className="projects-grid stagger-children">
          {projects.map((project) => (
            <div key={project.title} className="project-card animate-on-scroll">
              <div className="project-header">
                <FolderIcon />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <GithubIcon />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="https://github.com/Nishu2918?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <GithubIcon />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
