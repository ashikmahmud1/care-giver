import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function ProfileCareseeker() {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create Senior's Profile
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="seniorName"
                label="Senior Name"
                name="seniorName"
                autoComplete="seniorName"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined">
                <InputLabel ref={inputLabel} htmlFor="gender">
                  Gender
                </InputLabel>
                <Select
                  native
                  required
                  labelWidth={labelWidth}
                  name="gender"
                  inputProps={{
                    name: "gender",
                    id: "gender"
                  }}
                >
                  <option value="" />
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                autoComplete="age"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Years</InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                autoComplete="city"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined">
                <InputLabel ref={inputLabel} htmlFor="state">
                  State
                </InputLabel>
                <Select
                  native
                  required
                  labelWidth={labelWidth}
                  name="state"
                  inputProps={{
                    name: "state",
                    id: "state"
                  }}
                >
                  <option value="" />
                  <option value="Toronto">Toronto</option>
                  <option value="Ottawa">Ottawa</option>
                  <option value="British Columbia">British Columbia</option>
                  <option value="Calgary">Calgary</option>
                  <option value="Manitoba">Manitoba</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="zip"
                label="Zip"
                name="zip"
                autoComplete="zip"
              />
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "inline-flex" }}>
                <div>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="physicalComplications"
                    label="Physical Complications"
                    name="physicalComplications"
                    autoComplete="physicalComplications"
                  />
                </div>
                <div style={{ alignSelf: "center" }}>
                  <Fab size="small" color="secondary" aria-label="add">
                    <AddIcon />
                  </Fab>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "inline-flex" }}>
                <div>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="languages"
                    label="Languages"
                    name="languages"
                    autoComplete="languages"
                  />
                </div>
                <div style={{ alignSelf: "center" }}>
                  <Fab size="small" color="secondary" aria-label="add">
                    <AddIcon />
                  </Fab>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*"
                className={classes.input}
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file">
                <InputLabel htmlFor="upload-btn">
                  Upload a nice profile picture of your's
                </InputLabel>
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  className={classes.button}
                >
                  Upload
                </Button>
              </label>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
