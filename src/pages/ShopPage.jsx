import React, { useDeferredValue, useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { PRODUCTS } from '../data/products'

const FILTERS = [
  ['Pet Type', ['Dog', 'Cat', 'Bird', 'Rabbit', 'All']],
  ['Category', ['Food', 'Accessories', 'Toys', 'Grooming', 'Healthcare', 'Smart']],
  ['Price Range', ['Under ₹500', '₹500–₹1,000', '₹1,000–₹2,000', 'Above ₹2,000']],
  ['Rating', ['4⭐ & above', '3⭐ & above', 'All']],
]

export default function ShopPage() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('featured')
  const deferredSearch = useDeferredValue(search)

  const filtered = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase()
    let result = PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.pet.toLowerCase().includes(query)
    )

    if (sort === 'price-low') result = [...result].sort((a, b) => a.price - b.price)
    else if (sort === 'price-high') result = [...result].sort((a, b) => b.price - a.price)
    else if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating)
    else if (sort === 'reviews') result = [...result].sort((a, b) => b.reviews - a.reviews)

    return result
  }, [deferredSearch, sort])

  return (
    <div className="page">
      <div className="container section">
        <div className="section-label" style={{ marginBottom: 8 }}>Shop</div>
        <h1 className="h-lg" style={{ marginBottom: 32 }}>All Products</h1>
        <div className="shop-layout">
          <aside className="filter-sidebar">
            <div className="h-sm" style={{ marginBottom: 24 }}>Filters</div>
            {FILTERS.map(([group, options]) => (
              <div key={group} className="filter-group">
                <div className="filter-group-title">{group}</div>
                {options.map((option) => (
                  <div key={option} className="filter-opt">
                    <input type="checkbox" style={{ accentColor: 'var(--brand)' }} />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            ))}
          </aside>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
              <div className="search-bar" style={{ flex: 1, maxWidth: 380 }}>
                <span style={{ color: 'var(--text3)', fontSize: 16 }}>🔍</span>
                <input
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 13, color: 'var(--text2)' }}>{filtered.length} products</span>
                <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="featured">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviews</option>
                </select>
              </div>
            </div>
            <div className="shop-product-grid">
              {filtered.map((product) => <ProductCard key={product.id} p={product} />)}
            </div>
            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '80px 24px' }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>🔍</div>
                <div className="h-sm" style={{ marginBottom: 8 }}>No products found</div>
                <p className="text-muted">Try a different search term</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
