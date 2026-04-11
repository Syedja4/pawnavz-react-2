import React from 'react'
import { useNavigate } from 'react-router-dom'

const TIMELINE = [
  ['2024','Founded in Bengaluru, India'],
  ['Jan 2025','Launched pet marketplace'],
  ['Mar 2025','Reached 50,000+ users'],
  ['Q3 2025','GPS Tracker & Smart Bowl launching'],
]
const TEAM = [
  ['🧑‍💼','Aryan Kapoor','CEO & Co-founder','Ex-Flipkart · IIT Delhi'],
  ['👩‍💻','Priya Menon','CTO & Co-founder','Ex-Google · BITS Pilani'],
  ['👨‍⚕️','Dr. Ravi Kumar','Chief Veterinarian','15 years experience'],
  ['👩‍🎨','Sneha Nair','Head of Design','Ex-Swiggy · NID'],
]
const VALUES = [
  ['🐾','Pets First','Every decision starts with: is this good for pets?'],
  ['🔬','Science-Backed','Developed with vets and backed by research.'],
  ['🌍','Sustainability','Eco-friendly packaging and responsible sourcing.'],
  ['🏥','Safety Always','Highest safety standards before reaching your pet.'],
  ['💡','Innovation','Constantly pushing what\'s possible in pet tech.'],
  ['❤️','Community','Building a supportive community of pet parents.'],
]

export default function AboutPage() {
  const navigate = useNavigate()
  return (
    <div className="page">
      <div className="container section">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>About Us</div>
          <h1 className="h-xl" style={{ marginBottom: 16 }}>We're Building the<br /><span style={{ color: 'var(--brand)' }}>Future of Pet Care</span></h1>
          <p className="text-muted" style={{ fontSize: 17, maxWidth: 560, margin: '0 auto', lineHeight: 1.8 }}>
            Pawnavz started with a simple question: <em>Why isn't pet care smarter?</em> We set out to change that.
          </p>
        </div>

        <div className="grid-2" style={{ marginBottom: 64, gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 72, marginBottom: 20, animation: 'floatX 5s ease-in-out infinite' }}>🐾</div>
            <h2 className="h-md" style={{ marginBottom: 16 }}>Our Story</h2>
            <p className="text-muted" style={{ lineHeight: 1.8, marginBottom: 16 }}>Founded in 2024 in Bengaluru, Pawnavz was born when our founder's dog escaped and took 6 hours to find. There had to be a better way.</p>
            <p className="text-muted" style={{ lineHeight: 1.8 }}>Today, Pawnavz serves 50,000+ pet owners across India, building the country's first comprehensive pet technology ecosystem.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {TIMELINE.map(([year, text]) => (
              <div key={year} className="card card-p" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span className="badge badge-brand" style={{ whiteSpace: 'nowrap' }}>{year}</span>
                <span style={{ fontSize: 14, color: 'var(--text2)' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 64 }}>
          <h2 className="h-md" style={{ textAlign: 'center', marginBottom: 36 }}>Our Values</h2>
          <div className="grid-3">
            {VALUES.map(([icon, title, desc]) => (
              <div key={title} className="feature-card">
                <div className="feat-icon" style={{ background: 'var(--brand-dim)', border: '1px solid var(--brand-border)', color: 'var(--brand)' }}>{icon}</div>
                <div className="h-sm" style={{ marginBottom: 8 }}>{title}</div>
                <p className="text-muted" style={{ fontSize: 14 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 64 }}>
          <h2 className="h-md" style={{ textAlign: 'center', marginBottom: 36 }}>Meet the Team</h2>
          <div className="grid-4">
            {TEAM.map(([avatar, name, role, bio]) => (
              <div key={name} className="team-card">
                <div className="team-avatar">{avatar}</div>
                <div style={{ fontFamily: 'var(--font-d)', fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 13, color: 'var(--brand)', fontWeight: 600, marginBottom: 6 }}>{role}</div>
                <div style={{ fontSize: 12, color: 'var(--text3)' }}>{bio}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Backed By</div>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
            {['🦁 100X.VC', '🐯 Titan Capital', '🦅 Venture Catalysts'].map(v => (
              <span key={v} className="badge badge-brand" style={{ fontSize: 13, padding: '10px 20px' }}>{v}</span>
            ))}
          </div>
          <button className="btn btn-primary" onClick={() => navigate('/careers')}>Join Our Team →</button>
        </div>
      </div>
    </div>
  )
}
