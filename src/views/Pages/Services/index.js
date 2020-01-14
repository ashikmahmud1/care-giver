import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1)
    },
    width: '100%',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10)
  },
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export default function Services() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <Container component="main" fixed>
        <div className={classes.paper}>
          <Typography variant="h4" gutterBottom>
            <i>Services that we provide</i>
          </Typography>
        </div>

        <div className={classes.root}>
          <Chip
            label="Medical Supervision"
            size="large"
            style={{ color: 'black', backgroundColor: 'pink' }}
            variant="outlined"
            icon={<DoneIcon />}
            clickable
          />
          <Chip
            label="Personal assistance, bathing, dressing"
            size="large"
            style={{ color: 'black', backgroundColor: 'pink' }}
            variant="outlined"
            icon={<DoneIcon />}
            clickable
          />
          <Chip
            label="RN/RPN Supervised Care"
            size="large"
            style={{ color: 'black', backgroundColor: 'pink' }}
            variant="outlined"
            icon={<DoneIcon />}
            clickable
          />
          <Chip
            label="Specialize in Perkinson/Dementia"
            size="large"
            style={{ color: 'black', backgroundColor: 'pink' }}
            variant="outlined"
            icon={<DoneIcon />}
            clickable
          />
          <Chip
            label="Specialize in Alzheimer's"
            size="large"
            style={{ color: 'black', backgroundColor: 'pink' }}
            variant="outlined"
            icon={<DoneIcon />}
            clickable
          />
          <Chip
            label="ome/Individual Safety Assesment"
            size="large"
            style={{ color: 'black', backgroundColor: 'pink' }}
            variant="outlined"
            icon={<DoneIcon />}
            clickable
          />
          <Chip
            label="Light Housekeeping"
            size="large"
            style={{ color: 'black', backgroundColor: 'pink' }}
            variant="outlined"
            icon={<DoneIcon />}
            clickable
          />
          <Chip
            label="Escorting to Appointments, or Shoping"
            size="large"
            style={{ color: 'black', backgroundColor: 'pink' }}
            variant="outlined"
            icon={<DoneIcon />}
            clickable
          />
          <Chip
            label="Joyful Companionship"
            size="large"
            style={{ color: 'black', backgroundColor: 'pink' }}
            variant="outlined"
            icon={<DoneIcon />}
            clickable
          />
          <Chip
            label="Palliative Care"
            size="large"
            style={{ color: 'black', backgroundColor: 'pink' }}
            variant="outlined"
            icon={<DoneIcon />}
            clickable
          />
          <Chip
            label="Live in/out to 24 hour Care"
            size="large"
            style={{ color: 'black', backgroundColor: 'pink' }}
            variant="outlined"
            icon={<DoneIcon />}
            clickable
          />

          <Chip
            label="Retirement Homecare"
            size="large"
            style={{ color: 'black', backgroundColor: 'pink' }}
            variant="outlined"
            icon={<DoneIcon />}
            clickable
          />
          <Chip
            label="Nutritional Counseling"
            size="large"
            style={{ color: 'black', backgroundColor: 'pink' }}
            variant="outlined"
            icon={<DoneIcon />}
            clickable
          />
          <Chip
            label="Medical Supervision"
            size="large"
            style={{ color: 'black', backgroundColor: 'pink' }}
            variant="outlined"
            icon={<DoneIcon />}
            clickable
          />
        </div>
      </Container>
    </React.Fragment>
  );
}
