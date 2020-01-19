import React from 'react';
import {
  CssBaseline,
  Button,
  Grid,
  Typography,
  Box,
  ButtonGroup
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  align: 'center',
  style: { width: '50rem', height: '45rem' }
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '70%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 120
  },
  section: {
    marginTop: theme.spacing(1)
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
    //justifyContent: 'flex-start'
    //alignContent: 'flex-start'
    //alignItems: 'flex-start'
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
        <Typography variant="h5" component="h2">
          <PersonIcon size="2em" fontSize="inherit" />
          Welcome, Mr. Alan Walker
        </Typography>
        <Grid item>
          <div className={classes.section3}>
            <ButtonGroup
              variant="contained"
              // style={{ color: '#1034A6' }}
              color="secondary"
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
                  <Typography
                    variant="h4"
                    component="h2"
                    style={{ color: 'teal' }}
                  >
                    Stephen Smith
                  </Typography>
                </Grid>

                <div className={classes.margin}>
                  <Grid item xs={12}>
                    <Typography variant="h6">
                      <b>Gender:</b> Female
                    </Typography>
                    <Typography variant="h6">
                      <b>Age:</b> 63 years
                    </Typography>
                    <Typography variant="h6">
                      <b>Address:</b> 500 Kingston Rd
                    </Typography>
                    <Typography variant="h6">
                      <b>City:</b> Toronto
                    </Typography>
                    <Typography variant="h6">
                      <b>State:</b> Ontario
                    </Typography>
                    <Typography variant="h6">
                      <b>Zip:</b> ON M4L 1V3
                    </Typography>
                    <Typography variant="h6">
                      <b>Languages:</b> English, Spanish
                    </Typography>
                    <Typography variant="h6">
                      <b>Physical Complications:</b> Diabetes, Allergic Asthma,
                      Breathing difficulty
                    </Typography>
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
