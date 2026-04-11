import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <div className="page" style={{ minHeight: 'calc(100vh - 68px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '60px 24px' }}>
        <div style={{ fontSize: 80, marginBottom: 20 }}>🐾</div>
        <h1 className="h-xl" style={{ color: 'var(--brand)', marginBottom: 16 }}>404</h1>
        <h2 className="h-md" style={{ marginBottom: 12 }}>Page Not Found</h2>
        <p className="text-muted" style={{ marginBottom: 28 }}>Looks like this page went for a walk and didn't come back.</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </div>
  )
}
