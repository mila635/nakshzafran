export default function StorySection({ showPage }) {
  return (
    <section style={{ padding: 0, position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.25)' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1400px', margin: '0 auto', padding: '100px 24px' }}>
        <div style={{ maxWidth: '600px' }}>
          <p className="label" style={{ marginBottom: '20px' }}>A Legacy in Crimson</p>
          <h2 style={{
            fontSize: 'clamp(40px, 5vw, 64px)',
            color: '#fff',
            marginBottom: '28px',
            lineHeight: 1,
            fontFamily: "'Cormorant Garamond', serif",
          }}>
            170 Years of<br /><em style={{ color: '#C6A75E' }}>Uncompromised</em><br />Mastery
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px', lineHeight: 1.8, marginBottom: '40px' }}>
            Since 1850, our artisan family has harvested the finest crocus sativus before the first light touches the valley floor. Not a single thread ever mechanized. Not a single harvest ever compromised.
          </p>
          <button className="btn-gold" onClick={() => showPage('about')}>Read the Heritage →</button>
        </div>
      </div>
    </section>
  );
}
