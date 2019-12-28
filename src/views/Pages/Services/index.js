import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { List, Container } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    marginTop: theme.spacing(6),
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
          <Typography variant="h4">Our Services</Typography>
        </div>
        <List component="nav" className={classes.root} aria-label="services">
          <ListItem button>
            <ListItemText inset primary="Medical Supervision" />
          </ListItem>
          <ListItem button>
            <ListItemText
              inset
              primary="Personal assistance, bathing, dressing"
            />
          </ListItem>
          <ListItem button>
            <ListItemText inset primary="RN/RPN Supervised Care" />
          </ListItem>
          <ListItem button>
            <ListItemText inset primary="Specialize in Perkinson/Dementia" />
          </ListItem>
          <ListItem button>
            <ListItemText inset primary="Specialize in Alzheimer's" />
          </ListItem>
          <ListItem button>
            <ListItemText inset primary="Home/Individual Safety Assesment" />
          </ListItem>
          <ListItem button>
            <ListItemText inset primary="Light Housekeeping" />
          </ListItem>
          <ListItem button>
            <ListItemText
              inset
              primary="Escorting to Appointments, or Shoping"
            />
          </ListItem>
          <ListItem button>
            <ListItemText inset primary="Joyful Companionship" />
          </ListItem>
          <ListItem button>
            <ListItemText inset primary="Palliative Care" />
          </ListItem>

          <ListItem button>
            <ListItemText inset primary="Live in/out to 24 hour Care" />
          </ListItem>
          <ListItem button>
            <ListItemText inset primary="Retirement Homecare" />
          </ListItem>
          <ListItem button>
            <ListItemText inset primary="Nutritional Counseling" />
          </ListItem>
        </List>
      </Container>
    </React.Fragment>
  );
}
