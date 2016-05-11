'use strict';

import React            from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
}                       from 'react-native';
import {
  AppColors,
  AppConfig
}                       from '../../../common/config';
import * as Animatable  from 'react-native-animatable';

const SCREEN_WIDTH  = Dimensions.get('window').width;

const NoConnectivity = () => {
  const styles = SCREEN_WIDTH <= AppConfig.smallScreenMaxWidth ?
    smScreenStyles :
    supSmScreenStyles;

  return (
    <View style={styles.container}>
      <View style={styles.noConnectionContainer}>
        <Animatable.Text
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={styles.noConnection}>
          No Connection...
        </Animatable.Text>
      </View>
    </View>
  );
};

const supSmScreenStyles = StyleSheet.create({
  container: {
    flex:           1,
    flexDirection:  'column',
    alignItems:     'center',
    justifyContent: 'center'

  },
  noConnectionContainer: {
    alignItems:     'center',
    justifyContent: 'center'
  },
  noConnection: {
    fontSize:         32,
    textAlign:        'center',
    color:            AppColors.lightBlack,
    marginBottom:     10,
    backgroundColor:  'transparent'
  }
});

const smScreenStyles = StyleSheet.create({
  container: {
    flex:           1,
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'center'

  },
  noConnectionContainer: {
  },
  noConnection: {
    fontSize:         24,
    color:            AppColors.lightBlack,
    marginBottom:     10,
    backgroundColor:  'transparent'
  }
});

export default NoConnectivity;
