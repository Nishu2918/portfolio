import React from 'react';

export const Section = ({ 
  children, 
  background = 'surface', 
  className = '',
  pt = 'none' 
}) => {
  const bgClass = {
    'surface': 'bg-[var(--color-surface)]',
    'surface-low': 'bg-[var(--color-surface-container-low)]',
    'surface-high': 'bg-[var(--color-surface-container-high)]',
    'dim': 'bg-surface-dim'
  }[background] || 'bg-[var(--color-surface)]';

  const paddingClass = pt === 'hero' ? 'pt-40' : 'py-32';

  return (
    <section className={`w-full ${bgClass} ${paddingClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-8">
        {children}
      </div>
    </section>
  );
};
