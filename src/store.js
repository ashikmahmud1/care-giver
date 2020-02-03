// src/store.js
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

// import all the reducers
import CountReducer from './store/reducers/CountReducer';
import UserReducer from './store/reducers/UserReducer';

// set up thunk middleware
import thunk from 'redux-thunk';

// combine all the reducers
const reducer = combineReducers({
  CountReducer,
  UserReducer
});

// create our own middleware
const logger = store => {
  return next => {
    return action => {
      //console.log('Middleware dispatching', action);
      //console.log('Middleware next state', store.getState());
      return next(action);
    };
  };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create the store
let store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

// export the store
export default store;
