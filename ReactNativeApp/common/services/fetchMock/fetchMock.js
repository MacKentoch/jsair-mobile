'use strict';

import { AppConfig }  from '../../config';
import episodesMock   from '../../mockups/episodes.json';
import hostMock       from '../../mockups/host.json';
import panelistsMock  from '../../mockups/panelists.json';
import sponsorsMock   from '../../mockups/sponsors.json';

export const fetchAllEpisodeDataMock = (timeToWait = AppConfig.FAKE_ASYNC_DELAY) => {
  let promise = new Promise((resolve, reject)=>{
    setTimeout(
      () => resolve({data: episodesMock}),
      timeToWait
    );
  });
  return promise;
};

export const fetchHostDataMock = (timeToWait = AppConfig.FAKE_ASYNC_DELAY) => {
  let promise = new Promise((resolve, reject)=>{
    setTimeout(
      () => resolve({data: hostMock}),
      timeToWait
    );
  });
  return promise;
};

export const fetchPanelistsDataMock = (timeToWait = AppConfig.FAKE_ASYNC_DELAY) => {
  let promise = new Promise((resolve, reject)=>{
    setTimeout(
      () => resolve({data: panelistsMock}),
      timeToWait
    );
  });
  return promise;
};

export const fetchSponsorsDataMock = (timeToWait = AppConfig.FAKE_ASYNC_DELAY) => {
  let promise = new Promise((resolve, reject)=>{
    setTimeout(
      () => resolve({data: sponsorsMock}),
      timeToWait
    );
  });
  return promise;
};
