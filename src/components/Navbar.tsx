export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 28px',
      height: '58px',
      background: 'rgba(8,8,8,0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #1a1a1a',
      position: 'relative',
      zIndex: 10,
    }} className="anim-navSlide">
      {/* gold shimmer bottom line */}
      <div style={{
        position: 'absolute', bottom: '-1px', left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg,transparent,#b8860b55,#ffd70088,#b8860b55,transparent)',
      }} className="shimmer-bg" />

      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="anim-glowPulse">
        <svg width="14" height="14" viewBox="0 0 14 14" className="anim-rotateStar">
          <path d="M7 1l1.5 4h4l-3.2 2.4 1.2 4L7 9l-3.5 2.4 1.2-4L1.5 5h4z"
            fill="#ffd700" opacity=".9" />
        </svg>
        <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '20px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}
          className="shimmer-text">
          AdornAI
        </span>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '6px', height: '6px', background: '#ffd700', borderRadius: '50%',
          boxShadow: '0 0 6px #ffd70066',
        }} className="anim-cornerPulse" />
        <span style={{
          fontSize: '9px', fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase',
          color: '#444', border: '1px solid #1f1f1f', padding: '5px 12px',
        }}>
          AI Stylist
        </span>
      </div>
    </nav>
  );
}
