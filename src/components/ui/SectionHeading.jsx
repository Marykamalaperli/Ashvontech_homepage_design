import React from 'react';

export default function SectionHeading({
  eyebrow,
  eyebrowVariant = 'blue',
  title,
  highlightWord,
  subtitle,
  align = 'center',
  light = false,
  className = ''
}) {
  const isCentered = align === 'center';

  return (
    <div
      className={`section-heading ${className}`}
      style={{
        textAlign: align,
        maxWidth: isCentered ? '760px' : '680px',
        margin: isCentered ? '0 auto 3rem auto' : '0 0 2.5rem 0'
      }}
    >
      {eyebrow && (
        <div className={`eyebrow eyebrow-${eyebrowVariant}`}>
          <span>{eyebrow}</span>
        </div>
      )}
      <h2
        style={{
          fontSize: 'clamp(1.85rem, 3.2vw, 2.65rem)',
          fontWeight: 800,
          color: light ? '#FFFFFF' : 'var(--color-navy)',
          marginBottom: '1rem',
          lineHeight: 1.2
        }}
      >
        {highlightWord && title.includes(highlightWord) ? (
          <>
            {title.split(highlightWord)[0]}
            <span className="text-gradient">{highlightWord}</span>
            {title.split(highlightWord)[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
            color: light ? 'rgba(255, 255, 255, 0.85)' : 'var(--color-slate)',
            lineHeight: 1.65
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
