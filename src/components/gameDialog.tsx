import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Box, makeStyles } from "@material-ui/core";
import { Games } from "../store/types";

const useStyles = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(4, 5, 2),
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(10, 25, 4),
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(8, 15, 2),
    },
  },
}));

interface DialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  game: Games;
  description: string;
  rating: number;
}

const GameDialog: React.FC<DialogProps> = ({
  open,
  setOpen,
  game,
  description,
  rating,
}) => {
  const {
    name,
    released,
    background_image,
    platforms,
    short_screenshots,
  } = game;
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle id="scroll-dialog-title" className={classes.padding}>
          {name} {released}
        </DialogTitle>
        <DialogContent className={classes.padding}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <Box textAlign="center">
              <img src={background_image} alt={name} width="80%" />
            </Box>
            {description}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GameDialog;
