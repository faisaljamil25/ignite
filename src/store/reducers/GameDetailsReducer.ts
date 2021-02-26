import { GameDetailsTypes, GameDetailsActionTypes } from "../types";

const initState: GameDetailsTypes = {
  gameData: {
    id: 0,
    name: "",
    description_raw: "",
    rating: 0,
    released: "",
    background_image: "",
  },
};

const GameDetailsReducer = (
  state = initState,
  action: GameDetailsActionTypes
): GameDetailsTypes => {
  switch (action.type) {
    case "GET_GAME_DETAILS":
      return {
        ...state,
        gameData: action.payload.gameData,
      };
    default:
      return { ...state };
  }
};

export default GameDetailsReducer;
