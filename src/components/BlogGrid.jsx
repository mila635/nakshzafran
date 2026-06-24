export default function BlogGrid({ blogPosts, showBlog, showPage }) {
  return (
    <section style={{ background: '#12100A', borderTop: '1px solid rgba(198,167,94,0.08)' }}>
      <div className="section-inner">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <p className="label">The Journal</p>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 48px)', marginTop: '12px', fontFamily: "'Cormorant Garamond', serif" }}>
              Stories &<br /><em style={{ color: '#C6A75E' }}>Wisdom</em>
            </h2>
          </div>
          <button className="btn-outline" onClick={() => showPage('blog')}>All Articles →</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '2px' }}>
          {blogPosts.map((post, i) => (
            <div
              key={post.id}
              onClick={() => showBlog(post)}
              style={{
                background: 'rgba(28,24,16,0.9)',
                border: '1px solid rgba(198,167,94,0.08)',
                cursor: 'pointer',
                transition: 'border-color 0.4s',
              }}
            >
              <div style={{ overflow: 'hidden', aspectRatio: '16/9' }}>
                <img src={post.image} alt={post.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '32px' }}>
                <span style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C6A75E', marginBottom: '12px', display: 'block' }}>{post.category}</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', lineHeight: 1.2, marginBottom: '12px', color: '#EDE8DC' }}>{post.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(237,232,220,0.65)', lineHeight: 1.7, marginBottom: '20px' }}>{post.excerpt.substring(0, 100)}...</p>
                <div style={{ fontSize: '10px', letterSpacing: '1px', color: 'rgba(237,232,220,0.65)', display: 'flex', gap: '20px' }}>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
