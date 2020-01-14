import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(22),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  margin: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(6)
  },
  margin2: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3)
  }
}));

export default function Body() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h3">Peace of mind</Typography>
        <Typography variant="h6" className={classes.margin2}>
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
