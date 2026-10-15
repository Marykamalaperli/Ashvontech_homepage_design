import React from 'react';
import { Bot, Terminal, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function FloatingHeroCards({ mousePos = { x: 0, y: 0 } }) {
  // Parallax subtle offset
  const offsetX1 = mousePos.x * 12;
  const offsetY1 = mousePos.y * 12;

  const offsetX2 = mousePos.x * -16;
  const offsetY2 = mousePos.y * -16;

  const offsetX3 = mousePos.x * 10;
  const offsetY3 = mousePos.y * -10;

  return (
    <>
      {/* Floating Card 1: AI & Robotics (Top Left) */}
      <div
        className="hero-floating-card floating-card-1"
        style={{
          position: 'absolute',
          top: '8%',
          left: '-4%',
          zIndex: 4,
          transform: `translate(${offsetX1}px, ${offsetY1}px)`,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          animation: 'floatGentle 6s ease-in-out infinite'
        }}
      >
        <div
          className="glass-card"
          style={{
            padding: '0.85rem 1.15rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(16px)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(23, 105, 255, 0.2)',
            boxShadow: '0 12px 30px rgba(7, 29, 73, 0.12), 0 0 15px rgba(40, 216, 255, 0.2)'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-sm)',
              background: 'linear-gradient(135deg, #1769FF 0%, #0B3D91 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 4px 10px rgba(23, 105, 255, 0.3)'
            }}
          >
            <Bot size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--color-slate-light)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Hands-On Learning
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-navy)' }}>
              AI & Robotics
            </div>
          </div>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#10B981',
              boxShadow: '0 0 8px #10B981',
              marginLeft: '0.35rem'
            }}
          />
        </div>
      </div>

      {/* Floating Card 2: Python & AI Training (Bottom Right) */}
      <div
        className="hero-floating-card floating-card-2"
        style={{
          position: 'absolute',
          bottom: '8%',
          right: '-5%',
          zIndex: 4,
          transform: `translate(${offsetX2}px, ${offsetY2}px)`,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          animation: 'floatGentle 6.5s ease-in-out infinite 1.5s'
        }}
      >
        <div
          className="glass-card"
          style={{
            padding: '0.85rem 1.15rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(16px)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(40, 216, 255, 0.35)',
            boxShadow: '0 12px 30px rgba(7, 29, 73, 0.12), 0 0 20px rgba(40, 216, 255, 0.25)'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-sm)',
              background: 'linear-gradient(135deg, #0B3D91 0%, #28D8FF 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 4px 10px rgba(40, 216, 255, 0.3)'
            }}
          >
            <Terminal size={19} />
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--color-slate-light)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Higher Ed Tracks
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-navy)' }}>
              Python & AI Training
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card 3: Software Development (Bottom Left) */}
      <div
        className="hero-floating-card floating-card-3"
        style={{
          position: 'absolute',
          bottom: '22%',
          left: '-8%',
          zIndex: 4,
          transform: `translate(${offsetX3}px, ${offsetY3}px)`,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          animation: 'floatGentle 7s ease-in-out infinite 0.75s'
        }}
      >
        <div
          className="glass-card"
          style={{
            padding: '0.85rem 1.15rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(16px)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(23, 105, 255, 0.2)',
            boxShadow: '0 12px 30px rgba(7, 29, 73, 0.12), 0 0 15px rgba(23, 105, 255, 0.15)'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-sm)',
              background: 'linear-gradient(135deg, #1769FF 0%, #3585FF 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF'
            }}
          >
            <Code2 size={19} />
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--color-slate-light)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Enterprise & Web
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-navy)' }}>
              Software Development
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
