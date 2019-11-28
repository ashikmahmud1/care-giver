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
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import PersonIcon from "@material-ui/icons/Person";

import LanguageInput from "../../LanguageInput";

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
  const [languages, setLanguages] = React.useState([{ name: "" }]);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const [formData, setFormData] = React.useState({
    hourlyWage: "",
    experience: "",
    transportation: "",
    languages: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  });

  const {
    hourlyWage,
    experience,
    transportation,
    phone,
    address,
    city,
    state,
    zip
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
  };

  {
    /*const handleChange = prop => event => {
        setValues({...values, [prop]: event.target.value});
    };*/
  }

  const addLanguageHandler = () => {
    setLanguages(oldLanguages => [...oldLanguages, { name: "" }]);
  };
  const languageInputHandler = (index, value) => {
    let newLanguages = [...languages];
    newLanguages[index].name = value;
    setLanguages(newLanguages);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <PersonIcon /> Add Your Personal Details
        </Typography>
        <div className={classes.paper}>
          <form className={classes.form} onSubmit={e => onSubmit(e)} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="What is your hourly wage?"
                  variant="outlined"
                  required
                  fullWidth
                  id="hourlyWage"
                  value={hourlyWage}
                  onChange={e => onChange(e)}
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
                  value={experience}
                  onChange={e => onChange(e)}
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
                    value={transportation}
                    onChange={e => onChange(e)}
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
              {/* Language Input Custom Component*/}
              <LanguageInput
                classes={classes}
                languages={languages}
                addLanguageHandler={addLanguageHandler}
                languageInputHandler={languageInputHandler}
              />
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  value={phone}
                  onChange={e => onChange(e)}
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
                  value={address}
                  onChange={e => onChange(e)}
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
                  value={city}
                  onChange={e => onChange(e)}
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
                    value={state}
                    onChange={e => onChange(e)}
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
                    <option value="Manitoba">Montreal</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="zip"
                  value={zip}
                  onChange={e => onChange(e)}
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
                    Upload a nice profile picture
                  </InputLabel>
                  <Button
                    variant="contained"
                    color="secondary"
                    component="span"
                    className={classes.button}
                    startIcon={<AddAPhotoIcon />}
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
