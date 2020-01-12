import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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
