// 'use strict';
//
// import React, {
//   View
// }                     from 'react-native';
// import utils          from 'react-addons-test-utils';
//
// jest.unmock('../../sponsorCard/SponsorCard');
// import SponsorCard    from '../../sponsorCard/SponsorCard';
//
// describe('SponsorCard', () => {
//   let sponsorCard;
//
//   function renderComponent(props = {}) {
//     const renderer = utils.createRenderer();
//     renderer.render(<SponsorCard {...props} />);
//     // stateless Component so no state so keep commented:
//     // const instance = renderer._instance._instance;
//     // instance.setState(states);
//     const output = renderer.getRenderOutput();
//     return {
//         output,
//         // instance
//     };
//   }
//   const mockName            = 'mockName';
//   const mockImage           = '';
//   const mockLink            = 'https://www.google.fr';
//   const mockTagLine         = 'tagline';
//   const mockStartDate       = '01/01/2016';
//   const sponsorCardProps    = {
//     image:     mockImage,
//     name:      mockName,
//     link:      mockLink,
//     tagline:   mockTagLine,
//     startDate: mockStartDate
//   };
//   sponsorCard     = renderComponent(sponsorCardProps);
//   const {output}  = sponsorCard;
//
//   it('should render SponsorCard component', () => {
//     // expect(output.type).toEqual(View);
//     expect(true).toEqual(true);
//   });
//   // it(`should display twitter link "@${mockTwitter}"`, () => {
//   //   expect(output.props.children.props.children).toEqual(`@${mockTwitter}`);
//   // });
//   // describe('Text style: ', () => {
//   //   it(`should have "height" to ${mockHeight}`, () => {
//   //     expect(output.props.children.props.style.height).toBe(mockHeight);
//   //   });
//   //   it(`should have "fontSize" to ${mockFontSize}`, () => {
//   //     expect(output.props.children.props.style.fontSize).toBe(mockFontSize);
//   //   });
//   //   it(`should have "marginTop" to ${mockMarginTop}`, () => {
//   //     expect(output.props.children.props.style.marginTop).toBe(mockMarginTop);
//   //   });
//   //   it(`should have "marginBottom" to ${mockMarginBottom}`, () => {
//   //     expect(output.props.children.props.style.marginBottom).toBe(mockMarginBottom);
//   //   });
//   // });
//   // describe('on twitter link press', () => {
//   //   beforeEach(()=> {
//   //     output.props.onPress();
//   //   });
//   //   it('should link to twitter (call onTwitterPress)', () => {
//   //     expect(mockOnTwitterPress.mock.calls.length).toBe(1);
//   //   });
//   // });
//
// });
