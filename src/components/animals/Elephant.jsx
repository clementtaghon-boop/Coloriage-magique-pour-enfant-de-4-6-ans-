import ZoneAnimal from './ZoneAnimal';

// Kawaii elephant — savanna — 9 zones
// 3=SkyBlue, 7=LightGray, 5=SoftPink, 8=CreamWhite, 6=WarmBrown
const zones = [
  // 1. Head (large round)
  {
    id: 'head', suggestedColor: 7, labelX: 200, labelY: 155,
    path: 'M200,80 C162,80 130,105 122,138 C115,168 122,200 145,215 C160,225 180,230 200,230 C220,230 240,225 255,215 C278,200 285,168 278,138 C270,105 238,80 200,80 Z',
  },
  // 2. Trunk (long curved down)
  {
    id: 'trunk', suggestedColor: 7, labelX: 200, labelY: 268,
    path: 'M180,225 C170,235 162,255 160,275 C158,292 162,310 170,318 C178,326 192,322 198,312 C202,304 204,290 204,275 C204,258 200,240 195,230 C191,226 185,224 180,225 Z',
  },
  // 3. Left ear (big flappy)
  {
    id: 'ear_left', suggestedColor: 3, labelX: 120, labelY: 165,
    path: 'M135,140 C110,125 82,130 72,155 C62,178 75,205 100,215 C118,222 138,212 143,195 C148,178 142,157 135,140 Z',
  },
  // 4. Right ear
  {
    id: 'ear_right', suggestedColor: 3, labelX: 280, labelY: 165,
    path: 'M265,140 C290,125 318,130 328,155 C338,178 325,205 300,215 C282,222 262,212 257,195 C252,178 258,157 265,140 Z',
  },
  // 5. Inner ear left
  {
    id: 'inner_ear_left', suggestedColor: 5, labelX: 108, labelY: 172,
    path: 'M122,148 C105,138 88,143 82,160 C76,176 84,196 100,202 C112,207 124,200 128,186 C132,172 128,158 122,148 Z',
  },
  // 6. Inner ear right
  {
    id: 'inner_ear_right', suggestedColor: 5, labelX: 292, labelY: 172,
    path: 'M278,148 C295,138 312,143 318,160 C324,176 316,196 300,202 C288,207 276,200 272,186 C268,172 272,158 278,148 Z',
  },
  // 7. Body
  {
    id: 'body', suggestedColor: 7, labelX: 200, labelY: 310,
    path: 'M150,228 C125,240 108,268 108,300 C108,338 140,365 200,365 C260,365 292,338 292,300 C292,268 275,240 250,228 C238,222 220,218 200,218 C180,218 162,222 150,228 Z',
  },
  // 8. Belly
  {
    id: 'belly', suggestedColor: 8, labelX: 200, labelY: 312,
    path: 'M168,248 C150,262 145,285 148,308 C151,328 165,348 200,350 C235,348 249,328 252,308 C255,285 250,262 232,248 C222,240 212,236 200,236 C188,236 178,240 168,248 Z',
  },
  // 9. Tusks
  {
    id: 'tusks', suggestedColor: 8, labelX: 200, labelY: 238,
    path: 'M182,228 C176,234 172,242 178,248 C184,254 196,250 200,244 C204,250 216,254 222,248 C228,242 224,234 218,228 C213,224 207,222 200,222 C193,222 187,224 182,228 Z',
  },
];

const Decorations = () => (
  <g pointerEvents="none">
    <ellipse cx="168" cy="192" rx="13" ry="8" fill="#F4A7B9" opacity="0.5" />
    <ellipse cx="232" cy="192" rx="13" ry="8" fill="#F4A7B9" opacity="0.5" />
    {/* Eyes */}
    <circle cx="172" cy="155" r="12" fill="#222" />
    <circle cx="228" cy="155" r="12" fill="#222" />
    <circle cx="175" cy="152" r="4.5" fill="#fff" />
    <circle cx="231" cy="152" r="4.5" fill="#fff" />
    {/* Nostril dots on trunk */}
    <circle cx="172" cy="312" r="4" fill="#555" opacity="0.5" />
    <circle cx="182" cy="316" r="4" fill="#555" opacity="0.5" />
    {/* Smile */}
    <path d="M185,205 Q200,216 215,205" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round" />
    {/* Toes */}
    <path d="M130,358 Q140,362 150,358" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    <path d="M250,358 Q260,362 270,358" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </g>
);

export default function ElephantColoring({ colors = {}, onFill }) {
  return <ZoneAnimal zones={zones} colors={colors} onFill={onFill} decorations={<Decorations />} />;
}
