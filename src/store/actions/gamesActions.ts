import axios from "axios";
import { Dispatch } from "redux";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  gameURL,
} from "../../api";

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

export const loadIndvgame = (id: number) => async (dispatch: Dispatch) => {
  const getGameURL = `${gameURL()}games/${id} `;
  const game = await axios.get(getGameURL);
  dispatch({
    type: "INDIVIDUAL_GAME",
    payload: {
      gameData: game.data,
    },
  });
};
