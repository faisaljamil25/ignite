import axios from "axios";
import { Dispatch } from "redux";
import { gameURL } from "../../api";

const loadGameDetails = (id: number) => async (dispatch: Dispatch) => {
  const game = await axios.get(gameURL(id));
  dispatch({
    type: "GET_GAME_DETAILS",
    payload: {
      gameData: game.data,
    },
  });
};

export default loadGameDetails;
