import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Box, makeStyles } from "@material-ui/core";

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
  name: string;
  released: string;
  image: string;
}

const GameDialog: React.FC<DialogProps> = ({
  open,
  setOpen,
  name,
  released,
  image,
}) => {
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
              <img src={image} alt={name} width="80%" />
            </Box>
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GameDialog;
