import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Laptop,
  Cpu,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Search,
  Compass,
  Rocket,
  ShieldCheck,
  Code,
  Users,
  Eye,
  Layers,
  ChevronRight
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import FloatingHeroCards from '../components/ui/FloatingHeroCards';
import BrandLogo from '../components/ui/BrandLogo';
import ServiceModal from '../components/modals/ServiceModal';
import { companyInfo, primaryAudiences } from '../data/companyContent';
import { coreOfferings } from '../data/services';

export default function Home({ onOpenEnquiry }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedService, setSelectedService] = useState(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize -1 to 1
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Bot':
        return <Bot size={24} />;
      case 'BrainCircuit':
        return <BrainCircuit size={24} />;
      case 'Laptop':
        return <Laptop size={24} />;
      case 'Cpu':
        return <Cpu size={24} />;
      case 'GraduationCap':
        return <GraduationCap size={24} />;
      default:
        return <Layers size={24} />;
    }
  };

  return (
    <div className="page-home" onMouseMove={handleMouseMove}>
      {/* SECTION 3: FUTURISTIC HERO */}
      <section
        style={{
          position: 'relative',
          paddingTop: '3.5rem',
          paddingBottom: '5.5rem',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F9FF 60%, #EAF5FF 100%)',
          overflow: 'hidden'
        }}
      >
        {/* Subtle Tech Grid and Radial Halos */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(rgba(23, 105, 255, 0.08) 1.5px, transparent 1.5px), radial-gradient(rgba(40, 216, 255, 0.05) 1.5px, transparent 1.5px)',
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
            pointerEvents: 'none',
            opacity: 0.65
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: '15%',
            right: '8%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(40, 216, 255, 0.22) 0%, rgba(23, 105, 255, 0.12) 40%, transparent 75%)',
            filter: 'blur(45px)',
            pointerEvents: 'none',
            animation: 'pulseHalo 5s ease-in-out infinite'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center'
            }}
            className="hero-grid"
          >
            {/* Left Column: Text & CTAs */}
            <div>
              <div className="eyebrow eyebrow-blue" style={{ marginBottom: '1.25rem' }}>
                <Sparkles size={14} />
                <span>EDUCATION • INNOVATION • TECHNOLOGY</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.3rem, 4.2vw, 3.45rem)',
                  fontWeight: 800,
                  color: 'var(--color-navy)',
                  lineHeight: 1.15,
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.025em'
                }}
              >
                Learn Today. <br />
                Build Tomorrow. <br />
                <span className="text-gradient">Lead the Future.</span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)',
                  color: 'var(--color-slate)',
                  lineHeight: 1.65,
                  marginBottom: '2rem',
                  maxWidth: '520px'
                }}
              >
                Empowering schools, colleges and businesses through practical AI education, robotics training and smart technology solutions.
              </p>

              {/* CTAs */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '2.5rem'
                }}
              >
                <Button variant="primary" size="lg" to="/edtech" icon={ArrowRight}>
                  Explore EdTech
                </Button>
                <Button variant="secondary" size="lg" to="/it-services">
                  Discover IT Services
                </Button>
              </div>

              {/* Trust & Audience Indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(23, 105, 255, 0.12)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.86rem', color: 'var(--color-slate)' }}>
                  <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                  <span>K-12 Robotics</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.86rem', color: 'var(--color-slate)' }}>
                  <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                  <span>College AI Tracks</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.86rem', color: 'var(--color-slate)' }}>
                  <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                  <span>Custom IT Platforms</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Illustration & Luminous Rings */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '480px'
              }}
              className="hero-image-wrapper"
            >
              {/* Luminous Concentric Rings */}
              <div
                style={{
                  position: 'absolute',
                  width: '430px',
                  height: '430px',
                  borderRadius: '50%',
                  border: '1.5px dashed rgba(40, 216, 255, 0.35)',
                  animation: 'spinSlow 45s linear infinite',
                  pointerEvents: 'none'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  width: '350px',
                  height: '350px',
                  borderRadius: '50%',
                  border: '1px solid rgba(23, 105, 255, 0.25)',
                  boxShadow: '0 0 35px rgba(23, 105, 255, 0.12)',
                  pointerEvents: 'none'
                }}
              />

              {/* 3D Illustration */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '430px',
                  zIndex: 3,
                  transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)`,
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/3D_illustration.png`}
                  alt="Ashvon Technologies 3D Emblem"
                  style={{
                    width: '100%',
                    height: 'auto',
                    filter: 'drop-shadow(0 20px 35px rgba(7, 29, 73, 0.2)) drop-shadow(0 0 25px rgba(40, 216, 255, 0.3))'
                  }}
                  className="animate-float"
                />
              </div>

              {/* Floating Interactive Informational Cards */}
              <FloatingHeroCards mousePos={mousePos} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: EXPLORE ASHVON (2 Prominent Visual Pathways) */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Dual Divisions"
            title="Explore Ashvon Technologies"
            highlightWord="Ashvon"
            subtitle="Two specialized wings engineered to deliver end-to-end practical education and digital software capabilities."
          />

          <div className="grid-2">
            {/* Pathway 1: EdTech */}
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'linear-gradient(145deg, #FFFFFF 0%, #F4F9FF 100%)',
                border: '1.5px solid rgba(23, 105, 255, 0.18)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  background: 'rgba(23, 105, 255, 0.06)',
                  pointerEvents: 'none'
                }}
              />
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.35rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(23, 105, 255, 0.1)',
                    color: 'var(--color-tech-blue)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    marginBottom: '1.25rem'
                  }}
                >
                  <Bot size={14} />
                  <span>Learning & Labs Division</span>
                </div>

                <h3
                  style={{
                    fontSize: '1.65rem',
                    color: 'var(--color-navy)',
                    marginBottom: '0.85rem',
                    fontWeight: 800
                  }}
                >
                  EdTech Solutions
                </h3>

                <p style={{ color: 'var(--color-slate)', lineHeight: 1.65, marginBottom: '1.5rem', fontSize: '1rem' }}>
                  Practical AI, coding and robotics programs for schools and colleges. Turn-key laboratory kits, structured curriculum, and expert mentor deployment.
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--color-slate)' }}>
                    <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                    <span>Grades 4–9 AI & Robotics curricula for schools</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--color-slate)' }}>
                    <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                    <span>Python, Machine Learning & IoT for colleges</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--color-slate)' }}>
                    <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                    <span>Hardware kits, assessments & teacher enablement</span>
                  </li>
                </ul>
              </div>

              <div>
                <Button variant="primary" to="/edtech" icon={ArrowRight}>
                  Explore EdTech
                </Button>
              </div>
            </div>

            {/* Pathway 2: IT Services */}
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'linear-gradient(145deg, #FFFFFF 0%, #EAF5FF 100%)',
                border: '1.5px solid rgba(40, 216, 255, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  background: 'rgba(40, 216, 255, 0.08)',
                  pointerEvents: 'none'
                }}
              />
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.35rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(40, 216, 255, 0.15)',
                    color: '#007A99',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    marginBottom: '1.25rem'
                  }}
                >
                  <Laptop size={14} />
                  <span>Software & Engineering Wing</span>
                </div>

                <h3
                  style={{
                    fontSize: '1.65rem',
                    color: 'var(--color-navy)',
                    marginBottom: '0.85rem',
                    fontWeight: 800
                  }}
                >
                  IT & Software Services
                </h3>

                <p style={{ color: 'var(--color-slate)', lineHeight: 1.65, marginBottom: '1.5rem', fontSize: '1rem' }}>
                  Web applications, custom software and AI-enabled business solutions. Helping organizations explore technology solutions tailored to their exact scale.
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--color-slate)' }}>
                    <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                    <span>Modern web applications & responsive portals</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--color-slate)' }}>
                    <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                    <span>Custom business platforms & API architectures</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--color-slate)' }}>
                    <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                    <span>AI integration, workflow automation & analytics</span>
                  </li>
                </ul>
              </div>

              <div>
                <Button variant="primary" to="/it-services" icon={ArrowRight}>
                  Explore IT Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHO WE SERVE (3 Audience Cards) */}
      <section className="section section-bg-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Target Audiences"
            title="Who We Serve"
            highlightWord="Serve"
            subtitle="Tailored technological training and software delivery designed around the distinct needs of three core groups."
          />

          <div className="grid-3">
            {primaryAudiences.map((aud) => (
              <div
                key={aud.id}
                className="solid-card"
                style={{
                  padding: '2.25rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div>
                  <div className="badge badge-blue" style={{ marginBottom: '1rem' }}>
                    {aud.badge}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      color: 'var(--color-navy)',
                      marginBottom: '0.35rem',
                      fontWeight: 700
                    }}
                  >
                    {aud.title}
                  </h3>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      color: 'var(--color-tech-blue)',
                      fontWeight: 600,
                      marginBottom: '1rem'
                    }}
                  >
                    {aud.tagline}
                  </div>
                  <p style={{ color: 'var(--color-slate)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {aud.desc}
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                    {aud.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.86rem', color: 'var(--color-slate)' }}>
                        <CheckCircle2 size={15} color="var(--color-tech-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Button variant="outline" size="sm" to={aud.link} icon={ArrowRight} style={{ width: '100%' }}>
                    {aud.btnText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR CORE OFFERINGS */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Key Offerings"
            title="Our Core Offerings"
            highlightWord="Offerings"
            subtitle="Explore our five flagship solutions delivering hands-on technology education, hardware labs, and digital software services."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {coreOfferings.map((offering) => (
              <div
                key={offering.id}
                className="glass-card"
                style={{
                  padding: '2rem',
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
                      boxShadow: '0 8px 18px rgba(23, 105, 255, 0.28)'
                    }}
                  >
                    {getServiceIcon(offering.icon)}
                  </div>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--color-tech-blue)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {offering.division}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      color: 'var(--color-navy)',
                      fontWeight: 700,
                      marginBottom: '0.75rem'
                    }}
                  >
                    {offering.title}
                  </h3>
                  <p style={{ color: 'var(--color-slate)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {offering.shortDesc}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(7, 29, 73, 0.08)' }}>
                  <button
                    type="button"
                    onClick={() => setSelectedService(offering)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.84rem',
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

                  <Link
                    to={offering.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--color-navy)',
                      transition: 'color var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-tech-blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-navy)')}
                  >
                    <span>View Page</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY ASHVON? (Learner-Centered Approach) */}
      <section className="section section-bg-ice">
        <div className="container">
          <SectionHeading
            eyebrow="The Ashvon Advantage"
            title="Why Choose Ashvon?"
            highlightWord="Ashvon"
            subtitle="Built on practical application, structured curriculum, and a core commitment: Because Every Learner Matters."
          />

          <div className="grid-3">
            {[
              {
                title: 'Hands-On Learning',
                desc: 'Students learn technology through direct tactile interaction—assembling circuits, coding bots, and testing algorithms.',
                icon: Cpu
              },
              {
                title: 'Structured Curriculum',
                desc: 'Progressive age-calibrated modules tailored specifically for Indian school boards and university technical programs.',
                icon: Layers
              },
              {
                title: 'Faculty & Lab Enablement',
                desc: 'We support educators through on-site mentor deployments, train-the-trainer workshops, and continuous guidance.',
                icon: GraduationCap
              },
              {
                title: 'Innovation & Challenge Culture',
                desc: 'Fostering creativity through hackathons, robotics challenges, and inter-institutional technology competitions.',
                icon: Rocket
              },
              {
                title: 'Future-Ready Skills',
                desc: 'Bridging the divide between conceptual rote learning and high-impact AI, Python, and robotics competencies.',
                icon: BrainCircuit
              },
              {
                title: 'Software Solutions for Enterprise',
                desc: 'Delivering modern, robust web platforms, automated workflows, and custom digital software for growing businesses.',
                icon: Laptop
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(23, 105, 255, 0.1)',
                    color: 'var(--color-tech-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}
                >
                  <feature.icon size={22} />
                </div>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-navy)',
                    fontWeight: 700,
                    marginBottom: '0.65rem'
                  }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--color-slate)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: HOW WE WORK (Clean Horizontal Progression) */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Proposed Methodology"
            title="How We Work"
            highlightWord="Work"
            subtitle="Our structured engagement model ensures clarity, predictable milestones, and collaborative success."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '1.5rem',
              position: 'relative'
            }}
          >
            {companyInfo.workingApproach.map((step, idx) => (
              <div
                key={idx}
                className="solid-card"
                style={{
                  padding: '2rem 1.5rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'rgba(23, 105, 255, 0.18)',
                    marginBottom: '0.75rem',
                    lineHeight: 1
                  }}
                >
                  {step.step}
                </div>
                <h4
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--color-navy)',
                    marginBottom: '0.5rem'
                  }}
                >
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-slate)', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: ABOUT ASHVON HIGHLIGHT */}
      <section className="section section-bg-soft">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '3.5rem',
              alignItems: 'center'
            }}
            className="about-highlight-grid"
          >
            <div>
              <div className="eyebrow eyebrow-blue">
                <span>OUR IDENTITY</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.5rem)',
                  fontWeight: 800,
                  color: 'var(--color-navy)',
                  marginBottom: '1.25rem',
                  lineHeight: 1.2
                }}
              >
                Making Practical Technology Education <span className="text-gradient">Accessible</span>
              </h2>
              <p style={{ color: 'var(--color-slate)', lineHeight: 1.65, fontSize: '1.025rem', marginBottom: '1.25rem' }}>
                Ashvon Technologies was founded with a singular conviction: technology education should be accessible, experiential, and deeply practical. We equip learners and organizations with the skills and software solutions needed to thrive in a digital era.
              </p>
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  background: '#FFFFFF',
                  borderLeft: '4px solid var(--color-tech-blue)',
                  boxShadow: 'var(--shadow-xs)',
                  marginBottom: '2rem'
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                  Brand Promise
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--color-slate)' }}>
                  "{companyInfo.brandPromise}" Every student, school, and organization receives dedicated focus and tailored technical mentorship.
                </div>
              </div>
              <Button variant="primary" to="/about" icon={ArrowRight}>
                Learn About Us
              </Button>
            </div>

            {/* Visual Box */}
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                borderRadius: 'var(--radius-xl)',
                background: 'linear-gradient(145deg, #FFFFFF 0%, #EAF5FF 100%)',
                border: '1.5px solid rgba(23, 105, 255, 0.2)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <BrandLogo
                  variant="light"
                  size={42}
                  alt="Ashvon Logo"
                />
                <div>
                  <div style={{ fontWeight: 800, color: 'var(--color-navy)', fontSize: '1.1rem' }}>Ashvon Technologies</div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-tech-blue)' }}>Learn • Build • Lead</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                <div style={{ padding: '0.85rem 1rem', background: '#FFFFFF', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(7, 29, 73, 0.06)' }}>
                  <strong style={{ color: 'var(--color-navy)', display: 'block', marginBottom: '0.2rem' }}>Mission:</strong>
                  <span style={{ color: 'var(--color-slate)' }}>{companyInfo.mission}</span>
                </div>
                <div style={{ padding: '0.85rem 1rem', background: '#FFFFFF', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(7, 29, 73, 0.06)' }}>
                  <strong style={{ color: 'var(--color-navy)', display: 'block', marginBottom: '0.2rem' }}>Geographic Focus:</strong>
                  <span style={{ color: 'var(--color-slate)' }}>{companyInfo.contact.focusRegions} (Phase 1) with roadmap across India.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: ENQUIRY CTA BANNER */}
      <section
        style={{
          padding: '5rem 0',
          background: 'linear-gradient(135deg, #071D49 0%, #0B3D91 60%, #1769FF 100%)',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(40, 216, 255, 0.18) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div className="eyebrow eyebrow-cyan" style={{ marginBottom: '1.25rem' }}>
            <span>COLLABORATE WITH US</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}
          >
            Let's Build Something Meaningful Together.
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)',
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '640px',
              margin: '0 auto 2.25rem auto',
              lineHeight: 1.6
            }}
          >
            Explore how Ashvon Technologies can support your educational institution or business.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'
            }}
          >
            <Button
              variant="white"
              size="lg"
              to="/enquiry"
              icon={ArrowRight}
            >
              Submit an Enquiry
            </Button>
            <Button
              variant="secondary"
              size="lg"
              to="/it-services"
              style={{ background: 'rgba(255, 255, 255, 0.12)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.25)' }}
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Service Modal Popup */}
      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
        onEnquire={(category) => {
          setSelectedService(null);
          onOpenEnquiry(category);
        }}
      />

      {/* Responsive Grid Helpers */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid, .about-highlight-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-image-wrapper {
            order: -1;
            min-height: 380px;
          }
        }
      `}</style>
    </div>
  );
}
