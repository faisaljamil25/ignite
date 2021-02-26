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
  released: string;
  background_image: string;
  platforms: Array<Platform>;
  short_screenshots: Array<ScreenShots>;
}
export interface GamesTypes {
  popular: Array<Games>;
  newGames: Array<Games>;
  upcoming: Array<Games>;
  searched: Array<Games>;
}

export interface GamesActionTypes {
  type: string;
  payload: GamesTypes;
}
export interface GameDetails {
  id: number;
  name: string;
  description_raw: string;
  rating: number;
  released: string;
  background_image: string;
}
export interface GameDetailsTypes {
  gameData: GameDetails;
}

export interface GameDetailsActionTypes {
  type: string;
  payload: GameDetailsTypes;
}
