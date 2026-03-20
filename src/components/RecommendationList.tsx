import RecommendationCard from './RecommendationCard';
import RecommendationSkeleton from './RecommendationSkeleton';
import type { AnalyzeState } from '@/types';

interface Props { state: AnalyzeState }

export default function RecommendationList({ state }: Props) {
  const labelStyle: React.CSSProperties = {
    fontSize:'9px', fontWeight:500, letterSpacing:'.2em', textTransform:'uppercase',
    color:'#333', marginBottom:'18px', display:'flex', alignItems:'center', gap:'10px',
    animation:'fadeUp .5s .4s ease both', opacity:0, animationFillMode:'forwards',
  };

  return (
    <div>
      <div style={labelStyle}>
        <span>Recommendations</span>
        <div style={{ flex:1, height:'1px', background:'linear-gradient(90deg,#1f1f1f,transparent)' }} />
      </div>

      {state.status === 'idle' && (
        <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', height:'200px', gap:'6px' }}>
          <p style={{ fontFamily:"'Playfair Display',serif", fontSize:'20px', color:'#1a1a1a' }}>
            Upload an outfit to get started.
          </p>
        </div>
      )}

      {state.status === 'loading' && <RecommendationSkeleton />}

      {state.status === 'error' && (
        <div style={{
          borderLeft:'2px solid #b8860b', padding:'12px 16px',
          background:'rgba(184,134,11,.04)',
        }}>
          <p style={{ fontSize:'13px', color:'#C8C0A8', marginBottom:'8px' }}>{state.message}</p>
          <span style={{ fontSize:'11px', color:'#b8860b', textDecoration:'underline', cursor:'pointer' }}>
            Try again
          </span>
        </div>
      )}

      {state.status === 'success' && (
        <div>
          <div style={{ borderTop:'1px solid #1e1e1e' }}>
            {state.data.recommendations.map((rec, i) => (
              <RecommendationCard key={rec.number} rec={rec} delay={0.5 + i * 0.15} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
