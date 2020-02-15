import React from 'react';
import {
  CssBaseline,
  Button,
  Grid,
  Typography,
  Box,
  ButtonGroup,
  Avatar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 2,
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
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200
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

const CareseekerProfile = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <div className="section">
        <Typography variant="h5">
          <PersonIcon size="2em" fontSize="inherit" style={{ verticalAlign: 'middle' }} />
          Welcome, Mr. Alan Walker
        </Typography>
        <Grid item>
          <div className={classes.section3}>
            <ButtonGroup
              variant="contained"
              style={{ color: '#1034A6' }}
              //color="secondary"
              className={classes.margin1}
              aria-label="contained primary button group"
            >
              <Button size="medium" onClick={() => props.history.push('/create-careseeker-profile')}>
                Create Profile
              </Button>
              <Button size="medium" onClick={() => props.history.push('/edit-careseeker-profile')}>
                Edit Profile
              </Button>
              <Button size="medium" onClick={() => props.history.push('/reset-password')}>
                Change Password
              </Button>
              <Button size="medium" onClick={() => props.history.push('#contained-buttons')}>
                My Schedules
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
                <Grid container justify='center' alignItems='center'>
                  <Avatar
                    src={require('../../../../img/old-women.jpg')}
                    alt="dp"
                    className={classes.bigAvatar}
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
                    <Typography variant="body1">
                      <b>Gender:</b> Female
                    </Typography>
                    <Typography variant="body1">
                      <b>Age:</b> 63 years
                    </Typography>
                    <Typography variant="body1">
                      <b>Address:</b> 500 Kingston Rd
                    </Typography>
                    <Typography variant="body1">
                      <b>City:</b> Toronto
                    </Typography>
                    <Typography variant="body1">
                      <b>State:</b> Ontario
                    </Typography>
                    <Typography variant="body1">
                      <b>Zip:</b> ON M4L 1V3
                    </Typography>
                    <Typography variant="body1">
                      <b>Languages:</b> English, Spanish
                    </Typography>
                    <Typography variant="body1">
                      <b>Physical Complications:</b><i> Diabetes, Allergic Asthma,
                      Breathing difficulty</i>
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
