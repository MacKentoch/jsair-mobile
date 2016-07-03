'use strict';

import React, {
  View
}                     from 'react-native';
import utils          from 'react-addons-test-utils';

jest.disableAutomock(); // babel-jest version of "jest.autoMockOff()"
import EpisodeButton     from '../../../episodeCard/episodeButton/EpisodeButton';

describe('EpisodeButton', () => {
  let episodeButton;

  function renderComponent(props = {}) {
    const renderer = utils.createRenderer();
    renderer.render(<EpisodeButton {...props} />);
    // stateless Component so no state so keep commented:
    // const instance = renderer._instance._instance;
    // instance.setState(states);
    const output = renderer.getRenderOutput();
    return {
        output,
        // instance
    };
  }
  const mockOnPress = jest.fn();
  const dateHeaderProps = {
    buttonText: 'buttonText',
    onBtnPress: mockOnPress
  };
  episodeButton = renderComponent(dateHeaderProps);
  const {output} = episodeButton;

  it('should render EpisodeButton component', () => {
    expect(output.type).toEqual(View);
  });

  it('should have text "buttonText"', () => {
    expect(output.props.children.props.children).toEqual('buttonText');
  });
  it('should call props.onPress()', () => {
    // triggers onPress from chidlren = TouchableOpacity props:
    output.props.onPress();
    expect(mockOnPress.mock.calls.length).toBe(1);
  });
});
