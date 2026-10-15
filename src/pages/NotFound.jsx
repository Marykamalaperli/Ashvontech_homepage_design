import React from 'react';
import { Home, ArrowLeft, Bot, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F9FF 65%, #EAF5FF 100%)',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '580px' }}>
        <div className="eyebrow eyebrow-blue" style={{ marginBottom: '1.25rem' }}>
          <Sparkles size={14} />
          <span>NAVIGATION NOTICE</span>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(5rem, 12vw, 8rem)',
            fontWeight: 800,
            background: 'var(--gradient-tech)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
            marginBottom: '1rem'
          }}
        >
          404
        </div>

        <h1
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
            fontWeight: 800,
            color: 'var(--color-navy)',
            marginBottom: '1rem'
          }}
        >
          Page Not Found
        </h1>

        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--color-slate)',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}
        >
          The page you are looking for does not exist or may have been relocated within the Ashvon Technologies corporate platform.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          <Button variant="primary" size="lg" to="/" icon={Home} iconPosition="left">
            Back to Homepage
          </Button>
          <Button variant="secondary" size="lg" to="/edtech">
            Explore EdTech
          </Button>
        </div>
      </div>
    </div>
  );
}
