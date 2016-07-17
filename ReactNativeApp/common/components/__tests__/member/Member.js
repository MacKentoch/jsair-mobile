// 'use strict';
//
// import React, {
//   View
// }                     from 'react-native';
// import utils          from 'react-addons-test-utils';
//
// jest.mock('../../../../common/config/appConfig/AppConfig',
//   () => {
//     return {
//       smallScreenMaxWidth: 320
//     };
//   }
// );
// jest.mock('../../../../common/config/appColors/AppColors',
//   () => {
//     return {
//       lightBlack: '#4A4A4A',
//       mainYellow: 'yellow'
//     };
//   }
// );
// jest.mock('../../twitterLink/TwitterLink', ()=>{});
//
// jest.unmock('../../member/Member');
// import Member         from '../../member/Member';
//
// describe('Member', () => {
//   let member;
//
//   function renderComponent(props = {}) {
//     const renderer = utils.createRenderer();
//     renderer.render(<Member {...props} />);
//     // stateless Component so no state so keep commented:
//     // const instance = renderer._instance._instance;
//     // instance.setState(states);
//     const output = renderer.getRenderOutput();
//     return {
//         output,
//         // instance
//     };
//   }
//
//   const mockPhoto     = 'fake.img.png';
//   const mockname      = 'fake name';
//   const mockTwitter   = 'fakeTwitter';
//   const mockLink      = 'fakeLink';
//   const memberProps = {
//     photo:    mockPhoto,
//     name:     mockname,
//     twitter:  mockTwitter,
//     link:     mockLink
//   };
//   member     = renderComponent(memberProps);
//   const {output}  = member;
//
//   it('should render Member component', () => {
//     expect(output.type).toEqual(View);
//   });
// });
