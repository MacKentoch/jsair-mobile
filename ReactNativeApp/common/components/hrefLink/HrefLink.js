'use strict';

import React, {
  Component,
  PropTypes
}                       from 'react';
import shallowCompare   from 'react-addons-shallow-compare';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Linking
}                       from 'react-native';
import { AppColors }    from '../../config';
import validator        from 'validator';

class HrefLink extends Component  {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { text, linkUrl } = this.props;

    if (validator.isURL(linkUrl)) {
      return (
        <TouchableHighlight
          underlayColor={AppColors.lightGrey}
          style={styles.container}
          onPress={this.handlesLinkUrlPress}>
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
  }

  handlesLinkUrlPress = () => {
    const { linkUrl } = this.props;
    Linking
      .openURL(linkUrl ? linkUrl : '')
      .catch(err => console.error('HrefLink : an error occurred', err));
  }
}

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
