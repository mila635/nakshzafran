export default function CartSidebar({ cart, isOpen, toggleCart, removeFromCart, updateQty, formatPrice, openOrderModal }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <>
      <div
        onClick={toggleCart}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 3000,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(4px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      <div style={{
        position: 'fixed',
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 3001,
        width: 'min(480px, 100vw)',
        background: '#12100A',
        borderLeft: '1px solid rgba(198,167,94,0.2)',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ padding: '32px', borderBottom: '1px solid rgba(198,167,94,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#EDE8DC' }}>Your Selection</h3>
          <button onClick={toggleCart} style={{ background: 'none', border: 'none', color: '#EDE8DC', cursor: 'pointer', fontSize: '22px' }}>×</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(237,232,220,0.65)' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ opacity: 0.3, marginBottom: '16px' }}>
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', color: '#EDE8DC' }}>Your collection is empty</p>
              <p style={{ fontSize: '13px', marginTop: '8px' }}>Explore our imperial treasures</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: '16px', padding: '20px 0', borderBottom: '1px solid rgba(198,167,94,0.08)' }}>
                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', border: '1px solid rgba(198,167,94,0.08)' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#EDE8DC' }}>{item.name}</div>
                  <div style={{ fontSize: '11px', color: '#C6A75E', letterSpacing: '1px' }}>{item.weight}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', color: '#C6A75E', marginTop: '8px' }}>{formatPrice(item.price * item.qty)}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid rgba(198,167,94,0.2)', padding: '6px 12px', marginTop: '12px', width: 'fit-content' }}>
                    <button onClick={() => updateQty(item.id, -1)} style={{ background: 'none', border: 'none', color: '#EDE8DC', cursor: 'pointer', fontSize: '16px' }}>−</button>
                    <span style={{ fontSize: '13px', fontWeight: 700 }}>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} style={{ background: 'none', border: 'none', color: '#EDE8DC', cursor: 'pointer', fontSize: '16px' }}>+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: 'rgba(237,232,220,0.65)', cursor: 'pointer', fontSize: '18px', alignSelf: 'flex-start' }}>×</button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div style={{ padding: '28px 32px', borderTop: '1px solid rgba(198,167,94,0.08)', background: '#1C1810' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '14px' }}>
              <span style={{ color: 'rgba(237,232,220,0.65)' }}>Total</span>
              <strong style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: '#C6A75E' }}>{formatPrice(total)}</strong>
            </div>
            <p style={{ fontSize: '11px', color: 'rgba(237,232,220,0.65)', marginBottom: '20px' }}>Free delivery above Rs. 2,000. WhatsApp orders accepted 24/7.</p>
            <button className="btn-gold" style={{ width: '100%', justifyContent: 'center', padding: '18px', fontSize: '11px' }} onClick={openOrderModal}>
              Proceed to Order
            </button>
          </div>
        )}
      </div>
    </>
  );
}
