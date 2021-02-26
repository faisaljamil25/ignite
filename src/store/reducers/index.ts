import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import GameDetailsReducer from "./GameDetailsReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  gameDetails: GameDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
