'use strict';

import React, {
  View
}                     from 'react-native';
import utils          from 'react-addons-test-utils';

jest.disableAutomock(); // babel-jest version of "jest.autoMockOff()"
import EpisodeTitle   from '../../../episodeCard/episodeTitle/EpisodeTitle';

describe('EpisodeTitle', () => {
  let episodeTitle;

  function renderComponent(props = {}) {
    const renderer = utils.createRenderer();
    renderer.render(<EpisodeTitle {...props} />);
    // stateless Component so no state so keep commented:
    // const instance = renderer._instance._instance;
    // instance.setState(states);
    const output = renderer.getRenderOutput();
    return {
        output,
        // instance
    };
  }
  const episodeTitleProps = {
    episodeTitle: 'a test title'
  };
  episodeTitle = renderComponent(episodeTitleProps);
  const {output} = episodeTitle;

  it('should render EpisodeTitle component', () => {
    expect(output.type).toEqual(View);
  });

  it('should display title "a test title"', () => {
    expect(output.props.children.props.children).toEqual('a test title');
  });
});
