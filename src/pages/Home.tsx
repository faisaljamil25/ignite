import React from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesActions";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div>
      <h1>Hello Ignite!</h1>
    </div>
  );
};

export default Home;
