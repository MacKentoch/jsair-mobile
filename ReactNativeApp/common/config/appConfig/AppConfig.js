'use strict';

export const AppConfig = {

  DEV_MODE:             false,  // to mock, not fetch request
  DEBUG_ENABLED:        false,   // show or not console log to debug
  FAKE_ASYNC_DELAY:     1000,

  smallScreenMaxWidth:  320,
  sideMenuTitle: 'Javascript Air',

  viewAnimations: {
    animation:  'fadeInUp',
    duration:   500,
    delay:      0
  },

  javascriptAirUrl:     'https://javascriptair.com',
  episodesDataSubpath:  'episodes/data.json',
  hostDataSubpath:      'resources/host/data.json',
  panelistsDataSubpath: 'resources/panelists/data.json',
  sponsorsDataSubpath:  'sponsors/data.json',

  episodes: {
    initialPage:  1,
    initPageSize: 2
  },
  hostAndPanelists: {
    initialPage:  0,
    initPageSize: 2
  },
  sponsors: {
    initialPage:  0,
    initPageSize: 2
  },

  noData: {
    defaultIonIconName:         'sad-outline',
    defaultNoDataText:          'Sorry... Currently no data...',
    noPastEpisodeText:          'Sorry... Currently no past episode data...',
    noUpcomingEpisodeText:      'Sorry... Currently no upcoming episode data...',
    noFuturEpisodeText:         'Sorry... Currently no futur episode data...',
    noHostDataText:             'Sorry... Currently no host data...',
    noPanelistsDataText:        'Sorry... Currently no panlelists data...',
    noPremiumSponsorsDataText:  'Sorry... Currently no premium sponsors data...',
    noGoldSponsorsDataText:     'Sorry... Currently no gold sponsors data...',
    noSilverSponsorsDataText:   'Sorry... Currently no silver sponsors data...',
  },

  noConnectivityAlert: {
    title: 'No connection',
    description: 'Connection lost or unavailable',
    buttonText: 'OK'
  }
};
