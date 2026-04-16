import ZoneAnimal from './ZoneAnimal';

// Kawaii monkey — jungle — 9 zones
// 6=WarmBrown, 2=WarmOrange, 1=GoldenYellow, 5=SoftPink, 8=CreamWhite
const zones = [
  // 1. Head
  {
    id: 'head', suggestedColor: 6, labelX: 200, labelY: 148,
    path: 'M200,75 C168,75 140,95 134,122 C128,148 136,178 158,192 C170,200 185,204 200,204 C215,204 230,200 242,192 C264,178 272,148 266,122 C260,95 232,75 200,75 Z',
  },
  // 2. Face plate (lighter oval center)
  {
    id: 'face', suggestedColor: 2, labelX: 200, labelY: 158,
    path: 'M200,108 C182,108 166,120 162,138 C158,154 162,172 174,182 C182,188 191,192 200,192 C209,192 218,188 226,182 C238,172 242,154 238,138 C234,120 218,108 200,108 Z',
  },
  // 3. Left ear
  {
    id: 'ear_left', suggestedColor: 6, labelX: 140, labelY: 130,
    path: 'M148,138 C138,125 125,120 116,126 C107,132 106,148 114,158 C122,168 138,167 146,158 C152,150 150,140 148,138 Z',
  },
  // 4. Right ear
  {
    id: 'ear_right', suggestedColor: 6, labelX: 260, labelY: 130,
    path: 'M252,138 C262,125 275,120 284,126 C293,132 294,148 286,158 C278,168 262,167 254,158 C248,150 250,140 252,138 Z',
  },
  // 5. Inner ear left
  {
    id: 'inner_ear_left', suggestedColor: 5, labelX: 138, labelY: 138,
    path: 'M144,140 C138,132 130,130 124,134 C118,138 118,148 124,154 C130,160 140,158 145,150 C148,145 146,142 144,140 Z',
  },
  // 6. Inner ear right
  {
    id: 'inner_ear_right', suggestedColor: 5, labelX: 262, labelY: 138,
    path: 'M256,140 C262,132 270,130 276,134 C282,138 282,148 276,154 C270,160 260,158 255,150 C252,145 254,142 256,140 Z',
  },
  // 7. Body
  {
    id: 'body', suggestedColor: 6, labelX: 200, labelY: 295,
    path: 'M158,205 C132,218 115,248 115,282 C115,320 145,348 200,348 C255,348 285,320 285,282 C285,248 268,218 242,205 C230,200 216,197 200,197 C184,197 170,200 158,205 Z',
  },
  // 8. Belly
  {
    id: 'belly', suggestedColor: 2, labelX: 200, labelY: 295,
    path: 'M172,224 C155,238 148,265 152,290 C156,312 170,335 200,338 C230,335 244,312 248,290 C252,265 245,238 228,224 C218,216 210,212 200,212 C190,212 182,216 172,224 Z',
  },
  // 9. Tail
  {
    id: 'tail', suggestedColor: 6, labelX: 310, labelY: 260,
    path: 'M285,250 C298,238 318,235 330,245 C342,255 342,272 332,282 C322,292 308,290 300,278 C296,270 297,260 296,255 C293,248 288,247 285,250 Z',
  },
];

const Decorations = () => (
  <g pointerEvents="none">
    {/* Blush */}
    <ellipse cx="172" cy="178" rx="13" ry="8" fill="#F4A7B9" opacity="0.5" />
    <ellipse cx="228" cy="178" rx="13" ry="8" fill="#F4A7B9" opacity="0.5" />
    {/* Eyes */}
    <circle cx="178" cy="140" r="12" fill="#222" />
    <circle cx="222" cy="140" r="12" fill="#222" />
    <circle cx="181" cy="137" r="4.5" fill="#fff" />
    <circle cx="225" cy="137" r="4.5" fill="#fff" />
    {/* Nose on face plate */}
    <ellipse cx="200" cy="165" rx="6" ry="4" fill="#8B5E3C" />
    {/* Smile */}
    <path d="M186,176 Q200,188 214,176" fill="none" stroke="#8B5E3C" strokeWidth="2.5" strokeLinecap="round" />
    {/* Fingers hint on paws */}
    <path d="M128,338 Q134,345 128,350" fill="none" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M272,338 Q266,345 272,350" fill="none" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    {/* Banana */}
    <path d="M295,290 C305,278 318,276 320,285 C322,294 312,300 300,302 C298,299 292,295 295,290 Z" fill="#F4C430" stroke="#8B5E3C" strokeWidth="1.5" />
  </g>
);

export default function MonkeyColoring({ colors = {}, onFill }) {
  return <ZoneAnimal zones={zones} colors={colors} onFill={onFill} decorations={<Decorations />} />;
}
