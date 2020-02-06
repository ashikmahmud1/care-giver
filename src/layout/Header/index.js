import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar
} from '@material-ui/core';

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
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="absolute" style={{ backgroundColor: 'teal' }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => props.history.push("/")}
            >
              <Avatar src={require('../../img/e.png')}
                    alt="dp"/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>Peace of mind</Typography>

            <Button color="inherit" onClick={() => props.history.push("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => props.history.push("/services")}>
              Our Services
            </Button>
            {
              props.isLoggedIn ? <Button color="inherit" onClick={() => logout()}>
                Logout
          </Button> : null
            }
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
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
