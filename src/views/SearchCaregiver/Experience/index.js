import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Divider,
  Card,
  Container,
  Typography,
  Grid,
  CssBaseline,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    justifyContent: 'flex'
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5'
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)'
    }
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""'
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3'
    }
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1, 1)
  },
  card: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4, 4)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 2, 2)
  },
  margin: {
    margin: theme.spacing(3, 2, 2)
  },
  section: {
    alignItems: 'center'
  }
}));

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

function SearchByExperience() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Card className={classes.card}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h6">
            Please choose caregiver's years of experience
          </Typography>

          <Divider />

          <form className={classes.form} noValidate>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <RadioGroup
                    defaultValue="any"
                    aria-label="experience"
                    name="customized-radios"
                  >
                    <FormControlLabel
                      value="any"
                      control={<StyledRadio />}
                      label="Any"
                    />
                    <FormControlLabel
                      value="1"
                      control={<StyledRadio />}
                      label="1+"
                    />
                    <FormControlLabel
                      value="3"
                      control={<StyledRadio />}
                      label="3+"
                    />
                    <FormControlLabel
                      value="5"
                      control={<StyledRadio />}
                      label="5+"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <div className={classes.root}>
                <Button
                  type="submit"
                  variant="contained"
                  px={1}
                  style={{
                    backgroundColor: 'green',
                    color: 'white'
                  }}
                  className={classes.submit}
                  //component={Link}
                  href="/search-by-location"
                >
                  Next
                </Button>
              </div>
            </Grid>
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default SearchByExperience;
