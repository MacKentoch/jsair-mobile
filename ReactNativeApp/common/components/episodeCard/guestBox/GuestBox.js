'use strict';

import React, {
  PropTypes
}                      from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking
}                      from 'react-native';
import { TwitterLink } from '../../../components';

const GuestBox = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.photoAvatar}>
        <Image
          style={styles.guestPhoto}
          resizeMode={'stretch'}
          source={props.guest.photo}
          defaultSource={require('../../../img/ui/defaultImage.png')}
        />
      </View>
      <View style={styles.guestInfoContainer}>
        <Text style={styles.guestName}>
          {props.guest.name}
        </Text>
        <TwitterLink
          twitter={props.guest.twitter}
          marginBottom={20}
          marginTop={5}
          fontSize={11}
          onTwitterPress={
            () => {
              if (props.guest.twitter) {
                return Linking
                  .openURL(`https://twitter.com/${props.guest.twitter}`)
                  .catch(err => console.error('Guest twitter link : an error occurred', err));
              }
              return null;
            }
          }
        />
      </View>
    </View>
  );
};

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
