import { useState, useEffect } from 'react';

export default function Header({ cartCount, toggleCart, showPage, currentLang, setCurrentLang, currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'about', label: 'Our Story' },
    { id: 'health', label: 'Health Benefits' },
    { id: 'blog', label: 'Journal' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      <style>{`
        .ann-track {
          display: inline-flex;
          gap: 120px;
          white-space: nowrap;
          animation: scrollAnn 30s linear infinite;
        }
        @keyframes scrollAnn {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .nav-link-item {
          color: rgba(237,232,220,0.7);
          text-decoration: none;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          transition: color 0.3s;
          position: relative;
          padding-bottom: 4px;
        }
        .nav-link-item:hover { color: #C6A75E; }
        .nav-link-item.active { color: #C6A75E; }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: #C6A75E;
          transform: scaleX(0);
          transition: transform 0.3s;
          transform-origin: left;
        }
        .nav-link-item.active::after,
        .nav-link-item:hover::after { transform: scaleX(1); }
        .lang-toggle-btn {
          background: none;
          color: rgba(237,232,220,0.65);
          border: none;
          padding: 6px 10px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
        }
        .lang-toggle-btn.active {
          background: #C6A75E;
          color: #000;
        }
        .cart-nav-btn {
          background: none;
          border: none;
          color: rgba(237,232,220,0.8);
          cursor: pointer;
          position: relative;
          padding: 8px;
          transition: color 0.3s;
          display: flex;
          align-items: center;
        }
        .cart-nav-btn:hover { color: #C6A75E; }
        .hamburger-btn {
          display: none;
          background: none;
          border: none;
          color: #EDE8DC;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          padding: 4px;
        }
        .header-nav-links { display: flex; gap: 36px; align-items: center; list-style: none; }
        .header-lang-row { display: flex; align-items: center; gap: 20px; }
        @media (max-width: 900px) {
          .header-nav-links { display: none !important; }
          .header-lang-row { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (max-width: 480px) {
          .header-logo-img { height: 52px !important; }
        }
      `}</style>

      {/* Announcement Bar */}
      <div style={{
        background: '#8B1A1A',
        padding: '10px 24px',
        textAlign: 'center',
        fontSize: '10px',
        fontWeight: 600,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        color: '#fff',
        overflow: 'hidden',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <span className="ann-track">
            <span>🌿 Free Delivery Across Pakistan on Orders Above Rs. 2,000 &nbsp;|&nbsp; 100% Pure Super Negin Saffron &nbsp;|&nbsp; Lab Tested & ISO Certified &nbsp;|&nbsp; WhatsApp Orders: 0300-1234567 &nbsp;|&nbsp;&nbsp;</span>
            <span>🌿 Free Delivery Across Pakistan on Orders Above Rs. 2,000 &nbsp;|&nbsp; 100% Pure Super Negin Saffron &nbsp;|&nbsp; Lab Tested & ISO Certified &nbsp;|&nbsp; WhatsApp Orders: 0300-1234567 &nbsp;|&nbsp;&nbsp;</span>
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav style={{
        position: 'fixed',
        top: 36,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '8px 0' : '12px 0',
        background: scrolled ? 'rgba(10,8,6,0.97)' : 'rgba(10,8,6,0.6)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(198,167,94,0.15)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}>
          {/* Hamburger (mobile) */}
          <button className="hamburger-btn" onClick={() => setMobileMenuOpen(true)} aria-label="Menu">
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: 'currentColor' }}></span>
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: 'currentColor' }}></span>
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: 'currentColor' }}></span>
          </button>

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); showPage('home'); }}
            style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center' }}
          >
            <img
              src="/images/Naksh_Logo.png"
              alt="Naksh Zafran - Premium Persian Saffron"
              className="header-logo-img"
              style={{ height: '68px', width: 'auto', objectFit: 'contain' }}
            />
          </a>

          {/* Desktop Nav Links */}
          <ul className="header-nav-links">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); showPage(link.id); }}
                  className={`nav-link-item${currentPage === link.id ? ' active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="header-lang-row">
            <div style={{ display: 'flex', border: '1px solid rgba(198,167,94,0.2)', overflow: 'hidden' }}>
              {[
                { key: 'en', label: 'EN / PKR' },
                { key: 'ur', label: 'اردو' },
                { key: 'zh', label: '中文' },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  className={`lang-toggle-btn${currentLang === key ? ' active' : ''}`}
                  onClick={() => setCurrentLang(key)}
                >
                  {label}
                </button>
              ))}
            </div>

            <button className="cart-nav-btn" onClick={toggleCart} aria-label="Open cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: '#C6A75E',
                  color: '#000',
                  fontSize: '9px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'translate(30%, -30%)',
                }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile cart icon (always visible on mobile) */}
          <button className="cart-nav-btn" onClick={toggleCart} aria-label="Open cart" style={{ display: 'none' }} id="mobile-cart-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: '#C6A75E',
                color: '#000',
                fontSize: '9px',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'translate(30%, -30%)',
              }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          background: '#0A0806',
          padding: '32px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <img
              src="/images/Naksh_Logo.png"
              alt="Naksh Zafran"
              style={{ height: '60px', width: 'auto' }}
            />
            <button
              onClick={closeMobile}
              style={{ background: 'none', border: 'none', color: '#EDE8DC', fontSize: '28px', cursor: 'pointer', lineHeight: 1 }}
            >
              ×
            </button>
          </div>

          <ul style={{ listStyle: 'none', marginTop: '32px', flex: 1 }}>
            {navLinks.map(link => (
              <li key={link.id} style={{ borderBottom: '1px solid rgba(198,167,94,0.08)' }}>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); showPage(link.id); closeMobile(); }}
                  style={{
                    display: 'block',
                    padding: '20px 0',
                    color: currentPage === link.id ? '#C6A75E' : '#EDE8DC',
                    textDecoration: 'none',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '32px',
                    transition: 'color 0.3s, padding-left 0.3s',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[
              { key: 'en', label: 'English / PKR' },
              { key: 'ur', label: 'اردو' },
              { key: 'zh', label: '中文' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => { setCurrentLang(key); closeMobile(); }}
                style={{
                  background: currentLang === key ? '#C6A75E' : 'none',
                  color: currentLang === key ? '#000' : 'rgba(237,232,220,0.65)',
                  border: '1px solid rgba(198,167,94,0.2)',
                  padding: '10px 20px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  cursor: 'pointer',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            className="cart-nav-btn"
            onClick={() => { toggleCart(); closeMobile(); }}
            style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '12px', color: '#EDE8DC', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', position: 'static' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            Cart {cartCount > 0 && `(${cartCount})`}
          </button>
        </div>
      )}
    </>
  );
}
