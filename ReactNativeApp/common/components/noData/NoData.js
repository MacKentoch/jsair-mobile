'use strict';

import React , {
  PropTypes
}                       from 'react';
import {
  StyleSheet,
  View,
  Text
}                       from 'react-native';
import {
  AppColors,
  AppConfig
}                       from '../../../common/config';
import Icon             from 'react-native-vector-icons/Ionicons';

const NoData = (props) => {
  return (
    <View style={styles.noDataContainer}>
      <Icon
        style={styles.noDataIcon}
        name={props.ionIconName}
        size={76}
        color={AppColors.darkGrey}
      />
      <Text style={styles.noDataText}>
        {props.noDataText}
      </Text>
    </View>
  );
};

NoData.propTypes = {
  ionIconName: PropTypes.string,
  noDataText:  PropTypes.string
};

NoData.defaultProps = {
  ionIconName: AppConfig.noData.defaultIonIconName,
  noDataText:  AppConfig.noData.defaultNoDataText
};

const styles = StyleSheet.create({
  noDataContainer: {
    marginTop:      70,
    flexDirection:  'column',
    alignItems:     'center',
    justifyContent: 'center'
  },
  noDataIcon: {
    marginBottom: 20
  },
  noDataText: {
    fontSize:   16,
    color:      AppColors.darkGrey
  }
});

export default NoData;
