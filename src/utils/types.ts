export interface Player {
  id: number;
  class: number;
  thumbnail: string;
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
  icon: string;
}

export interface Upgrade extends Player {
  characterID: number;
  itemID: number;
  reportID: string;
  dps: number;
  baseDps: number;
  spec: string;
  timeStamp: string;
  simcLastModified: number | null;
}

export interface UrlParameters {
  bossId: string;
  itemId: string;
}
