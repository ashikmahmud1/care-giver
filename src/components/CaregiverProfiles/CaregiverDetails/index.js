import React from 'react';
import {
  Button,
  Grid,
  Typography,
  CssBaseline,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ButtonGroup,
  Paper,
  Box
} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Rating from '@material-ui/lab/Rating';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import './caregiverDetails.css';

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 2,
  border: 1,
  align: 'center',
  style: { width: '74rem', height: '70rem' }
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

const CaregiverDetails = () => {
  const [value, setValue] = React.useState(5);

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
            <Grid container justify="center" alignItems="center">
              <Avatar
                src={require('../../../img/man.jpg')}
                alt="dp"
                className={classes.bigAvatar}
              />
            </Grid>
            <Grid>
              <Typography variant="h4" style={{ color: 'teal' }}>
                Madman Sadman
              </Typography>
              <div className={classes.margin1}>
                <Rating name="read-only" value={value} readOnly />
                <VerifiedUserIcon style={{ color: 'green' }} fontSize="large" />
              </div>
            </Grid>
            <Grid>
              <div className={classes.margin}>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    <b>Gender:</b> Male
                  </Typography>
                  <Typography variant="body1">
                    <b>Experience:</b> 3 years
                  </Typography>
                  <Typography variant="body1">
                    <b>Location:</b> Toronto
                  </Typography>
                  <Typography variant="body1">
                    <b>Zip:</b> Bla bla
                  </Typography>
                  <Typography variant="body1">
                    <b>Horly Wage:</b> $15
                  </Typography>
                  <Typography variant="body1">
                    <b>Transportation Facility:</b> Yes
                  </Typography>
                  <Typography variant="body1">
                    <b>Skills:</b> Medical Supervision, Personal Assistance
                    (Bathing, Dressing), Escorting to Appointments/Shoping
                  </Typography>
                </Grid>
              </div>
            </Grid>

            <Grid item xs>
              <div className={classes.section2}>
                <Typography variant="h5" gutterBottom>
                  <b>Professional Certification History</b>
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
                  <b>Educational History</b>
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
            <Grid>
              <ButtonGroup
                variant="contained"
                color="secondary"
                className={classes.margin1}
                aria-label="contained secondary button group"
              >
                <Button size="medium" href="#">
                  Hire Now
                </Button>
                <Button size="medium" href="#">
                  Setup Interview
                </Button>
                <Button size="medium" href="/caregiver-profiles">
                  Go Back
                </Button>
              </ButtonGroup>
            </Grid>
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default CaregiverDetails;
