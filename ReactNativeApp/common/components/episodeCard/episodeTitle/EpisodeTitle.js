'use strict';

import React, {
  PropTypes
}                      from 'react';
import {
  StyleSheet,
  View,
  Text
}                      from 'react-native';
import { AppColors }   from '../../../../common/config';

const EpisodeTitle = ({episodeTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        {episodeTitle}
      </Text>
    </View>
  );
};

EpisodeTitle.propTypes = {
  episodeTitle: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex:           1,
    paddingLeft:    2,
    paddingRight:   2,
    alignItems:     'center',
    justifyContent: 'flex-start',
    flexWrap:       'wrap'
  },
  titleText: {
    fontSize:   24,
    textAlign:   'center',
    fontWeight: '500',
    color:      AppColors.darkGrey
  }
});

export default EpisodeTitle;
