import React, { useDeferredValue, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import ProductCard from '../components/ProductCard'
import Dropdown from '../components/Dropdown'
import { mockProducts } from '../data/api'

const PRICE_BUCKETS = {
  'Under ₹500': (price) => price < 500,
  '₹500–₹1,000': (price) => price >= 500 && price <= 1000,
  '₹1,000–₹2,000': (price) => price > 1000 && price <= 2000,
  'Above ₹2,000': (price) => price > 2000,
}

const SORT_OPTIONS = [
  { value: 'featured', label: 'Sort: Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'reviews', label: 'Most Reviews' },
]

const RATING_THRESHOLDS = {
  '4⭐ & above': 4,
  '3⭐ & above': 3,
  All: 0,
}

// Filter options derived from the data so they stay in sync with the catalogue.
const PET_TYPES = [...new Set(mockProducts.map((p) => p.petType))]
const FOOD_TYPES = [...new Set(mockProducts.map((p) => p.foodType))]
const LIFE_STAGES = [...new Set(mockProducts.map((p) => p.lifeStage))]
const BRAND_NAMES = [...new Set(mockProducts.map((p) => p.brand))].sort()

const FILTERS = [
  ['Pet Type', PET_TYPES],
  ['Food Type', FOOD_TYPES],
  ['Life Stage', LIFE_STAGES],
  ['Brand', BRAND_NAMES],
  ['Price Range', Object.keys(PRICE_BUCKETS)],
  ['Rating', Object.keys(RATING_THRESHOLDS)],
]

const MATCHERS = {
  'Pet Type': (product, selected) => selected.has(product.petType),
  'Food Type': (product, selected) => selected.has(product.foodType),
  'Life Stage': (product, selected) => selected.has(product.lifeStage),
  Brand: (product, selected) => selected.has(product.brand),
  'Price Range': (product, selected) =>
    [...selected].some((bucket) => PRICE_BUCKETS[bucket](product.price)),
  Rating: (product, selected) =>
    product.rating >= Math.min(...[...selected].map((label) => RATING_THRESHOLDS[label])),
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  const brandParam = searchParams.get('brand')

  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('featured')
  // One Set of selected options per filter group.
  const [selectedFilters, setSelectedFilters] = useState(() =>
    Object.fromEntries(FILTERS.map(([group]) => [group, new Set()]))
  )
  const deferredSearch = useDeferredValue(search)

  const toggleFilter = (group, option) => {
    setSelectedFilters((prev) => {
      const next = new Set(prev[group])

      if (next.has(option)) next.delete(option)
      else next.add(option)

      return { ...prev, [group]: next }
    })
  }

  const heading = categoryParam || brandParam || 'All Products'

  const filtered = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase()

    let result = mockProducts.filter((product) => {
      // Query-param constraints coming from the Home page cards.
      if (categoryParam && product.category !== categoryParam) return false
      if (brandParam && product.brand !== brandParam) return false

      // Free-text search.
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.petType.toLowerCase().includes(query)

      if (!matchesSearch) return false

      // Sidebar checkbox groups (a group with no selection imposes no filter).
      return FILTERS.every(([group]) => {
        const selected = selectedFilters[group]

        if (selected.size === 0) return true

        return MATCHERS[group](product, selected)
      })
    })

    if (sort === 'price-low') result = [...result].sort((a, b) => a.price - b.price)
    else if (sort === 'price-high') result = [...result].sort((a, b) => b.price - a.price)
    else if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating)
    else if (sort === 'reviews') result = [...result].sort((a, b) => b.reviews - a.reviews)

    return result
  }, [brandParam, categoryParam, deferredSearch, selectedFilters, sort])

  return (
    <div className="page">
      <div className="container section">
        <div className="section-label" style={{ marginBottom: 8 }}>Shop</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
          <h1 className="h-lg" style={{ margin: 0 }}>{heading}</h1>
          {(categoryParam || brandParam) && (
            <button className="btn btn-ghost" style={{ fontSize: 13, padding: '8px 16px' }} onClick={() => setSearchParams({})}>
              Clear {'✕'}
            </button>
          )}
        </div>
        <div className="shop-layout">
          <aside className="filter-sidebar">
            <div className="h-sm" style={{ marginBottom: 24 }}>Filters</div>
            {FILTERS.map(([group, options]) => (
              <div key={group} className="filter-group">
                <div className="filter-group-title">{group}</div>
                {options.map((option) => (
                  <div key={option} className="filter-opt">
                    <input
                      type="checkbox"
                      style={{ accentColor: 'var(--brand)' }}
                      checked={selectedFilters[group].has(option)}
                      onChange={() => toggleFilter(group, option)}
                    />
                    <label onClick={() => toggleFilter(group, option)} style={{ cursor: 'pointer' }}>{option}</label>
                  </div>
                ))}
              </div>
            ))}
          </aside>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
              <div className="search-bar" style={{ flex: 1, maxWidth: 380 }}>
                <FaSearch style={{ color: 'var(--text3)', fontSize: 15, flexShrink: 0 }} aria-hidden="true" />
                <input
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 13, color: 'var(--text2)' }}>{filtered.length} products</span>
                <Dropdown ariaLabel="Sort products" value={sort} onChange={setSort} options={SORT_OPTIONS} />
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
