import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Grid,
  InputAdornment,
  TextField,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Button
} from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
//import PersonIcon from '@material-ui/icons/Person';
//import ButtonGroup from '@material-ui/core/ButtonGroup';

import * as actionCreators from '../../../store/actions';
import { connect } from 'react-redux';
import { validate, checkError } from '../../../utils/validator';

// JOI BROWSER for validation
import Joi from 'joi-browser';

import LanguageInput from '../../LanguageInput';

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
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  textField: {
    width: 380
  },
  formControl: {
    width: 380,
    minWidth: 120
  }
}));

function CaregiverPersonalDetails(props) {
  const classes = useStyles();

  const initial_form = {
    hourlyWage: '',
    experience: '',
    languages: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    image: ''
  };
  const [form, setForm] = useState(initial_form);
  const [errors, setErrors] = useState({});

  let schema = {
    hourlyWage: Joi.string()
      .required()
      .label('Hourly Wage'),
    experience: Joi.string()
      .required()
      .label('Experience'),
    languages: Joi.string()
      .required()
      .label('Languages'),
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
    image: Joi.string()
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

  // similiar to componentWillReciveProps lifecycle hook method
  // this means if a property change this will execute
  useEffect(() => {
    // check if the props.isLoggedIn then redirect to somewhere else
  }, [props.isLoggedIn]);

  // onBlur event fire when user focus an input and unfocused

  const inputLabel = React.useRef(null);
  const [languages, setLanguages] = React.useState([{ name: '' }]);
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

  return (
    <React.Fragment>
      <Container component="div" maxWidth="xs">
        <CssBaseline />

        <div className={classes.paper}>
          <Typography component={'div'} variant="h5">
            Add your Personal Details
          </Typography>
          <form className={classes.form} onSubmit={e => onSubmit(e)} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="What is your hourly wage?"
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                  id="hourlyWage"
                  name="hourlyWage"
                  value={form.hourlyWage}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
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
                  fullWidth
                  className={classes.formControl}
                  label="How many years of experience you have?"
                  id="experience"
                  name="experience"
                  value={form.experience}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                  autoComplete="experience"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <b>Years</b>
                      </InputAdornment>
                    )
                  }}
                />
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
                  fullWidth
                  className={classes.formControl}
                  id="address"
                  label="Address"
                  name="address"
                  value={form.address}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                  id="city"
                  label="City"
                  name="city"
                  value={form.city}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
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
                    labelWidth={labelWidth}
                    name="state"
                    value={form.state}
                    onChange={e => handleChange(e)}
                    onBlur={e => handleChange(e)}
                    inputProps={{
                      name: 'state',
                      id: 'state'
                    }}
                  >
                    <option value="" />
                    <option value="Toronto">Toronto</option>
                    <option value="Ottowa">Ottowa</option>
                    <option value="British Columbia">British Columbia</option>
                    <option value="Calgary">Calgary</option>
                    <option value="Manitoba">Manitoba</option>
                    <option value="Montreal">Montreal</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                  id="zip"
                  label="Zip"
                  name="zip"
                  value={form.zip}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                  autoComplete="zip"
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  accept="image/*"
                  className={classes.input}
                  style={{ display: 'none' }}
                  id="image"
                  value={form.image}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                  type="file"
                />
                <label htmlFor="image">
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
const CaregiverPersonalDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CaregiverPersonalDetails);

export default CaregiverPersonalDetailsContainer;
