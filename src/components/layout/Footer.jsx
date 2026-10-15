import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  MapPin,
  Mail,
  Shield,
  Layers,
  Bot,
  GraduationCap,
  Laptop
} from 'lucide-react';
import { companyInfo } from '../../data/companyContent';
import BrandLogo from '../ui/BrandLogo';

export default function Footer({ onOpenEnquiry }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #071D49 0%, #051433 100%)',
        color: '#FFFFFF',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid rgba(40, 216, 255, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Glow Elements in Background */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(23, 105, 255, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Top Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Brand Info Column */}
          <div style={{ maxWidth: '340px' }}>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
                marginBottom: '1.25rem'
              }}
            >
              <BrandLogo
                variant="dark"
                size={48}
                className="footer-logo-img"
                alt="Ashvon Technologies Logo"
              />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: '#FFFFFF'
                  }}
                >
                  ASHVON
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: 'var(--color-cyan)',
                    textTransform: 'uppercase'
                  }}
                >
                  Technologies
                </div>
              </div>
            </Link>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--color-cyan)',
                fontWeight: 600,
                marginBottom: '0.75rem'
              }}
            >
              {companyInfo.tagline}
            </div>

            <p style={{ color: 'rgba(255, 255, 255, 0.72)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {companyInfo.brandPromise} Practical AI education, robotics labs, and modern software architectures.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                fontSize: '0.78rem',
                color: 'var(--color-cyan)'
              }}
            >
              <MapPin size={13} />
              <span>{companyInfo.contact.focusRegions} Focus</span>
            </div>
          </div>

          {/* EdTech Division Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                letterSpacing: '0.02em'
              }}
            >
              EdTech Division
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <Link
                  to="/edtech"
                  style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                >
                  EdTech Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/edtech/schools"
                  style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                >
                  School AI & Robotics (Grades 4–9)
                </Link>
              </li>
              <li>
                <Link
                  to="/edtech/colleges"
                  style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                >
                  College AI & Tech Training
                </Link>
              </li>
              <li>
                <Link
                  to="/edtech/schools#kits"
                  style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                >
                  Robotics Hardware Kits
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                letterSpacing: '0.02em'
              }}
            >
              IT & Software Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <Link
                  to="/it-services"
                  style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                >
                  Services Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/it-services#web-apps"
                  style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                >
                  Web Application Engineering
                </Link>
              </li>
              <li>
                <Link
                  to="/it-services#custom-software"
                  style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                >
                  Custom Enterprise Software
                </Link>
              </li>
              <li>
                <Link
                  to="/it-services#ai-integration"
                  style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                >
                  AI Integration & Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                letterSpacing: '0.02em'
              }}
            >
              Company & Inquiries
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <Link
                  to="/about"
                  style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                >
                  Our Story & Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                >
                  Contact & Regional Office
                </Link>
              </li>
              <li>
                <Link
                  to="/enquiry"
                  style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                >
                  Official Enquiry Portal
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: 'var(--color-cyan)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <span>Quick Enquire Now</span>
                  <ArrowRight size={14} />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: 'rgba(255, 255, 255, 0.6)'
          }}
        >
          <div>
            © {currentYear} Ashvon Technologies. All rights reserved. &bull; Tagline: <em>Learn &bull; Build &bull; Lead</em>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.06)',
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <Shield size={14} color="var(--color-cyan)" />
            <span>ASH-02 Corporate Prototype Review</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
