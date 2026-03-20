import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface Props {
  onFile: (file: File) => void;
}

export default function UploadPanel({ onFile }: Props) {
  const [preview, setPreview] = useState<string | null>(null);
  const [filename, setFilename] = useState<string>('');

  const onDrop = useCallback((files: File[]) => {
    const file = files[0];
    if (!file) return;
    setFilename(file.name);
    setPreview(URL.createObjectURL(file));
    onFile(file);
  }, [onFile]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/jpeg': [], 'image/png': [], 'image/webp': [] },
    maxSize: 5 * 1024 * 1024,
    multiple: false,
  });

  const zoneStyle: React.CSSProperties = {
    border:         `1px solid ${isDragActive ? '#b8860b88' : '#1a1a1a'}`,
    background:     '#0e0e0e',
    display:        'flex',
    flexDirection:  'column',
    alignItems:     'center',
    justifyContent: 'center',
    padding:        '34px 20px',
    gap:            '12px',
    marginBottom:   '14px',
    cursor:         'pointer',
    position:       'relative',
    overflow:       'hidden',
    transition:     'border-color .3s, box-shadow .3s',
    boxShadow:      isDragActive ? '0 0 24px rgba(255,215,0,.08)' : 'none',
    minHeight:      '200px',
    animation:      'fadeUp .5s .5s ease both',
    opacity:        0,
    animationFillMode: 'forwards',
  };

  return (
    <div>
      <div {...getRootProps()} style={zoneStyle}>
        <input {...getInputProps()} />

        {/* Scan line overlay */}
        <div style={{
          position:'absolute', left:0, right:0, height:'80px',
          background:'linear-gradient(180deg,transparent,rgba(255,215,0,.02),transparent)',
          pointerEvents:'none',
        }} className="anim-scanline" />

        {/* Corner brackets */}
        {(['tl','tr','bl','br'] as const).map((pos, i) => (
          <div key={pos} style={{
            position: 'absolute',
            width:'14px', height:'14px',
            ...(pos.includes('t') ? { top:'7px' }    : { bottom:'7px' }),
            ...(pos.includes('l') ? { left:'7px' }   : { right:'7px'  }),
            borderTop:    pos.includes('t') ? '1px solid #b8860b' : undefined,
            borderBottom: pos.includes('b') ? '1px solid #b8860b' : undefined,
            borderLeft:   pos.includes('l') ? '1px solid #b8860b' : undefined,
            borderRight:  pos.includes('r') ? '1px solid #b8860b' : undefined,
            animation:    `cornerPulse 2s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }} />
        ))}

        {preview ? (
          <>
            <img src={preview} alt="Outfit preview"
                 style={{ width:'100%', height:'160px', objectFit:'cover', display:'block' }} />
            <div style={{
              width:'100%', background:'rgba(8,8,8,.85)',
              padding:'6px 10px', fontSize:'9px', color:'#666',
              letterSpacing:'.08em', textTransform:'uppercase',
            }}>
              {filename}
            </div>
          </>
        ) : (
          <>
            <div style={{
              width:'46px', height:'46px', border:'1px solid #222',
              display:'flex', alignItems:'center', justifyContent:'center',
              background:'#111',
            }} className="anim-float">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 3v9M5 7l4-4 4 4M2 14h14" stroke="#b8860b" strokeWidth="1.2" strokeLinecap="square"/>
              </svg>
            </div>
            <span style={{ fontFamily:"'Playfair Display',serif", fontSize:'17px', color:'#C8C0A8' }}>
              Drop your outfit here
            </span>
            <span style={{ fontSize:'9px', color:'#333', letterSpacing:'.12em', textTransform:'uppercase' }}>
              JPEG · PNG · WEBP · max 5MB
            </span>
            <button type="button" style={{
              border:'1px solid #222', background:'transparent',
              padding:'9px 22px', fontSize:'9px', fontWeight:500,
              letterSpacing:'.14em', textTransform:'uppercase',
              color:'#555', cursor:'pointer',
              fontFamily:'Raleway, sans-serif',
              marginTop:'4px', transition:'all .25s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#b8860b';
              (e.currentTarget as HTMLButtonElement).style.color = '#ffd700';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#222';
              (e.currentTarget as HTMLButtonElement).style.color = '#555';
            }}>
              Choose file
            </button>
          </>
        )}
      </div>
    </div>
  );
}
