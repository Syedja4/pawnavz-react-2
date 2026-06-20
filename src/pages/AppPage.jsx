import React from 'react'
import CtaBlock from '../components/CtaBlock'
import { FaSatelliteDish, FaHeartbeat, FaStethoscope, FaChartBar, FaApple } from 'react-icons/fa'
import { FaBowlFood } from 'react-icons/fa6'

const APP_FEATURES = [
  { icon: FaSatelliteDish, title: 'Live GPS Tracking', desc: 'Real-time map with safe zones and escape alerts' },
  { icon: FaHeartbeat, title: 'Health Dashboard', desc: 'Daily activity, sleep quality, and calorie tracking' },
  { icon: FaBowlFood, title: 'Smart Feeding', desc: 'Schedule and monitor meals with AI portions' },
  { icon: FaStethoscope, title: 'Vet Connect', desc: 'Book appointments and share health records' },
  { icon: FaChartBar, title: 'Monthly Reports', desc: 'Detailed analytics for your vet' },
]

export default function AppPage() {
  return (
    <div className="page">
      <div className="container section">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Mobile App</div>
          <h1 className="h-xl" style={{ marginBottom: 16 }}>Your Pet's World<br /><span style={{ color: 'var(--brand)' }}>In Your Pocket</span></h1>
          <p className="text-muted" style={{ fontSize: 17, maxWidth: 520, margin: '0 auto' }}>Track location, monitor health, schedule meals, and connect with vets — all in one app.</p>
        </div>

        <div className="app-main-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', marginBottom: 72 }}>
          {/* PHONE MOCKUP */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="phone-mockup">
              <div className="phone-screen">
                <div style={{ fontSize: 10, color: 'var(--text2)', fontFamily: 'var(--font-d)', marginBottom: 3 }}>Good morning</div>
                <div style={{ fontSize: 15, fontWeight: 800, fontFamily: 'var(--font-d)', color: 'var(--text)', letterSpacing: -.3, marginBottom: 14 }}>Buddy's Dashboard 🐕</div>
                <div style={{ background: 'var(--brand-dim)', border: '1px solid var(--brand-border)', borderRadius: 12, padding: 12, marginBottom: 10 }}>
                  <div style={{ fontSize: 9, color: 'var(--brand)', fontWeight: 700, fontFamily: 'var(--font-d)', textTransform: 'uppercase', letterSpacing: .5, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 5 }}>
                    <span className="dot-live" style={{ width: 5, height: 5 }} />Live Location
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text)' }}>📍 MG Road, Bengaluru</div>
                </div>
                <div className="phone-stats-grid">
                  {[['👟','4,280','Steps'],['🔥','312','Calories'],['😴','8.2h','Sleep'],['❤️','72 bpm','Heart']].map(([icon, val, label]) => (
                    <div key={label} className="phone-stat">
                      <div style={{ fontSize: 14, marginBottom: 3 }}>{icon}</div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text)', fontFamily: 'var(--font-d)' }}>{val}</div>
                      <div style={{ fontSize: 9, color: 'var(--text3)' }}>{label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: 'rgba(100,200,255,.08)', border: '1px solid rgba(100,200,255,.15)', borderRadius: 10, padding: 10 }}>
                  <div style={{ fontSize: 9, color: '#64C8FF', fontWeight: 700, fontFamily: 'var(--font-d)', marginBottom: 3 }}>NEXT MEAL</div>
                  <div style={{ fontSize: 13, color: 'var(--text)', fontWeight: 700, fontFamily: 'var(--font-d)' }}>6:30 PM · 180g 🥣</div>
                </div>
              </div>
            </div>
          </div>

          {/* INFO COLUMN */}
          <div>
            <h2 className="h-lg" style={{ marginBottom: 32 }}>Everything in one<br />beautiful app</h2>
            <div style={{ marginBottom: 36 }}>
              {APP_FEATURES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="app-feature-item">
                  <div className="app-feat-icon" style={{ background: 'var(--brand)', color: '#fff' }}><Icon aria-hidden="true" /></div>
                  <div className="app-feat-text">
                    <div className="app-feat-title">{title}</div>
                    <div className="app-feat-desc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 28 }}>
              {[[FaApple,'Download on the','App Store'],['▶','Get it on','Google Play']].map(([icon, sub, title]) => (
                <button key={title} className="store-btn">
                  {typeof icon === 'string'
                    ? <span style={{ fontSize: 24, flexShrink: 0 }}>{icon}</span>
                    : React.createElement(icon, { 'aria-hidden': 'true', style: { fontSize: 24, flexShrink: 0 } })}
                  <div>
                    <span style={{ fontSize: 10, color: 'var(--text2)', display: 'block', marginBottom: 2 }}>{sub}</span>
                    <span style={{ fontFamily: 'var(--font-d)', fontSize: 15, fontWeight: 800, color: 'var(--text)', display: 'block' }}>{title}</span>
                  </div>
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {[['4.9★','App Store Rating'],['50K+','Downloads'],['4.8★','Play Store']].map(([val, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: 'var(--font-d)', fontSize: 22, fontWeight: 800, color: 'var(--text)', letterSpacing: -1 }}>{val}</div>
                  <div style={{ fontSize: 13, color: 'var(--text3)', marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2 className="h-md" style={{ marginBottom: 12 }}>Ready to transform your pet's life?</h2>
          <p className="text-muted" style={{ fontSize: 15, marginBottom: 28 }}>Early users get 3 months free premium.</p>
          <CtaBlock btnText="Notify Me" />
        </div>
      </div>
    </div>
  )
}
