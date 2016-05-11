'use strict';

import {
  IS_CONNECTED,
  NOT_CONNECTED
}               from '../actions';

const initialState = {
  isConnected: true,
  actionDate:  null
};

const connection = (state = initialState, action) => {
  switch (action.type) {
    case IS_CONNECTED:
      return {
        ...state,
        isConnected:  true,
        actionDate:   action.actionDate
      };
    case NOT_CONNECTED:
      return {
        ...state,
        isConnected:  false,
        actionDate:   action.actionDate,
      };
    default:
      return state;
    }
};

export default connection;
