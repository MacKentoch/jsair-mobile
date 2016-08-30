'use strict';

import React, {
  PropTypes
}                      from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight
}                      from 'react-native';
import { AppColors }   from '../../../../common/config';

const { width } = Dimensions.get('window');

const EpisodeButton = ({ onBtnPress, buttonText }) => {
  return (
    <TouchableHighlight
      underlayColor={AppColors.lightGrey}
      style={styles.container}
      onPress={onBtnPress}>
      <Text>
        {buttonText}
      </Text>
    </TouchableHighlight>
  );
};

EpisodeButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onBtnPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    width:            (width / 2) - 25,
    height:           40,
    borderColor:      AppColors.lightGrey,
    borderWidth:      2,
    backgroundColor:  AppColors.white,
    alignItems:       'center',
    justifyContent:   'center'
  }
});

export default EpisodeButton;
