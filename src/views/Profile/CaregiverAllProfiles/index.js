import React from 'react';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import './caregiverAllProfiles.css';
import CaregiverList from '../../../components/CaregiverProfiles/CaregiverList/index';
import PaginationItem from '../../../components/PaginationItem/index';

//const theme = createMuiTheme();

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 0,
  border: 1,
  align: 'center',
  style: { width: '73rem', height: '75rem' }
};

const CaregiverAllProfiles = () => {
  return (
    <React.Fragment>
      {/* Here is some problem of not fitting of the little boxes into big box and also for small screen  */}
      <CssBaseline />
      <Container>
        <div className="pagination">
          <Box display="flex" boxShadow={0}>
            <Box
              borderRadius="borderRadius"
              {...defaultProps}
              borderColor="grey.300"
              boxShadow={3}
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
              >
                <CaregiverList />
                <CaregiverList />
                <CaregiverList />
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
              >
                <CaregiverList />
                <CaregiverList />
                <CaregiverList />
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
              >
                <CaregiverList />
                <CaregiverList />
                <CaregiverList />
              </Box>
            </Box>
          </Box>
          <PaginationItem />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default CaregiverAllProfiles;
