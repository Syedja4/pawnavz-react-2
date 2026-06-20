import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPaw, FaFlask, FaGlobeAsia, FaHospital, FaLightbulb, FaHeart } from 'react-icons/fa'
import ParticleBackground from '../components/ParticleBackground'

const WORDS = ['Smarter.', 'Healthier.', 'Happier.', 'Connected.']

const TIMELINE = [
  ['2025','Founded in Bengaluru, India'],
  ['Q2 2025','Team of four innovators came together'],
  ['Q3 2025','Building India\'s smart pet ecosystem'],
  ['Soon','GPS Tracker & Smart Bowl launching'],
]
const TEAM = [
  ['🧑‍💼','Aryan Kapoor','CEO & Co-founder','Ex-Flipkart · IIT Delhi'],
  ['👩‍💻','Priya Menon','CTO & Co-founder','Ex-Google · BITS Pilani'],
  ['👨‍⚕️','Dr. Ravi Kumar','Chief Veterinarian','15 years experience'],
  ['👩‍🎨','Sneha Nair','Head of Design','Ex-Swiggy · NID'],
]
const VALUES = [
  [FaPaw,'Pets First','Every decision starts with: is this good for pets?'],
  [FaFlask,'Science-Backed','Developed with vets and backed by research.'],
  [FaGlobeAsia,'Sustainability','Eco-friendly packaging and responsible sourcing.'],
  [FaHospital,'Safety Always','Highest safety standards before reaching your pet.'],
  [FaLightbulb,'Innovation','Constantly pushing what\'s possible in pet tech.'],
  [FaHeart,'Community','Building a supportive community of pet parents.'],
]

export default function AboutPage() {
  const navigate = useNavigate()
  const [wordIdx, setWordIdx] = useState(0)
  const [wordVisible, setWordVisible] = useState(true)

  useEffect(() => {
    let timeoutId = null
    const intervalId = setInterval(() => {
      setWordVisible(false)
      timeoutId = window.setTimeout(() => {
        setWordIdx((current) => (current + 1) % WORDS.length)
        setWordVisible(true)
      }, 200)
    }, 2500)

    return () => {
      clearInterval(intervalId)
      if (timeoutId !== null) window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="page">
      <section className="hero">
        <ParticleBackground />
        <div className="hero-grid" />
        <div className="hero-orb" style={{ width: 500, height: 500, top: -100, left: '50%', transform: 'translateX(-50%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 860, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--brand-dim)', border: '1px solid var(--brand-border)', borderRadius: 100, padding: '7px 16px', marginBottom: 28, animation: 'fadeUp .6s both' }}>
            <span className="dot-live" />
            <span style={{ fontFamily: 'var(--font-d)', fontSize: 13, color: 'var(--text2)', fontWeight: 500 }}>India's First Pet Technology Startup</span>
          </div>
          <h1 className="h-xl" style={{ animation: 'fadeUp .6s .1s both' }}>
            Your Pet's Life,<br />
            <span style={{ color: 'var(--brand)', transition: 'opacity .2s', opacity: wordVisible ? 1 : 0 }}>{WORDS[wordIdx]}</span>
          </h1>
          <p className="text-muted" style={{ fontSize: 'clamp(15px,2vw,18px)', lineHeight: 1.7, maxWidth: 560, margin: '20px auto 40px', animation: 'fadeUp .6s .2s both' }}>
            Smart GPS trackers, intelligent feeding bowls, and premium pet care - all connected through the Pawnavz app.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeUp .6s .3s both' }}>
            <button className="btn btn-primary" style={{ fontSize: 15, padding: '14px 32px' }} onClick={() => navigate('/shop')}>Shop Now {'→'}</button>
            <button className="btn btn-ghost" style={{ fontSize: 15 }} onClick={() => navigate('/features')}>{'▶'} Learn More</button>
          </div>
        </div>
      </section>

      <div className="container section">
        <div className="grid-2" style={{ marginBottom: 64, gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 72, marginBottom: 20, animation: 'floatX 5s ease-in-out infinite' }}>🐾</div>
            <h2 className="h-md" style={{ marginBottom: 16 }}>Our Story</h2>
            <p className="text-muted" style={{ lineHeight: 1.8, marginBottom: 16 }}>Started in 2025, Pawnavz is a pet-tech startup founded by a team of four innovators passionate about improving the lives of pets and their owners.</p>
            <p className="text-muted" style={{ lineHeight: 1.8 }}>We are currently building India's smart pet ecosystem, combining technology, safety, and pet care into a single platform. Our journey is just beginning, and we're committed to creating products that help pet parents stay connected with their furry companions.</p>
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
            {VALUES.map(([Icon, title, desc]) => (
              <div key={title} className="feature-card">
                <div className="feat-icon" style={{ background: 'var(--brand)', color: '#fff', boxShadow: '0 6px 16px rgba(255,122,0,.35)' }}><Icon aria-hidden="true" /></div>
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
          <button className="btn btn-primary" onClick={() => navigate('/careers')}>Join Our Team →</button>
        </div>
      </div>
    </div>
  )
}
