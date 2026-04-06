import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Car, Map, Trophy, ShoppingCart, User, Settings, Play, Star, Diamond, ChevronRight, CheckCircle2, Lock, Menu, Volume2, Gamepad2, Layers, LogOut, RefreshCw, Flame, Timer, ArrowLeft, ArrowRight, Flag, VolumeX, Video, Camera, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRACKS, MATERIALS, RANKINGS, MISSIONS, SHOP_ITEMS, VEHICLE_PARTS } from './constants';
import { AudioProvider, useAudio } from './context/AudioContext';

// --- Components ---

const TopBar = ({ title }: { title: string }) => {
  const { playSound, isMuted, setIsMuted } = useAudio();
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-obsidian border-b-4 border-obsidian-low flex items-center justify-between px-6 z-50">
      <div className="flex items-center gap-4">
        <Link to="/settings" onClick={() => playSound('nav')} className="hover:bg-obsidian-low p-1 transition-colors">
          <Menu className="text-flora w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-display font-bold text-flora uppercase tracking-tighter">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={() => {
            setIsMuted(!isMuted);
            playSound('click');
          }}
          className="hover:bg-obsidian-low p-1 transition-colors text-flora"
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
        <div className="flex items-center gap-2 bg-obsidian-high px-4 py-2 border-b-4 border-obsidian-highest">
          <Diamond className="text-earth w-5 h-5 fill-current" />
          <span className="font-display font-bold text-white">1,250</span>
        </div>
        <Link to="/settings" onClick={() => playSound('nav')} className="hover:bg-obsidian-low p-1 transition-colors">
          <Settings className="text-flora w-6 h-6" />
        </Link>
      </div>
    </header>
  );
};

const BottomNav = () => {
  const location = useLocation();
  const { playSound } = useAudio();
  
  const getTabs = () => {
    const path = location.pathname;
    if (path === '/ranks') {
      return [
        { id: '/garage', label: 'GARAGE', icon: Car },
        { id: '/game', label: 'RACE', icon: Flag },
        { id: '/ranks', label: 'RANKS', icon: Trophy },
        { id: '/shop', label: 'SHOP', icon: ShoppingCart },
      ];
    }
    if (path === '/missions') {
      return [
        { id: '/garage', label: 'GARAGE', icon: Car },
        { id: '/game', label: 'RACE', icon: Flag },
        { id: '/missions', label: 'MISSIONS', icon: Trophy },
        { id: '/shop', label: 'SHOP', icon: ShoppingCart },
      ];
    }
    if (path === '/customize') {
      return [
        { id: '/garage', label: 'GARAGE', icon: Car },
        { id: '/customize', label: 'CUSTOMIZE', icon: User },
        { id: '/game', label: 'RACE', icon: Flag },
        { id: '/shop', label: 'SHOP', icon: ShoppingCart },
      ];
    }
    return [
      { id: '/', label: 'HOME', icon: Home },
      { id: '/garage', label: 'GARAGE', icon: Car },
      { id: '/tracks', label: 'TRACKS', icon: Map },
      { id: '/shop', label: 'SHOP', icon: ShoppingCart },
    ];
  };

  const tabs = getTabs();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-obsidian border-t-4 border-obsidian-low flex items-stretch justify-around px-4 pb-4 z-50">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.id;
        const Icon = tab.icon;
        return (
          <Link
            key={tab.id}
            to={tab.id}
            onClick={() => playSound('nav')}
            className={`flex flex-col items-center justify-center flex-1 transition-all duration-150 active:translate-y-1 ${
              isActive
                ? 'bg-flora text-obsidian border-b-4 border-flora-dark translate-y-1'
                : 'text-earth border-b-4 border-earth-dark hover:bg-obsidian-low'
            }`}
          >
            <Icon className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} />
            <span className="font-display text-[10px] font-bold mt-1">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

// --- Screens ---

const HomeScreen = () => {
  const { playSound } = useAudio();
  return (
    <div className="pt-24 pb-32 px-6 max-w-5xl mx-auto space-y-12">
      <section className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-48 h-48 bg-obsidian-high border-4 border-flora-dark p-2 flex-shrink-0">
          <img 
            src="https://picsum.photos/seed/driver/400/400" 
            alt="Driver" 
            className="w-full h-full object-cover grayscale brightness-125"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-grow space-y-4">
          <div className="space-y-1">
            <h2 className="font-display text-5xl font-extrabold tracking-tighter text-flora">STEVE_RACING</h2>
            <div className="flex flex-wrap gap-4 pt-2">
              <span className="bg-flora-dark text-white px-4 py-1 font-display font-bold text-sm tracking-widest">LVL 42 ELITE</span>
              <span className="bg-earth-dark text-white px-4 py-1 font-display font-bold text-sm tracking-widest">RANK #1,245</span>
            </div>
          </div>
          <div className="h-4 bg-obsidian-low w-full relative">
            <div className="absolute top-0 left-0 h-full bg-flora w-[75%]"></div>
            <p className="absolute -bottom-6 right-0 font-display text-[10px] text-flora-dark">XP TO NEXT LVL: 2,450</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'WINS', val: '156', color: 'text-flora' },
          { label: 'PODIUMS', val: '289', color: 'text-earth' },
          { label: 'TOTAL KM', val: '4,210', color: 'text-atmosphere' },
          { label: 'MAX SPEED', val: '210', color: 'text-magma', unit: 'KM/H' },
        ].map((s) => (
          <div 
            key={s.label} 
            onClick={() => playSound('select')}
            className="bg-obsidian-high p-6 flex flex-col justify-between h-32 hover:bg-obsidian-highest transition-colors cursor-pointer"
          >
            <span className="font-display text-xs text-gray-400 font-bold">{s.label}</span>
            <div className="flex items-baseline gap-1">
              <span className={`font-display text-3xl font-black ${s.color}`}>{s.val}</span>
              {s.unit && <span className={`font-display text-[10px] ${s.color} font-bold`}>{s.unit}</span>}
            </div>
          </div>
        ))}
      </div>

      <section className="bg-obsidian-low p-1 flex flex-col md:flex-row gap-8">
        <div className="md:w-3/5 relative bg-black p-4 group">
          <div className="absolute top-0 left-0 bg-flora text-obsidian px-4 py-1 font-display font-black text-sm z-10">CURRENT_RIG</div>
          <img 
            src="https://picsum.photos/seed/car/800/450" 
            alt="Car" 
            className="w-full aspect-video object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="md:w-2/5 p-6 flex flex-col justify-center space-y-6">
          <div>
            <h3 className="font-display text-4xl font-black tracking-tighter">DIAMOND STREAK V2</h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">Advanced carbon-fiber obsidian chassis with synchronized flux-capacitors for maximum grip on block-based terrains.</p>
          </div>
          <Link 
            to="/garage" 
            onClick={() => playSound('nav')}
            className="w-full bg-flora text-obsidian font-display font-black py-4 border-b-4 border-flora-deep voxel-brutal-btn flex items-center justify-center gap-2"
          >
            <Car className="w-5 h-5" />
            GO TO GARAGE
          </Link>
        </div>
      </section>
    </div>
  );
};

