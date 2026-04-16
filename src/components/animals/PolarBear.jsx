import ZoneAnimal from './ZoneAnimal';

// Kawaii polar bear — arctic — 9 zones
// 8=CreamWhite, 7=LightGray, 5=SoftPink, 3=SkyBlue, 6=WarmBrown
const zones = [
  // 1. Head
  {
    id: 'head', suggestedColor: 8, labelX: 200, labelY: 148,
    path: 'M200,78 C168,78 140,98 134,125 C128,150 136,180 158,195 C170,203 185,207 200,207 C215,207 230,203 242,195 C264,180 272,150 266,125 C260,98 232,78 200,78 Z',
  },
  // 2. Snout
  {
    id: 'snout', suggestedColor: 7, labelX: 200, labelY: 172,
    path: 'M200,150 C188,150 176,160 172,172 C168,184 172,197 182,203 C188,207 194,210 200,210 C206,210 212,207 218,203 C228,197 232,184 228,172 C224,160 212,150 200,150 Z',
  },
  // 3. Left ear
  {
    id: 'ear_left', suggestedColor: 8, labelX: 152, labelY: 90,
    path: 'M162,100 C155,84 142,76 132,82 C122,88 124,106 134,116 C144,126 160,120 163,108 Z',
  },
  // 4. Right ear
  {
    id: 'ear_right', suggestedColor: 8, labelX: 248, labelY: 90,
    path: 'M238,100 C245,84 258,76 268,82 C278,88 276,106 266,116 C256,126 240,120 237,108 Z',
  },
  // 5. Inner ears
  {
    id: 'inner_ears', suggestedColor: 5, labelX: 200, labelY: 90,
    path: 'M158,102 C154,93 148,87 143,90 C138,93 138,103 143,109 C148,115 156,113 158,105 Z M242,102 C246,93 252,87 257,90 C262,93 262,103 257,109 C252,115 244,113 242,105 Z',
  },
  // 6. Body
  {
    id: 'body', suggestedColor: 8, labelX: 200, labelY: 298,
    path: 'M158,208 C132,222 115,252 115,286 C115,325 145,355 200,355 C255,355 285,325 285,286 C285,252 268,222 242,208 C230,202 216,200 200,200 C184,200 170,202 158,208 Z',
  },
  // 7. Belly
  {
    id: 'belly', suggestedColor: 7, labelX: 200, labelY: 295,
    path: 'M174,228 C158,242 152,268 156,292 C160,314 174,336 200,340 C226,336 240,314 244,292 C248,268 242,242 226,228 C216,220 208,216 200,216 C192,216 184,220 174,228 Z',
  },
  // 8. Left arm/paw
  {
    id: 'arm_left', suggestedColor: 8, labelX: 120, labelY: 255,
    path: 'M138,225 C122,232 108,250 108,268 C108,280 115,290 126,290 C138,290 148,280 150,265 C152,250 146,232 138,225 Z',
  },
  // 9. Right arm/paw
  {
    id: 'arm_right', suggestedColor: 8, labelX: 280, labelY: 255,
    path: 'M262,225 C278,232 292,250 292,268 C292,280 285,290 274,290 C262,290 252,280 250,265 C248,250 254,232 262,225 Z',
  },
];

const Decorations = () => (
  <g pointerEvents="none">
    {/* Blush */}
    <ellipse cx="170" cy="183" rx="13" ry="8" fill="#F4A7B9" opacity="0.5" />
    <ellipse cx="230" cy="183" rx="13" ry="8" fill="#F4A7B9" opacity="0.5" />
    {/* Eyes */}
    <circle cx="178" cy="148" r="12" fill="#222" />
    <circle cx="222" cy="148" r="12" fill="#222" />
    <circle cx="181" cy="145" r="4.5" fill="#fff" />
    <circle cx="225" cy="145" r="4.5" fill="#fff" />
    {/* Nose */}
    <ellipse cx="200" cy="167" rx="7" ry="5" fill="#222" />
    {/* Smile */}
    <path d="M187,182 Q200,193 213,182" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round" />
    {/* Paw claws left */}
    <path d="M108,282 Q112,288 116,282" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M120,286 Q124,292 128,286" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    {/* Paw claws right */}
    <path d="M272,282 Q276,288 280,282" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M284,286 Q288,292 292,286" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    {/* Snow flakes */}
    <text x="82" y="90" fontSize="18" opacity="0.4" fill="#fff">❄</text>
    <text x="308" y="78" fontSize="14" opacity="0.35" fill="#fff">❄</text>
    <text x="68" y="160" fontSize="12" opacity="0.3" fill="#fff">❄</text>
    {/* Leg hints */}
    <ellipse cx="162" cy="350" rx="14" ry="7" fill="none" stroke="#aaa" strokeWidth="1.5" opacity="0.5" />
    <ellipse cx="238" cy="350" rx="14" ry="7" fill="none" stroke="#aaa" strokeWidth="1.5" opacity="0.5" />
  </g>
);

export default function PolarBearColoring({ colors = {}, onFill }) {
  return <ZoneAnimal zones={zones} colors={colors} onFill={onFill} decorations={<Decorations />} />;
}
