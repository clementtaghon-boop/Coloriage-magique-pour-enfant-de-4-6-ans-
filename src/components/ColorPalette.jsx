const COLORS = [
  { num: 1, hex: '#F4C430', name: 'Jaune doré' },
  { num: 2, hex: '#E8823A', name: 'Orange chaud' },
  { num: 3, hex: '#5BA4CF', name: 'Bleu ciel' },
  { num: 4, hex: '#6AAF3D', name: 'Vert prairie' },
  { num: 5, hex: '#F4A7B9', name: 'Rose doux' },
  { num: 6, hex: '#8B5E3C', name: 'Brun chaud' },
  { num: 7, hex: '#C8C8C8', name: 'Gris clair' },
  { num: 8, hex: '#FFF8E7', name: 'Crème' },
];

export { COLORS };

export default function ColorPalette({ selected, onSelect }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      justifyContent: 'center',
      padding: '16px',
      background: 'rgba(255,255,255,0.7)',
      borderRadius: '20px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
      backdropFilter: 'blur(8px)',
    }}>
      {COLORS.map(c => (
        <button
          key={c.num}
          title={c.name}
          onClick={() => onSelect(c.num)}
          style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            background: c.hex,
            border: selected === c.num ? '4px solid #333' : '3px solid rgba(0,0,0,0.15)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: '1.1rem',
            color: c.num === 8 ? '#555' : '#fff',
            textShadow: c.num === 8 ? 'none' : '0 1px 3px rgba(0,0,0,0.4)',
            transform: selected === c.num ? 'scale(1.2)' : 'scale(1)',
            transition: 'transform 0.15s, border 0.1s',
            boxShadow: selected === c.num
              ? `0 0 0 3px #fff, 0 0 0 6px ${c.hex}, 0 4px 12px rgba(0,0,0,0.2)`
              : '0 2px 6px rgba(0,0,0,0.15)',
          }}
        >
          {c.num}
        </button>
      ))}
    </div>
  );
}
