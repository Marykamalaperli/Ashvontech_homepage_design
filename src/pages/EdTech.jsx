import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bot,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Cpu,
  CheckCircle2,
  Code2,
  Rocket,
  Compass,
  Layers,
  Award,
  Users,
  ChevronRight
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Accordion from '../components/ui/Accordion';
import { schoolCurriculum, collegeModules, generalFaqs } from '../data/services';

export default function EdTech({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('schools');

  const edtechFaqs = generalFaqs.slice(0, 4);

  return (
    <div className="page-edtech">
      {/* Dedicated EdTech Hero */}
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
            right: '-60px',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(23, 105, 255, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Breadcrumbs items={[{ label: 'EdTech Division' }]} />

          <div style={{ maxWidth: '820px' }}>
            <div className="eyebrow eyebrow-blue" style={{ marginBottom: '1rem' }}>
              <Sparkles size={14} />
              <span>PRACTICAL LEARNING ECOSYSTEM</span>
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
              Making Technology Education <span className="text-gradient">Practical, Engaging</span> and Accessible.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw, 1.2rem)',
                color: 'var(--color-slate)',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              Discover hands-on AI, robotics, coding and technology training designed for schools, colleges and future innovators.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Button variant="primary" size="lg" to="/edtech/schools" icon={ArrowRight}>
                Explore School Programs
              </Button>
              <Button variant="secondary" size="lg" to="/edtech/colleges">
                Explore College Programs
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onOpenEnquiry('School AI & Robotics Education')}
              >
                Enquire About Training
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 & 2: CHOOSE YOUR LEARNING PATH */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Targeted Pathways"
            title="Choose Your Learning Path"
            highlightWord="Learning Path"
            subtitle="Explore our dual academic tracks crafted specifically for schools nurturing young minds and colleges preparing future engineers."
          />

          <div className="grid-2">
            {/* School Pathway */}
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                border: '1.5px solid rgba(23, 105, 255, 0.2)',
                background: 'linear-gradient(145deg, #FFFFFF 0%, #F4F9FF 100%)'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #1769FF 0%, #0B3D91 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: '0 8px 18px rgba(23, 105, 255, 0.25)'
                }}
              >
                <Bot size={26} />
              </div>
              <div className="badge badge-blue" style={{ marginBottom: '0.85rem' }}>
                Grades 4–9 Focus
              </div>
              <h3 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', fontWeight: 800, marginBottom: '0.75rem' }}>
                Schools & Junior Academies
              </h3>
              <p style={{ color: 'var(--color-slate)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Transform traditional classrooms into active innovation labs. Students learn computational thinking, assemble autonomous robotics kits, and build early AI awareness.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--color-slate)' }}>
                  <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                  <span>Age-appropriate visual coding & robotics</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--color-slate)' }}>
                  <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                  <span>Turn-key hardware kits with sensor packages</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--color-slate)' }}>
                  <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                  <span>Teacher enablement & resident faculty mentorship</span>
                </li>
              </ul>
              <Button variant="primary" to="/edtech/schools" icon={ArrowRight}>
                View School Curricula
              </Button>
            </div>

            {/* College Pathway */}
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                border: '1.5px solid rgba(40, 216, 255, 0.3)',
                background: 'linear-gradient(145deg, #FFFFFF 0%, #EAF5FF 100%)'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #0B3D91 0%, #28D8FF 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: '0 8px 18px rgba(40, 216, 255, 0.28)'
                }}
              >
                <GraduationCap size={26} />
              </div>
              <div className="badge badge-cyan" style={{ marginBottom: '0.85rem' }}>
                Engineering & Degree Colleges
              </div>
              <h3 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', fontWeight: 800, marginBottom: '0.75rem' }}>
                Colleges & Universities
              </h3>
              <p style={{ color: 'var(--color-slate)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Bridge the academic-industry chasm through rigorous hands-on tracks in Python, Machine Learning models, microcontrollers, IoT data telemetry, and capstone software.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--color-slate)' }}>
                  <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                  <span>Python for Data Science & Applied AI/ML</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--color-slate)' }}>
                  <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                  <span>Embedded Systems, Arduino & ESP32 IoT nodes</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--color-slate)' }}>
                  <CheckCircle2 size={16} color="var(--color-tech-blue)" />
                  <span>Faculty Development Programs (FDP) & hackathons</span>
                </li>
              </ul>
              <Button variant="primary" to="/edtech/colleges" icon={ArrowRight}>
                View College Tracks
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRACTICAL LEARNING METHODOLOGY */}
      <section className="section section-bg-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Pedagogical Blueprint"
            title="Our Practical Learning Methodology"
            highlightWord="Methodology"
            subtitle="Moving beyond passive textbook memorization to active creation, iterative debugging, and tangible project mastery."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {[
              {
                step: 'Phase 1',
                title: 'Core Concept Demystification',
                desc: 'Students grasp foundational concepts using intuitive analogies and visual models before diving into code.',
                icon: Compass
              },
              {
                step: 'Phase 2',
                title: 'Tactile Hardware Assembly',
                desc: 'Connecting sensors, microcontrollers, and actuators with modular plug-and-play kits without hazardous soldering.',
                icon: Cpu
              },
              {
                step: 'Phase 3',
                title: 'Logical Coding & Scripting',
                desc: 'Writing block-based algorithms or Python scripts to bring autonomous behaviors and responsive sensors to life.',
                icon: Code2
              },
              {
                step: 'Phase 4',
                title: 'Challenge-Based Capstone',
                desc: 'Tackling real-world open problems, testing under variable conditions, and presenting projects to peers.',
                icon: Rocket
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="solid-card"
                style={{
                  padding: '2rem 1.75rem',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-tech-blue)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem'
                  }}
                >
                  {step.step}
                </div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', fontWeight: 700, marginBottom: '0.65rem' }}>
                  {step.title}
                </h4>
                <p style={{ color: 'var(--color-slate)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 & 7: ROBOTICS KITS & FACULTY SUPPORT */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center'
            }}
            className="kits-support-grid"
          >
            <div>
              <div className="eyebrow eyebrow-blue">
                <span>LABORATORY INFRASTRUCTURE</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)',
                  fontWeight: 800,
                  color: 'var(--color-navy)',
                  marginBottom: '1rem',
                  lineHeight: 1.25
                }}
              >
                Turn-Key Hardware Kits & <span className="text-gradient">Classroom Labs</span>
              </h2>
              <p style={{ color: 'var(--color-slate)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Institutions don't need to source fragmented parts. Ashvon delivers custom-engineered robotics kits, calibrated curriculum binders, digital simulator access, and continuous lab replenishment.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(23, 105, 255, 0.1)', color: 'var(--color-tech-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-navy)', display: 'block', fontSize: '0.95rem' }}>Child-Safe, Modular Architecture</strong>
                    <span style={{ color: 'var(--color-slate)', fontSize: '0.88rem' }}>Durable enclosures, polarized wire connectors, and low-voltage DC operation ensuring safety for Grades 4+.</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(23, 105, 255, 0.1)', color: 'var(--color-tech-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-navy)', display: 'block', fontSize: '0.95rem' }}>Comprehensive Sensor Array</strong>
                    <span style={{ color: 'var(--color-slate)', fontSize: '0.88rem' }}>Infrared obstacle sensors, ultrasonic rangefinders, light sensors, buzzers, and programmable LED matrices.</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(23, 105, 255, 0.1)', color: 'var(--color-tech-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-navy)', display: 'block', fontSize: '0.95rem' }}>Continuous Faculty Support</strong>
                    <span style={{ color: 'var(--color-slate)', fontSize: '0.88rem' }}>Resident mentor deployment or structured Faculty Development Programs (FDP) empowering in-house teachers.</span>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                onClick={() => onOpenEnquiry('Robotics Kits / Infrastructure')}
                icon={ArrowRight}
              >
                Request Lab Kit Details
              </Button>
            </div>

            {/* Spec Visual Card */}
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                borderRadius: 'var(--radius-xl)',
                background: 'linear-gradient(145deg, #FFFFFF 0%, #F4F9FF 100%)',
                border: '1.5px solid rgba(23, 105, 255, 0.2)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-tech-blue)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '1rem'
                }}
              >
                <Cpu size={16} />
                <span>Lab Package Overview</span>
              </div>

              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', fontWeight: 800, marginBottom: '1.25rem' }}>
                Complete Institutional Ecosystem
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '1rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid rgba(7, 29, 73, 0.08)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-slate-light)', fontWeight: 600 }}>Hardware</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-navy)', marginTop: '0.2rem' }}>Modular Kits</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-slate)', marginTop: '0.2rem' }}>Chassis, boards & cables</div>
                </div>

                <div style={{ padding: '1rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid rgba(7, 29, 73, 0.08)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-slate-light)', fontWeight: 600 }}>Curriculum</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-navy)', marginTop: '0.2rem' }}>Printed & Digital</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-slate)', marginTop: '0.2rem' }}>Workbooks & assessments</div>
                </div>

                <div style={{ padding: '1rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid rgba(7, 29, 73, 0.08)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-slate-light)', fontWeight: 600 }}>Mentorship</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-navy)', marginTop: '0.2rem' }}>Instructor Support</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-slate)', marginTop: '0.2rem' }}>On-site or hybrid sessions</div>
                </div>

                <div style={{ padding: '1rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid rgba(7, 29, 73, 0.08)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-slate-light)', fontWeight: 600 }}>Events</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-navy)', marginTop: '0.2rem' }}>Hackathons</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-slate)', marginTop: '0.2rem' }}>Student exhibitions</div>
                </div>
              </div>

              <div
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(23, 105, 255, 0.08)',
                  fontSize: '0.84rem',
                  color: 'var(--color-tech-blue)',
                  fontWeight: 600
                }}
              >
                Institutional batches configured according to class sizes and term schedules.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: ACCESSIBLE FAQS */}
      <section className="section section-bg-soft">
        <div className="container" style={{ maxWidth: '860px' }}>
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            highlightWord="Questions"
            subtitle="Answers regarding program structure, lab implementation, and institutional collaboration."
          />

          <Accordion items={edtechFaqs} />
        </div>
      </section>

      {/* SECTION 10: INSTITUTIONAL ENQUIRY CTA */}
      <section
        style={{
          padding: '4.5rem 0',
          background: 'linear-gradient(135deg, #071D49 0%, #0B3D91 60%, #1769FF 100%)',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="eyebrow eyebrow-cyan" style={{ marginBottom: '1rem' }}>
            <span>START A DIALOGUE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.2 }}>
            Empower Your Institution with Future-Ready Learning
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Connect with our academic team to discuss lab setups, curriculum alignment, or trial workshops for your school or college.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Button
              variant="white"
              size="lg"
              onClick={() => onOpenEnquiry('School AI & Robotics Education')}
              icon={ArrowRight}
            >
              Request Institutional Consultation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              to="/enquiry"
              style={{ background: 'rgba(255, 255, 255, 0.12)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)' }}
            >
              Open Detailed Enquiry
            </Button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .kits-support-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
