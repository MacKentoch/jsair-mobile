'use strict';

// dev mock waiting a fetch json solution to javascript air data
import { fetchSponsorsDataMock }  from '../../services';

import { AppConfig }          from '../../config';
import moment                 from 'moment';

export const REQUEST_SPONSORS_DATA        = 'REQUEST_SPONSORS_DATA';
export const RECEIVED_SPONSORS_DATA       = 'RECEIVED_SPONSORS_DATA';
export const ERROR_FETCHING_SPONSORS_DATA = 'ERROR_FETCHING_SPONSORS_DATA';

const requestSponsorsData = (actionDate = moment().format('llll')) => {
  return {
    type:         REQUEST_SPONSORS_DATA,
    isFetching:   true,
    actionDate
  };
};

const receivedSponsorsData = (sponsorsData, actionDate = moment().format('llll')) => {
  return {
    type:        RECEIVED_SPONSORS_DATA,
    isFetching:  false,
    sponsorsData,
    actionDate
  };
};

const errorFetchingSponsorsData = (actionDate = moment().format('llll')) => {
  return {
    type: ERROR_FETCHING_SPONSORS_DATA
  };
};

export const fetchSponsorsData = (url = `${AppConfig.javascriptAirUrl}/${AppConfig.sponsorsDataSubpath}`) => {
  return dispatch => {
    dispatch(requestSponsorsData());

    if (AppConfig.DEV_MODE) {
      // DEV ONLY
      fetchSponsorsDataMock()
        .then(json => dispatch(receivedSponsorsData(json.data)));
    } else {
      const config          = { method: 'GET' };
      fetch(url, config)
      .then(response => response.json())
      .then(json => dispatch(receivedSponsorsData(json[0])))
      .catch(
        err => {
          dispatch(errorFetchingSponsorsData()); // unset isFetching flag
          AppConfig.DEBUG_ENABLED ?  console.log('fetch sponsors data error: ', err) : null;
        }
      );
    }
  };
};

export const fetchSponsorsDataIfNeeded = (url = `${AppConfig.javascriptAirUrl}/${AppConfig.sponsorsDataSubpath}`) => {
  return (dispatch, getState) => {
    if (shouldFetchSponsorsData(getState())) {
      AppConfig.DEBUG_ENABLED ? console.log('redux store - sponsorsData: will fetch') : null;
      return dispatch(fetchSponsorsData(url));
    }
    AppConfig.DEBUG_ENABLED ? console.log('redux store - sponsorsData: will NOT fetch') : null;
  };
};

////////////////////////////////////////////////////////
// utils functions at bottom (hoisting use and abuse)
////////////////////////////////////////////////////////
function shouldFetchSponsorsData(state) {
  const sponsors = state.sponsors;

  if (sponsors.premierSponsors.length > 0 &&
      sponsors.goldSponsors.length > 0 &&
      sponsors.silverSponsors.length > 0) {
    return false;
  }

  if (sponsors.premierSponsors.length === 0 ||
      sponsors.goldSponsors.length === 0 ||
      sponsors.silverSponsors.length === 0) {
    if (!sponsors.isFetching) {
      return true;
    } else {
      return false;
    }
  }
}
