import { IndvGameActionTypes, IndvGameTypes } from "../types";

const initState: IndvGameTypes = {
  gameData: [],
};

const IndividualGameReducer = (
  state = initState,
  action: IndvGameActionTypes
): IndvGameTypes => {
  switch (action.type) {
    case "INDIVIDUAL_GAME":
      return {
        ...state,
        gameData: action.payload.gameData,
      };
    default:
      return { ...state };
  }
};

export default IndividualGameReducer;
