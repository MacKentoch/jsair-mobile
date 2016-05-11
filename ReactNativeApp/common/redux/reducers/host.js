'use strict';

import {
  REQUEST_HOST_DATA,
  RECEIVED_HOST_DATA,
  ERROR_FETCHING_HOST_DATA
}                           from '../actions';

const initialState = {
  isFetching:   false,
  actionDate:   null,
  hostData:     {}
};

const host = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_HOST_DATA:
      return {
        ...state,
        isFetching: true,
        actionDate: action.actionDate
      };
    case RECEIVED_HOST_DATA:
      return {
        ...state,
        isFetching: false,
        actionDate: action.actionDate,
        hostData:   {...action.hostData}
      };
    case ERROR_FETCHING_HOST_DATA:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
    }
};

export default host;
