import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Button, Container, Grid, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(18),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  margin: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(3)
  },
  margin2: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

const Body = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography variant="h3" style={{ color: '#1034A6' }}>
            Peace of mind
          </Typography>

          <Typography variant="h6" className={classes.margin2} gutterBottom>
            <i>truly care about your beloved older one</i>
          </Typography>

          <Grid item>
            <Button
              variant="contained"
              size="large"
              className={classes.margin}
              aria-label="large contained primary button"
              style={{ backgroundColor: 'teal', color: 'white' }}
              fullWidth
              onClick={() => props.history.push("/search-by-gender")}
            >
              I'm a Care Seeker
            </Button>
          </Grid>

          <span className={classes.margin2}>
            Are you a Caregiver?{' '}
            <Link href="/login" style={{ color: 'purple' }}>
              Click here
            </Link>{' '}
            to Login/Register
          </span>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Body;
