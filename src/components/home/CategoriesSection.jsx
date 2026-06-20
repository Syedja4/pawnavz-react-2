import React from 'react'
import { mockCategories } from '../../data/api'

export default function CategoriesSection({ navigate }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-label">Shop By Category</div>
          <h2 className="h-lg">Find the Right Food</h2>
          <p className="text-muted" style={{ maxWidth: 480, margin: '12px auto 0' }}>From puppy kibble to senior cat meals — browse by exactly what your pet needs.</p>
        </div>
        <div className="cat-grid">
          {mockCategories.map((category) => (
            <div key={category.id} className="offer-card" onClick={() => navigate(`/shop?category=${encodeURIComponent(category.name)}`)}>
              <div className="offer-img">
                <span className="offer-emoji" aria-hidden="true">{category.icon}</span>
                <span className="offer-badge">{category.petType}</span>
              </div>
              <div className="offer-name">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
