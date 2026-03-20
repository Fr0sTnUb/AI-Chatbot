const PARTICLES = [
  { left: '10%', top: '80%', dx: '20px',  delay: '0s',    dur: '3.5s' },
  { left: '25%', top: '90%', dx: '-15px', delay: '0.8s',  dur: '4s'   },
  { left: '45%', top: '85%', dx: '10px',  delay: '1.6s',  dur: '3s'   },
  { left: '65%', top: '88%', dx: '-25px', delay: '0.4s',  dur: '4.5s' },
  { left: '80%', top: '82%', dx: '18px',  delay: '1.2s',  dur: '3.8s' },
  { left: '90%', top: '90%', dx: '-12px', delay: '2s',    dur: '3.2s' },
  { left: '55%', top: '92%', dx: '22px',  delay: '0.2s',  dur: '5s'   },
  { left: '35%', top: '78%', dx: '-8px',  delay: '1.8s',  dur: '4.2s' },
];

export default function Particles() {
  return (
    <div style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden', zIndex:0 }}>
      {PARTICLES.map((p, i) => (
        <div key={i} style={{
          position:        'absolute',
          width:           '2px',
          height:          '2px',
          background:      '#ffd700',
          borderRadius:    '50%',
          left:            p.left,
          top:             p.top,
          ['--dx' as string]: p.dx,
          animation:       `particleDrift ${p.dur} ease-out infinite`,
          animationDelay:  p.delay,
        }} />
      ))}
    </div>
  );
}
