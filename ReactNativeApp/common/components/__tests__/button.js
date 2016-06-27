'use strict';

jest.disableAutomock(); // babel-jest version of "jest.autoMockOff()"

import React, {
  View
}             from 'react-native';
import utils  from 'react-addons-test-utils';
import Button from '../button/Button';


describe('Button', () => {
  let button;

  function renderButton(props = {}, states = {}) {
    const renderer = utils.createRenderer();
    renderer.render(<Button {...props} />);

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
    children: 'a child',
    onPress: () => mockOnPress()
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

  // it('should call props.onPress()', () => {
  //   const {output} = button;
  //   const touchableOpacity = output.props.children;
  //   utils.Simulate.click(touchableOpacity);
  //   // expect(output.handlePress).toBeCalled();
  //   expect(mockOnPress.mock.calls.length).toBe(1);
  // });
});
