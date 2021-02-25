export interface GamesTypes {
  popular: Array<string>;
  newGames: Array<string>;
  upcoming: Array<string>;
  searched: Array<string>;
}

export interface GamesActionTypes {
  type: string;
  payload: GamesTypes;
}
