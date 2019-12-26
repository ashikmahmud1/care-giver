import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './careseekerRegistration.css';
import * as actionCreators from "../../../store/actions";
import { connect } from "react-redux";

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
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

function SignUp(props) {
    const classes = useStyles();
    const initial_form = { firstName: '', lastName: '', email: '', role: 'careseeker', password: '', passwordConfirm: '' };
    const [form, setForm] = useState(initial_form);
    const [errors, setErrors] = useState({});

    const validate = () => {
        // **************************** Validation implementation with joi-browser library ***************************
        const options = { abortEarly: false };
        const result = Joi.validate(form, schema, options);
        if (!result.error) return null;
        const new_errors = {};
        for (let item of result.error.details)
            new_errors[item.path[0]] = item.message;
        setErrors(new_errors);
        return new_errors;
    };

    let schema = {
        firstName: Joi.string().required().label('First Name'),
        lastName: Joi.string().required().label('Last Name'),
        email: Joi.string().required().email().label('Email'),
        password: Joi.string().min(3).max(15).required().label('Password'),
        role: Joi.any(),
        passwordConfirm: Joi.string().required().equal(Joi.ref('password')).label('Confirm Password').options({ language: { any: { allowOnly: 'must match password' } } })
    };

    const validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        schema = { [name]: schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    const checkError = (input) => {
        const new_errors = { ...errors };
        const errorMessage = validateProperty(input);
        if (errorMessage) new_errors[input.name] = errorMessage;
        else delete new_errors[input.name];
        setErrors(new_errors);
        // here check the errors
    };

    const handleChange = ({ currentTarget: input }) => {
        checkError(input);
        setForm((prevState) => ({
            ...prevState,
            [input.name]: input.value,
        }));
    };

    const onSubmit = e => {
        e.preventDefault();
        // before submit the form validate all the input
        // check the errors
        if (validate()) return;
        // here call the redux register function
        props.register({form});
    };

    // onBlur event fire when user focus an input and unfocused

    return (
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
                                autoComplete="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                name="firstName"
                                value={form.firstName}
                                onChange={e => handleChange(e)}
                                onBlur={(e => handleChange(e))}
                                label="First Name"
                                autoFocus
                            />
                            {errors.firstName && <div className='alert alert-danger'>{errors.firstName}</div>}
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
                                onBlur={(e => handleChange(e))}
                                label="Last Name"
                            />
                            {errors.lastName && <div className='alert alert-danger'>{errors.lastName}</div>}
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
                                onBlur={(e => handleChange(e))}
                                label="Email Address"
                            />
                            {errors.email && <div className='alert alert-danger'>{errors.email}</div>}
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
                                onBlur={(e => handleChange(e))}
                                label="Password"
                                type="password"
                            />
                            {errors.password && <div className='alert alert-danger'>{errors.password}</div>}
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
                                onBlur={(e => handleChange(e))}
                                label="Confirm Password"
                                type="password"
                            />
                            {errors.confirmPassword && <div className='alert alert-danger'>{errors.confirmPassword}</div>}
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={e => onSubmit(e)}
                        className={classes.submit}>
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login-careseeker" variant="body2">
                                Already have an account? Sign in
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
        logged_in: state.UserReducer.logged_in,
    }
}

// Map Redux functions to component `props
function mapDispatchToProps(dispatch) {
    return {
        register: (payload) => dispatch(actionCreators.register(payload)),
    }
}

//connecting out component with the redux store
const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);

export default SignUpContainer;