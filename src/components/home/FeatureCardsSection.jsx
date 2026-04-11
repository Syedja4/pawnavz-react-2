import React from 'react'

const FEATURES = [
  ['\u{1F4E1}', 'Live GPS Tracking', 'Track your pet in real-time with instant escape alerts.', 'var(--brand)'],
  ['\u{1F49A}', 'Health Monitoring', 'AI-powered health insights and sleep analysis.', '#2ECC71'],
  ['\u{1F963}', 'Smart Feeding', 'Auto-schedule meals and monitor nutrition.', '#64C8FF'],
  ['\u{1F4F1}', 'Mobile App', 'Everything in one app - tracking, feeding, vet visits.', '#9B59B6'],
  ['\u{1F6E1}\uFE0F', 'Vet Approved', 'Certified by licensed veterinarians.', '#F39C12'],
  ['\u{1F514}', 'Smart Alerts', 'Instant notifications for escapes and health issues.', '#E74C3C'],
]

export default function FeatureCardsSection({ navigate }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}><div className="section-label">Features</div><h2 className="h-lg">Technology That Cares</h2></div>
        <div className="grid-3">
          {FEATURES.map(([icon, title, desc, c]) => (
            <div key={title} className="feature-card">
              <div className="feat-icon" style={{ background: `${c}18`, border: `1px solid ${c}30`, color: c }}>{icon}</div>
              <div className="h-sm" style={{ marginBottom: 8 }}>{title}</div>
              <p className="text-muted" style={{ fontSize: 14 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <button className="btn btn-ghost" onClick={() => navigate('/features')}>View All Features {'\u2192'}</button>
        </div>
      </div>
    </section>
  )
}
