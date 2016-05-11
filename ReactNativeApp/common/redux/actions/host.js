'use strict';

// dev mock waiting a fetch json solution to javascript air data
import { fetchHostDataMock }  from '../../services';

import { AppConfig }          from '../../config';
import { isEmptyObject }      from '../../services/utils/utils';
import moment                 from 'moment';

export const REQUEST_HOST_DATA          = 'REQUEST_HOST_DATA';
export const RECEIVED_HOST_DATA         = 'RECEIVED_HOST_DATA';
export const ERROR_FETCHING_HOST_DATA   = 'ERROR_FETCHING_HOST_DATA';

const requestHostData = (actionDate = moment().format('llll')) => {
  return {
    type:         REQUEST_HOST_DATA,
    isFetching:   true,
    actionDate
  };
};

const receivedHostData = (hostData, actionDate = moment().format('llll')) => {
  return {
    type:        RECEIVED_HOST_DATA,
    isFetching:  false,
    hostData,
    actionDate
  };
};

const errorFetchingHostData = (actionDate = moment().format('llll')) => {
  return {
    type: ERROR_FETCHING_HOST_DATA
  };
};

export const fetchHostData = (url = `${AppConfig.javascriptAirUrl}/${AppConfig.hostDataSubpath}`) => {
  return dispatch => {
    dispatch(requestHostData());

    if (AppConfig.DEV_MODE) {
      // DEV ONLY
      fetchHostDataMock()
        .then(json => dispatch(receivedHostData(json.data)));
    } else {
      const config          = { method: 'GET' };
      fetch(url, config)
      .then(response => response.json())
      .then(json => dispatch(receivedHostData(json)))
      .catch(
        err => {
          dispatch(errorFetchingHostData()); // unset isFetching flag
          AppConfig.DEBUG_ENABLED ?  console.log('fetch host data error: ', err) : null;
        }
      );
    }
  };
};

export const fetchHostDataIfNeeded = (url = `${AppConfig.javascriptAirUrl}/${AppConfig.hostDataSubpath}`) => {
  return (dispatch, getState) => {
    if (shouldFetchHostData(getState())) {
      AppConfig.DEBUG_ENABLED ? console.log('redux store - hostData: will fetch') : null;
      return dispatch(fetchHostData(url));
    }
    AppConfig.DEBUG_ENABLED ? console.log('redux store - hostData: will NOT fetch') : null;
  };
};

////////////////////////////////////////////////////////
// utils functions at bottom (hoisting use and abuse)
////////////////////////////////////////////////////////
function shouldFetchHostData(state) {
  const host = state.host;

  if (host.hostData && !isEmptyObject(host.hostData)) {
    return false;
  }

  if (isEmptyObject(host.hostData)) {
    if (!host.isFetching) {
      return true;
    } else {
      return false;
    }
  }
}
