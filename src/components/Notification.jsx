export default function Notification({ text }) {
  if (!text) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '32px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#12100A',
      border: '1px solid #C6A75E',
      padding: '16px 32px',
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: '#EDE8DC',
      whiteSpace: 'nowrap',
    }}>
      <span style={{ color: '#C6A75E' }}>✓</span>
      {text}
    </div>
  );
}
