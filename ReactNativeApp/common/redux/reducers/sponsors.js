'use strict';

import {
  REQUEST_SPONSORS_DATA,
  RECEIVED_SPONSORS_DATA,
  ERROR_FETCHING_SPONSORS_DATA
}                           from '../actions';

const initialState = {
  isFetching:   false,
  actionDate:   null,
  premierSponsors:  [],
  goldSponsors:     [],
  silverSponsors:   []
};

const sponsors = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SPONSORS_DATA:
      return {
        ...state,
        isFetching: true,
        actionDate: action.actionDate
      };
    case ERROR_FETCHING_SPONSORS_DATA:
      return {
        ...state,
        isFetching:             false
      };
    case RECEIVED_SPONSORS_DATA:
      return {
        ...state,
        isFetching:       false,
        actionDate:       action.actionDate,
        premierSponsors:  [...action.sponsorsData.premierSponsors],
        goldSponsors:     [...action.sponsorsData.goldSponsors],
        silverSponsors:   [...action.sponsorsData.silverSponsors]
      };
    default:
      return state;
    }
};

export default sponsors;
