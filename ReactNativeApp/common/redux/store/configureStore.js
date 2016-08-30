'use strict';

import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
}                         from 'redux';
import thunkMiddleware    from 'redux-thunk';
import createLogger       from 'redux-logger';
import * as reducers      from '../reducers';
import { AppConfig }      from '../../config';

const loggerMiddleware = createLogger({
  level     : 'info',
  collapsed : true
});

let enhancer;
if (AppConfig.REDUX_LOG_ACTIVE) {
  // createStore : enhancer
  enhancer = compose(
    applyMiddleware(loggerMiddleware, thunkMiddleware)
  );
} else {
  // createStore : enhancer
  enhancer = compose(
    applyMiddleware(thunkMiddleware)
  );
}

// combine reducers
const reducer = combineReducers({
  ...reducers
});

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
