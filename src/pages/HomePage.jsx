import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DeferredRender from '../components/DeferredRender'
import ParticleBackground from '../components/ParticleBackground'

const CtaBlock = lazy(() => import('../components/CtaBlock'))
const ProductGridSection = lazy(() => import('../components/home/ProductGridSection'))
const FeatureCardsSection = lazy(() => import('../components/home/FeatureCardsSection'))
const BlogSection = lazy(() => import('../components/home/BlogSection'))

const WORDS = ['Smarter.', 'Healthier.', 'Happier.', 'Connected.']
const MARQUEE_ITEMS = ['Pet Food', 'GPS Tracker', 'Smart Bowl', 'Health Monitor', 'App Companion', 'Free Shipping', 'Vet Approved', 'Eco Friendly']
const CATEGORIES = [['🍗', 'Pet Food', '120+ products'], ['🎪', 'Accessories', '80+ products'], ['🏷️', 'Collars', '45+ products'], ['🧸', 'Toys', '60+ products'], ['💊', 'Healthcare', '30+ products'], ['✂️', 'Grooming', '50+ products'], ['🍪', 'Treats', '40+ products']]
const TESTIMONIALS = [
  ['Priya Sharma', 'Mumbai', 'Golden Retriever', 'The GPS tracker gave me peace of mind. Bruno escaped once and I found him in minutes!', '👩'],
  ['Rahul Verma', 'Bengaluru', 'Persian Cat', 'Smart bowl changed everything. My cat was overeating - AI controls portions perfectly.', '👨'],
  ['Ananya K.', 'Chennai', 'Beagle', 'Pawnavz app is incredible. Track activity, vet visits, and food all in one place.', '👩‍🦱'],
]

export default function HomePage() {
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
          <div style={{ display: 'flex', gap: 40, justifyContent: 'center', marginTop: 64, flexWrap: 'wrap', animation: 'fadeUp .6s .4s both' }}>
            {[['50K+', 'Happy Pet Owners'], ['4.9★', 'App Rating'], ['15+', 'Smart Products'], ['100%', 'Vet Approved']].map(([value, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-d)', fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, color: 'var(--text)', letterSpacing: -1 }}>{value}</div>
                <div style={{ fontSize: 13, color: 'var(--text3)', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...Array(2)].flatMap(() => MARQUEE_ITEMS).map((item, index) => (
            <div key={index} className="marquee-item"><span style={{ color: 'var(--brand)', fontSize: 8 }}>{'●'}</span>{item}</div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label">Categories</div>
            <h2 className="h-lg">Everything Your Pet Needs</h2>
            <p className="text-muted" style={{ maxWidth: 480, margin: '12px auto 0' }}>From gourmet food to smart tech - we've got every pawrent covered.</p>
          </div>
          <div className="cat-grid">
            {CATEGORIES.map(([icon, name, count]) => (
              <div key={name} className="cat-card" onClick={() => navigate('/shop')}>
                <div style={{ fontSize: 36, marginBottom: 12, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,.2))' }}>{icon}</div>
                <div style={{ fontFamily: 'var(--font-d)', fontSize: 14, fontWeight: 700, color: 'var(--text)', letterSpacing: -0.2 }}>{name}</div>
                <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 4 }}>{count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DeferredRender className="deferred-section" minHeight={640}>
        <Suspense fallback={<div className="section" />}>
          <ProductGridSection navigate={navigate} />
        </Suspense>
      </DeferredRender>

      <DeferredRender className="deferred-section" minHeight={520}>
        <section className="section" style={{ paddingTop: 0, background: 'linear-gradient(135deg,rgba(255,122,0,.04),transparent)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 48 }}><div className="section-label">Smart Devices</div><h2 className="h-lg">The Future of Pet Care</h2></div>
            <div className="grid-2">
              <div className="cs-card" style={{ borderColor: 'rgba(255,122,0,.2)' }}>
                <div className="cs-body">
                  <span className="badge badge-brand" style={{ marginBottom: 16 }}>🔴 Coming Soon</span>
                  <div style={{ fontSize: 64, marginBottom: 20, animation: 'floatX 5s ease-in-out infinite' }}>📡</div>
                  <h3 className="h-md" style={{ marginBottom: 8 }}>Pawnavz GPS Pet Tracker</h3>
                  <p className="text-muted" style={{ fontSize: 14, marginBottom: 24 }}>Real-time tracking · 7-day battery · IPX7 waterproof · Escape alerts</p>
                  <button className="btn btn-primary" onClick={() => navigate('/gps-tracker')}>Learn More & Join Waitlist →</button>
                </div>
              </div>
              <div className="cs-card" style={{ borderColor: 'rgba(100,200,255,.2)' }}>
                <div className="cs-body">
                  <span className="badge badge-blue" style={{ marginBottom: 16 }}>🔵 Coming Soon</span>
                  <div style={{ fontSize: 64, marginBottom: 20, animation: 'floatX 5s ease-in-out infinite 1s' }}>🥣</div>
                  <h3 className="h-md" style={{ marginBottom: 8 }}>Pawnavz Smart Pet Bowl</h3>
                  <p className="text-muted" style={{ fontSize: 14, marginBottom: 24 }}>AI portion control · Weight tracking · Hydration monitoring · Vet sync</p>
                  <button className="btn" style={{ background: '#64C8FF', color: '#000', border: 'none', borderRadius: 100, padding: '13px 26px', fontFamily: 'var(--font-d)', fontSize: 14, fontWeight: 600, cursor: 'pointer' }} onClick={() => navigate('/smart-bowl')}>
                    Learn More & Join Waitlist →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DeferredRender>

      <DeferredRender className="deferred-section" minHeight={520}>
        <Suspense fallback={<div className="section" />}>
          <FeatureCardsSection navigate={navigate} />
        </Suspense>
      </DeferredRender>

      <DeferredRender className="deferred-section" minHeight={420}>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 48 }}><div className="section-label">Reviews</div><h2 className="h-lg">50,000+ Happy Pet Owners</h2></div>
            <div className="grid-3">
              {TESTIMONIALS.map(([name, location, pet, text, avatar]) => (
                <div key={name} className="testi-card">
                  <div style={{ marginBottom: 12 }}>{'⭐'.repeat(5)}</div>
                  <p style={{ color: 'var(--text2)', fontSize: 15, lineHeight: 1.75, marginBottom: 20, fontStyle: 'italic' }}>
                    "{text}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div className="testi-avatar">{avatar}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-d)', fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{name}</div>
                      <div style={{ fontSize: 12, color: 'var(--text3)' }}>{location} · {pet} owner</div>
                    </div>
                    <span className="badge badge-green" style={{ marginLeft: 'auto' }}>Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </DeferredRender>

      <DeferredRender className="deferred-section" minHeight={500}>
        <Suspense fallback={<div className="section" />}>
          <BlogSection navigate={navigate} />
        </Suspense>
      </DeferredRender>

      <DeferredRender className="deferred-section" minHeight={360}>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="cta-section">
              <div style={{ fontSize: 52, marginBottom: 16, animation: 'float 4s ease-in-out infinite' }}>🐾</div>
              <h2 className="h-lg" style={{ marginBottom: 16 }}>Join the Pawnavz Early Access</h2>
              <p className="text-muted" style={{ maxWidth: 460, margin: '0 auto 32px', fontSize: 16 }}>
                Be the first to get our smart devices, exclusive discounts, and insights from India's top vets.
              </p>
              <Suspense fallback={null}>
                <CtaBlock btnText="Join Waitlist" />
              </Suspense>
            </div>
          </div>
        </section>
      </DeferredRender>
    </div>
  )
}
