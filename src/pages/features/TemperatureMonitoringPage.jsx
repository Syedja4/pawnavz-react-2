import React from 'react'
import { Helmet } from 'react-helmet-async'

const HIGHLIGHTS = [
  ['Environment Watch', 'Track surrounding conditions in real-time.'],
  ['Heat Risk Alerts', 'Get notified when values move beyond safe range.'],
  ['Comfort Insights', 'Understand how conditions affect daily pet behavior.'],
]

export default function TemperatureMonitoringPage() {
  return (
    <div className="page">
      <div className="container section">
        <Helmet>
          <title>Pawnavz Pet Temperature Monitoring</title>
          <meta name="description" content="Monitor pet and environment temperature in real time with Pawnavz temperature monitoring alerts." />
          <meta name="keywords" content="pawnavz temperature monitoring, pet temperature tracking, pet environment monitoring, pet heat alerts" />
          <meta property="og:title" content="Pawnavz Pet Temperature Monitoring" />
          <meta property="og:description" content="Protect pets with real-time temperature visibility and alerts using Pawnavz technology." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pawnavz.com/features/temperature-monitoring" />
        </Helmet>
        <div className="section-label">Feature</div>
        <h1 className="h-xl" style={{ marginBottom: 16 }}>Pawnavz Pet Temperature Monitoring</h1>
        <p className="text-muted" style={{ maxWidth: 640, marginBottom: 36 }}>
          Real-time alerts for your pet and their environment.
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
