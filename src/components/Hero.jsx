export default function Hero({ showPage }) {
  return (
    <section style={{
      height: '100vh',
      minHeight: '700px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: '#000',
      padding: 0,
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=80") center/cover no-repeat',
        filter: 'brightness(0.4) saturate(1.2)',
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '1000px', padding: '0 24px' }}>
        <span style={{
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '8px',
          textTransform: 'uppercase',
          color: '#C6A75E',
          marginBottom: '40px',
          display: 'block',
          animation: 'fadeUp 1s ease 0.1s forwards',
          opacity: 0,
        }}>
          The Imperial Standard · Est. 1850
        </span>

        <h1 style={{
          fontSize: 'clamp(56px, 9vw, 120px)',
          color: '#fff',
          marginBottom: '24px',
          fontFamily: "'Cormorant Garamond', serif",
          animation: 'fadeUp 1.2s cubic-bezier(0.16,1,0.3,1) 0.3s forwards',
          opacity: 0,
        }}>
          زعفران<br /><span style={{ color: '#C6A75E', fontStyle: 'italic' }}>Naksh Zafran</span>
        </h1>

        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: 'rgba(255,255,255,0.8)',
          lineHeight: 1.8,
          maxWidth: '600px',
          margin: '0 auto 56px',
          fontStyle: 'italic',
          animation: 'fadeUp 1s ease 0.6s forwards',
          opacity: 0,
        }}>
          Pakistan's finest Super Negin saffron — hand-harvested at dawn from the ancient valleys of Kashmir, certified pure by ISO 3632 Grade I standards.
        </p>

        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'fadeUp 1s ease 0.9s forwards',
          opacity: 0,
        }}>
          <button className="btn-gold" onClick={() => showPage('shop')}>Explore Collection →</button>
          <button className="btn-outline" onClick={() => showPage('about')} style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Our Heritage</button>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        color: 'rgba(255,255,255,0.5)',
        fontSize: '9px',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        zIndex: 2,
        animation: 'bounce 2s ease-in-out infinite',
      }}>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="1" width="14" height="22" rx="7" />
          <circle cx="8" cy="8" r="2" fill="currentColor" />
        </svg>
        Scroll
      </div>
    </section>
  );
}
