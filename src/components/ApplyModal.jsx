import React, { useState } from 'react'
import { useToast } from '../context/ToastContext'
import { FaClipboardList, FaMapMarkerAlt, FaRegClock, FaPaperclip, FaLock } from 'react-icons/fa'

export default function ApplyModal({ job, onClose }) {
  const { showToast } = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [exp, setExp] = useState('')
  const [why, setWhy] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) {
      showToast('⚠️', 'Fill required fields', 'Name and Email are required')
      return
    }
    setSubmitted(true)
    setTimeout(() => {
      showToast('🎉', 'Application submitted!', "We'll be in touch within 5 business days")
      onClose()
    }, 1600)
  }

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        {/* Header */}
        <div className="modal-header">
          <div style={{ flex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--brand-dim)', border: '1px solid var(--brand-border)', borderRadius: 8, padding: '5px 12px', fontFamily: 'var(--font-d)', fontSize: 11, fontWeight: 700, color: 'var(--brand)', marginBottom: 10, letterSpacing: .5, textTransform: 'uppercase' }}>
              <FaClipboardList aria-hidden="true" /> Applying for
            </div>
            <div style={{ fontFamily: 'var(--font-d)', fontSize: 21, fontWeight: 800, color: 'var(--text)', letterSpacing: -.5, lineHeight: 1.2, marginBottom: 8 }}>{job.title}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span className="badge badge-brand">{job.dept}</span>
              <span style={{ fontSize: 12, color: 'var(--text3)', display: 'inline-flex', alignItems: 'center', gap: 5 }}><FaMapMarkerAlt aria-hidden="true" style={{ flexShrink: 0 }} /> {job.loc}</span>
              <span style={{ fontSize: 12, color: 'var(--text3)', display: 'inline-flex', alignItems: 'center', gap: 5 }}><FaRegClock aria-hidden="true" style={{ flexShrink: 0 }} /> {job.exp}</span>
              <span className="badge badge-green">Full-time</span>
            </div>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
              <div className="h-sm" style={{ marginBottom: 8 }}>Application Submitted!</div>
              <p className="text-muted" style={{ fontSize: 14 }}>
                We'll review your profile and get back to you within 5 business days. Watch your inbox!
              </p>
            </div>
          ) : (
            <>
              <div style={{ height: 1, background: 'var(--border)', margin: '4px 0 24px' }} />
              <div style={{ fontFamily: 'var(--font-d)', fontSize: 11, fontWeight: 700, color: 'var(--brand)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>Personal Information</div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="label">Full Name <span style={{ color: '#E74C3C' }}>*</span></label>
                  <input className="input" placeholder="Rahul Sharma" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="label">Email Address <span style={{ color: '#E74C3C' }}>*</span></label>
                  <input className="input" placeholder="you@email.com" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="grid-2">
                <div className="form-group">
                  <label className="label">Phone Number</label>
                  <input className="input" placeholder="+91 98765 43210" value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="label">Years of Experience</label>
                  <select className="input" value={exp} onChange={e => setExp(e.target.value)}>
                    <option value="">Select experience</option>
                    <option>0–1 year (Fresher)</option>
                    <option>1–3 years</option>
                    <option>3–5 years</option>
                    <option>5–8 years</option>
                    <option>8+ years</option>
                  </select>
                </div>
              </div>

              <div style={{ height: 1, background: 'var(--border)', margin: '8px 0 24px' }} />
              <div style={{ fontFamily: 'var(--font-d)', fontSize: 11, fontWeight: 700, color: 'var(--brand)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 14 }}>Resume / Portfolio</div>
              <div className="upload-area" style={{ marginBottom: 20 }} onClick={() => showToast('📎', 'Upload clicked', 'Attach your resume PDF')}>
                <div style={{ fontSize: 28, marginBottom: 8, color: 'var(--brand)' }}><FaPaperclip aria-hidden="true" /></div>
                <div style={{ fontFamily: 'var(--font-d)', fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>Drop your resume here or click to browse</div>
                <div style={{ fontSize: 12, color: 'var(--text3)' }}>PDF, DOCX up to 5MB</div>
              </div>

              <div style={{ height: 1, background: 'var(--border)', margin: '0 0 24px' }} />
              <div style={{ fontFamily: 'var(--font-d)', fontSize: 11, fontWeight: 700, color: 'var(--brand)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 14 }}>Cover Letter</div>
              <div className="form-group">
                <label className="label">Why do you want to join Pawnavz?</label>
                <textarea className="input" rows={4} placeholder={`Tell us what excites you about the ${job.title} role...`} value={why} onChange={e => setWhy(e.target.value)} style={{ resize: 'vertical' }} />
              </div>
              <div className="form-group">
                <label className="label">LinkedIn / Portfolio URL</label>
                <input className="input" placeholder="https://linkedin.com/in/yourprofile" value={linkedin} onChange={e => setLinkedin(e.target.value)} />
              </div>

              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <button className="btn btn-ghost" style={{ flex: 1, borderRadius: 12 }} onClick={onClose}>Cancel</button>
                <button className="btn btn-primary" style={{ flex: 2, borderRadius: 12 }} onClick={handleSubmit}>Submit Application →</button>
              </div>
              <p style={{ fontSize: 11, color: 'var(--text3)', textAlign: 'center', marginTop: 12, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, width: '100%' }}><FaLock aria-hidden="true" style={{ flexShrink: 0 }} /> Your information is kept private and secure</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
