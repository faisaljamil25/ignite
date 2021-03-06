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
    color: "#e25822",
    fontFamily: "Abril Fatface",
  },
}));
const GameList: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { popular, upcoming, newGames, searched } = useSelector(
    (state: RootState) => state.games
  );
  return (
    <div className={classes.root}>
      {searched.length ? (
        <Box>
          {" "}
          <Typography variant="h4" className={classes.gameTitle}>
            Searched Games
          </Typography>
          <Grid container justify="flex-start" alignItems="center">
            {searched.map((game) => (
              <Grid item xs={12} sm={6} md={4} key={game.id}>
                <Game game={game} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        ""
      )}
      <Box>
        {" "}
        <Typography variant="h4" className={classes.gameTitle}>
          Popular Games
        </Typography>
        <Grid container justify="flex-start" alignItems="center">
          {popular.map((game) => (
            <Grid item xs={12} sm={6} md={4} key={game.id}>
              <Game game={game} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        {" "}
        <Typography variant="h4" className={classes.gameTitle}>
          New Games
        </Typography>
        <Grid container justify="flex-start" alignItems="center">
          {newGames.map((game) => (
            <Grid item xs={12} sm={6} md={4} key={game.id}>
              <Game game={game} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        {" "}
        <Typography variant="h4" className={classes.gameTitle}>
          Upcoming Games
        </Typography>
        <Grid container justify="flex-start" alignItems="center">
          {upcoming.map((game) => (
            <Grid item xs={12} sm={6} md={4} key={game.id}>
              <Game game={game} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default GameList;
