'use strict';

import React, {
  PropTypes
}                     from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions
}                     from 'react-native';
import { AppColors }  from '../../config/appColors/AppColors';

const { width, height } = Dimensions.get('window');

const ScenesBackground = ({children}) => {
  return (
    <View style={styles.backgroundView}>
      <Image
        source={require('../../img/membersBackground.png')}
        resizeMode={'cover'}
        style={{width: width, height: height}}>
        {children}
      </Image>
    </View>
  );
};

ScenesBackground.propTypes = {
  children: PropTypes.node
};
const styles = StyleSheet.create({
  backgroundView: {
    backgroundColor: AppColors.ScenesBckgnd
  },
});

export default ScenesBackground;
