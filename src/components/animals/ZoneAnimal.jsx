/**
 * Shared renderer for paint-by-number animal zones.
 * Props:
 *   zones   — array of { id, path, suggestedColor, labelX, labelY }
 *   colors  — { [id]: hexString } — filled zones
 *   onFill  — (id) => void
 *   decorations — optional JSX rendered on top (non-colorable)
 */
export default function ZoneAnimal({ zones, colors, onFill, decorations }) {
  return (
    <svg viewBox="0 0 400 400" width="380" height="380" style={{ display:'block' }}>
      {/* Zone paths */}
      {zones.map(z => {
        const filled = !!colors[z.id];
        const fill   = colors[z.id] || '#F5F5F5';
        return (
          <g key={z.id} onClick={() => onFill(z.id)} style={{ cursor:'pointer' }}>
            <path
              d={z.path}
              fill={fill}
              stroke="#222"
              strokeWidth="2"
              strokeLinejoin="round"
              style={{ transition:'fill 0.25s ease' }}
            />
            {/* Number label — shown until filled */}
            {!filled && (
              <text
                x={z.labelX}
                y={z.labelY}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#333"
                fontSize="13"
                fontWeight="bold"
                fontFamily="sans-serif"
                pointerEvents="none"
                style={{ userSelect:'none' }}
              >
                {z.suggestedColor}
              </text>
            )}
            {/* Checkmark — shown when filled */}
            {filled && (
              <text
                x={z.labelX}
                y={z.labelY}
                textAnchor="middle"
                dominantBaseline="central"
                fill="rgba(0,0,0,0.35)"
                fontSize="13"
                fontWeight="bold"
                fontFamily="sans-serif"
                pointerEvents="none"
                style={{ userSelect:'none' }}
              >
                ✓
              </text>
            )}
          </g>
        );
      })}
      {/* Non-colorable kawaii decorations */}
      {decorations}
    </svg>
  );
}
