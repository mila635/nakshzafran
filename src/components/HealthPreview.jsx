export default function HealthPreview({ showPage }) {
  return (
    <section style={{
      background: '#12100A',
      borderTop: '1px solid rgba(198,167,94,0.08)',
      borderBottom: '1px solid rgba(198,167,94,0.08)',
    }}>
      <div className="section-inner">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <p className="label" style={{ marginBottom: '20px' }}>Ancient Wisdom · Modern Science</p>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', marginBottom: '24px', fontFamily: "'Cormorant Garamond', serif" }}>
              The Golden<br /><em style={{ color: '#C6A75E' }}>Healer</em>
            </h2>
            <p style={{ color: 'rgba(237,232,220,0.65)', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
              For centuries, hakims and physicians prescribed saffron for everything from melancholy to inflammation. Modern science now validates what our ancestors knew — saffron is among nature's most potent medicines.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'rgba(237,232,220,0.65)', fontSize: '14px' }}>
                <span style={{ color: '#C6A75E', marginTop: '2px' }}>✦</span>
                <span>Clinically proven to reduce depression symptoms comparably to antidepressants</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'rgba(237,232,220,0.65)', fontSize: '14px' }}>
                <span style={{ color: '#C6A75E', marginTop: '2px' }}>✦</span>
                <span>Rich in antioxidants — crocin, crocetin, safranal — fighting cellular damage</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'rgba(237,232,220,0.65)', fontSize: '14px' }}>
                <span style={{ color: '#C6A75E', marginTop: '2px' }}>✦</span>
                <span>Supports heart health, vision, memory, and metabolic function</span>
              </li>
            </ul>
            <button className="btn-gold" onClick={() => showPage('health')}>Explore All Benefits →</button>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1614977645540-7abd3e2b3e97?w=800&q=80"
              alt="Saffron health benefits"
              style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', border: '1px solid rgba(198,167,94,0.2)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
