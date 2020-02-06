import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, Card, Box, GridList } from '@material-ui/core';

import './caregiverAllProfiles.css';
import CaregiverList from '../../../components/CaregiverProfiles/CaregiverList/index';
import PaginationItem from '../../../components/PaginationItem/index';

//const theme = createMuiTheme();

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'flex'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2, 2)
  },
  card: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2, 2)
  },
  gridList: {

  }
}));

const CaregiverAllProfiles = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* Here is some problem of not fitting of the little boxes into big box and also for small screen  */}
      <CssBaseline />

      <Container>
      {/* <GridList className={classes.gridList} cols={3} spacing={30}> */}
      {/* {tileData.map(tile => ( */}
        
        <Card className={classes.card}>
        <div className={classes.paper}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
          >
            <CaregiverList />
          </Box>
          <PaginationItem />
        </div>
      </Card>
      {/* ))} */}
        {/* </GridList> */}
      </Container>
    </React.Fragment>
  );
};

export default CaregiverAllProfiles;
