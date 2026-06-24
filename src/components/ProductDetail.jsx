import { useState } from 'react';

export default function ProductDetail({ product, formatPrice, addToCart, openOrderModal, showPage }) {
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!product) return null;

  return (
    <div style={{ paddingTop: '130px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 32px 16px' }}>
        <button onClick={() => showPage('shop')} style={{ background: 'none', border: 'none', color: '#C6A75E', cursor: 'pointer', fontSize: '14px', marginBottom: '60px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          ← Back to Shop
        </button>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px 100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px' }}>
        <div>
          <div style={{ border: '1px solid rgba(198,167,94,0.2)', aspectRatio: '1', overflow: 'hidden' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        <div>
          <span className="label">{product.weight} · {product.badge || 'Premium Grade'}</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1, marginTop: '16px', color: '#EDE8DC' }}>{product.name}</h1>
          <div style={{ fontSize: '22px', color: 'rgba(237,232,220,0.65)', fontStyle: 'italic', marginTop: '8px' }}>{product.nameUr}</div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', color: '#C6A75E', marginTop: '32px' }}>{formatPrice(product.price)}</div>

          <p style={{ fontSize: '16px', color: 'rgba(237,232,220,0.65)', lineHeight: 1.9, marginTop: '32px', borderLeft: '2px solid #C6A75E', paddingLeft: '24px', fontStyle: 'italic' }}>
            {product.desc}
          </p>

          {product.specs && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '48px' }}>
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} style={{ padding: '20px', border: '1px solid rgba(198,167,94,0.08)' }}>
                  <div style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C6A75E', marginBottom: '6px' }}>{key}</div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#EDE8DC' }}>{value}</div>
                </div>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', gap: '16px', marginTop: '48px', flexWrap: 'wrap' }}>
            <button className="btn-gold" onClick={() => { addToCart(product); openOrderModal(); }} style={{ flex: 2, justifyContent: 'center', padding: '20px' }}>Buy Now →</button>
            <button className="btn-outline" onClick={() => addToCart(product)} style={{ flex: 1, justifyContent: 'center', padding: '20px' }}>Add to Cart</button>
          </div>

          {product.accordion && (
            <div style={{ marginTop: '48px' }}>
              {product.accordion.map((item, i) => (
                <div key={i} style={{ borderBottom: '1px solid rgba(198,167,94,0.08)' }}>
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
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
                    }}
                  >
                    {item.title}
                    <span style={{ transform: activeAccordion === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>▼</span>
                  </button>
                  {activeAccordion === i && (
                    <div style={{ color: 'rgba(237,232,220,0.65)', lineHeight: 1.8, fontSize: '15px', paddingBottom: '20px' }}>
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
