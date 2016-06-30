'use strict';

// jest.disableAutomock(); // babel-jest version of "jest.autoMockOff()"
import React, {
  View
}                     from 'react-native';
import utils          from 'react-addons-test-utils';

// jest.unmock('moment');
// jest.unmock('../../../../../common/config');
// import { AppColors }  from '../../../../../common/config';

jest.unmock('../../../episodeCard/dateHeader/DateHeader');
import DateHeader     from '../../../episodeCard/dateHeader/DateHeader';

describe('DateHeader', () => {
  let dateheader;

  function renderComponent(props = {}, states = {}) {
    const renderer = utils.createRenderer();
    renderer.render(<DateHeader {...props} />);

    const instance = renderer._instance._instance;
    instance.setState(states);

    const output = renderer.getRenderOutput();
    console.log('output: ', output);
    return {
        output,
        instance
    };
  }
  const dateHeaderProps = {
    episodeDate: '01/01/2016'
  };
  dateheader = renderComponent(dateHeaderProps);
  const {output} = dateheader;

  it('should render DateHeader component', () => {
    expect(output.type).toEqual(View);
  });

  // it('should display a date', () => {
  //   expect(output.props.children.props.children.props.children).toEqual('01/01/2016');
  // });
});
