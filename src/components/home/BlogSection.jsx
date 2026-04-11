import React from 'react'
import { BLOG_SUMMARIES } from '../../data/blogs'

const HOME_BLOGS = BLOG_SUMMARIES.slice(0, 3)

export default function BlogSection({ navigate }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div><div className="section-label">Blog</div><h2 className="h-lg">Pet Care Knowledge Hub</h2></div>
          <button className="btn btn-ghost" onClick={() => navigate('/blog')}>View All {'\u2192'}</button>
        </div>
        <div className="grid-3">
          {HOME_BLOGS.map((blog) => (
            <div key={blog.id} className="blog-card" onClick={() => navigate(`/blog/${blog.id}`)}>
              <div className="bc-img">{blog.emoji}</div>
              <div className="bc-body">
                <div className="bc-cat">{blog.category}</div>
                <div className="bc-title">{blog.title}</div>
                <div className="bc-meta">
                  <span>{blog.date}</span><span>{'\u00B7'}</span><span>{blog.readTime}</span>
                  <span style={{ marginLeft: 'auto', color: 'var(--brand)', fontWeight: 600 }}>Read {'\u2192'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
