import React from 'react'
import { PRODUCTS } from '../../data/products'
import ProductCard from '../ProductCard'

const FEATURED_PRODUCTS = PRODUCTS.slice(0, 8)

export default function ProductGridSection({ navigate }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div><div className="section-label">Trending Now</div><h2 className="h-lg">Popular Products</h2></div>
          <button className="btn btn-ghost" onClick={() => navigate('/shop')}>View All {'\u2192'}</button>
        </div>
        <div className="product-grid">{FEATURED_PRODUCTS.map((product) => <ProductCard key={product.id} p={product} />)}</div>
      </div>
    </section>
  )
}
