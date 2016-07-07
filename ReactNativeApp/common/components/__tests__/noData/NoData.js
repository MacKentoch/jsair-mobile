'use strict';

import React, {
  View
}                     from 'react-native';
import utils          from 'react-addons-test-utils';

jest.mock('react-native-vector-icons/Ionicons', () => {});

jest.unmock('../../noData/noData');
import NoData    from '../../noData/noData';

describe('NoData', () => {
  let nodata;

  function renderComponent(props = {}) {
    const renderer = utils.createRenderer();
    renderer.render(<NoData {...props} />);
    // stateless Component so no state so keep commented:
    // const instance = renderer._instance._instance;
    // instance.setState(states);
    const output = renderer.getRenderOutput();
    return {
        output,
        // instance
    };
  }

  const mockIonIconName = 'an icon';
  const mockNoDataText  = '01/01/2016';
  const noDataProps     = {
    ionIconName:  mockIonIconName,
    noDataText:   mockNoDataText
  };
  nodata          = renderComponent(noDataProps);
  const {output}  = nodata;

  it('should render NoData component', () => {
    expect(output.type).toEqual(View);
  });
  // it(`should display twitter link "@${mockTwitter}"`, () => {
  //   expect(output.props.children.props.children).toEqual(`@${mockTwitter}`);
  // });
  // describe('Text style: ', () => {
  //   it(`should have "height" to ${mockHeight}`, () => {
  //     expect(output.props.children.props.style.height).toBe(mockHeight);
  //   });
  //   it(`should have "fontSize" to ${mockFontSize}`, () => {
  //     expect(output.props.children.props.style.fontSize).toBe(mockFontSize);
  //   });
  //   it(`should have "marginTop" to ${mockMarginTop}`, () => {
  //     expect(output.props.children.props.style.marginTop).toBe(mockMarginTop);
  //   });
  //   it(`should have "marginBottom" to ${mockMarginBottom}`, () => {
  //     expect(output.props.children.props.style.marginBottom).toBe(mockMarginBottom);
  //   });
  // });
  // describe('on twitter link press', () => {
  //   beforeEach(()=> {
  //     output.props.onPress();
  //   });
  //   it('should link to twitter (call onTwitterPress)', () => {
  //     expect(mockOnTwitterPress.mock.calls.length).toBe(1);
  //   });
  // });

});
