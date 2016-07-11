'use strict';

import React, {
  View
}                     from 'react-native';
import utils          from 'react-addons-test-utils';

jest.unmock('../../member/Member');
import Member         from '../../member/Member';

describe('Member', () => {
  let member;

  function renderComponent(props = {}) {
    const renderer = utils.createRenderer();
    renderer.render(<Member {...props} />);
    // stateless Component so no state so keep commented:
    // const instance = renderer._instance._instance;
    // instance.setState(states);
    const output = renderer.getRenderOutput();
    return {
        output,
        // instance
    };
  }

  const memberProps = {};
  member     = renderComponent(memberProps);
  const {output}  = member;

  it('should render Member component', () => {
    expect(output.type).toEqual(View);
  });
});
