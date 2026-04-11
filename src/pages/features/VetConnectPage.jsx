import React from 'react'
import { Helmet } from 'react-helmet-async'

const HIGHLIGHTS = [
  ['Appointment Booking', 'Schedule care sessions directly from the platform.'],
  ['Telemedicine Access', 'Connect with vets remotely when needed.'],
  ['Continuity of Care', 'Share key pet history for better consultation context.'],
]

export default function VetConnectPage() {
  return (
    <div className="page">
      <div className="container section">
        <Helmet>
          <title>Pawnavz Vet Connect | Online Vet Consultation</title>
          <meta name="description" content="Connect with veterinarians online through Pawnavz Vet Connect for consultations, guidance, and follow-up care." />
          <meta name="keywords" content="pawnavz vet connect, online vet consultation, telemedicine for pets, pet doctor online" />
          <meta property="og:title" content="Pawnavz Vet Connect | Online Vet Consultation" />
          <meta property="og:description" content="Book and attend online vet consultations with Pawnavz Vet Connect." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pawnavz.com/features/vet-connect" />
        </Helmet>
        <div className="section-label">Feature</div>
        <h1 className="h-xl" style={{ marginBottom: 16 }}>Pawnavz Vet Connect | Online Vet Consultation</h1>
        <p className="text-muted" style={{ maxWidth: 640, marginBottom: 36 }}>
          Book appointments and get telemedicine consultations in-app.
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
