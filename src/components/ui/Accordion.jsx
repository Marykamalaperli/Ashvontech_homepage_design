import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items, allowMultiple = false, className = '' }) {
  const [openIndices, setOpenIndices] = useState([0]);

  const toggleIndex = (index) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`accordion-wrapper ${className}`} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const headingId = `accordion-heading-${index}`;
        const panelId = `accordion-panel-${index}`;

        return (
          <div
            key={index}
            className="solid-card"
            style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: isOpen ? '1px solid rgba(23, 105, 255, 0.3)' : '1px solid rgba(7, 29, 73, 0.08)',
              boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-xs)',
              transition: 'all var(--transition-normal)'
            }}
          >
            <button
              id={headingId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleIndex(index)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                textAlign: 'left',
                background: isOpen ? 'var(--color-soft-blue)' : '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                gap: '1rem',
                transition: 'background var(--transition-fast)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: isOpen ? 'var(--color-tech-blue)' : 'var(--color-navy)'
                }}
              >
                {item.q}
              </span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: isOpen ? 'var(--color-ice-blue)' : 'rgba(7, 29, 73, 0.04)',
                  color: isOpen ? 'var(--color-tech-blue)' : 'var(--color-slate)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform var(--transition-normal), background var(--transition-fast)',
                  flexShrink: 0
                }}
              >
                <ChevronDown size={18} />
              </span>
            </button>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headingId}
                style={{
                  padding: '1rem 1.5rem 1.5rem 1.5rem',
                  background: isOpen ? 'var(--color-soft-blue)' : '#FFFFFF',
                  color: 'var(--color-slate)',
                  fontSize: '0.98rem',
                  lineHeight: 1.65,
                  borderTop: '1px solid rgba(23, 105, 255, 0.08)'
                }}
              >
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
