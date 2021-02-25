import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../store/actions/gamesActions";
import { RootState } from "../store/reducers";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const games = useSelector((state: RootState) => state.games);
  console.log(games);

  return (
    <div>
      <h1>Hello Ignite!</h1>
    </div>
  );
};

export default Home;
