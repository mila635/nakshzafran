export default function ContactPage({ showNotif }) {
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.35)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0A0806 0%, transparent 50%)' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', marginTop: '80px' }}>
          <p className="label">Get In Touch</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(48px, 7vw, 90px)', color: '#fff', marginTop: '16px' }}>Contact Us</h1>
        </div>
      </div>

      <section>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'start' }}>
            <div>
              <p className="label" style={{ marginBottom: '16px' }}>We'd love to hear from you</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', marginBottom: '24px', color: '#EDE8DC' }}>Let's Talk</h2>
              <p style={{ color: 'rgba(237,232,220,0.65)', lineHeight: 1.8, marginBottom: '40px' }}>
                Whether you have a question about our saffron, need help with a bulk order, or simply want to learn more about this remarkable spice — our team is ready to help.
              </p>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '18px' }}>📱</span>
                  <div>
                    <strong style={{ display: 'block', color: '#EDE8DC', marginBottom: '4px' }}>WhatsApp (Fastest)</strong>
                    <span style={{ color: 'rgba(237,232,220,0.65)', fontSize: '14px', lineHeight: 1.6 }}>0300-1234567<br />Available 8am – 10pm, 7 days a week</span>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '18px' }}>📧</span>
                  <div>
                    <strong style={{ display: 'block', color: '#EDE8DC', marginBottom: '4px' }}>Email</strong>
                    <span style={{ color: 'rgba(237,232,220,0.65)', fontSize: '14px', lineHeight: 1.6 }}>orders@naksh-zafran.com<br />We respond within 4 hours</span>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '18px' }}>📍</span>
                  <div>
                    <strong style={{ display: 'block', color: '#EDE8DC', marginBottom: '4px' }}>Office</strong>
                    <span style={{ color: 'rgba(237,232,220,0.65)', fontSize: '14px', lineHeight: 1.6 }}>47-B, MM Alam Road, Gulberg III<br />Lahore, Punjab, Pakistan</span>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ marginTop: '40px', textDecoration: 'none', display: 'inline-flex' }}>
                Chat on WhatsApp Now
              </a>
            </div>

            <div style={{ background: '#12100A', border: '1px solid rgba(198,167,94,0.08)', padding: '48px' }}>
              <p className="label" style={{ marginBottom: '20px' }}>Send a Message</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#C6A75E', display: 'block', marginBottom: '8px' }}>Your Name</label>
                  <input type="text" placeholder="Muhammad Ali Khan" style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(198,167,94,0.2)', color: '#EDE8DC', padding: '14px 18px', fontSize: '14px', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#C6A75E', display: 'block', marginBottom: '8px' }}>Phone Number</label>
                  <input type="tel" placeholder="0300-1234567" style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(198,167,94,0.2)', color: '#EDE8DC', padding: '14px 18px', fontSize: '14px', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#C6A75E', display: 'block', marginBottom: '8px' }}>Message</label>
                  <textarea rows="5" placeholder="How can we help you?" style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(198,167,94,0.2)', color: '#EDE8DC', padding: '14px 18px', fontSize: '14px', outline: 'none', resize: 'vertical' }}></textarea>
                </div>
                <button className="btn-gold" style={{ justifyContent: 'center', padding: '18px' }} onClick={() => showNotif('Message sent! We will reply within 4 hours.')}>Send Message →</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
