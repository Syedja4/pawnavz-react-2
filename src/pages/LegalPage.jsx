import React from 'react'

const LEGAL_CONTENT = {
  privacy: `
    <h2>Information We Collect</h2>
    <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes your name, email address, phone number, and payment information.</p>
    <h2>How We Use Your Information</h2>
    <p>We use the information we collect to process transactions, send purchase confirmations and invoices, and communicate with you about products, services, and events offered by Pawnavz.</p>
    <h2>Data Security</h2>
    <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration and destruction.</p>
    <h2>Cookies</h2>
    <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve your experience.</p>
    <h2>Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, please contact us at privacy@pawnavz.com.</p>
  `,
  terms: `
    <h2>Acceptance of Terms</h2>
    <p>By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.</p>
    <h2>Use License</h2>
    <p>Permission is granted to temporarily access the materials on Pawnavz Technology's website for personal, non-commercial transitory viewing only.</p>
    <h2>Disclaimer</h2>
    <p>The materials on Pawnavz Technology's website are provided on an 'as is' basis. Pawnavz Technology makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>
    <h2>Limitations</h2>
    <p>In no event shall Pawnavz Technology or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on Pawnavz Technology's website.</p>
  `,
  shipping: `
    <h2>Shipping Timeline</h2>
    <p>Standard shipping takes 3–7 business days across India. Express shipping (1–2 days) is available in metro cities including Bengaluru, Mumbai, Delhi, Chennai, Hyderabad, and Pune.</p>
    <h2>Free Shipping</h2>
    <p>All orders above ₹499 qualify for free standard shipping. Smart device orders include free expedited shipping.</p>
    <h2>Order Tracking</h2>
    <p>Once your order ships, you'll receive a tracking number via email and SMS. Track in real-time through the Pawnavz app.</p>
    <h2>International Shipping</h2>
    <p>Currently we only ship within India. International shipping will be available soon.</p>
  `,
  refunds: `
    <h2>Return Policy</h2>
    <p>We offer a 7-day return policy on all pet food and accessory products. Items must be unused and in original packaging.</p>
    <h2>How to Initiate a Return</h2>
    <p>To initiate a return, contact our support team at returns@pawnavz.com with your order number and reason for return. We'll arrange a pickup at no cost.</p>
    <h2>Refund Timeline</h2>
    <p>Approved refunds are processed within 5–7 business days to your original payment method.</p>
    <h2>Damaged Products</h2>
    <p>If you receive a damaged or defective product, contact us within 48 hours with photos. We'll arrange a replacement or full refund immediately.</p>
  `,
}

export default function LegalPage({ title, type }) {
  const content = LEGAL_CONTENT[type] || '<p>Content coming soon.</p>'
  return (
    <div className="page">
      <div className="container section" style={{ maxWidth: 760, margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: 12 }}>Legal</div>
        <h1 className="h-lg" style={{ marginBottom: 8 }}>{title}</h1>
        <p style={{ fontSize: 13, color: 'var(--text3)', marginBottom: 40 }}>Last updated: March 2025</p>
        <div className="legal-body" dangerouslySetInnerHTML={{ __html: content }} />
        <div className="shimmer-line" />
        <p style={{ fontSize: 14, color: 'var(--text2)' }}>
          Questions? <span style={{ color: 'var(--brand)' }}>legal@pawnavz.com</span>
        </p>
      </div>
    </div>
  )
}
