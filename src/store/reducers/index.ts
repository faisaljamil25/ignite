import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
