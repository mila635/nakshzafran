export default function Footer({ showPage }) {
  return (
    <footer style={{
      background: '#12100A',
      padding: '80px 24px 40px',
      borderTop: '1px solid rgba(198,167,94,0.08)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '60px' }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 700, color: '#C6A75E', letterSpacing: '6px' }}>
              NAKSH ZAFRAN
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(237,232,220,0.65)', lineHeight: 1.8, marginTop: '20px', maxWidth: '300px' }}>
              Pakistan's finest imperial saffron since 1850. Hand-harvested Super Negin threads, ISO certified, delivered to your door.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#C6A75E', marginBottom: '28px' }}>Shop</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('shop'); }} style={{ color: 'rgba(237,232,220,0.65)', textDecoration: 'none', fontSize: '13px' }}>All Products</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('shop'); }} style={{ color: 'rgba(237,232,220,0.65)', textDecoration: 'none', fontSize: '13px' }}>Pure Saffron</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('shop'); }} style={{ color: 'rgba(237,232,220,0.65)', textDecoration: 'none', fontSize: '13px' }}>Gift Sets</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#C6A75E', marginBottom: '28px' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('about'); }} style={{ color: 'rgba(237,232,220,0.65)', textDecoration: 'none', fontSize: '13px' }}>Our Story</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('health'); }} style={{ color: 'rgba(237,232,220,0.65)', textDecoration: 'none', fontSize: '13px' }}>Health Benefits</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('faq'); }} style={{ color: 'rgba(237,232,220,0.65)', textDecoration: 'none', fontSize: '13px' }}>FAQ</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('contact'); }} style={{ color: 'rgba(237,232,220,0.65)', textDecoration: 'none', fontSize: '13px' }}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#C6A75E', marginBottom: '28px' }}>Contact</h4>
            <p style={{ fontSize: '13px', color: 'rgba(237,232,220,0.65)', lineHeight: 1.8 }}>
              WhatsApp: 0300-1234567<br />
              orders@naksh-zafran.com<br />
              Lahore, Pakistan
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(198,167,94,0.08)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ fontSize: '12px', color: 'rgba(237,232,220,0.65)' }}>© 2026 Naksh Zafran. All rights reserved.</p>
          <p style={{ fontSize: '11px', color: 'rgba(237,232,220,0.65)' }}>Payment via EasyPaisa · JazzCash · Bank Transfer · Cash on Delivery</p>
        </div>
      </div>
    </footer>
  );
}
