'use strict';

import marked from 'marked';

export const removeMarkdownLinksAndKeepTextOnly = (myText = '') => {
  return myText.replace(/\[([^\]]+)\][^\)]+\)/g, '$1');
};

export const markdownLinksExtractor = (markdown) => {
  const links    = [];
  const renderer = new marked.Renderer();

  // overwrites marked.Renderer.link() to get links
  renderer.link = (href, title, text) => {
    links.push({text, title, href});
    /* eslint no-undef: 0*/
    return marked.Renderer.prototype.link.apply(renderer, arguments);
  };
  marked(markdown, { renderer: renderer });

  return links;
};

export const leftTrim = (myString) => {
  return myString.replace(/^\s+/, '');
};

export const isEmptyObject = (map) => {
   for (var key in map) {
      if (map.hasOwnProperty(key)) {
         return false;
      }
   }
   return true;
};

export const cleanEpisodeDate = (dateString) => {
  return dateString.replace(/[^a-zA-Z0-9():]+/g, ' ');
};

export const stripHTML = (my_string) => {
    const charArr   = my_string.split('');
    const resultArr = [];
    let htmlZone    = 0;
    let quoteZone   = 0;
    /* eslint quotes:0 */
    for (let x = 0; x < charArr.length; x++ ) {
     switch ( charArr[x] + htmlZone + quoteZone ) {
       case "<00" :
        htmlZone  = 1;
        break;
       case ">10" :
        htmlZone  = 0;
        resultArr.push(' ');
        break;
       case '"10' :
        quoteZone = 1;
        break;
       case "'10" :
        quoteZone = 2;
        break;
       case '"11' :
        quoteZone = 0;
        break;
       case "'12" :
        quoteZone = 0;
        break;
       default    :
       if (!htmlZone) {
         resultArr.push(charArr[x]);
       }
     }
    }
    return resultArr.join('');
};
