'use strict';

import {
  REQUEST_PANELISTS_DATA,
  RECEIVED_PANELISTS_DATA,
  ERROR_FETCHING_PANELISTS_DATA
}                           from '../actions';

const initialState = {
  isFetching:     false,
  actionDate:     null,
  panelistsData:  []
};

const panelists = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PANELISTS_DATA:
      return {
        ...state,
        isFetching:     true,
        actionDate:     action.actionDate
      };
    case ERROR_FETCHING_PANELISTS_DATA:
      return {
        ...state,
        isFetching:     false
      };
    case RECEIVED_PANELISTS_DATA:
      return {
        ...state,
        isFetching:     false,
        actionDate:     action.actionDate,
        panelistsData:  [...action.panelistsData]
      };
    default:
      return state;
    }
};

export default panelists;
