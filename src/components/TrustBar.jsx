export default function TrustBar() {
  const items = [
    { num: '260+', desc: 'Crocin Level (ISO Grade I)' },
    { num: '170+', desc: 'Years of Mastery' },
    { num: '50K+', desc: 'Pakistani Households' },
    { num: '100%', desc: 'Pure & Lab Certified' },
    { num: '48h', desc: 'Delivery Nationwide' },
  ];

  return (
    <div style={{
      padding: '40px 24px',
      borderTop: '1px solid rgba(198,167,94,0.08)',
      borderBottom: '1px solid rgba(198,167,94,0.08)',
      background: '#12100A',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '64px' }}>
          {items.map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '48px',
                color: '#C6A75E',
                display: 'block',
                lineHeight: 1,
              }}>
                {item.num}
              </span>
              <span style={{
                fontSize: '10px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'rgba(237,232,220,0.65)',
                marginTop: '8px',
                display: 'block',
              }}>
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
