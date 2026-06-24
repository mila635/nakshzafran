import { useState } from 'react';

export default function ShopPage({ products, formatPrice, showProduct, addToCart, currentFilter, setCurrentFilter }) {
  const [search, setSearch] = useState('');
  const [localFilter, setLocalFilter] = useState(currentFilter);

  const filters = ['all', 'pure', 'honey', 'tea', 'gift'];

  const filteredProducts = products.filter(p => {
    const matchCat = localFilter === 'all' || p.category === localFilter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.nameUr.includes(search) || p.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleFilter = (filter) => {
    setLocalFilter(filter);
    setCurrentFilter(filter);
  };

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
          backgroundImage: 'url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.35)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0A0806 0%, transparent 50%)' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', marginTop: '80px' }}>
          <p className="label">The Imperial Vault</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(48px, 7vw, 90px)', color: '#fff', marginTop: '16px' }}>Our Collection</h1>
        </div>
      </div>

      <section>
        <div className="section-inner">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '56px', flexWrap: 'wrap', gap: '24px', borderBottom: '1px solid rgba(198,167,94,0.08)', paddingBottom: '32px' }}>
            <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap' }}>
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => handleFilter(f)}
                  style={{
                    background: localFilter === f ? '#C6A75E' : 'none',
                    color: localFilter === f ? '#000' : 'rgba(237,232,220,0.65)',
                    border: 'none',
                    padding: '6px 10px',
                    fontSize: '9px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                >
                  {f === 'all' ? 'All' : f === 'pure' ? 'Pure Threads' : f === 'honey' ? 'Saffron Honey' : f === 'tea' ? 'Kesar Tea' : 'Gift Sets'}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid rgba(198,167,94,0.2)', padding: '12px 20px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6A75E" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ background: 'none', border: 'none', color: '#EDE8DC', outline: 'none', fontSize: '13px', minWidth: '200px' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2px' }}>
            {filteredProducts.map(p => (
              <div
                key={p.id}
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
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px 24px' }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#C6A75E' }}>{formatPrice(p.price)}</div>
                  <button className="btn-outline" onClick={(e) => { e.stopPropagation(); addToCart(p); }} style={{ padding: '12px 20px', fontSize: '9px' }}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px', color: 'rgba(237,232,220,0.65)' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', marginBottom: '12px', color: '#EDE8DC' }}>No products found</p>
              <p style={{ fontSize: '13px' }}>Try a different filter or search term</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
