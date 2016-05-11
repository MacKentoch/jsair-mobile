'use strict';

import {
  ENTER_EPISODES_VIEW,
  LEAVE_EPISODES_VIEW,
  ENTER_SPONSORS_VIEW,
  LEAVE_SPONSORS_VIEW,
  ENTER_HOST_AND_PANELISTS_VIEW,
  LEAVE_HOST_AND_PANELISTS_VIEW,
  enterEpisodes,
  leaveEpisodes,
  enterSponsors,
  leaveSponsors,
  enterHostAndPanelists,
  leaveHostAndPanelists
}                       from './views';

import {
  REQUEST_EPISODES_DATA,
  RECEIVED_EPISODES_DATA,
  ERROR_FETCHING_EPISODES_DATA,
  fetchAllEpisodeData,
  fetchAllEpisodesIfNeeded
}                       from './episodes';

import {
  REQUEST_HOST_DATA,
  RECEIVED_HOST_DATA,
  ERROR_FETCHING_HOST_DATA,
  fetchHostData,
  fetchHostDataIfNeeded
}                       from './host';

import {
  REQUEST_PANELISTS_DATA,
  RECEIVED_PANELISTS_DATA,
  ERROR_FETCHING_PANELISTS_DATA,
  fetchPanelistsData,
  fetchPanelistsDataIfNeeded
}                       from './panelists';

import {
  REQUEST_SPONSORS_DATA,
  RECEIVED_SPONSORS_DATA,
  ERROR_FETCHING_SPONSORS_DATA,
  fetchSponsorsData,
  fetchSponsorsDataIfNeeded
}                       from './sponsors';

import {
  IS_CONNECTED,
  NOT_CONNECTED,
  connectivityChange,
  checkInitialConnectivity
}                       from './connection';

export {
  // view actions
  ENTER_EPISODES_VIEW,
  LEAVE_EPISODES_VIEW,
  ENTER_SPONSORS_VIEW,
  LEAVE_SPONSORS_VIEW,
  ENTER_HOST_AND_PANELISTS_VIEW,
  LEAVE_HOST_AND_PANELISTS_VIEW,
  enterEpisodes,
  leaveEpisodes,
  enterSponsors,
  leaveSponsors,
  enterHostAndPanelists,
  leaveHostAndPanelists,
  // episodes actions
  REQUEST_EPISODES_DATA,
  RECEIVED_EPISODES_DATA,
  ERROR_FETCHING_EPISODES_DATA,
  fetchAllEpisodeData,
  fetchAllEpisodesIfNeeded,
  // host data
  REQUEST_HOST_DATA,
  RECEIVED_HOST_DATA,
  ERROR_FETCHING_HOST_DATA,
  fetchHostData,
  fetchHostDataIfNeeded,
  // panelists
  REQUEST_PANELISTS_DATA,
  RECEIVED_PANELISTS_DATA,
  ERROR_FETCHING_PANELISTS_DATA,
  fetchPanelistsData,
  fetchPanelistsDataIfNeeded,
  // sponsors
  REQUEST_SPONSORS_DATA,
  RECEIVED_SPONSORS_DATA,
  ERROR_FETCHING_SPONSORS_DATA,
  fetchSponsorsData,
  fetchSponsorsDataIfNeeded,
  // connection
  IS_CONNECTED,
  NOT_CONNECTED,
  connectivityChange,
  checkInitialConnectivity
};
