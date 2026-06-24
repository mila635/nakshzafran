import { useState } from 'react';

export default function FAQPage({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <div style={{
        height: '50vh',
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
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', marginTop: '130px' }}>
          <p className="label">Common Questions</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(48px, 7vw, 90px)', color: '#fff', marginTop: '16px' }}>FAQ</h1>
        </div>
      </div>

      <section>
        <div className="section-inner">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(198,167,94,0.08)' }}>
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  style={{
                    width: '100%',
                    padding: '20px 0',
                    background: 'none',
                    border: 'none',
                    color: '#EDE8DC',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    textAlign: 'left',
                  }}
                >
                  {faq.q}
                  <span style={{ transform: activeIndex === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>▼</span>
                </button>
                {activeIndex === i && (
                  <div style={{ color: 'rgba(237,232,220,0.65)', lineHeight: 1.8, fontSize: '15px', paddingBottom: '20px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
