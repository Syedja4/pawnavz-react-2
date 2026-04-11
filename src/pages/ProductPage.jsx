import React, { useCallback, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useCartActions } from '../context/CartContext'
import { useToastActions } from '../context/ToastContext'
import { getProductById, PRODUCTS } from '../data/products'

const REVIEW_SAMPLES = [
  ['Priya S.', 'Worth every rupee!', 'Excellent quality. My dog loves it.', 5, '👩'],
  ['Rahul V.', 'Highly recommended', 'Great product, fast delivery.', 4, '👨'],
  ['Deepa I.', 'Repeat buyer', 'Bought 3 times. Consistent quality.', 5, '👩‍🦳'],
]

export default function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCartActions()
  const { showToast } = useToastActions()
  const [qty, setQty] = useState(1)
  const [activeTab, setActiveTab] = useState(0)
  const productId = useMemo(() => Number.parseInt(id, 10), [id])
  const product = useMemo(() => getProductById(productId), [productId])

  if (!product) {
    return (
      <div className="page">
        <div className="container section" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 64, marginBottom: 20 }}>🐾</div>
          <h2 className="h-md" style={{ marginBottom: 12 }}>Product not found</h2>
          <button className="btn btn-primary" onClick={() => navigate('/shop')}>Back to Shop</button>
        </div>
      </div>
    )
  }

  const saved = product.compare ? Math.round((1 - product.price / product.compare) * 100) : 0
  const related = useMemo(
    () => PRODUCTS.filter((entry) => entry.id !== product.id && (entry.pet === product.pet || entry.category === product.category)).slice(0, 4),
    [product.category, product.id, product.pet]
  )

  const handleAddToCart = useCallback(() => {
    addToCart(product.id, qty)
    showToast(product.emoji, 'Added to cart!', product.name)
  }, [addToCart, product.emoji, product.id, product.name, qty, showToast])

  return (
    <div className="page">
      <div className="container section">
        <div style={{ fontSize: 13, color: 'var(--text3)', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ cursor: 'pointer', color: 'var(--text2)' }} onClick={() => navigate('/')}>Home</span> /
          <span style={{ cursor: 'pointer', color: 'var(--text2)' }} onClick={() => navigate('/shop')}>Shop</span> /
          <span style={{ color: 'var(--brand)' }}>{product.name}</span>
        </div>

        <div className="product-detail-grid">
          <div>
            <div className="gallery-main">
              <span style={{ fontSize: 120, animation: 'float 4s ease-in-out infinite' }}>{product.emoji}</span>
              <span className="badge badge-brand" style={{ position: 'absolute', top: 16, left: 16 }}>{product.tag}</span>
              {saved > 0 && <span className="badge badge-red" style={{ position: 'absolute', top: 16, right: 16 }}>Save {saved}%</span>}
            </div>
            <div className="gallery-thumbs">
              {[product.emoji, '📦', '🔍', '🎁'].map((emoji, index) => (
                <div key={emoji + index} className={`gallery-thumb${index === 0 ? ' active' : ''}`}>{emoji}</div>
              ))}
            </div>
          </div>

          <div>
            <span className="badge badge-brand" style={{ marginBottom: 16 }}>{product.pet} · {product.category}</span>
            <h1 style={{ fontFamily: 'var(--font-d)', fontSize: 'clamp(22px,3vw,32px)', fontWeight: 800, color: 'var(--text)', letterSpacing: -1, marginBottom: 12 }}>{product.name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 16 }}>{'⭐'.repeat(Math.round(product.rating))}</span>
              <span style={{ fontFamily: 'var(--font-d)', fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{product.rating}</span>
              <span style={{ fontSize: 14, color: 'var(--text3)' }}>({product.reviews.toLocaleString()} reviews)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-d)', fontSize: 32, fontWeight: 800, color: 'var(--text)', letterSpacing: -1 }}>₹{product.price.toLocaleString('en-IN')}</span>
              {product.compare && (
                <>
                  <span style={{ fontSize: 16, color: 'var(--text3)', textDecoration: 'line-through' }}>₹{product.compare.toLocaleString('en-IN')}</span>
                  <span style={{ fontFamily: 'var(--font-d)', fontSize: 13, color: '#2ECC71', fontWeight: 700 }}>Save ₹{(product.compare - product.price).toLocaleString('en-IN')}</span>
                </>
              )}
            </div>
            <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.8, margin: '0 0 20px' }}>{product.desc}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-d)', fontSize: 13, fontWeight: 600, color: 'var(--text2)' }}>Quantity:</span>
              <div className="qty-control">
                <button onClick={() => setQty((current) => Math.max(1, current - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty((current) => current + 1)}>+</button>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleAddToCart}>Add to Cart 🛒</button>
              <button className="btn btn-ghost" style={{ flex: 1 }} onClick={() => navigate('/checkout')}>Buy Now →</button>
            </div>
            <div className="product-detail-benefits" style={{ marginTop: 24 }}>
              {[['🚚', 'Free delivery', 'On orders above ₹499'], ['🔄', '7-day returns', 'Hassle-free'], ['✅', '100% genuine', 'Verified'], ['🛡️', 'Vet approved', 'Certified safe']].map(([icon, title, sub]) => (
                <div key={title} className="card card-p" style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 20 }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-d)', fontSize: 12, fontWeight: 700, color: 'var(--text)' }}>{title}</div>
                    <div style={{ fontSize: 11, color: 'var(--text3)' }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 48 }}>
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', marginBottom: 28 }}>
            {['Specifications', 'Reviews', 'Description'].map((tab, index) => (
              <button key={tab} onClick={() => setActiveTab(index)} style={{ padding: '12px 24px', background: 'none', border: 'none', borderBottom: activeTab === index ? '2px solid var(--brand)' : '2px solid transparent', fontFamily: 'var(--font-d)', fontSize: 14, fontWeight: 700, color: activeTab === index ? 'var(--brand)' : 'var(--text2)', cursor: 'pointer', transition: 'all .2s' }}>{tab}</button>
            ))}
          </div>
          {activeTab === 0 && (
            <table className="spec-table">
              <tbody>{(product.specs || []).map(([key, value]) => <tr key={key}><td>{key}</td><td>{value}</td></tr>)}</tbody>
            </table>
          )}
          {activeTab === 1 && (
            <div className="grid-3">
              {REVIEW_SAMPLES.map(([name, title, body, stars, avatar]) => (
                <div key={name} className="card card-p">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <div className="testi-avatar" style={{ width: 36, height: 36, fontSize: 16 }}>{avatar}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-d)', fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{name}</div>
                      <span style={{ fontSize: 12 }}>{'⭐'.repeat(stars)}</span>
                    </div>
                    <span className="badge badge-green" style={{ marginLeft: 'auto' }}>Verified</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-d)', fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 13, color: 'var(--text2)' }}>{body}</div>
                </div>
              ))}
            </div>
          )}
          {activeTab === 2 && (
            <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.8, maxWidth: 700 }}>
              {product.desc} All ingredients comply with FSSAI standards for pet food safety in India.
            </p>
          )}
        </div>

        {related.length > 0 && (
          <div style={{ marginTop: 48 }}>
            <h2 className="h-md" style={{ marginBottom: 24 }}>You Might Also Like</h2>
            <div className="product-grid">{related.map((entry) => <ProductCard key={entry.id} p={entry} />)}</div>
          </div>
        )}
      </div>
    </div>
  )
}
