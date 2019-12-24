import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

export default function SignUp() {
    const classes = useStyles();
    const initial_form = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};
    const [form, setForm] = useState(initial_form);
    const [errors, setErrors] = useState({});

    const validate = () => {
        // **************************** Validation implementation with joi-browser library ***************************
        const options = {abortEarly: false};
        const result = Joi.validate(form, this.schema, options);
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
        password: Joi.string().required().label('Password'),
        confirmPassword: Joi.string().required().label('Confirm Password')
    };

    const validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        schema = {[name]: schema[name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    const checkError = (input) => {
        const new_errors = {...errors};
        const errorMessage = validateProperty(input);
        if (errorMessage) new_errors[input.name] = errorMessage;
        else delete new_errors[input.name];
        setErrors(new_errors);
        // here check the errors
    };

    const handleChange = ({currentTarget: input}) => {
        const form = {...this.state.form};
        // here name is the input field name
        form[input.name] = input.value;
        checkError(input);
        setForm((prevState) => ({
            ...prevState,
            [input.name]: input.value,
        }));
    };

    const createProfile = () => {

    };
    const onSubmit = e => {
        e.preventDefault();
        // before submit the form validate all the input
        // check the errors
        if (validate()) return;
        createProfile();
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate onSubmit={e => onSubmit(e)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                name="firstName"
                                value="firstName"
                                onChange={e => handleChange(e)}
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="lastName"
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                name="lastName"
                                value="lastName"
                                onChange={e => handleChange(e)}
                                label="Last Name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="email"
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                name="email"
                                value="email"
                                onChange={e => handleChange(e)}
                                label="Email Address"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="current-password"
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                name="password"
                                value="password"
                                onChange={e => handleChange(e)}
                                label="Password"
                                type="password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="current-password"
                                variant="outlined"
                                required
                                fullWidth
                                id="password2"
                                name="password2"
                                value="password2"
                                onChange={e => handleChange(e)}
                                label="Confirm Password"
                                type="password2"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
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
