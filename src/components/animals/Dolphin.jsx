import ZoneAnimal from './ZoneAnimal';

// Kawaii dolphin — ocean — 9 zones
// 3=SkyBlue, 7=LightGray, 8=CreamWhite, 5=SoftPink, 4=GrassGreen
const zones = [
  // 1. Main body
  {
    id: 'body', suggestedColor: 3, labelX: 195, labelY: 200,
    path: 'M80,200 C80,160 105,130 145,118 C170,110 195,108 220,112 C260,118 295,138 315,165 C330,186 332,210 325,230 C318,250 302,265 280,272 C260,278 238,278 218,272 C195,265 172,252 155,240 C130,224 100,215 80,200 Z',
  },
  // 2. Belly (light underside)
  {
    id: 'belly', suggestedColor: 8, labelX: 190, labelY: 230,
    path: 'M100,210 C100,195 118,182 145,175 C165,170 185,170 205,175 C230,182 252,198 262,218 C270,234 265,252 250,260 C232,268 210,268 190,262 C165,255 140,242 120,228 C108,220 100,215 100,210 Z',
  },
  // 3. Head (round front)
  {
    id: 'head', suggestedColor: 3, labelX: 128, labelY: 185,
    path: 'M80,200 C80,172 92,150 110,140 C122,133 138,130 148,138 C158,146 162,162 158,180 C154,195 142,208 128,212 C110,216 92,210 80,200 Z',
  },
  // 4. Snout / beak
  {
    id: 'snout', suggestedColor: 7, labelX: 72, labelY: 202,
    path: 'M80,200 C74,196 60,195 54,200 C48,205 52,215 62,218 C72,221 82,214 82,205 Z',
  },
  // 5. Dorsal fin
  {
    id: 'dorsal_fin', suggestedColor: 3, labelX: 232, labelY: 140,
    path: 'M215,140 C218,120 225,100 235,88 C242,80 250,82 252,92 C254,104 245,122 238,138 C232,148 220,150 215,140 Z',
  },
  // 6. Tail fin left
  {
    id: 'tail_left', suggestedColor: 3, labelX: 330, labelY: 178,
    path: 'M315,185 C322,172 335,158 348,154 C358,150 364,158 358,170 C352,182 338,188 325,192 C318,194 312,192 315,185 Z',
  },
  // 7. Tail fin right
  {
    id: 'tail_right', suggestedColor: 3, labelX: 332, labelY: 222,
    path: 'M315,215 C322,228 335,242 348,246 C358,250 364,242 358,230 C352,218 338,212 325,208 C318,206 312,208 315,215 Z',
  },
  // 8. Left pectoral fin
  {
    id: 'fin_pec', suggestedColor: 3, labelX: 155, labelY: 248,
    path: 'M155,238 C148,248 140,262 142,272 C144,280 154,282 162,276 C170,270 172,256 168,244 C165,236 158,234 155,238 Z',
  },
  // 9. Stripe detail
  {
    id: 'stripe', suggestedColor: 7, labelX: 215, labelY: 155,
    path: 'M155,145 C168,138 188,134 210,136 C232,138 255,148 270,162 C260,158 238,152 215,150 C195,148 175,150 155,145 Z',
  },
];

const Decorations = () => (
  <g pointerEvents="none">
    {/* Blush */}
    <ellipse cx="118" cy="195" rx="11" ry="7" fill="#F4A7B9" opacity="0.5" />
    {/* Eye */}
    <circle cx="105" cy="180" r="10" fill="#222" />
    <circle cx="108" cy="177" r="3.5" fill="#fff" />
    {/* Smile on snout */}
    <path d="M55,210 Q65,218 75,212" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" />
    {/* Nose dot */}
    <circle cx="54" cy="198" r="3" fill="#555" opacity="0.6" />
    {/* Water droplets */}
    <path d="M250,90 Q255,80 260,90 Q255,96 250,90Z" fill="#5BA4CF" opacity="0.5" />
    <path d="M265,80 Q268,72 272,80 Q268,85 265,80Z" fill="#5BA4CF" opacity="0.4" />
  </g>
);

export default function DolphinColoring({ colors = {}, onFill }) {
  return <ZoneAnimal zones={zones} colors={colors} onFill={onFill} decorations={<Decorations />} />;
}
