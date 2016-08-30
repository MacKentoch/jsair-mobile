'use strict';

import React , {
  PropTypes
}                      from 'react';
import {
  Text,
  TouchableOpacity
}                      from 'react-native';

const TwitterLink = ({twitter, onTwitterPress, height, fontSize, marginTop, marginBottom}) => {
  const twitterStyle = {
    height:           height,
    marginTop:        marginTop,
    marginBottom:     marginTop,
    fontSize:         fontSize,
    backgroundColor:  'transparent'
  };

  return (
    <TouchableOpacity
      onPress={onTwitterPress}>
      <Text style={twitterStyle}>
        {twitter ? `@${twitter}` : ''}
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
