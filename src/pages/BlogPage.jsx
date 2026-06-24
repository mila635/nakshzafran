export default function BlogPage({ blogPosts, showBlog }) {
  return (
    <>
      <div style={{
        height: '65vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.35)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0A0806 0%, transparent 50%)' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', marginTop: '80px' }}>
          <p className="label">Stories & Wisdom</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(48px, 7vw, 90px)', color: '#fff', marginTop: '16px' }}>The Journal</h1>
        </div>
      </div>

      <section>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '2px' }}>
            {blogPosts.map((post) => (
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
    </>
  );
}
