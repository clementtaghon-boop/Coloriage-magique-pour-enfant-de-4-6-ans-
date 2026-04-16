import ZoneAnimal from './ZoneAnimal';

// Kawaii penguin — arctic — 9 zones
// 6=WarmBrown(dark), 8=CreamWhite, 7=LightGray, 3=SkyBlue, 1=GoldenYellow, 5=SoftPink
const zones = [
  // 1. Body (black outer)
  {
    id: 'body_outer', suggestedColor: 6, labelX: 200, labelY: 258,
    path: 'M200,158 C170,158 145,175 135,202 C126,226 128,258 140,280 C152,302 174,318 200,320 C226,318 248,302 260,280 C272,258 274,226 265,202 C255,175 230,158 200,158 Z',
  },
  // 2. Belly (white front)
  {
    id: 'belly', suggestedColor: 8, labelX: 200, labelY: 258,
    path: 'M200,178 C180,178 162,192 156,212 C150,230 154,255 164,272 C172,285 186,295 200,296 C214,295 228,285 236,272 C246,255 250,230 244,212 C238,192 220,178 200,178 Z',
  },
  // 3. Head
  {
    id: 'head', suggestedColor: 6, labelX: 200, labelY: 112,
    path: 'M200,68 C175,68 152,83 145,105 C138,125 144,150 160,162 C170,170 185,174 200,174 C215,174 230,170 240,162 C256,150 262,125 255,105 C248,83 225,68 200,68 Z',
  },
  // 4. Face (white oval on head)
  {
    id: 'face', suggestedColor: 8, labelX: 200, labelY: 120,
    path: 'M200,92 C184,92 170,104 166,118 C162,132 166,148 176,156 C182,160 191,163 200,163 C209,163 218,160 224,156 C234,148 238,132 234,118 C230,104 216,92 200,92 Z',
  },
  // 5. Left wing
  {
    id: 'wing_left', suggestedColor: 6, labelX: 125, labelY: 240,
    path: 'M140,200 C128,210 118,232 118,255 C118,272 124,288 135,292 C144,296 155,290 160,278 C165,265 162,248 155,232 C149,218 144,203 140,200 Z',
  },
  // 6. Right wing
  {
    id: 'wing_right', suggestedColor: 6, labelX: 275, labelY: 240,
    path: 'M260,200 C272,210 282,232 282,255 C282,272 276,288 265,292 C256,296 245,290 240,278 C235,265 238,248 245,232 C251,218 256,203 260,200 Z',
  },
  // 7. Left foot
  {
    id: 'foot_left', suggestedColor: 1, labelX: 173, labelY: 330,
    path: 'M162,318 C155,322 148,330 149,338 C150,346 158,350 168,348 C178,346 185,338 183,328 C181,320 172,315 162,318 Z',
  },
  // 8. Right foot
  {
    id: 'foot_right', suggestedColor: 1, labelX: 227, labelY: 330,
    path: 'M238,318 C245,322 252,330 251,338 C250,346 242,350 232,348 C222,346 215,338 217,328 C219,320 228,315 238,318 Z',
  },
  // 9. Beak
  {
    id: 'beak', suggestedColor: 1, labelX: 200, labelY: 145,
    path: 'M194,140 C192,144 190,150 193,154 C196,158 204,158 207,154 C210,150 208,144 206,140 C204,136 196,136 194,140 Z',
  },
];

const Decorations = () => (
  <g pointerEvents="none">
    {/* Blush */}
    <ellipse cx="174" cy="148" rx="11" ry="7" fill="#F4A7B9" opacity="0.55" />
    <ellipse cx="226" cy="148" rx="11" ry="7" fill="#F4A7B9" opacity="0.55" />
    {/* Eyes */}
    <circle cx="180" cy="112" r="12" fill="#222" />
    <circle cx="220" cy="112" r="12" fill="#222" />
    <circle cx="183" cy="109" r="4.5" fill="#fff" />
    <circle cx="223" cy="109" r="4.5" fill="#fff" />
    {/* Scarf detail */}
    <path d="M155,170 Q200,180 245,170" fill="none" stroke="#E8823A" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
    {/* Snow dots */}
    <circle cx="95" cy="100" r="4" fill="#fff" opacity="0.7" />
    <circle cx="310" cy="85" r="3" fill="#fff" opacity="0.6" />
    <circle cx="82" cy="135" r="2.5" fill="#fff" opacity="0.5" />
    <circle cx="325" cy="115" r="2" fill="#fff" opacity="0.5" />
  </g>
);

export default function PenguinColoring({ colors = {}, onFill }) {
  return <ZoneAnimal zones={zones} colors={colors} onFill={onFill} decorations={<Decorations />} />;
}
