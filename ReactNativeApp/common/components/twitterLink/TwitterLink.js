'use strict';

import React , {
  PropTypes
}                      from 'react';
import {
  Text,
  TouchableOpacity
}                      from 'react-native';

const TwitterLink = (props) => {
  const twitterStyle = {
    height:           props.height,
    marginTop:        props.marginTop,
    marginBottom:     props.marginTop,
    fontSize:         props.fontSize,
    backgroundColor:  'transparent'
  };

  return (
    <TouchableOpacity
      onPress={props.onTwitterPress}>
      <Text style={twitterStyle}>
        {props.twitter ? `@${props.twitter}` : ''}
      </Text>
    </TouchableOpacity>
  );
};


TwitterLink.propTypes = {
  twitter:        PropTypes.string.isRequired,
  onTwitterPress: PropTypes.func.isRequired,
  height:         PropTypes.number,
  fontSize:       PropTypes.number,
  marginTop:      PropTypes.number,
  marginBottom:   PropTypes.number
};

TwitterLink.defaultProps = {
  height:       26,
  fontSize:     16,
  marginTop:    10,
  marginBottom: 0
};

export default TwitterLink;
