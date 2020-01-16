import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import { Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1)
    },
    width: '100%',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(12)
  },
  paper: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  card: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2, 2)
  }
}));

export default function Services() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Card className={classes.card}>
        <Container component="main" fixed>
          <div className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              <i>Services that we provide</i>
            </Typography>
          </div>

          <div className={classes.root}>
            <Chip
              label="Medical Supervision"
              size="medium"
              style={{ color: 'black', backgroundColor: 'pink' }}
              variant="outlined"
              icon={<DoneIcon />}
              clickable
            />
            <Chip
              label="Personal assistance, bathing, dressing"
              size="medium"
              style={{ color: 'black', backgroundColor: 'pink' }}
              variant="outlined"
              icon={<DoneIcon />}
              clickable
            />
            <Chip
              label="RN/RPN Supervised Care"
              size="medium"
              style={{ color: 'black', backgroundColor: 'pink' }}
              variant="outlined"
              icon={<DoneIcon />}
              clickable
            />
            <Chip
              label="Specialize in Perkinson/Dementia"
              size="medium"
              style={{ color: 'black', backgroundColor: 'pink' }}
              variant="outlined"
              icon={<DoneIcon />}
              clickable
            />
            <Chip
              label="Specialize in Alzheimer's"
              size="medium"
              style={{ color: 'black', backgroundColor: 'pink' }}
              variant="outlined"
              icon={<DoneIcon />}
              clickable
            />
            <Chip
              label="ome/Individual Safety Assesment"
              size="medium"
              style={{ color: 'black', backgroundColor: 'pink' }}
              variant="outlined"
              icon={<DoneIcon />}
              clickable
            />
            <Chip
              label="Light Housekeeping"
              size="medium"
              style={{ color: 'black', backgroundColor: 'pink' }}
              variant="outlined"
              icon={<DoneIcon />}
              clickable
            />
            <Chip
              label="Escorting to Appointments, or Shoping"
              size="medium"
              style={{ color: 'black', backgroundColor: 'pink' }}
              variant="outlined"
              icon={<DoneIcon />}
              clickable
            />
            <Chip
              label="Joyful Companionship"
              size="medium"
              style={{ color: 'black', backgroundColor: 'pink' }}
              variant="outlined"
              icon={<DoneIcon />}
              clickable
            />
            <Chip
              label="Palliative Care"
              size="medium"
              style={{ color: 'black', backgroundColor: 'pink' }}
              variant="outlined"
              icon={<DoneIcon />}
              clickable
            />
            <Chip
              label="Live in/out to 24 hour Care"
              size="medium"
              style={{ color: 'black', backgroundColor: 'pink' }}
              variant="outlined"
              icon={<DoneIcon />}
              clickable
            />

            <Chip
              label="Retirement Homecare"
              size="medium"
              style={{ color: 'black', backgroundColor: 'pink' }}
              variant="outlined"
              icon={<DoneIcon />}
              clickable
            />
            <Chip
              label="Nutritional Counseling"
              size="medium"
              style={{ color: 'black', backgroundColor: 'pink' }}
              variant="outlined"
              icon={<DoneIcon />}
              clickable
            />
            <Chip
              label="Medical Supervision"
              size="medium"
              style={{ color: 'black', backgroundColor: 'pink' }}
              variant="outlined"
              icon={<DoneIcon />}
              clickable
            />
          </div>
        </Container>
      </Card>
    </React.Fragment>
  );
}
