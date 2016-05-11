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

const window    = Dimensions.get('window');

const EpisodeButton = (props) => {
  return (
    <TouchableHighlight
      underlayColor={AppColors.lightGrey}
      style={styles.container}
      onPress={props.onBtnPress}>
      <Text>
        {props.buttonText}
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
    width:            (window.width / 2) - 25,
    height:           40,
    borderColor:      AppColors.lightGrey,
    borderWidth:      2,
    backgroundColor:  AppColors.white,
    //flex:           1,
    //flexDirection:  'row',
    alignItems:       'center',
    justifyContent:   'center'
  }
});

export default EpisodeButton;
