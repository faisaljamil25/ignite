export interface Platform {
  id: number;
  name: string;
}

export interface ScreenShots {
  id: number;
  image: string;
}

export interface Games {
  id: number;
  name: string;
  image: string;
  released: string;
  background_image: string;
  platforms: Array<Platform>;
  short_screenshots: Array<ScreenShots>;
}
export interface IndvGame {
  id: number;
  name: string;
  description: string;
  rating: number;
}

export interface GamesTypes {
  popular: Array<Games>;
  newGames: Array<Games>;
  upcoming: Array<Games>;
  searched: Array<Games>;
}
export interface IndvGameTypes {
  gameData: Array<IndvGame>;
}

export interface GamesActionTypes {
  type: string;
  payload: GamesTypes;
}
export interface IndvGameActionTypes {
  type: string;
  payload: IndvGameTypes;
}
