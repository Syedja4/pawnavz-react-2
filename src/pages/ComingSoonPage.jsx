import React from 'react'
import CtaBlock from '../components/CtaBlock'
import { useToast } from '../context/ToastContext'
import { FaMapMarkerAlt, FaBell, FaHistory, FaBatteryQuarter, FaRobot, FaChartBar, FaTint, FaStethoscope } from 'react-icons/fa'

const CONFIGS = {
  gps: {
    emoji: '📡', title: 'Pawnavz GPS Pet Tracker', color: 'var(--brand)', bc: 'badge-brand',
    tagline: 'Real-time tracking, everywhere your pet goes.',
    desc: 'Never lose sight of your pet again. Uses 4G LTE with 7-day battery, military-grade waterproofing, and instant escape alerts.',
    specs: [['Battery Life','7 days'],['Water Resistance','IPX7'],['Network','4G LTE'],['Weight','28 grams'],['Charging','Magnetic USB-C']],
    features: [[FaMapMarkerAlt,'Live GPS Map','Real-time location on Pawnavz app'],[FaBell,'Escape Alerts','Instant notification when leaving safe zone'],[FaHistory,'Location History','30-day journey history'],[FaBatteryQuarter,'Low Battery Alert','Notification at 20%']],
  },
  bowl: {
    emoji: '🥣', title: 'Pawnavz Smart Pet Bowl', color: '#64C8FF', bc: 'badge-blue',
    tagline: 'Intelligent feeding for the modern pet.',
    desc: 'AI-powered portion control, weight tracking, and hydration monitoring — syncing with your vet.',
    specs: [['Capacity','1.5L food + 0.8L water'],['Sensors','Weight + Proximity'],['Connectivity','WiFi 2.4GHz'],['App Control','iOS & Android'],['Material','BPA-Free Stainless']],
    features: [[FaRobot,'AI Portions','Controls ideal meal sizes'],[FaChartBar,'Nutrition Tracking','Calorie monitoring'],[FaTint,'Hydration Monitor','Daily water intake'],[FaStethoscope,'Vet Sync','Shares health data directly']],
  },
}

export default function ComingSoonPage({ type }) {
  const { showToast } = useToast()
  const cfg = CONFIGS[type] || CONFIGS.gps
  const isGPS = type === 'gps'

  return (
    <div className="page">
      <div className="container section">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className={`badge ${cfg.bc}`} style={{ fontSize: 13, padding: '10px 24px', marginBottom: 20 }}>🔴 Coming Soon</span>
          <div style={{ fontSize: 96, margin: '24px auto', animation: 'floatX 5s ease-in-out infinite' }}>{cfg.emoji}</div>
          <h1 className="h-xl" style={{ marginBottom: 16 }}>{cfg.title}</h1>
          <p style={{ fontSize: 18, color: cfg.color, fontFamily: 'var(--font-d)', fontWeight: 600, marginBottom: 12 }}>{cfg.tagline}</p>
          <p className="text-muted" style={{ fontSize: 16, maxWidth: 560, margin: '0 auto', lineHeight: 1.8 }}>{cfg.desc}</p>
        </div>

        <div className="grid-2" style={{ gap: 40 }}>
          {/* FEATURES */}
          <div>
            <h2 className="h-md" style={{ marginBottom: 24 }}>Key Features</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {cfg.features.map(([Icon, title, desc]) => (
                <div key={title} className="card card-p" style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ width: 44, height: 44, background: `${cfg.color}18`, border: `1px solid ${cfg.color}30`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0, color: cfg.color }}><Icon aria-hidden="true" /></div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-d)', fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{title}</div>
                    <div style={{ fontSize: 13, color: 'var(--text2)' }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SPECS + WAITLIST */}
          <div>
            <h2 className="h-md" style={{ marginBottom: 24 }}>Specifications</h2>
            <div className="card" style={{ marginBottom: 28, overflow: 'hidden' }}>
              <table className="spec-table">
                <tbody>{cfg.specs.map(([k, v]) => <tr key={k}><td>{k}</td><td style={{ color: cfg.color }}>{v}</td></tr>)}</tbody>
              </table>
            </div>
            <div style={{ background: `${cfg.color}10`, border: `1px solid ${cfg.color}25`, borderRadius: 28, padding: 28 }}>
              <h3 className="h-sm" style={{ marginBottom: 8 }}>Join the Waitlist</h3>
              <p className="text-muted" style={{ fontSize: 14, marginBottom: 20 }}>Early access members get 25% off at launch + free shipping</p>
              <CtaBlock
                btnText="Join Waitlist — Get Early Access"
                onSuccess={() => showToast('🎉', 'Joined waitlist!', "You'll get 25% off at launch")}
              />
            </div>
            <div className="card card-p" style={{ textAlign: 'center', marginTop: 16 }}>
              <div style={{ fontFamily: 'var(--font-d)', fontSize: 32, fontWeight: 800, color: cfg.color, letterSpacing: -1 }}>2,847</div>
              <div style={{ fontSize: 13, color: 'var(--text2)' }}>people already on the waitlist</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
