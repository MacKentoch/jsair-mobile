'use strict';

import React, {
  PropTypes
}                         from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Linking
}                         from 'react-native';
import {
  AppColors,
  AppConfig
}                         from '../../../common/config';
import { TwitterLink }    from '../../components';

const SCREEN_WIDTH  = Dimensions.get('window').width;

const Member = (props) => {
  const styles = SCREEN_WIDTH <= AppConfig.smallScreenMaxWidth ?
    smScreenStyles :
    supSmScreenStyles;

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image
          style={styles.memberPhoto}
          resizeMode={'stretch'}
          source={props.photo}
          defaultSource={require('../../img/ui/defaultImage.png')}
        />
      </View>
      <View style={styles.memberInfo}>
        <Text style={styles.memberName}>
          {props.name}
        </Text>
        <TwitterLink
          twitter={props.twitter}
          onTwitterPress={() => Linking.openURL(`${props.link}`).catch(err => console.error('Member twitter link : an error occurred', err))}
        />
      </View>
    </View>
  );
};

Member.propTypes = {
  photo:        PropTypes.any.isRequired,
  name:         PropTypes.string.isRequired,
  twitter:      PropTypes.string.isRequired,
  link:         PropTypes.string.isRequired
};

const supSmScreenStyles = StyleSheet.create({
  container: {
    flexDirection:  'row',
    alignItems:     'center',
    width:          SCREEN_WIDTH * 0.80,
    height:         130,
    marginTop:      20,
    marginBottom:   20
  },
  photoContainer: {
  },
  memberPhoto: {
    width:            110,
    height:           110,
    borderRadius:     55
  },
  memberInfo: {
    marginLeft:     15,
    flexDirection:  'column',
    alignItems:     'flex-start'
  },
  memberName: {
    height:           32,
    fontSize:         18,
    color:            AppColors.lightBlack,
    backgroundColor:  'transparent'
  },
  memberTwitter: {
    height:           26,
    marginTop:        10,
    fontSize:         14,
    backgroundColor: 'transparent'
  }
});

const smScreenStyles = StyleSheet.create({
  container: {
    flexDirection:  'row',
    alignItems:     'center',
    width:          SCREEN_WIDTH * 0.80,
    height:         130,
    marginTop:      20,
    marginBottom:   20
  },
  photoContainer: {
  },
  memberPhoto: {
    width:            90,
    height:           90,
    borderRadius:     45
  },
  memberInfo: {
    marginLeft:     15,
    flexDirection:  'column',
    alignItems:     'flex-start'
  },
  memberName: {
    height:           32,
    fontSize:         16,
    color:            AppColors.lightBlack,
    backgroundColor:  'transparent'
  },
  memberTwitter: {
    height:           26,
    marginTop:        10,
    fontSize:         14,
    backgroundColor: 'transparent'
  }
});


export default Member;
