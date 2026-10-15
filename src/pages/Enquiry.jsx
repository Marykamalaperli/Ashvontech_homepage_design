import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Building,
  User,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
  School,
  GraduationCap,
  Laptop
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import DemoSuccessModal from '../components/modals/DemoSuccessModal';

const ENQUIRY_TYPES = [
  'School AI & Robotics Education',
  'College AI & Technology Training',
  'IT / Software Development',
  'Robotics Kits / Infrastructure',
  'Faculty or Innovation Collaboration',
  'General Enquiry'
];

export default function Enquiry() {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    designation: '',
    preferredContact: 'Email',
    enquiryType: ENQUIRY_TYPES[0],
    message: '',
    consent: false,
    // School-specific
    schoolGradeRange: 'Grades 4–9 (Comprehensive)',
    schoolAreaOfInterest: 'Complete Lab Setup & Kits',
    // College-specific
    collegeTrainingArea: 'Python & Machine Learning Track',
    collegeBatchSize: '50–100 Students',
    // IT-specific
    itProjectCategory: 'Website / Web Application Development',
    itTargetTimeline: '1–3 Months'
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showDemoSuccess, setShowDemoSuccess] = useState(false);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const typeParam = searchParams.get('type');
    const target = categoryParam || typeParam;

    if (target) {
      const decoded = decodeURIComponent(target);
      const match = ENQUIRY_TYPES.find(
        (t) => t.toLowerCase().includes(decoded.toLowerCase()) || decoded.toLowerCase().includes(t.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, enquiryType: match }));
      }
    }
  }, [searchParams]);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid phone number (8–15 digits)';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details or questions regarding your enquiry';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must confirm acknowledgment to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Mock network validation delay
    setTimeout(() => {
      setSubmitting(false);
      setShowDemoSuccess(true);
    }, 600);
  };

  const isSchoolType =
    formData.enquiryType === 'School AI & Robotics Education' ||
    formData.enquiryType === 'Robotics Kits / Infrastructure';

  const isCollegeType =
    formData.enquiryType === 'College AI & Technology Training' ||
    formData.enquiryType === 'Faculty or Innovation Collaboration';

  const isITType = formData.enquiryType === 'IT / Software Development';

  return (
    <div className="page-enquiry">
      {/* Header */}
      <section
        style={{
          paddingTop: '3rem',
          paddingBottom: '3.5rem',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F9FF 65%, #EAF5FF 100%)',
          borderBottom: '1px solid rgba(23, 105, 255, 0.1)'
        }}
      >
        <div className="container" style={{ maxWidth: '860px' }}>
          <Breadcrumbs items={[{ label: 'Enquiry & Consultation' }]} />

          <div style={{ textAlign: 'center' }}>
            <div className="eyebrow eyebrow-blue" style={{ marginBottom: '0.85rem' }}>
              <Sparkles size={14} />
              <span>CONSULTATION GATEWAY</span>
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.1rem, 3.8vw, 3rem)',
                fontWeight: 800,
                color: 'var(--color-navy)',
                marginBottom: '1rem',
                lineHeight: 1.2
              }}
            >
              Let's Start a <span className="text-gradient">Conversation</span>.
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                color: 'var(--color-slate)',
                lineHeight: 1.6,
                maxWidth: '620px',
                margin: '0 auto'
              }}
            >
              Tell us what you're looking for, and help us understand how Ashvon Technologies can assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="section" style={{ backgroundColor: '#F4F9FF' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="solid-card"
            style={{
              padding: 'clamp(1.75rem, 4vw, 3rem)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-lg)',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid rgba(23, 105, 255, 0.16)'
            }}
          >
            {/* Step 1: Enquiry Type Selector */}
            <div style={{ marginBottom: '2.5rem' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--color-navy)',
                  marginBottom: '0.85rem'
                }}
              >
                1. Select Your Enquiry Category *
              </label>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '0.75rem'
                }}
              >
                {ENQUIRY_TYPES.map((type, idx) => {
                  const isSelected = formData.enquiryType === type;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData({ ...formData, enquiryType: type })}
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        textAlign: 'left',
                        fontSize: '0.88rem',
                        fontWeight: isSelected ? 700 : 500,
                        background: isSelected ? 'var(--color-soft-blue)' : '#FFFFFF',
                        color: isSelected ? 'var(--color-tech-blue)' : 'var(--color-slate-dark)',
                        border: isSelected ? '1.5px solid var(--color-tech-blue)' : '1px solid rgba(7, 29, 73, 0.12)',
                        boxShadow: isSelected ? '0 4px 12px rgba(23, 105, 255, 0.15)' : 'none',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{type}</span>
                      {isSelected && <CheckCircle2 size={16} color="var(--color-tech-blue)" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Contact Details */}
            <div style={{ marginBottom: '2.5rem' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--color-navy)',
                  marginBottom: '0.85rem'
                }}
              >
                2. Contact Details
              </label>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="enquiry-two-col">
                <div>
                  <label htmlFor="enquiry-fullName" style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    Full Name *
                  </label>
                  <input
                    id="enquiry-fullName"
                    type="text"
                    placeholder="e.g. Dr. Ramesh Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.fullName ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                      fontSize: '0.94rem',
                      outline: 'none'
                    }}
                  />
                  {errors.fullName && <p style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '0.25rem' }}>{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="enquiry-email" style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    Official / Primary Email *
                  </label>
                  <input
                    id="enquiry-email"
                    type="email"
                    placeholder="name@institution.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.email ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                      fontSize: '0.94rem',
                      outline: 'none'
                    }}
                  />
                  {errors.email && <p style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '0.25rem' }}>{errors.email}</p>}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '1.25rem' }} className="enquiry-two-col">
                <div>
                  <label htmlFor="enquiry-phone" style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    Phone Number *
                  </label>
                  <input
                    id="enquiry-phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.phone ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                      fontSize: '0.94rem',
                      outline: 'none'
                    }}
                  />
                  {errors.phone && <p style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '0.25rem' }}>{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="enquiry-preferredContact" style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    Preferred Contact Mode
                  </label>
                  <select
                    id="enquiry-preferredContact"
                    value={formData.preferredContact}
                    onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.94rem',
                      backgroundColor: '#FFFFFF',
                      outline: 'none'
                    }}
                  >
                    <option value="Email">Email</option>
                    <option value="Phone Call">Phone Call</option>
                    <option value="WhatsApp">WhatsApp Message</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '1.25rem' }} className="enquiry-two-col">
                <div>
                  <label htmlFor="enquiry-organization" style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    Organization / School / College Name
                  </label>
                  <input
                    id="enquiry-organization"
                    type="text"
                    placeholder="e.g. St. Xavier's High School or Tech Corp"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.94rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="enquiry-designation" style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    Your Role / Designation
                  </label>
                  <input
                    id="enquiry-designation"
                    type="text"
                    placeholder="e.g. Principal, HOD, Director, Founder"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.94rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Conditional Fields based on Category */}
            {isSchoolType && (
              <div
                style={{
                  marginBottom: '2.5rem',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-soft-blue)',
                  border: '1px solid rgba(23, 105, 255, 0.18)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '1rem', fontSize: '1rem' }}>
                  <School size={18} color="var(--color-tech-blue)" />
                  <span>School Specific Context</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="enquiry-two-col">
                  <div>
                    <label htmlFor="enquiry-gradeRange" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                      Target Grade Range
                    </label>
                    <select
                      id="enquiry-gradeRange"
                      value={formData.schoolGradeRange}
                      onChange={(e) => setFormData({ ...formData, schoolGradeRange: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid #CBD5E1',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Grades 4–6 (Foundational)">Grades 4–6 (Foundational)</option>
                      <option value="Grades 7–9 (Applied AI)">Grades 7–9 (Applied AI)</option>
                      <option value="Grades 4–9 (Comprehensive)">Grades 4–9 (Comprehensive)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="enquiry-schoolArea" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                      Primary Area of Interest
                    </label>
                    <select
                      id="enquiry-schoolArea"
                      value={formData.schoolAreaOfInterest}
                      onChange={(e) => setFormData({ ...formData, schoolAreaOfInterest: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid #CBD5E1',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Complete Lab Setup & Kits">Complete Lab Setup & Kits</option>
                      <option value="Curriculum & Teacher Enablement">Curriculum & Teacher Enablement</option>
                      <option value="Resident Instructor Deployment">Resident Instructor Deployment</option>
                      <option value="Student Innovation Challenges">Student Innovation Challenges</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {isCollegeType && (
              <div
                style={{
                  marginBottom: '2.5rem',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-soft-blue)',
                  border: '1px solid rgba(23, 105, 255, 0.18)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '1rem', fontSize: '1rem' }}>
                  <GraduationCap size={18} color="var(--color-tech-blue)" />
                  <span>College & University Context</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="enquiry-two-col">
                  <div>
                    <label htmlFor="enquiry-trainingArea" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                      Training Area
                    </label>
                    <select
                      id="enquiry-trainingArea"
                      value={formData.collegeTrainingArea}
                      onChange={(e) => setFormData({ ...formData, collegeTrainingArea: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid #CBD5E1',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Python & Machine Learning Track">Python & Machine Learning Track</option>
                      <option value="Embedded Systems & IoT Prototyping">Embedded Systems & IoT Prototyping</option>
                      <option value="Industry Capstone & Hackathons">Industry Capstone & Hackathons</option>
                      <option value="Faculty Development Program (FDP)">Faculty Development Program (FDP)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="enquiry-batchSize" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                      Estimated Student Cohort Size
                    </label>
                    <select
                      id="enquiry-batchSize"
                      value={formData.collegeBatchSize}
                      onChange={(e) => setFormData({ ...formData, collegeBatchSize: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid #CBD5E1',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Under 50 Students">Under 50 Students</option>
                      <option value="50–100 Students">50–100 Students</option>
                      <option value="100–300 Students">100–300 Students</option>
                      <option value="Department / Entire College (300+)">Department / Entire College (300+)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {isITType && (
              <div
                style={{
                  marginBottom: '2.5rem',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-soft-blue)',
                  border: '1px solid rgba(23, 105, 255, 0.18)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '1rem', fontSize: '1rem' }}>
                  <Laptop size={18} color="var(--color-tech-blue)" />
                  <span>Software Project Context</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="enquiry-two-col">
                  <div>
                    <label htmlFor="enquiry-itCategory" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                      Project Category
                    </label>
                    <select
                      id="enquiry-itCategory"
                      value={formData.itProjectCategory}
                      onChange={(e) => setFormData({ ...formData, itProjectCategory: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid #CBD5E1',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Website / Web Application Development">Website / Web Application Development</option>
                      <option value="Custom Business Software / ERP">Custom Business Software / ERP</option>
                      <option value="UI/UX Prototyping & Design Systems">UI/UX Prototyping & Design Systems</option>
                      <option value="AI Integration & Workflow Automation">AI Integration & Workflow Automation</option>
                      <option value="Data Analytics & Dashboards">Data Analytics & Dashboards</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="enquiry-timeline" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                      Target Project Timeline
                    </label>
                    <select
                      id="enquiry-timeline"
                      value={formData.itTargetTimeline}
                      onChange={(e) => setFormData({ ...formData, itTargetTimeline: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid #CBD5E1',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Month)</option>
                      <option value="1–3 Months">1–3 Months</option>
                      <option value="3–6 Months">3–6 Months</option>
                      <option value="Exploratory / Planning Stage">Exploratory / Planning Stage</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Requirement Message */}
            <div style={{ marginBottom: '2rem' }}>
              <label
                htmlFor="enquiry-message"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--color-navy)',
                  marginBottom: '0.5rem'
                }}
              >
                3. Your Message / Objectives *
              </label>
              <textarea
                id="enquiry-message"
                rows="5"
                placeholder="Describe your current requirements, preferred commencement date, or any specific challenges..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.85rem 1.15rem',
                  borderRadius: 'var(--radius-sm)',
                  border: errors.message ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                  fontSize: '0.94rem',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
              {errors.message && <p style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '0.25rem' }}>{errors.message}</p>}
            </div>

            {/* Step 5: Privacy & Prototype Consent */}
            <div style={{ marginBottom: '2.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  style={{ width: '18px', height: '18px', marginTop: '3px', cursor: 'pointer', accentColor: 'var(--color-tech-blue)' }}
                />
                <span style={{ fontSize: '0.86rem', color: 'var(--color-slate)', lineHeight: 1.5 }}>
                  I understand that this is an interactive prototype enquiry form for <strong>Ashvon Technologies (ASH-02 review)</strong>. Inputs will be verified by frontend validation logic.
                </span>
              </label>
              {errors.consent && <p style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '0.25rem' }}>{errors.consent}</p>}
            </div>

            {/* Submit Action */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--color-slate-light)' }}>
                <ShieldCheck size={16} color="var(--color-tech-blue)" />
                <span>No live database connected • Honest validation preview</span>
              </div>

              <Button
                variant="primary"
                size="lg"
                type="submit"
                loading={submitting}
                icon={Send}
              >
                Validate & Submit Demo Enquiry
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Demo Success Modal */}
      <DemoSuccessModal
        isOpen={showDemoSuccess}
        onClose={() => setShowDemoSuccess(false)}
        data={formData}
      />

      <style>{`
        @media (max-width: 650px) {
          .enquiry-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
