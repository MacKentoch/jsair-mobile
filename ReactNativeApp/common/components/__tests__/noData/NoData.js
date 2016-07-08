'use strict';

import React, {
  View
}                     from 'react-native';
import utils          from 'react-addons-test-utils';

jest.mock('react-native-vector-icons/Ionicons',() => {});

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
  const mockNoDataText  = 'no data';
  const noDataProps     = {
    ionIconName:  mockIonIconName,
    noDataText:   mockNoDataText
  };
  nodata          = renderComponent(noDataProps);
  const {output}  = nodata;

  it('should render NoData component', () => {
    expect(output.type).toEqual(View);
  });
  it(`should display text "${mockNoDataText}"`, () => {
    expect(output.props.children[1].props.children).toEqual(`${mockNoDataText}`);
  });
  it(`should have icon name "${mockIonIconName}"`, () => {
    expect(output.props.children[0].props.name).toEqual(`${mockIonIconName}`);
  });
});
