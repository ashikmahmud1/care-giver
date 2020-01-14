import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PersonIcon from '@material-ui/icons/Person';

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 2,
  border: 1,
  align: 'center',
  style: { width: '45rem', height: '45rem' }
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '70%',
    marginTop: theme.spacing(4),
    overflowX: 'auto'
  },
  table: {
    minWidth: 120
  },
  section: {
    marginTop: theme.spacing(2)
  },
  section1: {
    margin: theme.spacing(2)
  },
  section2: {
    margin: theme.spacing(3)
  },
  section3: {
    margin: theme.spacing(1, 0, 0)
  },
  margin: {
    margin: theme.spacing(2)
  },
  margin1: {
    margin: theme.spacing(1)
  },
  margin2: {
    margin: theme.spacing(4)
  }
}));

const CareseekerProfile = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <div className="section">
        <Typography variant="h5">
          <PersonIcon size="2em" fontSize="inherit" />
          Welcome, Mr. Alan Walker
        </Typography>
        <Grid item>
          <div className={classes.section3}>
            <ButtonGroup
              variant="contained"
              style={{ color: 'blue' }}
              className={classes.margin1}
              aria-label="contained primary button group"
            >
              <Button size="medium" href="/create-careseeker-profile">
                Create Profile
              </Button>
              <Button size="medium" href="/edit-careseeker-profile">
                Edit Profile
              </Button>
              <Button size="medium" href="reset-password">
                Change Password
              </Button>
              <Button size="medium" href="#contained-buttons">
                My Bookings
              </Button>
            </ButtonGroup>
          </div>
        </Grid>
        <Box display="flex" boxShadow={0}>
          <Box
            borderRadius="borderRadius"
            {...defaultProps}
            borderColor="grey.300"
            boxShadow={3}
          >
            <Grid item xs={12}>
              <div className={classes.margin}>
                <Grid item className="img-round">
                  <img
                    src={require('../../../../img/old-women.jpg')}
                    alt="dp"
                  />
                </Grid>
              </div>
              <Grid>
                <Grid>
                  <Typography variant="h5">Stephen Smith</Typography>
                </Grid>

                <div className={classes.margin}>
                  <Grid item xs={12}>
                    <span>
                      <b>Gender:</b> Female,
                    </span>{' '}
                    <span>
                      <b>Age:</b> 63 years
                    </span>
                  </Grid>
                  <Grid>
                    <span>
                      <b>Address:</b> 500 Kingston Rd,
                    </span>{' '}
                    <span>
                      <b>City:</b> Toronto
                    </span>
                  </Grid>
                  <Grid>
                    <span>
                      <b>State:</b> Ontario,
                    </span>{' '}
                    <span>
                      <b>Zip:</b> ON M4L 1V3
                    </span>
                  </Grid>
                  <Grid>
                    <span>
                      <b>Languages:</b> English, Spanish,
                    </span>{' '}
                  </Grid>
                  <Grid>
                    <span>
                      <b>Physial Complications:</b> Bla bla bla bla
                    </span>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default CareseekerProfile;
