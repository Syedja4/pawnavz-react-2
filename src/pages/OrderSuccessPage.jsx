import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderSuccessPage() {
  const navigate = useNavigate()
  const orderId = useMemo(() => `PNZ${Date.now().toString().slice(-6)}`, [])
  return (
    <div className="page" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '60px 40px', animation: 'popIn .5s cubic-bezier(.16,1,.3,1)' }}>
        <div style={{ fontSize: 80, marginBottom: 24 }}>🎉</div>
        <span className="badge badge-green" style={{ fontSize: 14, padding: '10px 20px', marginBottom: 20 }}>Order Placed Successfully!</span>
        <h1 className="h-lg" style={{ marginBottom: 16, marginTop: 16 }}>Thank You for Shopping<br />with Pawnavz!</h1>
        <p className="text-muted" style={{ fontSize: 15, marginBottom: 8 }}>Order <strong style={{ color: 'var(--brand)' }}>#{orderId}</strong> confirmed.</p>
        <p className="text-muted" style={{ fontSize: 14, marginBottom: 32 }}>Estimated delivery: <strong style={{ color: 'var(--text)' }}>3–5 business days</strong></p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => navigate('/shop')}>Continue Shopping</button>
          <button className="btn btn-ghost" onClick={() => navigate('/')}>Back to Home</button>
        </div>
      </div>
    </div>
  )
}
