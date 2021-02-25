import axios from "axios";
import { Dispatch } from "redux";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../../api";

export const loadGames = () => async (dispatch: Dispatch) => {
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
