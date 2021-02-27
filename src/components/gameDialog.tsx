import React from "react";
import { RootState } from "../store/reducers";
import { useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  Box,
  Grid,
  Hidden,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Games } from "../store/types";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    padding: theme.spacing(10, 25, 2),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(6, 15, 1),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(4, 6, 1),
    },
  },
  dialogContent: {
    padding: theme.spacing(2, 25, 2),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1, 15, 1),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1, 6, 1),
    },
  },
  image: {
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  star: {
    color: "#e25822",
  },
}));

const Ratings: React.FC<{ ratings: number }> = ({ ratings }) => {
  const classes = useStyles();
  const star = Math.floor(ratings);
  const halfStar = ratings - star > 0 ? 1 : 0;
  const outline = 5 - star - halfStar;
  return (
    <>
      {[...new Array(star)].map((value) => (
        <StarIcon className={classes.star} key={value} />
      ))}
      {[...new Array(halfStar)].map((value) => (
        <StarHalfIcon className={classes.star} key={value} />
      ))}
      {[...new Array(outline)].map((value) => (
        <StarOutlineIcon className={classes.star} key={value} />
      ))}
    </>
  );
};

const getPlatform = (platform: string) => {
  switch (platform) {
    case "PC":
      return "pc.svg";
    case "PlayStation 4":
    case "PlayStation 5":
      return "playstation.svg";
    case "iOS":
    case "macOS":
      return "apple.svg";
    case "Xbox One":
      return "xbox.svg";
    case "Nintendo Switch":
      return "nintendo.svg";
    case "Android":
      return "android.svg";
    case "Web":
      return "steam.svg";
    default:
      return "gamepad.svg";
  }
};

interface DialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  game: Games;
}

const GameDialog: React.FC<DialogProps> = ({ open, setOpen, game }) => {
  const { name, background_image, platforms, short_screenshots } = game;
  const classes = useStyles();
  const { gameData, isLoading } = useSelector(
    (state: RootState) => state.gameDetails
  );
  const { description_raw, rating } = gameData;

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {!isLoading && (
        <Dialog
          open={open}
          onClose={handleClose}
          scroll="body"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          maxWidth="lg"
        >
          <DialogTitle id="scroll-dialog-title" className={classes.dialogTitle}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Typography variant="h4" style={{ fontFamily: "Abril Fatface" }}>
                {name}
              </Typography>
              <Hidden xsDown>
                <Box textAlign="right">
                  <Typography variant="h5">Platforms</Typography>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    {platforms.map((data) => (
                      <Box key={data.platform.id} ml={2} mt={2}>
                        <Tooltip title={data.platform.name}>
                          <img
                            src={getPlatform(data.platform.name)}
                            alt={data.platform.name}
                            width="40px"
                          />
                        </Tooltip>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Hidden>
            </Box>
          </DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <DialogContentText
              id="scroll-dialog-description"
              tabIndex={-1}
              style={{ outline: "none" }}
            >
              <Box mb={4} display="flex" alignItems="flex-start">
                {<Ratings ratings={rating} />} &nbsp; {rating}
              </Box>
              <Box textAlign="center" mb={4}>
                <img
                  src={background_image}
                  alt={name}
                  className={classes.image}
                />
              </Box>
              <Box mb={4}>{description_raw}</Box>
              <Grid container justify="flex-start" alignItems="center">
                {short_screenshots.map((img) => (
                  <Grid item xs={6} sm={4} md={3} key={img.id}>
                    <img src={img.image} alt={name} width="90%" />
                  </Grid>
                ))}
              </Grid>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default GameDialog;
