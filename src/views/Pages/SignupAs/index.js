import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Container,
  Grid,
  CssBaseline,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    justifyContent: 'flex'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1, 1)
  },
  card: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(8, 8)
  },
  margin: {
    margin: theme.spacing(2, 2, 2)
  }
}));

const SignupAs = props => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Card className={classes.card}>
        <div className={classes.paper}>
            <Grid container justify="center">
               <div className={classes.root}>
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: 'green',
                    color: 'white'
                  }}
                  className={classes.margin}
                  onClick={() => props.history.push('/signup-caregiver')}
                >
                  As Caregiver
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: 'green',
                    color: 'white'
                  }}
                  className={classes.margin}
                  onClick={() => props.history.push('/signup-careseeker')}
                >
                  As Careseeker
                </Button>
              </div>
            </Grid>
        </div>
      </Card>
    </Container>
  );
}

export default SignupAs;
