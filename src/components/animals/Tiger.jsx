import ZoneAnimal from './ZoneAnimal';

// Kawaii tiger — jungle — 10 zones
// 2=WarmOrange, 6=WarmBrown, 8=CreamWhite, 5=SoftPink, 1=GoldenYellow
const zones = [
  // 1. Head
  {
    id: 'head', suggestedColor: 2, labelX: 200, labelY: 148,
    path: 'M200,78 C168,78 140,98 134,125 C128,150 136,180 158,195 C170,203 185,207 200,207 C215,207 230,203 242,195 C264,180 272,150 266,125 C260,98 232,78 200,78 Z',
  },
  // 2. Face / muzzle (lighter)
  {
    id: 'muzzle', suggestedColor: 8, labelX: 200, labelY: 170,
    path: 'M200,148 C186,148 174,158 170,170 C166,182 170,195 180,202 C186,207 193,210 200,210 C207,210 214,207 220,202 C230,195 234,182 230,170 C226,158 214,148 200,148 Z',
  },
  // 3. Left ear
  {
    id: 'ear_left', suggestedColor: 2, labelX: 152, labelY: 92,
    path: 'M162,102 C155,86 144,76 134,82 C124,88 126,104 136,114 C146,124 160,118 163,108 Z',
  },
  // 4. Right ear
  {
    id: 'ear_right', suggestedColor: 2, labelX: 248, labelY: 92,
    path: 'M238,102 C245,86 256,76 266,82 C276,88 274,104 264,114 C254,124 240,118 237,108 Z',
  },
  // 5. Inner ears
  {
    id: 'inner_ears', suggestedColor: 5, labelX: 200, labelY: 92,
    path: 'M159,104 C156,96 150,88 145,91 C140,94 141,104 146,110 C151,116 158,112 159,104 Z M241,104 C244,96 250,88 255,91 C260,94 259,104 254,110 C249,116 242,112 241,104 Z',
  },
  // 6. Body
  {
    id: 'body', suggestedColor: 2, labelX: 200, labelY: 300,
    path: 'M158,208 C132,222 115,252 115,286 C115,325 145,352 200,352 C255,352 285,325 285,286 C285,252 268,222 242,208 C230,202 216,200 200,200 C184,200 170,202 158,208 Z',
  },
  // 7. Belly (lighter)
  {
    id: 'belly', suggestedColor: 8, labelX: 200, labelY: 298,
    path: 'M172,228 C156,242 150,268 154,292 C158,315 172,338 200,342 C228,338 242,315 246,292 C250,268 244,242 228,228 C218,220 210,216 200,216 C190,216 182,220 172,228 Z',
  },
  // 8. Stripes on body
  {
    id: 'stripes_body', suggestedColor: 6, labelX: 155, labelY: 270,
    path: 'M138,252 C134,256 134,264 138,268 C142,272 148,270 150,264 C152,258 150,252 146,249 C142,246 140,248 138,252 Z M140,280 C136,284 136,292 140,296 C144,300 150,298 152,292 C154,286 152,280 148,277 C144,274 142,276 140,280 Z M260,252 C264,256 264,264 260,268 C256,272 250,270 248,264 C246,258 248,252 252,249 C256,246 258,248 260,252 Z M260,280 C264,284 264,292 260,296 C256,300 250,298 248,292 C246,286 248,280 252,277 C256,274 258,276 260,280 Z',
  },
  // 9. Stripes on head
  {
    id: 'stripes_head', suggestedColor: 6, labelX: 200, labelY: 110,
    path: 'M200,85 C197,85 194,88 194,92 C194,96 197,98 200,98 C203,98 206,96 206,92 C206,88 203,85 200,85 Z M182,92 C179,89 175,89 173,92 C171,95 172,99 175,101 C178,103 182,102 183,99 C185,96 184,94 182,92 Z M218,92 C221,89 225,89 227,92 C229,95 228,99 225,101 C222,103 218,102 217,99 C215,96 216,94 218,92 Z',
  },
  // 10. Tail
  {
    id: 'tail', suggestedColor: 2, labelX: 308, labelY: 285,
    path: 'M285,268 C298,256 318,252 330,262 C342,272 340,288 328,298 C316,308 300,305 292,292 C287,284 285,274 285,268 Z',
  },
];

const Decorations = () => (
  <g pointerEvents="none">
    {/* Blush */}
    <ellipse cx="170" cy="183" rx="13" ry="8" fill="#F4A7B9" opacity="0.5" />
    <ellipse cx="230" cy="183" rx="13" ry="8" fill="#F4A7B9" opacity="0.5" />
    {/* Eyes */}
    <circle cx="177" cy="145" r="13" fill="#222" />
    <circle cx="223" cy="145" r="13" fill="#222" />
    {/* Iris green */}
    <circle cx="177" cy="145" r="9" fill="#4CAF50" />
    <circle cx="223" cy="145" r="9" fill="#4CAF50" />
    {/* Pupils */}
    <ellipse cx="177" cy="145" rx="5" ry="8" fill="#111" />
    <ellipse cx="223" cy="145" rx="5" ry="8" fill="#111" />
    {/* Highlight */}
    <circle cx="179" cy="141" r="3" fill="#fff" />
    <circle cx="225" cy="141" r="3" fill="#fff" />
    {/* Nose */}
    <path d="M194,170 Q200,166 206,170 Q200,176 194,170 Z" fill="#8B5E3C" />
    {/* Smile */}
    <path d="M187,185 Q200,196 213,185" fill="none" stroke="#8B5E3C" strokeWidth="2.5" strokeLinecap="round" />
    {/* Whiskers */}
    <line x1="148" y1="178" x2="188" y2="180" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <line x1="148" y1="185" x2="188" y2="185" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <line x1="212" y1="180" x2="252" y2="178" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <line x1="212" y1="185" x2="252" y2="185" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    {/* Tail stripe */}
    <path d="M290,282 C295,275 305,272 310,278" fill="none" stroke="#8B5E3C" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
  </g>
);

export default function TigerColoring({ colors = {}, onFill }) {
  return <ZoneAnimal zones={zones} colors={colors} onFill={onFill} decorations={<Decorations />} />;
}
