import React from 'react'
import { useNavigate } from 'react-router-dom'

const ALL_FEATURES = [
  ['\u{1F4E1}', 'Live GPS Tracking', 'Track your pet in real-time on an interactive map. Instant alerts when they leave your safe zone.', 'var(--brand)', 'gps-tracking'],
  ['\u{1F49A}', 'Health Monitoring', 'AI-powered health insights, activity tracking, and sleep analysis synced with your veterinarian.', '#2ECC71', 'health-monitoring'],
  ['\u{1F963}', 'Smart Feeding', 'Auto-schedule meals, control portions, and monitor nutrition intake.', '#64C8FF', 'smart-feeding'],
  ['\u{1F4F1}', 'Mobile App', 'One app for everything \u2014 tracking, feeding, vet appointments, and health history.', '#9B59B6', 'mobile-app'],
  ['\u{1F6E1}\uFE0F', 'Vet Approved', 'All products certified and tested by licensed veterinarians.', '#F39C12', 'vet-approved'],
  ['\u{1F514}', 'Smart Alerts', 'Instant notifications for escapes and health anomalies.', '#E74C3C', 'smart-alerts'],
  ['\u{1F4CA}', 'Analytics Dashboard', 'Weekly reports on activity, health trends, and nutrition balance.', '#3498DB', 'analytics-dashboard'],
  ['\u{1F321}\uFE0F', 'Temperature Monitoring', 'Real-time alerts for your pet and their environment.', '#E67E22', 'temperature-monitoring'],
  ['\u{1F91D}', 'Vet Connect', 'Book appointments and get telemedicine consultations in-app.', '#1ABC9C', 'vet-connect'],
]

export default function FeaturesPage() {
  const navigate = useNavigate()
  return (
    <div className="page">
      <div className="container section">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label">Features</div>
          <h1 className="h-xl" style={{ marginBottom: 16 }}>Technology<br /><span style={{ color: 'var(--brand)' }}>That Cares</span></h1>
          <p className="text-muted" style={{ fontSize: 17, maxWidth: 520, margin: '0 auto' }}>Every feature designed with one goal — keeping your pet safe, healthy, and happy.</p>
        </div>
        <div className="grid-3" style={{ marginBottom: 48 }}>
          {ALL_FEATURES.map(([icon, title, desc, c, slug]) => (
            <div key={title} className="feature-card" onClick={() => navigate(`/features/${slug}`)}>
              <div className="feat-icon" style={{ background: `${c}18`, border: `1px solid ${c}30`, color: c }}>{icon}</div>
              <div className="h-sm" style={{ marginBottom: 8 }}>{title}</div>
              <p className="text-muted" style={{ fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div className="cta-section" style={{ textAlign: 'center' }}>
          <h2 className="h-md" style={{ marginBottom: 16 }}>Experience the future of pet care</h2>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => navigate('/gps-tracker')}>Join GPS Waitlist →</button>
            <button className="btn btn-ghost" onClick={() => navigate('/shop')}>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
