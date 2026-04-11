import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BLOG_SUMMARIES } from '../data/blogs'

const CATEGORIES = ['All', 'Pet Health', 'Pet Nutrition', 'Pet Training', 'Pet Technology']
const FEATURED_BLOG = BLOG_SUMMARIES[0]

export default function BlogPage() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('All')
  const filtered = useMemo(
    () => (filter === 'All' ? BLOG_SUMMARIES : BLOG_SUMMARIES.filter((blog) => blog.category === filter)),
    [filter]
  )

  return (
    <div className="page">
      <div className="container section">
        <div className="section-label" style={{ marginBottom: 12 }}>Blog</div>
        <h1 className="h-xl" style={{ marginBottom: 16 }}>Pet Care<br /><span style={{ color: 'var(--brand)' }}>Knowledge Hub</span></h1>
        <p className="text-muted" style={{ fontSize: 17, maxWidth: 480, marginBottom: 40 }}>Expert advice from India's top vets and pet care specialists.</p>

        <div className="card" style={{ overflow: 'hidden', cursor: 'pointer', marginBottom: 40 }} onClick={() => navigate(`/blog/${FEATURED_BLOG.id}`)}>
          <div className="blog-featured-grid">
            <div style={{ background: 'linear-gradient(135deg,var(--brand-dim),rgba(255,68,0,.05))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 96 }}>{FEATURED_BLOG.emoji}</div>
            <div style={{ padding: 40 }}>
              <div className="badge badge-brand" style={{ marginBottom: 16 }}>Featured</div>
              <h2 className="h-md" style={{ marginBottom: 12 }}>{FEATURED_BLOG.title}</h2>
              <p className="text-muted" style={{ fontSize: 14, marginBottom: 20 }}>{FEATURED_BLOG.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--brand-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>👩</div>
                <span style={{ fontSize: 13, color: 'var(--text2)' }}>{FEATURED_BLOG.author} · {FEATURED_BLOG.date} · {FEATURED_BLOG.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
          {CATEGORIES.map((category) => (
            <button key={category} className={`btn btn-sm ${filter === category ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setFilter(category)}>{category}</button>
          ))}
        </div>

        <div className="grid-3">
          {filtered.map((blog) => (
            <div key={blog.id} className="blog-card" onClick={() => navigate(`/blog/${blog.id}`)}>
              <div className="bc-img">{blog.emoji}</div>
              <div className="bc-body">
                <div className="bc-cat">{blog.category}</div>
                <div className="bc-title">{blog.title}</div>
                <div className="bc-meta">
                  <span>{blog.author}</span><span>·</span><span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
