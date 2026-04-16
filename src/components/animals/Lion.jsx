import ZoneAnimal from './ZoneAnimal';

// Kawaii lion — savanna — 9 zones
// Palette: 1=GoldenYellow, 2=WarmOrange, 5=SoftPink, 6=WarmBrown, 8=CreamWhite
const zones = [
  // 1. Mane (large fluffy ring around head)
  {
    id: 'mane', suggestedColor: 1, labelX: 200, labelY: 155,
    path: 'M200,60 C155,45 115,70 105,110 C95,150 100,195 125,210 C140,218 160,222 200,224 C240,222 260,218 275,210 C300,195 305,150 295,110 C285,70 245,45 200,60 Z',
  },
  // 2. Head (round face inside mane)
  {
    id: 'head', suggestedColor: 2, labelX: 200, labelY: 150,
    path: 'M200,82 C168,82 143,105 138,135 C134,162 140,190 160,205 C172,213 186,217 200,217 C214,217 228,213 240,205 C260,190 266,162 262,135 C257,105 232,82 200,82 Z',
  },
  // 3. Left ear
  {
    id: 'ear_left', suggestedColor: 1, labelX: 152, labelY: 92,
    path: 'M165,100 C158,85 148,72 138,78 C128,84 130,100 140,108 C150,116 162,110 165,100 Z',
  },
  // 4. Right ear
  {
    id: 'ear_right', suggestedColor: 1, labelX: 248, labelY: 92,
    path: 'M235,100 C242,85 252,72 262,78 C272,84 270,100 260,108 C250,116 238,110 235,100 Z',
  },
  // 5. Inner ear left
  {
    id: 'inner_ear_left', suggestedColor: 5, labelX: 152, labelY: 96,
    path: 'M162,100 C158,90 151,82 145,86 C139,90 140,100 147,106 C154,112 162,108 162,100 Z',
  },
  // 6. Inner ear right
  {
    id: 'inner_ear_right', suggestedColor: 5, labelX: 248, labelY: 96,
    path: 'M238,100 C242,90 249,82 255,86 C261,90 260,100 253,106 C246,112 238,108 238,100 Z',
  },
  // 7. Body (chubby torso)
  {
    id: 'body', suggestedColor: 2, labelX: 200, labelY: 300,
    path: 'M155,218 C130,230 112,260 112,295 C112,335 148,360 200,360 C252,360 288,335 288,295 C288,260 270,230 245,218 C235,214 218,212 200,212 C182,212 165,214 155,218 Z',
  },
  // 8. Belly (lighter patch on front)
  {
    id: 'belly', suggestedColor: 8, labelX: 200, labelY: 300,
    path: 'M170,240 C155,255 150,280 152,305 C154,325 168,345 200,348 C232,345 246,325 248,305 C250,280 245,255 230,240 C220,232 210,228 200,228 C190,228 180,232 170,240 Z',
  },
  // 9. Tail
  {
    id: 'tail', suggestedColor: 1, labelX: 308, labelY: 295,
    path: 'M288,280 C300,268 318,262 328,272 C338,282 332,298 320,306 C308,314 294,308 288,295 C285,288 286,283 288,280 Z',
  },
];

const Decorations = () => (
  <g pointerEvents="none">
    {/* Blush cheeks */}
    <ellipse cx="168" cy="182" rx="14" ry="9" fill="#F4A7B9" opacity="0.5" />
    <ellipse cx="232" cy="182" rx="14" ry="9" fill="#F4A7B9" opacity="0.5" />
    {/* Eyes */}
    <circle cx="178" cy="152" r="11" fill="#222" />
    <circle cx="222" cy="152" r="11" fill="#222" />
    <circle cx="181" cy="149" r="4" fill="#fff" />
    <circle cx="225" cy="149" r="4" fill="#fff" />
    {/* Nose */}
    <ellipse cx="200" cy="175" rx="8" ry="5" fill="#8B5E3C" />
    {/* Smile */}
    <path d="M188,184 Q200,196 212,184" fill="none" stroke="#8B5E3C" strokeWidth="2.5" strokeLinecap="round" />
    {/* Whiskers */}
    <line x1="145" y1="174" x2="185" y2="176" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <line x1="145" y1="181" x2="185" y2="181" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <line x1="215" y1="176" x2="255" y2="174" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <line x1="215" y1="181" x2="255" y2="181" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    {/* Tail tuft */}
    <circle cx="326" cy="274" r="10" fill="none" stroke="#8B5E3C" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.6" />
    {/* Paw hints */}
    <ellipse cx="152" cy="355" rx="16" ry="8" fill="none" stroke="#8B5E3C" strokeWidth="1.5" opacity="0.5" />
    <ellipse cx="248" cy="355" rx="16" ry="8" fill="none" stroke="#8B5E3C" strokeWidth="1.5" opacity="0.5" />
  </g>
);

export default function LionColoring({ colors = {}, onFill }) {
  return <ZoneAnimal zones={zones} colors={colors} onFill={onFill} decorations={<Decorations />} />;
}
