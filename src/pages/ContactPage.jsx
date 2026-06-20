import React, { useState } from 'react'
import { useToast } from '../context/ToastContext'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaComments } from 'react-icons/fa'
import Dropdown from '../components/Dropdown'

const CONTACT_INFO = [
  [FaEnvelope, 'Email Us', 'hello@pawnavz.com', 'For general inquiries and support'],
  [FaPhoneAlt, 'Call Us', '+91 80 4567 8900', 'Mon\u2013Sat, 9AM\u20136PM IST'],
  [FaMapMarkerAlt, 'Visit Us', '91springboard, Kormangala, Bengaluru', 'Open for scheduled visits'],
  [FaComments, 'Live Chat', 'Available on app', 'Average response: under 5 minutes'],
]

const SUBJECTS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'order', label: 'Order Support' },
  { value: 'feedback', label: 'Product Feedback' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'press', label: 'Press / Media' },
]

export default function ContactPage() {
  const { showToast } = useToast()
  const [subject, setSubject] = useState('general')
  return (
    <div className="page">
      <div className="container section">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Contact Us</div>
          <h1 className="h-xl" style={{ marginBottom: 16 }}>We'd Love to<br /><span style={{ color: 'var(--brand)' }}>Hear From You</span></h1>
          <p className="text-muted" style={{ fontSize: 17, maxWidth: 480, margin: '0 auto' }}>Our team is always ready to help you with any questions.</p>
        </div>
        <div className="grid-2" style={{ gap: 40, alignItems: 'start' }}>
          <div>
            {CONTACT_INFO.map(([Icon, title, val, sub]) => (
              <div key={title} className="contact-info-item">
                <div className="ci-icon" style={{ background: 'var(--brand)', color: '#fff', boxShadow: '0 6px 16px rgba(255,122,0,.35)' }}><Icon aria-hidden="true" /></div>
                <div>
                  <div style={{ fontFamily: 'var(--font-d)', fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{title}</div>
                  <div style={{ fontFamily: 'var(--font-d)', fontSize: 14, color: 'var(--brand)', fontWeight: 600, marginBottom: 4 }}>{val}</div>
                  <div style={{ fontSize: 13, color: 'var(--text3)' }}>{sub}</div>
                </div>
              </div>
            ))}
            <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', height: 220, color: 'var(--text3)', marginTop: 8, overflow: 'hidden' }}>
              <iframe
                title="Pawnavz HQ Map"
                src="https://maps.google.com/maps?q=91springboard%2C%20Koramangala%2C%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 28, padding: 40 }}>
            <h2 className="h-md" style={{ marginBottom: 8 }}>Send a Message</h2>
            <p className="text-muted" style={{ fontSize: 14, marginBottom: 28 }}>We reply within 24 hours on business days.</p>
            <div className="grid-2">
              <div className="form-group"><label className="label">Name</label><input className="input" placeholder="Your name" /></div>
              <div className="form-group"><label className="label">Email</label><input className="input" placeholder="your@email.com" /></div>
            </div>
            <div className="form-group">
              <label className="label">Subject</label>
              <Dropdown className="block" ariaLabel="Subject" value={subject} onChange={setSubject} options={SUBJECTS} />
            </div>
            <div className="form-group">
              <label className="label">Message</label>
              <textarea className="input" rows={5} placeholder="How can we help?" style={{ resize: 'vertical' }} />
            </div>
            <button className="btn btn-primary btn-w-full" style={{ borderRadius: 12 }} onClick={() => showToast('\u{1F4E7}', 'Message sent!', 'We will reply within 24 hours')}>
              Send Message {'\u2192'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}