import React from 'react'
import { FaMapMarkerAlt, FaHeartbeat, FaMobileAlt, FaShieldAlt, FaBell } from 'react-icons/fa'
import { FaBowlFood } from 'react-icons/fa6'

const FEATURES = [
  [FaMapMarkerAlt, 'Live GPS Tracking', 'Track your pet in real-time with instant escape alerts.', 'var(--brand)'],
  [FaHeartbeat, 'Health Monitoring', 'AI-powered health insights and sleep analysis.', '#2ECC71'],
  [FaBowlFood, 'Smart Feeding', 'Auto-schedule meals and monitor nutrition.', '#64C8FF'],
  [FaMobileAlt, 'Mobile App', 'Everything in one app - tracking, feeding, vet visits.', '#9B59B6'],
  [FaShieldAlt, 'Vet Approved', 'Certified by licensed veterinarians.', '#F39C12'],
  [FaBell, 'Smart Alerts', 'Instant notifications for escapes and health issues.', '#E74C3C'],
]

export default function FeatureCardsSection({ navigate }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}><div className="section-label">Features</div><h2 className="h-lg">Technology That Cares</h2></div>
        <div className="grid-3">
          {FEATURES.map(([Icon, title, desc]) => (
            <div key={title} className="feature-card">
              <div className="feat-icon" style={{ background: 'var(--brand)', color: '#fff', boxShadow: '0 6px 16px rgba(255,122,0,.35)' }}><Icon aria-hidden="true" /></div>
              <div className="h-sm" style={{ marginBottom: 8 }}>{title}</div>
              <p className="text-muted" style={{ fontSize: 14 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <button className="btn btn-ghost" onClick={() => navigate('/features')}>View All Features {'→'}</button>
        </div>
      </div>
    </section>
  )
}
