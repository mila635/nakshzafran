export default function FeaturesGrid() {
  const features = [
    { icon: '🌿', title: 'Dawn Harvest Protocol', desc: 'Every stigma is hand-picked within 2 hours of sunrise. This preserves the maximum crocin concentration.' },
    { icon: '🔬', title: 'ISO 3632 Grade I Certified', desc: 'Each batch is independently tested. Our crocin levels exceed 260 — far above the 220 required for Grade I.' },
    { icon: '📦', title: 'Nationwide Delivery', desc: 'We deliver to every corner of Pakistan — Karachi to Gilgit, Lahore to Quetta. Orders dispatched within 24 hours.' },
    { icon: '💎', title: 'No Adulteration Guarantee', desc: 'We guarantee 100% pure saffron with zero artificial color, zero corn silk fillers, zero safflower.' },
    { icon: '🕌', title: 'Halal Certified', desc: 'All Naksh Zafran products carry halal certification from recognized Pakistani bodies.' },
    { icon: '💬', title: 'WhatsApp Customer Care', desc: 'Real humans. Real responses. Our team answers on WhatsApp from 8am to 10pm, 7 days a week.' },
  ];

  return (
    <section>
      <div className="section-inner">
        <div className="section-header">
          <p className="label">The Naksh Zafran Difference</p>
          <h2>Why Connoisseurs Choose Us</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px' }}>
          {features.map((f, i) => (
            <div key={i} style={{
              padding: '56px 40px',
              background: '#12100A',
              border: '1px solid rgba(198,167,94,0.08)',
              transition: 'border-color 0.4s',
              textAlign: 'center',
            }}>
              <span style={{ fontSize: '40px', marginBottom: '28px', display: 'block' }}>{f.icon}</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', marginBottom: '16px', color: '#EDE8DC' }}>{f.title}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(237,232,220,0.65)', lineHeight: 1.8 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
