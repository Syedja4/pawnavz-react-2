import React from 'react'
import { Helmet } from 'react-helmet-async'

const HIGHLIGHTS = [
  ['Meal Scheduling', 'Plan feeding windows based on your pet routine.'],
  ['Portion Control', 'Set ideal serving size and avoid overfeeding.'],
  ['Nutrition Tracking', 'Monitor intake consistency across the week.'],
]

export default function SmartFeedingPage() {
  return (
    <div className="page">
      <div className="container section">
        <Helmet>
          <title>Pawnavz Smart Feeding System | AI Pet Feeding</title>
          <meta name="description" content="Automate feeding with Pawnavz smart feeding technology using AI-driven schedules, portions, and nutrition insights." />
          <meta name="keywords" content="pawnavz smart feeding, ai pet feeding, smart pet bowl feeding system, automatic pet feeding" />
          <meta property="og:title" content="Pawnavz Smart Feeding System | AI Pet Feeding" />
          <meta property="og:description" content="Optimize meal schedules and portions with Pawnavz AI smart feeding for pets." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pawnavz.com/features/smart-feeding" />
        </Helmet>
        <div className="section-label">Feature</div>
        <h1 className="h-xl" style={{ marginBottom: 16 }}>Pawnavz Smart Feeding System | AI Pet Feeding</h1>
        <p className="text-muted" style={{ maxWidth: 640, marginBottom: 36 }}>
          Auto-schedule meals, control portions, and monitor nutrition intake.
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
