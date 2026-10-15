import React, { useState } from 'react';
import {
  GraduationCap,
  Code2,
  Cpu,
  BrainCircuit,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Terminal,
  Layers,
  Award,
  Users
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Accordion from '../components/ui/Accordion';
import { collegeModules } from '../data/services';

export default function Colleges({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState(collegeModules[0].id);

  const collegeFaqs = [
    {
      q: "Can college students enroll independently, or only through institutional tie-ups?",
      a: "Our primary model is institutional partnerships with engineering and science colleges for cohort-based bootcamps and semester programs. However, student clubs and peer cohorts can enquire for group technical workshops."
    },
    {
      q: "What programming prerequisites are required for the AI/ML track?",
      a: "The track starts with foundational Python programming syntax, data structures, and scientific computing (NumPy, Pandas) before advancing to scikit-learn models and deep neural networks."
    },
    {
      q: "Are hardware components provided for the IoT and Embedded Systems track?",
      a: "Yes. Students work directly with real microcontrollers (Arduino, ESP32), sensor breadboards, and wireless telemetry modules during the practical lab sessions."
    },
    {
      q: "Do you offer Faculty Development Programs (FDP)?",
      a: "Yes. We conduct dedicated FDP sessions for university faculty to align department curriculum with modern industry tooling, frameworks, and project guidance techniques."
    }
  ];

  const currentModule = collegeModules.find((m) => m.id === activeTab) || collegeModules[0];

  return (
    <div className="page-colleges">
      {/* College-Focused Hero */}
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
          <Breadcrumbs
            items={[
              { label: 'EdTech Division', to: '/edtech' },
              { label: 'College Technology Training' }
            ]}
          />

          <div style={{ maxWidth: '820px' }}>
            <div className="eyebrow eyebrow-cyan" style={{ marginBottom: '1rem' }}>
              <GraduationCap size={14} />
              <span>HIGHER EDUCATION & ENGINEERING TRACKS</span>
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
              Practical Engineering Training for <span className="text-gradient">Python, AI & IoT</span>.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw, 1.2rem)',
                color: 'var(--color-slate)',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              Equipping undergraduate engineering and science students with real-world technical skills, capstone projects, and industry-calibrated architectures.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => onOpenEnquiry('College AI & Technology Training')}
                icon={ArrowRight}
              >
                Enquire About College Training
              </Button>
              <Button variant="secondary" size="lg" to="/enquiry?type=colleges">
                Explore Institutional Partnership
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* THREE CORE COLLEGE TRACKS */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Specialized Tracks"
            title="Core Technical Tracks"
            highlightWord="Technical Tracks"
            subtitle="Intensive, project-based engineering tracks designed to bridge theoretical coursework and industry demands."
          />

          {/* Module Selector Pill Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '2.5rem' }}>
            {collegeModules.map((mod) => (
              <button
                key={mod.id}
                type="button"
                onClick={() => setActiveTab(mod.id)}
                style={{
                  padding: '0.75rem 1.6rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  border: activeTab === mod.id ? '1px solid var(--color-tech-blue)' : '1px solid rgba(7, 29, 73, 0.12)',
                  background: activeTab === mod.id ? 'var(--color-tech-blue)' : '#FFFFFF',
                  color: activeTab === mod.id ? '#FFFFFF' : 'var(--color-navy)',
                  boxShadow: activeTab === mod.id ? '0 4px 14px rgba(23, 105, 255, 0.3)' : 'var(--shadow-xs)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {mod.title}
              </button>
            ))}
          </div>

          {/* Active Module Details */}
          <div
            className="glass-card"
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              padding: '2.75rem',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(145deg, #FFFFFF 0%, #F4F9FF 100%)',
              border: '1.5px solid rgba(23, 105, 255, 0.2)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #1769FF 0%, #0B3D91 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Terminal size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', fontWeight: 800 }}>
                  {currentModule.title}
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--color-slate)', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '2rem' }}>
              {currentModule.description}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {currentModule.points.map((pt, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: '#FFFFFF',
                    border: '1px solid rgba(23, 105, 255, 0.12)',
                    boxShadow: 'var(--shadow-xs)'
                  }}
                >
                  <CheckCircle2 size={18} color="var(--color-tech-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.92rem', color: 'var(--color-slate-dark)', fontWeight: 500 }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="primary"
                onClick={() => onOpenEnquiry(`College Track: ${currentModule.title}`)}
                icon={ArrowRight}
              >
                Enquire for This Track
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT-BASED LEARNING & WORKSHOPS */}
      <section className="section section-bg-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Hands-On Approach"
            title="Project-Based Learning & Hackathons"
            highlightWord="Project-Based Learning"
            subtitle="Students learn by creating functional applications, hardware circuits, and AI models from day one."
          />

          <div className="grid-3">
            {[
              {
                title: 'Semester Capstone Mentorship',
                desc: 'Guided guidance for final year engineering capstone projects adhering to modern git repositories, API structures, and deployment.',
                icon: Rocket
              },
              {
                title: 'Intensive Technical Workshops',
                desc: '2 to 5-day hands-on bootcamps covering specific modern topics like Deep Learning fundamentals, MicroPython, or ESP32 IoT meshes.',
                icon: Cpu
              },
              {
                title: 'Faculty Development Programs (FDP)',
                desc: 'Specialized upskilling sessions for professors and lecturers, bringing industry workflows directly into academic teaching.',
                icon: Users
              }
            ].map((card, idx) => (
              <div key={idx} className="solid-card" style={{ padding: '2.25rem 2rem', borderRadius: 'var(--radius-lg)' }}>
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
                  <card.icon size={22} />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', fontWeight: 700, marginBottom: '0.65rem' }}>
                  {card.title}
                </h3>
                <p style={{ color: 'var(--color-slate)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLEGE FAQS */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <SectionHeading
            eyebrow="Institutional Guidance"
            title="College Training FAQs"
            highlightWord="FAQs"
            subtitle="Details regarding workshop scheduling, institutional accreditation, and batch arrangements."
          />

          <Accordion items={collegeFaqs} />
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
            Equip Your Engineering Students with Future-Ready Skills
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Collaborate with Ashvon Technologies for college workshops, student bootcamps, and faculty enablement.
          </p>
          <Button
            variant="white"
            size="lg"
            onClick={() => onOpenEnquiry('College AI & Technology Training')}
            icon={ArrowRight}
          >
            Enquire About College Training
          </Button>
        </div>
      </section>
    </div>
  );
}
