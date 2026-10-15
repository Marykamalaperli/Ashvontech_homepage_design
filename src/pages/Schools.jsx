import React, { useState } from 'react';
import {
  Bot,
  Sparkles,
  ArrowRight,
  Cpu,
  CheckCircle2,
  BookOpen,
  Users,
  Award,
  Calendar,
  Layers,
  Lightbulb,
  FileText
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Accordion from '../components/ui/Accordion';
import { schoolCurriculum } from '../data/services';

export default function Schools({ onOpenEnquiry }) {
  const [selectedGrade, setSelectedGrade] = useState(0);

  const schoolFaqs = [
    {
      q: "How does the curriculum fit into our existing academic schedule?",
      a: "Our curriculum is modular and typically maps to 1–2 laboratory periods per week. We provide a structured academic roadmap aligned with school calendars across terms."
    },
    {
      q: "Do school teachers teach the subjects, or does Ashvon provide instructors?",
      a: "We offer both deployment models: either dedicated Ashvon resident trainers to conduct sessions, or comprehensive Faculty Development Programs (FDP) empowering your science and computer teachers."
    },
    {
      q: "What age range is the program suitable for?",
      a: "The program is specifically calibrated for Grades 4 through 9, divided into two distinct tracks: Foundational Logic & Visual Robotics (Grades 4–6) and Applied AI & Programmable Systems (Grades 7–9)."
    },
    {
      q: "What infrastructure does a school require to begin?",
      a: "A standard computer laboratory with internet connectivity and power outlets. Ashvon provides all hardware kits, microcontrollers, sensor modules, software configurations, and learning binders."
    }
  ];

  return (
    <div className="page-schools">
      {/* School-Focused Hero */}
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
              { label: 'School AI & Robotics' }
            ]}
          />

          <div style={{ maxWidth: '820px' }}>
            <div className="eyebrow eyebrow-blue" style={{ marginBottom: '1rem' }}>
              <Bot size={14} />
              <span>K-12 EXPERIENTIAL LEARNING</span>
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
              Transform Your School Into an <span className="text-gradient">AI & Robotics</span> Innovation Hub.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw, 1.2rem)',
                color: 'var(--color-slate)',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              Hands-on AI education, modular robotics laboratory kits, structured curricula, and dedicated mentor deployment designed specifically for Grades 4–9.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => onOpenEnquiry('School AI & Robotics Education')}
                icon={ArrowRight}
              >
                Request School Program Details
              </Button>
              <Button variant="secondary" size="lg" to="/enquiry?type=schools">
                Submit Formal School Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HANDS-ON MATTERS */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Educational Imperative"
            title="Why Hands-On Technology Education Matters"
            highlightWord="Technology Education"
            subtitle="Equipping students with cognitive resilience, logical troubleshooting skills, and early literacy in artificial intelligence."
          />

          <div className="grid-3">
            {[
              {
                title: 'Computational Thinking',
                desc: 'Moving from consuming digital media to deconstructing complex problems into sequential, algorithmic steps.',
                icon: Lightbulb
              },
              {
                title: 'Tangible Physical Prototyping',
                desc: 'Watching lines of visual logic transform into physical motion, sensor feedback, and real-time obstacle avoidance.',
                icon: Cpu
              },
              {
                title: 'Demystifying Artificial Intelligence',
                desc: 'Giving young learners an intuitive conceptual grasp of machine perception, facial detection, and neural concepts.',
                icon: Bot
              }
            ].map((item, idx) => (
              <div key={idx} className="solid-card" style={{ padding: '2.25rem 2rem', borderRadius: 'var(--radius-lg)' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(23, 105, 255, 0.1)',
                    color: 'var(--color-tech-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}
                >
                  <item.icon size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', fontWeight: 700, marginBottom: '0.65rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--color-slate)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRUCTURED CURRICULUM (Grades 4-6 vs Grades 7-9) */}
      <section className="section section-bg-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Academic Progression"
            title="Curriculum & Grade Tracks"
            highlightWord="Grade Tracks"
            subtitle="Carefully calibrated for cognitive readiness, progressing from block logic to real hardware microcontrollers."
          />

          {/* Grade Selector Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            {schoolCurriculum.map((track, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedGrade(idx)}
                style={{
                  padding: '0.75rem 1.75rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  border: selectedGrade === idx ? '1px solid var(--color-tech-blue)' : '1px solid rgba(7, 29, 73, 0.12)',
                  background: selectedGrade === idx ? 'var(--color-tech-blue)' : '#FFFFFF',
                  color: selectedGrade === idx ? '#FFFFFF' : 'var(--color-navy)',
                  boxShadow: selectedGrade === idx ? '0 4px 14px rgba(23, 105, 255, 0.3)' : 'var(--shadow-xs)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {track.level} ({track.tag})
              </button>
            ))}
          </div>

          {/* Active Track Detail Card */}
          <div
            className="glass-card"
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              padding: '2.75rem',
              borderRadius: 'var(--radius-xl)',
              background: '#FFFFFF',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>
                  {schoolCurriculum[selectedGrade].level} Focus
                </span>
                <h3 style={{ fontSize: '1.55rem', color: 'var(--color-navy)', fontWeight: 800 }}>
                  {schoolCurriculum[selectedGrade].title}
                </h3>
              </div>
              <div
                style={{
                  padding: '0.45rem 0.95rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-ice-blue)',
                  color: 'var(--color-tech-blue)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 600
                }}
              >
                Practical Laboratory Syllabus
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {schoolCurriculum[selectedGrade].topics.map((topic, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '0.85rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-soft-blue)',
                    border: '1px solid rgba(23, 105, 255, 0.1)'
                  }}
                >
                  <div
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: 'var(--color-tech-blue)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      flexShrink: 0
                    }}
                  >
                    {i + 1}
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-navy)' }}>
                    {topic}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(7, 29, 73, 0.08)'
              }}
            >
              <div style={{ fontSize: '0.86rem', color: 'var(--color-slate)' }}>
                Includes student workbooks, hardware lab kits, and continuous rubrics.
              </div>
              <Button
                variant="primary"
                size="sm"
                onClick={() => onOpenEnquiry(`School Program: ${schoolCurriculum[selectedGrade].level}`)}
                icon={ArrowRight}
              >
                Request Full Syllabus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FACULTY DEPLOYMENT & CLASSROOM SUPPORT */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3.5rem',
              alignItems: 'center'
            }}
            className="schools-deployment-grid"
          >
            <div>
              <div className="eyebrow eyebrow-blue">
                <span>SEAMLESS IMPLEMENTATION</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Faculty Deployment & Classroom Mentorship
              </h2>
              <p style={{ color: 'var(--color-slate)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                We understand that school teachers carry full academic schedules. Ashvon provides flexible implementation frameworks to make adoption smooth and stress-free:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(23, 105, 255, 0.1)', color: 'var(--color-tech-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Users size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--color-navy)', fontWeight: 700, marginBottom: '0.2rem' }}>
                      Resident Mentor Option
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-slate)', lineHeight: 1.55 }}>
                      Ashvon deploys trained instructors directly to your school laboratory to deliver weekly hands-on sessions.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(23, 105, 255, 0.1)', color: 'var(--color-tech-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--color-navy)', fontWeight: 700, marginBottom: '0.2rem' }}>
                      Faculty Enablement Workshops (FDP)
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-slate)', lineHeight: 1.55 }}>
                      We upskill your school's computer and science educators through intensive train-the-trainer masterclasses and teacher guidebooks.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(23, 105, 255, 0.1)', color: 'var(--color-tech-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--color-navy)', fontWeight: 700, marginBottom: '0.2rem' }}>
                      Annual Student Innovation Challenges
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-slate)', lineHeight: 1.55 }}>
                      Showcasing student projects during annual science expos and inter-school robotics competitions.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                onClick={() => onOpenEnquiry('School AI & Robotics Education')}
                icon={ArrowRight}
              >
                Schedule School Presentation
              </Button>
            </div>

            {/* School How to Enquire Steps */}
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                borderRadius: 'var(--radius-xl)',
                background: 'linear-gradient(145deg, #FFFFFF 0%, #F4F9FF 100%)',
                border: '1.5px solid rgba(23, 105, 255, 0.2)'
              }}
            >
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-navy)', fontWeight: 800, marginBottom: '1.5rem' }}>
                How Your School Can Get Started
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { step: '1', title: 'Submit Initial Enquiry', desc: 'Indicate your school name, student count, and preferred grade range.' },
                  { step: '2', title: 'Consultation & Demo Lab', desc: 'Our academic coordinator presents a live robotics demonstration for school management.' },
                  { step: '3', title: 'Lab Setup & Kit Delivery', desc: 'Hardware kits and curriculum materials are safely dispatched and arranged.' },
                  { step: '4', title: 'Program Commencement', desc: 'Sessions begin smoothly aligned with your school timetable.' }
                ].map((s, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'var(--color-tech-blue)',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {s.step}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--color-navy)' }}>{s.title}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-slate)', lineHeight: 1.5 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOL FAQS */}
      <section className="section section-bg-soft">
        <div className="container" style={{ maxWidth: '860px' }}>
          <SectionHeading
            eyebrow="Questions from Principals"
            title="School Program FAQs"
            highlightWord="FAQs"
            subtitle="Essential details for principals, trustees, and academic coordinators."
          />

          <Accordion items={schoolFaqs} />
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
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
            Bring Practical AI & Robotics to Your School
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Empower your students with hands-on computational confidence. Contact our academic relations team today.
          </p>
          <Button
            variant="white"
            size="lg"
            onClick={() => onOpenEnquiry('School AI & Robotics Education')}
            icon={ArrowRight}
          >
            Request School Program Details
          </Button>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .schools-deployment-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
