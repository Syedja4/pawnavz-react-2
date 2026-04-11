import React from 'react'
import { Helmet } from 'react-helmet-async'

const HIGHLIGHTS = [
  ['Live Location', 'See your pet move in real-time on the map.'],
  ['Safe Zone Alerts', 'Get notified instantly when your pet leaves a safe zone.'],
  ['Location History', 'Review route history to understand daily movement patterns.'],
]

export default function GpsTrackingPage() {
  return (
    <div className="page">
      <div className="container section">
        <Helmet>
          <title>Pawnavz GPS Pet Tracker | Live GPS Tracking for Pets</title>
          <meta name="description" content="Track your pet in real time using the Pawnavz GPS pet tracker. Get escape alerts, live maps and location history." />
          <meta name="keywords" content="pawnavz gps tracker, gps pet tracker, dog gps tracker, pet tracking device" />
          <meta property="og:title" content="Pawnavz GPS Pet Tracker" />
          <meta property="og:description" content="Real time GPS tracking and escape alerts for pets using Pawnavz technology." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pawnavz.com/features/gps-tracking" />
        </Helmet>
        <div className="section-label">Feature</div>
        <h1 className="h-xl" style={{ marginBottom: 16 }}>Pawnavz GPS Pet Tracker | Live GPS Tracking for Pets</h1>
        <p className="text-muted" style={{ maxWidth: 640, marginBottom: 36 }}>
          Track your pet in real-time on an interactive map. Instant alerts when they leave your safe zone.
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
