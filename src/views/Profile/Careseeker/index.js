import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function ProfileCareseeker() {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create Senior's Profile
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="seniorName"
                label="Senior Name"
                name="seniorName"
                autoComplete="seniorname"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  ref={inputLabel}
                  htmlFor="outlined-gender-native-simple"
                >
                  Gender
                </InputLabel>
                <Select
                  native
                  labelWidth={labelWidth}
                  inputProps={{
                    name: "gender",
                    id: "outlined-gender-native-simple"
                  }}
                >
                  <option value="" />
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age (in Years)"
                name="age"
                autoComplete="age"
              />
            </Grid>
            <Grid item xs={9} direction="row" justify="flex-start">
              <TextField
                variant="outlined"
                required
                fullWidth
                id="physicalComplications"
                label="Physical Complications"
                name="physicalComplications"
                autoComplete="physicalComplications"
              />
              <Grid item xs={3} direction="row" justify="flex-end">
                <Fab size="small" color="secondary" aria-label="add">
                  <AddIcon />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <div style={{ gridColumnEnd: "span 8" }}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="languages"
                label="Languages"
                name="languages"
                autoComplete="languages"
              />
            </div>
            <div style={{ gridColumnEnd: "span 4" }}>
              <Fab size="small" color="secondary" aria-label="add">
                <AddIcon />
              </Fab>
            </div>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
