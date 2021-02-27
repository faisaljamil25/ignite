import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { CardHeader, Grid } from "@material-ui/core";
import GameDialog from "./gameDialog";
import { useDispatch } from "react-redux";
import loadGameDetails from "../store/actions/gameDetailsActions";
import { Games } from "../store/types";
import { smallImage } from "../util";
import Zoom from "@material-ui/core/Zoom";

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
  const { id, name, released, background_image } = game;

  return (
    <Zoom in={true}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <GameDialog open={open} setOpen={setOpen} game={game} />
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
              image={smallImage(background_image, 640)}
              title={name}
            />
          </CardActionArea>
        </Card>
      </Grid>
    </Zoom>
  );
};

export default Game;
