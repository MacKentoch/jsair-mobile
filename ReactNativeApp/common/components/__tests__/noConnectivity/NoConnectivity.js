'use strict';

import React, {
  View
}                     from 'react-native';
import utils          from 'react-addons-test-utils';

jest.mock('react-native-animatable');

jest.unmock('../../noConnectivity/NoConnectivity');
import NoConnectivity    from '../../noConnectivity/NoConnectivity';

describe('NoConnectivity', () => {
  let noConnectivity;

  function renderComponent(props = {}) {
    const renderer = utils.createRenderer();
    renderer.render(<NoConnectivity {...props} />);
    // stateless Component so no state so keep commented:
    // const instance = renderer._instance._instance;
    // instance.setState(states);
    const output = renderer.getRenderOutput();
    return {
        output,
        // instance
    };
  }

  const noConnectivityProps = {};
  noConnectivity     = renderComponent(noConnectivityProps);
  const {output}  = noConnectivity;

  it('should render NoConnectivity component', () => {
    expect(output.type).toEqual(View);
  });
});
