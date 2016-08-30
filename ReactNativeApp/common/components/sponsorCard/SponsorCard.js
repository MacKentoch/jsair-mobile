'use strict';

import React , {
  Component,
  PropTypes
}                         from 'react';
import shallowCompare     from 'react-addons-shallow-compare';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking
}                         from 'react-native';
import { AppColors }      from '../../../common/config';


class SponsorCard extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { image, name, link, tagline } = this.props;
    return (
      <TouchableOpacity
        onPress={() => Linking.openURL(link).catch(err => console.error('SponsorCardPressable : an error occurred', err))}>
        <View style={styles.row}>
          <View style={styles.container}>
            <View style={styles.photoContainer}>
              <Image
                style={styles.sponsorPhoto}
                resizeMode={'stretch'}
                source={image}
                defaultSource={require('../../img/ui/defaultImage.png')}
              />
            </View>
            <View style={styles.sponsorInfo}>
              <Text style={styles.sponsorName}>
                {name}
              </Text>
              <Text style={styles.sponsorTagLine}>
                {tagline}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

SponsorCard.propTypes = {
  image:      PropTypes.any.isRequired,
  name:       PropTypes.string.isRequired,
  link:       PropTypes.string.isRequired,
  tagline:    PropTypes.string.isRequired,
  startDate:  PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  row: {
    alignItems:       'center',
    justifyContent:   'flex-start',

    padding:          2,
    marginTop:        15,
    marginLeft:       5,
    marginRight:      5,
    marginBottom:     40,
    width:            150,
    backgroundColor:  AppColors.white
  },
  container: {
    flex: 1,
    flexDirection:  'column',
    alignItems:     'center'
  },
  photoContainer: {
    alignItems:     'center',
    justifyContent: 'flex-start'
  },
  sponsorPhoto: {
    width:            110,
    height:           110,
    marginTop:        5
  },
  sponsorInfo: {
    flexDirection:  'column',
    alignItems:     'center',
    justifyContent: 'flex-start',
    height:         70
  },
  sponsorName: {
    fontSize:           16,
    color:              AppColors.lightBlack,
    borderBottomWidth:  1,
    borderColor:        AppColors.lightBlack
  },
  sponsorTagLine: {
    marginTop:  5,
    fontSize:   11
  },
  sponsorLink: {
    marginTop:  2,
    fontSize:   11
  }
});

export default SponsorCard;
