import axios from "axios";
import { popularGamesURL } from "../api";
import { upcomingGamesURL } from "../api";
import { newGamesURL } from "../api";

export const loadGames = () => async (dispatch: any) => {
  const popularGamesData = await axios.get(popularGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      newGames: upcomingGamesData.data.results,
      upcoming: newGamesData.data.results,
    },
  });
};
