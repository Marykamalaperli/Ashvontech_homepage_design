import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Send, ArrowRight, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';
import DemoSuccessModal from './DemoSuccessModal';

const CATEGORIES = [
  'School AI & Robotics Education',
  'College AI & Technology Training',
  'IT / Software Development',
  'Robotics Kits / Infrastructure',
  'Faculty or Innovation Collaboration',
  'General Enquiry'
];

export default function EnquiryModal({ isOpen, onClose, initialCategory = '' }) {
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: initialCategory || CATEGORIES[0],
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, category: initialCategory }));
    }
  }, [initialCategory]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus initial input
    const timer = setTimeout(() => {
      if (firstInputRef.current) {
        firstInputRef.current.focus();
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid phone number (8-15 digits)';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message or project outline';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
    }, 450);
  };

  const handleContinueToFull = () => {
    onClose();
    const typeParam = encodeURIComponent(formData.category);
    navigate(`/enquiry?category=${typeParam}`);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onClose();
  };

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.25rem',
          backgroundColor: 'rgba(7, 29, 73, 0.68)',
          backdropFilter: 'blur(8px)'
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div
          ref={modalRef}
          style={{
            width: '100%',
            maxWidth: '560px',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 25px 60px rgba(7, 29, 73, 0.22), 0 0 35px rgba(23, 105, 255, 0.2)',
            border: '1px solid rgba(23, 105, 255, 0.2)',
            overflow: 'hidden',
            maxHeight: '92vh',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '1.25rem 1.75rem',
              background: 'linear-gradient(135deg, #071D49 0%, #0B3D91 100%)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-cyan)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '0.2rem'
                }}
              >
                Quick Inquiry Gateway
              </div>
              <h3
                id="enquiry-modal-title"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  color: '#FFFFFF',
                  fontWeight: 700
                }}
              >
                Connect With Ashvon
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close dialog"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                cursor: 'pointer',
                transition: 'background var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.22)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
            >
              <X size={18} />
            </button>
          </div>

          {/* Form Form Body */}
          <form
            onSubmit={handleSubmit}
            style={{
              padding: '1.5rem 1.75rem',
              overflowY: 'auto',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div>
              <label
                htmlFor="modal-name"
                style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}
              >
                Full Name *
              </label>
              <input
                ref={firstInputRef}
                id="modal-name"
                type="text"
                placeholder="e.g. Dr. Ramesh Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: errors.name ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                  fontSize: '0.92rem',
                  outline: 'none',
                  transition: 'border var(--transition-fast)'
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-tech-blue)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? '#EF4444' : '#CBD5E1')}
              />
              {errors.name && <p style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem' }}>{errors.name}</p>}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              <div>
                <label
                  htmlFor="modal-email"
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}
                >
                  Email Address *
                </label>
                <input
                  id="modal-email"
                  type="email"
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: errors.email ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-tech-blue)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = errors.email ? '#EF4444' : '#CBD5E1')}
                />
                {errors.email && <p style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem' }}>{errors.email}</p>}
              </div>

              <div>
                <label
                  htmlFor="modal-phone"
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}
                >
                  Phone Number *
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: errors.phone ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-tech-blue)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = errors.phone ? '#EF4444' : '#CBD5E1')}
                />
                {errors.phone && <p style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem' }}>{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label
                htmlFor="modal-category"
                style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}
              >
                Inquiry Category *
              </label>
              <select
                id="modal-category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.92rem',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--color-navy)',
                  outline: 'none'
                }}
              >
                {CATEGORIES.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="modal-message"
                style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}
              >
                Brief Requirement / Message *
              </label>
              <textarea
                id="modal-message"
                rows="3"
                placeholder="Tell us about your school grade range, college department, or software project scope..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: errors.message ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                  fontSize: '0.92rem',
                  outline: 'none',
                  resize: 'vertical'
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-tech-blue)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = errors.message ? '#EF4444' : '#CBD5E1')}
              />
              {errors.message && <p style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem' }}>{errors.message}</p>}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.78rem',
                color: 'var(--color-slate-light)',
                marginTop: '0.25rem'
              }}
            >
              <ShieldCheck size={16} color="var(--color-tech-blue)" />
              <span>We respect your privacy. Inquiries are handled for official consultation.</span>
            </div>

            {/* Actions */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
                marginTop: '0.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(7, 29, 73, 0.08)'
              }}
            >
              <button
                type="button"
                onClick={handleContinueToFull}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-tech-blue)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  cursor: 'pointer'
                }}
              >
                <span>Need detailed fields? Open full form</span>
                <ArrowRight size={14} />
              </button>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button variant="secondary" size="sm" onClick={onClose}>
                  Cancel
                </Button>
                <Button variant="primary" size="sm" type="submit" loading={submitting} icon={Send}>
                  Submit Demo Enquiry
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <DemoSuccessModal isOpen={showSuccess} onClose={handleSuccessClose} data={formData} />
    </>
  );
}
