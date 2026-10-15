import React from 'react';
import {
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock,
  HelpCircle
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Accordion from '../components/ui/Accordion';
import { companyInfo } from '../data/companyContent';

export default function Contact({ onOpenEnquiry }) {
  const contactFaqs = [
    {
      q: "What is the fastest way to get in touch with Ashvon Technologies?",
      a: "The most efficient channel is our interactive Enquiry Portal or the 'Enquire Now' popup on this website. Our institutional coordinators triage incoming inquiries daily."
    },
    {
      q: "Does Ashvon Technologies conduct in-person school visits?",
      a: "Yes. For schools and engineering colleges located within our Phase 1 focus areas (Andhra Pradesh and Telangana), we coordinate on-site academic meetings and live laboratory kit demonstrations."
    },
    {
      q: "Can remote or out-of-state institutions collaborate with Ashvon?",
      a: "Yes. We conduct virtual curriculum walkthroughs, ship hardware kits nationwide, and provide remote faculty onboarding and digital project materials."
    }
  ];

  return (
    <div className="page-contact">
      {/* Contact Hero */}
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
          <Breadcrumbs items={[{ label: 'Contact & Inquiries' }]} />

          <div style={{ maxWidth: '820px' }}>
            <div className="eyebrow eyebrow-blue" style={{ marginBottom: '1rem' }}>
              <Mail size={14} />
              <span>OFFICIAL CONSULTATION CHANNEL</span>
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
              Get in Touch with <span className="text-gradient">Ashvon Technologies</span>.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw, 1.2rem)',
                color: 'var(--color-slate)',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              Whether you are evaluating AI robotics labs for your school, technical bootcamps for your college, or custom software for your organization, we look forward to assisting you.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Button
                variant="primary"
                size="lg"
                to="/enquiry"
                icon={ArrowRight}
              >
                Go to Enquiry Portal
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => onOpenEnquiry('General Enquiry')}
              >
                Open Quick Modal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* REGIONAL FOCUS & CONTACT CARDS */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-3">
            {/* Card 1: Regional Focus */}
            <div className="glass-card" style={{ padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)' }}>
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
                <MapPin size={22} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-navy)', fontWeight: 800, marginBottom: '0.65rem' }}>
                Primary Operational Focus
              </h3>
              <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--color-tech-blue)', marginBottom: '0.5rem' }}>
                {companyInfo.contact.focusRegions}
              </div>
              <p style={{ color: 'var(--color-slate)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Phase 1 regional network focus covering academic institutions, school laboratories, and enterprise software consultations.
              </p>
            </div>

            {/* Card 2: Inquiries & Support */}
            <div className="glass-card" style={{ padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)' }}>
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
                <Building2 size={22} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-navy)', fontWeight: 800, marginBottom: '0.65rem' }}>
                Institutional Relations
              </h3>
              <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--color-tech-blue)', marginBottom: '0.5rem' }}>
                {companyInfo.contact.supportType}
              </div>
              <p style={{ color: 'var(--color-slate)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Dedicated handling for school robotics curriculum, engineering workshops, and custom software delivery.
              </p>
            </div>

            {/* Card 3: Prototype Status */}
            <div className="glass-card" style={{ padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)' }}>
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
                <Clock size={22} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-navy)', fontWeight: 800, marginBottom: '0.65rem' }}>
                Consultation Response
              </h3>
              <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--color-tech-blue)', marginBottom: '0.5rem' }}>
                Prompt Review Cadence
              </div>
              <p style={{ color: 'var(--color-slate)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                All validated prototype submissions are logged in frontend state for evaluation during the ASH-02 review cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FAQS */}
      <section className="section section-bg-soft">
        <div className="container" style={{ maxWidth: '860px' }}>
          <SectionHeading
            eyebrow="Communication FAQs"
            title="Connecting with Our Team"
            highlightWord="Connecting"
            subtitle="Clear details on engagement protocols and demonstration arrangements."
          />

          <Accordion items={contactFaqs} />
        </div>
      </section>
    </div>
  );
}
