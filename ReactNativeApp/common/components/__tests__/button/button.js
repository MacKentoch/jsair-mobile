'use strict';

import React, {
  View
}             from 'react-native';
import utils  from 'react-addons-test-utils'; //

jest.unmock('../../button/Button');
import Button from '../../button/Button';


describe('Button', () => {
  let button;

  function renderButton(props = {}, states = {}) {
    const renderer = utils.createRenderer();
    renderer.render(<Button {...props} >{props.children}</Button>);

    const instance = renderer._instance._instance;
    instance.setState(states);

    const output = renderer.getRenderOutput();

    return {
        output,
        instance
    };
  }

  const mockOnPress = jest.fn();
  const buttonProps = {
    style: {nothing: ''},
    children: 'a child',
    onPress: mockOnPress
  };
  button = renderButton(buttonProps);

  it('should render Button component', () => {
    const {output} = button;
    expect(output.type).toEqual(View);
  });

  it('should output.props.children to be defined', () => {
    const {output} = button;
    expect(output.props.children).toBeDefined();
  });

  it('should display children text', () => {
    const {output} = button;
    expect(output.props.children.props.children.props.children).toEqual('a child');
  });

  it('should call props.onPress()', () => {
    const {output} = button;
    // triggers onPress from chidlren = TouchableOpacity props:
    output.props.children.props.onPress();
    expect(mockOnPress.mock.calls.length).toBe(1);
  });
});
