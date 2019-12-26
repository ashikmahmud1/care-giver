import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";


import * as actionCreators from "../../../store/actions";
import { connect } from "react-redux";

// JOI BROWSER for validation
import Joi from 'joi-browser';

import { validate, checkError } from '../../../utils/validator';

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
    alignItems: "center",
    padding: theme.spacing(1, 1)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function LogIn(props) {
  const classes = useStyles();

  const [form, setForm] = React.useState({
    password: "",
    email: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});

  let schema = {
    email: Joi.string().required().email().label('Email'),
    password: Joi.string().min(8).max(15).required().label('Password')
  };
  const handleChange = ({ currentTarget: input }) => {
    let new_errors = checkError(input, errors, schema)
    if(new_errors) setErrors(new_errors);
    setForm((prevState) => ({
      ...prevState,
      [input.name]: input.value,
    }));
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // before submit the form validate all the input
    // check the errors
    let new_errors = validate(form, schema);
    if (new_errors) return;
    // here call the redux login function
    setErrors({});
    props.login({ form });
  }

  // similiar to componentWillReciveProps lifecycle hook method
  // this means if a property change this will execute
  useEffect(() => {
    // check if the props.isLoggedIn then redirect to somewhere else
  }, [props.isLoggedIn])

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
                onBlur={(e => handleChange(e))}
                autoComplete="email"
                autoFocus
              />
              {errors.email && <div className='alert alert-danger'>{errors.email}</div>}
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
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={e => handleChange(e)}
                  onBlur={(e => handleChange(e))}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}>
                        {form.showPassword ? (
                          <Visibility />
                        ) : (
                            <VisibilityOff />
                          )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
              {errors.password && <div className='alert alert-danger'>{errors.password}</div>}
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
            onClick={e => onSubmit(e)}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup-careseeker" variant="body2">
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
    isLoggedIn: state.UserReducer.isLoggedIn,
  }
}

// Map Redux functions to component `props
function mapDispatchToProps(dispatch) {
  return {
    login: (payload) => dispatch(actionCreators.login(payload)),
  }
}

//connecting out component with the redux store
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);

export default LoginContainer;