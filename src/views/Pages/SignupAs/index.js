// Can be deleted. It has no use

import React from 'react';
import {Button, Link, Dialog, DialogActions, DialogTitle, Slide} from '@material-ui/core';
// import Link from '@material-ui/core/Link';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignupAs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <Link component='button' variant="outlined" color="primary" onClick={handleClickOpen}>
        Signup
      </Link>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Signup
      </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Choose your role to signup"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            As Caregiver
          </Button>
          <Button onClick={handleClose} color="primary">
            As Careseeker
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
