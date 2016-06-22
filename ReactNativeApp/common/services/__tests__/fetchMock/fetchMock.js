'use strict';

  // use "unmock" since ES6 imports will be hoisted so "dontMock" won't work
// jest.unmock('../../../../common/services/fetchMock/fetchMock');
// jest.unmock('../../../../common/config');
// jest.unmock('../../../../common/mockups/episodes.json');
// jest.unmock('../../../../common/mockups/host.json');
// jest.unmock('../../../../common/mockups/panelists.json');
// jest.unmock('../../../../common/mockups/sponsors.json');
//
// import {
//   fetchAllEpisodeDataMock
// }                          from '../../../../common/services/fetchMock/fetchMock';
//
// describe('services: fetchAllEpisodeDataMock', () => {
//   it('should return an array of episodes', () => {
//     return fetchAllEpisodeDataMock()
//       .then(
//         data => expect(Array.isArray(data.data)).toBeTruthy()
//       );
//   });
// });
