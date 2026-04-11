import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartActions, useCartItems, useCartSummary, useCartUi } from '../context/CartContext'

export default function CartSidebar() {
  const navigate = useNavigate()
  const cart = useCartItems()
  const { cartCount, cartTotal } = useCartSummary()
  const { cartOpen } = useCartUi()
  const { closeCart, removeFromCart, updateQty } = useCartActions()

  if (!cartOpen) return null

  const go = (path) => {
    closeCart()
    navigate(path)
  }

  return (
    <>
      <div className="cart-overlay" onClick={closeCart} />
      <div className="cart-sidebar">
        <div className="cart-header">
          <div>
            <div className="h-sm">Shopping Cart</div>
            <div style={{ fontSize: 13, color: 'var(--text2)', marginTop: 2 }}>{cartCount} items</div>
          </div>
          <button className="nav-icon-btn" onClick={closeCart}>✕</button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div style={{ fontSize: 56, marginBottom: 16 }}>🛒</div>
              <div className="h-sm" style={{ marginBottom: 8 }}>Your cart is empty</div>
              <p className="text-muted" style={{ fontSize: 14, marginBottom: 20 }}>Add some products to get started</p>
              <button className="btn btn-primary btn-sm" onClick={() => go('/shop')}>Browse Shop</button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="ci-emoji">{item.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-d)', fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 3 }}>{item.name}</div>
                  <div style={{ fontFamily: 'var(--font-d)', fontSize: 13, fontWeight: 800, color: 'var(--brand)' }}>
                    ₹{(item.price * item.qty).toLocaleString('en-IN')}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
                    <button className="qty-btn" onClick={() => updateQty(item.id, -1)}>−</button>
                    <span style={{ fontFamily: 'var(--font-d)', fontSize: 14, fontWeight: 700, color: 'var(--text)', minWidth: 20, textAlign: 'center' }}>{item.qty}</span>
                    <button className="qty-btn" onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: 'var(--text3)', fontSize: 18, cursor: 'pointer', alignSelf: 'flex-start', padding: 2 }}>✕</button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 8, color: 'var(--text2)' }}>
              <span>Subtotal</span>
              <span style={{ fontFamily: 'var(--font-d)', fontWeight: 700, color: 'var(--text)' }}>₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 8, color: 'var(--text2)' }}>
              <span>Shipping</span>
              <span style={{ fontFamily: 'var(--font-d)', fontWeight: 700, color: '#2ECC71' }}>FREE</span>
            </div>
            <div className="shimmer-line" style={{ margin: '12px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ fontFamily: 'var(--font-d)', fontWeight: 800, color: 'var(--text)' }}>Total</span>
              <span style={{ fontFamily: 'var(--font-d)', fontWeight: 800, fontSize: 20, color: 'var(--text)' }}>₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
            <button className="btn btn-primary btn-w-full" style={{ borderRadius: 12, marginBottom: 10 }} onClick={() => go('/checkout')}>
              Proceed to Checkout →
            </button>
            <button className="btn btn-ghost btn-w-full" style={{ borderRadius: 12 }} onClick={() => go('/cart')}>
              View Full Cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}
