import React, { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartActions, useWishlist } from '../context/CartContext'
import { useToastActions } from '../context/ToastContext'

function ProductCard({ p }) {
  const navigate = useNavigate()
  const { addToCart, toggleWishlist } = useCartActions()
  const wishlist = useWishlist()
  const { showToast } = useToastActions()
  const saved = p.compare ? Math.round((1 - p.price / p.compare) * 100) : 0
  const isLiked = wishlist.includes(p.id)

  const handleNavigate = useCallback(() => {
    navigate(`/product/${p.id}`)
  }, [navigate, p.id])

  const handleAddToCart = useCallback((e) => {
    e.stopPropagation()
    addToCart(p.id)
    showToast(p.emoji, 'Added to cart!', p.name)
  }, [addToCart, p.emoji, p.id, p.name, showToast])

  const handleWishlist = useCallback((e) => {
    e.stopPropagation()
    const action = toggleWishlist(p.id)

    if (action === 'added') {
      showToast('\u2764\uFE0F', 'Added to wishlist', 'Saved for later')
    }
  }, [p.id, showToast, toggleWishlist])

  return (
    <div className="product-card" onClick={handleNavigate}>
      <div className="pc-img">
        <div className="pc-emoji">{p.emoji}</div>
        <span className="badge badge-brand" style={{ position: 'absolute', top: 10, left: 10 }}>{p.tag}</span>
        {saved > 0 && (
          <span className="badge badge-red" style={{ position: 'absolute', top: 10, right: 50 }}>-{saved}%</span>
        )}
        <button className={`wish-btn${isLiked ? ' liked' : ''}`} onClick={handleWishlist}>
          {isLiked ? '\u2764\uFE0F' : '\u{1F90D}'}
        </button>
      </div>
      <div className="pc-body">
        <div className="pc-meta">{p.pet} {'\u00B7'} {p.category}</div>
        <div className="pc-name">{p.name}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
          <span style={{ color: '#FF7A00', fontSize: 12 }}>{'\u2B50'.repeat(Math.round(p.rating))}</span>
          <span style={{ fontSize: 12, color: 'var(--text2)' }}>{p.rating} ({p.reviews.toLocaleString()})</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span className="pc-price">{'\u20B9'}{p.price.toLocaleString('en-IN')}</span>
            {p.compare && <span className="pc-compare">{'\u20B9'}{p.compare.toLocaleString('en-IN')}</span>}
          </div>
          <button className="add-cart-btn" onClick={handleAddToCart}>+ Cart</button>
        </div>
      </div>
    </div>
  )
}

export default memo(ProductCard)
