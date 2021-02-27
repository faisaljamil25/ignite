import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import GameList from "../components/gameList";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useDispatch } from "react-redux";
import { searchGames } from "../store/actions/gamesActions";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    lineHeight: "140%",
    width: "35%",
    padding: theme.spacing(1, 2),
    borderRadius: 0,
    border: "none",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: "1rem",
    boxShadow:
      "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      padding: theme.spacing(1, 3),
    },
  },
  button: {
    padding: theme.spacing(1, 3),
    borderRadius: 0,
    border: "none",
    background: "#e25822",
    color: "white",
    cursor: "pointer",
    boxShadow:
      "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
    fontSize: "1rem",
    fontFamily: "Montserrat",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1, 3),
    },
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [textInput, setTextInput] = React.useState<string>("");

  const inputHandler = (e: any) => {
    e.preventDefault();
    setTextInput(e.target.value);
  };
  const submitSearch = () => {
    dispatch(searchGames(textInput));
    setTextInput("");
  };
  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCH" });
    setTextInput("");
  };
  return (
    <div className={classes.root}>
      <Box mb={4} mt={2} textAlign="center" className={classes.title}>
        <div
          onClick={clearSearch}
          style={{ cursor: "pointer" }}
          className={classes.title}
        >
          <WhatshotIcon fontSize="large" />
          <Typography variant="h4">IGNITE</Typography>
        </div>
      </Box>
      <Box mb={12} className={classes.searchBox}>
        <input
          value={textInput}
          id="search"
          className={classes.input}
          onInput={inputHandler}
        />
        <button className={classes.button} onClick={submitSearch}>
          Search
        </button>
      </Box>
      <Box>
        <GameList />
      </Box>
    </div>
  );
};

export default Home;
