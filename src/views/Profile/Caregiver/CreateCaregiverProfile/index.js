import React from 'react';
import { CssBaseline, Typography, Container } from '@material-ui/core';

import Steppers from '../../../../components/Steppers/index';

function CreateCaregiverProfile() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ height: '10vh' }} />
        <Steppers />
      </Container>
    </React.Fragment>
  );
}

export default CreateCaregiverProfile;
