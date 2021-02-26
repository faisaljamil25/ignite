import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { CardHeader, Grid } from "@material-ui/core";
import GameDialog from "./gameDialog";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  card: {
    // maxWidth: 345,
    minWidth: "90%",
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
  name: string;
  released: string;
  image: string;
}

const Game: React.FC<GameProps> = ({ name, released, image }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);

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
        name={name}
        released={released}
        image={image}
      />
      <Card className={classes.card} raised onClick={() => setOpen(true)}>
        <CardActionArea>
          <CardHeader
            className={classes.header}
            title={name}
            subheader={released}
            titleTypographyProps={{ variant: "body1" }}
          />
          <CardMedia className={classes.media} image={image} title={name} />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Game;
