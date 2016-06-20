'use strict';

// use "unmock" since ES6 imports will be hoisted so "dontMock" won't work
jest.unmock('../../../common/services/utils/utils');
jest.unmock('marked');

import {
  removeMarkdownLinksAndKeepTextOnly,
  markdownLinksExtractor,
  leftTrim,
  isEmptyObject,
  cleanEpisodeDate,
  stripHTML
} from '../../../common/services/utils/utils';

const stringWithMdLink = 'test with a [link](http://test@test.test)';

describe('services: removeMarkdownLinksAndKeepTextOnly', () => {
  const textCleanedFromWithMdLink = removeMarkdownLinksAndKeepTextOnly(stringWithMdLink);
  it('should no more contains markdown link', () => {
    expect(textCleanedFromWithMdLink).toEqual('test with a link');
  });

  const stringWithUnfilledUrlMdLink = 'test with a [link]()';
  const textCleanedFromWithUnfilledUrlMdLink = removeMarkdownLinksAndKeepTextOnly(stringWithUnfilledUrlMdLink);
  it('should no more contains unfilled url markdown link', () => {
    expect(textCleanedFromWithUnfilledUrlMdLink).toEqual('test with a link');
  });

  const stringWithNoLinkValueMdLink = 'test with a [](test@test.test)';
  const textCleanedFromWithNoLinkValueMdLink = removeMarkdownLinksAndKeepTextOnly(stringWithNoLinkValueMdLink);
  it('should not clean bad markdown link - no link value -', () => {
    expect(textCleanedFromWithNoLinkValueMdLink).not.toEqual('test with a link');
  });
});


describe('services: markdownLinksExtractor', () => {
  const extractedValue = markdownLinksExtractor(stringWithMdLink);

  it('should have returned extracted return defined value', () => {
    expect(extractedValue).toBeDefined();
  });
  describe('returned extracted markdown link', () => {
    it('should be an array', () => {
      expect(Array.isArray(extractedValue)).toBeTruthy();
    });
    it('should have length = 1', () => {
      expect(extractedValue.length).toEqual(1);
    });
    describe('first object', () => {
      it('should be an object with property href', () => {
        expect(extractedValue[0].href).toBeDefined();
      });
      it('should be an object with property title', () => {
        expect(extractedValue[0].title).toBeDefined();
      });
      it('should be an object with property text', () => {
        expect(extractedValue[0].text).toBeDefined();
      });
    });
  });
});

describe('services: leftTrim', () => {
  const stringToLeftTrim = 'a string to trim    ';
  const stringTrimed = leftTrim(stringToLeftTrim);
  describe('string length before trim', () => {
    it('should contains 20 chars before leftTrim', () => {
      expect(stringToLeftTrim.length).toEqual(20);
    });
  });
  describe('string length after trim', () => {
    it('should contains 16 chars after leftTrim', ()=>{
      expect(stringTrimed.length).toEqual(20);
    });
  });
});

describe('services: isEmptyObject', () => {
  it('should return true for empty Object' , () => {
    expect(isEmptyObject({})).toBeTruthy();
  });
  it('should return false for non-empty Object' , () => {
    expect(isEmptyObject({OneProp: 'yes'})).toBeFalsy();
  });
  it('should return false for a primitive' , () => {
    expect(isEmptyObject('a primitive')).toBeFalsy();
  });
  it('should return false for an Array' , () => {
    expect(isEmptyObject(['one', 'two'])).toBeFalsy();
  });
});

describe('services: cleanEpisodeDate', () => {
  const badDate = '01:00 **PM** (CT)';
  describe(`with an input equals '${badDate}'`, () => {
    const expectedCleanedString = '01:00 PM (CT)';
    it(`should return '${expectedCleanedString}'` , () => {
      expect(cleanEpisodeDate(badDate)).toEqual(expectedCleanedString);
    });
  });
});

describe('services: stripHTML', () => {
  const stringWithHtml = 'a string<a href="#">with html</a>';
  describe(`with an input equals '${stringWithHtml}'`, () => {
    const expectedCleanedString = 'a string with html ';
    it(`should return '${expectedCleanedString}'` , () => {
      expect(stripHTML(stringWithHtml)).toEqual(expectedCleanedString);
    });
  });
});
