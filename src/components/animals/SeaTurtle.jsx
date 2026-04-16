import ZoneAnimal from './ZoneAnimal';

// Kawaii sea turtle — ocean — 10 zones
// 4=GrassGreen, 6=WarmBrown, 8=CreamWhite, 1=GoldenYellow, 3=SkyBlue
const zones = [
  // 1. Shell top (dome)
  {
    id: 'shell_top', suggestedColor: 4, labelX: 200, labelY: 200,
    path: 'M200,100 C155,100 118,130 112,170 C106,210 122,248 155,268 C170,278 185,282 200,282 C215,282 230,278 245,268 C278,248 294,210 288,170 C282,130 245,100 200,100 Z',
  },
  // 2. Shell scutes pattern (center hexagon)
  {
    id: 'shell_center', suggestedColor: 6, labelX: 200, labelY: 190,
    path: 'M200,130 C185,130 172,140 168,155 C164,170 168,188 178,198 C186,206 193,208 200,208 C207,208 214,206 222,198 C232,188 236,170 232,155 C228,140 215,130 200,130 Z',
  },
  // 3. Shell side scutes left
  {
    id: 'shell_left', suggestedColor: 6, labelX: 148, labelY: 195,
    path: 'M148,160 C138,162 128,170 124,182 C120,194 124,210 134,218 C142,224 152,222 158,215 C164,208 164,196 158,186 C154,178 150,163 148,160 Z',
  },
  // 4. Shell side scutes right
  {
    id: 'shell_right', suggestedColor: 6, labelX: 252, labelY: 195,
    path: 'M252,160 C262,162 272,170 276,182 C280,194 276,210 266,218 C258,224 248,222 242,215 C236,208 236,196 242,186 C246,178 250,163 252,160 Z',
  },
  // 5. Head
  {
    id: 'head', suggestedColor: 4, labelX: 200, labelY: 72,
    path: 'M200,60 C182,60 165,68 158,80 C152,90 154,105 162,112 C170,120 185,124 200,124 C215,124 230,120 238,112 C246,105 248,90 242,80 C235,68 218,60 200,60 Z',
  },
  // 6. Front left flipper
  {
    id: 'flipper_fl', suggestedColor: 4, labelX: 102, labelY: 152,
    path: 'M118,155 C108,145 90,138 78,144 C66,150 64,166 72,178 C80,188 96,188 108,180 C118,172 122,160 118,155 Z',
  },
  // 7. Front right flipper
  {
    id: 'flipper_fr', suggestedColor: 4, labelX: 298, labelY: 152,
    path: 'M282,155 C292,145 310,138 322,144 C334,150 336,166 328,178 C320,188 304,188 292,180 C282,172 278,160 282,155 Z',
  },
  // 8. Back left flipper
  {
    id: 'flipper_bl', suggestedColor: 4, labelX: 118, labelY: 270,
    path: 'M130,262 C118,268 106,280 108,292 C110,302 122,306 134,300 C146,294 150,280 144,268 C140,260 133,258 130,262 Z',
  },
  // 9. Back right flipper
  {
    id: 'flipper_br', suggestedColor: 4, labelX: 282, labelY: 270,
    path: 'M270,262 C282,268 294,280 292,292 C290,302 278,306 266,300 C254,294 250,280 256,268 C260,260 267,258 270,262 Z',
  },
  // 10. Belly / plastron
  {
    id: 'belly', suggestedColor: 8, labelX: 200, labelY: 245,
    path: 'M170,290 C158,295 150,305 152,315 C154,325 164,330 178,328 C186,326 194,322 200,322 C206,322 214,326 222,328 C236,330 246,325 248,315 C250,305 242,295 230,290 C220,285 210,282 200,282 C190,282 180,285 170,290 Z',
  },
];

const Decorations = () => (
  <g pointerEvents="none">
    {/* Blush */}
    <ellipse cx="178" cy="100" rx="11" ry="7" fill="#F4A7B9" opacity="0.5" />
    <ellipse cx="222" cy="100" rx="11" ry="7" fill="#F4A7B9" opacity="0.5" />
    {/* Eyes */}
    <circle cx="182" cy="78" r="10" fill="#222" />
    <circle cx="218" cy="78" r="10" fill="#222" />
    <circle cx="185" cy="75" r="3.5" fill="#fff" />
    <circle cx="221" cy="75" r="3.5" fill="#fff" />
    {/* Nostril */}
    <ellipse cx="197" cy="92" rx="3" ry="2" fill="#555" opacity="0.5" />
    <ellipse cx="203" cy="92" rx="3" ry="2" fill="#555" opacity="0.5" />
    {/* Smile */}
    <path d="M186,105 Q200,115 214,105" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" />
    {/* Shell pattern lines */}
    <path d="M168,130 C162,148 160,168 162,186" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M232,130 C238,148 240,168 238,186" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M162,186 C170,204 182,216 200,220" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M238,186 C230,204 218,216 200,220" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeLinecap="round" />
    {/* Bubbles */}
    <circle cx="345" cy="120" r="5" fill="none" stroke="#5BA4CF" strokeWidth="1.5" opacity="0.5" />
    <circle cx="355" cy="105" r="3.5" fill="none" stroke="#5BA4CF" strokeWidth="1.5" opacity="0.4" />
  </g>
);

export default function SeaTurtleColoring({ colors = {}, onFill }) {
  return <ZoneAnimal zones={zones} colors={colors} onFill={onFill} decorations={<Decorations />} />;
}
