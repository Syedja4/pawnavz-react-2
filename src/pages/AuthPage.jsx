import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../context/ToastContext'

export default function AuthPage() {
  const navigate = useNavigate()
  const { showToast } = useToast()
  const [tab, setTab] = useState('login')

  // Sign In state
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPass, setLoginPass] = useState('')

  // Register state
  const [regName, setRegName] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [regPass, setRegPass] = useState('')
  const [regConfirm, setRegConfirm] = useState('')
  const [regPhone, setRegPhone] = useState('')

  const doLogin = () => {
    if (!loginEmail) { showToast('\u26A0\uFE0F', 'Enter your email', 'Required'); return }
    if (!loginPass) { showToast('\u26A0\uFE0F', 'Enter your password', 'Required'); return }
    showToast('\u{1F44B}', 'Welcome back!', loginEmail)
    navigate('/')
  }

  const doRegister = () => {
    if (!regName || !regEmail || !regPass) { showToast('\u26A0\uFE0F', 'Fill required fields', 'Name, Email & Password required'); return }
    if (regPass !== regConfirm) { showToast('\u26A0\uFE0F', "Passwords don't match", 'Please re-enter'); return }
    showToast('\u{1F389}', 'Account created!', `Welcome to Pawnavz, ${regName.split(' ')[0]}!`)
    navigate('/')
  }

  const socialLogin = (provider) => {
    showToast('\u{1F44B}', `Signed in with ${provider}!`, 'Welcome to Pawnavz')
    navigate('/')
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="sr-only">Pawnavz Account Login and Registration</h1>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center', marginBottom: 32 }}>
          <div className="nav-logo-icon" style={{ width: 44, height: 44, fontSize: 22 }}>{'\u{1F43E}'}</div>
          <span style={{ fontFamily: 'var(--font-d)', fontWeight: 800, fontSize: 24, letterSpacing: -.5 }}>
            paw<span style={{ color: 'var(--brand)' }}>navz</span>
          </span>
        </div>

        {/* Tabs */}
        <div className="auth-tabs">
          <button className={`auth-tab${tab === 'login' ? ' active' : ''}`} onClick={() => setTab('login')}>Sign In</button>
          <button className={`auth-tab${tab === 'register' ? ' active' : ''}`} onClick={() => setTab('register')}>Create Account</button>
        </div>

        {/* Social Login */}
        <div className="social-login">
          <button className="sl-btn" onClick={() => socialLogin('Google')}><span style={{ fontWeight: 800, fontSize: 15 }}>G</span>Google</button>
          <button className="sl-btn" onClick={() => socialLogin('Facebook')}><span style={{ fontSize: 15 }}>f</span>Facebook</button>
        </div>
        <div className="auth-divider"><span>or continue with email</span></div>

        {/* SIGN IN FORM */}
        {tab === 'login' && (
          <>
            <div className="form-group">
              <label className="label">Email Address</label>
              <input className="input" placeholder="you@email.com" type="email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="label">Password</label>
              <input className="input" placeholder="••••••••" type="password" value={loginPass} onChange={e => setLoginPass(e.target.value)} onKeyDown={e => e.key === 'Enter' && doLogin()} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text2)', cursor: 'pointer' }}>
                <input type="checkbox" style={{ accentColor: 'var(--brand)' }} /> Remember me
              </label>
              <span style={{ fontSize: 13, color: 'var(--brand)', cursor: 'pointer', fontFamily: 'var(--font-d)', fontWeight: 600 }}>Forgot password?</span>
            </div>
            <button className="btn btn-primary btn-w-full" style={{ borderRadius: 12, fontSize: 15, padding: 14, marginBottom: 16 }} onClick={doLogin}>
              Sign In {'\u2192'}
            </button>
            <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text2)' }}>
              Don't have an account?{' '}
              <span style={{ color: 'var(--brand)', cursor: 'pointer', fontWeight: 600, fontFamily: 'var(--font-d)' }} onClick={() => setTab('register')}>
                Create one free
              </span>
            </p>
          </>
        )}

        {/* CREATE ACCOUNT FORM */}
        {tab === 'register' && (
          <>
            <div className="form-group">
              <label className="label">Full Name <span style={{ color: '#E74C3C' }}>*</span></label>
              <input className="input" placeholder="Rahul Sharma" value={regName} onChange={e => setRegName(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="label">Email Address <span style={{ color: '#E74C3C' }}>*</span></label>
              <input className="input" placeholder="you@email.com" type="email" value={regEmail} onChange={e => setRegEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="label">Phone Number</label>
              <input className="input" placeholder="+91 98765 43210" type="tel" value={regPhone} onChange={e => setRegPhone(e.target.value)} />
            </div>
            <div className="grid-2">
              <div className="form-group">
                <label className="label">Password <span style={{ color: '#E74C3C' }}>*</span></label>
                <input className="input" placeholder="Min. 8 characters" type="password" value={regPass} onChange={e => setRegPass(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="label">Confirm Password <span style={{ color: '#E74C3C' }}>*</span></label>
                <input className="input" placeholder="Re-enter password" type="password" value={regConfirm} onChange={e => setRegConfirm(e.target.value)} />
              </div>
            </div>
            <button className="btn btn-primary btn-w-full" style={{ borderRadius: 12, fontSize: 15, padding: 14, marginBottom: 14 }} onClick={doRegister}>
              Create Account {'\u{1F43E}'}
            </button>
            <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text2)' }}>
              Already have an account?{' '}
              <span style={{ color: 'var(--brand)', cursor: 'pointer', fontWeight: 600, fontFamily: 'var(--font-d)' }} onClick={() => setTab('login')}>
                Sign in
              </span>
            </p>
          </>
        )}

        <p style={{ textAlign: 'center', fontSize: 11, color: 'var(--text3)', marginTop: 20 }}>
          By continuing you agree to our{' '}
          <span style={{ color: 'var(--brand)', cursor: 'pointer' }} onClick={() => navigate('/terms')}>Terms</span>{' '}and{' '}
          <span style={{ color: 'var(--brand)', cursor: 'pointer' }} onClick={() => navigate('/privacy-policy')}>Privacy Policy</span>
        </p>
      </div>
    </div>
  )
}