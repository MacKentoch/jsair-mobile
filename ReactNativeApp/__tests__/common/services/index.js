'use strict';

jest.unmock('../../../common/services/utils/utils'); // use "unmock" since ES6 import will hoist so "dontMock" won't work

import {
  removeMarkdownLinksAndKeepTextOnly
} from '../../../common/services/utils/utils';


describe('services: removeMarkdownLinksAndKeepTextOnly', () => {
  const stringWithMdLink = 'test with a [link](http://test@test.test)';
  const textCleaned = removeMarkdownLinksAndKeepTextOnly(stringWithMdLink);

  it('should no more contains markdown link', () => {
    expect(textCleaned).toEqual('test with a link');
  });
});
