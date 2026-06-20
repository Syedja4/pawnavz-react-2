import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCartActions, useCartSummary } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'
import { FaMoon, FaSun, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa'

const NAV_LINKS = [
  ['/', 'Home'],
  ['/shop', 'Shop'],
  ['/features', 'Features'],
  ['/app', 'App'],
  ['/pricing', 'Pricing'],
  ['/blog', 'Blog'],
  ['/about', 'About Us'],
  ['/contact', 'Contact'],
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { cartCount } = useCartSummary()
  const { openCart } = useCartActions()
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let frameId = null

    const handler = () => {
      if (frameId !== null) return

      frameId = window.requestAnimationFrame(() => {
        const nextValue = window.scrollY > 30
        setScrolled((prev) => (prev === nextValue ? prev : nextValue))
        frameId = null
      })
    }

    window.addEventListener('scroll', handler, { passive: true })

    return () => {
      window.removeEventListener('scroll', handler)

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const go = useCallback((path) => {
    navigate(path)
    setMenuOpen(false)
  }, [navigate])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'

    return location.pathname.startsWith(path)
  }

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-logo" onClick={() => go('/')}>
          <div className="nav-logo-icon">🐾</div>
          <span className="nav-logo-text">
            paw<span style={{ color: 'var(--brand)' }}>navz</span>
          </span>
        </div>

        <div className="nav-links">
          {NAV_LINKS.map(([path, label]) => (
            <button
              key={path}
              className={`nav-link${isActive(path) ? ' active' : ''}`}
              onClick={() => go(path)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <div className="theme-toggle">
            <button className={`theme-btn${theme === 'dark' ? ' active' : ''}`} onClick={() => setTheme('dark')}><FaMoon aria-hidden="true" /></button>
            <button className={`theme-btn${theme === 'light' ? ' active' : ''}`} onClick={() => setTheme('light')}><FaSun aria-hidden="true" /></button>
          </div>
          <button className="nav-icon-btn" onClick={() => go('/auth')}><FaUser aria-hidden="true" /></button>
          <button className="nav-icon-btn" onClick={openCart} style={{ position: 'relative' }}>
            <FaShoppingCart aria-hidden="true" />
            {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? '✕' : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(([path, label]) => (
            <button key={path} className="mobile-link" onClick={() => go(path)}>
              {label}
            </button>
          ))}
          <button className="mobile-link" onClick={() => go('/careers')}>Careers</button>
          <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
            <button className="btn btn-primary btn-w-full" onClick={() => go('/auth')}>Sign In</button>
          </div>
          <div style={{ marginTop: 16, display: 'flex', gap: 10, justifyContent: 'center' }}>
            <button className="btn btn-ghost btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }} onClick={() => setTheme('dark')}><FaMoon aria-hidden="true" /> Dark</button>
            <button className="btn btn-ghost btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }} onClick={() => setTheme('light')}><FaSun aria-hidden="true" /> Light</button>
          </div>
        </div>
      )}
    </>
  )
}
