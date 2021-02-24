interface Games {
  popular: Array<string>;
  newGames: Array<string>;
  upcoming: Array<string>;
  searched: Array<string>;
}

const initState: Games = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state: Games = initState, action: any) => {
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
