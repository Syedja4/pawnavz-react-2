import React from 'react'
import { Helmet } from 'react-helmet-async'

const HIGHLIGHTS = [
  ['Weekly Reports', 'Get snapshots of activity, nutrition, and habits.'],
  ['Trend Tracking', 'Visualize progress and recurring patterns over time.'],
  ['Care Decisions', 'Use analytics context to improve daily pet care.'],
]

export default function AnalyticsDashboardPage() {
  return (
    <div className="page">
      <div className="container section">
        <Helmet>
          <title>Pawnavz Pet Analytics Dashboard</title>
          <meta name="description" content="Analyze your pet's activity, health trends, and nutrition patterns with the Pawnavz analytics dashboard." />
          <meta name="keywords" content="pawnavz analytics dashboard, pet analytics dashboard, pet health trends, pet activity analytics" />
          <meta property="og:title" content="Pawnavz Pet Analytics Dashboard" />
          <meta property="og:description" content="Get clear pet behavior and health trend insights with the Pawnavz analytics dashboard." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pawnavz.com/features/analytics-dashboard" />
        </Helmet>
        <div className="section-label">Feature</div>
        <h1 className="h-xl" style={{ marginBottom: 16 }}>Pawnavz Pet Analytics Dashboard</h1>
        <p className="text-muted" style={{ maxWidth: 640, marginBottom: 36 }}>
          Weekly reports on activity, health trends, and nutrition balance.
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
