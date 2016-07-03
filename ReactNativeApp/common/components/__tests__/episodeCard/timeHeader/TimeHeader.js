'use strict';

import React, {
  View
}                     from 'react-native';
import utils          from 'react-addons-test-utils';

// don't want to test react native icons required inside TimeHeader:
//=> so mock it before unmocking TimeHeader component:
jest.mock('react-native-vector-icons/Ionicons', () => {});
jest.unmock('../../../episodeCard/timeHeader/TimeHeader'); // babel-jest version of "jest.autoMockOff()"
import TimeHeader   from '../../../episodeCard/timeHeader/TimeHeader';

describe('TimeHeader', () => {
  let timeHeader;

  function renderComponent(props = {}) {
    const renderer = utils.createRenderer();
    renderer.render(<TimeHeader {...props} />);
    // stateless Component so no state so keep commented:
    // const instance = renderer._instance._instance;
    // instance.setState(states);
    const output = renderer.getRenderOutput();
    return {
        output,
        // instance
    };
  }
  const timeHeaderProps = {
    episodeTime: '02:00 pm',
  };
  timeHeader = renderComponent(timeHeaderProps);
  const {output} = timeHeader;

  it('should render TimeHeader component', () => {
    expect(output.type).toEqual(View);
  });

  it('should display time "02:00 pm"', () => {
    expect(output.props.children.props.children).toEqual('02:00 pm');
  });
});
