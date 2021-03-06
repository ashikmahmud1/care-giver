import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// import './caregiverRegistration.css';
import * as actionCreators from '../../../store/actions';
import { connect } from 'react-redux';
import { validate, checkError } from '../../../utils/validator';

// JOI BROWSER for validation
import Joi from 'joi-browser';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
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

const SignUp = props => {
  const classes = useStyles();

  const initial_form = {
    firstName: '',
    lastName: '',
    email: '',
    role: 'caregiver',
    password: '',
    passwordConfirm: ''
  };
  const [form, setForm] = useState(initial_form);
  const [errors, setErrors] = useState({});

  let schema = {
    firstName: Joi.string()
      .required()
      .label('First Name'),
    lastName: Joi.string()
      .required()
      .label('Last Name'),
    email: Joi.string()
      .required()
      .email()
      .label('Email'),
    password: Joi.string()
      .min(8)
      .max(15)
      .required()
      .label('Password'),
    role: Joi.any(),
    passwordConfirm: Joi.string()
      .required()
      .equal(Joi.ref('password'))
      .label('Confirm Password')
      .options({ language: { any: { allowOnly: 'must match password' } } })
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
    if (props.isLoggedIn) {
      props.history.push('/caregiver-profile')
    }
  }, [props.isLoggedIn]);

  // onBlur event fire when user focus ainn put and unfocused

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                  label="First Name"
                  autoComplete="firstName"
                  autoFocus
                />
                {errors.firstName && (
                  <div className="alert alert-danger">{errors.firstName}</div>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="lastName"
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                  label="Last Name"
                />
                {errors.lastName && (
                  <div className="alert alert-danger">{errors.lastName}</div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                  label="Email Address"
                />
                {errors.email && (
                  <div className="alert alert-danger">{errors.email}</div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="current-password"
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                  label="Password"
                  type="password"
                />
                {errors.password && (
                  <div className="alert alert-danger">{errors.password}</div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="current-password"
                  variant="outlined"
                  required
                  fullWidth
                  id="passwordConfirm"
                  name="passwordConfirm"
                  value={form.passwordConfirm}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                  label="Confirm Password"
                  type="password"
                />
                {errors.confirmPassword && (
                  <div className="alert alert-danger">
                    {errors.confirmPassword}
                  </div>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: 'teal', color: 'white' }}
              size="large"
              onClick={e => onSubmit(e)}
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
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
const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUpContainer;
