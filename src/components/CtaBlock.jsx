import React, { useState } from 'react'
import { FaLock } from 'react-icons/fa'

export default function CtaBlock({ btnText = 'Notify Me', onSuccess }) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = () => {
    if (!email) return
    setDone(true)
    if (onSuccess) onSuccess()
  }

  if (done) {
    return (
      <span className="badge badge-green" style={{ fontSize: 14, padding: '12px 24px' }}>
        🎉 You're on the list! We'll be in touch soon.
      </span>
    )
  }

  return (
    <>
      <div className="cta-email-pill">
        <input
          className="cta-email-input"
          placeholder="your@email.com"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && submit()}
        />
        <button className="cta-notify-btn" onClick={submit}>{btnText}</button>
      </div>
      <p style={{ fontSize: 12, color: 'var(--text3)', marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 6 }}>No spam, ever. <FaLock aria-hidden="true" style={{ flexShrink: 0 }} /></p>
    </>
  )
}
