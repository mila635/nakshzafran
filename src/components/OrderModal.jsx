import { useState } from 'react';

export default function OrderModal({ isOpen, onClose, cart, formatPrice, whatsappNumber, showNotif }) {
  const [orderMethod, setOrderMethod] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', address: '', product: '', qty: '1', notes: '' });

  const handleWhatsApp = () => {
    const cartSummary = cart.length > 0
      ? cart.map(i => `${i.name} (${i.weight}) x${i.qty} = ${formatPrice(i.price * i.qty)}`).join('%0A')
      : 'I would like to inquire about your saffron products';
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const msg = `Assalam o Alaikum! I would like to place an order:%0A%0A${cartSummary}%0A%0ATotal: ${formatPrice(total)}%0A%0APlease share payment details.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
    onClose();
  };

  const handleSubmitForm = () => {
    if (!formData.name || !formData.phone || !formData.product) {
      showNotif('Please fill all required fields');
      return;
    }
    const msg = `Order Form Submission%0A%0AName: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0ACity: ${encodeURIComponent(formData.city || 'N/A')}%0AProduct: ${encodeURIComponent(formData.product)}%0AQty: ${formData.qty}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
    onClose();
    showNotif('Order submitted! We will contact you shortly.');
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 4000,
      background: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{
        background: '#12100A',
        border: '1px solid rgba(198,167,94,0.2)',
        width: '100%',
        maxWidth: '600px',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
      }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'rgba(237,232,220,0.65)', cursor: 'pointer', fontSize: '20px' }}>×</button>

        <div style={{ padding: '40px 40px 0' }}>
          <p className="label">Complete Your Order</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', marginBottom: '8px', color: '#EDE8DC' }}>How would you like to order?</h2>
          <p style={{ color: 'rgba(237,232,220,0.65)', fontSize: '14px' }}>We do not process payments online — choose your preferred method below.</p>
        </div>

        <div style={{ padding: '28px 40px 40px' }}>
          {orderMethod === null ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <button
                onClick={handleWhatsApp}
                style={{
                  border: '1px solid rgba(198,167,94,0.2)',
                  padding: '28px',
                  cursor: 'pointer',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  background: 'none',
                  color: '#EDE8DC',
                  width: '100%',
                }}
              >
                <span style={{ fontSize: '28px' }}>📱</span>
                <div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', marginBottom: '6px' }}>Order via WhatsApp</h4>
                  <p style={{ fontSize: '13px', color: 'rgba(237,232,220,0.65)', lineHeight: 1.6 }}>Message us directly. Our team will confirm your order and arrange delivery.</p>
                </div>
              </button>

              <button
                onClick={() => setOrderMethod('form')}
                style={{
                  border: '1px solid rgba(198,167,94,0.2)',
                  padding: '28px',
                  cursor: 'pointer',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  background: 'none',
                  color: '#EDE8DC',
                  width: '100%',
                }}
              >
                <span style={{ fontSize: '28px' }}>📋</span>
                <div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', marginBottom: '6px' }}>Fill Purchase Form</h4>
                  <p style={{ fontSize: '13px', color: 'rgba(237,232,220,0.65)', lineHeight: 1.6 }}>Complete a detailed order form. We will call you within 2 hours.</p>
                </div>
              </button>
            </div>
          ) : (
            <div>
              <button onClick={() => setOrderMethod(null)} style={{ background: 'none', border: 'none', color: '#C6A75E', cursor: 'pointer', marginBottom: '28px', fontSize: '14px' }}>← Back to Options</button>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#C6A75E', display: 'block', marginBottom: '8px' }}>Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Muhammad Ali Khan"
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(198,167,94,0.2)',
                      color: '#EDE8DC',
                      padding: '14px 18px',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#C6A75E', display: 'block', marginBottom: '8px' }}>Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0300-1234567"
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(198,167,94,0.2)',
                      color: '#EDE8DC',
                      padding: '14px 18px',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#C6A75E', display: 'block', marginBottom: '8px' }}>City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Lahore, Karachi..."
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(198,167,94,0.2)',
                      color: '#EDE8DC',
                      padding: '14px 18px',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#C6A75E', display: 'block', marginBottom: '8px' }}>Product Selection *</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    style={{
                      width: '100%',
                      background: '#12100A',
                      border: '1px solid rgba(198,167,94,0.2)',
                      color: '#EDE8DC',
                      padding: '14px 18px',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  >
                    <option value="">Select a product...</option>
                    <option value="Royal Super Negin - 1g">Royal Super Negin — 1g (Rs. 3,800)</option>
                    <option value="Sargol Premium - 3g">Sargol Premium — 3g (Rs. 8,500)</option>
                    <option value="Kesar Sidr Honey">Kesar Sidr Honey — 250g (Rs. 5,800)</option>
                    <option value="Royal Kesar Tea">Royal Kesar Tea — 50g (Rs. 2,800)</option>
                    <option value="Imperial Gift Set">Imperial Gift Set (Rs. 14,500)</option>
                  </select>
                </div>

                <button className="btn-gold" style={{ width: '100%', justifyContent: 'center', padding: '18px', marginTop: '8px' }} onClick={handleSubmitForm}>
                  Submit Order Request →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
