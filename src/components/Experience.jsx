import React from 'react';

const experiences = [
  {
    title: 'Associate AI Engineer',
    company: 'Current Company',
    companyUrl: null,
    period: 'Nov 2025 — Present',
    type: 'Full-time',
    current: true,
    points: [
      'Building and deploying AI-powered solutions integrating LLMs with production backend systems.',
      'Designing RAG pipelines and prompt engineering workflows for domain-specific applications.',
      'Collaborating with cross-functional teams to ship AI features end-to-end — from data pipelines to API endpoints.',
      'Exploring LangChain, vector databases, and retrieval-augmented generation for real-world use cases.',
    ],
    tech: ['Python', 'LangChain', 'REST APIs', 'LLM Integration', 'RAG', 'Docker'],
  },
  {
    title: 'Backend Developer Intern',
    company: 'Opencourse',
    companyUrl: null,
    period: 'Earlier — Oct 2025',
    type: 'Internship',
    current: false,
    points: [
      'Developed and maintained Django REST APIs serving frontend applications with high reliability.',
      'Integrated Zoho CRM APIs to automate lead ingestion, webhook handling, and data sync workflows.',
      'Built automated triggers, retry logic, and background tasks using Celery + Redis.',
      'Wrote clean, well-tested Python code following best practices and code review standards.',
    ],
    tech: ['Python', 'Django', 'DRF', 'Zoho CRM API', 'PostgreSQL', 'Celery', 'Redis'],
  },
];

const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-number">03.</span>
          <h2 className="section-heading">Where I've Worked</h2>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <div key={i} className={`exp-card animate-on-scroll ${exp.current ? 'exp-current' : ''}`}>
              {/* Timeline connector */}
              <div className="exp-timeline-dot">
                <div className={`exp-dot ${exp.current ? 'active' : ''}`}>
                  <BriefcaseIcon />
                </div>
                {i < experiences.length - 1 && <div className="exp-timeline-line"></div>}
              </div>

              {/* Content */}
              <div className="exp-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">
                      {exp.title}
                      <span className="exp-at"> @ </span>
                      {exp.companyUrl ? (
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="exp-company">{exp.company}</a>
                      ) : (
                        <span className="exp-company">{exp.company}</span>
                      )}
                    </h3>
                    <div className="exp-meta">
                      <span className="exp-period">{exp.period}</span>
                      <span className={`exp-type-badge ${exp.current ? 'current' : ''}`}>
                        {exp.current ? '● ' : ''}{exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="exp-points">
                  {exp.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>

                <div className="exp-tech">
                  {exp.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
