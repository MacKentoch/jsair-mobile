'use strict';

import React, {
  View
}                     from 'react-native';
import utils          from 'react-addons-test-utils';

jest.unmock('../../twitterLink/TwitterLink');
import TwitterLink    from '../../twitterLink/TwitterLink';

describe('TwitterLink', () => {
  let twitterLink;

  function renderComponent(props = {}) {
    const renderer = utils.createRenderer();
    renderer.render(<TwitterLink {...props} />);
    // stateless Component so no state so keep commented:
    // const instance = renderer._instance._instance;
    // instance.setState(states);
    const output = renderer.getRenderOutput();
    return {
        output,
        // instance
    };
  }
  const mockHeight          = 32;
  const mockFontSize        = 22;
  const mockOnTwitterPress  = jest.fn();
  const twitterLinkProps    = {
    twitter:        'testTwitter',
    onTwitterPress: mockOnTwitterPress,
    height:         mockHeight,
    fontSize:       mockFontSize,
    marginTop:      20,
    marginBottom:   20
  };
  twitterLink     = renderComponent(twitterLinkProps);
  const {output}  = twitterLink;

  it('should render TwitterLink component', () => {
    expect(output.type).toEqual(View);
  });
  it('should display twitter link "@testTwitter"', () => {
    expect(output.props.children.props.children).toEqual('@testTwitter');
  });
  describe('Text style: ', () => {
    it(`should have "height" to ${mockHeight}`, () => {
      expect(output.props.children.props.style.height).toBe(mockHeight);
    });
    it(`should have "fontSize" to ${mockFontSize}`, () => {
      expect(output.props.children.props.style.fontSize).toBe(mockFontSize);
    });
  });
});
