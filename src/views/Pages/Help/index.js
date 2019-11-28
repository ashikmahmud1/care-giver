import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
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

export default function Help() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div position="fixed" className={classes.margin}>
        <img src={require("../../../img/screen.png")} alt="" />
      </div>
      <div className={classes.paper}>
        <Typography variant="h4">Help</Typography>
      </div>
    </Container>
  );
}
