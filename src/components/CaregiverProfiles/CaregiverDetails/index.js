import React from "react";
import { Button, Grid } from "@material-ui/core";
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

const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  style: { width: "80rem", height: "65rem" }
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
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
}));

const CaregiverDetails = () => {
  const [value, setValue] = React.useState(4);

  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center">
      <Box
        borderRadius="borderRadius"
        {...defaultProps}
        borderColor="secondary.main"
      >
        <Grid item xs={12}>
          <Grid className="img-round">
            <img src={require("../../../img/man.jpg")} />
          </Grid>
          <Grid className="caregiver-name">
            <Typography variant="h5">Madman Sadman</Typography>

            <Rating name="read-only" value={value} readOnly />
            <VerifiedUserIcon color="lightseagreen" fontSize="large" />
            <Grid item xs={12} md={6}>
              <p>Gender: Male</p>
              <p>Location: Toronto</p>
            </Grid>
            <Grid>
              <p>Horly Wage: $15</p>
              <p>Experience: 3.5 years</p>
            </Grid>
            <Grid>
              <p>Skills: Bla, Bla, Bla</p>
            </Grid>
          </Grid>
          <Grid>
            <Paper className={classes.root}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>School/College/University</StyledTableCell>
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
          </Grid>
          <Grid>
            <Paper className={classes.root}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>School/College/University</StyledTableCell>
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
          </Grid>
          <Grid>
            <Button
              variant="contained"
              color="secondary"
              href="#contained-buttons"
              align="left"
            >
              Hire Now
            </Button>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              align="right"
            >
              Setup an Interview
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CaregiverDetails;
