import React from 'react';

const allSkills = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'Dart', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
];

const textSkills = [
  'REST APIs', 'Zoho CRM API', 'Webhooks', 'OAuth 2.0', 'JWT',
  'Celery', 'LangChain', 'RAG', 'LLM Integration', 'Prompt Engineering',
  'DRF', 'Express.js', 'CI/CD',
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-number">02.</span>
          <h2 className="section-heading">Tech Stack</h2>
        </div>

        <p className="animate-on-scroll" style={{ color: 'var(--text-secondary)', maxWidth: '550px', marginBottom: '2rem', fontSize: '0.95rem' }}>
          Technologies and tools I use to bring ideas to life — from backend systems to AI pipelines.
        </p>

        {/* Icon Grid */}
        <div className="animate-on-scroll" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          {allSkills.map((skill) => (
            <div
              key={skill.name}
              className="tech-icon-card"
              title={skill.name}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                width="32"
                height="32"
                loading="lazy"
                style={{ objectFit: 'contain' }}
              />
              <span className="tech-icon-label">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Text-only tags for skills without icons */}
        <div className="animate-on-scroll" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          {textSkills.map((skill) => (
            <span key={skill} className="tech-text-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
