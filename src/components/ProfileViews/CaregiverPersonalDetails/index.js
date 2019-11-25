import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

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
    alignItems: "center",
    padding: theme.spacing(1, 1)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  textField: {
    width: 400
  },
  formControl: {
    width: 400,
    minWidth: 120
  }
}));

export default function InputAdornments() {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const [values, setValues] = React.useState({
    hourlyWage: ""
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add Your Personal Details
        </Typography>
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="What is your hourly wage?"
                  variant="outlined"
                  required
                  fullWidth
                  id="hourlyWage"
                  name="hourlyWage"
                  autoComplete="hourlyWage"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="How many years of experience you have?"
                  id="experience"
                  name="experience"
                  autoComplete="experience"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Years</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="transportation">
                    Do you provide Transportation?
                  </InputLabel>
                  <Select
                    native
                    required
                    labelWidth={labelWidth}
                    name="transportation"
                    inputProps={{
                      name: "transportation",
                      id: "transportation"
                    }}
                  >
                    <option value="" />
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Select>
                </FormControl>
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
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Your Phone Number"
                  name="phone"
                  autoComplete="phone"
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
              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
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
              <Grid item xs={12}>
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
                    color="secondary"
                    component="span"
                    className={classes.button}
                  >
                    Upload
                  </Button>
                </label>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </Container>
  );
}
