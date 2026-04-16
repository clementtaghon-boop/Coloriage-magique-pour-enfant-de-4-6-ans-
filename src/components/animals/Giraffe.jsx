import ZoneAnimal from './ZoneAnimal';

// Kawaii giraffe — savanna — 9 zones
// 1=GoldenYellow, 2=WarmOrange, 6=WarmBrown, 5=SoftPink, 8=CreamWhite
const zones = [
  // 1. Head
  {
    id: 'head', suggestedColor: 1, labelX: 200, labelY: 80,
    path: 'M200,42 C178,42 158,55 152,72 C147,87 150,106 162,117 C172,126 186,130 200,130 C214,130 228,126 238,117 C250,106 253,87 248,72 C242,55 222,42 200,42 Z',
  },
  // 2. Ossicones (horns)
  {
    id: 'ossicones', suggestedColor: 6, labelX: 200, labelY: 32,
    path: 'M182,44 C180,36 176,26 178,20 C180,14 186,16 188,22 C190,28 190,36 190,44 Z M210,44 C212,36 214,28 216,22 C218,16 222,14 222,20 C224,26 222,36 218,44 Z',
  },
  // 3. Neck
  {
    id: 'neck', suggestedColor: 1, labelX: 200, labelY: 175,
    path: 'M178,128 C172,140 168,165 168,190 C168,210 172,225 180,232 C186,237 193,238 200,238 C207,238 214,237 220,232 C228,225 232,210 232,190 C232,165 228,140 222,128 C215,122 206,120 200,120 C194,120 185,122 178,128 Z',
  },
  // 4. Body
  {
    id: 'body', suggestedColor: 1, labelX: 200, labelY: 310,
    path: 'M155,235 C128,248 112,278 112,312 C112,348 140,372 200,372 C260,372 288,348 288,312 C288,278 272,248 245,235 C233,229 217,226 200,226 C183,226 167,229 155,235 Z',
  },
  // 5. Spots on body
  {
    id: 'spots_body', suggestedColor: 2, labelX: 200, labelY: 295,
    path: 'M175,268 C168,272 164,280 166,288 C168,296 176,300 184,298 C192,296 196,288 194,280 C192,272 183,264 175,268 Z M215,285 C208,288 205,296 207,304 C210,312 218,315 226,313 C234,311 237,303 234,295 C231,287 222,282 215,285 Z M185,318 C179,321 176,328 179,336 C182,344 190,346 196,343 C202,340 204,332 200,324 C197,318 191,315 185,318 Z',
  },
  // 6. Spots on neck
  {
    id: 'spots_neck', suggestedColor: 2, labelX: 200, labelY: 170,
    path: 'M186,148 C182,151 180,157 182,162 C184,167 190,169 195,167 C200,165 202,159 200,153 C198,148 191,145 186,148 Z M205,172 C201,175 199,181 202,186 C205,191 211,193 216,190 C221,187 222,181 219,176 C216,170 209,168 205,172 Z',
  },
  // 7. Left ear
  {
    id: 'ear_left', suggestedColor: 1, labelX: 155, labelY: 72,
    path: 'M162,78 C155,65 142,60 136,68 C130,76 134,90 143,96 C152,102 164,96 166,86 C167,82 165,78 162,78 Z',
  },
  // 8. Right ear
  {
    id: 'ear_right', suggestedColor: 1, labelX: 245, labelY: 72,
    path: 'M238,78 C245,65 258,60 264,68 C270,76 266,90 257,96 C248,102 236,96 234,86 C233,82 235,78 238,78 Z',
  },
  // 9. Belly patch
  {
    id: 'belly', suggestedColor: 8, labelX: 200, labelY: 335,
    path: 'M172,260 C158,272 152,295 156,318 C160,338 174,356 200,358 C226,356 240,338 244,318 C248,295 242,272 228,260 C218,252 209,248 200,248 C191,248 182,252 172,260 Z',
  },
];

const Decorations = () => (
  <g pointerEvents="none">
    <ellipse cx="175" cy="105" rx="11" ry="7" fill="#F4A7B9" opacity="0.5" />
    <ellipse cx="225" cy="105" rx="11" ry="7" fill="#F4A7B9" opacity="0.5" />
    <circle cx="180" cy="74" r="10" fill="#222" />
    <circle cx="220" cy="74" r="10" fill="#222" />
    <circle cx="183" cy="71" r="3.5" fill="#fff" />
    <circle cx="223" cy="71" r="3.5" fill="#fff" />
    <ellipse cx="200" cy="92" rx="5" ry="3.5" fill="#8B5E3C" />
    <path d="M190,100 Q200,110 210,100" fill="none" stroke="#8B5E3C" strokeWidth="2" strokeLinecap="round" />
    {/* Hooves */}
    <ellipse cx="152" cy="368" rx="14" ry="6" fill="#8B5E3C" opacity="0.7" />
    <ellipse cx="248" cy="368" rx="14" ry="6" fill="#8B5E3C" opacity="0.7" />
    {/* Tail */}
    <path d="M285,290 C295,295 302,310 298,322 C295,330 288,332 284,326" fill="none" stroke="#8B5E3C" strokeWidth="2.5" strokeLinecap="round" />
  </g>
);

export default function GiraffeColoring({ colors = {}, onFill }) {
  return <ZoneAnimal zones={zones} colors={colors} onFill={onFill} decorations={<Decorations />} />;
}
