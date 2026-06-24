export default function ProductGrid({ products, formatPrice, showProduct, addToCart, showPage }) {
  return (
    <section style={{ padding: '100px 24px' }}>
      <div className="section-inner">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <p className="label">The Collection</p>
            <h2 style={{ fontSize: 'clamp(40px, 5vw, 56px)', marginTop: '12px', fontFamily: "'Cormorant Garamond', serif" }}>
              Imperial<br /><em style={{ color: '#C6A75E' }}>Treasures</em>
            </h2>
          </div>
          <button className="btn-outline" onClick={() => showPage('shop')}>View All →</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2px' }}>
          {products.map(p => (
            <div
              key={p.id}
              className="product-card"
              onClick={() => showProduct(p)}
              style={{
                background: 'rgba(28,24,16,0.9)',
                border: '1px solid rgba(198,167,94,0.08)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'border-color 0.4s',
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
                <img src={p.image} alt={p.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {p.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: '#C6A75E',
                    color: '#000',
                    padding: '6px 14px',
                    fontSize: '9px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}>
                    {p.badge}
                  </div>
                )}
              </div>
              <div style={{ padding: '28px 24px 24px' }}>
                <span style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C6A75E' }}>{p.weight}</span>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', marginTop: '10px', color: '#EDE8DC' }}>{p.name}</div>
                <div style={{ fontSize: '18px', color: 'rgba(237,232,220,0.65)', fontStyle: 'italic' }}>{p.nameUr}</div>
                <p style={{ fontSize: '13px', color: 'rgba(237,232,220,0.65)', lineHeight: 1.6, marginTop: '12px' }}>{p.desc.substring(0, 80)}...</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px 24px' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#C6A75E' }}>{formatPrice(p.price)}</div>
                <button
                  className="btn-outline"
                  onClick={(e) => { e.stopPropagation(); addToCart(p); }}
                  style={{ padding: '12px 20px', fontSize: '9px' }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
