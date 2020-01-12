import React from 'react';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import './header.css';

import * as actionCreators from '../../store/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = props => {
  const classes = useStyles();

  const logout = () => {
    props.logout();
    props.history.push('/login');
  };

  return (
    <div className={classes.root}>
      <AppBar position="absolute" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            href="/"
          >
            {' '}
            Peace of mind
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>

          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/services">
            Our Services
          </Button>
          <Button color="inherit" onClick={() => logout()}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

// connect with react-redux

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    isLoggedIn: state.UserReducer.isLoggedIn
  };
}

// Map Redux functions to component `props
function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(actionCreators.logout())
  };
}

//connecting out component with the redux store
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default withRouter(HeaderContainer);
