'use strict';

import React, {
  PropTypes
}                         from 'react';
import  {
  StyleSheet,
  View,
  Text
}                      from 'react-native';
import { AppColors }   from '../../../../common/config';

const TimeHeader = ({ episodeTime }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>
        {episodeTime}
      </Text>
    </View>
  );
};

TimeHeader.propTypes = {
  episodeTime: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'flex-end'
  },
  timeText: {
    fontSize:   11,
    fontWeight: '500',
    color:      AppColors.mainYellow
  }
});

export default TimeHeader;
