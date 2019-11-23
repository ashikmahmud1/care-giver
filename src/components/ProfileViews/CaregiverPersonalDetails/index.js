import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
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
    marginTop: theme.spacing(3)
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
                  <InputLabel ref={inputLabel} htmlFor="languages">
                    What Language(s) do you speak?
                  </InputLabel>
                  <Select
                    native
                    required
                    labelWidth={labelWidth}
                    name="languages"
                    inputProps={{
                      name: "languages",
                      id: "languages"
                    }}
                  >
                    <option value="" />
                    <option value="yes">English</option>
                    <option value="no">French</option>
                    <option value="">Spanish</option>
                    <option value="">Hindi</option>
                    <option value="">Bengali</option>
                    <option value="">Chinese</option>
                    <option value="">Italian</option>
                    <option value="">Italian</option>
                  </Select>
                </FormControl>
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
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={10}></Grid>
            </Grid>
          </form>
        </div>
      </div>
    </Container>
  );
}
