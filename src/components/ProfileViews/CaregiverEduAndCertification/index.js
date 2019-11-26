import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import SchoolIcon from "@material-ui/icons/School";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(1, 1)
  }
}));

export default function UncontrolledTextField() {
  const classes = useStyles();

  return (
    <Container>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <SchoolIcon /> Add Your Educational History
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          <div>
            <TextField
              id="filled-school-input"
              label="School/College/University"
              className={classes.textField}
              type="school"
              autoComplete="current-school"
              margin="normal"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">1.</InputAdornment>
                )
              }}
            />
            <TextField
              id="filled-degree-input"
              label="Degree"
              className={classes.textField}
              type="degree"
              autoComplete="current-degree"
              margin="normal"
              variant="filled"
            />

            <TextField
              id="filled-fieldofstudy-input"
              label="Field of Study"
              className={classes.textField}
              type="fieldofstudy"
              autoComplete="current-fieldofstudy"
              margin="normal"
              variant="filled"
            />
          </div>
          <Divider variant="middle" />
          <div>
            <TextField
              id="filled-school-input"
              label="School/College/University"
              className={classes.textField}
              type="school"
              autoComplete="current-school"
              margin="normal"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">2.</InputAdornment>
                )
              }}
            />
            <TextField
              id="filled-degree-input"
              label="Degree"
              className={classes.textField}
              type="degree"
              autoComplete="current-degree"
              margin="normal"
              variant="filled"
            />
            <TextField
              id="filled-fieldofstudy-input"
              label="Field of Study"
              className={classes.textField}
              type="fieldofstudy"
              autoComplete="current-fieldofstudy"
              margin="normal"
              variant="filled"
            />
          </div>
          <Divider />
          <div>
            <div style={{ display: "inline-flex" }}>
              <div>
                <TextField
                  id="filled-school-input"
                  label="School/College/University"
                  className={classes.textField}
                  type="school"
                  autoComplete="current-school"
                  margin="normal"
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">3.</InputAdornment>
                    )
                  }}
                />
                <TextField
                  id="filled-degree-input"
                  label="Degree"
                  className={classes.textField}
                  type="degree"
                  autoComplete="current-degree"
                  margin="normal"
                  variant="filled"
                />
                <TextField
                  id="filled-fieldofstudy-input"
                  label="Field of Study"
                  className={classes.textField}
                  type="fieldofstudy"
                  autoComplete="current-fieldofstudy"
                  margin="normal"
                  variant="filled"
                />
              </div>
              <div style={{ alignSelf: "center" }}>
                <Tooltip title="Add more" aria-label="add">
                  <Fab size="small" color="secondary" className={classes.fab}>
                    <AddIcon />
                  </Fab>
                </Tooltip>
              </div>
            </div>
          </div>
        </form>
        <Divider />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            <SchoolIcon /> Add Your Professional Certifications History
          </Typography>
          <form className={classes.container} noValidate autoComplete="off">
            <div>
              <TextField
                id="filled-institution-input"
                label="Institution"
                className={classes.textField}
                type="institution"
                autoComplete="current-institution"
                margin="normal"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">1.</InputAdornment>
                  )
                }}
              />
              <TextField
                id="filled-certification-input"
                label="Certification on"
                className={classes.textField}
                type="certification"
                autoComplete="current-certification"
                margin="normal"
                variant="filled"
              />
              <TextField
                id="filled-fieldofstudy-input"
                label="Field of Study"
                className={classes.textField}
                type="fieldofstudy"
                autoComplete="current-fieldofstudy"
                margin="normal"
                variant="filled"
              />
            </div>
            <Divider variant="middle" />
            <div>
              <TextField
                id="filled-institution-input"
                label="Institution"
                className={classes.textField}
                type="institution"
                autoComplete="current-institution"
                margin="normal"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">2.</InputAdornment>
                  )
                }}
              />
              <TextField
                id="filled-certification-input"
                label="Certification on"
                className={classes.textField}
                type="certification"
                autoComplete="current-certification"
                margin="normal"
                variant="filled"
              />
              <TextField
                id="filled-fieldofstudy-input"
                label="Field of Study"
                className={classes.textField}
                type="fieldofstudy"
                autoComplete="current-fieldofstudy"
                margin="normal"
                variant="filled"
              />
            </div>
            <Divider />
            <div>
              <div style={{ display: "inline-flex" }}>
                <div>
                  <TextField
                    id="filled-institution-input"
                    label="Institution"
                    className={classes.textField}
                    type="institution"
                    autoComplete="current-institution"
                    margin="normal"
                    variant="filled"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">3.</InputAdornment>
                      )
                    }}
                  />
                  <TextField
                    id="filled-certification-input"
                    label="Certification on"
                    className={classes.textField}
                    type="certification"
                    autoComplete="current-certification"
                    margin="normal"
                    variant="filled"
                  />
                  <TextField
                    id="filled-fieldofstudy-input"
                    label="Field of Study"
                    className={classes.textField}
                    type="fieldofstudy"
                    autoComplete="current-fieldofstudy"
                    margin="normal"
                    variant="filled"
                  />
                </div>
                <div style={{ alignSelf: "center" }}>
                  <Tooltip title="Add more" aria-label="add">
                    <Fab size="small" color="secondary" className={classes.fab}>
                      <AddIcon />
                    </Fab>
                  </Tooltip>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
