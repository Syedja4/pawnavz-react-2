import React from 'react'
import { Helmet } from 'react-helmet-async'

const HIGHLIGHTS = [
  ['One Unified App', 'Control tracking, feeding, and care from one place.'],
  ['Pet Health History', 'Access logs, trends, and care records quickly.'],
  ['Daily Companion', 'Manage routines, reminders, and updates in real-time.'],
]

export default function MobileAppPage() {
  return (
    <div className="page">
      <div className="container section">
        <Helmet>
          <title>Pawnavz Pet App | Track and Manage Your Pet</title>
          <meta name="description" content="Use the Pawnavz pet app to track location, monitor health, manage feeding, and coordinate pet care in one place." />
          <meta name="keywords" content="pawnavz pet app, pet tracking app, pet management app, smart pet app" />
          <meta property="og:title" content="Pawnavz Pet App | Track and Manage Your Pet" />
          <meta property="og:description" content="The all-in-one Pawnavz mobile app for tracking, feeding, and pet health management." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pawnavz.com/features/mobile-app" />
        </Helmet>
        <div className="section-label">Feature</div>
        <h1 className="h-xl" style={{ marginBottom: 16 }}>Pawnavz Pet App | Track and Manage Your Pet</h1>
        <p className="text-muted" style={{ maxWidth: 640, marginBottom: 36 }}>
          One app for everything - tracking, feeding, vet appointments, and health history.
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
