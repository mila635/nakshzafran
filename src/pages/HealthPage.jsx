export default function HealthPage({ healthBenefits }) {
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1614977645540-7abd3e2b3e97?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.35)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0A0806 0%, transparent 50%)' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', marginTop: '130px' }}>
          <p className="label">Ancient Remedy · Modern Science</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(48px, 7vw, 90px)', color: '#fff', marginTop: '16px' }}>Health Benefits of Saffron</h1>
        </div>
      </div>

      <section>
        <div className="section-inner">
          <div style={{ maxWidth: '800px', margin: '0 auto 80px', textAlign: 'center' }}>
            <p style={{ fontSize: '18px', color: 'rgba(237,232,220,0.65)', lineHeight: 1.9 }}>
              For over 3,500 years, saffron has been called the "Sunshine Spice" in Unani and Ayurvedic medicine. Modern clinical research now confirms what traditional healers knew — saffron is among the most bioactive medicinal plants on Earth.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '32px' }}>
            {healthBenefits.map((h, i) => (
              <div key={i} style={{ padding: '40px', border: '1px solid rgba(198,167,94,0.08)', background: '#12100A', display: 'flex', gap: '24px' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '64px', color: '#C6A75E', opacity: 0.3, lineHeight: 0.8, flexShrink: 0 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', marginBottom: '10px', color: '#EDE8DC' }}>{h.icon} {h.title}</h4>
                  <p style={{ fontSize: '13px', color: 'rgba(237,232,220,0.65)', lineHeight: 1.7 }}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '100px', padding: '60px', border: '1px solid rgba(198,167,94,0.2)', background: '#12100A' }}>
            <div className="section-header">
              <p className="label">Research & Evidence</p>
              <h2 style={{ marginTop: '12px' }}>Backed by Science</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginTop: '48px' }}>
              <div style={{ padding: '32px', border: '1px solid rgba(198,167,94,0.08)' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', color: '#C6A75E', marginBottom: '8px' }}>30mg</p>
                <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(237,232,220,0.65)' }}>Daily dose proven effective for mild-to-moderate depression</p>
              </div>
              <div style={{ padding: '32px', border: '1px solid rgba(198,167,94,0.08)' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', color: '#C6A75E', marginBottom: '8px' }}>6 wks</p>
                <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(237,232,220,0.65)' }}>Average duration for measurable effects</p>
              </div>
              <div style={{ padding: '32px', border: '1px solid rgba(198,167,94,0.08)' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', color: '#C6A75E', marginBottom: '8px' }}>40+</p>
                <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(237,232,220,0.65)' }}>Peer-reviewed clinical studies published</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
