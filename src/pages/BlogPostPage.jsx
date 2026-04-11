import React, { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BLOG_SUMMARIES, getBlogById } from '../data/blogs'

export default function BlogPostPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const blogId = useMemo(() => Number.parseInt(id, 10), [id])
  const blog = useMemo(() => getBlogById(blogId), [blogId])

  if (!blog) {
    return (
      <div className="page">
        <div className="container section" style={{ textAlign: 'center' }}>
          <h2 className="h-md" style={{ marginBottom: 12 }}>Post not found</h2>
          <button className="btn btn-primary" onClick={() => navigate('/blog')}>Back to Blog</button>
        </div>
      </div>
    )
  }

  const related = useMemo(
    () => BLOG_SUMMARIES.filter((entry) => entry.id !== blog.id).slice(0, 3),
    [blog.id]
  )

  return (
    <div className="page">
      <div className="container section">
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          <div style={{ fontSize: 13, color: 'var(--text3)', marginBottom: 28, display: 'flex', gap: 8 }}>
            <span style={{ cursor: 'pointer', color: 'var(--text2)' }} onClick={() => navigate('/')}>Home</span> /
            <span style={{ cursor: 'pointer', color: 'var(--text2)' }} onClick={() => navigate('/blog')}>Blog</span> /
            <span style={{ color: 'var(--brand)' }}>{blog.category}</span>
          </div>
          <span className="badge badge-brand" style={{ marginBottom: 16 }}>{blog.category}</span>
          <h1 className="h-lg" style={{ marginBottom: 20 }}>{blog.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>👩</div>
            <div>
              <div style={{ fontFamily: 'var(--font-d)', fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{blog.author}</div>
              <div style={{ fontSize: 12, color: 'var(--text3)' }}>{blog.date} · {blog.readTime} read</div>
            </div>
          </div>
          <div style={{ height: 280, background: 'linear-gradient(135deg,var(--brand-dim),var(--surface2))', borderRadius: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 96, marginBottom: 36 }}>{blog.emoji}</div>
          <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: blog.content }} />
          <div className="shimmer-line" />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-d)', fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Share:</span>
            {['𝕏 Twitter', 'f Facebook', '🔗 Copy Link'].map((label) => (
              <button key={label} className="btn btn-ghost btn-sm">{label}</button>
            ))}
          </div>
        </div>

        <h2 className="h-md" style={{ marginBottom: 24 }}>Related Articles</h2>
        <div className="grid-3">
          {related.map((entry) => (
            <div key={entry.id} className="blog-card" onClick={() => navigate(`/blog/${entry.id}`)}>
              <div className="bc-img" style={{ background: 'var(--surface2)' }}>{entry.emoji}</div>
              <div className="bc-body">
                <div className="bc-cat">{entry.category}</div>
                <div className="bc-title">{entry.title}</div>
                <div className="bc-meta"><span>{entry.readTime}</span><span style={{ marginLeft: 'auto', color: 'var(--brand)' }}>Read →</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
