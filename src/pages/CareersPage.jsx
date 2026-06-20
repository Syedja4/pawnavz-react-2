import React, { lazy, Suspense, useState } from 'react'
import { useToastActions } from '../context/ToastContext'
import { FaRocket, FaPaw, FaChartLine, FaUmbrellaBeach, FaSpa, FaFlask, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa'

const ApplyModal = lazy(() => import('../components/ApplyModal'))

const PERKS = [
  [FaRocket, 'Move Fast', 'We ship every week. Speed is a competitive advantage.'],
  [FaPaw, 'Pet-First', 'We love pets. Many bring their dogs to the office.'],
  [FaChartLine, 'Equity', 'Every employee gets meaningful equity.'],
  [FaUmbrellaBeach, 'Remote Friendly', 'Flexible work with quarterly in-person offsites.'],
  [FaSpa, 'Well-being', 'Health insurance and mental wellness stipend.'],
  [FaFlask, 'Experiment', 'Every idea gets a fair shot. Data guides decisions.'],
]

const JOBS = [
  { title: 'Senior React Engineer', dept: 'Engineering', loc: 'Bengaluru / Remote', exp: '3–6 years', type: 'Full-time' },
  { title: 'Backend Engineer (Node.js)', dept: 'Engineering', loc: 'Remote', exp: '2–5 years', type: 'Full-time' },
  { title: 'Product Designer (UI/UX)', dept: 'Design', loc: 'Bengaluru', exp: '2–4 years', type: 'Full-time' },
  { title: 'Veterinary Content Writer', dept: 'Content', loc: 'Remote', exp: '1–3 years', type: 'Full-time' },
  { title: 'Growth Marketing Manager', dept: 'Marketing', loc: 'Bengaluru', exp: '3–5 years', type: 'Full-time' },
]

export default function CareersPage() {
  const { showToast } = useToastActions()
  const [activeJob, setActiveJob] = useState(null)

  return (
    <>
      {activeJob && (
        <Suspense fallback={null}>
          <ApplyModal job={activeJob} onClose={() => setActiveJob(null)} />
        </Suspense>
      )}
      <div className="page">
        <div className="container section">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ marginBottom: 12 }}>Careers</div>
            <h1 className="h-xl" style={{ marginBottom: 16 }}>Build the Future<br /><span style={{ color: 'var(--brand)' }}>of Pet Care</span></h1>
            <p className="text-muted" style={{ fontSize: 17, maxWidth: 520, margin: '0 auto' }}>Join a passionate team building India's first pet technology company.</p>
          </div>

          <div className="grid-3" style={{ marginBottom: 56 }}>
            {PERKS.map(([Icon, title, desc]) => (
              <div key={title} className="feature-card">
                <div className="feat-icon" style={{ background: 'var(--brand)', color: '#fff', boxShadow: '0 6px 16px rgba(255,122,0,.35)' }}><Icon aria-hidden="true" /></div>
                <div className="h-sm" style={{ marginBottom: 8 }}>{title}</div>
                <p className="text-muted" style={{ fontSize: 14 }}>{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="h-md" style={{ marginBottom: 28 }}>Open Positions ({JOBS.length})</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 48 }}>
            {JOBS.map((job) => (
              <div key={job.title} className="job-card" onClick={() => setActiveJob(job)}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-d)', fontSize: 17, fontWeight: 800, color: 'var(--text)', letterSpacing: -0.4, marginBottom: 6 }}>{job.title}</h3>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      <span className="badge badge-brand">{job.dept}</span>
                      <span style={{ fontSize: 13, color: 'var(--text2)', display: 'inline-flex', alignItems: 'center', gap: 5 }}><FaMapMarkerAlt aria-hidden="true" style={{ flexShrink: 0 }} /> {job.loc}</span>
                      <span style={{ fontSize: 13, color: 'var(--text2)', display: 'inline-flex', alignItems: 'center', gap: 5 }}><FaRegClock aria-hidden="true" style={{ flexShrink: 0 }} /> {job.exp}</span>
                      <span className="badge badge-green">{job.type}</span>
                    </div>
                  </div>
                  <button className="btn btn-outline-brand btn-sm" onClick={(e) => { e.stopPropagation(); setActiveJob(job) }}>
                    Apply Now →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 28, padding: 40 }}>
            <h2 className="h-md" style={{ marginBottom: 8 }}>Don't see your role?</h2>
            <p className="text-muted" style={{ fontSize: 15, marginBottom: 28 }}>Send a general application. We review every submission.</p>
            <div className="grid-2">
              <div className="form-group"><label className="label">Full Name</label><input className="input" placeholder="Your name" /></div>
              <div className="form-group"><label className="label">Email</label><input className="input" placeholder="your@email.com" /></div>
            </div>
            <div className="form-group">
              <label className="label">Why Pawnavz?</label>
              <textarea className="input" rows={4} placeholder="Tell us why you'd be a great fit..." style={{ resize: 'vertical' }} />
            </div>
            <button className="btn btn-primary" onClick={() => showToast('🎉', 'Application sent!', 'We will be in touch within 5 business days')}>
              Submit Application →
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
