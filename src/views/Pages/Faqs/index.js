import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  margin: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default function Body() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div position="fixed" className={classes.margin}>
        <img src={require("../../../img/screen.png")} alt="" />
      </div>
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Frequently Asked Questions
        </Typography>
      </div>
    </Container>
  );
}