const TracksScreen = () => {
  const { playSound } = useAudio();
  return (
    <div className="pt-24 pb-32 px-6 max-w-5xl mx-auto space-y-8">
      <div className="mb-8">
        <div className="inline-block bg-earth-dark text-earth px-3 py-1 mb-2 font-display font-bold text-sm">
          SELECT DESTINATION
        </div>
        <h2 className="text-5xl font-display font-extrabold uppercase tracking-tighter leading-none">THE WORLD TRACKS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 group relative overflow-hidden bg-obsidian-low transition-all duration-150">
          <div className="relative h-96 overflow-hidden">
            <img 
              src={TRACKS[0].image} 
              alt={TRACKS[0].name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 flex gap-1">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < TRACKS[0].stars ? 'text-earth fill-current' : 'text-gray-600'}`} />
              ))}
            </div>
          </div>
          <div className="p-6 bg-obsidian-low border-l-8 border-flora">
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-display text-atmosphere font-bold mb-1">{TRACKS[0].circuit}</p>
                  <h3 className="text-4xl font-display font-bold uppercase tracking-tight">{TRACKS[0].name}</h3>
                </div>
                <div className="flex gap-4">
                  <Link 
                    to="/game" 
                    onClick={() => playSound('engine')}
                    className="bg-flora text-obsidian px-8 py-4 font-display font-black text-xl flex items-center gap-2 border-b-4 border-flora-deep voxel-brutal-btn"
                  >
                    PLAY <Play className="w-6 h-6 fill-current" />
                  </Link>
                  <Link 
                    to="/spectator" 
                    onClick={() => playSound('nav')}
                    className="bg-obsidian-highest text-flora px-8 py-4 font-display font-black text-xl flex items-center gap-2 border-b-4 border-obsidian-low voxel-brutal-btn"
                  >
                    SPECTATE <Eye className="w-6 h-6" />
                  </Link>
                </div>
              </div>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-6">
          {TRACKS.slice(1).map((track) => (
            <div key={track.id} className="bg-obsidian-high p-1 border-b-4 border-earth-dark">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={track.image} 
                  alt={track.name} 
                  className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 bg-earth text-earth-deep px-2 py-1 font-display text-xs font-bold">
                  DIFFICULTY: {track.difficulty}
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < track.stars ? 'text-earth fill-current' : 'text-gray-600'}`} />
                  ))}
                </div>
                <h4 className="text-xl font-display font-bold uppercase tracking-tight">{track.name}</h4>
                <button 
                  onClick={() => playSound('select')}
                  className="mt-4 w-full bg-obsidian-highest hover:bg-obsidian-high text-white py-2 font-display font-bold border-b-4 border-gray-700 transition-all"
                >
                  SELECT TRACK
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GarageScreen = () => {
  const { playSound } = useAudio();
  const [activeCategory, setActiveCategory] = React.useState<keyof typeof VEHICLE_PARTS>('CHASSIS');
  const [selectedMaterial, setSelectedMaterial] = React.useState(MATERIALS[1]); // Default to Diamond
  const [selections, setSelections] = React.useState({
    CHASSIS: VEHICLE_PARTS.CHASSIS[0],
    ENGINE: VEHICLE_PARTS.ENGINE[0],
    WHEELS: VEHICLE_PARTS.WHEELS[0],
    SPOILER: VEHICLE_PARTS.SPOILER[0],
  });

  const stats = React.useMemo(() => {
    const baseSpeed = selections.CHASSIS.speed + selections.ENGINE.speed + selections.WHEELS.speed + selections.SPOILER.speed;
    const baseDurability = selections.CHASSIS.durability + selections.ENGINE.durability + selections.WHEELS.durability + selections.SPOILER.durability;
    const baseWeight = selections.CHASSIS.weight + selections.ENGINE.weight + selections.WHEELS.weight + selections.SPOILER.weight;

    return [
      { label: 'SPEED', val: Math.round(baseSpeed / 4) },
      { label: 'DURABILITY', val: Math.round(baseDurability / 4) },
      { label: 'WEIGHT', val: Math.round(baseWeight / 4) },
    ];
  }, [selections]);

  const handleSelectPart = (part: any) => {
    playSound('select');
    setSelections(prev => ({
      ...prev,
      [activeCategory]: part
    }));
  };

  const handleSelectMaterial = (material: typeof MATERIALS[0]) => {
    playSound('select');
    setSelectedMaterial(material);
  };

  return (
    <div className="pt-24 pb-32 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
      <aside className="md:col-span-3 space-y-6">
        <div className="bg-obsidian-low p-4">
          <h2 className="font-display font-extrabold text-lg text-earth mb-4 uppercase tracking-tight">MATERIAL BLOCKS</h2>
          <div className="grid grid-cols-2 gap-3">
            {MATERIALS.map((m) => (
              <button 
                key={m.id} 
                onClick={() => handleSelectMaterial(m)}
                className={`aspect-square bg-obsidian-high flex flex-col items-center justify-center gap-2 p-2 group hover:bg-obsidian-highest transition-colors active:translate-y-1 ${selectedMaterial.id === m.id ? 'ring-2 ring-flora bg-obsidian-mid' : ''}`}
              >
                <div 
                  className="w-12 h-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] border-t-2 border-l-2"
                  style={{ backgroundColor: m.color, borderColor: m.top }}
                ></div>
                <span className={`font-display text-[10px] font-bold uppercase ${selectedMaterial.id === m.id ? 'text-flora' : 'text-gray-400'}`}>{m.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-obsidian-low p-4 space-y-4">
          <h2 className="font-display font-extrabold text-lg text-atmosphere mb-2 uppercase tracking-tight">VEHICLE STATS</h2>
          {stats.map((s) => (
            <div key={s.label} className="space-y-2">
              <div className="flex justify-between font-display text-xs font-bold">
                <span>{s.label}</span>
                <span className="text-flora">{s.val}/100</span>
              </div>
              <div className="h-4 w-full bg-obsidian-highest relative">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${s.val}%` }}
                  className="h-4 bg-atmosphere-dark" 
                  style={{ 
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 12px, #0e0e0e 12px, #0e0e0e 16px)'
                  }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-obsidian-low p-4">
          <h2 className="font-display font-extrabold text-lg text-flora mb-4 uppercase tracking-tight">SELECT {activeCategory}</h2>
          <div className="space-y-3">
            {VEHICLE_PARTS[activeCategory].map((part) => (
              <button
                key={part.id}
                onClick={() => handleSelectPart(part)}
                className={`w-full p-3 flex items-center gap-4 transition-all border-l-4 ${selections[activeCategory].id === part.id ? 'bg-obsidian-mid border-flora' : 'bg-obsidian-high border-transparent hover:bg-obsidian-mid'}`}
              >
                <div className="w-12 h-12 bg-obsidian-highest overflow-hidden">
                  <img src={part.image} alt={part.name} className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                </div>
                <div className="text-left">
                  <p className="font-display font-bold text-xs uppercase tracking-tight">{part.name}</p>
                  <p className="text-[10px] text-gray-500 font-mono">ID: {part.id.toUpperCase()}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </aside>

      <section className="md:col-span-9 relative">
        <div className="w-full h-[600px] bg-obsidian-low border-b-8 border-obsidian-highest flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 pointer-events-none pixel-grid"></div>
          <div className="absolute bottom-20 w-[60%] h-12 bg-black/40 blur-xl"></div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={selections.CHASSIS.id + selections.ENGINE.id + selections.WHEELS.id + selections.SPOILER.id + selectedMaterial.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1.1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="relative z-10"
            >
              <img 
                src={`https://picsum.photos/seed/car_${selectedMaterial.id}_${selections.CHASSIS.id}/800/600`} 
                alt="Voxel Car" 
                className="drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-8 left-8 bg-black/60 p-4 backdrop-blur-sm border-l-4 border-flora">
            <p className="font-display font-bold text-flora text-xs mb-1 uppercase">Current Configuration</p>
            <p className="font-display font-extrabold text-2xl uppercase tracking-tighter">
              {selectedMaterial.name.toUpperCase()} {selections.CHASSIS.name.split(' ')[0]} v2
            </p>
          </div>
          <button 
            onClick={() => playSound('success')}
            className="absolute bottom-12 right-12 bg-flora text-obsidian px-10 py-5 font-display font-black text-xl flex items-center gap-4 border-b-8 border-flora-deep voxel-brutal-btn uppercase italic tracking-tighter"
          >
            SAVE & RACE
            <Play className="w-6 h-6 fill-current" />
          </button>
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 flex justify-center gap-4 bg-obsidian-highest p-2 shadow-2xl">
          {(Object.keys(VEHICLE_PARTS) as Array<keyof typeof VEHICLE_PARTS>).map((cat) => (
            <button 
              key={cat} 
              onClick={() => {
                playSound('click');
                setActiveCategory(cat);
              }}
              className={`px-6 py-3 font-display font-bold text-xs uppercase tracking-widest border-b-4 transition-all ${activeCategory === cat ? 'bg-atmosphere-dark text-white border-atmosphere-deep' : 'bg-obsidian-mid text-gray-400 border-obsidian-low hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

const RanksScreen = () => {
  const { playSound } = useAudio();
  return (
    <div className="pt-24 pb-40 px-6 max-w-4xl mx-auto space-y-12">
      <section className="grid grid-cols-3 gap-2 items-end mb-8">
        {RANKINGS.slice(0, 3).map((r, i) => {
          const isFirst = r.rank === 1;
          return (
            <div 
              key={r.name} 
              onClick={() => playSound('select')}
              className={`flex flex-col items-center cursor-pointer ${isFirst ? 'order-2' : i === 1 ? 'order-1' : 'order-3'}`}
            >
              <div className={`mb-4 flex items-center justify-center border-b-4 ${isFirst ? 'w-20 h-20 bg-flora-dark border-flora-deep' : 'w-16 h-16 bg-earth-dark border-earth-deep'}`}>
                <Trophy className={`w-8 h-8 ${isFirst ? 'text-flora' : 'text-earth'}`} />
              </div>
              <div className={`w-full p-3 text-center border-b-4 ${isFirst ? 'bg-obsidian-highest border-flora-dark h-32' : 'bg-obsidian-high border-earth-dark h-24'}`}>
                <p className={`font-display uppercase tracking-widest text-[10px] ${isFirst ? 'text-flora font-bold' : 'text-earth'}`}>{r.title}</p>
                <p className={`font-display font-bold truncate ${isFirst ? 'text-lg text-flora' : 'text-sm'}`}>{r.name}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section className="space-y-2">
        {RANKINGS.slice(3).map((r) => (
          <div 
            key={r.name} 
            onClick={() => playSound('click')}
            className="bg-obsidian-low p-4 flex items-center justify-between group hover:bg-obsidian-high transition-colors duration-150 border-l-4 border-flora cursor-pointer"
          >
            <div className="flex items-center gap-6">
              <span className="font-display font-bold text-xl text-gray-600 w-8">{r.rank}</span>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-obsidian-highest flex items-center justify-center">
                  <Car className="text-earth w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold">{r.name}</h3>
                  <p className="text-xs text-gray-500">{r.chassis}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-display font-bold text-flora">{r.emeralds}</p>
              <p className="font-display text-[10px] uppercase text-gray-600">Emeralds</p>
            </div>
          </div>
        ))}
      </section>

      <div className="fixed bottom-20 left-0 right-0 z-40 bg-obsidian-high border-t-4 border-flora px-6 py-4">
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-flora-dark flex items-center justify-center font-display font-bold">YOU</div>
              <div>
                <h4 className="font-display font-bold text-lg">1,245th</h4>
                <p className="text-xs text-earth">Promoting in 150 Emeralds</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-display font-bold text-flora">4,210</p>
              <p className="font-display text-[10px] uppercase text-gray-500">Total Emeralds</p>
            </div>
          </div>
          <div className="h-4 bg-obsidian-low flex gap-1">
            <div className="h-full w-1/4 bg-flora"></div>
            <div className="h-full w-1/4 bg-flora"></div>
            <div className="h-full w-1/4 bg-flora"></div>
            <div className="h-full w-1/4 bg-flora opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShopScreen = () => {
  const { playSound } = useAudio();
  return (
    <div className="pt-24 pb-32 px-6 max-w-md mx-auto space-y-8">
      <nav className="flex justify-between items-center bg-obsidian-low p-2">
        {['CARS', 'BLOCKS', 'SKINS', 'EXTRAS'].map((cat, i) => (
          <button 
            key={cat} 
            onClick={() => playSound('click')}
            className={`flex-1 py-3 text-center font-display text-sm font-black ${i === 0 ? 'text-flora border-b-4 border-flora' : 'text-gray-500'}`}
          >
            {cat}
          </button>
        ))}
      </nav>

      <section className="space-y-10">
        <div className="relative bg-obsidian-high overflow-hidden border-b-4 border-magma">
          <div className="absolute top-4 left-4 z-10 bg-magma text-white px-3 py-1 font-display font-black text-xs">LEGENDARY</div>
          <div className="w-full h-56 bg-obsidian-highest flex items-center justify-center relative">
            <img 
              src={SHOP_ITEMS[0].image} 
              alt={SHOP_ITEMS[0].name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-high to-transparent opacity-60"></div>
          </div>
          <div className="p-5 relative">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="font-display text-3xl font-black tracking-tighter leading-none mb-1">{SHOP_ITEMS[0].name}</h2>
                <div className="flex items-center gap-1 text-flora">
                  <Diamond className="w-4 h-4 fill-current" />
                  <span className="font-display font-bold text-lg">{SHOP_ITEMS[0].price}</span>
                </div>
              </div>
              <button 
                onClick={() => playSound('success')}
                className="bg-flora text-obsidian font-display font-black px-8 py-3 voxel-brutal-btn border-b-4 border-flora-deep"
              >
                BUY
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {SHOP_ITEMS.slice(1).map((item) => (
            <div key={item.id} className="bg-obsidian-low flex flex-col">
              <div className="aspect-square bg-obsidian-highest relative flex items-center justify-center">
                <div className={`absolute top-2 left-2 z-10 px-2 py-0.5 font-display font-black text-[10px] ${item.rarity === 'EPIC' ? 'bg-atmosphere text-white' : 'bg-earth-dark text-earth'}`}>
                  {item.rarity}
                </div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover p-4"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 border-b-4 border-obsidian-highest bg-obsidian-low flex-grow flex flex-col">
                <h3 className="font-display font-bold text-sm mb-2">{item.name}</h3>
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex items-center gap-1 text-flora">
                    <Diamond className="w-3 h-3 fill-current" />
                    <span className="font-display font-bold">{item.price}</span>
                  </div>
                  <button 
                    onClick={() => playSound('success')}
                    className="bg-flora text-obsidian font-display font-black px-4 py-2 text-xs voxel-brutal-btn border-b-2 border-flora-deep"
                  >
                    BUY
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-earth-dark p-6 flex items-center justify-between">
          <div className="max-w-[60%]">
            <h4 className="font-display font-black text-xl leading-none mb-1">EMERALD_BUNDLE</h4>
            <p className="text-sm text-earth">GET 20% MORE FOR A LIMITED TIME.</p>
          </div>
          <button 
            onClick={() => playSound('success')}
            className="bg-earth text-earth-deep font-display font-black px-4 py-3 voxel-brutal-btn border-b-4 border-earth-deep"
          >
            GET_EMERALDS
          </button>
        </div>
      </section>
    </div>
  );
};

const MissionsScreen = () => {
  const { playSound } = useAudio();
  return (
    <div className="pt-24 pb-32 px-4 max-w-2xl mx-auto space-y-10">
      <section>
        <div className="bg-obsidian-low p-6 border-b-4 border-obsidian-highest">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="font-display text-earth uppercase text-xs tracking-widest mb-1">Current Goal</p>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tighter">DAILY_REWARD_PROGRESS</h2>
            </div>
            <div className="text-right">
              <span className="font-display text-4xl font-black text-flora">2/5</span>
            </div>
          </div>
          <div className="h-8 w-full bg-obsidian-highest relative overflow-hidden mb-6">
            <div className="absolute top-0 left-0 h-full bg-flora" style={{ width: '40%', backgroundImage: 'linear-gradient(90deg, transparent 90%, #0e0e0e 90%)', backgroundSize: '10% 100%' }}></div>
          </div>
          <div className="flex items-center gap-4 bg-obsidian-mid p-4">
            <div className="w-16 h-16 bg-earth-dark flex items-center justify-center">
              <Diamond className="text-earth w-8 h-8 fill-current" />
            </div>
            <div>
              <h3 className="font-display font-bold uppercase">DIAMOND_CHEST</h3>
              <p className="text-sm text-gray-400">Complete 3 more missions to unlock premium voxel parts.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-6">
        <h2 className="font-display text-earth uppercase text-sm tracking-[0.2em] px-2">ACTIVE_OBJECTIVES</h2>
        {MISSIONS.map((m) => (
          <div key={m.id} className="bg-obsidian-low border-b-4 border-obsidian-highest p-4 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-obsidian-highest flex items-center justify-center border-b-2 border-flora">
                  <Trophy className="text-flora w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg uppercase tracking-tight">{m.title}</h3>
                  <p className="text-sm text-gray-400 font-light">{m.desc}</p>
                </div>
              </div>
              {m.status === 'COMPLETED' && (
                <div className="text-right">
                  <span className="font-display text-xs text-flora bg-flora-deep/30 px-2 py-1">COMPLETED</span>
                </div>
              )}
            </div>
            <div className="h-2 w-full bg-obsidian-highest">
              <div className="h-full bg-flora" style={{ width: `${(m.progress / m.total) * 100}%` }}></div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-2">
                <Diamond className="text-flora w-4 h-4 fill-current" />
                <span className="font-display text-sm">{m.reward}</span>
              </div>
              <button 
                onClick={() => m.status === 'COMPLETED' && playSound('success')}
                className={`px-6 py-2 font-display font-bold uppercase text-xs transition-all duration-75 ${m.status === 'COMPLETED' ? 'bg-flora text-obsidian border-b-4 border-flora-deep active:translate-y-1 active:border-b-0' : 'bg-obsidian-highest text-gray-600 cursor-not-allowed'}`}
              >
                {m.status === 'COMPLETED' ? 'CLAIM' : 'IN_PROGRESS'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SettingsScreen = () => {
  const { playSound, volume, setVolume } = useAudio();
  
  return (
    <div className="pt-24 pb-32 px-6 max-w-4xl mx-auto space-y-12">
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <Volume2 className="text-flora w-6 h-6" />
          <h2 className="text-xl font-bold font-display tracking-tighter uppercase">AUDIO</h2>
          <div className="flex-grow h-[2px] bg-obsidian-highest"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['MUSIC', 'SFX'].map((type) => (
            <div key={type} className="bg-obsidian-low p-6 space-y-4 border-l-4 border-flora">
              <div className="flex justify-between items-end">
                <label className="font-display text-sm font-bold text-gray-400 uppercase">{type}</label>
                <span className="font-display text-flora font-extrabold text-xl">{Math.round(volume * 100)}%</span>
              </div>
              <div className="relative h-6 bg-obsidian-highest w-full overflow-hidden cursor-pointer group">
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.01" 
                  value={volume}
                  onChange={(e) => {
                    const newVol = parseFloat(e.target.value);
                    setVolume(newVol);
                    if (type === 'SFX') playSound('click');
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="absolute top-0 left-0 h-full bg-flora transition-all duration-75" style={{ width: `${volume * 100}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <Gamepad2 className="text-flora w-6 h-6" />
          <h2 className="text-xl font-bold font-display tracking-tighter uppercase">CONTROLS</h2>
          <div className="flex-grow h-[2px] bg-obsidian-highest"></div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {['ARROWS', 'JOYSTICK', 'TILT'].map((type, i) => (
            <button 
              key={type} 
              onClick={() => playSound('click')}
              className={`py-4 font-display font-bold uppercase transition-all active:translate-y-1 ${i === 0 ? 'bg-obsidian-high text-flora border-b-4 border-flora-dark' : 'bg-obsidian-low text-gray-500'}`}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <Layers className="text-flora w-6 h-6" />
          <h2 className="text-xl font-bold font-display tracking-tighter uppercase">GRAPHICS</h2>
          <div className="flex-grow h-[2px] bg-obsidian-highest"></div>
        </div>
        <div className="bg-obsidian-low">
          {['POTATO', 'VOXEL', 'ULTRA'].map((type, i) => (
            <div 
              key={type} 
              onClick={() => playSound('click')}
              className={`p-6 flex justify-between items-center cursor-pointer ${i === 1 ? 'bg-obsidian-high border-l-8 border-flora' : 'opacity-50'}`}
            >
              <div>
                <span className={`font-display font-extrabold text-lg ${i === 1 ? 'text-flora' : ''}`}>{type}</span>
                {i === 1 && <p className="text-xs text-gray-500 lowercase">Optimized for voxel hardware.</p>}
              </div>
              {i === 1 && <CheckCircle2 className="text-flora w-6 h-6 fill-current" />}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <User className="text-flora w-6 h-6" />
          <h2 className="text-xl font-bold font-display tracking-tighter uppercase">ACCOUNT</h2>
          <div className="flex-grow h-[2px] bg-obsidian-highest"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            onClick={() => playSound('nav')}
            className="flex items-center justify-between p-6 bg-flora text-obsidian font-display font-extrabold uppercase border-b-4 border-flora-deep voxel-brutal-btn"
          >
            <span>SYNC_PROGRESS</span>
            <RefreshCw className="w-6 h-6" />
          </button>
          <button 
            onClick={() => playSound('error')}
            className="flex items-center justify-between p-6 bg-magma-dark text-white font-display font-extrabold uppercase border-b-4 border-magma-deep voxel-brutal-btn"
          >
            <span>LOGOUT</span>
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

const CustomizeScreen = () => {
  const { playSound } = useAudio();
  return (
    <div className="pt-24 pb-32 px-6 max-w-2xl mx-auto space-y-8">
      <section className="relative w-full aspect-square flex flex-col items-center justify-center overflow-hidden bg-obsidian-low pixel-grid">
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent opacity-60"></div>
        <div className="relative z-10 w-64 h-80 bg-obsidian-high border-b-[8px] border-obsidian-highest flex items-center justify-center">
          <img 
            src="https://picsum.photos/seed/avatar/400/500" 
            alt="Avatar" 
            className="w-full h-full object-contain p-4 grayscale brightness-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-4 w-40 h-4 bg-black/40 blur-sm rounded-full"></div>
        </div>
      </section>

      <div className="flex gap-1 bg-obsidian-low p-1">
        {['HEAD', 'SUIT', 'SKIN'].map((cat, i) => (
          <button 
            key={cat} 
            onClick={() => playSound('click')}
            className={`flex-1 py-3 font-display font-bold text-sm transition-all ${i === 0 ? 'bg-flora text-obsidian border-b-4 border-flora-deep' : 'text-earth hover:bg-obsidian-high'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          { id: 1, label: 'ZENITH_HELM', status: 'EQUIPPED', active: true },
          { id: 2, label: 'OMEGA_BOX', status: 'UNLOCKED' },
          { id: 3, label: 'CYBER_GRIN', status: 'UNLOCKED' },
          { id: 4, label: 'TITAN_VISOR', status: 'LOCKED', locked: true },
        ].map((item) => (
          <div 
            key={item.id} 
            onClick={() => !item.locked && playSound('select')}
            className={`group p-4 relative cursor-pointer active:scale-95 transition-transform border-4 ${item.active ? 'bg-obsidian-high border-flora' : 'bg-obsidian-low border-transparent hover:border-obsidian-highest'} ${item.locked ? 'opacity-50' : ''}`}
          >
            <div className="aspect-square bg-obsidian-highest flex items-center justify-center mb-3">
              {item.locked ? <Lock className="text-gray-600 w-10 h-10" /> : <Layers className="text-gray-400 w-10 h-10" />}
            </div>
            <p className={`font-display text-[10px] ${item.active ? 'text-flora' : item.locked ? 'text-magma' : 'text-gray-500'}`}>{item.status}</p>
            <p className="font-display text-xs font-bold uppercase">{item.label}</p>
            {item.active && <CheckCircle2 className="absolute top-2 right-2 text-flora w-5 h-5 fill-current" />}
          </div>
        ))}
      </div>

      <button 
        onClick={() => playSound('success')}
        className="w-full py-5 bg-flora text-obsidian font-display font-extrabold text-lg uppercase tracking-widest border-b-[6px] border-flora-deep voxel-brutal-btn flex items-center justify-center gap-3"
      >
        <RefreshCw className="w-6 h-6" />
        SAVE & APPLY
      </button>
    </div>
  );
};

const GameHUD = () => {
  const { playSound } = useAudio();
  return (
    <div className="fixed inset-0 z-[100] bg-obsidian-low overflow-hidden pixel-grid">
      <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <div className="bg-obsidian-high p-4 border-b-4 border-obsidian-highest">
              <div className="font-display text-5xl font-black text-flora tracking-tighter italic">1<span className="text-2xl text-gray-500 font-normal">/8</span></div>
              <div className="font-display text-xs font-bold text-gray-500 tracking-widest mt-1">POSITION</div>
            </div>
            <div className="bg-obsidian-high px-4 py-2 border-b-4 border-obsidian-highest">
              <div className="font-display text-2xl font-bold text-earth italic">2<span className="text-sm text-gray-500 font-normal">/3</span></div>
              <div className="font-display text-[10px] font-bold text-gray-500 tracking-widest">LAP</div>
            </div>
          </div>

          <div className="w-32 h-32 bg-obsidian-high border-4 border-obsidian-highest relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            <div 
              onClick={() => playSound('engine')}
              className="w-20 h-20 flex flex-col items-center justify-center bg-magma-deep border-b-8 border-magma relative animate-pulse pointer-events-auto cursor-pointer"
            >
              <Flame className="text-white w-10 h-10" />
              <div className="absolute -bottom-2 -right-2 bg-earth text-earth-deep px-2 font-display font-black text-xs">TNT</div>
            </div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-obsidian px-3 py-1 border border-obsidian-highest">
              <span className="font-display text-[10px] font-black tracking-widest text-gray-500">READY</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="bg-obsidian-high px-6 py-3 border-b-4 border-obsidian-highest">
              <div className="font-display text-3xl font-bold text-atmosphere tabular-nums tracking-tight">01:42:08</div>
            </div>
            <div className="bg-obsidian-high px-4 py-2 border-b-4 border-obsidian-highest flex items-center gap-3">
              <Diamond className="text-flora w-5 h-5 fill-current" />
              <div className="font-display text-xl font-bold text-white">1,250</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="relative w-48 h-48 bg-obsidian-low border-b-8 border-r-8 border-obsidian-highest overflow-hidden">
            <div className="absolute inset-0 pixel-grid opacity-20"></div>
            <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 100 100">
              <path d="M20,80 L80,80 L80,20 L50,20 L20,50 Z" fill="none" stroke="#484848" strokeWidth="8" />
              <path d="M20,80 L80,80 L80,20 L50,20 L20,50 Z" fill="none" stroke="#88ef77" strokeWidth="2" />
              <rect x="18" y="78" width="4" height="4" fill="#ffffff" className="animate-pulse" />
            </svg>
            <div className="absolute bottom-2 left-2 font-display text-[10px] font-bold text-gray-500 bg-obsidian px-2">MAP_VOX_04</div>
          </div>

          <div className="flex gap-4 pointer-events-auto">
            <button 
              onClick={() => playSound('click')}
              className="w-24 h-24 bg-obsidian-high border-b-8 border-obsidian-highest active:translate-y-2 active:border-b-0 transition-all flex items-center justify-center"
            >
              <ArrowLeft className="w-10 h-10 text-flora" />
            </button>
            <button 
              onClick={() => playSound('click')}
              className="w-24 h-24 bg-obsidian-high border-b-8 border-obsidian-highest active:translate-y-2 active:border-b-0 transition-all flex items-center justify-center"
            >
              <ArrowRight className="w-10 h-10 text-flora" />
            </button>
          </div>

          <div className="relative w-56 h-32 bg-obsidian-high border-b-8 border-obsidian-highest overflow-hidden flex flex-col items-center justify-end pb-4">
            <div className="absolute top-4 w-40 h-40 border-[12px] border-obsidian-highest rounded-full opacity-50"></div>
            <div className="absolute top-4 w-40 h-40 border-[12px] border-flora border-b-transparent border-l-transparent rounded-full rotate-[45deg]"></div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="font-display text-6xl font-black text-flora tracking-tighter leading-none italic">142</span>
              <span className="font-display text-xs font-bold text-gray-500 tracking-[0.3em] mt-1">KM/H</span>
            </div>
          </div>
        </div>
      </div>
      <Link 
        to="/tracks" 
        onClick={() => playSound('nav')}
        className="absolute top-4 left-4 pointer-events-auto bg-obsidian-highest p-2 border-b-4 border-obsidian-low"
      >
        <ArrowLeft className="text-flora" />
      </Link>
    </div>
  );
};

const SpectatorScreen = () => {
  const { playSound } = useAudio();
  const [cameraAngle, setCameraAngle] = React.useState('FOLLOW');
  const [activeRace, setActiveRace] = React.useState(0);

  const cameraAngles = [
    { id: 'FOLLOW', icon: <Eye className="w-4 h-4" /> },
    { id: 'BUMPER', icon: <Gamepad2 className="w-4 h-4" /> },
    { id: 'TRACKSIDE', icon: <Camera className="w-4 h-4" /> },
    { id: 'DRONE', icon: <Layers className="w-4 h-4" /> },
  ];

  const liveRaces = [
    { id: 0, track: 'Forest Valley', users: 8, status: 'LAP 2/3', color: 'flora' },
    { id: 1, track: 'Desert Ridge', users: 12, status: 'FINAL LAP', color: 'earth' },
    { id: 2, track: 'Snow Mountain', users: 5, status: 'STARTING', color: 'atmosphere' },
  ];

  return (
    <div className="pt-24 pb-32 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
      <aside className="md:col-span-3 space-y-6">
        <div className="bg-obsidian-low p-4">
          <h2 className="font-display font-extrabold text-lg text-earth mb-4 uppercase tracking-tight">LIVE RACES</h2>
          <div className="space-y-3">
            {liveRaces.map((race) => (
              <button
                key={race.id}
                onClick={() => {
                  playSound('select');
                  setActiveRace(race.id);
                }}
                className={`w-full p-4 text-left border-l-4 transition-all ${activeRace === race.id ? 'bg-obsidian-mid border-flora' : 'bg-obsidian-high border-transparent hover:bg-obsidian-mid'}`}
              >
                <p className="font-display font-bold text-xs text-gray-500 uppercase">{race.status}</p>
                <h3 className="font-display font-extrabold text-lg uppercase tracking-tight">{race.track}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <User className="w-3 h-3 text-flora" />
                  <span className="text-[10px] font-mono text-flora">{race.users} PLAYERS</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-obsidian-low p-4">
          <h2 className="font-display font-extrabold text-lg text-atmosphere mb-4 uppercase tracking-tight">CAMERA ANGLE</h2>
          <div className="grid grid-cols-2 gap-2">
            {cameraAngles.map((angle) => (
              <button
                key={angle.id}
                onClick={() => {
                  playSound('click');
                  setCameraAngle(angle.id);
                }}
                className={`p-3 flex flex-col items-center gap-2 border-b-4 transition-all ${cameraAngle === angle.id ? 'bg-atmosphere-dark border-atmosphere-deep text-white' : 'bg-obsidian-high border-obsidian-low text-gray-500 hover:text-white'}`}
              >
                {angle.icon}
                <span className="font-display text-[10px] font-bold">{angle.id}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>

      <section className="md:col-span-9 relative">
        <div className="w-full aspect-video bg-black border-b-8 border-obsidian-highest relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 pixel-grid opacity-20"></div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={cameraAngle + activeRace}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full h-full"
            >
              <img 
                src={`https://picsum.photos/seed/race${activeRace}${cameraAngle}/1280/720`}
                alt="Race View"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start">
                  <div className="bg-black/60 p-4 border-l-4 border-flora backdrop-blur-sm">
                    <p className="font-display text-[10px] font-bold text-flora uppercase">Spectating</p>
                    <h4 className="font-display font-black text-2xl uppercase tracking-tighter">VOXEL_RACER_01</h4>
                  </div>
                  <div className="bg-black/60 p-4 border-r-4 border-earth backdrop-blur-sm text-right">
                    <p className="font-display text-[10px] font-bold text-earth uppercase">Camera</p>
                    <h4 className="font-display font-black text-2xl uppercase tracking-tighter">{cameraAngle}</h4>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div className="bg-black/60 p-4 backdrop-blur-sm border-b-4 border-atmosphere">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-atmosphere-dark flex items-center justify-center font-display font-black text-2xl italic">1</div>
                      <div>
                        <p className="font-display font-bold text-atmosphere text-xs uppercase">Leader</p>
                        <p className="font-display font-extrabold text-xl uppercase tracking-tight">PIXEL_PRO_99</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-flora text-obsidian px-4 py-2 font-display font-black text-sm italic">LIVE</div>
                    <div className="bg-obsidian-highest text-white px-4 py-2 font-display font-black text-sm italic">4K_VOX</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay bg-black/20"></div>
        </div>

        <div className="mt-8 bg-obsidian-low p-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-flora rounded-full animate-pulse"></div>
              <span className="font-display font-bold text-xs tracking-widest text-flora">LIVE FEED ACTIVE</span>
            </div>
            <div className="h-8 w-px bg-obsidian-mid"></div>
            <div className="flex items-center gap-4">
              <button onClick={() => playSound('click')} className="text-gray-500 hover:text-white transition-colors">
                <RefreshCw className="w-5 h-5" />
              </button>
              <button onClick={() => playSound('click')} className="text-gray-500 hover:text-white transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <Link 
              to="/tracks"
              onClick={() => playSound('error')}
              className="px-8 py-3 bg-magma-deep text-white font-display font-black text-sm border-b-4 border-magma voxel-brutal-btn uppercase italic tracking-widest"
            >
              EXIT SPECTATOR
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <AudioProvider>
      <Router>
        <div className="min-h-screen bg-obsidian text-white font-sans selection:bg-flora selection:text-obsidian">
          <Routes>
            <Route path="/" element={<><TopBar title="PLAYER_DATA" /><HomeScreen /><BottomNav /></>} />
            <Route path="/garage" element={<><TopBar title="GARAGE" /><GarageScreen /><BottomNav /></>} />
            <Route path="/tracks" element={<><TopBar title="TRACKS" /><TracksScreen /><BottomNav /></>} />
            <Route path="/ranks" element={<><TopBar title="RANKS" /><RanksScreen /><BottomNav /></>} />
            <Route path="/shop" element={<><TopBar title="SHOP" /><ShopScreen /><BottomNav /></>} />
            <Route path="/missions" element={<><TopBar title="MISSIONS" /><MissionsScreen /><BottomNav /></>} />
            <Route path="/settings" element={<><TopBar title="SETTINGS" /><SettingsScreen /><BottomNav /></>} />
            <Route path="/customize" element={<><TopBar title="CUSTOMIZE" /><CustomizeScreen /><BottomNav /></>} />
            <Route path="/spectator" element={<><TopBar title="SPECTATOR_MODE" /><SpectatorScreen /><BottomNav /></>} />
            <Route path="/game" element={<GameHUD />} />
          </Routes>
        </div>
      </Router>
    </AudioProvider>
  );
}
