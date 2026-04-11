import React from 'react'
import { Helmet } from 'react-helmet-async'

const HIGHLIGHTS = [
  ['Escape Notifications', 'Receive immediate alerts when your pet leaves a safe area.'],
  ['Health Alerts', 'Be informed when unusual health patterns are detected.'],
  ['Priority Signals', 'Surface urgent events first so you can act faster.'],
]

export default function SmartAlertsPage() {
  return (
    <div className="page">
      <div className="container section">
        <Helmet>
          <title>Pawnavz Smart Alerts | Instant Pet Safety Notifications</title>
          <meta name="description" content="Get instant Pawnavz smart alerts for pet escapes, risk events, and critical health-related changes." />
          <meta name="keywords" content="pawnavz smart alerts, pet safety notifications, pet escape alerts, smart pet alerts" />
          <meta property="og:title" content="Pawnavz Smart Alerts | Instant Pet Safety Notifications" />
          <meta property="og:description" content="Stay informed in real time with Pawnavz instant safety and health alerts for pets." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pawnavz.com/features/smart-alerts" />
        </Helmet>
        <div className="section-label">Feature</div>
        <h1 className="h-xl" style={{ marginBottom: 16 }}>Pawnavz Smart Alerts | Instant Pet Safety Notifications</h1>
        <p className="text-muted" style={{ maxWidth: 640, marginBottom: 36 }}>
          Instant notifications for escapes and health anomalies.
        </p>

        <div className="grid-3">
          {HIGHLIGHTS.map(([title, desc]) => (
            <div key={title} className="feature-card">
              <div className="h-sm" style={{ marginBottom: 8 }}>{title}</div>
              <p className="text-muted" style={{ fontSize: 14 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
