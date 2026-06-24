export default function AboutPage({ timeline }) {
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.35)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0A0806 0%, transparent 50%)' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', marginTop: '80px' }}>
          <p className="label">Since 1850</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(48px, 7vw, 90px)', color: '#fff', marginTop: '16px' }}>Our Heritage</h1>
        </div>
      </div>

      <section>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center', marginBottom: '120px' }}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1614977645540-7abd3e2b3e97?w=900&q=80"
                alt=""
                style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', border: '1px solid rgba(198,167,94,0.2)' }}
              />
            </div>
            <div>
              <p className="label" style={{ marginBottom: '20px' }}>The Mirzaei Legacy</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4vw, 56px)', marginBottom: '28px', color: '#EDE8DC' }}>
                A Family Dedicated<br />to <em style={{ color: '#C6A75E' }}>Purity</em>
              </h2>
              <p style={{ color: 'rgba(237,232,220,0.65)', fontSize: '16px', lineHeight: 1.9, marginBottom: '24px' }}>
                In 1850, Hakim Abdul Rehman Mirzaei first planted crocus sativus in the fertile soils of the Kashmir valley. He discovered that harvesting before the break of full dawn — in the brief window between the third prayer and sunrise — produced threads of exceptional color and potency.
              </p>
              <p style={{ color: 'rgba(237,232,220,0.65)', fontSize: '16px', lineHeight: 1.9, marginBottom: '24px' }}>
                This discovery, passed through six generations, is the secret protocol behind every package of Naksh Zafran. No machine has ever touched our stigmas. No artificial color has ever graced our packaging.
              </p>
              <p style={{ color: 'rgba(237,232,220,0.65)', fontSize: '16px', lineHeight: 1.9, fontStyle: 'italic' }}>
                Today, the sixth generation of the Mirzaei family continues the tradition — bringing the finest saffron directly to Pakistani homes, with the same unwavering commitment to excellence that began 170 years ago.
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '120px' }}>
            <div className="section-header">
              <p className="label">Our Journey</p>
              <h2>A Story Through Time</h2>
            </div>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              {timeline.map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '60px', marginBottom: '80px', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
                  <div style={{ flex: 1, textAlign: i % 2 === 0 ? 'left' : 'right' }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', color: '#C6A75E', lineHeight: 1, marginBottom: '8px' }}>{t.year}</div>
                    <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(237,232,220,0.65)', marginBottom: '12px' }}>{t.title}</div>
                    <div style={{ fontSize: '15px', color: 'rgba(237,232,220,0.65)', lineHeight: 1.7 }}>{t.desc}</div>
                  </div>
                  <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#C6A75E', flexShrink: 0, boxShadow: '0 0 20px rgba(198,167,94,0.5)' }}></div>
                  <div style={{ flex: 1 }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
