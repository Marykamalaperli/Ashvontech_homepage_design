import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import Button from '../ui/Button';

export default function ServiceModal({ isOpen, onClose, service, onEnquire }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        backgroundColor: 'rgba(7, 29, 73, 0.65)',
        backdropFilter: 'blur(8px)'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        style={{
          width: '100%',
          maxWidth: '560px',
          background: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-xl), 0 0 35px rgba(23, 105, 255, 0.2)',
          border: '1px solid rgba(23, 105, 255, 0.2)',
          overflow: 'hidden',
          animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.5rem 1.75rem',
            background: 'linear-gradient(135deg, #071D49 0%, #0B3D91 100%)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-cyan)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em'
              }}
            >
              {service.division || 'Service Division'}
            </span>
            <h3
              id="service-modal-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                color: '#FFFFFF',
                fontWeight: 700,
                marginTop: '0.2rem'
              }}
            >
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              padding: '0.45rem',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background var(--transition-fast)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.22)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '1.75rem' }}>
          <p style={{ color: 'var(--color-slate)', fontSize: '0.96rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
            {service.fullDesc || service.shortDesc}
          </p>

          {service.capabilities && (
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.65rem' }}>
                Key Capabilities & Deliverables:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {service.capabilities.map((cap, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--color-slate)' }}>
                    <CheckCircle2 size={15} color="var(--color-tech-blue)" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              marginTop: '1.5rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(7, 29, 73, 0.08)'
            }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                onClose();
                if (onEnquire) onEnquire(service.title);
              }}
            >
              Enquire About This
            </Button>

            {service.link && (
              <Button
                variant="primary"
                size="sm"
                to={service.link}
                onClick={onClose}
                icon={ArrowRight}
              >
                Go to Dedicated Page
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
