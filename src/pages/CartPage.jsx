import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartActions, useCartItems, useCartSummary } from '../context/CartContext'
import { useToastActions } from '../context/ToastContext'
import { FaShoppingCart } from 'react-icons/fa'

export default function CartPage() {
  const navigate = useNavigate()
  const cart = useCartItems()
  const { cartCount, cartTotal } = useCartSummary()
  const { removeFromCart, updateQty } = useCartActions()
  const { showToast } = useToastActions()
  const [coupon, setCoupon] = useState('')
  const [couponMsg, setCouponMsg] = useState(null)
  const taxAmount = Math.round(cartTotal * 0.18)
  const orderTotal = Math.round(cartTotal * 1.18)

  const applyCoupon = () => {
    if (coupon.toUpperCase() === 'PAWNAVZ20') {
      setCouponMsg({ type: 'success', msg: '🎉 20% discount applied!' })
      showToast('🎉', 'Coupon applied!', '20% off your order')
    } else {
      setCouponMsg({ type: 'error', msg: '❌ Invalid coupon code' })
    }
  }

  if (cart.length === 0) {
    return (
      <div className="page">
        <div className="container section" style={{ textAlign: 'center', padding: '80px 24px' }}>
          <div style={{ fontSize: 72, marginBottom: 20, color: 'var(--brand)' }}><FaShoppingCart aria-hidden="true" /></div>
          <h2 className="h-md" style={{ marginBottom: 12 }}>Your cart is empty</h2>
          <p className="text-muted" style={{ marginBottom: 24 }}>Looks like you haven't added anything yet</p>
          <button className="btn btn-primary" onClick={() => navigate('/shop')}>Start Shopping →</button>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="container section">
        <div className="section-label" style={{ marginBottom: 8 }}>Cart</div>
        <h1 className="h-lg" style={{ marginBottom: 32 }}>Shopping Cart</h1>
        <div className="cart-page-grid">
          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-page-item">
                <div style={{ fontSize: 44, background: 'var(--brand-dim)', borderRadius: 12, width: 70, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, cursor: 'pointer' }} onClick={() => navigate(`/product/${item.id}`)}>
                  {item.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-d)', fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 6, cursor: 'pointer' }} onClick={() => navigate(`/product/${item.id}`)}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text3)', marginBottom: 12 }}>{item.pet} · {item.category}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                    <div className="qty-control">
                      <button onClick={() => updateQty(item.id, -1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)}>+</button>
                    </div>
                    <span style={{ fontFamily: 'var(--font-d)', fontSize: 18, fontWeight: 800, color: 'var(--text)' }}>
                      ₹{(item.price * item.qty).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: 'var(--text3)', fontSize: 20, cursor: 'pointer', alignSelf: 'flex-start' }}>✕</button>
              </div>
            ))}
            <button className="btn btn-ghost btn-sm" onClick={() => navigate('/shop')}>← Continue Shopping</button>
          </div>

          <div className="order-summary-card">
            <div className="h-sm" style={{ marginBottom: 20 }}>Order Summary</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 10 }}>
              <span>Subtotal ({cartCount} items)</span>
              <span style={{ fontFamily: 'var(--font-d)', fontWeight: 600 }}>₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 10 }}>
              <span>Shipping</span>
              <span style={{ fontFamily: 'var(--font-d)', fontWeight: 600, color: '#2ECC71' }}>FREE</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 10 }}>
              <span>Tax (18% GST)</span>
              <span style={{ fontFamily: 'var(--font-d)', fontWeight: 600 }}>₹{taxAmount.toLocaleString('en-IN')}</span>
            </div>
            <div className="shimmer-line" />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
              <span style={{ fontFamily: 'var(--font-d)', fontWeight: 800, fontSize: 16 }}>Total</span>
              <span style={{ fontFamily: 'var(--font-d)', fontWeight: 800, fontSize: 20 }}>₹{orderTotal.toLocaleString('en-IN')}</span>
            </div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
              <input className="input" placeholder="Coupon code (PAWNAVZ20)" value={coupon} onChange={(e) => setCoupon(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && applyCoupon()} />
              <button className="btn btn-outline-brand btn-sm" onClick={applyCoupon}>Apply</button>
            </div>
            {couponMsg && (
              <div style={{ fontSize: 13, color: couponMsg.type === 'success' ? '#2ECC71' : '#E74C3C', marginBottom: 12 }}>{couponMsg.msg}</div>
            )}
            <button className="btn btn-primary btn-w-full" style={{ borderRadius: 12, marginTop: 8 }} onClick={() => navigate('/checkout')}>
              Proceed to Checkout →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
