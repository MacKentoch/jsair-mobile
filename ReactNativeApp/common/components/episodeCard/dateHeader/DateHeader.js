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
import moment          from 'moment';

const DateHeader = ({episodeDate}) => {
  const episodeDateFormatted = moment(new Date(episodeDate)).format('ddd, MMM Do YYYY');
  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>
        {episodeDateFormatted}
      </Text>
    </View>
  );
};

DateHeader.propTypes = {
  episodeDate: PropTypes.string.isRequired,
  dateFormat:  PropTypes.string
};

DateHeader.defaultProps = {
  dateFormat: 'MMM Do YYYY'
};

const styles = StyleSheet.create({
  container: {
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'flex-start'
  },
  dateText: {
    fontSize:   16,
    fontWeight: '500',
    color:      AppColors.mainYellow
  }
});

export default DateHeader;
