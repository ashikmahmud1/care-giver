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

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(1, 1)
  },

  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: 400
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2)
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
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Your Mobile Number"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="location">
                    Where do you live?
                  </InputLabel>
                  <Select
                    native
                    required
                    labelWidth={labelWidth}
                    name="location"
                    inputProps={{
                      name: "location",
                      id: "location"
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
                  id="postcode"
                  label="Postal Code"
                  name="postcode"
                  autoComplete="postcode"
                />
              </Grid>
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
              <Grid item xs={12}></Grid>
            </Grid>
          </form>
        </div>
      </div>
    </Container>
  );
}
