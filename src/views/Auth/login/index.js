import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Container,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import * as actionCreators from '../../../store/actions';
import { connect } from 'react-redux';

// JOI BROWSER for validation
import Joi from 'joi-browser';

import { validate, checkError } from '../../../utils/validator';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1, 1)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function Login(props) {
  const classes = useStyles();

  const [form, setForm] = React.useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});

  let schema = {
    email: Joi.string()
      .required()
      .email()
      .label('Email'),
    password: Joi.string()
      .min(8)
      .max(15)
      .required()
      .label('Password')
  };

  const handleChange = ({ currentTarget: input }) => {
    let new_errors = checkError(input, errors, schema);
    if (new_errors) setErrors(new_errors);
    setForm(prevState => ({
      ...prevState,
      [input.name]: input.value
    }));
  };

  const handleClickShowPassword = () => {
    setShowPassword(prevState => ({
      ...prevState,
      showPassword: !prevState.showPassword
    }));
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const onSubmit = e => {
    e.preventDefault();
    // before submit the form validate all the input
    // check the errors
    let new_errors = validate(form, schema);
    if (new_errors) return;
    // here call the redux login function
    setErrors({});
    props.login({ form });
  };

  // similiar to componentWillReciveProps lifecycle hook method
  // this means if a property change this will execute
  useEffect(() => {
    // check if the props.isLoggedIn then redirect to somewhere else
    if (props.isLoggedIn) {
      props.history.push('/caregiver-profile'); //Need another login option for careseeker
    }
  }, [props.history, props.isLoggedIn]);

  //Redirect if logged in

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={form.email}
                onChange={e => handleChange(e)}
                onBlur={e => handleChange(e)}
                autoComplete="email"
                autoFocus
              />
              {errors.email && (
                <div className="alert alert-danger">{errors.email}</div>
              )}
            </Grid>
            <Grid item xs={12}>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                fullWidth
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {form.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
              {errors.password && (
                <div className="alert alert-danger">{errors.password}</div>
              )}
            </Grid>
          </Grid>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            onClick={e => onSubmit(e)}
            className={classes.submit}
            style={{ backgroundColor: 'teal', color: 'white' }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgot-password" variant="body2" color="textPrimary">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="/signup-careseeker"
                variant="body2"
                color="textPrimary"
              >
                {/* Login page must be for 2 sides, because one should be for careseeker and other should be for caregiver */}
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
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
    login: payload => dispatch(actionCreators.login(payload))
  };
}

//connecting out component with the redux store
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
