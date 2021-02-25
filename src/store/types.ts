export interface Games {
  id: number;
  name: string;
  image: string;
  released: string;
  background_image: string;
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
