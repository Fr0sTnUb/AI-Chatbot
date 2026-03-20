const bars = [
  [{ w: '30%', h: '9px' }, { w: '65%', h: '16px' }, { w: '100%', h: '11px' }, { w: '75%', h: '11px' }],
  [{ w: '30%', h: '9px' }, { w: '55%', h: '16px' }, { w: '100%', h: '11px' }, { w: '80%', h: '11px' }],
  [{ w: '30%', h: '9px' }, { w: '70%', h: '16px' }, { w: '100%', h: '11px' }, { w: '60%', h: '11px' }],
];

export default function RecommendationSkeleton() {
  return (
    <div>
      {bars.map((card, i) => (
        <div key={i} style={{ padding:'16px 0', borderBottom:'1px solid #141414' }}>
          {card.map((bar, j) => (
            <div key={j} style={{
              width:bar.w, height:bar.h, marginBottom:'8px',
              background:'linear-gradient(90deg,#1a1a1a,#252525,#1a1a1a)',
              backgroundSize:'200% auto',
              borderRadius:'2px',
              animation:`shimmer 1.5s linear infinite`,
              animationDelay:`${i * 0.15 + j * 0.05}s`,
            }} />
          ))}
        </div>
      ))}
    </div>
  );
}
