import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { CardHeader, Grid } from "@material-ui/core";
import GameDialog from "./gameDialog";
import { useDispatch, useSelector } from "react-redux";
import loadGameDetails from "../store/actions/gameDetailsActions";
import { RootState } from "../store/reducers";
import { Games } from "../store/types";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  card: {
    // maxWidth: 345,
    width: "90%",
  },
  header: {
    textAlign: "center",
    margin: theme.spacing(2),
  },
  media: {
    height: 275,
  },
}));

interface GameProps {
  game: Games;
}

const Game: React.FC<GameProps> = ({ game }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState<boolean>(false);

  const gameDialog = () => {
    dispatch(loadGameDetails(id));
    setOpen(true);
  };
  const {
    id,
    name,
    released,
    background_image,
    platforms,
    short_screenshots,
  } = game;
  const { gameData } = useSelector((state: RootState) => state.gameDetails);
  const { description_raw, rating } = gameData;

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <GameDialog
        open={open}
        setOpen={setOpen}
        game={game}
        description={description_raw}
        rating={rating}
      />
      <Card className={classes.card} raised onClick={gameDialog}>
        <CardActionArea>
          <CardHeader
            className={classes.header}
            title={name}
            subheader={released}
            titleTypographyProps={{ variant: "h6" }}
          />
          <CardMedia
            className={classes.media}
            image={background_image}
            title={name}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Game;
