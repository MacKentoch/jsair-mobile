'use strict';

import React, {
  Component,
  PropTypes
}                      from 'react';
import shallowCompare  from 'react-addons-shallow-compare';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking
}                      from 'react-native';
import { TwitterLink } from '../../../components';

class GuestBox extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {guest: { photo, name, twitter }} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.photoAvatar}>
          <Image
            style={styles.guestPhoto}
            resizeMode={'stretch'}
            source={photo}
            defaultSource={require('../../../img/ui/defaultImage.png')}
          />
        </View>
        <View style={styles.guestInfoContainer}>
          <Text style={styles.guestName}>
            {name}
          </Text>
          <TwitterLink
            twitter={twitter}
            marginBottom={20}
            marginTop={5}
            fontSize={11}
            onTwitterPress={this.handlesTwitterPress}
          />
        </View>
      </View>
    );
  }

  handlesTwitterPress = () => {
    const { guest: { twitter } } = this.props;

    if (twitter) {
      return Linking
        .openURL(`https://twitter.com/${twitter}`)
        .catch(err => console.error('Guest twitter link : an error occurred', err));
    }
  }
}

GuestBox.propTypes = {
  guest: PropTypes.shape({
    photo:      PropTypes.any,
    name:       PropTypes.string.isRequired,
    twitter:    PropTypes.string
  }).isRequired
};

const styles = StyleSheet.create({
  container: {
    width:            120,
    height:           140
  },
  photoAvatar: {
    flexDirection:    'column',
    alignItems:       'center',
    justifyContent:   'center',
    marginTop:        15,
  },
  guestPhoto: {
    width:            70,
    height:           70,
    borderRadius:     35
  },
  guestInfoContainer: {
    flexDirection:    'column',
    alignItems:       'center',
    justifyContent:   'center'
  },
  guestName: {
    fontSize: 12,
  },
  guestTwitter: {
    fontSize:   12,
    marginTop:  10
  }
});

export default GuestBox;
