import React from 'react';
import { Button, Grid, Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WcIcon from '@material-ui/icons/Wc';

import './caregiverList.css';

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 2,
  border: 1,
  align: 'center',
  style: { width: '20rem', height: '22rem' }
};

const CaregiverList = () => {
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
          <Grid className="img-round">
            <img src={require('../../../img/man.jpg')} alt="dp" />
          </Grid>
          <Grid className="caregiver-name">
            <Typography variant="h5">Madman Sadman</Typography>
            <span>
              <WcIcon fontSize="small" /> Male
            </span>{' '}
            <span>
              <LocationOnIcon fontSize="small" /> Toronto
            </span>
            <Grid>
              <Rating name="read-only" value={value} readOnly />
              <VerifiedUserIcon style={{ color: 'green' }} fontSize="large" />
            </Grid>
            <Grid>
              <Button
                variant="contained"
                style={{ backgroundColor: 'teal', color: 'white' }}
                href="/caregiver-profile/id"
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
