export const SPOIL_TYPE_MAP_EGG_IMAGE = {
  3: 'speed-dragon-egg.png',
  4: 'attack-dragon-egg.png',
  5: 'delay-dragon-egg.png',
  6: 'mystic-dragon-egg.png',
} as const;

export type EggType = keyof typeof SPOIL_TYPE_MAP_EGG_IMAGE;
