export default function Hero() {
  return (
    <div style={{ padding:'32px 28px 26px', background:'#080808', position:'relative', overflow:'hidden' }}
         className="anim-fadeUp">
      {/* scan line */}
      <div style={{
        position:'absolute', left:0, right:0, height:'60px',
        background:'linear-gradient(180deg,transparent,rgba(255,215,0,.025),transparent)',
        pointerEvents:'none',
      }} className="anim-scanline" />
      {/* glow blob */}
      <div style={{
        position:'absolute', top:'-40px', left:'50%', transform:'translateX(-50%)',
        width:'400px', height:'160px',
        background:'radial-gradient(ellipse,rgba(255,215,0,.07) 0%,transparent 65%)',
        pointerEvents:'none',
      }} />

      <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'36px', fontWeight:400, lineHeight:1.12 }}>
        <em style={{ color:'#888', fontStyle:'italic', display:'block' }}>What goes with</em>
        <span className="shimmer-text" style={{ display:'block', animation:'shimmer 3s linear infinite, glowPulse 4s ease-in-out infinite' }}>
          this outfit?
        </span>
      </h1>

      {/* reveal line */}
      <div style={{
        height:'1px', marginTop:'14px',
        background:'linear-gradient(90deg,transparent,#b8860b,#ffd700,#b8860b,transparent)',
        animation:'revealLine .8s .6s ease both, shimmer 4s 1.4s linear infinite',
        backgroundSize:'300% auto', width:0,
      } as React.CSSProperties} />

      <p style={{
        marginTop:'10px', fontSize:'10px', letterSpacing:'.2em',
        textTransform:'uppercase', color:'#333',
        animation:'fadeUp .6s .8s ease both', opacity:0, animationFillMode:'forwards',
      } as React.CSSProperties}>
        AI-powered accessory recommendations
      </p>
    </div>
  );
}
