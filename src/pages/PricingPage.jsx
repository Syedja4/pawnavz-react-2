import React from 'react'
import { useNavigate } from 'react-router-dom'

const PLANS = [
  {
    name: 'Free', price: 0, color: 'var(--text)',
    desc: 'Perfect for getting started',
    features: [['✓','Paw Store access'],['✓','Basic order tracking'],['✓','1 pet profile'],['✗','GPS tracking'],['✗','Health analytics'],['✗','Smart device sync']],
    cta: 'Get Started Free',
  },
  {
    name: 'Paw+', price: 199, color: 'var(--brand)',
    desc: 'For the modern pet parent',
    features: [['✓','Everything in Free'],['✓','GPS Tracker sync'],['✓','Health dashboard'],['✓','Smart Bowl sync'],['✓','3 pet profiles'],['✗','Vet connect']],
    cta: 'Start Free Trial', featured: true,
  },
  {
    name: 'Paw Pro', price: 499, color: '#9B59B6',
    desc: 'Complete peace of mind',
    features: [['✓','Everything in Paw+'],['✓','Unlimited profiles'],['✓','Live vet connect'],['✓','Emergency alerts'],['✓','Premium analytics'],['✓','24/7 helpline']],
    cta: 'Get Paw Pro',
  },
]

const FAQS = [
  ['Can I cancel anytime?', 'Yes! Cancel at any time with no fees. Your plan continues until end of billing period.'],
  ['Is there a free trial?', 'Yes, Paw+ and Paw Pro come with a 14-day free trial. No credit card required.'],
  ['How many pets can I add?', 'Free: 1 pet. Paw+: 3 pets. Paw Pro: unlimited pets.'],
  ['Is my payment secure?', 'Yes. We use 256-bit SSL encryption and Razorpay for all payments.'],
]

export default function PricingPage() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = React.useState(null)
  return (
    <div className="page">
      <div className="container section">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Pricing</div>
          <h1 className="h-xl" style={{ marginBottom: 16 }}>Simple, Transparent<br /><span style={{ color: 'var(--brand)' }}>Pricing</span></h1>
          <p className="text-muted" style={{ fontSize: 17, maxWidth: 480, margin: '0 auto' }}>Start free. Upgrade as your pet's needs grow.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 64 }}>
          {PLANS.map(plan => (
            <div key={plan.name} className={`price-card${plan.featured ? ' featured' : ''}`}>
              {plan.featured && <div className="price-badge">Most Popular ⭐</div>}
              <div className="badge" style={{ background: `${plan.color}18`, color: plan.color, border: `1px solid ${plan.color}30`, marginBottom: 12 }}>{plan.name}</div>
              <p style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 4 }}>{plan.desc}</p>
              <div style={{ fontFamily: 'var(--font-d)', fontSize: 44, fontWeight: 800, color: 'var(--text)', letterSpacing: -2, margin: '16px 0 4px' }}>
                ₹{plan.price}<span style={{ fontSize: 16, color: 'var(--text2)', fontWeight: 400, letterSpacing: 0 }}>/month</span>
              </div>
              <ul style={{ listStyle: 'none', margin: '24px 0' }}>
                {plan.features.map(([check, text]) => (
                  <li key={text} className="pf-item">
                    <span style={{ color: check === '✓' ? '#2ECC71' : 'var(--text3)', fontWeight: 800 }}>{check}</span>
                    {text}
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'} btn-w-full`} style={{ borderRadius: 12 }} onClick={() => navigate('/auth')}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 className="h-md" style={{ textAlign: 'center', marginBottom: 32 }}>Frequently Asked Questions</h2>
          {FAQS.map(([q, a]) => (
            <div key={q} className="card card-p" style={{ marginBottom: 12, cursor: 'pointer' }} onClick={() => setOpenFaq(openFaq === q ? null : q)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-d)', fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>{q}</span>
                <span style={{ color: 'var(--brand)', fontSize: 20, transition: 'transform .2s', transform: openFaq === q ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
              </div>
              {openFaq === q && (
                <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7, marginTop: 12 }}>{a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
