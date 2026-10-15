import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Target,
  Compass,
  MapPin,
  CheckCircle2,
  Users,
  Globe,
  Code,
  TrendingUp,
  Cpu,
  Bot,
  Laptop
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { companyInfo } from '../data/companyContent';

export default function About({ onOpenEnquiry }) {
  const getValueIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles size={22} />;
      case 'Globe':
        return <Globe size={22} />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} />;
      case 'Code':
        return <Code size={22} />;
      case 'Users':
        return <Users size={22} />;
      case 'TrendingUp':
        return <TrendingUp size={22} />;
      default:
        return <CheckCircle2 size={22} />;
    }
  };

  return (
    <div className="page-about">
      {/* About Hero */}
      <section
        style={{
          paddingTop: '3rem',
          paddingBottom: '5rem',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F9FF 65%, #EAF5FF 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Breadcrumbs items={[{ label: 'About Us' }]} />

          <div style={{ maxWidth: '820px' }}>
            <div className="eyebrow eyebrow-blue" style={{ marginBottom: '1rem' }}>
              <Sparkles size={14} />
              <span>THE ASHVON STORY</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.3rem)',
                fontWeight: 800,
                color: 'var(--color-navy)',
                lineHeight: 1.18,
                marginBottom: '1.25rem'
              }}
            >
              Building the Future of Practical <span className="text-gradient">Technology Education</span>.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw, 1.2rem)',
                color: 'var(--color-slate)',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              Ashvon Technologies was established to bridge the divide between theoretical learning and hands-on technological capability. We empower schools, colleges, and organizations with future-ready skills and modern software architectures.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => onOpenEnquiry('General Enquiry')}
                icon={ArrowRight}
              >
                Connect With Our Team
              </Button>
              <Button variant="secondary" size="lg" to="/edtech">
                Explore EdTech Division
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION & BRAND PROMISE */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-3">
            {/* Mission */}
            <div
              className="glass-card"
              style={{
                padding: '2.5rem 2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1.5px solid rgba(23, 105, 255, 0.2)',
                background: 'linear-gradient(145deg, #FFFFFF 0%, #F4F9FF 100%)'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #1769FF 0%, #0B3D91 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <Target size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-navy)', fontWeight: 800, marginBottom: '0.85rem' }}>
                Our Mission
              </h3>
              <p style={{ color: 'var(--color-slate)', fontSize: '0.96rem', lineHeight: 1.65 }}>
                {companyInfo.mission}
              </p>
            </div>

            {/* Vision */}
            <div
              className="glass-card"
              style={{
                padding: '2.5rem 2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1.5px solid rgba(40, 216, 255, 0.3)',
                background: 'linear-gradient(145deg, #FFFFFF 0%, #EAF5FF 100%)'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #0B3D91 0%, #28D8FF 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <Compass size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-navy)', fontWeight: 800, marginBottom: '0.85rem' }}>
                Our Vision
              </h3>
              <p style={{ color: 'var(--color-slate)', fontSize: '0.96rem', lineHeight: 1.65 }}>
                {companyInfo.vision}
              </p>
            </div>

            {/* Brand Promise */}
            <div
              className="glass-card"
              style={{
                padding: '2.5rem 2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1.5px solid rgba(23, 105, 255, 0.2)',
                background: 'linear-gradient(145deg, #FFFFFF 0%, #F4F9FF 100%)'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #1769FF 0%, #3585FF 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-navy)', fontWeight: 800, marginBottom: '0.85rem' }}>
                Brand Promise
              </h3>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-tech-blue)', marginBottom: '0.5rem' }}>
                "{companyInfo.brandPromise}"
              </div>
              <p style={{ color: 'var(--color-slate)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                Every school, student, and enterprise client receives sincere dedication, tailored curriculum tracks, and hands-on guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section section-bg-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Guiding Principles"
            title="Our Core Values"
            highlightWord="Core Values"
            subtitle="The fundamental beliefs driving our educational curriculum development and client relationships."
          />

          <div className="grid-3">
            {companyInfo.values.map((val, idx) => (
              <div key={idx} className="solid-card" style={{ padding: '2rem 1.75rem', borderRadius: 'var(--radius-lg)' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(23, 105, 255, 0.1)',
                    color: 'var(--color-tech-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  {getValueIcon(val.icon)}
                </div>
                <h4 style={{ fontSize: '1.18rem', color: 'var(--color-navy)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {val.title}
                </h4>
                <p style={{ color: 'var(--color-slate)', fontSize: '0.91rem', lineHeight: 1.6 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEOGRAPHIC GROWTH ROADMAP */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Expansion Strategy"
            title="Geographic Focus & Growth Vision"
            highlightWord="Growth Vision"
            subtitle="A deliberate, staged roadmap designed to expand high-impact technology learning across India."
          />

          <div
            style={{
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-soft-blue)',
              border: '1px solid rgba(23, 105, 255, 0.18)',
              maxWidth: '820px',
              margin: '0 auto 2.5rem auto',
              textAlign: 'center',
              fontSize: '0.88rem',
              color: 'var(--color-slate)'
            }}
          >
            <strong>Note on Strategic Phasing:</strong> These phases define Ashvon's institutional focus and expansion plan, rather than established physical offices in every territory.
          </div>

          <div className="grid-3">
            {companyInfo.growthRoadmap.map((stage, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2.25rem 2rem',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: idx === 0 ? '1.5px solid var(--color-tech-blue)' : '1px solid rgba(7, 29, 73, 0.1)'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      background: idx === 0 ? 'var(--color-tech-blue)' : 'rgba(7, 29, 73, 0.08)',
                      color: idx === 0 ? '#FFFFFF' : 'var(--color-navy)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      marginBottom: '1rem',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <MapPin size={12} />
                    <span>{stage.status}</span>
                  </div>

                  <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--color-tech-blue)', fontWeight: 600, textTransform: 'uppercase' }}>
                    {stage.phase}
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: 'var(--color-navy)', fontWeight: 800, marginTop: '0.2rem', marginBottom: '0.85rem' }}>
                    {stage.region}
                  </h3>

                  <p style={{ color: 'var(--color-slate)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {stage.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          padding: '4.5rem 0',
          background: 'linear-gradient(135deg, #071D49 0%, #0B3D91 60%, #1769FF 100%)',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.65rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.25 }}>
            Partner with Ashvon Technologies
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Whether you lead an academic institution or require modern software engineering, our team is ready to collaborate.
          </p>
          <Button
            variant="white"
            size="lg"
            to="/enquiry"
            icon={ArrowRight}
          >
            Start an Enquiry
          </Button>
        </div>
      </section>
    </div>
  );
}
