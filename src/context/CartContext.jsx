import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { getProductCardById } from '../data/products'

const CartItemsContext = createContext(undefined)
const CartSummaryContext = createContext(undefined)
const CartUiContext = createContext(undefined)
const CartActionsContext = createContext(undefined)
const WishlistContext = createContext(undefined)

function useRequiredContext(Context, name) {
  const value = useContext(Context)

  if (value === undefined) {
    throw new Error(`${name} must be used within CartProvider`)
  }

  return value
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = useCallback((productId, qty = 1) => {
    const product = getProductCardById(productId)

    if (!product) return null

    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId)

      if (existing) {
        return prev.map((item) =>
          item.id === productId ? { ...item, qty: item.qty + qty } : item
        )
      }

      return [...prev, { ...product, qty }]
    })

    return product
  }, [])

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const updateQty = useCallback((id, delta) => {
    setCart((prev) => {
      const item = prev.find((entry) => entry.id === id)

      if (!item) return prev
      if (item.qty + delta <= 0) return prev.filter((entry) => entry.id !== id)

      return prev.map((entry) =>
        entry.id === id ? { ...entry, qty: entry.qty + delta } : entry
      )
    })
  }, [])

  const clearCart = useCallback(() => setCart([]), [])
  const openCart = useCallback(() => setCartOpen(true), [])
  const closeCart = useCallback(() => setCartOpen(false), [])

  const toggleWishlist = useCallback((id) => {
    let action = 'added'

    setWishlist((prev) => {
      const exists = prev.includes(id)
      action = exists ? 'removed' : 'added'

      return exists ? prev.filter((entry) => entry !== id) : [...prev, id]
    })

    return action
  }, [])

  const cartTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  )
  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  )

  const cartSummaryValue = useMemo(
    () => ({ cartTotal, cartCount }),
    [cartCount, cartTotal]
  )
  const cartUiValue = useMemo(() => ({ cartOpen }), [cartOpen])
  const cartActionsValue = useMemo(
    () => ({
      addToCart,
      removeFromCart,
      updateQty,
      clearCart,
      openCart,
      closeCart,
      toggleWishlist,
    }),
    [addToCart, clearCart, closeCart, openCart, removeFromCart, toggleWishlist, updateQty]
  )

  return (
    <CartItemsContext.Provider value={cart}>
      <WishlistContext.Provider value={wishlist}>
        <CartSummaryContext.Provider value={cartSummaryValue}>
          <CartUiContext.Provider value={cartUiValue}>
            <CartActionsContext.Provider value={cartActionsValue}>
              {children}
            </CartActionsContext.Provider>
          </CartUiContext.Provider>
        </CartSummaryContext.Provider>
      </WishlistContext.Provider>
    </CartItemsContext.Provider>
  )
}

export function useCartItems() {
  return useRequiredContext(CartItemsContext, 'useCartItems')
}

export function useWishlist() {
  return useRequiredContext(WishlistContext, 'useWishlist')
}

export function useCartSummary() {
  return useRequiredContext(CartSummaryContext, 'useCartSummary')
}

export function useCartUi() {
  return useRequiredContext(CartUiContext, 'useCartUi')
}

export function useCartActions() {
  return useRequiredContext(CartActionsContext, 'useCartActions')
}

export function useCart() {
  const cart = useCartItems()
  const wishlist = useWishlist()
  const { cartTotal, cartCount } = useCartSummary()
  const { cartOpen } = useCartUi()
  const actions = useCartActions()

  return {
    cart,
    wishlist,
    cartOpen,
    ...actions,
    getCartTotal: () => cartTotal,
    getCartCount: () => cartCount,
  }
}
