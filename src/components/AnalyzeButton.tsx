interface Props {
  onClick: () => void;
  loading: boolean;
  disabled: boolean;
}

export default function AnalyzeButton({ onClick, loading, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width:       '100%',
        height:      '48px',
        border:      'none',
        color:       disabled ? '#555' : '#080808',
        fontSize:    '9px',
        fontWeight:  600,
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        cursor:      disabled ? 'not-allowed' : 'pointer',
        fontFamily:  'Raleway, sans-serif',
        position:    'relative',
        overflow:    'hidden',
        transition:  'box-shadow .3s',
        background:  disabled
          ? '#1a1a1a'
          : 'linear-gradient(90deg,#b8860b,#daa520,#ffd700,#fffacd,#ffd700,#daa520,#b8860b)',
        backgroundSize: '300% auto',
        animation:   disabled ? 'none' : 'shimmer 2.5s linear infinite, fadeUp .5s .6s ease both',
        opacity:     0,
        animationFillMode: 'forwards',
      } as React.CSSProperties}
      onMouseEnter={e => {
        if (!disabled) (e.currentTarget as HTMLButtonElement).style.boxShadow =
          '0 0 30px rgba(255,215,0,.25), 0 4px 20px rgba(255,215,0,.15)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
      }}
    >
      {loading ? 'Analyzing\u00A0·\u00A0·\u00A0·' : 'Analyze outfit →'}
    </button>
  );
}
