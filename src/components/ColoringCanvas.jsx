import { useState, lazy, Suspense } from 'react';
import ColorPalette, { COLORS } from './ColorPalette';

const ANIMALS = {
  lion:      lazy(() => import('./animals/Lion')),
  elephant:  lazy(() => import('./animals/Elephant')),
  giraffe:   lazy(() => import('./animals/Giraffe')),
  dolphin:   lazy(() => import('./animals/Dolphin')),
  shark:     lazy(() => import('./animals/Shark')),
  seaturtle: lazy(() => import('./animals/SeaTurtle')),
  monkey:    lazy(() => import('./animals/Monkey')),
  tiger:     lazy(() => import('./animals/Tiger')),
  penguin:   lazy(() => import('./animals/Penguin')),
  polarbear: lazy(() => import('./animals/PolarBear')),
};

const ANIMAL_FACTS = {
  lion: {
    fr: "Le lion est surnommé le roi de la savane. Il vit en groupe appelé une troupe !",
    en: "The lion is called the king of the savanna. It lives in groups called prides!",
  },
  elephant: {
    fr: "L'éléphant est le plus grand animal terrestre. Il se souvient de tout !",
    en: "The elephant is the largest land animal. It never forgets!",
  },
  giraffe: {
    fr: "La girafe a un très long cou pour atteindre les feuilles en haut des arbres !",
    en: "The giraffe has a very long neck to reach leaves at the top of trees!",
  },
  dolphin: {
    fr: "Le dauphin est très intelligent. Il joue et communique avec ses amis !",
    en: "The dolphin is very smart. It plays and talks with its friends!",
  },
  shark: {
    fr: "Le requin est le gardien de l'océan. Il a des dents qui repoussent toute sa vie !",
    en: "The shark is the guardian of the ocean. Its teeth grow back its whole life!",
  },
  seaturtle: {
    fr: "La tortue de mer peut vivre très longtemps. Elle nage dans tous les océans du monde !",
    en: "The sea turtle can live very long. It swims in all the oceans of the world!",
  },
  monkey: {
    fr: "Le singe est très joueur et curieux. Il grimpe aux arbres avec ses longs bras !",
    en: "The monkey is very playful and curious. It climbs trees with its long arms!",
  },
  tiger: {
    fr: "Le tigre a des rayures uniques comme nos empreintes digitales. Il adore nager !",
    en: "The tiger has unique stripes like our fingerprints. It loves to swim!",
  },
  penguin: {
    fr: "Le manchot ne vole pas mais nage très bien. Il se réchauffe en groupe !",
    en: "The penguin cannot fly but swims very well. It stays warm in a group!",
  },
  polarbear: {
    fr: "L'ours polaire a une fourrure transparente qui paraît blanche. Il est excellent nageur !",
    en: "The polar bear has transparent fur that looks white. It is an excellent swimmer!",
  },
};

export default function ColoringCanvas({ animalId, lang }) {
  const [selectedColor, setSelectedColor] = useState(1);
  const [zoneColors, setZoneColors] = useState({});

  const AnimalComponent = ANIMALS[animalId];

  const handleFill = (zoneId) => {
    setZoneColors(prev => ({ ...prev, [zoneId]: selectedColor }));
  };

  const handleListen = () => {
    const fact = ANIMAL_FACTS[animalId]?.[lang] || ANIMAL_FACTS[animalId]?.fr || '';
    if (!fact || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(fact);
    utt.lang = lang === 'en' ? 'en-US' : 'fr-FR';
    utt.rate = 0.9;
    window.speechSynthesis.speak(utt);
  };

  const handleReset = () => setZoneColors({});

  const coloredCount = Object.keys(zoneColors).length;

  const getColorHex = (num) => COLORS.find(c => c.num === num)?.hex || '#F5F5F5';

  const colors = Object.fromEntries(
    Object.entries(zoneColors).map(([k, num]) => [k, getColorHex(num)])
  );

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'16px', width:'100%', maxWidth:'520px' }}>
      <Suspense fallback={<div style={{ width:400, height:400, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2rem' }}>🎨</div>}>
        {AnimalComponent && (
          <div style={{ background:'rgba(255,255,255,0.85)', borderRadius:'24px', boxShadow:'0 8px 32px rgba(0,0,0,0.15)', padding:'12px', backdropFilter:'blur(8px)' }}>
            <AnimalComponent colors={colors} onFill={handleFill} />
          </div>
        )}
      </Suspense>

      {/* Progress bar */}
      <ProgressSection colored={coloredCount} animalId={animalId} />

      {/* Color palette */}
      <ColorPalette selected={selectedColor} onSelect={setSelectedColor} />

      {/* Action buttons */}
      <div style={{ display:'flex', gap:'12px', flexWrap:'wrap', justifyContent:'center' }}>
        <button onClick={handleListen} style={btnStyle('#5BA4CF')}>
          🔊 Écouter
        </button>
        <button onClick={handleReset} style={btnStyle('#E8823A')}>
          🔄 Recommencer
        </button>
      </div>

      <SelectedColorIndicator num={selectedColor} hex={getColorHex(selectedColor)} />
    </div>
  );
}

function ProgressSection({ colored, animalId }) {
  const totals = { lion:9, elephant:9, giraffe:9, dolphin:9, shark:9, seaturtle:10, monkey:9, tiger:10, penguin:9, polarbear:9 };
  const total = totals[animalId] || 9;
  const pct = Math.round((colored / total) * 100);

  return (
    <div style={{ width:'100%', background:'rgba(255,255,255,0.7)', borderRadius:'16px', padding:'12px 16px', boxShadow:'0 2px 8px rgba(0,0,0,0.1)' }}>
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'6px', fontWeight:700, fontSize:'0.95rem', color:'#555' }}>
        <span>Progression</span>
        <span>{colored}/{total} zones</span>
      </div>
      <div style={{ background:'#e0e0e0', borderRadius:'99px', height:'14px', overflow:'hidden' }}>
        <div style={{ width:`${pct}%`, height:'100%', background:'linear-gradient(90deg,#6AAF3D,#F4C430)', borderRadius:'99px', transition:'width 0.4s ease' }} />
      </div>
      {colored === total && (
        <div style={{ textAlign:'center', marginTop:'8px', fontSize:'1.2rem', fontWeight:900, color:'#6AAF3D' }}>
          🎉 Bravo ! Tu as tout colorié !
        </div>
      )}
    </div>
  );
}

function SelectedColorIndicator({ num, hex }) {
  const name = COLORS.find(c => c.num === num)?.name || '';
  return (
    <div style={{ display:'flex', alignItems:'center', gap:'10px', background:'rgba(255,255,255,0.7)', borderRadius:'50px', padding:'8px 20px', boxShadow:'0 2px 8px rgba(0,0,0,0.1)' }}>
      <div style={{ width:28, height:28, borderRadius:'50%', background:hex, border:'2px solid rgba(0,0,0,0.15)', boxShadow:'0 2px 4px rgba(0,0,0,0.15)' }} />
      <span style={{ fontWeight:700, color:'#444', fontSize:'0.95rem' }}>Couleur {num} — {name}</span>
    </div>
  );
}

function btnStyle(bg) {
  return {
    background: bg, color:'#fff', border:'none', borderRadius:'50px', padding:'10px 22px',
    fontSize:'1rem', fontWeight:700, cursor:'pointer', boxShadow:'0 3px 10px rgba(0,0,0,0.18)',
    textShadow:'0 1px 3px rgba(0,0,0,0.2)', transition:'transform 0.1s',
  };
}
