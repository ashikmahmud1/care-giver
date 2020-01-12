import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import PersonIcon from '@material-ui/icons/Person';

import PhysicalComplicationsInputs from '../../../../components/PhysicalComplicationsInput/index';
import LanguageInput from '../../../../components/LanguageInput/index';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function CreateCareseekerProfile() {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [languages, setLanguages] = React.useState([{ name: '' }]);
  const [physicalComplications, setPhysicalComplications] = React.useState([
    { name: '' }
  ]);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const addLanguageHandler = () => {
    setLanguages(oldLanguages => [...oldLanguages, { name: '' }]);
  };
  const languageInputHandler = (index, value) => {
    let newLanguages = [...languages];
    newLanguages[index].name = value;
    setLanguages(newLanguages);
  };

  const addPhysicalComplicationsHandler = () => {
    setPhysicalComplications(oldPhysicalComplications => [
      ...oldPhysicalComplications,
      { name: '' }
    ]);
  };
  const physicalComplicationsInputHandler = (index, value) => {
    let newPhysicalComplications = [...physicalComplications];
    newPhysicalComplications[index].name = value;
    setPhysicalComplications(newPhysicalComplications);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <PersonIcon fontSize="large" /> Create Senior's Profile
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
                    name: 'gender',
                    id: 'gender'
                  }}
                >
                  <option value="" />
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other gender">Other gender</option>
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
                    <InputAdornment position="end">
                      <b>Years</b>
                    </InputAdornment>
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
                    name: 'state',
                    id: 'state'
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

            <PhysicalComplicationsInputs
              classes={classes}
              physicalComplications={physicalComplications}
              addPhysicalComplicationsHandler={addPhysicalComplicationsHandler}
              physicalComplicationsInputHandler={
                physicalComplicationsInputHandler
              }
            />
            <LanguageInput
              classes={classes}
              languages={languages}
              addLanguageHandler={addLanguageHandler}
              languageInputHandler={languageInputHandler}
            />

            <Grid container item xs={12} justify="center">
              <input
                accept="image/*"
                className={classes.input}
                style={{ display: 'none' }}
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
                  color="primary"
                  component="span"
                  className={classes.button}
                  startIcon={<AddAPhotoIcon />}
                >
                  Upload
                </Button>
              </label>
            </Grid>
            <Button
              type="submit"
              size="large"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{
                backgroundColor: 'green',
                color: 'white'
              }}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default CreateCareseekerProfile;
