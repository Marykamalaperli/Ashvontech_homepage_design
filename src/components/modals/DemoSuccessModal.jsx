import React, { useEffect, useRef } from 'react';
import { CheckCircle2, X, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

export default function DemoSuccessModal({ isOpen, onClose, data }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button
    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-success-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        backgroundColor: 'rgba(7, 29, 73, 0.65)',
        backdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.25s ease'
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
          maxWidth: '520px',
          background: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-xl), 0 0 40px rgba(40, 216, 255, 0.25)',
          border: '1px solid rgba(23, 105, 255, 0.25)',
          overflow: 'hidden',
          animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            padding: '1.5rem 1.75rem 1rem 1.75rem',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(7, 29, 73, 0.08)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.12)',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CheckCircle2 size={26} />
            </div>
            <div>
              <h3
                id="demo-success-title"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  color: 'var(--color-navy)',
                  fontWeight: 700
                }}
              >
                Validation Successful
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-slate-light)' }}>
                Prototype Submission Mode
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              padding: '0.4rem',
              borderRadius: '50%',
              color: 'var(--color-slate-light)',
              transition: 'background var(--transition-fast)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(7, 29, 73, 0.06)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '1.75rem' }}>
          <div
            style={{
              background: 'var(--color-soft-blue)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              border: '1px solid rgba(23, 105, 255, 0.18)',
              marginBottom: '1.25rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-tech-blue)',
                fontWeight: 700,
                fontSize: '0.95rem',
                marginBottom: '0.35rem'
              }}
            >
              <AlertCircle size={18} />
              <span>Demo enquiry validated successfully</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-slate)', lineHeight: 1.55 }}>
              Live submission is not yet connected. All input fields, format constraints, and conditional requirements passed frontend validation.
            </p>
          </div>

          {data && (
            <div style={{ fontSize: '0.85rem', color: 'var(--color-slate)', marginBottom: '1.5rem' }}>
              <div style={{ fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                Validated Data Summary:
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li><strong>Name:</strong> {data.fullName || data.name}</li>
                <li><strong>Email:</strong> {data.email}</li>
                {data.phone && <li><strong>Phone:</strong> {data.phone}</li>}
                <li><strong>Category:</strong> {data.enquiryType || data.category}</li>
              </ul>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <Button variant="primary" onClick={onClose}>
              Acknowledge & Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
