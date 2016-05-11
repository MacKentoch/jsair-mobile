'use strict';

const initialState = {
  currentView:  'home',
  enterTime:    new Date() + '',
  leaveTime:    null
};

const views = (state = initialState, action) => {
  switch (action.type) {

    case 'ENTER_EPISODES_VIEW':
      // can't enter if you are already inside
      if (state.currentView !== action.currentView) {
        return Object.assign({}, state, {
          currentView:  action.currentView,
          enterTime:    action.enterTime,
          leaveTime:    action.leaveTime
        });
      }
      return state;

    case 'LEAVE_EPISODES_VIEW':
      // can't leave if you aren't already inside
      if (state.currentView === action.currentView) {
        return Object.assign({}, state, {
          currentView:  action.currentView,
          enterTime:    action.enterTime,
          leaveTime:    action.leaveTime
        });
      }
      return state;


      case 'ENTER_SPONSORS_VIEW':
        // can't enter if you are already inside
        if (state.currentView !== action.currentView) {
          return Object.assign({}, state, {
            currentView:  action.currentView,
            enterTime:    action.enterTime,
            leaveTime:    action.leaveTime
          });
        }
        return state;

      case 'LEAVE_SPONSORS_VIEW':
        // can't leave if you aren't already inside
        if (state.currentView === action.currentView) {
          return Object.assign({}, state, {
            currentView:  action.currentView,
            enterTime:    action.enterTime,
            leaveTime:    action.leaveTime
          });
        }
        return state;

      case 'ENTER_HOST_AND_PANELISTS_VIEW':
        // can't enter if you are already inside
        if (state.currentView !== action.currentView) {
          return Object.assign({}, state, {
            currentView:  action.currentView,
            enterTime:    action.enterTime,
            leaveTime:    action.leaveTime
          });
        }
        return state;

      case 'LEAVE_HOST_AND_PANELISTS_VIEW':
        // can't leave if you aren't already inside
        if (state.currentView === action.currentView) {
          return Object.assign({}, state, {
            currentView:  action.currentView,
            enterTime:    action.enterTime,
            leaveTime:    action.leaveTime
          });
        }
        return state;

  default:
    return state;
  }
};

export default views;
