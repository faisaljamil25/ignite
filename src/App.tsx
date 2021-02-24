import React from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesActions";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div className="App">
      <h1>Hello Ignite!</h1>
    </div>
  );
}

export default App;
