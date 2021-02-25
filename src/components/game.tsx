import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { CardHeader, Grid } from "@material-ui/core";

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

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Card className={classes.card}>
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
