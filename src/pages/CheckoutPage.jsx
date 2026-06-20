import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartActions, useCartItems, useCartSummary } from '../context/CartContext'
import { FaCreditCard, FaMobileAlt, FaUniversity, FaMoneyBillWave, FaTruck, FaLock } from 'react-icons/fa'

const PAYMENT_METHODS = [
  ['razorpay', FaCreditCard, 'Razorpay'],
  ['upi', FaMobileAlt, 'UPI'],
  ['netbanking', FaUniversity, 'Net Banking'],
  ['cod', FaMoneyBillWave, 'Cash on Delivery'],
]

export default function CheckoutPage() {
  const navigate = useNavigate()
  const cart = useCartItems()
  const { cartTotal } = useCartSummary()
  const { clearCart } = useCartActions()
  const [step, setStep] = useState(1)
  const [pm, setPm] = useState('razorpay')
  const taxAmount = Math.round(cartTotal * 0.18)
  const total = Math.round(cartTotal * 1.18)

  if (cart.length === 0) {
    return (
      <div className="page">
        <div className="container section" style={{ textAlign: 'center', padding: 60 }}>
          <h2 className="h-md" style={{ marginBottom: 16 }}>Nothing to checkout</h2>
          <p className="text-muted" style={{ marginBottom: 24 }}>Add some products first</p>
          <button className="btn btn-primary" onClick={() => navigate('/shop')}>Shop Now</button>
        </div>
      </div>
    )
  }

  const handlePlaceOrder = () => {
    clearCart()
    navigate('/order-success')
  }

  return (
    <div className="page">
      <div className="container section">
        <div className="section-label" style={{ marginBottom: 8 }}>Checkout</div>
        <h1 className="h-lg" style={{ marginBottom: 32 }}>Secure Checkout</h1>
        <div className="checkout-grid">
          <div>
            <div className="checkout-step">
              <div className="cs-step-header">
                <div className={`cs-step-num${step > 1 ? ' done' : ''}`}>{step > 1 ? '✓' : '1'}</div>
                <div style={{ fontFamily: 'var(--font-d)', fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>Delivery Address</div>
                {step > 1 && <span style={{ marginLeft: 'auto', fontSize: 13, color: 'var(--brand)', fontFamily: 'var(--font-d)', cursor: 'pointer' }} onClick={() => setStep(1)}>Change</span>}
              </div>
              {step === 1 && (
                <div style={{ padding: 24 }}>
                  <div className="grid-2">
                    <div className="form-group"><label className="label">Full Name</label><input className="input" placeholder="Rahul Sharma" /></div>
                    <div className="form-group"><label className="label">Phone</label><input className="input" placeholder="+91 98765 43210" /></div>
                  </div>
                  <div className="form-group"><label className="label">Address Line 1</label><input className="input" placeholder="House No., Street Name" /></div>
                  <div className="grid-2">
                    <div className="form-group"><label className="label">City</label><input className="input" placeholder="Bengaluru" /></div>
                    <div className="form-group"><label className="label">Pincode</label><input className="input" placeholder="560001" /></div>
                  </div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="label">State</label>
                      <select className="input"><option>Karnataka</option><option>Maharashtra</option><option>Tamil Nadu</option><option>Delhi</option><option>Gujarat</option></select>
                    </div>
                    <div className="form-group">
                      <label className="label">Address Type</label>
                      <select className="input"><option>Home</option><option>Work</option><option>Other</option></select>
                    </div>
                  </div>
                  <button className="btn btn-primary" onClick={() => setStep(2)}>Continue to Payment →</button>
                </div>
              )}
              {step > 1 && (
                <div style={{ padding: '12px 24px', fontSize: 13, color: 'var(--text2)' }}>Rahul Sharma · Bengaluru, Karnataka 560001</div>
              )}
            </div>

            <div className="checkout-step">
              <div className="cs-step-header">
                <div className={`cs-step-num${step > 2 ? ' done' : ''}`}>{step > 2 ? '✓' : '2'}</div>
                <div style={{ fontFamily: 'var(--font-d)', fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>Payment Method</div>
              </div>
              {step === 2 && (
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
                    {PAYMENT_METHODS.map(([value, Icon, label]) => (
                      <div key={value} className={`pm-option${pm === value ? ' selected' : ''}`} onClick={() => setPm(value)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon aria-hidden="true" style={{ flexShrink: 0 }} /> {label}</div>
                    ))}
                  </div>
                  {pm !== 'cod' ? (
                    <div className="grid-2">
                      <div className="form-group"><label className="label">Card Number</label><input className="input" placeholder="4242 4242 4242 4242" /></div>
                      <div className="form-group"><label className="label">Name on Card</label><input className="input" placeholder="RAHUL SHARMA" /></div>
                      <div className="form-group"><label className="label">Expiry</label><input className="input" placeholder="MM/YY" /></div>
                      <div className="form-group"><label className="label">CVV</label><input className="input" placeholder="•••" type="password" /></div>
                    </div>
                  ) : (
                    <div className="card card-p" style={{ background: 'var(--surface2)', textAlign: 'center', marginBottom: 20 }}>
                      <div style={{ fontSize: 32, marginBottom: 8, color: 'var(--brand)' }}><FaTruck aria-hidden="true" /></div>
                      <div className="h-sm" style={{ marginBottom: 4 }}>Cash on Delivery</div>
                      <p className="text-muted" style={{ fontSize: 13 }}>Pay when your order arrives. Available up to ₹5,000</p>
                    </div>
                  )}
                  <button className="btn btn-primary" style={{ marginTop: 8 }} onClick={handlePlaceOrder}>
                    Place Order · ₹{total.toLocaleString('en-IN')} →
                  </button>
                  <p style={{ fontSize: 11, color: 'var(--text3)', marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 6 }}><FaLock aria-hidden="true" style={{ flexShrink: 0 }} /> 256-bit SSL encrypted · Your payment is secure</p>
                </div>
              )}
            </div>
          </div>

          <div className="order-summary-card">
            <div className="h-sm" style={{ marginBottom: 16 }}>Order Summary</div>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ fontSize: 24, background: 'var(--brand-dim)', borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-d)', color: 'var(--text)' }}>{item.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text3)' }}>Qty: {item.qty}</div>
                </div>
                <span style={{ fontFamily: 'var(--font-d)', fontWeight: 700, fontSize: 13 }}>₹{(item.price * item.qty).toLocaleString('en-IN')}</span>
              </div>
            ))}
            <div className="shimmer-line" />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 14 }}>
              <span>Subtotal</span><span style={{ fontFamily: 'var(--font-d)', fontWeight: 600 }}>₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 14 }}>
              <span>Shipping</span><span style={{ fontFamily: 'var(--font-d)', fontWeight: 600, color: '#2ECC71' }}>FREE</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 14 }}>
              <span>GST (18%)</span><span style={{ fontFamily: 'var(--font-d)', fontWeight: 600 }}>₹{taxAmount.toLocaleString('en-IN')}</span>
            </div>
            <div className="shimmer-line" />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'var(--font-d)', fontWeight: 800, fontSize: 16 }}>Total</span>
              <span style={{ fontFamily: 'var(--font-d)', fontWeight: 800, fontSize: 20 }}>₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
