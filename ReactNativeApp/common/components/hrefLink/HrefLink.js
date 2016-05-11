'use strict';

import React, {
  PropTypes
}                      from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Linking
}                     from 'react-native';
import { AppColors }  from '../../config';
import validator      from 'validator';

const HrefLink = (props) => {
  const { text, linkUrl } = props;
  if (validator.isURL(linkUrl)) {
    return (
      <TouchableHighlight
        underlayColor={AppColors.lightGrey}
        style={styles.container}
        onPress={() => Linking.openURL(linkUrl ? linkUrl : '').catch(err => console.error('HrefLink : an error occurred', err))}>
        <Text style={styles.linkText}>
          {text}
        </Text>
      </TouchableHighlight>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.container}>
          <Text style={styles.noLinkText}>
            {text}
          </Text>
        </Text>
      </View>
    );
  }

};

HrefLink.propTypes = {
  text:     PropTypes.string.isRequired,
  linkUrl:  PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    borderColor:        AppColors.mainYellow,
    borderBottomWidth:  0.5
  },
  linkText: {

  },
  noLinkText: {

  }
});

export default HrefLink;
