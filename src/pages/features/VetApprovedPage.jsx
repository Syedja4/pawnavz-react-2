import React from 'react'
import { Helmet } from 'react-helmet-async'

const HIGHLIGHTS = [
  ['Clinical Review', 'Feature logic is reviewed for practical pet-care use.'],
  ['Safety First', 'Built with daily pet safety and wellbeing in mind.'],
  ['Trusted Standards', 'Designed to support veterinarian-led care decisions.'],
]

export default function VetApprovedPage() {
  return (
    <div className="page">
      <div className="container section">
        <Helmet>
          <title>Pawnavz Vet Approved Technology</title>
          <meta name="description" content="Pawnavz pet technology is designed and validated to support safe, vet-informed pet care and monitoring." />
          <meta name="keywords" content="pawnavz vet approved, vet approved pet technology, pet safety technology, trusted pet devices" />
          <meta property="og:title" content="Pawnavz Vet Approved Technology" />
          <meta property="og:description" content="Discover veterinarian-informed technology from Pawnavz for safer and smarter pet care." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pawnavz.com/features/vet-approved" />
        </Helmet>
        <div className="section-label">Feature</div>
        <h1 className="h-xl" style={{ marginBottom: 16 }}>Pawnavz Vet Approved Technology</h1>
        <p className="text-muted" style={{ maxWidth: 640, marginBottom: 36 }}>
          All products certified and tested by licensed veterinarians.
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
