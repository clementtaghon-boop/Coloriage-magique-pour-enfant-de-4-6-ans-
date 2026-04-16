import { useState } from 'react';
import ColoringCanvas from './components/ColoringCanvas';

const ENVIRONMENTS = [
  { id: 'savanna', label: 'Savane',   emoji: '🌅', bg: 'linear-gradient(135deg,#f6d365,#fda085)' },
  { id: 'ocean',   label: 'Océan',   emoji: '🌊', bg: 'linear-gradient(135deg,#a1c4fd,#c2e9fb)' },
  { id: 'jungle',  label: 'Jungle',  emoji: '🌿', bg: 'linear-gradient(135deg,#d4fc79,#96e6a1)' },
  { id: 'arctic',  label: 'Arctique',emoji: '❄️', bg: 'linear-gradient(135deg,#e0eafc,#cfdef3)' },
];

const ANIMALS = {
  savanna: [
    { id: 'lion',     label: 'Lion',        emoji: '🦁' },
    { id: 'elephant', label: 'Éléphant',    emoji: '🐘' },
    { id: 'giraffe',  label: 'Girafe',      emoji: '🦒' },
  ],
  ocean: [
    { id: 'dolphin',   label: 'Dauphin',      emoji: '🐬' },
    { id: 'shark',     label: 'Requin',        emoji: '🦈' },
    { id: 'seaturtle', label: 'Tortue de mer', emoji: '🐢' },
  ],
  jungle: [
    { id: 'monkey', label: 'Singe', emoji: '🐒' },
    { id: 'tiger',  label: 'Tigre', emoji: '🐯' },
  ],
  arctic: [
    { id: 'penguin',   label: 'Manchot',      emoji: '🐧' },
    { id: 'polarbear', label: 'Ours polaire', emoji: '🐻‍❄️' },
  ],
};

const S = {
  app: { minHeight:'100vh', width:'100%', display:'flex', flexDirection:'column', alignItems:'center', padding:'20px 16px' },
  title: { fontSize:'2.4rem', fontWeight:900, color:'#fff', textShadow:'0 2px 8px rgba(0,0,0,0.25)', marginBottom:'6px', letterSpacing:'-1px' },
  sub: { fontSize:'1.1rem', color:'rgba(255,255,255,0.9)', marginBottom:'28px', fontWeight:600 },
  grid2: { display:'grid', gap:'16px', gridTemplateColumns:'repeat(2,160px)', justifyContent:'center' },
  grid3: { display:'grid', gap:'16px', gridTemplateColumns:'repeat(3,160px)', justifyContent:'center' },
  card: { borderRadius:'20px', border:'3px solid rgba(255,255,255,0.6)', cursor:'pointer', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'8px', boxShadow:'0 4px 20px rgba(0,0,0,0.15)', transition:'transform 0.15s,box-shadow 0.15s', background:'rgba(255,255,255,0.35)', backdropFilter:'blur(8px)', padding:'24px 20px', userSelect:'none' },
  cardEmoji: { fontSize:'3rem', lineHeight:1 },
  cardLabel: { fontSize:'1.1rem', fontWeight:700, color:'#fff', textShadow:'0 1px 4px rgba(0,0,0,0.2)' },
  backBtn: { background:'rgba(255,255,255,0.4)', border:'2px solid rgba(255,255,255,0.7)', borderRadius:'50px', padding:'8px 20px', cursor:'pointer', fontSize:'1rem', fontWeight:700, color:'#fff', textShadow:'0 1px 3px rgba(0,0,0,0.2)', marginBottom:'20px', backdropFilter:'blur(4px)' },
};

const hover = (e, on) => {
  e.currentTarget.style.transform = on ? 'scale(1.07)' : 'scale(1)';
  e.currentTarget.style.boxShadow = on ? '0 8px 30px rgba(0,0,0,0.22)' : '0 4px 20px rgba(0,0,0,0.15)';
};

export default function App() {
  const [screen, setScreen] = useState(1);
  const [env, setEnv]       = useState(null);
  const [animal, setAnimal] = useState(null);
  const [lang, setLang]     = useState('fr');

  const envData = ENVIRONMENTS.find(e => e.id === env) || ENVIRONMENTS[0];

  if (screen === 3 && animal && env) {
    return (
      <div style={{ ...S.app, background: envData.bg }}>
        <button style={S.backBtn} onClick={() => { setScreen(2); setAnimal(null); }}>← Retour</button>
        <ColoringCanvas animalId={animal} envId={env} lang={lang} />
      </div>
    );
  }

  if (screen === 2 && env) {
    const animals = ANIMALS[env] || [];
    return (
      <div style={{ ...S.app, background: envData.bg }}>
        <button style={S.backBtn} onClick={() => { setScreen(1); setEnv(null); }}>← Retour</button>
        <h1 style={S.title}>Choisis un animal !</h1>
        <p style={S.sub}>{envData.emoji} {envData.label}</p>
        <div style={animals.length <= 2 ? S.grid2 : S.grid3}>
          {animals.map(a => (
            <div key={a.id} style={S.card}
              onClick={() => { setAnimal(a.id); setScreen(3); }}
              onMouseEnter={e => hover(e, true)}
              onMouseLeave={e => hover(e, false)}
            >
              <span style={S.cardEmoji}>{a.emoji}</span>
              <span style={S.cardLabel}>{a.label}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop:'24px', display:'flex', gap:'10px', alignItems:'center' }}>
          <span style={{ color:'rgba(255,255,255,0.9)', fontWeight:600 }}>Langue :</span>
          {['fr','en'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ padding:'6px 16px', borderRadius:'20px', border:'2px solid rgba(255,255,255,0.7)', background: lang===l ? 'rgba(255,255,255,0.7)' : 'transparent', color: lang===l ? '#333' : '#fff', fontWeight:700, cursor:'pointer', fontSize:'0.9rem' }}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...S.app, background:'linear-gradient(135deg,#ffecd2 0%,#fcb69f 50%,#ffeaa7 100%)' }}>
      <h1 style={S.title}>🎨 Coloriage Magique</h1>
      <p style={S.sub}>Choisis ton univers !</p>
      <div style={S.grid2}>
        {ENVIRONMENTS.map(e => (
          <div key={e.id} style={{ ...S.card, background: e.bg }}
            onClick={() => { setEnv(e.id); setScreen(2); }}
            onMouseEnter={ev => hover(ev, true)}
            onMouseLeave={ev => hover(ev, false)}
          >
            <span style={S.cardEmoji}>{e.emoji}</span>
            <span style={S.cardLabel}>{e.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
