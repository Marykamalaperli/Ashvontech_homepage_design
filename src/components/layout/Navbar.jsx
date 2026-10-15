import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Bot,
  GraduationCap,
  Laptop,
  Layers
} from 'lucide-react';
import Button from '../ui/Button';
import BrandLogo from '../ui/BrandLogo';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdTechDropdownOpen, setIsEdTechDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsEdTechDropdownOpen(false);
  }, [location.pathname]);

  const isEdTechActive = location.pathname.startsWith('/edtech');

  return (
    <>
      {/* Announcement Bar */}
      <div
        style={{
          background: 'linear-gradient(90deg, #071D49 0%, #0B3D91 50%, #1769FF 100%)',
          color: '#FFFFFF',
          fontSize: '0.8125rem',
          padding: '0.45rem 1rem',
          textAlign: 'center',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          position: 'relative',
          zIndex: 101,
          letterSpacing: '0.02em',
          borderBottom: '1px solid rgba(40, 216, 255, 0.2)'
        }}
      >
        <span
          style={{
            background: 'rgba(40, 216, 255, 0.18)',
            color: 'var(--color-cyan)',
            padding: '0.15rem 0.5rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.7rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}
        >
          <Sparkles size={11} /> Ashvon Network
        </span>
        <span>Practical AI Education & Technology Solutions</span>
      </div>

      {/* Sticky Main Navigation */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(23, 105, 255, 0.14)' : '1px solid rgba(7, 29, 73, 0.06)',
          boxShadow: isScrolled ? '0 8px 24px rgba(7, 29, 73, 0.08)' : '0 2px 10px rgba(7, 29, 73, 0.02)',
          transition: 'all var(--transition-normal)'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 'var(--header-height)'
          }}
        >
          {/* Logo Brand */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none'
            }}
            aria-label="Ashvon Technologies Homepage"
          >
            <BrandLogo
              variant="light"
              size={46}
              className="navbar-logo-img"
              alt="Ashvon Technologies Emblem"
            />
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: 'var(--color-navy)',
                  lineHeight: 1.15
                }}
              >
                ASHVON
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--color-tech-blue)',
                  textTransform: 'uppercase'
                }}
              >
                Technologies
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.75rem'
            }}
            className="desktop-nav"
          >
            <NavLink
              to="/"
              end
              style={({ isActive }) => ({
                fontFamily: 'var(--font-display)',
                fontSize: '0.94rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-tech-blue)' : 'var(--color-slate)',
                padding: '0.5rem 0.2rem',
                position: 'relative'
              })}
            >
              Home
            </NavLink>

            {/* EdTech Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setIsEdTechDropdownOpen(true)}
              onMouseLeave={() => setIsEdTechDropdownOpen(false)}
            >
              <button
                type="button"
                aria-expanded={isEdTechDropdownOpen}
                aria-haspopup="true"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.94rem',
                  fontWeight: isEdTechActive ? 700 : 500,
                  color: isEdTechActive ? 'var(--color-tech-blue)' : 'var(--color-slate)',
                  padding: '0.5rem 0.2rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <span>EdTech</span>
                <ChevronDown
                  size={15}
                  style={{
                    transform: isEdTechDropdownOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform var(--transition-fast)'
                  }}
                />
              </button>

              {/* Dropdown Menu */}
              {isEdTechDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '290px',
                    padding: '0.65rem',
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(23, 105, 255, 0.16)',
                    boxShadow: '0 16px 36px rgba(7, 29, 73, 0.14)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                    zIndex: 110,
                    animation: 'fadeIn 0.2s ease'
                  }}
                >
                  <Link
                    to="/edtech"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      textDecoration: 'none',
                      transition: 'background var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-soft-blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'rgba(23, 105, 255, 0.1)',
                        color: 'var(--color-tech-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Layers size={17} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-navy)' }}>
                        EdTech Overview
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--color-slate-light)' }}>
                        All education tracks & philosophy
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/edtech/schools"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      textDecoration: 'none',
                      transition: 'background var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-soft-blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'rgba(23, 105, 255, 0.1)',
                        color: 'var(--color-tech-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Bot size={17} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-navy)' }}>
                        School AI & Robotics
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--color-slate-light)' }}>
                        Grades 4–9 hands-on lab curricula
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/edtech/colleges"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      textDecoration: 'none',
                      transition: 'background var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-soft-blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'rgba(23, 105, 255, 0.1)',
                        color: 'var(--color-tech-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <GraduationCap size={17} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-navy)' }}>
                        College AI & Tech Training
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--color-slate-light)' }}>
                        Python, ML & IoT engineering
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/it-services"
              style={({ isActive }) => ({
                fontFamily: 'var(--font-display)',
                fontSize: '0.94rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-tech-blue)' : 'var(--color-slate)',
                padding: '0.5rem 0.2rem'
              })}
            >
              IT Services
            </NavLink>

            <NavLink
              to="/about"
              style={({ isActive }) => ({
                fontFamily: 'var(--font-display)',
                fontSize: '0.94rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-tech-blue)' : 'var(--color-slate)',
                padding: '0.5rem 0.2rem'
              })}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                fontFamily: 'var(--font-display)',
                fontSize: '0.94rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-tech-blue)' : 'var(--color-slate)',
                padding: '0.5rem 0.2rem'
              })}
            >
              Contact
            </NavLink>
          </nav>

          {/* Right Action Button & Mobile Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenEnquiry}
              icon={ArrowRight}
              className="navbar-enquire-btn"
            >
              Enquire Now
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'rgba(7, 29, 73, 0.05)',
                color: 'var(--color-navy)',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer'
              }}
              className="mobile-nav-toggle"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div
            style={{
              padding: '1.25rem 1.5rem 2rem 1.5rem',
              backgroundColor: '#FFFFFF',
              borderTop: '1px solid rgba(23, 105, 255, 0.1)',
              boxShadow: '0 12px 24px rgba(7, 29, 73, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              animation: 'fadeIn 0.25s ease'
            }}
            className="mobile-menu-drawer"
          >
            <NavLink
              to="/"
              end
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--color-navy)',
                padding: '0.5rem 0'
              }}
            >
              Home
            </NavLink>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingLeft: '0.5rem', borderLeft: '2px solid var(--color-ice-blue)' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-tech-blue)', fontWeight: 700, textTransform: 'uppercase' }}>
                EdTech Division
              </div>
              <NavLink to="/edtech" end style={{ fontSize: '0.95rem', color: 'var(--color-slate)', padding: '0.3rem 0' }}>
                EdTech Overview
              </NavLink>
              <NavLink to="/edtech/schools" style={{ fontSize: '0.95rem', color: 'var(--color-slate)', padding: '0.3rem 0' }}>
                School AI & Robotics (Grades 4–9)
              </NavLink>
              <NavLink to="/edtech/colleges" style={{ fontSize: '0.95rem', color: 'var(--color-slate)', padding: '0.3rem 0' }}>
                College AI & Technology Training
              </NavLink>
            </div>

            <NavLink
              to="/it-services"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--color-navy)',
                padding: '0.5rem 0'
              }}
            >
              IT Services
            </NavLink>

            <NavLink
              to="/about"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--color-navy)',
                padding: '0.5rem 0'
              }}
            >
              About Ashvon
            </NavLink>

            <NavLink
              to="/contact"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--color-navy)',
                padding: '0.5rem 0'
              }}
            >
              Contact
            </NavLink>

            <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(7, 29, 73, 0.08)' }}>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                style={{ width: '100%' }}
                icon={ArrowRight}
              >
                Enquire Now
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Media query overrides in inline style or stylesheet */}
      <style>{`
        .navbar-logo-img {
          height: 46px;
          width: auto;
          object-fit: contain;
          display: block;
        }
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
        @media (max-width: 859px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
          .navbar-logo-img {
            height: 40px !important;
          }
        }
      `}</style>
    </>
  );
}
