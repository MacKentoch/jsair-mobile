'use strict';
/* eslint no-unused-vars:0*/
import { AppConfig }    from '../../config';
import moment           from 'moment';
import React            from 'react';
import { NetInfo }      from 'react-native';

export const IS_CONNECTED   = 'IS_CONNECTED';
export const NOT_CONNECTED  = 'NOT_CONNECTED';

const setConnected = (actionDate = moment().format('llll')) => {
  return {
    type:         IS_CONNECTED,
    actionDate
  };
};

const setNotConnected = (actionDate = moment().format('llll')) => {
  return {
    type:         NOT_CONNECTED,
    actionDate
  };
};

export const checkInitialConnectivity = () => {
  return dispatch => {
    NetInfo
      .isConnected
      .fetch()
      .done(
        (isConnected) => {
          dispatch(connectivityChange(isConnected));
        }
      );
  };
};

export const connectivityChange = (isConnected) => {
  return dispatch => {
    if (isConnected) {
      AppConfig.DEBUG_ENABLED ? console.log('redux connection connectivityChange - SET CONNECTED') : null;
      dispatch(setConnected());
    } else {
      AppConfig.DEBUG_ENABLED ? console.log('redux connection connectivityChange - SET NOT CONNECTED') : null;
      dispatch(setNotConnected());
    }
  };
};
