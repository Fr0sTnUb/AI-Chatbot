import { useState } from 'react';
import type { Recommendation } from '@/types';

interface Props {
  rec: Recommendation;
  delay: number;
}

export default function RecommendationCard({ rec, delay }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding:      `16px 0 16px ${hovered ? '6px' : '0'}`,
        borderBottom: '1px solid #141414',
        borderLeft:   hovered ? '1px solid rgba(184,134,11,.4)' : '1px solid transparent',
        transition:   'all .25s',
        opacity:      0,
        animation:    `fadeUp .5s ${delay}s ease both`,
        animationFillMode: 'forwards',
        cursor:       'default',
      } as React.CSSProperties}
    >
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'7px' }}>
        <span
          style={{ fontFamily:"'Playfair Display',serif", fontSize:'16px', fontWeight:400, lineHeight:1.2,
                   color: hovered ? undefined : '#E8E0CC',
                   transition: 'all .25s' }}
          className={hovered ? 'shimmer-text' : ''}
        >
          {rec.name}
        </span>
        <span style={{
          fontSize:'9px', letterSpacing:'.1em', fontWeight:500, paddingTop:'3px',
          color: hovered ? '#b8860b' : '#2a2a2a', transition:'color .25s',
        }}>
          {String(rec.number).padStart(2, '0')}
        </span>
      </div>

      {/* animated gold bar */}
      <div style={{
        height:'1px', marginBottom:'9px',
        background:'linear-gradient(90deg,#b8860b,#ffd700,transparent)',
        animation: `revealLine .6s ${delay + 0.2}s ease both`,
        animationFillMode:'forwards',
        width: 0,
      } as React.CSSProperties} />

      <p style={{ fontSize:'12px', color: hovered ? '#555' : '#3e3e3e', lineHeight:1.7, transition:'color .25s' }}>
        {rec.description}
      </p>

      {rec.tip && (
        <p style={{ marginTop:'7px', fontSize:'10px', color:'#b8860b', letterSpacing:'.04em',
                    opacity: hovered ? 1 : 0.8, transition:'opacity .25s' }}>
          ↳ {rec.tip}
        </p>
      )}

      <span style={{
        display:'inline-block', fontSize:'8px', letterSpacing:'.14em', textTransform:'uppercase',
        padding:'3px 9px', marginTop:'9px', transition:'all .25s',
        border:     hovered ? '1px solid rgba(184,134,11,.5)' : '1px solid rgba(184,134,11,.2)',
        color:      hovered ? '#b8860b' : '#444',
        boxShadow:  hovered ? '0 0 8px rgba(184,134,11,.1)' : 'none',
        animation:  `tagAppear .4s ${delay + 0.4}s ease both`,
        animationFillMode: 'forwards',
        opacity: 0,
      } as React.CSSProperties}>
        {rec.category}
      </span>
    </div>
  );
}
