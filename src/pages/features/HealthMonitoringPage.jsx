import React from 'react'
import { Helmet } from 'react-helmet-async'

const HIGHLIGHTS = [
  ['Health Insights', 'AI-powered analysis helps you understand changes early.'],
  ['Activity Tracking', 'Measure movement and routines over time.'],
  ['Sleep Analysis', 'Track sleep quality for better health context.'],
]

export default function HealthMonitoringPage() {
  return (
    <div className="page">
      <div className="container section">
        <Helmet>
          <title>Pawnavz Pet Health Monitoring | AI Pet Health Insights</title>
          <meta name="description" content="Monitor your pet's wellness with Pawnavz AI health insights, behavior trends, and daily health visibility." />
          <meta name="keywords" content="pawnavz health monitoring, ai pet health insights, pet wellness tracking, pet health analytics" />
          <meta property="og:title" content="Pawnavz Pet Health Monitoring | AI Pet Health Insights" />
          <meta property="og:description" content="Track activity, sleep, and health signals with Pawnavz AI-powered pet health monitoring." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pawnavz.com/features/health-monitoring" />
        </Helmet>
        <div className="section-label">Feature</div>
        <h1 className="h-xl" style={{ marginBottom: 16 }}>Pawnavz Pet Health Monitoring | AI Pet Health Insights</h1>
        <p className="text-muted" style={{ maxWidth: 640, marginBottom: 36 }}>
          AI-powered health insights, activity tracking, and sleep analysis synced with your veterinarian.
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
