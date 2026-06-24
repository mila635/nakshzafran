export default function ReviewsGrid({ reviews }) {
  return (
    <section>
      <div className="section-inner">
        <div className="section-header">
          <p className="label">Customer Voices</p>
          <h2>What Pakistan Says</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {reviews.slice(0, 3).map((r, i) => (
            <div key={i} style={{ padding: '36px', border: '1px solid rgba(198,167,94,0.08)', background: '#12100A' }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', color: '#C6A75E', fontSize: '14px' }}>
                {'★'.repeat(r.stars)}
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontStyle: 'italic', lineHeight: 1.6, color: '#EDE8DC', marginBottom: '24px' }}>
                "{r.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img src={r.img} alt={r.author} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(198,167,94,0.2)' }} />
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: '#EDE8DC' }}>{r.author}</div>
                  <div style={{ fontSize: '10px', color: '#C6A75E', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>{r.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
