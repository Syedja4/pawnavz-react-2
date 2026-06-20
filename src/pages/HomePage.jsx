import React, { lazy, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import DeferredRender from '../components/DeferredRender'

const HeroBanner = lazy(() => import('../components/home/HeroBanner'))
const CtaBlock = lazy(() => import('../components/CtaBlock'))
const CategoriesSection = lazy(() => import('../components/home/CategoriesSection'))
const BrandsSection = lazy(() => import('../components/home/BrandsSection'))
const ProductGridSection = lazy(() => import('../components/home/ProductGridSection'))
const FeatureCardsSection = lazy(() => import('../components/home/FeatureCardsSection'))
const BlogSection = lazy(() => import('../components/home/BlogSection'))

const MARQUEE_ITEMS = ['Pet Food', 'GPS Tracker', 'Smart Bowl', 'Health Monitor', 'App Companion', 'Free Shipping', 'Vet Approved', 'Eco Friendly']
const CATEGORIES = [
  ['🍖', 'Pet Food', 'Up to 30% off'],
  ['🍪', 'Treats', 'Up to 50% off'],
  ['💊', 'Healthcare', 'Best prices'],
  ['🧸', 'Toys', 'Up to 60% off'],
  ['🛍️', 'Accessories', 'Up to 40% off'],
  ['✂️', 'Grooming', 'Up to 50% off'],
  ['🏷️', 'Collars', 'Up to 25% off'],
]

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="page">
      <Suspense fallback={<div style={{ minHeight: 'calc(100vh - var(--nav-h))' }} />}>
        <HeroBanner />
      </Suspense>

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
            {CATEGORIES.map(([icon, name, offer]) => (
              <div key={name} className="offer-card" onClick={() => navigate('/shop')}>
                <div className="offer-img">
                  <span className="offer-emoji" aria-hidden="true">{icon}</span>
                  <span className="offer-badge">{offer}</span>
                </div>
                <div className="offer-name">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DeferredRender className="deferred-section" minHeight={520}>
        <Suspense fallback={<div className="section" />}>
          <CategoriesSection navigate={navigate} />
        </Suspense>
      </DeferredRender>

      <DeferredRender className="deferred-section" minHeight={520}>
        <Suspense fallback={<div className="section" />}>
          <BrandsSection navigate={navigate} />
        </Suspense>
      </DeferredRender>

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
