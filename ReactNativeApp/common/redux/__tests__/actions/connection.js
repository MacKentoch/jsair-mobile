'use strict';

jest.disableAutomock(); // babel-jest version of "jest.autoMockOff()"

import moment from 'moment';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

// NOTE: jest.disableAutomock() does the job:
// use "unmock" since ES6 imports will be hoisted so "dontMock" won't work
// jest.unmock('../../actions/connection');
// jest.unmock('moment');
// jest.unmock('redux-thunk');
// jest.unmock('redux-mock-store');

import {
  IS_CONNECTED,
  NOT_CONNECTED,
  connectivityChange
} from '../../actions/connection';



describe('redux - actions: connection', () => {

  describe('actions constants IS_CONNECTED', () => {
    it('should equal "IS_CONNECTED"' , () => {
      expect(IS_CONNECTED).toEqual('IS_CONNECTED');
    });
  });

  describe('actions constants NOT_CONNECTED', () => {
    it('should equal "NOT_CONNECTED"' , () => {
      expect(NOT_CONNECTED).toEqual('NOT_CONNECTED');
    });
  });

  describe('action connectivityChange', () => {
    const setConnectedAction =  {
      type: IS_CONNECTED,
      actionDate: moment().format('llll')
    };

    const setNotConnectedAction =  {
      type: NOT_CONNECTED,
      actionDate: moment().format('llll')
    };

    it('should dispatch actions "setConnected"', () => {
      const store = mockStore({});
      store.dispatch(connectivityChange(true));
      const actions = store.getActions();

      expect(actions[0]).toEqual(setConnectedAction);
    });

    it('should dispatch actions "setNotConnected"', () => {
      const store = mockStore({});
      store.dispatch(connectivityChange(false));
      const actions = store.getActions();

      expect(actions[0]).toEqual(setNotConnectedAction);
    });
  });
});
