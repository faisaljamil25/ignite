import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import IndividualGameReducer from "./IndvGameReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  individualGame: IndividualGameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
