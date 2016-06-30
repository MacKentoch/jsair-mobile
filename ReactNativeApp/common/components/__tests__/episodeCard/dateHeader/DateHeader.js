'use strict';


import React, {
  View
}                     from 'react-native';
import utils          from 'react-addons-test-utils';

jest.disableAutomock(); // babel-jest version of "jest.autoMockOff()"
jest.unmock('moment');
// import moment         from 'moment';
// jest.unmock('../../../../../common/config');

// jest.unmock('../../../episodeCard/dateHeader/DateHeader');
import DateHeader     from '../../../episodeCard/dateHeader/DateHeader';


class testStateLess extends React.Component {
  render() {
    return (
      <View>
        <DateHeader {...this.props} />
      </View>
    );
  }
}

describe('DateHeader', () => {
  let dateheader;

  function renderComponent(props = {}) {
    const renderer = utils.createRenderer();
    // renderer.render(<testStateLess {...props} />);
    renderer.render(<DateHeader {...props} />);

    // const instance = renderer._instance._instance;
    // instance.setState(states);

    const output = renderer.getRenderOutput();

    return {
        output,
        // instance
    };
  }
  const dateHeaderProps = {
    episodeDate: new Date('01/01/2016'),
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
