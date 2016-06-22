'use strict';

// use "unmock" since ES6 imports will be hoisted so "dontMock" won't work
jest.unmock('../../actions/connection');
jest.unmock('moment');
// jest.unmock('../../config');

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

  // describe('action connectivityChange', () => {
  //   it('should dispatch actions "setConnected"', () => {
  //     expect(connectivityChange(true))
  //   });
  // });
});
