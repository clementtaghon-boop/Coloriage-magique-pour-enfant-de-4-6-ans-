import ZoneAnimal from './ZoneAnimal';

// Kawaii shark — ocean — 9 zones
// 3=SkyBlue, 7=LightGray, 8=CreamWhite, 5=SoftPink
const zones = [
  // 1. Main body (torpedo shape)
  {
    id: 'body', suggestedColor: 3, labelX: 200, labelY: 210,
    path: 'M55,205 C55,180 80,160 120,152 C155,145 185,144 215,148 C255,154 290,170 315,192 C330,205 332,220 320,235 C305,252 280,262 250,266 C220,270 190,268 162,260 C125,250 88,238 65,220 C58,215 55,210 55,205 Z',
  },
  // 2. Belly
  {
    id: 'belly', suggestedColor: 8, labelX: 195, labelY: 238,
    path: 'M90,218 C90,205 108,193 135,187 C158,182 180,182 202,186 C228,192 252,205 262,222 C270,236 264,252 248,258 C228,265 205,265 184,260 C158,253 132,242 110,230 C98,223 90,220 90,218 Z',
  },
  // 3. Head
  {
    id: 'head', suggestedColor: 3, labelX: 95, labelY: 198,
    path: 'M55,205 C55,185 65,168 80,158 C92,150 108,148 118,156 C128,164 130,178 126,194 C122,208 112,218 98,222 C78,226 60,218 55,205 Z',
  },
  // 4. Snout
  {
    id: 'snout', suggestedColor: 7, labelX: 44, labelY: 210,
    path: 'M55,200 C48,195 38,196 32,202 C26,208 30,220 40,224 C50,228 60,220 60,210 Z',
  },
  // 5. Dorsal fin (tall and triangular)
  {
    id: 'dorsal_fin', suggestedColor: 3, labelX: 215, labelY: 135,
    path: 'M200,152 C202,132 210,108 222,92 C230,80 240,82 242,94 C244,108 235,130 226,148 C220,158 205,158 200,152 Z',
  },
  // 6. Pectoral fin left
  {
    id: 'fin_left', suggestedColor: 3, labelX: 158, labelY: 260,
    path: 'M162,258 C155,268 148,282 152,292 C156,300 166,300 174,293 C182,286 182,272 175,260 C170,252 164,254 162,258 Z',
  },
  // 7. Tail fin upper
  {
    id: 'tail_upper', suggestedColor: 3, labelX: 330, labelY: 180,
    path: 'M318,200 C325,185 340,165 355,158 C365,154 370,162 364,175 C358,188 340,198 326,204 C318,207 314,206 318,200 Z',
  },
  // 8. Tail fin lower
  {
    id: 'tail_lower', suggestedColor: 3, labelX: 330, labelY: 235,
    path: 'M318,215 C325,230 338,248 352,254 C362,258 368,250 362,237 C356,224 340,218 326,212 C318,208 314,210 318,215 Z',
  },
  // 9. Gill markings
  {
    id: 'gills', suggestedColor: 7, labelX: 128, labelY: 200,
    path: 'M122,178 C126,174 130,175 130,182 C130,188 126,192 122,190 C118,188 118,182 122,178 Z M130,192 C134,188 138,189 138,196 C138,202 134,206 130,204 C126,202 126,196 130,192 Z M125,207 C129,203 133,204 133,211 C133,218 129,222 125,220 C121,218 121,212 125,207 Z',
  },
];

const Decorations = () => (
  <g pointerEvents="none">
    {/* Blush */}
    <ellipse cx="100" cy="200" rx="11" ry="7" fill="#F4A7B9" opacity="0.5" />
    {/* Eye */}
    <circle cx="86" cy="183" r="11" fill="#222" />
    <circle cx="89" cy="180" r="4" fill="#fff" />
    {/* Smile / teeth */}
    <path d="M35,215 Q44,225 55,217" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" />
    <path d="M39,217 L41,222 M45,220 L45,225 M49,219 L51,224" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    {/* Nostril */}
    <ellipse cx="34" cy="205" rx="3" ry="2" fill="#555" opacity="0.5" />
    {/* Bubbles */}
    <circle cx="360" cy="145" r="5" fill="none" stroke="#5BA4CF" strokeWidth="1.5" opacity="0.6" />
    <circle cx="372" cy="132" r="3.5" fill="none" stroke="#5BA4CF" strokeWidth="1.5" opacity="0.5" />
    <circle cx="365" cy="120" r="2.5" fill="none" stroke="#5BA4CF" strokeWidth="1.5" opacity="0.4" />
  </g>
);

export default function SharkColoring({ colors = {}, onFill }) {
  return <ZoneAnimal zones={zones} colors={colors} onFill={onFill} decorations={<Decorations />} />;
}
