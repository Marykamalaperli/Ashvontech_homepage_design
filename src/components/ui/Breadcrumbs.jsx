import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items, className = '' }) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`breadcrumbs ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.45rem',
        fontSize: '0.85rem',
        color: 'var(--color-slate-light)',
        marginBottom: '1.75rem'
      }}
    >
      <Link
        to="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          color: 'var(--color-slate-light)',
          transition: 'color var(--transition-fast)'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-tech-blue)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-light)')}
      >
        <Home size={14} />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            <ChevronRight size={13} style={{ opacity: 0.6 }} />
            {isLast || !item.to ? (
              <span
                style={{
                  color: 'var(--color-navy)',
                  fontWeight: 600
                }}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.to}
                style={{
                  color: 'var(--color-slate-light)',
                  transition: 'color var(--transition-fast)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-tech-blue)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-light)')}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
