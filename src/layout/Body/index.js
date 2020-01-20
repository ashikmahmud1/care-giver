import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Button, Container, Grid, Typography } from '@material-ui/core';

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
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6)
  }
}));

export default function Body() {
  const classes = useStyles();

  return (
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
            href="/search-by-gender"
            className={classes.margin}
            aria-label="large contained primary button"
            style={{ backgroundColor: 'teal', color: 'white' }}
            fullWidth
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
  );
}
