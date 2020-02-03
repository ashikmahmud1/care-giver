import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  InputAdornment
} from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import PersonIcon from '@material-ui/icons/Person';

import PhysicalComplicationsInputs from '../../../../components/PhysicalComplicationsInput/index';
import LanguageInputs from '../../../../components/LanguageInput/index';

import * as actionCreators from '../../../../store/actions';
import { connect } from 'react-redux';
import { validate, checkError } from '../../../../utils/validator';

// JOI BROWSER for validation
import Joi from 'joi-browser';
//import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1, 1),
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  textField: {
    width: 380
  },
  formControl: {
    width: 380,
    minWidth: 120
  },
  formControl2: {
    maxWidth: 190,
    position: 'relative'
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function CreateCareseekerProfile(props) {
  const classes = useStyles();

  const initial_form = {
    seniorName: '',
    gender: '',
    age: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    physicalComplications: '',
    languages: '',
    image: ''
  };
  const [form, setForm] = useState(initial_form);
  const [errors, setErrors] = useState({});

  let schema = {
    seniorName: Joi.string()
      .required()
      .label('Senior Name'),
    gender: Joi.string()
      .required()
      .label('Gender'),
    age: Joi.string()
      .required()
      .label('Age'),
    address: Joi.string()
      .required()
      .label('Address'),
    city: Joi.string()
      .required()
      .label('City'),
    state: Joi.string()
      .required()
      .label('State'),
    zip: Joi.string()
      .required()
      .label('Zip'),
    physicalComplications: Joi.string()
      .required()
      .label('Physical Complications'),
    languages: Joi.string()
      .required()
      .label('Languages'),
    image: Joi.string()
      .valid(['image/jpeg'])
      .required()
      .label('Image')
  };

  const handleChange = ({ currentTarget: input }) => {
    setErrors(checkError(input, errors, schema));
    setForm(prevState => ({
      ...prevState,
      [input.name]: input.value
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    // before submit the form validate all the input
    // check the errors
    let new_errors = validate(form, schema);
    if (new_errors) return;
    setErrors({});
    // here call the redux register function
    props.register({ form });
  };

  useEffect(() => {
    // check if the props.isLoggedIn then redirect to somewhere else
    if (props.isLoggedIn) {
    }
  }, [props.isLoggedIn]);

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
    <React.Fragment>
      <Container component="div" maxWidth="xs">
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
                  fullWidth
                  id="seniorName"
                  name="seniorName"
                  value={form.seniorName}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                  label="Senior Name"
                  autoComplete="seniorName"
                  autoFocus
                  className={classes.formControl}
                />
                {errors.seniorName && (
                  <div className="alert alert-danger">{errors.seniorName}</div>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined">
                  <InputLabel ref={inputLabel} htmlFor="gender">
                    Gender
                  </InputLabel>
                  <Select
                    native
                    labelWidth={labelWidth}
                    name="gender"
                    value={form.gender}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                    inputProps={{
                      name: 'gender',
                      id: 'gender'
                    }}
                  >
                    <option value="" />
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other Gender">Other Gender</option>
                  </Select>
                  {errors.gender && (
                <div className="alert alert-danger">
                  {errors.gender}
                </div>
              )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="age"
                  name="age"
                  label="Age"
                  value={form.age}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                  autoComplete="age"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <b>Years</b>
                      </InputAdornment>
                    )
                  }}
                  className={classes.formControl2}
                />
                {errors.age && (
                  <div className="alert alert-danger">{errors.age}</div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="address"
                  name="address"
                  label="Address"
                  value={form.address}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                  autoComplete="address"
                  className={classes.formControl}
                />
                {errors.address && (
                  <div className="alert alert-danger">{errors.address}</div>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="city"
                  name="city"
                  label="City"
                  value={form.city}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                  autoComplete="city"
                  className={classes.formControl}
                />
                {errors.city && (
                  <div className="alert alert-danger">{errors.city}</div>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined">
                  <InputLabel ref={inputLabel} htmlFor="state">
                    State
                  </InputLabel>
                  <Select
                    native
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
                {errors.state && (
                <div className="alert alert-danger">
                  {errors.state}
                </div>
              )}
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="zip"
                  label="Zip"
                  name="zip"
                  value={form.zip}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                  autoComplete="zip"
                  className={classes.formControl2}
                />
                {errors.zip && (
                <div className="alert alert-danger">
                  {errors.zip}
                </div>
              )}
              </Grid>
              

              <PhysicalComplicationsInputs
                classes={classes}
                physicalComplications={physicalComplications}
                addPhysicalComplicationsHandler={
                  addPhysicalComplicationsHandler
                }
                physicalComplicationsInputHandler={
                  physicalComplicationsInputHandler
                }
                value={form.physicalComplications}
                onChange={e => handleChange(e)}
                onBlur={e => handleChange(e)}
              />
              

              <LanguageInputs
                classes={classes}
                languages={languages}
                addLanguageHandler={addLanguageHandler}
                languageInputHandler={languageInputHandler}
                value={form.languages}
                onChange={e => handleChange(e)}
                onBlur={e => handleChange(e)}
              />
              {errors.languages && (
                <div className="alert alert-danger">
                  {errors.languages}
                </div>
              )}

              <Grid item xs={12}>
                <input
                  accept="image/*"
                  className={classes.input}
                  style={{ display: 'none' }}
                  id="raised-button-file"
                  type="file"
                />
                <label htmlFor="raised-button-file">
                  <InputLabel htmlFor="upload-btn" style={{ color: '#212121' }}>
                    Upload a picture
                  </InputLabel>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: '#2196f3', color: 'white' }}
                    component="span"
                    className={classes.button}
                    startIcon={<AddAPhotoIcon />}
                  >
                    Upload
                  </Button>
                </label>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  size="large"
                  fullWidth
                  variant="contained"
                  onClick={e => onSubmit(e)}
                  className={classes.submit}
                  style={{
                    backgroundColor: 'green',
                    color: 'white'
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
}

// connect with react-redux

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    isLoggedIn: state.UserReducer.isLoggedIn
  };
}

// Map Redux functions to component `props
function mapDispatchToProps(dispatch) {
  return {
    register: payload => dispatch(actionCreators.register(payload))
  };
}

//connecting out component with the redux store
const CreateCareseekerProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCareseekerProfile);

export default CreateCareseekerProfileContainer;
