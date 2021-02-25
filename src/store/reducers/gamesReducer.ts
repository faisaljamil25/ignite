import { GamesActionTypes, GamesTypes } from "../types";

const initState: GamesTypes = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (
  state = initState,
  action: GamesActionTypes
): GamesTypes => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
