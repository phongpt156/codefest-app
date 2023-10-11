export interface MapInfo {
  size: {
    cols: number;
    rows: number;
  };
  players: {
    id: string;
    currentPosition: {
      col: number;
      row: number;
    };
    spawnBegin: {
      col: number;
      row: number;
    };
    score: number;
    lives: number;
    speed: number;
    power: number;
    delay: number;
    dragonEggSpeed: number;
    dragonEggAttack: number;
    dragonEggDelay: number;
    dragonEggMystic: number;
    pill: number;
    box: number;
    humanCured: number;
    virus: number;
    pillUsed: number;
    humanSaved: number;
    virusInfected: number;
    humanInfected: number;
    quarantine: number;
    attackDragonEgg: number;
  }[];
  map: number[][];
  bombs: {
    playerId: string;
    row: number;
    col: number;
    remainTime: number;
  }[];
  spoils: {
    row: number;
    col: number;
    spoil_type: number;
  }[];
  gameStatus?: string;
  viruses: any[];
  human: any[];
  virusSpeed: number;
  humanSpeed: number;
}
