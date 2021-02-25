import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import GameList from "../components/gameList";
import WhatshotIcon from "@material-ui/icons/Whatshot";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "30%",
    padding: theme.spacing(2, 2),
    borderRadius: 0,
    border: "none",
    boxShadow: "1px 5px 5px 1px #ccc",
  },
  button: {
    padding: theme.spacing(2, 6),
    borderRadius: 0,
    border: "none",
    background: "#b05cff",
    color: "white",
    cursor: "pointer",
    boxShadow: "0px 5px 5px 1px #ccc",
    fontSize: "1rem",
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box mb={4} textAlign="center" className={classes.title}>
        <WhatshotIcon fontSize="large" />
        <Typography variant="h4">Ignite</Typography>
      </Box>
      <Box mb={12} className={classes.searchBox}>
        <input id="search" className={classes.input} />
        <button className={classes.button}>Search</button>
      </Box>
      <Box>
        <GameList />
      </Box>
    </div>
  );
};

export default Home;
