import React from 'react'
import { useToastState } from '../context/ToastContext'

export default function Toast() {
  const toast = useToastState()
  if (!toast) return null
  return (
    <div className="toast">
      <span style={{ fontSize: 26 }}>{toast.icon}</span>
      <div>
        <div style={{ fontFamily: 'var(--font-d)', fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 2 }}>{toast.title}</div>
        <div style={{ fontSize: 12, color: 'var(--text2)' }}>{toast.sub}</div>
      </div>
      <div style={{ marginLeft: 'auto', background: 'rgba(46,204,113,.15)', color: '#2ECC71', width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flexShrink: 0 }}>✓</div>
    </div>
  )
}
