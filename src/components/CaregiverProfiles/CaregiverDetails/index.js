import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, Grid } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './caregiverDetails.css';

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 2,
  border: 1,
  align: 'center',
  style: { width: '74rem', height: '64rem' }
};

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.default,
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

function createData(degree, school) {
  return { degree, school };
}

const rows = [
  createData('SSC', 'Monipur High School'),
  createData('HSC', 'Residential Model College')
];

function createData2(certification, institution) {
  return { certification, institution };
}

const rows2 = [createData2('ASP.NET', 'LICT')];

const useStyles = makeStyles(theme => ({
  root: {
    width: '70%',
    marginTop: theme.spacing(2),
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

const CaregiverDetails = () => {
  const [value, setValue] = React.useState(4);

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <div className="section">
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
                  <img src={require('../../../img/man.jpg')} alt="dp" />
                </Grid>
              </div>
              <Grid>
                <Grid>
                  <Typography variant="h5">Madman Sadman</Typography>
                  <div className={classes.margin1}>
                    <Rating name="read-only" value={value} readOnly />
                    <VerifiedUserIcon
                      style={{ color: 'green' }}
                      fontSize="large"
                    />
                  </div>
                </Grid>

                <div className={classes.margin}>
                  <Grid item xs={12}>
                    <span>
                      <b>Gender:</b> Male,
                    </span>{' '}
                    <span>
                      <b>Experience:</b> 3.5 years
                    </span>
                  </Grid>
                  <Grid>
                    <span>
                      <b>Location:</b> Toronto
                    </span>{' '}
                    <span>
                      <b>Zip:</b> Bla bla
                    </span>
                  </Grid>
                  <Grid>
                    <span>
                      <b>Horly Wage:</b> $15,
                    </span>{' '}
                    <span>
                      <b>Transportation Facility:</b> Yes,
                    </span>
                  </Grid>
                  <Grid>
                    <span>
                      <b>Skills:</b> Bla, Bla, bla
                    </span>
                  </Grid>
                </div>
              </Grid>

              <Grid item xs>
                <div className={classes.section2}>
                  <Typography gutterBottom variant="h5">
                    Professional Certification History
                  </Typography>
                  <Paper className={classes.root}>
                    <Table
                      className={classes.table}
                      aria-label="customized table"
                    >
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>
                            <b>CERTIFICATION</b>
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <b>INSTITUTION/ORGANIZATION</b>
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows2.map(row => (
                          <StyledTableRow key={row.institution}>
                            <StyledTableCell component="th" scope="row">
                              {row.certification}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.institution}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Paper>
                </div>
              </Grid>

              <Grid item xs>
                <div className={classes.section1}>
                  <Typography gutterBottom variant="h5">
                    Educational History
                  </Typography>
                  <Paper className={classes.root}>
                    <Table
                      className={classes.table}
                      aria-label="customized table"
                    >
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>
                            <b>DEGREE</b>
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <b>SCHOOL/COLLEGE/UNIVERSITY</b>
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map(row => (
                          <StyledTableRow key={row.school}>
                            <StyledTableCell component="th" scope="row">
                              {row.degree}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.school}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Paper>
                </div>
              </Grid>
            </Grid>

            <Grid item>
              <div className={classes.section3}>
                <Button
                  variant="contained"
                  color="secondary"
                  href="#contained-buttons"
                  className={classes.margin}
                >
                  Hire Now
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: 'teal', color: 'white' }}
                  href="#contained-buttons"
                  className={classes.margin}
                >
                  Setup an Interview
                </Button>
                <Button
                  variant="contained"
                  color="default"
                  href="/caregiver-profiles"
                  className={classes.margin}
                >
                  Go Back
                </Button>
              </div>
            </Grid>
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default CaregiverDetails;
