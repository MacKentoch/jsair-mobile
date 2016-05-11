'use strict';

const routes = [{
  id                  : 1,
  refView             : 'episodesView',
  sidemenu: {
    sideMenuButtonText  : 'Episodes',
    iconType            : 'Ionicons',
    iconName            : 'ios-videocam',
    iconSize            : 22,
  },
  navbar: {
    navBarTitle         : 'Episodes',
    navBarLeftIconName  : 'navicon',
    navBarLeftIconSize  : 32
  }
},
{
  id                  : 2,
  refView             : 'hostAndPanelistsView',
  sidemenu: {
    sideMenuButtonText  : 'Host & Panelists',
    iconType            : 'ionicons',
    iconName            : 'ios-people',
    iconSize            : 22,
  },
  navbar: {
    navBarTitle         : 'Host & Panelists',
    navBarLeftIconName  : 'navicon',
    navBarLeftIconSize  : 32
  }
},
{
  id                  : 3,
  refView             : 'sponsorsView',
  sidemenu: {
    sideMenuButtonText  : 'Sponsors',
    iconType            : 'ionicons',
    iconName            : 'ribbon-b',
    iconSize            : 22,
  },
  navbar: {
    navBarTitle         : 'Sponsors',
    navBarLeftIconName  : 'navicon',
    navBarLeftIconSize  : 32
  }
}
];


class AppRoutesClass {
  getRouteFromRouteId(routeId) {
    const routeFound = routes.find((route) => {
      if (route.id === routeId) {
        return route;
      }
    });
    return routeFound;
  }

  getAllRoutes() {
    return [].concat(routes);
  }
}


let AppRoutes = new AppRoutesClass();

export default AppRoutes;
