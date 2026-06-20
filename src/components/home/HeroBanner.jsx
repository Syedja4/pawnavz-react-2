import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Home page banner slider.
 *
 * Each slide currently uses a brand-tinted gradient as its background. To use a
 * real banner image later, set `image` to its path (e.g. '/banners/1.jpg') —
 * it will be used as the slide background with no other change needed.
 */
const BANNERS = [
  { id: 1, eyebrow: 'Premium Nutrition', title: 'Top Pet Food Brands', subtitle: 'Royal Canin, Farmina, Drools & more — up to 30% off.', cta: 'Shop Now', link: '/shop', emoji: '🍖', gradient: 'linear-gradient(135deg,#FF7A00,#FF9E44)', image: '' },
  { id: 2, eyebrow: 'New Arrivals', title: 'Puppy & Kitten Starters', subtitle: 'Everything your new family member needs to grow strong.', cta: 'Explore', link: '/shop?category=Puppy%20Food', emoji: '🐶', gradient: 'linear-gradient(135deg,#6C5CE7,#9B59B6)', image: '' },
  { id: 3, eyebrow: 'Treats & Rewards', title: 'Treats They’ll Love', subtitle: 'Dental sticks, chews and training rewards for happy pets.', cta: 'Shop Treats', link: '/shop?category=Dog%20Treats', emoji: '🍪', gradient: 'linear-gradient(135deg,#00B894,#26D0A0)', image: '' },
  { id: 4, eyebrow: 'For Cats', title: 'Purr-fect Cat Meals', subtitle: 'Whiskas, Sheba & Me-O — dry food, gravy and wet pouches.', cta: 'Shop Cat Food', link: '/shop?category=Cat%20Dry%20Food', emoji: '🐱', gradient: 'linear-gradient(135deg,#0984E3,#64C8FF)', image: '' },
  { id: 5, eyebrow: 'Free Delivery', title: 'Free Shipping Over ₹499', subtitle: 'Fast, reliable delivery to your doorstep across India.', cta: 'Start Shopping', link: '/shop', emoji: '🚚', gradient: 'linear-gradient(135deg,#E17055,#FF7A00)', image: '' },
]

const AUTOPLAY_MS = 4500

export default function HeroBanner() {
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((next) => {
    setIndex((next + BANNERS.length) % BANNERS.length)
  }, [])

  useEffect(() => {
    if (paused) return undefined

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % BANNERS.length)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(id)
  }, [paused])

  return (
    <div
      className="hero-banner"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hb-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {BANNERS.map((banner) => (
          <div
            key={banner.id}
            className="hb-slide"
            style={banner.image
              ? { backgroundImage: `linear-gradient(135deg,rgba(0,0,0,.45),rgba(0,0,0,.15)), url(${banner.image})` }
              : { backgroundImage: banner.gradient }}
          >
            <div className="hb-inner">
              <div className="hb-content">
                <span className="hb-eyebrow">{banner.eyebrow}</span>
                <h2 className="hb-title">{banner.title}</h2>
                <p className="hb-subtitle">{banner.subtitle}</p>
                <button className="hb-cta" onClick={() => navigate(banner.link)}>{banner.cta} {'→'}</button>
              </div>
              <div className="hb-emoji" aria-hidden="true">{banner.emoji}</div>
            </div>
          </div>
        ))}
      </div>

      <button className="hb-arrow hb-arrow-prev" onClick={() => goTo(index - 1)} aria-label="Previous banner">{'‹'}</button>
      <button className="hb-arrow hb-arrow-next" onClick={() => goTo(index + 1)} aria-label="Next banner">{'›'}</button>

      <div className="hb-dots">
        {BANNERS.map((banner, i) => (
          <button
            key={banner.id}
            className={`hb-dot${i === index ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to banner ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
