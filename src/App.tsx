import { useState, useCallback } from 'react';
import Particles from '@/components/Particles';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import UploadPanel from '@/components/UploadPanel';
import AnalyzeButton from '@/components/AnalyzeButton';
import RecommendationList from '@/components/RecommendationList';
import { useAnalyze } from '@/hooks/useAnalyze';

export default function App() {
  const [file, setFile] = useState<File | null>(null);
  const { state, analyze } = useAnalyze();

  const handleFile = useCallback((f: File) => setFile(f), []);
  const handleAnalyze = useCallback(() => { if (file) analyze(file); }, [file, analyze]);

  return (
    <div style={{ background: '#080808', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Particles />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '960px', margin: '0 auto' }}>
        <Navbar />
        <Hero />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '500px' }}>
          {/* Left — upload */}
          <div style={{ padding: '24px 28px', borderRight: '1px solid #141414' }}>
            <div style={{
              fontSize: '9px', fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase',
              color: '#333', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px',
              animation: 'fadeUp .5s .4s ease both', opacity: 0, animationFillMode: 'forwards',
            } as React.CSSProperties}>
              <span>Your outfit</span>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,#1f1f1f,transparent)' }} />
            </div>
            <UploadPanel onFile={handleFile} />
            <AnalyzeButton
              onClick={handleAnalyze}
              loading={state.status === 'loading'}
              disabled={!file || state.status === 'loading'}
            />
          </div>

          {/* Right — recommendations */}
          <div style={{ padding: '24px 28px' }}>
            <RecommendationList state={state} />
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          borderTop: '1px solid #141414', height: '44px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 28px', position: 'relative',
          animation: 'fadeUp .4s 1s ease both', opacity: 0, animationFillMode: 'forwards',
        } as React.CSSProperties}>
          <div style={{
            position: 'absolute', top: '-1px', left: '28px', right: '28px', height: '1px',
            background: 'linear-gradient(90deg,transparent,#b8860b33,#ffd70044,#b8860b33,transparent)'
          }} />
          <span style={{ fontFamily: "'Playfair Display',serif", fontStyle: 'italic', fontSize: '12px', color: '#333' }}>
            AdornAI
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '5px', height: '5px', background: '#ffd700', borderRadius: '50%',
              boxShadow: '0 0 6px #ffd70066'
            }} className="anim-cornerPulse" />
            <span style={{ fontSize: '9px', color: '#222', letterSpacing: '.12em', textTransform: 'uppercase' }}>
              Live · AdornAI
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
