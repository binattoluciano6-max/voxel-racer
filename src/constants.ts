export const TRACKS = [
  {
    id: 'forest-valley',
    name: 'Forest Valley',
    circuit: '01 // STARTER CIRCUIT',
    difficulty: 'EASY',
    stars: 2,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
    color: 'flora'
  },
  {
    id: 'desert-ridge',
    name: 'Desert Ridge',
    circuit: '02 // DUST BOWL',
    difficulty: 'HARD',
    stars: 4,
    image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80&w=800',
    color: 'earth'
  },
  {
    id: 'snow-mountain',
    name: 'Snow Mountain',
    circuit: '03 // FROST PEAK',
    difficulty: 'EXTREME',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    color: 'atmosphere'
  }
];

export const MATERIALS = [
  { id: 'obsidian', name: 'Obsidian', color: '#1a1a1a', border: '#000000', top: '#333333' },
  { id: 'diamond', name: 'Diamond', color: '#63b0ff', border: '#003b67', top: '#94cbff' },
  { id: 'wood', name: 'Wood', color: '#663d1d', border: '#3d210a', top: '#8b5a2b' },
  { id: 'stone', name: 'Stone', color: '#767575', border: '#484848', top: '#9b9b9b' }
];

export const RANKINGS = [
  { rank: 1, name: 'PixelPro_99', title: 'CHAMPION', emeralds: '15,200', color: 'flora' },
  { rank: 2, name: 'VoxelViper', title: 'SILVER', emeralds: '13,800', color: 'earth' },
  { rank: 3, name: 'BlockBurner', title: 'BRONZE', emeralds: '12,900', color: 'atmosphere' },
  { rank: 4, name: 'NeonDrifter', chassis: 'Standard Voxel Chassis', emeralds: '12,450' },
  { rank: 5, name: 'CubeKing', chassis: 'Aerodynamic Wedge', emeralds: '11,820' },
  { rank: 6, name: 'BlockMaster', chassis: 'Obsidian Frame', emeralds: '10,900' },
  { rank: 7, name: 'GridRacer', chassis: 'Flora Engine Mk II', emeralds: '9,750' },
  { rank: 8, name: 'ApexPredator', chassis: 'Magma Speedster', emeralds: '9,200' }
];

export const MISSIONS = [
  { id: 'speed-demon', title: 'SPEED_DEMON', desc: 'Reach 200km/h in a race.', progress: 100, total: 100, reward: '50 Emeralds', status: 'COMPLETED' },
  { id: 'drift-master', title: 'DRIFT_MASTER', desc: 'Drift for a total of 1000m.', progress: 450, total: 1000, reward: '100 Emeralds', status: 'IN_PROGRESS' },
  { id: 'podium-finish', title: 'PODIUM_FINISH', desc: 'Finish in the top 3 in 5 races.', progress: 2, total: 5, reward: 'RARE_CHEST', status: 'IN_PROGRESS' },
  { id: 'block-breaker', title: 'BLOCK_BREAKER', desc: 'Hit 50 destructible blocks.', progress: 12, total: 50, reward: '75 Emeralds', status: 'IN_PROGRESS' }
];

export const SHOP_ITEMS = [
  { id: 'volcanic-speeder', name: 'VOLCANIC_SPEEDER', price: '5,000', rarity: 'LEGENDARY', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800', color: 'magma' },
  { id: 'golden-chassis', name: 'GOLDEN_CHASSIS', price: '2,500', rarity: 'EPIC', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400', color: 'atmosphere' },
  { id: 'obsidian-pack', name: 'OBSIDIAN_PACK', price: '850', rarity: 'RARE', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400', color: 'earth' }
];

export const VEHICLE_PARTS = {
  CHASSIS: [
    { id: 'standard', name: 'Standard Voxel', speed: 50, durability: 60, weight: 50, image: 'https://picsum.photos/seed/chassis1/800/600' },
    { id: 'diamond', name: 'Diamond Streak', speed: 85, durability: 40, weight: 30, image: 'https://picsum.photos/seed/chassis2/800/600' },
    { id: 'heavy', name: 'Obsidian Tank', speed: 30, durability: 95, weight: 90, image: 'https://picsum.photos/seed/chassis3/800/600' },
  ],
  ENGINE: [
    { id: 'v6', name: 'V6 Block', speed: 60, durability: 70, weight: 40, image: 'https://picsum.photos/seed/engine1/800/600' },
    { id: 'v12', name: 'V12 Nitro', speed: 95, durability: 50, weight: 70, image: 'https://picsum.photos/seed/engine2/800/600' },
    { id: 'electric', name: 'Flux Core', speed: 80, durability: 80, weight: 30, image: 'https://picsum.photos/seed/engine3/800/600' },
  ],
  WHEELS: [
    { id: 'slick', name: 'Racing Slicks', speed: 90, durability: 30, weight: 20, image: 'https://picsum.photos/seed/wheels1/800/600' },
    { id: 'offroad', name: 'Dirt Diggers', speed: 50, durability: 80, weight: 50, image: 'https://picsum.photos/seed/wheels2/800/600' },
    { id: 'hover', name: 'Mag-Lev Pods', speed: 85, durability: 60, weight: 10, image: 'https://picsum.photos/seed/wheels3/800/600' },
  ],
  SPOILER: [
    { id: 'none', name: 'No Spoiler', speed: 50, durability: 50, weight: 0, image: 'https://picsum.photos/seed/spoiler1/800/600' },
    { id: 'wing', name: 'GT Wing', speed: 70, durability: 40, weight: 10, image: 'https://picsum.photos/seed/spoiler2/800/600' },
    { id: 'active', name: 'Active Aero', speed: 90, durability: 60, weight: 20, image: 'https://picsum.photos/seed/spoiler3/800/600' },
  ]
};
