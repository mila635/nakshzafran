export default function BlogDetail({ post, showPage }) {
  if (!post) return null;

  return (
    <div style={{ paddingTop: '88px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px 120px' }}>
        <button onClick={() => showPage('blog')} style={{ background: 'none', border: 'none', color: '#C6A75E', cursor: 'pointer', marginBottom: '60px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          ← Back to Journal
        </button>

        <span style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C6A75E', fontWeight: 700 }}>{post.category} · {post.date} · {post.readTime}</span>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.1, margin: '24px 0 32px', color: '#EDE8DC' }}>{post.title}</h1>

        <img
          src={post.image}
          alt={post.title}
          style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', border: '1px solid rgba(198,167,94,0.2)', marginBottom: '48px', display: 'block' }}
        />

        <div
          style={{ fontSize: '17px', color: 'rgba(237,232,220,0.65)', lineHeight: 1.9 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div style={{ marginTop: '64px', padding: '40px', border: '1px solid rgba(198,167,94,0.2)', background: '#12100A', textAlign: 'center' }}>
          <p className="label" style={{ marginBottom: '12px' }}>Experience the Difference</p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', marginBottom: '24px', color: '#EDE8DC' }}>Ready to try authentic Naksh Zafran?</p>
          <button className="btn-gold" onClick={() => showPage('shop')}>Shop the Collection →</button>
        </div>
      </div>
    </div>
  );
}
