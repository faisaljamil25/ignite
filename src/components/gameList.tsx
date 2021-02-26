import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Game from "../components/game";
import loadGames from "../store/actions/gamesActions";
import { RootState } from "../store/reducers";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
  },
  gameTitle: {
    margin: theme.spacing(4),
    color: "#b05cff",
  },
}));
const GameList: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { popular, upcoming, newGames } = useSelector(
    (state: RootState) => state.games
  );
  return (
    <div className={classes.root}>
      <Box>
        {" "}
        <Typography variant="h4" className={classes.gameTitle}>
          Popular Games
        </Typography>
        <Grid container justify="flex-start" alignItems="center">
          {popular.map((game) => (
            <Grid item xs={10} sm={6} md={4} key={game.id}>
              <Game game={game} />
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* <Box>
        {" "}
        <Typography variant="h4" className={classes.gameTitle}>
          New Games
        </Typography>
        <Grid container justify="center" alignItems="center">
          {newGames.map((game) => (
            <Grid item xs={10} sm={6} md={4}>
              <Game
                game={game}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        {" "}
        <Typography variant="h4" className={classes.gameTitle}>
          Upcoming Games
        </Typography>
        <Grid container justify="center" alignItems="center">
          {upcoming.map((game) => (
            <Grid item xs={10} sm={6} md={4}>
              <Game
                game={game}
              />
            </Grid>
          ))}
        </Grid>
      </Box> */}
    </div>
  );
};

export default GameList;
