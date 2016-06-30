'use strict';

// jest.disableAutomock(); // babel-jest version of "jest.autoMockOff()"

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// jest.unmock('../../../services/fetchMock/fetchMock');
// import { fetchAllEpisodeDataMock }  from '../../../services/fetchMock/fetchMock';
// jest.unmock('../../../config/appConfig/AppConfig');
// import { AppConfig } from '../../../config/appConfig/AppConfig';
// jest.unmock('moment');
// import moment from 'moment';

import {
  REQUEST_EPISODES_DATA,
  RECEIVED_EPISODES_DATA,
  ERROR_FETCHING_EPISODES_DATA,
  // fetchAllEpisodeData,
  // fetchAllEpisodesIfNeeded
} from '../../actions/episodes';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);


describe('redux - actions: episodes', () => {

  describe('actions constants REQUEST_EPISODES_DATA', () => {
    it('should equal "REQUEST_EPISODES_DATA"' , () => {
      expect(REQUEST_EPISODES_DATA).toEqual('REQUEST_EPISODES_DATA');
    });
  });

  describe('actions constants RECEIVED_EPISODES_DATA', () => {
    it('should equal "RECEIVED_EPISODES_DATA"' , () => {
      expect(RECEIVED_EPISODES_DATA).toEqual('RECEIVED_EPISODES_DATA');
    });
  });

  describe('actions constants ERROR_FETCHING_EPISODES_DATA', () => {
    it('should equal "ERROR_FETCHING_EPISODES_DATA"' , () => {
      expect(ERROR_FETCHING_EPISODES_DATA).toEqual('ERROR_FETCHING_EPISODES_DATA');
    });
  });
});