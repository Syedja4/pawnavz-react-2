import React from 'react'
import { mockBrands } from '../../data/api'

export default function BrandsSection({ navigate }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-label">Top Brands</div>
          <h2 className="h-lg">Shop By Brand</h2>
          <p className="text-muted" style={{ maxWidth: 480, margin: '12px auto 0' }}>The pet-food brands India trusts — from everyday favourites to premium imports.</p>
        </div>
        <div className="cat-grid">
          {mockBrands.map((brand) => (
            <div key={brand.id} className="offer-card" onClick={() => navigate(`/shop?brand=${encodeURIComponent(brand.name)}`)}>
              <div className="offer-img">
                <span className="offer-emoji" aria-hidden="true">{brand.logo}</span>
                <span className="offer-badge">{brand.petTypes.join(' · ')}</span>
              </div>
              <div className="offer-name">{brand.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
