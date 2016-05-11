'use strict';

// dev mock waiting a fetch json solution to javascript air data
import { fetchPanelistsDataMock }  from '../../services';

import { AppConfig }          from '../../config';
import moment                 from 'moment';

export const REQUEST_PANELISTS_DATA         = 'REQUEST_PANELISTS_DATA';
export const RECEIVED_PANELISTS_DATA        = 'RECEIVED_PANELISTS_DATA';
export const ERROR_FETCHING_PANELISTS_DATA  = 'ERROR_FETCHING_PANELISTS_DATA';

const requestPanelistsData = (actionDate = moment().format('llll')) => {
  return {
    type:         REQUEST_PANELISTS_DATA,
    isFetching:   true,
    actionDate
  };
};

const receivedPanelistsData = (panelistsData, actionDate = moment().format('llll')) => {
  return {
    type:        RECEIVED_PANELISTS_DATA,
    isFetching:  false,
    panelistsData,
    actionDate
  };
};

const errorFetchingPanelistsData = (actionDate = moment().format('llll')) => {
  return {
    type: ERROR_FETCHING_PANELISTS_DATA
  };
};

export const fetchPanelistsData = (url = `${AppConfig.javascriptAirUrl}/${AppConfig.panelistsDataSubpath}`) => {
  return dispatch => {
    dispatch(requestPanelistsData());

    if (AppConfig.DEV_MODE) {
      // DEV ONLY
      fetchPanelistsDataMock()
        .then(json => dispatch(receivedPanelistsData(json.data)));
    } else {
      const config = { method: 'GET' };
      fetch(url, config)
      .then(response => response.json())
      .then(json => dispatch(receivedPanelistsData(json)))
      .catch(
        err => {
          dispatch(errorFetchingPanelistsData()); // unset isFetching flag
          AppConfig.DEBUG_ENABLED ?  console.log('fetch panalists data error: ', err) : null;
        }
      );
    }
  };
};

export const fetchPanelistsDataIfNeeded = (url = `${AppConfig.javascriptAirUrl}/${AppConfig.panelistsDataSubpath}`) => {
  return (dispatch, getState) => {
    if (shouldFetchPanelistsData(getState())) {
      AppConfig.DEBUG_ENABLED ? console.log('redux store - panelistsData: will fetch') : null;
      return dispatch(fetchPanelistsData(url));
    }
    AppConfig.DEBUG_ENABLED ? console.log('redux store - panelistsData: will NOT fetch') : null;
  };
};

////////////////////////////////////////////////////////
// utils functions at bottom (hoisting use and abuse)
////////////////////////////////////////////////////////
function shouldFetchPanelistsData(state) {
  const panelists = state.panelists;

  if (panelists.panelistsData && panelists.panelistsData.length > 0) {
    return false;
  }

  if (panelists.panelistsData.length === 0) {
    if (!panelists.isFetching) {
      return true;
    } else {
      return false;
    }
  }
}
