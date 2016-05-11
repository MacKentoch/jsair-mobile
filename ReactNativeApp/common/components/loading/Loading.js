'use strict';

import React            from 'react';
import {
  StyleSheet,
  View,
  Text
}                       from 'react-native';
import { AppColors }    from '../../../common/config';
import Progress         from 'react-native-progress/Bar';
import * as Animatable  from 'react-native-animatable';

const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loadingContainer}>
        <Animatable.Text
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={styles.loadingMessage}>
          Loading...
        </Animatable.Text>
        <Progress
          progress={0.3}
          indeterminate={true}
          width={150}
          color={AppColors.mainYellow}
          style={styles.progress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:           1,
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'center'

  },
  loadingContainer: {
  },
  loadingMessage: {
    fontSize:         32,
    color:            AppColors.lightBlack,
    marginBottom:     10,
    backgroundColor:  'transparent'
  },
  loadingImage: {
    marginTop:  15
  },
  progress: {
    borderWidth: 0
  }
});

export default Loading;
