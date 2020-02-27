import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Button,
  Divider,
  Card,
  TextField,
  Grid,
  Typography,
  Container
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'flex'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1, 1)
  },
  card: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4, 4)
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
    margin: theme.spacing(3, 2, 2)
  },
  margin: {
    margin: theme.spacing(3, 2, 2)
  }
}));

const ForgotPassword = props => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Card className={classes.card}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h6">
            Forgot your password?
          </Typography>
          <Divider />

          <form className={classes.form} noValidate>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <small>
                  Please enter your email address to reset your password
                </small>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <div className={classes.root}>
                <Button
                  type="submit"
                  variant="contained"
                  px={1}
                  style={{
                    backgroundColor: 'green',
                    color: 'white'
                  }}
                  className={classes.submit}
                >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.margin}
                  onClick={() => props.history.push('/login')}
                >
                  Cancel
                </Button>
              </div>
            </Grid>
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default ForgotPassword;
