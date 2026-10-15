import React, { useState } from 'react';
import {
  Laptop,
  Layers,
  Palette,
  Sparkles,
  BarChart3,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Shield,
  Code,
  Globe,
  Database,
  Cloud,
  Eye,
  Server
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Accordion from '../components/ui/Accordion';
import ServiceModal from '../components/modals/ServiceModal';
import { itServicesList } from '../data/services';

export default function ITServices({ onOpenEnquiry }) {
  const [selectedService, setSelectedService] = useState(null);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Globe':
        return <Globe size={24} />;
      case 'Layers':
        return <Layers size={24} />;
      case 'Palette':
        return <Palette size={24} />;
      case 'Sparkles':
        return <Sparkles size={24} />;
      case 'BarChart3':
        return <BarChart3 size={24} />;
      case 'RefreshCw':
        return <RefreshCw size={24} />;
      default:
        return <Laptop size={24} />;
    }
  };

  const itFaqs = [
    {
      q: "What types of software projects does Ashvon Technologies undertake?",
      a: "We engineer modern responsive web applications, custom internal tools, database portals, UI/UX design systems, and workflow automation integrating AI models."
    },
    {
      q: "What tech stacks does your engineering team build with?",
      a: "Our frontend architectures center on React, Vite, Next.js, and TypeScript. Our backends utilize Node.js, Express, Python FastAPI, PostgreSQL, MongoDB, and secure cloud containerization."
    },
    {
      q: "How does the engagement and development process work?",
      a: "We begin with a discovery consultation to define technical scope, followed by wireframing and architecture planning, modular two-week development sprints, continuous code reviews, and managed deployment."
    },
    {
      q: "Do you offer post-launch maintenance and support?",
      a: "Yes. We offer continuous support frameworks, performance audits, security patching, and progressive feature enhancements."
    }
  ];

  return (
    <div className="page-it-services">
      {/* IT Hero Section */}
      <section
        style={{
          paddingTop: '3rem',
          paddingBottom: '5rem',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F9FF 65%, #EAF5FF 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-40px',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(40, 216, 255, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Breadcrumbs items={[{ label: 'IT & Software Services' }]} />

          <div style={{ maxWidth: '820px' }}>
            <div className="eyebrow eyebrow-cyan" style={{ marginBottom: '1rem' }}>
              <Laptop size={14} />
              <span>SOFTWARE ENGINEERING & DIGITAL SOLUTIONS</span>
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
              Smart Software. Smarter Solutions. <br />
              <span className="text-gradient">Built for What's Next.</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw, 1.2rem)',
                color: 'var(--color-slate)',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              From modern websites and custom applications to AI integration and digital transformation, Ashvon helps organizations explore technology solutions that fit their needs.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => onOpenEnquiry('IT / Software Development')}
                icon={ArrowRight}
              >
                Discuss Your Project
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#services"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID (6 Core IT Capabilities) */}
      <section id="services" className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Capabilities"
            title="Comprehensive IT & Software Services"
            highlightWord="Software Services"
            subtitle="Engineered for scalability, user delight, and robust security across modern enterprise and web platforms."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {itServicesList.map((service) => (
              <div
                key={service.id}
                className="glass-card"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #1769FF 0%, #0B3D91 100%)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                      boxShadow: '0 6px 16px rgba(23, 105, 255, 0.25)'
                    }}
                  >
                    {getServiceIcon(service.icon)}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.3rem',
                      color: 'var(--color-navy)',
                      fontWeight: 700,
                      marginBottom: '0.75rem'
                    }}
                  >
                    {service.title}
                  </h3>

                  <p style={{ color: 'var(--color-slate)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {service.shortDesc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                    {service.capabilities.slice(0, 4).map((cap, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--color-slate)' }}>
                        <CheckCircle2 size={15} color="var(--color-tech-blue)" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid rgba(7, 29, 73, 0.08)'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--color-tech-blue)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <Eye size={15} />
                    <span>Quick Overview</span>
                  </button>

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onOpenEnquiry(`IT Project: ${service.title}`)}
                  >
                    Enquire
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK & CAPABILITIES */}
      <section className="section section-bg-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Technology Foundation"
            title="Our Modern Technology Stack"
            highlightWord="Technology Stack"
            subtitle="We build upon battle-tested open-source ecosystems, reactive frontend architectures, and high-performance cloud databases."
          />

          <div className="grid-4">
            {[
              {
                category: 'Frontend & UI',
                icon: Globe,
                techs: ['React', 'Vite', 'Next.js', 'Vanilla CSS & Tailwind', 'Figma Prototyping']
              },
              {
                category: 'Backend & APIs',
                icon: Server,
                techs: ['Node.js', 'Express', 'Python FastAPI', 'REST & GraphQL APIs', 'Microservices']
              },
              {
                category: 'Databases & Cloud',
                icon: Database,
                techs: ['PostgreSQL', 'MongoDB', 'Redis Caching', 'AWS & Cloudflare', 'Docker Containers']
              },
              {
                category: 'AI & Automation',
                icon: Sparkles,
                techs: ['OpenAI / Gemini APIs', 'PyTorch & HuggingFace', 'OCR Document Parsing', 'Workflow Bots', 'Data Analytics']
              }
            ].map((stack, idx) => (
              <div key={idx} className="solid-card" style={{ padding: '2rem 1.5rem', borderRadius: 'var(--radius-lg)' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(23, 105, 255, 0.1)',
                    color: 'var(--color-tech-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <stack.icon size={20} />
                </div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', fontWeight: 700, marginBottom: '1rem' }}>
                  {stack.category}
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.88rem', color: 'var(--color-slate)' }}>
                  {stack.techs.map((t, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-tech-blue)' }} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR DEVELOPMENT APPROACH */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Execution Rigor"
            title="From Idea to Implementation"
            highlightWord="Implementation"
            subtitle="A transparent, milestone-driven software development lifecycle."
          />

          <div className="grid-4">
            {[
              {
                step: '01',
                title: 'Discovery & Scope',
                desc: 'Technical requirement gathering, user journey definition, and system architecture mapping.'
              },
              {
                step: '02',
                title: 'UI/UX & Wireframing',
                desc: 'Interactive clickable prototypes, responsive component libraries, and client alignment.'
              },
              {
                step: '03',
                title: 'Agile Development',
                desc: 'Bi-weekly sprint iterations, clean modular code, unit testing, and version-controlled Git branches.'
              },
              {
                step: '04',
                title: 'QA & Deployment',
                desc: 'Security reviews, cross-browser audits, automated CI/CD pipelines, and cloud go-live.'
              }
            ].map((p, idx) => (
              <div key={idx} className="solid-card" style={{ padding: '2rem 1.5rem', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', fontWeight: 800, color: 'rgba(23, 105, 255, 0.2)', marginBottom: '0.75rem', lineHeight: 1 }}>
                  {p.step}
                </div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-slate)', lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT FAQS */}
      <section className="section section-bg-soft">
        <div className="container" style={{ maxWidth: '860px' }}>
          <SectionHeading
            eyebrow="Client Queries"
            title="IT Services FAQs"
            highlightWord="FAQs"
            subtitle="Details regarding timelines, technological choices, and project handoffs."
          />

          <Accordion items={itFaqs} />
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
            Ready to Build Your Next Software Solution?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Schedule an exploratory consultation with Ashvon Technologies to discuss your technical vision and requirements.
          </p>
          <Button
            variant="white"
            size="lg"
            onClick={() => onOpenEnquiry('IT / Software Development')}
            icon={ArrowRight}
          >
            Discuss Your Project Scope
          </Button>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
        onEnquire={(cat) => {
          setSelectedService(null);
          onOpenEnquiry(cat);
        }}
      />
    </div>
  );
}
