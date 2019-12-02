import React from "react";
import { Button, Grid, Divider } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./caregiverDetails.css";

const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 2,
  border: 1,
  align: "center",
  style: { width: "70rem", height: "70rem" }
};

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

function createData(school, degree, fieldofstudy) {
  return { school, degree, fieldofstudy };
}

const rows = [
  createData("Monipur High School", "SSC", "Science"),
  createData("Residential Model College", "HSC", "Science"),
  createData("Dhaka University", "BSC", "Computer Science")
];

const useStyles = makeStyles(theme => ({
  root: {
    width: "80%",
    marginTop: theme.spacing(2),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  section1: {
    margin: theme.spacing(2)
  },
  section2: {
    margin: theme.spacing(3)
  },
  section3: {
    margin: theme.spacing(3, 1, 1)
  },
  margin: {
    margin: theme.spacing(4)
  }
}));

const CaregiverDetails = () => {
  const [value, setValue] = React.useState(4);

  const classes = useStyles();

  return (
    <div className="section">
      <Box display="flex" justifyContent="center">
        <Box
          borderRadius="borderRadius"
          {...defaultProps}
          borderColor="secondary.main"
        >
          <Grid item xs={12}>
            <Grid item className="img-round">
              <img src={require("../../../img/man.jpg")} />
            </Grid>
            <Grid>
              <Grid>
                <Typography variant="h5">Madman Sadman</Typography>

                <Rating name="read-only" value={value} readOnly />
                <VerifiedUserIcon color="lightseagreen" fontSize="large" />
              </Grid>
              <Divider />
              <Grid item xs={12} md={6}>
                <p>Gender: Male</p>
                <p>Location: Toronto</p>
              </Grid>
              <Grid>
                <p>Horly Wage: $15</p>
                <p>Experience: 3.5 years</p>
              </Grid>
              <Grid>
                <span>Transportation Facility: Yes</span>
                <p>Skills: Bla, Bla, Bla</p>
              </Grid>
            </Grid>
            <Divider variant="middle" />
            <Grid item xs>
              <div className={classes.section1}>
                <Typography gutterBottom variant="h5">
                  School History
                </Typography>
                <Paper className={classes.root}>
                  <Table
                    className={classes.table}
                    aria-label="customized table"
                  >
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>
                          School/College/University
                        </StyledTableCell>
                        <StyledTableCell align="right">Degree</StyledTableCell>
                        <StyledTableCell align="right">
                          Field Of Study
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <StyledTableRow key={row.school}>
                          <StyledTableCell component="th" scope="row">
                            {row.school}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.degree}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.fieldofstudy}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
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
                        <StyledTableCell>Institution</StyledTableCell>
                        <StyledTableCell align="right">
                          Certifiation
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          Field Of Study
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <StyledTableRow key={row.school}>
                          <StyledTableCell component="th" scope="row">
                            {row.school}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.degree}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.fieldofstudy}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </div>
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
                  color="primary"
                  href="#contained-buttons"
                  className={classes.margin}
                >
                  Setup an Interview
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default CaregiverDetails;
