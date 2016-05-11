'use strict';

import moment from 'moment';

export const ENTER_EPISODES_VIEW            = 'ENTER_EPISODES_VIEW';
export const LEAVE_EPISODES_VIEW            = 'LEAVE_EPISODES_VIEW';
export const ENTER_SPONSORS_VIEW            = 'ENTER_SPONSORS_VIEW';
export const LEAVE_SPONSORS_VIEW            = 'LEAVE_SPONSORS_VIEW';
export const ENTER_HOST_AND_PANELISTS_VIEW  = 'ENTER_HOST_AND_PANELISTS_VIEW';
export const LEAVE_HOST_AND_PANELISTS_VIEW  = 'LEAVE_HOST_AND_PANELISTS_VIEW';


export const enterEpisodes = (time = moment().format('llll')) => {
  return {
    type:         ENTER_EPISODES_VIEW,
    currentView:  'episodes',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveEpisodes = (time = moment().format('llll')) => {
  return {
    type:         LEAVE_EPISODES_VIEW,
    currentView:  'episodes',
    enterTime:    null,
    leaveTime:    time
  };
};


export const enterSponsors = (time = moment().format('llll')) => {
  return {
    type:         ENTER_SPONSORS_VIEW,
    currentView:  'episodes',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveSponsors = (time = moment().format('llll')) => {
  return {
    type:         LEAVE_SPONSORS_VIEW,
    currentView:  'episodes',
    enterTime:    null,
    leaveTime:    time
  };
};

export const enterHostAndPanelists = (time = moment().format('llll')) => {
  return {
    type:         ENTER_HOST_AND_PANELISTS_VIEW,
    currentView:  'episodes',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveHostAndPanelists = (time = moment().format('llll')) => {
  return {
    type:         LEAVE_HOST_AND_PANELISTS_VIEW,
    currentView:  'episodes',
    enterTime:    null,
    leaveTime:    time
  };
};
