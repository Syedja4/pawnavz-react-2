import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const FOOTER_LINKS = {
  Products: [
    ['/shop', 'Pet Food'],
    ['/shop', 'Accessories'],
    ['/gps-tracker', 'GPS Tracker'],
    ['/smart-bowl', 'Smart Bowl'],
    ['/pricing', 'Pricing Plans'],
  ],
  Company: [
    ['/about', 'About Us'],
    ['/careers', 'Careers'],
    ['/blog', 'Blog'],
    ['/contact', 'Contact'],
  ],
  Legal: [
    ['/privacy-policy', 'Privacy Policy'],
    ['/terms', 'Terms & Conditions'],
    ['/shipping', 'Shipping Policy'],
    ['/refunds', 'Refund Policy'],
  ],
}

const SOCIALS = [
  { icon: <FaFacebookF />, url: 'https://facebook.com/pawnavz' },
  { icon: <FaInstagram />, url: 'https://instagram.com/pawnavz' },
  { icon: <FaXTwitter />, url: 'https://x.com/pawnavz' },
  { icon: <FaPinterestP />, url: 'https://pinterest.com/pawnavz' },
  { icon: <FaLinkedinIn />, url: 'https://linkedin.com/company/pawnavz' },
  { icon: <FaInstagram />, url: 'https://threads.net/@pawnavz' },
  { icon: <FaYoutube />, url: 'https://youtube.com/@pawnavz' },
]

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer>
      <div className="footer-grid" style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div className="nav-logo-icon" style={{ width: 34, height: 34, fontSize: 16 }}>🐾</div>
            <span style={{ fontFamily: 'var(--font-d)', fontWeight: 800, fontSize: 18 }}>
              paw<span style={{ color: 'var(--brand)' }}>navz</span>
            </span>
          </div>
          <p style={{ fontSize: 13, color: 'var(--text3)', lineHeight: 1.8, maxWidth: 260, marginBottom: 20 }}>
            India's first pet technology company. Building smart products for the next generation of pet parents.
          </p>
          <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
            {SOCIALS.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([title, items]) => (
          <div key={title}>
            <div className="footer-col-title">{title}</div>
            {items.map(([path, label]) => (
              <button key={label} className="footer-link" onClick={() => navigate(path)}>{label}</button>
            ))}
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 24, borderTop: '1px solid var(--border)', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ fontSize: 13, color: 'var(--text3)' }}>
          © 2026 Pawnavz Technology Pvt Ltd · All Rights Reserved
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--text3)' }}>
          <span className="dot-live" /> All systems operational
        </div>
      </div>
    </footer>
  )
}