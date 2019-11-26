import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  margin: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(6)
  },
  margin2: {
    marginTop: theme.spacing(2)
  }
}));

export default function Body() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Peace of mind
        </Typography>
        <Typography component="h1" variant="h6" className={classes.margin2}>
          We truly care about your beloved older one.
        </Typography>
        <Grid item>
          <Button
            variant="contained"
            size="large"
            color="primary"
            href="/caregiver-profiles"
            className={classes.margin}
          >
            I'm a Care Seeker
          </Button>
        </Grid>
        <Grid item>
          <p>
            Are you a caregiver?{" "}
            <Link href="/signup-caregiver">Click here</Link> to register/login
            on Peace of mind
          </p>
        </Grid>
      </div>
    </Container>
  );
}
