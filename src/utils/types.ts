export interface Player {
  id: number;
  name: string;
  spec: string;
}

export interface Boss {
  id: number;
  name: string;
  items?: { [id: number]: Item };
}

export interface Item {
  id: number;
  name: string;
}

export interface Upgrade {
  characterID: number;
  itemID: number;
  dsp: number;
  baseDps: number;
  spec: string;
  timeStamp: string;
}
