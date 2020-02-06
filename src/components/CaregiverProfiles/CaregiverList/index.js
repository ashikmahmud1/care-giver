import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid,
  Container,
  CssBaseline,
  Typography,
  Box,
  Avatar
} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WcIcon from '@material-ui/icons/Wc';
import Rating from '@material-ui/lab/Rating';

import './caregiverList.css';

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 2,
  border: 1,
  align: 'center',
  style: { width: '18rem', height: '22rem' }
};

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    margin: 10,
    width: 150,
    height: 150
  },
  margin: {
    marginTop: theme.spacing(1)
  }
}));
const CaregiverList = props => {
  const classes = useStyles();

  const [value, setValue] = React.useState(4);

  return (
    <React.Fragment>
      <CssBaseline />

      <Container>
        <Box
          borderRadius="borderRadius"
          {...defaultProps}
          borderColor="grey.300"
          boxShadow={3}
        >
          <Grid container justify="center" alignItems="center">
            <Avatar
              src={require('../../../img/man.jpg')}
              alt="dp"
              className={classes.bigAvatar}
            />
          </Grid>
          <Grid item xs className={classes.margin}>
            <Typography variant="h5" style={{ color: 'teal' }} gutterBottom>
              Madman Sadman
            </Typography>
            <span>
              <WcIcon fontSize="small" /> Male
            </span>{' '}
            <span>
              <LocationOnIcon fontSize="small" /> Toronto
            </span>
            <Grid item xs className={classes.margin}>
              <Rating name="read-only" value={value} readOnly /> { ' ' }
              <VerifiedUserIcon style={{ color: 'green' }} fontSize="large" />
            </Grid>
            <Grid item xs className={classes.margin}>
              <Button
                variant="contained"
                style={{ backgroundColor: 'teal', color: 'white' }} 
                href='/caregiver-profile/id'
                //onClick={() => props.history.push('/caregiver-profile/id')}
              >
                View Full Profile
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default CaregiverList;
