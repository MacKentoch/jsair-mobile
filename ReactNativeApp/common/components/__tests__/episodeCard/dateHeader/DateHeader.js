'use strict';

import React, {
  View
}                     from 'react-native';
import utils          from 'react-addons-test-utils';

jest.disableAutomock(); // babel-jest version of "jest.autoMockOff()"
import DateHeader     from '../../../episodeCard/dateHeader/DateHeader';

describe('DateHeader', () => {
  let dateheader;

  function renderComponent(props = {}) {
    const renderer = utils.createRenderer();
    renderer.render(<DateHeader {...props} />);
    // stateless Component so no state so keep commented:
    // const instance = renderer._instance._instance;
    // instance.setState(states);
    const output = renderer.getRenderOutput();
    return {
        output,
        // instance
    };
  }
  const dateHeaderProps = {
    episodeDate: '01/01/2016',
    dateFormat: ''
  };
  dateheader = renderComponent(dateHeaderProps);
  const {output} = dateheader;

  it('should render DateHeader component', () => {
    expect(output.type).toEqual(View);
  });

  it('should display date: Fri, Jan 1st 2016', () => {
    expect(output.props.children.props.children).toEqual('Fri, Jan 1st 2016');
  });
});
