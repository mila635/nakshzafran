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

  return (
    <>
      <div style={{
        background: '#8B1A1A',
        padding: '12px 24px',
        textAlign: 'center',
        fontSize: '11px',
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
      }}>
        <span style={{ display: 'inline-flex', gap: '120px', whiteSpace: 'nowrap', animation: 'scrollAnn 20s linear infinite' }}>
          Free Delivery Across Pakistan on Orders Above Rs. 2,000 | 100% Pure Super Negin Saffron | WhatsApp Orders: 0300-1234567
        </span>
      </div>

      <nav style={{
        position: 'fixed',
        top: 44,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '14px 0' : '24px 0',
        background: scrolled ? 'rgba(10,8,6,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(198,167,94,0.08)' : 'none',
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
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ display: 'none', background: 'none', border: 'none', color: '#EDE8DC', cursor: 'pointer', flexDirection: 'column', gap: '5px' }}>
            <span style={{ width: '24px', height: '2px', background: 'currentColor' }}></span>
            <span style={{ width: '24px', height: '2px', background: 'currentColor' }}></span>
            <span style={{ width: '24px', height: '2px', background: 'currentColor' }}></span>
          </button>

          <a
            href="#"
            onClick={(e) => { e.preventDefault(); showPage('home'); }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '26px',
              fontWeight: 700,
              color: '#C6A75E',
              letterSpacing: '6px',
              textDecoration: 'none',
            }}
          >
            NAKSH ZAFRAN
            <span style={{ fontSize: '10px', fontWeight: 400, display: 'block', letterSpacing: '8px', color: 'rgba(237,232,220,0.65)', textTransform: 'uppercase', marginTop: '-4px' }}>
              Imperial Saffron Est. 1850
            </span>
          </a>

          <ul style={{ display: 'flex', gap: '36px', alignItems: 'center', listStyle: 'none' }}>
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); showPage(link.id); }}
                  style={{
                    color: currentPage === link.id ? '#C6A75E' : 'rgba(237,232,220,0.7)',
                    textDecoration: 'none',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '2.5px',
                    textTransform: 'uppercase',
                    transition: 'color 0.4s',
                    position: 'relative',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', border: '1px solid rgba(198,167,94,0.2)', overflow: 'hidden' }}>
              {['en', 'ur', 'zh'].map(lang => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  style={{
                    background: currentLang === lang ? '#C6A75E' : 'none',
                    color: currentLang === lang ? '#000' : 'rgba(237,232,220,0.65)',
                    border: 'none',
                    padding: '6px 10px',
                    fontSize: '9px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  {lang === 'en' ? 'EN / PKR' : lang === 'ur' ? 'اردو' : '中文'}
                </button>
              ))}
            </div>

            <button onClick={toggleCart} style={{ background: 'none', border: 'none', color: '#EDE8DC', cursor: 'pointer', position: 'relative', padding: '8px' }}>
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
        </div>
      </nav>

      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          background: '#0A0806',
          padding: '48px 32px',
        }}>
          <button onClick={() => setMobileMenuOpen(false)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#EDE8DC', fontSize: '24px', cursor: 'pointer' }}>×</button>
          <ul style={{ listStyle: 'none', marginTop: '40px' }}>
            {navLinks.map(link => (
              <li key={link.id} style={{ borderBottom: '1px solid rgba(198,167,94,0.08)' }}>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); showPage(link.id); setMobileMenuOpen(false); }}
                  style={{
                    display: 'block',
                    padding: '20px 0',
                    color: '#EDE8DC',
                    textDecoration: 'none',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '32px',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
