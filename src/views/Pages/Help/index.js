import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  margin: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export default function Help() {
  const classes = useStyles();

  return (
    <Container component="main" fixed>
      <div position="fixed" className={classes.margin}>
        <img src={require('../../../img/screen.png')} alt="" />
      </div>
      <div className={classes.paper}>
        <Typography variant="h4">Help</Typography>
      </div>
      <p>
        Aliqua proident dolor amet duis est. Proident veniam nulla anim sunt
        veniam cupidatat aliqua. Sit anim cillum laboris ut amet labore quis
        commodo sunt labore nisi esse. Ullamco id officia cillum eu eiusmod
        minim adipisicing quis consequat pariatur ut labore culpa. Lorem
        consectetur ea reprehenderit aliquip et Lorem voluptate. Ullamco fugiat
        consectetur ad cillum nostrud officia elit sunt sunt ea commodo do.
        Proident sint in cupidatat non reprehenderit adipisicing eu nulla in do
        amet excepteur.
      </p>
      <p>
        Incididunt veniam sit Lorem sint laboris et eiusmod culpa qui velit duis
        nostrud est veniam. Ad do velit exercitation nulla irure. Ea adipisicing
        et amet eu dolor aliquip. Enim nostrud dolor eu excepteur dolor do
        proident nulla irure. Enim laborum ea adipisicing elit ad ad officia in
        et est pariatur. Est eu laboris esse incididunt ea pariatur id in esse
        laborum labore. Eiusmod qui nulla cillum quis Lorem est minim. Irure
        quis laborum duis voluptate. Id dolor ut culpa ut est in anim qui.
        Cupidatat excepteur voluptate et mollit veniam deserunt aliquip amet.
        Sit qui irure eiusmod deserunt do. Ea officia deserunt excepteur
        excepteur anim proident duis tempor laboris magna ut consequat.
      </p>
    </Container>
  );
}
