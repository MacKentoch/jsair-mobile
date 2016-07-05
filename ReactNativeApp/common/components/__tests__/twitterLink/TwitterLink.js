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
  const mockTwitter         = 'testTwitter';
  const mockHeight          = 32;
  const mockFontSize        = 22;
  const mockOnTwitterPress  = jest.fn();
  const mockMarginTop       = 20;
  const mockMarginBottom    = 20;
  const twitterLinkProps    = {
    twitter:        'testTwitter',
    onTwitterPress: mockOnTwitterPress,
    height:         mockHeight,
    fontSize:       mockFontSize,
    marginTop:      mockMarginTop,
    marginBottom:   mockMarginBottom
  };
  twitterLink     = renderComponent(twitterLinkProps);
  const {output}  = twitterLink;

  it('should render TwitterLink component', () => {
    expect(output.type).toEqual(View);
  });
  it(`should display twitter link "@${mockTwitter}"`, () => {
    expect(output.props.children.props.children).toEqual(`@${mockTwitter}`);
  });
  describe('Text style: ', () => {
    it(`should have "height" to ${mockHeight}`, () => {
      expect(output.props.children.props.style.height).toBe(mockHeight);
    });
    it(`should have "fontSize" to ${mockFontSize}`, () => {
      expect(output.props.children.props.style.fontSize).toBe(mockFontSize);
    });
    it(`should have "marginTop" to ${mockMarginTop}`, () => {
      expect(output.props.children.props.style.marginTop).toBe(mockMarginTop);
    });
    it(`should have "marginBottom" to ${mockMarginBottom}`, () => {
      expect(output.props.children.props.style.marginBottom).toBe(mockMarginBottom);
    });
  });
  describe('on twitter link press', () => {
    beforeEach(()=> {
      output.props.onPress();
    });
    it('should link to twitter (call onTwitterPress)', () => {
      expect(mockOnTwitterPress.mock.calls.length).toBe(1);
    });
  });

});
