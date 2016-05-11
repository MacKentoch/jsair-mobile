'use strict';

// dev mock waiting a fetch json solution to javascript air data
import { fetchAllEpisodeDataMock }  from '../../services';

import { AppConfig }                from '../../config';
import moment                       from 'moment';

export const REQUEST_EPISODES_DATA        = 'REQUEST_EPISODES_DATA';
export const RECEIVED_EPISODES_DATA       = 'RECEIVED_EPISODES_DATA';
export const ERROR_FETCHING_EPISODES_DATA = 'ERROR_FETCHING_EPISODES_DATA';


const requestEpisodeData = (actionDate = moment().format('llll')) => {
  return {
    type: REQUEST_EPISODES_DATA,
    actionDate
  };
};

const receivedEpisodeData = (allEpisodes, actionDate = moment().format('llll')) => {
  const pastEpisodes      = filterPastEpisodes(allEpisodes).reverse();
  const futurEpisodes     = filterFuturEpisodes(allEpisodes);
  const upcomingEpisodes  = filterUpcomingEpisodes(allEpisodes);

  return {
    type: RECEIVED_EPISODES_DATA,
    actionDate,
    allEpisodes,
    pastEpisodes,
    upcomingEpisodes,
    futurEpisodes
  };
};

const errorFetchingEpisodeData = (actionDate = moment().format('llll')) => {
  return {
    type: ERROR_FETCHING_EPISODES_DATA
  };
};


export const fetchAllEpisodeData = (url = `${AppConfig.javascriptAirUrl}/${AppConfig.episodesDataSubpath}`) => {
  return dispatch => {
    dispatch(requestEpisodeData());

    if (AppConfig.DEV_MODE) {
      // DEV ONLY
      fetchAllEpisodeDataMock()
        .then(json => dispatch(receivedEpisodeData(json.data)));
    } else {
      const config = { method: 'GET' };
      fetch(url, config)
      .then(response => response.json())
      .then(
        json => dispatch(receivedEpisodeData(json)))
      .catch(
        err => {
          dispatch(errorFetchingEpisodeData()); // unset isFetching flag
          AppConfig.DEBUG_ENABLED ?  console.log('fetch episodes data error: ', err) : null;
        }
      );
    }
  };
};

export const fetchAllEpisodesIfNeeded = (url = `${AppConfig.javascriptAirUrl}/${AppConfig.episodesDataSubpath}`) => {
  return (dispatch, getState) => {
    if (shouldFetchAllEpisodesData(getState())) {
      AppConfig.DEBUG_ENABLED ? console.log('redux store - allEpisodes: will fetch') : null;
      return dispatch(fetchAllEpisodeData(url));
    }
    AppConfig.DEBUG_ENABLED ? console.log('redux store - allEpisodes: will NOT fetch') : null;
  };
};

////////////////////////////////////////////////////////
// utils functions at bottom (hoisting use and abuse)
////////////////////////////////////////////////////////
function shouldFetchAllEpisodesData(state) {
  const episodes = state.episodes;

  if (episodes.allEpisodes && episodes.allEpisodes.length > 0) {
    return false;
  }

  if (episodes.allEpisodes.length === 0) {
    if (episodes.isFetching) {
      return false;
    } else {
      return true;
    }
  }
}

function filterPastEpisodes(allEpisode) {
  return allEpisode.filter(
    episode => {
      return  isPast(moment(episode.date).format('YYYY-MM-DD')) &&
              !isToday(moment(episode.date).format('YYYY-MM-DD'));
    }
  );
}

function filterFuturEpisodes(allEpisode) {
  return allEpisode.filter(episode => isFuture(moment(episode.date).format('YYYY-MM-DD')));
}

function filterUpcomingEpisodes(allEpisode) {
  const upcomings = allEpisode.filter(
    episode => {
      return  isToday(moment(episode.date).format('YYYY-MM-DD')) ||
              isFuture(moment(episode.date).format('YYYY-MM-DD'));
    }
  );
  return [...upcomings.slice(0,2)];
}

function isFuture(date, compare = moment()) {
  return moment(compare).diff(date) < 0;
}

function isPast(date, compare = moment()) {
  return !isFuture(date, compare);
}

function isToday(date) {
  return moment(date).isSame(moment(), 'day');
}
